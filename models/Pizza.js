const { Schema, model } = require("mongoose");

const PizzaShema = new Schema({
  pizzaName: {
    type: String,
  },
  createdBy: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  Size: {
    type: String,
    default: "Large",
  },
  toppings: [],
});

//create the Pizza Model using PizzaShema
const Pizza = model("Pizza", PizzaShema);

//export the pizza mode

module.exports = Pizza;
