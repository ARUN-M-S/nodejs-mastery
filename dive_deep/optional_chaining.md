## ✅ Optional Chaining in JavaScript
### 🔍 What is it?
Optional chaining (?.) is a modern JavaScript feature that allows you to safely access deeply nested properties without worrying about null or undefined values.

💡 Example:

result?.users?.map(user => console.log(user.name));
🔧 What it does internally:
The above code is equivalent to writing:


if (result !== undefined && result.users !== undefined) {
  result.users.map(user => console.log(user.name));
}
This prevents errors like:

javascript
Copy
Edit
TypeError: Cannot read properties of undefined
🧠 When to Use
Use optional chaining when:

You're accessing deeply nested properties

Working with API responses where values may be missing

Avoiding multiple verbose if conditions

🚀 Bonus: Use with Nullish Coalescing

const count = result?.users?.length ?? 0;
This gives you a default value (0) if any part of the chain is undefined or null.

📌 Summary
✅ Cleaner syntax

🧱 Avoids nested if checks

❌ No more crashes on undefined access

📦 Introduced in ES2020