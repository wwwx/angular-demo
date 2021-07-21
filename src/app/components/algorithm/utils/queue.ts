export class Queue<T = any> {
    items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): void {
        this.items.shift();
    }

    clear(): void {
        this.items.length = 0;
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    head(): T {
        return this.items[this.items.length - 1];
    }

    tail(): T {
        return this.items[0];
    }
}
