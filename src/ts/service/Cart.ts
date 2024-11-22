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

    sumPriceDiscount(discount: number): number {
      let sum: number = 0;
      for (const key in this._items) {
        sum += this._items[key].price;        
      }
      return sum - (sum * discount / 100);
    }

    deleteItem(id: number): void {
      for (let i = 0; i < this._items.length; i++) {
        if (id === this._items[i].id) {
          this._items.splice(i, 1);
        }    
      }
    }
}