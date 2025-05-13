📦 Node.js require() Deep Dive – Module Caching & Execution

This document explores how require() works under the hood in Node.js, tracking the full internal loading and caching process, just like a pro backend engineer would.

📌 Overview: What Happens When You Call require()

Path Resolution → require.resolve() maps to the full file path.

Cache Check → Node checks require.cache (or Module._cache) to avoid reloading.

Module Wrapping → File is wrapped in a function with arguments like exports, require, module, etc.

Code Execution → Using vm.runInThisContext(), code is run within a sandbox.

Result Exported → module.exports is returned and cached.

🧠 require.cache – How Module Caching Works

Node.js internally uses a simple object to cache modules:

Module._cache = {
  '/path/to/module.js': Module {
    id: '/path/to/module.js',
    exports: {...},
    loaded: true,
    ...
  }
};

✅ This behaves like a JavaScript HashMap:

Key = Absolute file path

Value = The Module object with its exports

🖥️ On a Long-Running Server

If you run an Express or NestJS server:

const db = require('./database');

First load → database.js is read, executed, and cached.

Next loads → Pulled directly from memory (RAM), zero disk I/O.

🔁 Cache lasts as long as the server runs.

❌ When Is Cache Cleared?

Condition

Cache Status

Initial require()

✅ Cached

New process/restart

❌ Cleared (RAM reset)

Manual delete

✅ Remove manually

delete require.cache[require.resolve('./module')];

🔍 Where Is It Stored?

What

Location

Cache data

RAM (heap via V8)

Language used

Plain JavaScript

Persistent?

No – runtime only

🧠 Why This Matters

Understanding require.cache is important when:

You want to hot-reload a module without restarting your server.

You rely on dynamic configs.

You’re debugging why something isn’t updating.

✅ Summary