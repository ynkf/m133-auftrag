import { DataStructures } from "./DataStructuresEnum";
import { Queue } from "./Queue";
import { Stack } from "./Stack";

export class DataStructureFactory<T> {
    public static create<T>(dataStructures: DataStructures) {
        return dataStructures === DataStructures.Queue 
        ? new Queue<T>() 
        : new Stack<T>();
    }
}