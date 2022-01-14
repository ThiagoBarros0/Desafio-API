import { app } from './app'
import { DishController } from './controller/dish-controller'

const porta = process.env.PORT || 3000

const server = app.listen(porta, () => console.log(`App ouvindo na porta ${porta}`))

process.on('SIGINT', () => {
    server.close()
    console.log('App finalizado')
})

const dishController = new DishController();
app.post('/dish', async (req,res) => 
    dishController.createDish(req, res)
);

app.get('/dish/:name', (req, res) => dishController.getDishByName(req, res),);

app.delete('/dish/:name', (req, res) => dishController.deleteDish(req, res),);

app.get('/dish', (req, res) => dishController.getAll(req, res));
// app.get('/dishes', async (req, res) => dishesController.getAll(req, res));
