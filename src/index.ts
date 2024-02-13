const hoge: any = '';
const fuga = hoge as string;
console.log(fuga);

const hoge2: any = 2;
const fuga2 = hoge as string;
console.log(fuga2);

enum Color {
    Red = 0b100,
    Blue = 0b001,
    Green = 0b010,
}
const c1: Color = Color.Red;
// const c2: Color = Color.Purple;

// 型エイリアス
type str = string;
type user = {
    name: string,
    age: number,
    type: 1 | 2 | 3 | 4,
}

const obj: any = {
    name: 'Sato',
    age: 32,
    subject: 'Tokyo',
}
console.log((obj as string).length);

type Data = Record<string, Record<string, number | string>>;
const data: Data = {
    "hoge": {
        "fuga": 1,
    },
    "piyo": {
        "foo": "",
    }
}

type KeyValue = {
    [key in string]: string;
}
const kv: KeyValue = {
    "a": "b",
    "c": "d",
}

type MixedArray = (string | number | undefined)[];
type T = MixedArray[number];

const t: T = 1;

type IsString<T> = T extends string ? true : false;
const isstr: IsString<"a"> = true;
