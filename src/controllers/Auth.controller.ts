import { Request, Response } from 'express';
import { AuthService } from '../services/Auth.service';

export class AuthController {
    private service: AuthService;

    constructor() {
        this.service = new AuthService();
    }

    register = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await this.service.register(email, password);
            res.status(201).json(result);
        } catch (err) {
            res.status(400).json({ error: 'Erro ao registrar usuário', details: err });
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const result = await this.service.login(email, password);
            res.json(result);
        } catch (err) {
            res.status(401).json({ error: 'Erro ao fazer login', details: err });
        }
    }
}
