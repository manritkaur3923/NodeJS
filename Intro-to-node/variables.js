//local
const secret = "Secret key";
//shared
const name1 = "manrit kaur";
const name2 = "varsha";

const person = {
  name: "komal",
};

//exported only name1 , name2
const items = ["item1", 23];
// module.exports.singlePerson = person
module.exports = { name1, name2, items, person };

// console.log(module)
