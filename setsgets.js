class User {
    constructor(name,age){
        this.name=name;
        this.age =age;
    }
    get name(){
        return this._name.toUpperCase();
    }

    set name(value){
        this._name = value;
    }
}

const data = new User("tanveer","798")
console.log(data.name);