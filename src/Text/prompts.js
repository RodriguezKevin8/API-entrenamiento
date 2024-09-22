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
    return `Devuélveme 3 recetas de comida que contenga ${data.ingrediente} en formato JSON,, con la siguiente estructura: 
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
        "mensaje": "primero saludalo por su nombre ${data.name}  felicitalo por empezar este nuevo camino y  en vase a tus datos se genero esta rutina para ti y eso",
        "ejercicios": [
            {
                "nombre": "Nombre del ejercicio",
                "descripcion": "Descripción del ejercicio"
                "tiempo": "Tiempo de duración del ejercicio"
            }
        ]
    }`;
}

export const generatespecificroutinedata  = (data) => {
    return  `Basado en los datos de ${data.name} y basandose en su peso de ${data.weight} su altura de ${data.height} y su edad de ${data.age}, generame una rutina de maximo 5
    ejercicios que le ayuden a entrenar ${data.objetive} en formato JSON, con la siguiente estructura: 
    {
        "mensaje": "primero saludalo por su nombre ${data.name}  en vase a tus datos corporales de di esta rutina para ti y eso",
        "ejercicios": [
            {
                "nombre": "Nombre del ejercicio",
                "descripcion": "Descripción del ejercicio"
                "tiempo": "Tiempo de duración del ejercicio"
            }
        ]
    }`;
}

export const generateExerciseScheduleData = (data) => {
  return `Devuélveme un horario de ejercicios en formato JSON para el usuario que quiere trabajar especificamente este objetivo ${data.goal}, con la siguiente estructura: 
  {
      "schedule": [
          {
              "day_of_week": "Día de la semana (Monday, Tuesday, etc.)",
              "muscle_group": "Parte del cuerpo a entrenar (bíceps, tríceps, etc.)",
              "is_rest_day": true/false, 
          }
      ]
  } con la opcion de is_rest_day para saber si es un dia de descanso o no: con esto validas si la persona desacnsa por ejemplo en una semana y bajo esta rutina general si son 
              4 dias de entrenamiento y 3 de descanso true son de entrenamiento y false de descanso por ejemplo lunes true martes true miercoles false jueves true viernes false sabado true domingo false`;
};
