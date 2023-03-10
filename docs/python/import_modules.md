---
comments: true
tags:
  - coding
  - solving problem
---

# Python: Import modules

## I. Problem: module's path

- Common: We want to use a different root/source to import modules (modules here are just other python files).
- Some specific cases:
    - Having 2 folders with the same name (in different levels in the file tree). We want to import from the subfolder only.
    - The module we want to import has a long path.

### 1. Solve it using sys.path

### 2. Solve it using PyCharm

### 3. Another problem, for instance, uvicorn

### 4. Solve it using a .pth file

!!! info
    This is why I decide to write this post

```zsh
cd venv/lib/python3.10/site-packages
touch any_name.pth
vim any_name.pth
```

Press ++"I"++ to switch to the insert mode, and add the path you want to be the source into this file (`any_name.pth`).

Press ++esc+":wq"+enter++ to save and quit.

That's it, problem solved.

## Problem: conflict with python built-in

### 1. Introduce about `__init__.py`

### 2. Solve it with `__init__.py`
