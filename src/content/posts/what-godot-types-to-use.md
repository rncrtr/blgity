---
title: What Godot Types to Use
date: "2024-10-31"
excerpt: "A good way to speed up your Godot project is to be sure all your variables are typed correctly. It is hard to know what types some of the variables should be. Here's a list of all the ones I had a hard time figuring out..."
---

If you&apos;ve heard that a good way to speed up your Godot project is to make sure there are types on all your variables, that is correct. What if you don&apos;t know the types to use? When I tried to do the same I had 900+ references I needed to update. Here are some tricky ones I found in case it helps save you some time.

All examples in this post are as of godot 4.3

### Func without a return? Use void as the return type
```c++
func my_func(a: int, b: int) -> void:
    a + b = c
    print(c)
    # nothing is returned, thus void
```

### Func that returns? Use return variable's type:
In this example, the type is _int_, but it can be String, float, bool, Object, Node, Camera2D, etc.
```c++
func my_func(a: int, b: int) -> int:
    var c: int = 0
    a + b = c
    return c # this will return an int, so we use that return type
```


### Multiple possible types? Use Variant
If you don't know what type it will be, or it may be multiple types:

```c++
func process_data(data: Variant) -> void:
    match typeof(data):
        TYPE_INT:
            print("Processing integer: ", data)
        TYPE_STRING:
            print("Processing string: ", data)
        TYPE_ARRAY:
            print("Processing array with ", data.size(), " elements")
        _:
            print("Unsupported data type")
```
Much like using a type: __Any__ in other programming languages.

### Load or Preload a Scene, use PackedScene
```c++
var scene: PackedScene = preload("res://game/Player.tscn")
```

### Load or Preload a Script, use GDScript
```c++
var Utils: GDScript = preload("res://game/utils/utils.gd")
```

### Reference a func as a callback or filter? Use type Callable:
```c++
func _init(_callback: Callable) -> void:
```

### Reference an enum from another script? Use Dictionary:
```c++
# in Global.gd:
enum directions {N,S,E,W,NW,SW,NE,SE}

# in another script:
var directions: Dictionary = Global.directions

# Hint: the values in an enum are of type int
```