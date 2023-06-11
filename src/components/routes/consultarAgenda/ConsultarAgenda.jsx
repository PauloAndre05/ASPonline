import { useState } from "react"
import * as S from "./styleConsultarAgenda"
import { NavBar } from "../../layout/NavBar/NavBar"
import { useFormik } from "formik"
import * as yup from 'yup'
import * as C from '../../layout/modal/stylesModal'

import { Comprovativo } from "../../layout/comprovativo/Comprovativo"
import { Modal } from "../../layout/modal/Modal"

export const ConsultarAgenda = () => {
    const [data, setData] = useState() 
    const [item, setItem] = useState({}) 
    const [openModal, setOpenModal] = useState (false)

    const formik = useFormik({
        initialValues: {
            bi: '',
            id: '',
        },

        validationSchema: yup.object({
            bi: yup.string().min(14, 'Bi inválido'),
            id: yup.string()
        }),

        onSubmit: async(dados) => {
            console.log(dados);
            setItem(dados)
        }
    })

    function ID(e) {
        setData(e.target.value)
    }
    return(
        <>
            <NavBar />
            <S.main>
                <h2>Consultar Agendamento</h2>
                <S.containerForm>
                    
                    <form onSubmit={formik.handleSubmit}>
                        <select
                            name="tipoConsulta"
                            id="tipoConsulta"
                            required
                            value={data} onChange={ID}>
                            <option value="" disabled selected>Consultar Por</option>
                            <option value="Bilhete">Nº do Bilhete</option>
                            <option value="Comprovativo">Nº do comprovativo de agendamento</option>
                        </select>
                        {
                        data === "Bilhete"?(
                            <input type="text" placeholder="Número do Bilhete" name="bi" id="bi" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.bi}/>
                        ):
                        (
                            <input type="text" placeholder="Número do comprovativo" name="id" id="id" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.id}/>
                        )
                        }
                       <button
                            type="submit"
                            onClick={() => {
                                if (formik.isValid && formik.dirty) {
                                    formik.handleSubmit(); // Submeter o formulário
                                    setOpenModal(true);
                                }
                            }}
                            >
                            Consultar
                    </button>
                        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                            <C.respostaConsulta>
                                <p>Agendamento em andamento</p>
                                <button onClick={Comprovativo} type='button'> Baixar novo comprovativo</button>
                            </C.respostaConsulta>
                        </Modal>
                    </form>

                </S.containerForm>

            </S.main>
        </>
    )
}