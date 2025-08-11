class demo{
    constructor(name)
    {
        this.name=name;
    }

    display(){
        console.log(`The name is ${this.name}`);
    }
}

let data = new demo('Chetan')
console.log(data);
data.display();