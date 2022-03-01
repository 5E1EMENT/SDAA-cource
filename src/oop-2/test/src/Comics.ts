import { Item } from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
    constructor(private title: string, private author: string, private artist: string, pages: Pages) {
        super(pages);
    }

    public getTitle(): string {
        return this.title;
    }

    toString(): string {
        return `Comics: ${this.title} by ${this.author}, the artist is ${
            this.artist
        }, number of pages: ${this.getCounter()},`;
    }
}
