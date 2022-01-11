import {Request, Response} from 'express'
import { Dishes } from '../entities/dishes'
import {DishesRepository} from '../repositories/dishes-repository'

export class DishesController {
    async createDishes(req: Request, res: Response){
        const { name, description, price } = req.body;
        const dishes = new Dishes(name, description, price);
        return res.status(201).json({
            id: dishes.id,
            name: dishes.name,
            description: dishes.description,
            price: dishes.price
        });
    } 

    // async getAll(req: Request, res: Response){
    //     const dishes = await this.DishesRepository.findAll();
    //     return res.status(200).json(dishes);
    //     })
    // }
}