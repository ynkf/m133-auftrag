import { expect } from "chai";
import { Queue } from "../lib/Queue";

describe("Data structures", () => {
    describe("Queue", () => {
        it("has size", () => {
            const testee = new Queue();
            const result = testee.size();
            expect(result).to.equal(0);
        });

        it("can add", () => {
            const queue = new Queue();
            queue.enqueue("word");
            const result = queue.size();
            expect(result).to.be.equal(1);
        });

        it("queue is empty", () => {
            const queue = new Queue();
            const result = queue.isEmpty();
            expect(result).to.be.equal(true);
        });

        it("queue is not empty", () => {
            const queue = new Queue();
            queue.enqueue("word");
            const result = queue.isEmpty();
            expect(result).to.be.equal(false);
        });

        it("peek next item", () => {
            const item = "word";
            const queue = new Queue();
            queue.enqueue(item);
            const result = queue.peek();
            expect(result).to.be.equal(item);
        });

        it("poll next item", () => {
            const item1 = "item1";
            const item2 = "item2";
            const queue = new Queue();
            queue.enqueue(item1);
            queue.enqueue(item2);
            const removed = queue.poll();
            const remaining = queue.peek();
            expect(removed).to.be.equal(item1);
            expect(remaining).to.be.equal(item2);
        })
    })

    // describe("Factory", () => {
    //     it("can create Queue", () => {
    //         const structureType = DataStructures.Queue;
    //         const result = DataStructureFactory.create(structureType);
    //         expect(result).to.be.an.instanceOf(Queue);
    //     })
    // })
})