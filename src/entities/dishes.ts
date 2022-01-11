export class Dishes {
    public id: number;
    public name: string;
    public description: string;
    public price: number;

    constructor(name: string, description: string, price: number, id?: number) {
        this.id = id ?? Math.floor(Math.random() * 1000);
        this.name = name;
        this.description = description;
        this.price = price;
      }
}