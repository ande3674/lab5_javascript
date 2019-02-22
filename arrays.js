var animals = ['cat', 'dog', 'monkey', 'frog', 'horse'];
console.log(animals);

animals.forEach(function(animal, i) {
    console.log(`Animal ${i} is ${animal}`);
})

animals[5] = 'cow';

console.log(animals);

animals[0] = 'kitten';

console.log(animals);

animals[8] = 'fish';

console.log(animals);

animals.sort();

animals[7] = "dinosaur";
animals[8] = "dinosaur";
//
// animals.forEach(function(animal, i) {
//   console.log(animal);
//   animal = undefined;
//   if (!animal){
//     console.log('undefined');
//     animal = 'dinosaur';
//   }
// })

console.log(animals);
