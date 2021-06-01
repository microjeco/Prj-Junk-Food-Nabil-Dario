export class Prodotto{
    constructor(private id:number,private type:string, private name: string, private urlPath: string, private price:number, private description: string){}

    getId(){
        return this.id;
    }
    getPrice(){
        return this.price;
    }

    getBlob(){
        return this.urlPath;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description;
    }

    getType(){
        return this.type;
    }
}