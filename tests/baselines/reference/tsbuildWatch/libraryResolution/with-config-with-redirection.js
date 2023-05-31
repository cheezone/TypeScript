currentDirectory:: /home/src/projects useCaseSensitiveFileNames: false
Input::
//// [/home/src/projects/project1/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project1/file.ts]
export const file = 10;

//// [/home/src/projects/project1/core.d.ts]
export const core = 10;

//// [/home/src/projects/project1/index.ts]
export const x = "type1";

//// [/home/src/projects/project1/file2.ts]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>
/// <reference lib="es5"/>


//// [/home/src/projects/project1/tsconfig.json]
{"compilerOptions":{"composite":true,"typeRoots":["./typeroot1"],"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/project1/typeroot1/sometype/index.d.ts]
export type TheNum = "type1";

//// [/home/src/projects/project2/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project2/index.ts]
export const y = 10

//// [/home/src/projects/project2/tsconfig.json]
{"compilerOptions":{"composite":true,"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/project3/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project3/index.ts]
export const z = 10

//// [/home/src/projects/project3/tsconfig.json]
{"compilerOptions":{"composite":true,"lib":["es5","dom"],"traceResolution":true}}

//// [/home/src/projects/project4/utils.d.ts]
export const y = 10;

//// [/home/src/projects/project4/index.ts]
export const z = 10

//// [/home/src/projects/project4/tsconfig.json]
{"compilerOptions":{"composite":true,"lib":["esnext","dom","webworker"],"traceResolution":true}}

//// [/home/src/lib/lib.es5.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/lib/lib.esnext.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/lib/lib.dom.d.ts]
interface DOMInterface { }

//// [/home/src/lib/lib.webworker.d.ts]
interface WebWorkerInterface { }

//// [/home/src/lib/lib.scripthost.d.ts]
interface ScriptHostInterface { }

//// [/home/src/projects/node_modules/@typescript/unlreated/index.d.ts]
export const unrelated = 10;

//// [/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts]
interface DOMInterface { }

//// [/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts]
interface WebworkerInterface { }

//// [/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts]
interface ScriptHostInterface { }


/home/src/lib/tsc.js -b -w project1 project2 project3 project4 --verbose --explainFiles --extendedDiagnostics
Output::
[[90m12:01:33 AM[0m] Starting compilation in watch mode...

[[90m12:01:34 AM[0m] Projects in this build: 
    * project1/tsconfig.json
    * project2/tsconfig.json
    * project3/tsconfig.json
    * project4/tsconfig.json

[[90m12:01:35 AM[0m] Project 'project1/tsconfig.json' is out of date because output file 'project1/tsconfig.tsbuildinfo' does not exist

[[90m12:01:36 AM[0m] Building project '/home/src/projects/project1/tsconfig.json'...

======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
File '/home/src/projects/node_modules/@typescript/lib-webworker/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'.
======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
======== Resolving module '@typescript/lib-scripthost' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.scripthost.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-scripthost' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-scripthost'
File '/home/src/projects/node_modules/@typescript/lib-scripthost/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'.
======== Module name '@typescript/lib-scripthost' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts'. ========
======== Resolving module '@typescript/lib-es5' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-es5'
File '/home/src/projects/node_modules/@typescript/lib-es5/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
======== Resolving type reference directive 'sometype', containing file '/home/src/projects/project1/__inferred type names__.ts', root directory '/home/src/projects/project1/typeroot1'. ========
Resolving with primary search path '/home/src/projects/project1/typeroot1'.
File '/home/src/projects/project1/typeroot1/sometype.d.ts' does not exist.
File '/home/src/projects/project1/typeroot1/sometype/package.json' does not exist.
File '/home/src/projects/project1/typeroot1/sometype/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/project1/typeroot1/sometype/index.d.ts', result '/home/src/projects/project1/typeroot1/sometype/index.d.ts'.
======== Type reference directive 'sometype' was successfully resolved to '/home/src/projects/project1/typeroot1/sometype/index.d.ts', primary: true. ========
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project1/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project1/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
File '/home/src/projects/node_modules/@typescript/lib-dom/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
node_modules/@typescript/lib-webworker/index.d.ts
  Library referenced via 'webworker' from file 'project1/file2.ts'
node_modules/@typescript/lib-scripthost/index.d.ts
  Library referenced via 'scripthost' from file 'project1/file2.ts'
node_modules/@typescript/lib-es5/index.d.ts
  Library referenced via 'es5' from file 'project1/file2.ts'
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project1/core.d.ts
  Matched by default include pattern '**/*'
project1/file.ts
  Matched by default include pattern '**/*'
project1/file2.ts
  Matched by default include pattern '**/*'
project1/index.ts
  Matched by default include pattern '**/*'
project1/utils.d.ts
  Matched by default include pattern '**/*'
project1/typeroot1/sometype/index.d.ts
  Matched by default include pattern '**/*'
  Entry point for implicit type library 'sometype'
[[90m12:01:54 AM[0m] Project 'project2/tsconfig.json' is out of date because output file 'project2/tsconfig.tsbuildinfo' does not exist

[[90m12:01:55 AM[0m] Building project '/home/src/projects/project2/tsconfig.json'...

======== Resolving module '@typescript/lib-es5' from '/home/src/projects/project2/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project2/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-es5'
Resolution for module '@typescript/lib-es5' was found in cache from location '/home/src/projects'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project2/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project2/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Resolution for module '@typescript/lib-dom' was found in cache from location '/home/src/projects'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
node_modules/@typescript/lib-es5/index.d.ts
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project2/index.ts
  Matched by default include pattern '**/*'
project2/utils.d.ts
  Matched by default include pattern '**/*'
[[90m12:02:05 AM[0m] Project 'project3/tsconfig.json' is out of date because output file 'project3/tsconfig.tsbuildinfo' does not exist

[[90m12:02:06 AM[0m] Building project '/home/src/projects/project3/tsconfig.json'...

======== Resolving module '@typescript/lib-es5' from '/home/src/projects/project3/__lib_node_modules_lookup_lib.es5.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-es5' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project3/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-es5'
Resolution for module '@typescript/lib-es5' was found in cache from location '/home/src/projects'.
======== Module name '@typescript/lib-es5' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts'. ========
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project3/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project3/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Resolution for module '@typescript/lib-dom' was found in cache from location '/home/src/projects'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
node_modules/@typescript/lib-es5/index.d.ts
  Library 'lib.es5.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
project3/index.ts
  Matched by default include pattern '**/*'
project3/utils.d.ts
  Matched by default include pattern '**/*'
[[90m12:02:16 AM[0m] Project 'project4/tsconfig.json' is out of date because output file 'project4/tsconfig.tsbuildinfo' does not exist

[[90m12:02:17 AM[0m] Building project '/home/src/projects/project4/tsconfig.json'...

======== Resolving module '@typescript/lib-esnext' from '/home/src/projects/project4/__lib_node_modules_lookup_lib.esnext.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-esnext' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project4/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-esnext'
File '/home/src/projects/node_modules/@typescript/lib-esnext/package.json' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-esnext.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-esnext.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-esnext.d.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-esnext/index.ts' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-esnext/index.tsx' does not exist.
File '/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts' exists - use it as a name resolution result.
Resolving real path for '/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts', result '/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts'.
======== Module name '@typescript/lib-esnext' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts'. ========
======== Resolving module '@typescript/lib-dom' from '/home/src/projects/project4/__lib_node_modules_lookup_lib.dom.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-dom' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project4/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-dom'
Resolution for module '@typescript/lib-dom' was found in cache from location '/home/src/projects'.
======== Module name '@typescript/lib-dom' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts'. ========
======== Resolving module '@typescript/lib-webworker' from '/home/src/projects/project4/__lib_node_modules_lookup_lib.webworker.d.ts__.ts'. ========
Explicitly specified module resolution kind: 'Node10'.
Loading module '@typescript/lib-webworker' from 'node_modules' folder, target file types: TypeScript, Declaration.
Directory '/home/src/projects/project4/node_modules' does not exist, skipping all lookups in it.
Scoped package detected, looking in 'typescript__lib-webworker'
Resolution for module '@typescript/lib-webworker' was found in cache from location '/home/src/projects'.
======== Module name '@typescript/lib-webworker' was successfully resolved to '/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts'. ========
node_modules/@typescript/lib-esnext/index.d.ts
  Library 'lib.esnext.d.ts' specified in compilerOptions
node_modules/@typescript/lib-dom/index.d.ts
  Library 'lib.dom.d.ts' specified in compilerOptions
node_modules/@typescript/lib-webworker/index.d.ts
  Library 'lib.webworker.d.ts' specified in compilerOptions
project4/index.ts
  Matched by default include pattern '**/*'
project4/utils.d.ts
  Matched by default include pattern '**/*'
[[90m12:02:27 AM[0m] Found 0 errors. Watching for file changes.

FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/tsconfig.json 2000 undefined Config file /home/src/projects/project1/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1 1 undefined Wild card directory /home/src/projects/project1/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project1 1 undefined Wild card directory /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/core.d.ts 250 undefined Source file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/file.ts 250 undefined Source file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/file2.ts 250 undefined Source file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/index.ts 250 undefined Source file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/utils.d.ts 250 undefined Source file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1/sometype/index.d.ts 250 undefined Source file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-webworker/package.json 2000 undefined package.json file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-scripthost/package.json 2000 undefined package.json file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-es5/package.json 2000 undefined package.json file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project1/typeroot1/sometype/package.json 2000 undefined package.json file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-dom/package.json 2000 undefined package.json file /home/src/projects/project1/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project2/tsconfig.json 2000 undefined Config file /home/src/projects/project2/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project2 1 undefined Wild card directory /home/src/projects/project2/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project2 1 undefined Wild card directory /home/src/projects/project2/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project2/index.ts 250 undefined Source file /home/src/projects/project2/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project2/utils.d.ts 250 undefined Source file /home/src/projects/project2/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project3/tsconfig.json 2000 undefined Config file /home/src/projects/project3/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project3 1 undefined Wild card directory /home/src/projects/project3/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project3 1 undefined Wild card directory /home/src/projects/project3/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project3/index.ts 250 undefined Source file /home/src/projects/project3/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project3/utils.d.ts 250 undefined Source file /home/src/projects/project3/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project4/tsconfig.json 2000 undefined Config file /home/src/projects/project4/tsconfig.json
DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project4 1 undefined Wild card directory /home/src/projects/project4/tsconfig.json
Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /home/src/projects/project4 1 undefined Wild card directory /home/src/projects/project4/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project4/index.ts 250 undefined Source file /home/src/projects/project4/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/project4/utils.d.ts 250 undefined Source file /home/src/projects/project4/tsconfig.json
FileWatcher:: Added:: WatchInfo: /home/src/projects/node_modules/@typescript/lib-esnext/package.json 2000 undefined package.json file /home/src/projects/project4/tsconfig.json


Program root files: ["/home/src/projects/project1/core.d.ts","/home/src/projects/project1/file.ts","/home/src/projects/project1/file2.ts","/home/src/projects/project1/index.ts","/home/src/projects/project1/utils.d.ts","/home/src/projects/project1/typeroot1/sometype/index.d.ts"]
Program options: {"composite":true,"typeRoots":["/home/src/projects/project1/typeroot1"],"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project1/tsconfig.json"}
Program structureReused: Not
Program files::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts
/home/src/projects/project1/typeroot1/sometype/index.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/project1/core.d.ts
/home/src/projects/project1/file.ts
/home/src/projects/project1/file2.ts
/home/src/projects/project1/index.ts
/home/src/projects/project1/utils.d.ts
/home/src/projects/project1/typeroot1/sometype/index.d.ts

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-scripthost/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/project1/core.d.ts (used version)
/home/src/projects/project1/file.ts (computed .d.ts during emit)
/home/src/projects/project1/file2.ts (computed .d.ts during emit)
/home/src/projects/project1/index.ts (computed .d.ts during emit)
/home/src/projects/project1/utils.d.ts (used version)
/home/src/projects/project1/typeroot1/sometype/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)

Program root files: ["/home/src/projects/project2/index.ts","/home/src/projects/project2/utils.d.ts"]
Program options: {"composite":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project2/tsconfig.json"}
Program structureReused: Not
Program files::
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/project2/index.ts
/home/src/projects/project2/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/project2/index.ts
/home/src/projects/project2/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/project2/index.ts (computed .d.ts during emit)
/home/src/projects/project2/utils.d.ts (used version)

Program root files: ["/home/src/projects/project3/index.ts","/home/src/projects/project3/utils.d.ts"]
Program options: {"composite":true,"lib":["lib.es5.d.ts","lib.dom.d.ts"],"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project3/tsconfig.json"}
Program structureReused: Not
Program files::
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/project3/index.ts
/home/src/projects/project3/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/project3/index.ts
/home/src/projects/project3/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-es5/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/project3/index.ts (computed .d.ts during emit)
/home/src/projects/project3/utils.d.ts (used version)

Program root files: ["/home/src/projects/project4/index.ts","/home/src/projects/project4/utils.d.ts"]
Program options: {"composite":true,"lib":["lib.esnext.d.ts","lib.dom.d.ts","lib.webworker.d.ts"],"traceResolution":true,"watch":true,"explainFiles":true,"extendedDiagnostics":true,"configFilePath":"/home/src/projects/project4/tsconfig.json"}
Program structureReused: Not
Program files::
/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/project4/index.ts
/home/src/projects/project4/utils.d.ts

Semantic diagnostics in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts
/home/src/projects/project4/index.ts
/home/src/projects/project4/utils.d.ts

Shape signatures in builder refreshed for::
/home/src/projects/node_modules/@typescript/lib-esnext/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-dom/index.d.ts (used version)
/home/src/projects/node_modules/@typescript/lib-webworker/index.d.ts (used version)
/home/src/projects/project4/index.ts (computed .d.ts during emit)
/home/src/projects/project4/utils.d.ts (used version)

PolledWatches::
/home/src/projects/node_modules/@typescript/lib-dom/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/node_modules/@typescript/lib-es5/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/node_modules/@typescript/lib-esnext/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/node_modules/@typescript/lib-scripthost/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/node_modules/@typescript/lib-webworker/package.json: *new*
  {"pollingInterval":2000}
/home/src/projects/project1/typeroot1/sometype/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/home/src/projects/project1/core.d.ts: *new*
  {}
/home/src/projects/project1/file.ts: *new*
  {}
/home/src/projects/project1/file2.ts: *new*
  {}
/home/src/projects/project1/index.ts: *new*
  {}
/home/src/projects/project1/tsconfig.json: *new*
  {}
/home/src/projects/project1/typeroot1/sometype/index.d.ts: *new*
  {}
/home/src/projects/project1/utils.d.ts: *new*
  {}
/home/src/projects/project2/index.ts: *new*
  {}
/home/src/projects/project2/tsconfig.json: *new*
  {}
/home/src/projects/project2/utils.d.ts: *new*
  {}
/home/src/projects/project3/index.ts: *new*
  {}
/home/src/projects/project3/tsconfig.json: *new*
  {}
/home/src/projects/project3/utils.d.ts: *new*
  {}
/home/src/projects/project4/index.ts: *new*
  {}
/home/src/projects/project4/tsconfig.json: *new*
  {}
/home/src/projects/project4/utils.d.ts: *new*
  {}

FsWatchesRecursive::
/home/src/projects/project1: *new*
  {}
/home/src/projects/project2: *new*
  {}
/home/src/projects/project3: *new*
  {}
/home/src/projects/project4: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/home/src/projects/project1/file.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file = void 0;
exports.file = 10;


//// [/home/src/projects/project1/file.d.ts]
export declare const file = 10;


//// [/home/src/projects/project1/file2.js]
/// <reference lib="webworker"/>
/// <reference lib="scripthost"/>
/// <reference lib="es5"/>


//// [/home/src/projects/project1/file2.d.ts]
/// <reference lib="webworker" />
/// <reference lib="scripthost" />
/// <reference lib="es5" />


//// [/home/src/projects/project1/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = "type1";


//// [/home/src/projects/project1/index.d.ts]
export declare const x = "type1";


//// [/home/src/projects/project1/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../node_modules/@typescript/lib-webworker/index.d.ts","../node_modules/@typescript/lib-scripthost/index.d.ts","../node_modules/@typescript/lib-es5/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","./core.d.ts","./file.ts","./file2.ts","./index.ts","./utils.d.ts","./typeroot1/sometype/index.d.ts"],"fileInfos":[{"version":"-7827135529-interface WebworkerInterface { }","affectsGlobalScope":true},{"version":"-5403980302-interface ScriptHostInterface { }","affectsGlobalScope":true},{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true},"-15683237936-export const core = 10;",{"version":"-16628394009-export const file = 10;","signature":"-9025507999-export declare const file = 10;\n"},{"version":"-11916614574-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n","signature":"-14493813102-/// <reference lib=\"webworker\" />\n/// <reference lib=\"scripthost\" />\n/// <reference lib=\"es5\" />\n"},{"version":"-11532698187-export const x = \"type1\";","signature":"-5899226897-export declare const x = \"type1\";\n"},"-13729955264-export const y = 10;","-12476477079-export type TheNum = \"type1\";"],"root":[[5,10]],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[4,3,2,1,5,6,7,8,10,9],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project1/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../node_modules/@typescript/lib-webworker/index.d.ts",
      "../node_modules/@typescript/lib-scripthost/index.d.ts",
      "../node_modules/@typescript/lib-es5/index.d.ts",
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./utils.d.ts",
      "./typeroot1/sometype/index.d.ts"
    ],
    "fileInfos": {
      "../node_modules/@typescript/lib-webworker/index.d.ts": {
        "original": {
          "version": "-7827135529-interface WebworkerInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-7827135529-interface WebworkerInterface { }",
        "signature": "-7827135529-interface WebworkerInterface { }",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-scripthost/index.d.ts": {
        "original": {
          "version": "-5403980302-interface ScriptHostInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-5403980302-interface ScriptHostInterface { }",
        "signature": "-5403980302-interface ScriptHostInterface { }",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-es5/index.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-dom/index.d.ts": {
        "original": {
          "version": "-8673759361-interface DOMInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-8673759361-interface DOMInterface { }",
        "signature": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true
      },
      "./core.d.ts": {
        "version": "-15683237936-export const core = 10;",
        "signature": "-15683237936-export const core = 10;"
      },
      "./file.ts": {
        "original": {
          "version": "-16628394009-export const file = 10;",
          "signature": "-9025507999-export declare const file = 10;\n"
        },
        "version": "-16628394009-export const file = 10;",
        "signature": "-9025507999-export declare const file = 10;\n"
      },
      "./file2.ts": {
        "original": {
          "version": "-11916614574-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n",
          "signature": "-14493813102-/// <reference lib=\"webworker\" />\n/// <reference lib=\"scripthost\" />\n/// <reference lib=\"es5\" />\n"
        },
        "version": "-11916614574-/// <reference lib=\"webworker\"/>\n/// <reference lib=\"scripthost\"/>\n/// <reference lib=\"es5\"/>\n",
        "signature": "-14493813102-/// <reference lib=\"webworker\" />\n/// <reference lib=\"scripthost\" />\n/// <reference lib=\"es5\" />\n"
      },
      "./index.ts": {
        "original": {
          "version": "-11532698187-export const x = \"type1\";",
          "signature": "-5899226897-export declare const x = \"type1\";\n"
        },
        "version": "-11532698187-export const x = \"type1\";",
        "signature": "-5899226897-export declare const x = \"type1\";\n"
      },
      "./utils.d.ts": {
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;"
      },
      "./typeroot1/sometype/index.d.ts": {
        "version": "-12476477079-export type TheNum = \"type1\";",
        "signature": "-12476477079-export type TheNum = \"type1\";"
      }
    },
    "root": [
      [
        [
          5,
          10
        ],
        [
          "./core.d.ts",
          "./file.ts",
          "./file2.ts",
          "./index.ts",
          "./utils.d.ts",
          "./typeroot1/sometype/index.d.ts"
        ]
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "../node_modules/@typescript/lib-es5/index.d.ts",
      "../node_modules/@typescript/lib-scripthost/index.d.ts",
      "../node_modules/@typescript/lib-webworker/index.d.ts",
      "./core.d.ts",
      "./file.ts",
      "./file2.ts",
      "./index.ts",
      "./typeroot1/sometype/index.d.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1901
}

//// [/home/src/projects/project2/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.y = void 0;
exports.y = 10;


//// [/home/src/projects/project2/index.d.ts]
export declare const y = 10;


//// [/home/src/projects/project2/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../node_modules/@typescript/lib-es5/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true},{"version":"-11999455899-export const y = 10","signature":"-7152472870-export declare const y = 10;\n"},"-13729955264-export const y = 10;"],"root":[3,4],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,1,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project2/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../node_modules/@typescript/lib-es5/index.d.ts",
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../node_modules/@typescript/lib-es5/index.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-dom/index.d.ts": {
        "original": {
          "version": "-8673759361-interface DOMInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-8673759361-interface DOMInterface { }",
        "signature": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-11999455899-export const y = 10",
          "signature": "-7152472870-export declare const y = 10;\n"
        },
        "version": "-11999455899-export const y = 10",
        "signature": "-7152472870-export declare const y = 10;\n"
      },
      "./utils.d.ts": {
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;"
      }
    },
    "root": [
      [
        3,
        "./index.ts"
      ],
      [
        4,
        "./utils.d.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "../node_modules/@typescript/lib-es5/index.d.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1053
}

//// [/home/src/projects/project3/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = void 0;
exports.z = 10;


//// [/home/src/projects/project3/index.d.ts]
export declare const z = 10;


//// [/home/src/projects/project3/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../node_modules/@typescript/lib-es5/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true},{"version":"-11960320506-export const z = 10","signature":"-7483702853-export declare const z = 10;\n"},"-13729955264-export const y = 10;"],"root":[3,4],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,1,3,4],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project3/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../node_modules/@typescript/lib-es5/index.d.ts",
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../node_modules/@typescript/lib-es5/index.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-dom/index.d.ts": {
        "original": {
          "version": "-8673759361-interface DOMInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-8673759361-interface DOMInterface { }",
        "signature": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-11960320506-export const z = 10",
          "signature": "-7483702853-export declare const z = 10;\n"
        },
        "version": "-11960320506-export const z = 10",
        "signature": "-7483702853-export declare const z = 10;\n"
      },
      "./utils.d.ts": {
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;"
      }
    },
    "root": [
      [
        3,
        "./index.ts"
      ],
      [
        4,
        "./utils.d.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "../node_modules/@typescript/lib-es5/index.d.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1053
}

//// [/home/src/projects/project4/index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = void 0;
exports.z = 10;


//// [/home/src/projects/project4/index.d.ts]
export declare const z = 10;


//// [/home/src/projects/project4/tsconfig.tsbuildinfo]
{"program":{"fileNames":["../node_modules/@typescript/lib-esnext/index.d.ts","../node_modules/@typescript/lib-dom/index.d.ts","../node_modules/@typescript/lib-webworker/index.d.ts","./index.ts","./utils.d.ts"],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true},{"version":"-8673759361-interface DOMInterface { }","affectsGlobalScope":true},{"version":"-7827135529-interface WebworkerInterface { }","affectsGlobalScope":true},{"version":"-11960320506-export const z = 10","signature":"-7483702853-export declare const z = 10;\n"},"-13729955264-export const y = 10;"],"root":[4,5],"options":{"composite":true},"referencedMap":[],"exportedModulesMap":[],"semanticDiagnosticsPerFile":[2,1,3,4,5],"latestChangedDtsFile":"./index.d.ts"},"version":"FakeTSVersion"}

//// [/home/src/projects/project4/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "program": {
    "fileNames": [
      "../node_modules/@typescript/lib-esnext/index.d.ts",
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "../node_modules/@typescript/lib-webworker/index.d.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "fileInfos": {
      "../node_modules/@typescript/lib-esnext/index.d.ts": {
        "original": {
          "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
          "affectsGlobalScope": true
        },
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-dom/index.d.ts": {
        "original": {
          "version": "-8673759361-interface DOMInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-8673759361-interface DOMInterface { }",
        "signature": "-8673759361-interface DOMInterface { }",
        "affectsGlobalScope": true
      },
      "../node_modules/@typescript/lib-webworker/index.d.ts": {
        "original": {
          "version": "-7827135529-interface WebworkerInterface { }",
          "affectsGlobalScope": true
        },
        "version": "-7827135529-interface WebworkerInterface { }",
        "signature": "-7827135529-interface WebworkerInterface { }",
        "affectsGlobalScope": true
      },
      "./index.ts": {
        "original": {
          "version": "-11960320506-export const z = 10",
          "signature": "-7483702853-export declare const z = 10;\n"
        },
        "version": "-11960320506-export const z = 10",
        "signature": "-7483702853-export declare const z = 10;\n"
      },
      "./utils.d.ts": {
        "version": "-13729955264-export const y = 10;",
        "signature": "-13729955264-export const y = 10;"
      }
    },
    "root": [
      [
        4,
        "./index.ts"
      ],
      [
        5,
        "./utils.d.ts"
      ]
    ],
    "options": {
      "composite": true
    },
    "referencedMap": {},
    "exportedModulesMap": {},
    "semanticDiagnosticsPerFile": [
      "../node_modules/@typescript/lib-dom/index.d.ts",
      "../node_modules/@typescript/lib-esnext/index.d.ts",
      "../node_modules/@typescript/lib-webworker/index.d.ts",
      "./index.ts",
      "./utils.d.ts"
    ],
    "latestChangedDtsFile": "./index.d.ts"
  },
  "version": "FakeTSVersion",
  "size": 1198
}

