import {Request, Response} from 'express'
import { Dishes } from '../entities/dishes'
import {DishesRepository} from '../repositories/dishes-repository'
import {DishesService} from '../services/dish-service'

export class DishesController {
    private dishesRepository: DishesRepository;
    private dishesService: DishesService;

    constructor(){
        this.dishesRepository = new DishesRepository();
        this.dishesService = new DishesService();
    } 
    
    async createDishes(req: Request, res: Response){
        const { name, description, price } = req.body;
        // const dishes = new Dishes(name, description, price);
        // await this.dishesRepository.insert(dishes);
        const dishes = await this.dishesService.create(name, description, price);
        if (dishes instanceof Error){
            return res.status(404).json({
                mensagem: dishes.message,
            })
        }
        return res.status(201).json({
            id: dishes.id,
            name: dishes.name,
            description: dishes.description,
            price: dishes.price
        });
    } 

    async getDishesByName(req: Request, res: Response){
        const {name} = req.params;
        const dishes = await this.dishesRepository.findByName(name);
        if (!dishes){
            return res.status(404).json({
                mensagem: 'Prato não encontrado',
            })
        }
    }

    // async getAll(req: Request, res: Response){
    //     const dishes = await this.DishesRepository.findAll();
    //     return res.status(200).json(dishes);
    //     })
    // }
}