const db = require('APP/db')

const seedAddresses = [
  {firstName: 'Barack', lastName: 'Obama', address1: '1600 Pennsylvania Ave', city: 'Washington DC', state: 'DC', phone: '555-555-5555', zip: '20500', user_id: 1},
  {firstName: 'Donald', lastName: 'Trump', address1: 'Trump Tower', address2: 'Apt 1', city: 'New York City', state: 'NY', phone: '555-555-1234', zip: '10022', user_id: 2}
]

const seedAddressesFunc = () => {return db.Promise.each(seedAddresses, address => db.model('addresses').create(address))}

const seedOrders = [
  {status: 'cart', user_id: 3},
  {status: 'completed', user_id: 3}
]

const seedOrdersFunc = () => {return db.Promise.each(seedOrders, order => db.model('orders').create(order))}

const seedProducts = [
  {name: 'Mozzarella Bufala dop', price: 10.00, stockQuantity: 0, summary: ['Very Good Cheese'], description: 'This mozzeralla is denomination of protected origin (DOP), made with ingredients of Bufala. Has a springier texture and a creamier taste when compared to other mozzarellas.', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Ricotta', price: 1.00, stockQuantity: 1, summary: ['Very Good Cheese', 'Limited Supply'], description: 'Ricotta is pure white, firm, rindless cheese. This cheese has a supple, mild taste made from lightly salted sheep\'s milk curd that is pressed and dried, then aged for a minimum of three months', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Asiago', price: 0.99, stockQuantity: 1, summary: ['Very Good Cheese'], description: 'Asiago made from pasteurized whole milk and aged for about a month. A young cheese of this age has a full, creamy flavor. Great with crusty Italian bread and glass of Pinot Grigio!', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 5, milkType: 'goat'},
  {name: 'Halloumi', price: 0.01, stockQuantity: 10, summary: ['Very Good Cheese'], description: 'Halloumi has a salty, tangy flavor and a springy texture, similar to Mozzarella. The high melting point allows Halloumi to be grilled without browning. Grilled Halloumi is an excellent appetizer or addition to any main course. Halloumi Cheese is also delicious eaten fresh in salads or sandwiches or with fresh fruit. It is often paired with watermelon in its native Cyprus. Halloumi is often accompanied by mint leaves in the packaging which not only add flavor but also preserve the cheese.', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Cheddar', price: 25.50, stockQuantity: 20, summary: ['Very Good Cheese'], description: 'A classic staple', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 4, milkType: 'cow'},
  {name: 'Swiss', price: 10.00, stockQuantity: 30, summary: ['Very Good Cheese'], description: 'Popular worldwide, Swiss is an established type of cheese', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'goat'},
  {name: 'Cheddar+', price: 60.99, stockQuantity: 40, summary: ['Very Good Cheese', 'Critics Choice'], description: 'An upgrade over standard Cheddar', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Cheddar++', price: 120.00, stockQuantity: 10, summary: ['Very Good Cheese'], description: 'For those who are serious about chedar', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'sheep'},
  {name: 'CheddarX', price: 2000.00, stockQuantity: 10, summary: ['Very Good Cheese'], description: 'If price is no issue, this is the best Cheddar available', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'UK', age: 1, milkType: 'cow'},
  {name: 'American', price: 10.00, stockQuantity: 10, summary: ['Very Good Cheese'], description: 'Not technically cheese', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'UK', age: 1, milkType: 'sheep'},
  {name: 'Elite Gold Cheese', price: 3000000.00, stockQuantity: 1, summary: ['Very Good Cheese'], description: 'This is a cheese for the true cheese lover. The flavor and texture are unmatched. Your life will never be the same', imageURL: 'http://i.imgur.com/RlngTOV.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
]

const seedProductsFunc = () => {return db.Promise.each(seedProducts, product => db.model('products').create(product))}

const seedProductOrders = [
	{name: 'Cheddar', price: 25.50,imageURL: 'http://i.imgur.com/RlngTOV.jpg', quantity: 1, userid: 1, inCart: false, order_id: 2, ordered_product_id: 5},
  {name: 'Swiss', price: 10.00, imageURL: 'http://i.imgur.com/RlngTOV.jpg', quantity: 3, userid: 2, inCart: true, order_id: 1,ordered_product_id: 6}
]

const seedProductOrdersFunc = () => {return db.Promise.each(seedProductOrders, productOrder => db.model('productOrders').create(productOrder))}

const seedReviews = [
  {title: 'Bad Experience', body: 'Cheese was already half eaten', stars: 1, author_id: 1, product_id: 1},
  {title: 'Average Cheese', body: 'I feel neutral about this product', stars: 3, author_id: 1, product_id: 2},
  {title: 'Excellent!!!', body: 'Fantastic product!', stars: 5, author_id: 2, product_id: 3}
]

const seedReviewsFunc = () => {return db.Promise.each(seedReviews, review => db.model('reviews').create(review))}

const seedUsers = [
  {firstName: 'Barack', lastName: 'Obama', isAdmin: false, email: 'barack@example.gov', password: '1234'},
  {firstName: 'John', lastName: 'Cheeselover', isAdmin: false, email: 'john@example.com', password: 'MAGA'},
  {firstName: 'Evan', lastName: 'Scriber', isAdmin: true, email: 'evan@example.com', password: '1234'},
  {firstName: 'Who', lastName: 'Cares', isAdmin: false, email: '1@1.com', password: '1'},
  {firstName: "Still don't care", lastName: 'zzz', isAdmin: true, email: '2@2.com', password: '2'}

]

const seedUsersFunc = () => {return db.Promise.each(seedUsers, user => db.model('users').create(user))}

db.didSync
  .then(() => db.sync({force: true}))

  .then(seedUsersFunc)
  .then(users => console.log(`Seeded ${users.length} users OK`))

  .then(seedProductsFunc)
  .then(products => console.log(`Seeded ${products.length} products OK`))

  .then(seedAddressesFunc)
  .then(addresses => console.log(`Seeded ${addresses.length} addresses OK`))

  .then(seedReviewsFunc)
  .then(reviews => console.log(`Seeded ${reviews.length} reviews OK`))

  .then(seedOrdersFunc)
  .then(orders => console.log(`Seeded ${orders.length} orders OK`))

  .then(seedProductOrdersFunc)
  .then(productOrders => console.log(`Seeded ${productOrders.length} productOrders OK`))

  .catch(error => console.error(error))
  .finally(() => db.close())
