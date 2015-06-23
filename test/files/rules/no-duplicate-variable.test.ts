var duplicated = 1;

class Test {
    private myFunc() {
        var notDuplicated = 123,
            duplicated = 234,
            someFunc = () => {
                var notDuplicated = 345;
            };

        var duplicated = null;
    }
}

function test() {
    var notDuplicated = 123,
        duplicated = 234,
        someFunc = () => {
            var notDuplicated = 345;
        };

    var duplicated = null;
}

duplicated = 2;
var duplicated = 3;

// valid code
module tmp {
    var path = require("path");
    export class MyType {
        path: string;
    }
}

module MyModule {
    export class ClassA {
        id: string;
    }

    export class ClassB {
        id: string;
    }
}

var a = {
    foo(): void {
        var bar = 1;
    },
    baz(): void {
        var bar = 1;
    }
};

class AccessorTest {
    get accesor1(): number {
        var x = 0;
        return x;
    }

    get accesor2(): number {
        var x = 0;
        return x;
    }

}

class NoDupConstructor {
    private test: string;
    constructor() {
        var test = "test";
        this.test = test;
    }
}

// valid/invalid code
function letTesting() {
    var a = 1;
    let b = 1;
    let d = 1;
    if (true) {
        let a = 2;
        let b = 2;
        let c = 2;
        var d = 2;
        var e = 2;
    }
    else {
        let b = 3;
        let c = 3;
        let e = 3;
        let f = 3;
    }
    var f = 4;
}

// failure: two arguments have the same name.
function testArguments1(arg: number, arg: number): void {
}

// failure: local var/let declarations shadow arguments.
function testArguments2(x: number, y: number): void {
    var x = 1;
    let y = 2;
}

var references: {[vertex: string]: any};
var dependents: {[vertex: string]: any};

function blah(arg1: {[key: string]: any}, arg2: {[key:string]: any}) {
}

interface IClipboard {
    copy(key: string, state: any): void;
    paste(key: string): any;
    findMaxOrMin(values: any[], defaultValue: number, operation: (...values: any[]) => number);
    functionA: (value: string) => void;
    functionB: (value: string) => void;
}

try {
    //
} catch (e) {
    e.blah();
    //
}

try {
    //
} catch (e) {
    e.blah();
    //
}

function testDestructuring() {
    function myFunc() {
        return [1, 2];
    }

    var [x, y] = myFunc();
    var [z, z] = myFunc(); // failure

    let [x1, y1] = myFunc();
    let [z1, z1] = myFunc(); // tsc error

    const [x2, y2] = myFunc();
    const [z2, z2] = myFunc(); // tsc error

    let [a1, [b1, c1]] = [1, [2, 3]];
    let [{a1, d1}] = [{a1: 1, d1: 4}]; // tsc error

    var [a2, [b2, c2]] = [1, [2, 3]];
    var [{a2, d2}] = [{a2: 1, d2: 4}]; // failure

    function myFunc2([a, b]) {
        var a; // not a failure; caught by no-shadowed-variable
        return b;
    }
}
