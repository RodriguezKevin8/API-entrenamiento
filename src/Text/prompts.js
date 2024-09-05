export const generateroutinedata = () => {
    return `Devuélveme una rutina de ejercicio para bíceps con 5 ejercicios en formato JSON, con la siguiente estructura: 
    {
        "ejercicios": [
            {
                "nombre": "Nombre del ejercicio",
                "descripcion": "Descripción del ejercicio",
                "tiempo": "Tiempo de duración del ejercicio"
            }
        ]
    }`;
};

export const generatefooddata = (data) => {
    return `Devuélveme 3 recetas de comida que contenga ${data.ingrediente} en formato JSON, con la siguiente estructura: 
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
}

export const generateboarddata = () => {
    return `Devuélve solamente 1 consejo de rutina formato JSON, con la sig estructura: 
        {
            "consejo": [
                {
                    "titulo": "titulo del consejo",
                    "consejo": "Descripción del consejo"
                    
                }
            ]
        }`;
}

export const generatefistroutinedata = (data) => {
    return  `Basado en los datos de ${data.name} y basandose en su peso de ${data.weight} su altura de ${data.height} y su edad de ${data.age}, generame una rutina de maximo 5
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
}