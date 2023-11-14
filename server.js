import mongoose, { mongo } from "mongoose";


const uri = 'mongodb://127.0.0.1:27017/fruitsDB';

mongoose.connect(uri)

// Creating schema      ==> DB structure
const fruitScheme = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

const personScheme = new mongoose.Schema({
    name:String,
    age: Number
})

// Creating mongoose model      ==> collection
const Fruit = mongoose.model("Fruit", fruitScheme);
const Person = mongoose.model('Person', personScheme);

// Creating a doc

// const user1 = new Person({
//     name: "John Smith",
//     age: 24
// });
// user1.save();

// creating more than user
const user2 = new Person ({
    name: 'Mohamed Ahmed Omar',
    age: 22
});
const user3 = new Person ({
    name: 'Mohamed Ahmed',
    age: 22
});
const user4 = new Person({ 
    name: "Sami Marwan",
    age: 23
});

Person.insertMany([user2, user3, user4]);

// const fruit = new Fruit({
//     name:'PinApple',
//     rating: 10,
//     review: 'Good and tall'
// })

// fruit.save();