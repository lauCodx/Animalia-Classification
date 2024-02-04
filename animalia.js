
const animalKingdoms = [

    {name: 'Shark', withoutBackBone: false, coldBlooded: true, warmBlooded: false, withBackBone: true, type: 'Fish'},

    {name: 'Butterfly', withoutBackBone: true, coldBlooded: true, warmBlooded: false, withBackBone: false, type: 'Anthropoda'},

    {name: 'Frog', withoutBackBone: false, coldBlooded: true, warmBlooded: false, withBackBone: true, type: 'Amphibian'},

    {name: 'Turtle', withoutBackBone: false, coldBlooded: true, warmBlooded: false, withBackBone: true, type: 'Reptiles'},

    {name: 'Bird', withoutBackBone: false, coldBlooded: false, warmBlooded: true, withBackBone: true, type: 'AVES'},
    
    {name: 'Cat', withoutBackBone: false, coldBlooded: false, warmBlooded: false, withBackBone: true, type: 'Mammals'}
]



class Animalia {
    constructor(){

        this.animalShelf = [];
    }
    
    addToShelf(animal){
        for (let animalKingdoms of animal ){
            this.animalShelf.push(animalKingdoms);
        }
    }

    showAll(){
        return this.animalShelf;
    }

    check(){
        throw new Error ("you can only impliment this method")
    }
}

// Inheritance
class WithoutBackBone extends Animalia {

    constructor(){
        super();
        this.animalShelf = []
    }

    

    check() {

        const checkIn = this.animalShelf.filter(animal => animal.withoutBackBone === true);

        const select = checkIn.map(animal => {
            return {
                name : animal.name,
                type: animal.type
            }
        })

        return select;
    }
}


class WithBackBone extends Animalia{
    
    constructor(){
        super();

        this.animalShelf = [];
    }

    check(){
        const checkIn = this.animalShelf.filter(animal => animal.withBackBone === true);

        const select = checkIn.map(animal => {
            return {
                name : animal.name,
                type: animal.type
            }
        })

        return select;
    }

}



const animalia = new Animalia();
animalia.addToShelf(animalKingdoms);


const backBone = new WithBackBone()

// console.log(animalia.showAll())
console.log(backBone.check())

//     withBackBone (){
//         const check = this.animalShelf.filter(animal => animal.withBackBone === true);

//         return check;
//     }

//     coldBlooded(){
//         const check = this.animalShelf.filter(animal => animal.coldBlooded === true);

//         return check;
//     }

//    warmblooded (){
//         const check = this.animalShelf.filter(animal => animal.warmBlooded === true);

//         return check;
//     }


// }

// module.exports = Animalia;
// module.exports = WithoutBackBone;
// module.exports = WithBackBone;