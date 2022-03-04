import { Item } from './Item';

type Class = new (...args: any[]) => any;

export function PagesIterable<SuperClass extends Class>(superclass: SuperClass) {
    return class extends superclass {
        public *[Symbol.iterator]() {
            const pages = this.getPages();
            const numberOfPages: number = this.getNumberOfPages();
            for (let value = 0; value < numberOfPages; value++) {
                const firstPartOfText = this.toString();
                const secondPartOfText = pages[value].toString();
                yield firstPartOfText + ' ' + secondPartOfText;
            }
        }
    };
}
