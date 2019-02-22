var user = {name: "Alexis", id: "3030057"};
console.log(user);
//console.log(user.id);
//console.log(user.email);

user.email = "ali@mail.com";

user.password = "wrigley";
user.contact = {cell: "555-5555", home: "556-6666"};
user.roles = ['admin', 'student', 'engineer']

console.log(user);
console.log(user.roles[0]);
console.log(user.contact.cell);

user.salary = 1000000;
user.roles.push("server admin");
user.contact.work = "544-4444";

console.log(JSON.stringify(user, null, 2));

var colors_of_things = {car: "black", snow: "white", grass: "green", sky: "blue"};
for (var c in colors_of_things) {
  console.log(c);
  console.log(colors_of_things[c]);
}



var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;
console.log(triangle);
var obj = new ColoredTriangle();
console.log(obj);
for (const prop in obj){
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}
console.log(obj);
