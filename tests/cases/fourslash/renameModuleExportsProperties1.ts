﻿/// <reference path='fourslash.ts' />

////[|class [|{| "contextRangeIndex": 0 |}A|] {}|]
////module.exports = { [|A|] }

const [r0Def, r0, r1] = test.ranges();
verify.baselineRename([r0, r1], { providePrefixAndSuffixTextForRename: true });