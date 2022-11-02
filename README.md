# core-goody-hut

This package provides the core `GoodyHut` class and associated `Rule`s.

`GoodyHut`s traditionally in the Civ games provide a bonus (or penalty) when discovered. The `GoodyHut` class is
associated to a `Tile` where it will be `Discovered`, revealing its reward via an `Action`.

Associated `Rule`s:

- `Action` - available `Action`s for the current `GoodyHut` (e.g. `Unit`, `Advance`, `Gold`...)
- `ActionPerformed` - once an action is performed (`Unit` provided, etc)
- `Discovered` - when the `GoodyHut` is interacted with
- `Distribution` - on which `Tile`s the `GoodyHut`s will appear
