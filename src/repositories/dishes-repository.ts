import {PrismaClient} from '@prisma/client';
import { Dishes } from '../entities/dishes';

export class DishesRepository{
    private prisma;

    constructor(){
        this.prisma = new PrismaClient();
    }

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
    
      async findByName(name: string): Promise<Dishes | undefined> {
        const result = await this.prisma.dishes.findFirst({
          where: {
            name,
          },
          // include: {
          //   type: true,
          // },
        });
        if (!result) {
          return undefined;
        }
        return new Dishes(
          result.name,
          result.description,
          result.price,
          // new PokemonType(result.type.id, result.type.name),
          // result.id,
        );
      }

      

}