import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";
import { DataStructures } from "../lib/DataStructuresEnum";
import { DataStructureFactory } from "../lib/DataStructureFactory";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            const result = queue.size();
            expect(result).to.equal(0);
        });

        it("can add", () => {
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            queue.enqueue("word");
            const result = queue.size();
            expect(result).to.be.equal(1);
        });

        it("queue is empty", () => {
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            const result = queue.isEmpty();
            expect(result).to.be.equal(true);
        });

        it("queue is not empty", () => {
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            queue.enqueue("word");
            const result = queue.isEmpty();
            expect(result).to.be.equal(false);
        });

        it("peek next item", () => {
            const item = "word";
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            queue.enqueue(item);
            const result = queue.peek();
            expect(result).to.be.equal(item);
        });

        it("poll next item", () => {
            const item1 = "item1";
            const item2 = "item2";
            const queue = DataStructureFactory.create<string>(DataStructures.Queue);
            queue.enqueue(item1);
            queue.enqueue(item2);
            const removed = queue.poll();
            const remaining = queue.peek();
            expect(removed).to.be.equal(item1);
            expect(remaining).to.be.equal(item2);
        });
    });
    
    describe("Stack", () => {
        it("has size", () => {
            const queue = DataStructureFactory.create<string>(DataStructures.Stack);
            const result = queue.size();
            expect(result).to.equal(0);
        });

        it("can add", () => {
            const stack = DataStructureFactory.create<string>(DataStructures.Stack);
            stack.enqueue("word");
            const result = stack.size();
            expect(result).to.be.equal(1);
        });

        it("stack is empty", () => {
            const stack = DataStructureFactory.create<string>(DataStructures.Stack);
            const result = stack.isEmpty();
            expect(result).to.be.equal(true);
        });

        it("stack is not empty", () => {
            const stack = DataStructureFactory.create<string>(DataStructures.Stack);
            stack.enqueue("word");
            const result = stack.isEmpty();
            expect(result).to.be.equal(false);
        });

        it("peek next item", () => {
            const item = "word";
            const stack = DataStructureFactory.create<string>(DataStructures.Stack);
            stack.enqueue(item);
            const result = stack.peek();
            expect(result).to.be.equal(item);
        });

        it("poll next item", () => {
            const item1 = "item1";
            const item2 = "item2";
            const stack = DataStructureFactory.create<string>(DataStructures.Stack);
            stack.enqueue(item1);
            stack.enqueue(item2);
            const removed = stack.poll();
            const remaining = stack.peek();
            const size = stack.size();
            expect(removed).to.be.equal(item2);
            expect(remaining).to.be.equal(item1);
            expect(size).to.be.equal(1);
        });
    });

    describe("Factory", () => {
        it("can create Queue", () => {
            const structureType = DataStructures.Queue;
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Queue);            
        });

        it("can create Stack", () => {
            const structureType = DataStructures.Stack;
            const result = DataStructureFactory.create(structureType);
            expect(result).to.be.an.instanceOf(Stack);
        });
    });
});