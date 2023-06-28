import * as S from './stylesCancelarAgenda'
import { NavBar } from '../../layout/NavBar/NavBar'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'

export const CancelarAgenda = () => {
    
    const formik = useFormik({
        initialValues: {
            comprovativo: '',
        },

        validationSchema: yup.object({
            comprovativo: yup.string().required('Entre com o número do comprovativo').min(6, 'Número de comprovativo inválido'),
        }),

        onSubmit: async(data) =>{
            try{
                const response = await fetch(`http://localhost:5555/agendamento/comprovativo/eliminar/${data.comprovativo}`, {
                    method: "DELETE"
                })

                if (response.ok) {
                    toast.success('Agendamento cancelado')
                    formik.resetForm()
                    const responseData = await response.json()
                    try{
                        const responseCancelado = await fetch("http://localhost:5555/cancelado/", {
                          method: "POST",
                          headers:{
                            "Content-type": "application/json"
                          },
                          body: JSON.stringify(responseData)
                        })
                      }
                      catch (error){
                        console.log("Erro de servidor");
                      }
                }
                else{
                    toast.error('Agendamento não encontrado!')
                    formik.resetForm()
                }
            }
            catch (error){
                console.log(error);
                toast.error("Erro de comunicação, por favor, tente mais tarde!")
            }
        }
    })

    return(
        <>
            <NavBar />
            <S.main>

                <h2>Cancelar Agendamento</h2>
                
                <S.containerForm>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="text" 
                                name='comprovativo'
                                placeholder="Número do comprovativo de agendamento"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.comprovativo}
                            />

                            <div>
                                {formik.touched.comprovativo && formik.errors.comprovativo ? (
                                    <span>{formik.errors.comprovativo}</span>
                                ):null}
                            </div>
                        </div>
                        <button type='submit'>Cancelar</button>
                    </form>

                </S.containerForm>

            </S.main>
        </>
    )
}