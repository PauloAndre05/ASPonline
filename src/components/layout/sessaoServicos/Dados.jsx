import {IdentificationCard, Cardholder, FileText, IdentificationBadge, Keyboard} from 'phosphor-react'

import { } from 'react-icons/hi'

export const dataCard = [
    {
        id: 1,
        img: <IdentificationCard size={50} weight="thin" />,
        servico: "Bilhete 1ª via",
        desc: "Requisitos",
        a: "Ter idade mínima de 6 anos",
        b: "Titular da certidão de Cópia integral do Asento de Nascimento",
        c: "",
        d: " ",
        e: " ",
        f: " ",

        
    },  
    {
        id: 2,
        img: <IdentificationBadge size={50} weight="thin" />,
        servico: "Cartão de Contribuinte",
        desc: "Requisitos",
        a: "Bilhete de Identidade Original",
        b: "",
        c: "",
        d: " ",
        e: " ",
        f: " ",
    },
    {
        id: 3,
        img: <FileText size={50}  weight="thin"/>,
        servico: "Recenseamento Militar",
        desc: "Requisitos",
        a: "Bilhete de Identidade Original",
        b: "Dclaração de Habilitação",
        c: "4 Fotografias",
        d: "Cópia da Cédula",
        e: ""
    },
    {
        id: 4,
        img: <Keyboard size={50} weight="thin" />,
        servico: "Cartão de Munícipe",
        desc: "Requisitos",
        a: "Bilhete de Identidade Original",
    },
    {
        id: 5,
        img: <FileText size={50}  weight="thin"/>,
        servico: "Atestado de Residência para cidadão Estrangeiro",
        desc: "Requisitos",
        a: "Cópia do cartão de estrangeiro residente ou passaporte com visto actualizado e original para comprovar",
        b: "Cópia do agregado familiar e original para comprovar",
        c: "Cópia do cartão de contribuinte"
    },
    {
        id: 6,
        img: <Cardholder size={48} weight="thin" />,
        servico: "Atestado de Residência para cidadão Nacional",
        desc: "Requisitos",
        a: "Cópia do BI com ",
        b: "Cópia do recibo de pagamento de energia "
    },
    {
        id: 7,
        img: <Cardholder size={48} weight="thin" />,
        servico: "Bilhete 2ª Via",
        desc: "Requisitos",
        a: "Bilhete original"
    },
    {
        id: 8,
        img: <IdentificationCard size={50} weight="thin" />,
        servico: "Agregado Familiar",
        desc: "Requisitos",
    }
]
