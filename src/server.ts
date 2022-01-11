import { app } from './app'
import { DishesController } from './controller/dishes-controller'

const porta = process.env.PORT || 3000

const server = app.listen(porta, () => console.log(`App ouvindo na porta ${porta}`))

process.on('SIGINT', () => {
    server.close()
    console.log('App finalizado')
})

const dishesController = new DishesController();
app.post('/pratos', async (req,res) => 
    dishesController.createDishes(req, res),
);

// app.get('/dishes', async (req, res) => dishesController.getAll(req, res));
