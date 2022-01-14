import {DishRepository} from '../repositories/dish-repository'
import {Dish} from '../entities/dish'

export class DishService{
    private dishRepository: DishRepository;
    
    constructor(){
        this.dishRepository = new DishRepository();
    }
    
    // async create(name:string, description: string, price: number): Promise<Dishes | Error>{
    //     // const dishes = await this.dishesRepository.findByName(name);
    //     // if (!dishes){
    //     //     return new Error('Nome do prato não encontrado')
    //     // }
    //     const dishes = new Dishes(name, description, price);
    //     await this.dishesRepository.insert(dishes);
    //     return dishes;
    // }
}