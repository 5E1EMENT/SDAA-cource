import { Item } from './Item';
import { Pages } from './Pages';

export class Magazine extends Item {
    constructor(private title: string, pages: Pages) {
        super(pages);
    }

    public getTitle(): string {
        return this.title;
    }
    public getNumberOfPages(): number {
        return this.getPages().length;
    }

    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.getCounter()},`;
    }
}
