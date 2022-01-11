// import {PrismaClient} from '@prisma/client';
import { Dishes } from '../entities/dishes';

export class DishesRepository{
    private prisma;

    // constructor(){
    //     this.prisma = new PrismaClient();
    // }

    async insert(dishes: Dishes): Promise<void> {
        await this.prisma.dishes.create({
          data: {
            id: dishes.id,
            name: dishes.name,
            level: dishes.description,
            price: dishes.price,
          },
        });
      }

}