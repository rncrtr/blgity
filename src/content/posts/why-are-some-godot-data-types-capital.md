---
title: Why Are Some Godot Data Types Capital?
date: "2024-11-08"
excerpt: "String is capitalized, but int is not. Why?"
---

Why are some data types in Godot capitalized and some are not? Aren't they the same thing?

Yes, kind of. A String and an int are really very similar to the person writing the code. The reason they are different is simple but also makes it confusing. Here's why:

Lowercase Types (int, float, bool): These are the simple, building-block data types.

Capitalized Types (String, Array, Vector2, and others): These are more like "toolkits" with extra methods, meaning you can do more with them (like calling .length() on a String). This is because they are based on a class not a primitive data type.

While this difference really is semantic and doesn't help you as the programmer to remember which is which and why, it makes sense. This is the kind of thing that other languages do a bit better to be simpler for the programmer, in my opinion.