import { Agendar } from "./agendar/Agendar";
import { Inicio } from "./inicio/Inicio";
import { Servicos } from "./servicos/Servicos";
import { Sobre } from "./sobre/Sobre";

export const routes = [
    {
        path: "/",
        element: Inicio,
    },

    {
        path: "/servicos",
        element: Servicos,
    },

    {
        path: "/agendar",
        element: Agendar,
    },

    {
        path: "/sobre",
        element: Sobre,
    }
]