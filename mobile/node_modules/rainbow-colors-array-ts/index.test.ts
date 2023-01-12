import { rainbow } from "./index";

test('hex color array', () => {
    let arr = rainbow(7, "hex", false);
    console.log(arr);
});


test('hex color array', () => {
    let arr = rainbow(7, "hsl", false);
    console.log(arr);
});

test('hex color array', () => {
    let arr = rainbow(7, "rgb", false);
    console.log(arr);
});

test('hex color array', () => {
    let arr = rainbow(7);
    let arr2 = rainbow(7, "hex");
    expect(arr2).toEqual(arr);
});

test('hsl color array', () => {
    for (let i=0; i<1000; i++) {
        rainbow(i, "hsl", false);
    }
});

test('rgb color array', () => {
    for (let i=0; i<1000; i++) {
        rainbow(i, "rgb", false);
    }
});

