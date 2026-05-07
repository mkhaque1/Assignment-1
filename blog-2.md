# Why I stopped using `any` and started using `unknown`

Okay so when I started learning TypeScript, anytime I got a weird error I didn't understand — I just slapped `any` on it and moved on. It worked. No more red issue. Problem solved, right xd

Not really.

---

## The problem with `any`

Turns out `any` just makes TypeScript stop caring. It's not fixing the problem — it's ignoring it. You can call methods that don't exist, pass it into functions that expect something completely different, and TypeScript won't say a word. The crash happens later, at runtime, and good luck figuring out where it came from.

That's the hole. You think you're safe but you're not.

---

## `unknown` is the honest version

`unknown` basically says — "yeah I don't know what this is, and I'm not going to pretend I do." TypeScript won't let you use it until you actually check what it is first.

It's a little more work upfront. But you won't get surprise crashes.

---

## Type narrowing — just checking before you use

Narrowing is nothing fancy. It's just an `if` statement that tells TypeScript what the type actually is inside that block.

TypeScript is smart enough to follow our logic. Once you check, it unlocks the right methods automatically.

---

## Honestly, the rule is simple

Use `unknown` when you don't know what's coming in what i understood — like data from an API or user input. Then narrow it before you use it. Avoid `any` unless you're truly stuck and you know what you're doing.

`any` is "I give up." `unknown` is "let me handle this properly."

That one switch made my TypeScript code a lot more trustworthy and easier.
