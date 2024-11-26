import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';


test('new card should be empty', () => {
  const cart0 = new Cart();

  expect(cart0.items.length).toBe(0);
});

test('add and get item', () => {
  const cart1 = new Cart();
  cart1.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));

  expect(cart1.items).toEqual([{
    id: 1001, 
    name: 'War and Piece', 
    author: 'Leo Tolstoy', 
    price: 2000, 
    pages: 1225
  }]);
})


const cart = new Cart();
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1010, 'The Avengers', 2012, 'U.S.A', 'Aberagers Assemble!', 'sci-fi, action, fantasy, adventure ...', 137, 'Marvel', 3000))

test('sumPrice items', () => {
  expect(cart.sumPrice()).toBe(5900);
})

test('sumPriceDiscount items', () => {
  expect(cart.sumPriceDiscount(50)).toBe(2950);
})

test('deleteItem item', () => {
  cart.deleteItem(1001)

  expect(cart.items).toEqual([
      {
          "id": 1008,
          "name": "Meteora",
          "author": "Linkin Park",
          "price": 900
      },
      {
          "id": 1010,
          "name": "The Avengers",
          "year": 2012,
          "country": "U.S.A",
          "tagline": "Aberagers Assemble!",
          "genre": "sci-fi, action, fantasy, adventure ...",
          "time": 137,
          "author": "Marvel",
          "price": 3000
      }
  ]);
})
