import {Request, Response} from 'express'
import { Dish } from '../entities/dish'
import {DishRepository} from '../repositories/dish-repository'
import {DishService} from '../services/dish-service'

export class DishController {
    private dishRepository: DishRepository;
    // private dishesService: DishesService;

    constructor(){
        this.dishRepository = new DishRepository();
        
    } 
    
    createDish(req: Request, res: Response){
        const { name, description, price } = req.body;
        // const dishes = new Dishes(name, description, price);
        // await this.dishesRepository.insert(dishes);
        // const dishes = this.dishesService.create(name, description, price);
        const dish = new Dish(name, description, price);
        this.dishRepository.insert(dish);
        res.status(201).json({
            id: dish.id,
            name: dish.name,
            description: dish.description,
            price: dish.price,
        });
        // if (dishes instanceof Error){
        //     return res.status(404).json({
        //         mensagem: dishes.message,
        //     })
        // }
        // return res.status(201).json({
        //     id: dishes.id,
        //     name: dishes.name,
        //     description: dishes.description,
        //     price: dishes.price
        // });
    } 

    deleteDish(req: Request, res: Response) {
        const { name } = req.params;
        const dish = this.dishRepository.findByName(name);
        if(!dish){
            return res.status(404).json({
                mensagem: 'Prato não encontrado',
            });
        }
    }
    getDishByName(req: Request, res: Response){
        const {name} = req.params;
        const dish = this.dishRepository.findByName(name);
        if (!dish){
            return res.status(404).json({
                mensagem: 'Prato não encontrado',
            });
        }
        return res.status(200).json({
            id: dish.id,
            nome: dish.name,
            description: dish.description,
            price: dish.price,
        })
    }

    getAll(req: Request, res: Response){
        const dish = this.dishRepository.findAll();
        return res.status(200).json(dish);
        
    }

    updateDish(req: Request, res: Response){
        const {name} = req.params;
        const {description} = req.body;
        const dish = this.dishRepository.findByName(name);
        if(!dish){
            return res.status(404).json({
                mensagem: 'Prato não encontrado',
            });
        }
        this.dishRepository.updateDescription(name, description);
        return res.status(204).send();
    }
}