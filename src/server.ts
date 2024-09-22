import express, { Application } from 'express';
const CreateServer = (): Application => {
    const app = express();

    app.use(express.json());

    return app;
};

export default CreateServer;


