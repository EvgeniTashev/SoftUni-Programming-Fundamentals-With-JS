function solve(arr){
    class cat {
        constructor (name, age){
            this.name = name;
            this.age = age;
        }
        meow(){ 
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    
    for (let x of arr){
        let [name, age] = x.split(" ");
        let tempCat = new cat(name,age)
        tempCat.meow();
    }



} 
solve(['Candy 1', 'Poppy 3', 'Nyx 2'])