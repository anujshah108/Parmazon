const db = require('APP/db')

const seedAddresses = [
  {firstName: 'Barack', lastName: 'Obama', address1: '1600 Pennsylvania Ave', city: 'Washington DC', state: 'DC', phone: '555-555-5555', zip: '20500', user_id: 1},
  {firstName: 'Donald', lastName: 'Trump', address1: 'Trump Tower', address2: 'Apt 1', city: 'New York City', state: 'NY', phone: '555-555-1234', zip: '10022', user_id: 2},
  {firstName: 'John', lastName: 'Smith', address1: '1 Main Street', city: 'Washington DC', state: 'DC', phone: '555-555-5555', zip: '20500', user_id: 3},
  {firstName: 'Ned', lastName: 'Stark', address1: 'Castle', city: 'Winterfell', state: 'AZ', phone: '555-555-5555', zip: '20500', user_id: 3},
  {firstName: 'Test', lastName: 'User', address1: '1 Street Road', city: 'Washington DC', state: 'DC', phone: '555-555-5555', zip: '20500', user_id: 4},
]

const seedAddressesFunc = () => {return db.Promise.each(seedAddresses, address => db.model('addresses').create(address))}

const seedOrders = [
  {status: 'pending', user_id: 3, address_id: 1},
  {status: 'completed', user_id: 3, address_id: 1},
  {status: 'pending', user_id: 4, address_id: 1},
  {status: 'returned', user_id: 5, address_id: 1},
  {status: 'completed', user_id: 1, address_id: 1},
  {status: 'completed', user_id: 2, address_id: 1},
  {status: 'completed', user_id: 2, address_id: 1},
  {status: 'completed', user_id: 2, address_id: 1},
  {status: 'completed', user_id: 2, address_id: 1},
]

const seedOrdersFunc = () => {return db.Promise.each(seedOrders, order => db.model('orders').create(order))}

const seedProducts = [
  {name: 'Mozzarella Bufala dop', price: 220.00, stockQuantity: 1, summary: ['Most Popular Mozzarella', 'Award Winner'], description: 'This mozzeralla is denomination of protected origin (DOP), made with ingredients of Bufala. Has a springier texture and a creamier taste when compared to other mozzarellas.', imageURL: 'http://www.formaggio.it/wp-content/uploads/2014/11/Mozzarella-di-Bufala-Campana-Dop.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Ricotta', price: 340.00, stockQuantity: 1, summary: ['A mild-tasting staple', 'Limited Supply'], description: 'Ricotta is pure white, firm, rindless cheese. This cheese has a supple, mild taste made from lightly salted sheep\'s milk curd that is pressed and dried, then aged for a minimum of three months', imageURL: 'https://aos.iacpublishinglabs.com/question/aq/700px-394px/ricotta-cheese-bad_85482004be158ca3.jpg?domain=cx.aos.ask.com', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Asiago', price: 149.99, stockQuantity: 1, summary: ['Creamy'], description: 'Asiago made from pasteurized whole milk and aged for about a month. A young cheese of this age has a full, creamy flavor. Great with crusty Italian bread and glass of Pinot Grigio!', imageURL: 'http://www.ottawacitizen.com/life/cms/binary/8336432.jpg', category: '', location: 'USA', age: 5, milkType: 'goat'},
  {name: 'Halloumi', price: 230.01, stockQuantity: 10, summary: ['Salty and Tangy', 'Site Favorite'], description: 'Halloumi has a salty, tangy flavor and a springy texture, similar to Mozzarella. The high melting point allows Halloumi to be grilled without browning. Grilled Halloumi is an excellent appetizer or addition to any main course. Halloumi Cheese is also delicious eaten fresh in salads or sandwiches or with fresh fruit. It is often paired with watermelon in its native Cyprus. Halloumi is often accompanied by mint leaves in the packaging which not only add flavor but also preserve the cheese.', imageURL: 'http://ichef-1.bbci.co.uk/news/660/media/images/70026000/jpg/_70026554_halloumi_bbc.jpg', category: '', location: 'USA', age: 1, milkType: 'Buffalo'},
  {name: 'Cheddar', price: 250.50, stockQuantity: 20, summary: ['A classic staple', 'Pairs well with anything'], description: 'Cheddar cheese, the most widely purchased and eaten cheese in the world is always made from cow\'s milk. It is a hard and natural cheese that has a slightly crumbly texture if properly cured and if it is too young, the texture is smooth. It gets a sharper taste as it matures, over a period of time between 9 to 24 months. Shaped like a drum, 15 inches in diameter, Cheddar cheese is natural rind bound in cloth while its colour generally ranges from white to pale yellow. However, some Cheddars may have a manually added yellow-orange colour.', imageURL: 'http://cdn-image.myrecipes.com/sites/default/files/styles/420x420/public/image/galleries/08/7ww-cheddar-mr-gallery-x.jpg', category: '', location: 'USA', age: 4, milkType: 'cow'},
  {name: 'Swiss', price: 190.00, stockQuantity: 30, summary: ['A wholly solid pick'], description: 'Swiss cheese is a generic name for several related varieties of cheese. It is an American version of the Swiss Emmental and is known for being shiny, pale yellow. While it has a firmer texture than baby Swiss, its flavour is mild, sweet and nut-like. It has a savory, but not very sharp taste. Some types of Swiss cheese have a distinctive appearance. Some cheeses have holes known as eyes while some do not. Swiss cheese without eyes is known as blind.  But in general, the larger the eyes in a Swiss cheese, the more pronounced its flavour!', imageURL: 'http://www.cheese.com/media/img/cheese/wiki/swiss.jpg', category: '', location: 'USA', age: 1, milkType: 'goat'},
  {name: 'American', price: 4100.00, stockQuantity: 10, summary: ['Excellent for grilled cheeses and melts', 'Not technically cheese'], description: 'American cheese is processed cheese made from a blend of milk, milk fats and solids, with other fats and whey protein concentrates. At first it was made from a mixture of cheeses, more often than not Colby and Cheddar. Sometimes, instead of the word cheese, it is called as "American slices" or "American singles".', imageURL: 'http://nutrition4family.com/blog/wp-content/uploads/2015/03/bigstock-American-Cheese-68723344.jpg', category: '', location: 'UK', age: 1, milkType: 'cow'},
  {name: 'Gouda', price: 320.00, stockQuantity: 1, summary: ['Dutch', 'Award Winner'], description: 'Gouda, or "How-da" as the locals say, is a Dutch cheese named after the city of Gouda in the Netherlands. If truth be told, it is one of the most popular cheeses in the world, accounting for 50 to 60 percent of the world\'s cheese consumption. It is a semi-hard cheese celebrated for its rich, unique flavour and smooth texture. The original cheese markets in Gouda is one of the last standing commercial cheese markets in the Netherlands. Since the name is not protected, it has become a generic classification for all cheeses produced and sold under the name Gouda.', imageURL: 'http://www.cheese.com/media/img/cheese/Midnight_Moon_Gouda.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Brie', price: 90.00, stockQuantity: 1, summary: ['Queen of Cheeses', 'Award Winner'], description: 'Brie is the best known French cheese and has a nickname "The Queen of Cheeses". Brie is a soft cheese named after the French region Brie, where it was originally created. Several hundred years ago, Brie was one of the tributes which had to be paid to the French kings.', imageURL: 'http://www.cheese.com/media/img/cheese/Brie_DAlexis.jpg', category: '', location: 'USA', age: 1, milkType: 'vegan'},
  {name: 'Pecorino Romano', price: 170.00, stockQuantity: 1, summary: ['Italian and American varieties', 'Award Winner'], description: 'Pecorino is a term used to define Italian cheeses made from 100% sheep’s milk. However, the American counterpart of the cheese is made from cow’s milk. Of the four Pecorino cheeses that have received Protected Designation of Origin (PDO) status under European Union law, Pecorino Romano is one of the most ancient types of cheese as well as the most famous outside of Italy. As per legislation, production of Pecorino Romano is allowed only on the islands of Sardinia, Lazio and in the Tuscan Province of Grosseto. All these varieties differ from each other, depending on how much they have aged.', imageURL: 'http://www.cheese.com/media/img/cheese/Pecorino_romano.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Manchego', price: 270.00, stockQuantity: 1, summary: ['From unpasteurised milk', 'Award Winner'], description: 'The Manchego is produced in the La Mancha region of Spain, which is also home to Don Quixote. It is made from unpasteurised sheep\'s milk. It is one of the popular cheeses from Spain, made from sheep\'s milk. It also comes under the PDO guidelines.', imageURL: 'http://www.cheese.com/media/img/cheese/Manchego.jpg', category: '', location: 'USA', age: 1, milkType: 'vegan'},
  {name: 'Camembert', price: 320.00, stockQuantity: 1, summary: ['Bland hard and crumbly', 'Award Winner'], description: 'Marie Harel created the original Camembert cheese from raw milk in Normandy, France in 1791. Today, however, a very small percentage of producers make cheese from raw milk with the same process as Marie Harel would have used. Those who produce cheese using Marie Harel\'s method, can legally call their cheese Camembert Normandie under the AOC guidelines. However, the production of Camembert cheese has now transcended the AOC designation. Very good varieties of Camembert cheese made from pasteurised milk can be found in Normandy today. The best of them is the Camembert Le Châtelain.', imageURL: 'http://www.cheese.com/media/img/cheese/camembert_france.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Provolone', price: 204.00, stockQuantity: 1, summary: ['Po valley staple', 'Award Winner'], description: 'Provolone is an Italian cheese made from cow’s milk whose origins lie in Southern Italy. Today, the major production of Provolone takes place in Po valley region, particularly Lombardy and Veneto. Both Provolone Valpadana and Provolone del Monaco are granted DOP designation by the European Union to ensure that cheese is produced under strict supervision using specific methods to guarantee supreme quality.', imageURL: 'http://www.cheese.com/media/img/cheese/Provolone_3.jpg', category: '', location: 'USA', age: 1, milkType: 'sheep'},
  {name: 'Parmesan', price: 195.00, stockQuantity: 1, summary: ['Excellent on pasta'], description: 'The Parmigiano Reggiano or Parmesan cheese as it is called in English is considered to be among the top cheeses by cheese connoisseurs. Today, it is produced by various producers. However, PDO designation states that for a cheese to be called as Parmesan, it has to be produced from cows grazing on fresh grass and hay.', imageURL: 'http://media1.s-nbcnews.com/i/newscms/2016_07/977756/grated-parmesan-today-tease-160217_f9ef7604016457433d18c10f422ffcde.jpg', category: '', location: 'USA', age: 1, milkType: 'cow'},
  {name: 'Feta', price: 175.00, stockQuantity: 1, summary: ['Greek Classic', 'The White Cheese'], description: 'Feta is undoubtedly one of the most famous Greek cheeses. In fact, Feta occupies 70% stake in Greek cheese consumption. The cheese is protected by EU legislations and only those cheeses manufactured in Macedonia, Thrace, Thessaly, Central Mainland Greece, the Peloponnese and Lesvos can be called ‘feta’. Similar cheeses produced elsewhere in the eastern Mediterranean and around the Black Sea, outside the EU, are often called ‘white cheese’.', imageURL: 'http://www.cheese.com/media/img/cheese/Greek_Feta_1.jpg', category: '', location: 'USA', age: 1, milkType: 'sheep'},
]

const seedProductsFunc = () => {return db.Promise.each(seedProducts, product => db.model('products').create(product))}

const seedProductOrders = [
  {price: 10.00, quantity: 1, name: 'Cheddar', ordered_product: 5, userid: 3, order_id: 1, inCart: false},
  {price: 10.00, quantity: 1, name: 'Swiss', ordered_product: 6, userid: 3, order_id: 1, inCart: false},
  {price: 10.00, quantity: 1, name: 'American', ordered_product: 7, userid: 3, order_id: 1, inCart: false},

]

const seedProductOrdersFunc = () => {return db.Promise.each(seedProductOrders, productOrder => db.model('productOrders').create(productOrder))}

const seedReviews = [
  {title: 'Bad Experience', body: 'Cheese was already half eaten', stars: 1, author_id: 1, product_id: 1},
  {title: 'Average Cheese', body: 'I feel neutral about this product', stars: 3, author_id: 1, product_id: 2},
  {title: 'Excellent!!!', body: 'Fantastic product!', stars: 5, author_id: 2, product_id: 3},
  {title: 'Great Tasting cheese', body: 'I loved this and it was excellent, I will definitely be ordering more in the future. Thanks for the great product!', stars: 5, author_id: 1, product_id: 1},
  {title: 'Not for me', body: 'I just can\'t really see the appeal of this one. I guess it\'s just not for me', stars: 2, author_id: 2, product_id: 2},
  {title: 'Disgusting', body: 'I honestly don\'t understand why people like cheese', stars: 1, author_id: 3, product_id: 8},
  {title: 'Pairs well with Four Loko', body: 'I will never forget my first experience with this cheese', stars: 4, author_id: 4, product_id: 1},
  {title: 'Excellent Product, arrived on time in good condition', body: 'The wheel is bigger than I thought, it will last me months', stars: 5, author_id: 5, product_id: 5},
  {title: 'Very satisfied with this product', body: 'Tastiest cheese I\'ve ever eaten', stars: 5, author_id: 1, product_id: 1},
  {title: 'Delicious and Healthy!', body: 'You can never eat too much cheese', stars: 5, author_id: 1, product_id: 4},
]

const seedReviewsFunc = () => {return db.Promise.each(seedReviews, review => db.model('reviews').create(review))}

const seedUsers = [
  {firstName: 'Barack', lastName: 'Obama', isAdmin: false, email: 'barack@example.gov', password: '1234'},
  {firstName: 'John', lastName: 'Cheeselover', isAdmin: false, email: 'john@example.com', password: 'MAGA'},
  {firstName: 'Evan', lastName: 'Scriber', isAdmin: true, email: 'evan@example.com', password: '1234'},
  {firstName: 'Who', lastName: 'Cares', isAdmin: false, email: '1@1.com', password: '1'},
  {firstName: 'Adam', lastName: 'zzz', isAdmin: true, email: '2@2.com', password: '2'},
  {firstName: 'John', lastName: 'Kennedy', isAdmin: false, email: 'jfk@whitehouse.gov', password: 'normajean'},
  {firstName: 'Adam', lastName: 'Smith', isAdmin: false, email: 'adamsmith@gmail.com', password: 'invisiblehand'},
  {firstName: 'Bill', lastName: 'Gates', isAdmin: false, email: 'bill@microsoft.com', password: 'ie8rocks'},
  {firstName: 'George', lastName: 'Lucas', isAdmin: false, email: 'George@skywalker.com', password: 'jarjar77'}

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
