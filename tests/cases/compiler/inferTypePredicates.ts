// @strictNullChecks: true
// @declaration: true

// https://github.com/microsoft/TypeScript/issues/16069

const numsOrNull = [1, 2, 3, 4, null];
const filteredNumsTruthy: number[] = numsOrNull.filter(x => !!x);  // should error
const filteredNumsNonNullish: number[] = numsOrNull.filter(x => x !== null);  // should ok

const evenSquaresInline: number[] =  // should error
    [1, 2, 3, 4]
        .map(x => x % 2 === 0 ? x * x : null)
        .filter(x => !!x); // tests truthiness, not non-nullishness

const isTruthy = (x: number | null) => !!x;

const evenSquares: number[] =  // should error
    [1, 2, 3, 4]
    .map(x => x % 2 === 0 ? x * x : null)
      .filter(isTruthy);

const evenSquaresNonNull: number[] =  // should ok
    [1, 2, 3, 4]
    .map(x => x % 2 === 0 ? x * x : null)
    .filter(x => x !== null);

function isNonNull(x: number | null) {
  return x !== null;
}

// factoring out a boolean works thanks to aliased discriminants
function isNonNullVar(x: number | null) {
  const ok = x !== null;
  return ok;
}

function isNonNullGeneric<T>(x: T) {
  return x !== null;
}

// Type guards can flow between functions
const myGuard = (o: string | undefined): o is string => !!o;
const mySecondGuard = (o: string | undefined) => myGuard(o);

// https://github.com/microsoft/TypeScript/issues/16069#issuecomment-1327449914
// This doesn't work because the false condition prevents type guard inference.
// Breaking up the filters does work.
type MyObj = { data?: string };
type MyArray = { list?: MyObj[] }[];
const myArray: MyArray = [];

const result = myArray
  .map((arr) => arr.list)
  .filter((arr) => arr && arr.length)
  .map((arr) => arr // should error
    .filter((obj) => obj && obj.data)
    .map(obj => JSON.parse(obj.data))  // should error
  );

const result2 = myArray
  .map((arr) => arr.list)
  .filter((arr) => !!arr)
  .filter(arr => arr.length)
  .map((arr) => arr  // should ok
    .filter((obj) => obj)
    // inferring a guard here would require https://github.com/microsoft/TypeScript/issues/42384
    .filter(obj => !!obj.data)
    .map(obj => JSON.parse(obj.data))
  );

// https://github.com/microsoft/TypeScript/issues/16069#issuecomment-1183547889
type Foo = {
  foo: string;
}
type Bar = Foo & {
  bar: string;
}

const list: (Foo | Bar)[] = [];
const resultBars: Bar[] = list.filter((value) => 'bar' in value);  // should ok

function isBarNonNull(x: Foo | Bar | null) {
  return ('bar' in x!);
}
const fooOrBar = list[0];
if (isBarNonNull(fooOrBar)) {
  const t: Bar = fooOrBar;  // should ok
}

// https://github.com/microsoft/TypeScript/issues/38390#issuecomment-626019466
// Ryan's example (currently legal):
const a = [1, "foo", 2, "bar"].filter(x => typeof x === "string");
a.push(10);

// Defer to explicit type guards, even when they're incorrect.
function backwardsGuard(x: number|string): x is number {
  return typeof x === 'string';
}

// Partition tests. The "false" case matters.
function isString(x: string | number) {
  return typeof x === 'string';
}

declare let strOrNum: string | number;
if (isString(strOrNum)) {
  let t: string = strOrNum;  // should ok
} else {
  let t: number = strOrNum;  // should ok
}

function flakyIsString(x: string | number) {
  return typeof x === 'string' && Math.random() > 0.5;
}
if (flakyIsString(strOrNum)) {
  let t: string = strOrNum;  // should error
} else {
  let t: number = strOrNum;  // should error
}

function isDate(x: object) {
  return x instanceof Date;
}
function flakyIsDate(x: object) {
  return x instanceof Date && Math.random() > 0.5;
}

declare let maybeDate: object;
if (isDate(maybeDate)) {
  let t: Date = maybeDate;  // should ok
} else {
  let t: object = maybeDate;  // should ok
}

if (flakyIsDate(maybeDate)) {
  let t: Date = maybeDate;  // should error
} else {
  let t: object = maybeDate;  // should ok
}

// This should not infer a type guard since the value on which we do the refinement
// is not related to the original parameter.
function irrelevantIsNumber(x: string | number) {
	x = Math.random() < 0.5 ? "string" : 123;
  return typeof x === 'string';
}
function irrelevantIsNumberDestructuring(x: string | number) {
	[x] = [Math.random() < 0.5 ? "string" : 123];
  return typeof x === 'string';
}

// Cannot infer a type guard for either param because of the false case.
function areBothNums(x: string|number, y: string|number) {
  return typeof x === 'number' && typeof y === 'number';
}

// Could potentially infer a type guard here but it would require more bookkeeping.
function doubleReturn(x: string|number) {
  if (typeof x === 'string') {
    return true;
  }
  return false;
}

function guardsOneButNotOthers(a: string|number, b: string|number, c: string|number) {
  return typeof b === 'string';
}

// Checks that there are no string escaping issues
function dunderguard(__x: number | string) {
  return typeof __x  === 'string';
}

// could infer a type guard here but it doesn't seem that helpful.
const booleanIdentity = (x: boolean) => x;

// we infer "x is number | true" which is accurate but of debatable utility.
const numOrBoolean = (x: number | boolean) => typeof x === 'number' || x;

// inferred guards in methods
interface NumberInferrer {
  isNumber(x: number | string): x is number;
}
class Inferrer implements NumberInferrer {
  isNumber(x: number | string) {  // should ok
    return typeof x === 'number';
  }
}
declare let numOrStr: number | string;
const inf = new Inferrer();
if (inf.isNumber(numOrStr)) {
  let t: number = numOrStr;  // should ok
} else {
  let t: string = numOrStr;  // should ok
}

// Type predicates are not inferred on "this"
class C1 {
  isC2() {
    return this instanceof C2;
  }
}
class C2 extends C1 {
  z = 0;
}
declare let c: C1;
if (c.isC2()) {
  let c2: C2 = c;  // should error
}

function doNotRefineDestructuredParam({x, y}: {x: number | null, y: number}) {
  return typeof x === 'number';
}

// The type predicate must remain valid when the function is called with subtypes.
function isShortString(x: unknown) {
  return typeof x === "string" && x.length < 10;
}

declare let str: string;
if (isShortString(str)) {
  str.charAt(0);  // should ok
} else {
  str.charAt(0);  // should ok
}

function isStringFromUnknown(x: unknown) {
  return typeof x === "string";
}
if (isStringFromUnknown(str)) {
  str.charAt(0);  // should OK
} else {
  let t: never = str;  // should OK
}

// infer a union type
function isNumOrStr(x: unknown) {
  return (typeof x === "number" || typeof x === "string");
}
declare let unk: unknown;
if (isNumOrStr(unk)) {
  let t: number | string = unk;  // should ok
}

// A function can be a type predicate even if it throws.
function assertAndPredicate(x: string | number | Date) {
  if (x instanceof Date) {
    throw new Error();
  }
  return typeof x === 'string';
}

declare let snd: string | number | Date;
if (assertAndPredicate(snd)) {
  let t: string = snd; // should error
}

function isNumberWithThis(this: Date, x: number | string) {
  return typeof x === 'number';
}

function narrowFromAny(x: any) {
  return typeof x === 'number';
}

const noInferenceFromRest = (...f: ["a" | "b"]) => f[0] === "a";
const noInferenceFromImpossibleRest = (...f: []) => typeof f === "undefined";

function inferWithRest(x: string | null, ...f: ["a", "b"]) {
  return typeof x === 'string';
}
