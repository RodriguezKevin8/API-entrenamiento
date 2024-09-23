import routines from "../models/Routine.js";

export default class RoutineController {

    static async createRoutine(req, res) {
        try {
            const data = req.body;
            const routine = await routines.createfisrt(data);
            res.status(201).json(routine); 
        } catch (error) {
            console.error('Error al crear la rutina:', error);
            res.status(500).json({ error: 'Error al crear la rutina' });
        }
    }
    //como probar este endpoint 
    // Metodo POST http://localhost:3000/routine/first-routine
    // Body: { "name":"Juan", "weight":"70", "height":"1.70", "age":"25", "objetive":"biceps", "user_id":1 }

    static async create(req, res) {
        try {
            const data = req.body;
            const routine = await routines.create(data);
            res.status(201).json(routine); 
        } catch (error) {
            console.error('Error al crear la rutina:', error);
            res.status(500).json({ error: 'Error al crear la rutina' });
        }
    }

    
}
