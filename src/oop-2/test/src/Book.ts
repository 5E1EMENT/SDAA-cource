import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
    private title: string;
    private author: string;

    constructor(title: string, author: string, pages: Pages) {
        super(pages);
        this.title = title;
        this.author = author;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getTitle(): string {
        return this.title;
    }

    toString(): string {
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.getCounter()},`;
    }
}
