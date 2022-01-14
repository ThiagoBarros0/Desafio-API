import {PrismaClient} from '@prisma/client';
import { Dish } from '../entities/dish';

export class DishRepository{
    // private prisma;
    private dishes: Dish[];

    constructor(){
        this.dishes = [];
    }

    insert(dish: Dish){
      this.dishes.push(dish);
    }

    findByName(name: string): Dish | undefined {
      return this.dishes.find((d)=> d.name === name)
    }

    updateDescription(name: string, description: string){
      const dish = this.findByName(name) as Dish;
      this.dishes = this.dishes.filter((d) => d.name !== name )
      dish.description = description;
      this.dishes.push(dish);
    }

    remove(name: string){
      this.dishes = this.dishes.filter((d)=> d.name !== name)
    }

    findAll(){
      return this.dishes;
    }
    // async insert(dishes: Dishes): Promise<void> {
    //     await this.prisma.dishes.create({
    //       data: {
    //         id: dishes.id,
    //         name: dishes.name,
    //         level: dishes.description,
    //         price: dishes.price,
    //       },
    //     });
    //   }
    
    //   async findByName(name: string): Promise<Dishes | undefined> {
    //     const result = await this.prisma.dishes.findFirst({
    //       where: {
    //         name,
    //       },
    //       // include: {
    //       //   type: true,
    //       // },
    //     });
    //     if (!result) {
    //       return undefined;
    //     }
    //     return new Dishes(
    //       result.name,
    //       result.description,
    //       result.price,
    //       // new PokemonType(result.type.id, result.type.name),
    //       // result.id,
    //     );
    //   }

      

}