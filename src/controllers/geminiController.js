
// Import the GoogleGenerativeAI class from the package
import { GoogleGenerativeAI } from '@google/generative-ai';

// Create a new instance of the GoogleGenerativeAI class with the API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const generateText = async (req, res) => {
    try {

        // Get the generative model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        // Prompt to generate the content
        const prompt = `Devuélveme una rutina de ejercicio para bíceps con 5 ejercicios en formato JSON, con la siguiente estructura: 
        {
            "ejercicios": [
                {
                    "nombre": "Nombre del ejercicio",
                    "descripcion": "Descripción del ejercicio"
                    "tiempo": "Tiempo de duración del ejercicio"
                }
            ]
        }`;

        
        const result = await model.generateContent(prompt);
        // Get the response from the model
        const response = await result.response;
        let text = await response.text();
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

//format to testing the endpoint
// Metodo GET http://localhost:3000/gemini/generate-routine


export const generateboard = async (req, res) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // Prompt to generate the content
        const prompt = `Devuélve solamente 1 consejo de rutina formato JSON, con la sig estructura: 
        {
            "consejo": [
                {
                    "titulo": "titulo del consejo",
                    "consejo": "Descripción del consejo"
                    
                }
            ]
        }`;

        const result = await model.generateContent(prompt);
        // Get the response from the model
        const response = await result.response;
        let text = await response.text();
        // Remove the code block markdown from the response
        text = text.replace(/```json|```/g, '');

        const jsonResponse = JSON.parse(text);
        // Send the JSON response
        res.json(jsonResponse);
    } catch (error) {
        console.error('Error al generar el contenido:', error);
        res.status(500).send('Hubo un error al generar el texto');
    }
}

//format to testing the endpoint
// Metodo GET http://localhost:3000/gemini/generate-board


export const generatefood = async (req, res) => {
    // Get the data from the request body {especific data.ingredient}
    const data = req.body;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // Prompt to generate the content
        const prompt = `Devuélveme 3 recetas de comida que contenga ${data.ingrediente} en formato JSON, con la siguiente estructura: 
        {
            "receta": [
                {
                    "nombre": "Nombre de la receta",
                    "ingredientes": "Ingredientes de la receta",
                    "preparacion": "Pasos de preparación de la receta",
                    "valoresNutricionales": "Valores nutricionales de la receta"
                }
            ]
        }`;

        const result = await model.generateContent(prompt);
        // Get the response from the model
        const response = await result.response;
        // Get the text from the response
        let text = await response.text();
        // Remove the code block markdown from the response      
        text = text.replace(/```json|```/g, '');

        // Parse the JSON response
        let jsonResponse;
        try {
            // Parse the JSON response
            jsonResponse = JSON.parse(text);
        } catch (parseError) {
            // If there is an error parsing the JSON, log the error and return a 500 status code
            console.error('Error al analizar el JSON:', parseError);
            return res.status(500).send('Error al analizar el JSON de la respuesta');
        }
        // Send the JSON response
        res.json(jsonResponse);
    } catch (error) {
        console.error('Error al generar el contenido:', error);
        res.status(500).send('Hubo un error al generar el texto');
    }
};

//format to testing the endpoint
// Metodo POST http://localhost:3000/gemini/generate-food
// Body:{ "ingrediente":"pollo" }

export const generatefistroutine = async (req, res) => {
    const data = req.body;
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        // Prompt to generate the content
        const prompt = `Basado en los datos de ${data.name} y basandose en su peso de ${data.weight} su altura de ${data.height} y su edad de ${data.age}, generame una rutina de maximo 5
        ejercicios que le ayuden a entrenar ${data.objetive} en formato JSON, con la siguiente estructura: 
        {
            "mensaje": "Rutina generada para ${data.name} tipo en vase a tus datos se genero esta rutina para ti y eso",
            "ejercicios": [
                {
                    "nombre": "Nombre del ejercicio",
                    "descripcion": "Descripción del ejercicio"
                    "tiempo": "Tiempo de duración del ejercicio"
                }
            ]
        }`;

        const result = await model.generateContent(prompt);
        // Get the response from the model
        const response = await result.response;
        let text = await response.text();
        // Remove the code block markdown from the response
        text = text.replace(/```json|```/g, '');

        const jsonResponse = JSON.parse(text);
        // Send the JSON response
        res.json(jsonResponse);
    } catch (error) {
        console.error('Error al generar el contenido:', error);
        res.status(500).send('Hubo un error al generar el texto');
    }
}

//format to testing the endpoint
// Metodo POST http://localhost:3000/gemini/generate-fist
// Body:{ "name":"Juan", "weight":"70", "height":"1.70", "age":"25", "objetive":"biceps" }

