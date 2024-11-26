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
      return this._items.reduce(
        function(sum, item): number {
          return Number(sum) + item.price;
        }, 0
      )
    }

    sumPriceDiscount(discount: number): number {
      const sum = this.sumPrice();
      return sum - (sum * discount / 100);
    }

    deleteItem(id: number): void {
      this._items = this._items.filter((item) => { 
        return id !== item.id;
      })
    }
}