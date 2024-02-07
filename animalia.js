

class Animalia {
    constructor(name, type){

        this.name = name;
        this.type = type;

        if(new.target === Animalia){
            throw new Error ('Impliment this class')
        }

    }

    classify(){
        throw new Error('Impliment this method')
    }
    
}

// Inheritance
class WithBackBone extends Animalia {
    constructor(name, type){
        super(name, type)
        
    }


classify(){
    
    return {
        name: this.name,
        type: this.type
    }
}

}

class ColdBlooded extends Animalia {
    constructor(name, type){
        super(name, type)
        
    }


classify(){
    
    return {
        name: this.name,
        type: this.type
    }
}
    
  
    
}

class WithoutBackBone extends ColdBlooded {
    
 

}

class WarmBlooded extends WithBackBone {

    
 

}

const classification = [
    {vertebrate : new WithBackBone('Cat', 'Mammals')},
    {vertebrate : new WithBackBone('Bird', 'AVES')},
    {vertebrate : new WithBackBone('Shark', 'Fish')},
    {vertebrate : new WithBackBone('Turtle', 'Reptile')},
    {vertebrate : new WithBackBone('Frog', 'Amphibia')}
]



// const an = new WithBackBone('cat', 'Aves')
// const amm = new WithoutBackBone('cat', 'Aves')
// // const ma = new warmBlooded();

console.log(classification)
// console.log(ma)