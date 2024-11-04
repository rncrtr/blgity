---
title: Close Bottom Panel on Game Stop
date: "2024-11-04"
excerpt: "Laptop screen output is always in my way when I stop the game. Here's a fix."
---

I develop games on my laptop sometimes. It has a smaller screen but a better GPU to run games. I often want to see the Output panel at the bottom of Godot 4.3 when I am running the game, but I want it to go away so I can see the code again when the preview is closed or I hit Stop. 

I even asked ChatGPT and tried to write a plugin, but since ChatGPT isn't all that knowledgable in Godot 4.3 yet, it didn't work. I did some more Googling and found that there is a simple Editor setting.

```python
1. Go into Editor -> Editor Settings
2. Scroll down to the Run section (or search for it)
3. Click "Bottom Panel" and change the "Action on Stop" value to "Close Bottom Panel"
```