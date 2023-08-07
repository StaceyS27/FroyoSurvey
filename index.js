//creating object labeled customer
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaeksmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
};

//modifying properties in customer object using bracket notation
customer["email"] = "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer["zipCode"] = 63132;
customer["favoriteFlavors"] = ["coffee", "strawberry", "matcha"]

//deleting properties in the customer object
delete customer["zipCode"];
delete customer["favoriteStore"];

console.table(customer);

//adding additional key:values to the customer object using dot notation
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

console.table(customer);

//priting keys in survery/object in an array 
console.log(Object.keys(customer));

