import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private queue = [];

    public size(): number {
        return this.queue.length;
    }

    public enqueue(value: any) {
        this.queue.push(value);
    }

    public isEmpty(): boolean {
        return this.queue.length < 1;
    }

    public peek(): any {
        return this.queue[0];
    }

    public poll(): any {
        return this.queue.shift();
    }
}