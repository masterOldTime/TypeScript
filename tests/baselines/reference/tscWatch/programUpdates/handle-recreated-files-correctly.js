Input::
//// [/a/lib/lib.d.ts]
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

//// [/a/b/commonFile1.ts]
let x = 1

//// [/a/b/commonFile2.ts]
let y = 1

//// [/a/b/tsconfig.json]
{}


/a/lib/tsc.js -w -p /a/b/tsconfig.json --explainFiles
Output::
>> Screen clear
[[90m12:00:17 AM[0m] Starting compilation in watch mode...

RootFiles::
a/b/commonFile1.ts
  Matched by include pattern '**/*' in tsconfig.json
a/b/commonFile2.ts
  Matched by include pattern '**/*' in tsconfig.json

LibFiles::
a/lib/lib.d.ts
  Default library

[[90m12:00:22 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","explainFiles":true,"configFilePath":"/a/b/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

WatchedFiles::
/a/b/tsconfig.json:
  {"fileName":"/a/b/tsconfig.json","pollingInterval":250}
/a/b/commonfile1.ts:
  {"fileName":"/a/b/commonFile1.ts","pollingInterval":250}
/a/b/commonfile2.ts:
  {"fileName":"/a/b/commonFile2.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js]
var x = 1;


//// [/a/b/commonFile2.js]
var y = 1;



Change:: delete file2

Input::
//// [/a/b/commonFile2.ts] deleted

Output::
>> Screen clear
[[90m12:00:24 AM[0m] File change detected. Starting incremental compilation...

RootFiles::
a/b/commonFile1.ts
  Matched by include pattern '**/*' in tsconfig.json

LibFiles::
a/lib/lib.d.ts
  Default library

[[90m12:00:28 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","explainFiles":true,"configFilePath":"/a/b/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts

Semantic diagnostics in builder refreshed for::
/a/b/commonFile1.ts

WatchedFiles::
/a/b/tsconfig.json:
  {"fileName":"/a/b/tsconfig.json","pollingInterval":250}
/a/b/commonfile1.ts:
  {"fileName":"/a/b/commonFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js] file written with same contents

Change:: recreate file2

Input::
//// [/a/b/commonFile2.ts]
let y = 1


Output::
>> Screen clear
[[90m12:00:31 AM[0m] File change detected. Starting incremental compilation...

RootFiles::
a/b/commonFile1.ts
  Matched by include pattern '**/*' in tsconfig.json
a/b/commonFile2.ts
  Matched by include pattern '**/*' in tsconfig.json

LibFiles::
a/lib/lib.d.ts
  Default library

[[90m12:00:38 AM[0m] Found 0 errors. Watching for file changes.



Program root files: ["/a/b/commonFile1.ts","/a/b/commonFile2.ts"]
Program options: {"watch":true,"project":"/a/b/tsconfig.json","explainFiles":true,"configFilePath":"/a/b/tsconfig.json"}
Program files::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/a/b/commonFile1.ts
/a/b/commonFile2.ts

WatchedFiles::
/a/b/tsconfig.json:
  {"fileName":"/a/b/tsconfig.json","pollingInterval":250}
/a/b/commonfile1.ts:
  {"fileName":"/a/b/commonFile1.ts","pollingInterval":250}
/a/lib/lib.d.ts:
  {"fileName":"/a/lib/lib.d.ts","pollingInterval":250}
/a/b/commonfile2.ts:
  {"fileName":"/a/b/commonFile2.ts","pollingInterval":250}

FsWatches::

FsWatchesRecursive::
/a/b/node_modules/@types:
  {"directoryName":"/a/b/node_modules/@types","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}
/a/b:
  {"directoryName":"/a/b","fallbackPollingInterval":500,"fallbackOptions":{"watchFile":"PriorityPollingInterval"}}

exitCode:: ExitStatus.undefined

//// [/a/b/commonFile1.js] file written with same contents
//// [/a/b/commonFile2.js] file written with same contents
