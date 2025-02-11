const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const RestaurantSchema = new mongoose.Schema({
    name: String,
    city: String,
    itemsArr: [String]
});

const Item = mongoose.model('Item', ItemSchema);
const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = { Item, Restaurant };

