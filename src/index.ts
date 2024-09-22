import { PORT } from './config/env';
import routes from './routes/index'; 
import CreateServer from './server';

const app = CreateServer(); 
app.use('/inicial', routes);
app.listen(PORT, () =>{
    console.log(`Server is running ${PORT}`);
})