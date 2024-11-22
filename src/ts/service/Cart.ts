import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sumPrice(): number {
      let sum: number = 0;
      for (const key in this._items) {
        sum += this._items[key].price;        
      }
      return sum;
    }

    
}