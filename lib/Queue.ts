import { IDataStructure } from "./IDataStructure";

export class Queue<T> implements IDataStructure<T> {
    private queue: Array<T>;

    constructor() {
        this.queue = new Array<T>();
    }

    public size(): number {
        return this.queue.length;
    }

    public enqueue(value: T) {
        this.queue.push(value);
    }

    public isEmpty(): boolean {
        return this.queue.length < 1;
    }

    public peek(): T {
        return this.queue[0];
    }

    public poll(): T {
        return <T>this.queue.shift();
    }
}