import {DishesRepository} from '../repositories/dishes-repository'
import {Dishes} from '../entities/dishes'

export class DishesService{
    private dishesRepository: DishesRepository;
    
    constructor(){
        this.dishesRepository = new DishesRepository();
    }
    
    async create(name:string, description: string, price: number): Promise<Dishes | Error>{
        // const dishes = await this.dishesRepository.findByName(name);
        // if (!dishes){
        //     return new Error('Nome do prato não encontrado')
        // }
        const dishes = new Dishes(name, description, price);
        await this.dishesRepository.insert(dishes);
        return dishes;
    }
}