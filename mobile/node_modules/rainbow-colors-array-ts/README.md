# Rainbow

This library is based on rainbow-colors-array, but it uses TypeScript and is more flexible.

## Installation

```bash
npm install rainbow-colors-array-ts
```

## Usage

### API:

rainbow(arrayLength, type, pastel);

- arrayLength: number of colors in the array
- type: can be "rgb", "hex" or "hsl"
- pastel: boolean, if true, the colors will be pastel

### Examples:

```typescript
import { rainbow } from "rainbow-colors-array-ts";

// for a simple rainbow using 7 colors (in hex) and no pastel colors
const colors = rainbow(7);
// [
//     { hex: "#f38020" },
//     { hex: "#9fe303" },
//     { hex: "#33fc44" },
//     { hex: "#01b7b3" },
//     { hex: "#2f49fb" },
//     { hex: "#9a04e6" },
//     { hex: "#f11d85" }
// ]
```

```typescript
import { rainbow } from "rainbow-colors-array-ts";
// for a simple rainbow using 7 colors (in hex) and pastel colors
const colors = rainbow(7, "hex", true);
// [
//     { hex: "#f38020" },
//     { hex: "#9fe303" },
//     { hex: "#33fc44" },
//     { hex: "#01b7b3" },
//     { hex: "#2f49fb" },
//     { hex: "#9a04e6" },
//     { hex: "#f11d85" }
// ]
```

Other options for the second parameter are "hsl" and "rgb".

```typescript
import { rainbow } from "rainbow-colors-array-ts";

// for a simple rainbow using 7 colors (in hsl) and no pastel colors
const colors = rainbow(7, "hsl");
// [
// 	{
// 		h: 0.07582938388625593,
// 		s: 0.8978723404255318,
// 		l: 0.5392156862745098,
// 	},
// 	{
// 		h: 0.21726190476190474,
// 		s: 0.9739130434782609,
// 		l: 0.4509803921568627,
// 	},
// 	{
// 		h: 0.34742951907131014,
// 		s: 0.9710144927536233,
// 		l: 0.5941176470588235,
// 	},
// 	{
// 		h: 0.49633699633699635,
// 		s: 0.9891304347826088,
// 		l: 0.3607843137254902,
// 	},
// 	{
// 		h: 0.6454248366013072,
// 		s: 0.9622641509433962,
// 		l: 0.584313725490196,
// 	},
// 	{
// 		h: 0.7772861356932154,
// 		s: 0.9658119658119657,
// 		l: 0.45882352941176474,
// 	},
// 	{
// 		h: 0.9182389937106917,
// 		s: 0.8833333333333333,
// 		l: 0.5294117647058824,
// 	},
// ];
```
