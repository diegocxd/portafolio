import imagen_algoritmo_genetico from "./imagenes_proyectos/algoritmo_genetico.png";
import imagen_dog_api from "./imagenes_proyectos/dog_api.png";
import imagen_fino from "./imagenes_proyectos/fino.png";
import imagen_micromatic from "./imagenes_proyectos/micromatic.png";
import imagen_simplex from "./imagenes_proyectos/simplex.png";
import imagen_regresion from "./imagenes_proyectos/regresion_lineal.png";
export const ProjectData=[
    {
        id:1,
        title:"Algoritmo genetico",
        about: "Este fue un proyecto que hicimos, este utiliza un algoritmo genetico sencillo, el objetivo de nuestros individuos es que lleguen a cierta zona de la malla.Para el metodo de reproduccion escogiamos a quienes llegaron y favoreciendo a quienes llegaron primero, tambien claramente agregamos la posibilidad de mutacion",
        tags:["Python"],
        demo:"",
        github:"https://github.com/diegocxd/uct-proyectos/tree/main/algoritmo_genetico",
        image: imagen_algoritmo_genetico,
    },
    {
        id:2,
        title:"Dog api",
        about: "Esta pagina web, fue construida con nextjs, en el cual se consume una api externa. Todo con el fin que en algun otro proyecto sepamos consumir correctamente una api.  ",
        tags:["Node JS", "Next JS"],
        demo:"",
        github:"https://github.com/diegocxd/uct-proyectos/tree/main/dog-api",
        image:imagen_dog_api,
    },
    {
        id:3,
        title:"Fino",
        about: "Esta pagina web, fue construida con nextjs, en el cual utiliza una base de datos relacional Mysql. FInance to NOrmal, esta creada para ayudar a las personas a controlar sus finanzas y visulizar sus gastos de una forma comoda y sencilla.",
        tags:["Node JS", "Next JS","XAMPP","MySQL"],
        demo:"",
        github:"https://github.com/diegocxd/uct-proyectos/tree/main/fino",
        image:imagen_fino,
    },
    {
        id:4,
        title:"Metodo Simplex",
        about: "Esta apicacion busca resolver el metodo simplex tanto para maximizacion y minimizacion, igualmente tiene integrado un parser, el cual se encargara de leer correctamente lo que se ingresa y tambien contamos con codigos que ayudan a darle un formato tabla.",
        tags:["Python"],
        demo:"",
        github:"https://github.com/diegocxd/uct-proyectos/tree/main/metodo_simplex",
        image:imagen_simplex,
    },
    {
        id:5,
        title:"Micromatic",
        about: "La creacion de esta pagina web es para probar nuestras habilidades, al igual que mezclar tecnologias que conocemos, en este caso utilizamos Python como api, para que haga la preparacion y manipulacion de nuestro datos alojados en MongoDB, una base de datos no relacional, igualmente usamos React, el cual tuvimos que usar redux, para mejorar el rendimiento de la misma.",
        tags:["React JS", "Node JS", "Python","MongoDB"],
        demo:"",
        github:"https://github.com/diegocxd/uct-proyectos/tree/main/micromatic",
        image:imagen_micromatic,
    },
    {
        id:6,
        title:"Regresion lineal y multiple",
        about: "Creamos este programa para analizar un dataset y poder predecir algunos datos, esto resulto bastante entretenido, dentro de todo se hizo limpieza de datos, manipulacion, representaicon, eliminacion de datos extremos.",
        tags:["R"],
        demo:"",
        github:"https://github.com/diegocxd/uct-proyectos/tree/main/regresion%20lineal%20y%20multiple",
        image:imagen_regresion,
    },
];