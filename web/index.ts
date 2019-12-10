import { IDataStructure } from "../lib/IDataStructure";
import { DataStructureFactory } from "../lib/DataStructureFactory";
import { DataStructures } from "../lib/DataStructuresEnum";

let dataStructure: IDataStructure<string>;
const outputBox: HTMLInputElement = document.querySelector("input#output") as HTMLInputElement;

document.querySelector<HTMLBodyElement>("button#set-datastructure")!.addEventListener("click", () => {
    dataStructure = DataStructureFactory.create<string>(
        document.querySelector<HTMLInputElement>("input#queue")!.checked 
            ? DataStructures.Queue 
            : DataStructures.Stack
    );
});

document.querySelector<HTMLBodyElement>("button#add")!.addEventListener("click", () => {
    dataStructure.enqueue(document.querySelector<HTMLInputElement>("input#input")!.value);
});

document.querySelector<HTMLInputElement>("button#peek")!.addEventListener("click", () => {
    outputBox.value = dataStructure.isEmpty() 
    ? "The structure contains no elements"
    : dataStructure.peek();
});

document.querySelector<HTMLInputElement>("button#poll")!.addEventListener("click", () => {
    outputBox.value = dataStructure.isEmpty() 
    ? "The structure contains no elements"
    : dataStructure.poll();
});
