import { IDataStructure } from "./IDataStructure";

export class Stack<T> implements IDataStructure<T> {
    private stack: Array<T>;

    constructor() {
        this.stack = new Array<T>();
    }

    public size(): number {
        return this.stack.length;
    }

    public enqueue(value: T) {
        this.stack.push(value);
    }

    public isEmpty(): boolean {
        return this.stack.length < 1;
    }

    public peek(): T {
        return this.stack[this.stack.length - 1];
    }

    public poll(): T {
        return <T>this.stack.pop();
    }
}