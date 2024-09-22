import { PrismaClient } from '@prisma/client'; 
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export default class User {
    /**
     * @param {string} email
     */
    static async findByEmail(email) {
        return prisma.users.findUnique({
            where: {
                email: email
            }
        });
    }

    /**
     * @param {Object} data 
     */
    static async create(data) {
       
        const hashedPassword = await bcrypt.hash(data.password, 10); 

        return prisma.users.create({
            data: {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                password: hashedPassword, 
                weight: data.weight,
                height: data.height,
                age: data.age,
                goal: data.goal
            }
        });
    }

    /**
     * @param {Object} data 
     */
    static async login(data) {
       
        return prisma.users.findUnique({
            where: {
                email: data.email
            },
            select: {
                user_id: true,
                first_name: true,
                last_name: true,
                goal: true,
                age: true,
                weight: true,
                height: true,
                password: true  // Recuperar también la contraseña encriptada
            }
        });
    }
}
