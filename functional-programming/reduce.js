//find 

// finds the first item

var orders = [
    { amount: 350},
    { amount: 400}
]

var totalAmount = 0;

for(var i = 0; i < orders.length; i++) {
    totalAmount =+ orders[i].amount
}

console.log(totalAmount)

//reduce

var totalAmount = orders.reduce(function(sum, order){
    console.log("hello", sum, order)
    return sum + order.amount
},0)

//first agument

//takes zero to start each iteration

//arrow

var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0) 

//list transformations