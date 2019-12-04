import { IDataScructure } from "./IDataStructure";

export class Queue implements IDataScructure {
    private queue = [];

    public size(): number {
        return this.queue.length;
    }
}