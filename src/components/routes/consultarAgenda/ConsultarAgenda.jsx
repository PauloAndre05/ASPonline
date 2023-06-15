import { useState } from "react"
import * as S from "./styleConsultarAgenda"
import { NavBar } from "../../layout/NavBar/NavBar"
import { useFormik } from "formik"
import * as yup from 'yup'
import { Comprovativo } from "../../layout/comprovativo/Comprovativo"
import { toast } from "react-toastify"
import { Modal } from "./Modal"

export const ConsultarAgenda = () => {
    const [data, setData] = useState() /* 
    const [item, setItem] = useState({})  */
    const [openModal, setOpenModal] = useState (false)
    const [dataResponseAgendamento, setDataResponseAgendamento] = useState({})

    const formik = useFormik({
        initialValues: {
            bi: '',
            cedula: '',
        },

        validationSchema: yup.object({
            bi: yup.string().required("Informe o número do documento").min(14, 'BI inválido').max(14, "BI inválido"),
            cedula: yup.string()
        }),

        onSubmit: async(dados) => {

            if(data === "Bilhete"){
                try{
                    const response = await fetch(`http://localhost:5555/agendamento/bilhete/${dados.bi}`)

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
                }
            }

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
                        <div>
                            <select
                                name="tipoConsulta"
                                id="tipoConsulta"
                                required
                                value={data} onChange={ID}>
                                <option value="" disabled selected>Consultar Por</option>
                                <option value="Bilhete">Nº do Bilhete</option>
                                <option value="CedulaPessoal">Nº da cédula</option>
                            </select>
                            <div></div>
                        </div>
                        {
                        data === "Bilhete"?(
                            <div>
                                <input type="text" 
                                placeholder="Número do Bilhete" 
                                name="bi" 
                                id="bi" 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                value={formik.values.bi}/>

                                <div>
                                    {formik.touched.bi && formik.errors.bi? (
                                        <span>{formik.errors.bi}</span>
                                    ):null}
                                </div>
                            </div>
                        ):
                        (
                            <div>
                                <input type="text"
                                    placeholder="Número de cédula pessoal "
                                    name="cedula"
                                    id="cedula"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.cedula}
                                />

                                <div>
                                    {formik.touched.cedula && formik.errors.cedula? (
                                        <span>{formik.errors.cedula}</span>
                                    ):null}
                                </div>
                            </div>
                        )
                        }
                       <button type="submit" > Consultar </button>
                       
                    </form>
                        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} >
                            <S.respostaConsulta>
                                <p>Agendamento em andamento</p>
                                <button onClick={() => {Comprovativo(dataResponseAgendamento)
                                    setOpenModal(false)
                                }} type='button'> Baixar novo comprovativo</button>
                            </S.respostaConsulta>
                        </Modal>

                </S.containerForm>

            </S.main>
        </>
    )
}