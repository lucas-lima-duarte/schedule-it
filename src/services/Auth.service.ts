import User from '../models/User';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export class AuthService {
    register = async (email: string, password: string) => {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error('Email já está em uso');
        }

        const user = await User.create({ email, password });
        const token = this.generateToken(user._id);

        return { user, token };
    }

    login = async (email: string, password: string) => {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            throw new Error('Senha incorreta');
        }

        const token = this.generateToken(user._id);
        return { user, token };
    }

    private generateToken = (userId: unknown) => {
        return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '24h' });
    }
}