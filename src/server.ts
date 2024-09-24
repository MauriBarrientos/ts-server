import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import "dotenv/config";

class Server {
    app: express.Application;
    port: number | string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000;
        this.middlewares();
        this.routes();
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    routes(): void {
        this.app.get('/', (req, res) => {
            res.send('Hello, World!');
        });
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en http://localhost:${this.port}`);
        });
    }
}

export default Server;
