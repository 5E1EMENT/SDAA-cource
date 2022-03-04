import { Page } from './page';
import { Pages } from './pages';
import { PagesIterable } from './PagesIterable';

export abstract class Item extends PagesIterable(Object) {
    private pages: Pages;

    abstract toString(): string;
    abstract getNumberOfPages(): number;

    public getCounter(): number {
        return this.getPages().length;
    }
    public getPages(): Page[] {
        return this.pages.getPages();
    }

    constructor(pages: Pages) {
        super();
        this.pages = pages;
    }
}
