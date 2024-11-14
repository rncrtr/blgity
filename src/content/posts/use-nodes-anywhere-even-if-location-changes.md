---
title: Move nodes and never change links again
date: "2024-11-04"
excerpt: "Here's how to use nodes and never rewrite links to them every again."
---

If you've been using Godot very long, you know that if you move a node or add new nodes above it in the tree, you will have to update any references to it so all the places that need to know about it will once again be able to find it. Not anymore. Here's how to never change references again, move nodes wherever and all the places you link to it don't ever need to change. Simple fix.

