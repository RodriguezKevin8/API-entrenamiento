
// Import the GoogleGenerativeAI class from the package~
import { GoogleGenerativeAI } from '@google/generative-ai';
import { generateroutinedata, generatefooddata, generateboarddata, generatefistroutinedata,generatespecificroutinedata  } from '../Text/prompts.js';


// Create a new instance of the GoogleGenerativeAI class with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const generateTextFromPrompt = async (prompt, res) => {
    try {
        // Get the generative model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // Generate the content based on the prompt
        const result = await model.generateContent(prompt);
        // Get the response from the model
        const response = await result.response;
        let text = await response.text();
        console.log("Texto recibido:", text);
        // Remove the code block markdown from the response
        text = text.replace(/```json|```/g, ''); 

        const jsonResponse = JSON.parse(text);  
        // Send the JSON response
        res.json(jsonResponse);
    } catch (error) {
        console.error('Error al generar el contenido:', error);
        res.status(500).send('Hubo un error al generar el texto');
    }
};


export const generateText = async (req, res) => {
    const {muscle} = req.params;
    const prompt = generateroutinedata(muscle);   
    generateTextFromPrompt(prompt, res);   
       
};

//format to testing the endpoint
// Metodo GET http://localhost:3000/gemini/generate-routine


export const generateboard = async (req, res) => {
   const prompt = generateboarddata();
    generateTextFromPrompt(prompt, res);
}

//format to testing the endpoint
// Metodo GET http://localhost:3000/gemini/generate-board


export const generatefood = async (req, res) => {
    // Get the data from the request body {especific data.ingredient}
    const data = req.body;
    const prompt = generatefooddata(data);
    generateTextFromPrompt(prompt, res);
};

//format to testing the endpoint
// Metodo POST http://localhost:3000/gemini/generate-food
// Body:{ "ingrediente":"pollo" }

export const generatefistroutine = async (req, res) => {
    const data = req.body;
   const prompt = generatefistroutinedata(data);
    generateTextFromPrompt(prompt, res);
}

//format to testing the endpoint
// Metodo POST http://localhost:3000/gemini/generate-fist
// Body:{ "name":"Juan", "weight":"70", "height":"1.70", "age":"25", "objetive":"biceps" }

export const generatespecificroutine = async (req, res) => {
    const data = req.body;
    const prompt = generatespecificroutinedata(data);
    generateTextFromPrompt(prompt, res);
}

//format to testing the endpoint
// Metodo POST http://localhost:3000/gemini/generate-specific
// Body:{ "name":"Juan", "weight":"70", "height":"1.70", "age":"25", "objetive":"abdomen" }

export const generateExerciseSchedule = async (req, res) => {
    const data = req.body;
    const prompt = generateExerciseScheduleData(data);
    generateTextFromPrompt(prompt, res);
}

//format to testing the endpoint
// Metodo POST http://localhost:3000/gemini/generate-schedule
// Body:{ "goald:"bajar peso"}

