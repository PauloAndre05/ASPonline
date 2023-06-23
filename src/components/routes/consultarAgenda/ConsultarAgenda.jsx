import { useState } from "react"
import * as S from "./styleConsultarAgenda"
import { NavBar } from "../../layout/NavBar/NavBar"
import { useFormik } from "formik"
import * as yup from 'yup'
import { Comprovativo } from "../../layout/comprovativo/Comprovativo"
import { toast } from "react-toastify"
import { Modal } from "../../layout/modal/Modal"
import * as C from '../../layout/modal/stylesModal'

export const ConsultarAgenda = () => {
    const [openModal, setOpenModal] = useState (false)
    const [dataResponseAgendamento, setDataResponseAgendamento] = useState({})

    const formik = useFormik({
        initialValues: {
            comprovativo: '',
        },

        validationSchema: yup.object({
            comprovativo: yup.string().required("Entre com o número de comprovativo").max(6, 'Número de comprovativo inválido'),
        }),

        onSubmit: async(data) => {
            try{
                const response = await fetch(`http://localhost:5555/agendamento/comprovativo/${data.comprovativo}`)

                if(response.ok){                        
                    const responseData = await response.json()
                    console.log("Dados enviados com sucesso", responseData);
                    setDataResponseAgendamento(responseData)
                    setOpenModal(true)
                }
                else{
                    toast.error("Agendamento não encontrado")
                }     
            }
            catch (error){
                console.log(error);
                toast.error("Erro, tente mais tarde")
            }
        }
    })

    return(
        <>
            <NavBar />
            <S.main>
            <h2>Consultar Agendamento</h2>
            <S.containerForm>
                <form onSubmit={formik.handleSubmit}>
                    
                        <div>
                            <input type="text" 
                            placeholder="Número do Comprovativo" 
                            name="comprovativo" 
                            id="comprovativo" 
                            onChange={formik.handleChange} 
                            onBlur={formik.handleBlur} 
                            value={formik.values.comprovativo}/>

                            <div>
                                {formik.touched.comprovativo && formik.errors.comprovativo? (
                                    <span>{formik.errors.comprovativo}</span>
                                ):null}
                            </div>
                        </div>
                    
                    <button type="submit" > Consultar </button>
                    
                </form>
                    <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                        <C.contentModal>
                            <C.sucesso>
                                <p>Agendamento em Andamento</p>
                            </C.sucesso>
                            
                            <strong>Detalhes do agendamento</strong>
                            
                            <div>
                                <span>Nome: </span>
                                <p>{dataResponseAgendamento?.nome}</p>
                            </div>

                            <div>
                                <span>Documento: </span>
                                <p>{dataResponseAgendamento?.servico?.nome}</p>
                            </div>

                            <div>
                                <span>Posto de atendimento: </span>
                                <p>{dataResponseAgendamento?.postoAtendimento?.nome}</p>
                            </div>

                            <div>
                                <span>Data da Agenda: </span>
                                <p>{dataResponseAgendamento?.dataAgenda}</p>
                            </div>
                            
                            <div>
                                <span>Horário: </span>
                                <p>{dataResponseAgendamento?.horario?.hora}</p>
                            </div>

                            <div>
                                <span>Localização: </span>
                                <p>{dataResponseAgendamento?.postoAtendimento?.local}</p>
                            </div>

                            <article>Baixe novo comprovativo</article>
                            <button onClick={() => {Comprovativo(dataResponseAgendamento)
                                setOpenModal(false)
                            }} type='button'> Baixar Comprovativo</button>
                        </C.contentModal>
                    </Modal>

            </S.containerForm>

            </S.main>
        </>
    )
}