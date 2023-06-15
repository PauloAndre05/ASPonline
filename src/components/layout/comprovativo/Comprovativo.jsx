import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'/* 
import logoAngola from '../../../images/logo-angola.png'
import logoASPO from '../../../images/logo.svg' */

export const Comprovativo = (dataResponseAgendamento) =>{
    pdfMake.vfs = pdfFonts.pdfMake.vfs

    console.log("Dados do pdf",dataResponseAgendamento);
    const title = [        
        {
            text: 'Comprovativo de agendamento Nº: ',
            alignment: 'center',
            fontSize: 20,
            bold: true,
            margin: [50, 20, 50, 20]
        }
    ]

    const details = [
        
        {
            text: 'Nome Completo',
            fontSize: 16,
            bold: true,
            margin: [50, 15, 50, 0]
        },

        
        {
            text: dataResponseAgendamento.nome,
            fontSize: 12,
            margin: [50, 12]
        },
        
        {
            alignment: 'center',
            margin: [50, 20],
            table:{
                headerRows: 1,
                widths: ['*', 'auto', '*',],
                body:[
                    
                    [
                        {text: 'DOCUMENTO', styles: 'tableHeader', border: ['.1', '.1', '.1', '.1'],},
                        {text: 'DATA/HORA DO AGENDAMENTO', styles: 'tableHeader', border: ['1', '1', '1', '1']},
                        {text: 'POSTO DE ATENDIMENTO', styles: 'tableHeader', border: ['1', '1', '1', '1']},
                    ],  

                    [
                        {text: dataResponseAgendamento.servico.nome, styles: 'tableHeader', border: ['.1', '.1', '.1', '.1'],},
                        {text: `${dataResponseAgendamento.dataAgenda}/${dataResponseAgendamento.horario.hora}`, styles: 'tableHeader', border: ['1', '1', '1', '1'],},
                        {text: dataResponseAgendamento.postoAtendimento.nome, styles: 'tableHeader', border: ['1', '1', '1', '1'],},
                    ]


                ],
            },
        },

        {
            margin: [50, 40],
            alignment: 'center',

            text:[
                
                {
                    text: 'OBS: ',
                    fontSize: 16,
                    bold: true,
                },

                {
                    text: 'Pedimos aos utentes o escrupuloso cumprimento do horário, comparecendo 15 minutos antes da hora agendada para acautelar eventuais constrangimentos à entrada. Deve levar consigo toda documentação listado no website',
                },
            ],
        },
        
        {
            alignment: 'center',
            text: 'Imprima o seu comprovativo de agendamento e conserve-o!',
            margin: [50, 0],
        },

        {
            text: dataResponseAgendamento.postoAtendimento.local,
            margin: [50, 35, 50, 0],
        },

        {
            text: '+ 244 944617903',
            margin: [50, 10],
        },

        {
            
            text: 'https://aspo.netlify.app',
            margin: [50, 0],
        },

        {
            alignment: 'center',
            fontSize: 16,
            text: 'AGENDADO AOS 06 MAIO, 2023',
            margin: [50, 40],
        },
        
        {
            margin: [150, 60, 0, 0],
            width: 50,
            fontSize: 10,
            alignment: 'right',
            text: 'Em caso de perda do comprovativo, por favor, visite o website para baixar novo comprovativo, Obrigado!'
        },

        
    ]

    const rodape =[
        
      
    ]

    const docDefinitions = {
        pageSize: 'A4',
        pageMargins: [15, 50, 15, 40],

        header: [title],
        content: [details],
        footer: [rodape]
    }

    pdfMake.createPdf(docDefinitions).download();
}