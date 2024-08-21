---
sidebar_position: 1
---

# Constants

## **Incremental Constants**

| s, s2 | | s4 | | s8 |
|--|--|--|--|--|
| `0` `1` `2` `4` | ... | `16` `20` `24` | ... | `56` `64` `72` |

Incremental constants are the foundation of the design system.

They define stepped values reused throughout other sets of constants.

Rather than strict increments, subdivisions and multiples are used at natural breakpoints to create more flexible systems.

Incremental constants are applied to other constant sequences, such as [Sizing Constants](#sizing-constants). The range of the sequence, as well as granularity, can vary between constant sequences. This reduces the total number of constants needed while maintaining a focused, yet modular system.

### `incremental`

| interval | range |
|--|--|
| `8` units | `0`..`384` |
| |

### `sequential five`

| interval | range |
|--|--|
| `5` units | `-100`..`100` |
| |

### `sequential eight`

| interval | range |
|--|--|
| `8` units | `-100`..`100` |
| |

### `sequential hundred`

| interval | range |
|--|--|
| `100` units | `-1000`..`1000` |
| |

---

## **Opacity Constants**

### `opacity`

Opacity of an element.

| | |
|--|--|
| base [`sequential eight`](#sequential-eight) | scope `opacity` |
| |

## **Radius Constants**

### `radius`

Corner radius of an element.

| | |
|--|--|
| base [`incremental`](#incremental) | scope `radius` |
| |

## **Sizing Constants**

### `width`

Width of an element.

| | |
|--|--|
| base [`incremental`](#incremental) | scope `dimension` |
| |

### `height`

Height of an element.

| | |
|--|--|
| base [`incremental`](#incremental) | scope `dimension` |
| |

## **Spacing Constants**

### `gap`

Space between elements in an [_Auto Layout_](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties) container.

| | |
|--|--|
| base [`incremental`](#incremental) | scope `spacing` |
| |

### `padding`

Space between the inner content and the edge of an element in an [_Auto Layout_](https://help.figma.com/hc/en-us/articles/360040451373-Explore-auto-layout-properties) container.

| | |
|--|--|
| base [`incremental`](#incremental) | scope `spacing` |
| |

## **Typography Constants**

### `size`

Size of a font.

| | |
|--|--|
| base [`incremental`](#incremental) | scope `typography` |
| |

### `weight`

Weight (boldness/thickness) of a font.

| | |
|--|--|
| thin | `100` |
| extra light | `200` |
| light | `300` |
| regular | `400` |
| medium | `500` |
| semi bold | `600` |
| bold | `700` |
| extra bold | `800` |
| heavy | `900` |
| poster | `1000` |

| | |
|--|--|
| base [`sequential hundred`](#sequential-hundred) | scope `typography` |
| |

## **Z-Index Constants**

### `zindex`

Stacking order of an element in a container.

| | |
|--|--|
| base [`sequential five`](#sequential-five) | scope `zIndex` |
| |
