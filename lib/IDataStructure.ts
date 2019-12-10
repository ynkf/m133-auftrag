export interface IDataStructure<T> {
    size(): number;
    enqueue(value: T): void;
    peek(): T;
    poll(): T;
    isEmpty(): boolean;
}