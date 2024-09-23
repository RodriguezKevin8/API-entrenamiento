import { PrismaClient } from "@prisma/client";
import axios from "axios";

const prisma = new PrismaClient();

export default class Routine {
    static async createfisrt(data) {
        try {

            const response = await axios.post('http://localhost:3000/gemini/generate-fist', {
                name: data.name,
                weight: data.weight,
                height: data.height,
                age: data.age,
                objetive: data.objetive
            });
            const routineData = response.data;

            const routine = await prisma.routines.create({
                data: {
                    user_id: data.user_id,
                    training_area: data.objetive,
                    routine_json: routineData, 
                    comments: "",
                },
            });

            return routine;
        } catch (error) {
            throw error;
        }
    }

    static async create(data) {
        try {
            
            const response = await axios.post('http://localhost:3000/gemini/generate-specific', {
                name: data.name,
                weight: data.weight,
                height: data.height,
                age: data.age,
                objetive: data.objetive
            });
            const routineData = response.data;

            const routine = await prisma.routines.create({
                data: {
                    user_id: data.user_id,
                    training_area: data.objetive,
                    routine_json: routineData,
                    comments: "",
                },
            });

            return routine;
        } catch (error) {
            throw error;
        }
    }
}

