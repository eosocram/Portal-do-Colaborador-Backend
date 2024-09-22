import { Router, Request, Response } from 'express'; 

const router = Router(); 

router.get('/inicial', (req: Request, res: Response) =>{
    res.send("Route inicial is running");

});

export default router;