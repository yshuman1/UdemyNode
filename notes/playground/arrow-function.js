var square = x => x * x;

console.log(square(9));

var user = {
    name: 'yasin',
    sayHi: () => {
        console.log(arguments);
        
        console.log(`hi. I'm ${this.name}` );
        
    },
    sayHiAlt () {
        console.log(arguments);
        
        console.log(`hi. I'm ${this.name}` );
    }
};

user.sayHi(1, 2, 3);