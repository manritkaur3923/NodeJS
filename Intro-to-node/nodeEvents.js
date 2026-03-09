const { log } = require("console");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// myEmitter.on("meteriod", (num)=>{
//     console.log(`hello earth.. I've ${num} meteors!!! let me destroy you.`)
// })

// console.log("earth dancing..")
// myEmitter.emit("meteriod", 3)
// console.log("earth crying..")

myEmitter.on("userLogIn", ()=>{
    console.log("User has Logged in")
})

myEmitter.on("orderPlaced", (orderId, amount) =>{
    console.log(`Order ${orderId} placed at price ${amount}` );
})

myEmitter.on("PaymentSuccess", ()=>{
    console.log("Email sent")
})
myEmitter.on("PaymentSuccess", ()=>{
    console.log("Invoice generated")
})

myEmitter.emit("userLogIn")
myEmitter.emit("orderPlaced", 101, 450)
myEmitter.emit("PaymentSuccess")
