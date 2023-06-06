import { useFormik } from 'formik'
import { Botao } from '../botao/Botao'
import * as S from './StylesNewSletter'
import * as yup from 'yup'
import { toast } from 'react-toastify'

function NewsLetter(){
    
    const urlNewsleter = "http://localhost:3001/newsleter/"

    const formik = useFormik({
        initialValues:{
            nome: "",
            email: "",
            mensagem: "",
        },

        validationSchema: yup.object({
            nome: yup.string().required('O nome completo é obrigatório').min(6, 'O nome deve ter no mínimo 6 caracteres'),
            email: yup.string().required("o email é obrigatório").email('Email inválido'),
            mensagem: yup.string().required('Escreva uma mensagen').min(6, 'A mensagem deve ter no mínimo 6 carateres')
        }),

        onSubmit: async (data, {resetForm}) => {
            try{
                const response = await fetch(urlNewsleter, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })

                if(response.ok){
                    const responseData = await response.json()
                    console.log("Dados Enviados com sucesso para o backend");
                    console.log("Resposta do backend: ", responseData);
                    toast.success("Enviado com sucesso!")
                    resetForm()
                }

                else{
                    console.log("Erro ao enviar dados para o backend");
                    resetForm()
                }
            }
            catch (error){
                console.log("Erro na requisição", error);
            }
        },
    })

    return(
        <>
        
        <S.container>
            <S.containerMain>
                <S.texto>
                    <h1>Feed Back</h1>
                    <p>Deixa a sua mensagem para contribuir no desnvolvimento da plataforma. Garantimos privacidade e conteúdos úteis para aproveitar ao máximo nossos serviços.</p>
                </S.texto>
                <S.containerFormulario >
                    <S.form onSubmit={formik.handleSubmit}>
                        
                        <S.containerLabelInput>
                            <input 
                                type="text" 
                                name='nome' 
                                id='nome' 
                                placeholder='Nome Completo' 
                                onChange={formik.handleChange} 
                                value={formik.values.nome} 
                                onBlur={formik.handleBlur}
                            />

                            <div>
                                {formik.touched.nome && formik.errors.nome ? (
                                    <span>{formik.errors.nome}</span>
                                ):null}
                            </div>

                        </S.containerLabelInput>

                        <S.containerLabelInput >
                            <input 
                                type="email" 
                                name='email' 
                                id='email' 
                                placeholder='Seu Email' 
                                onChange={formik.handleChange} 
                                value={formik.values.email} 
                                onBlur={formik.handleBlur}
                            />

                            <div>
                                {formik.touched.email && formik.errors.email ? (
                                    <span>{formik.errors.email}</span>
                                ): null}
                            </div>

                        </S.containerLabelInput>

                        <S.containerLabelInput>
                            <textarea 
                                name="mensagem" 
                                id="mensagem" 
                                cols="30" 
                                rows="5" 
                                placeholder='Sua Mensagem' 
                                onChange={formik.handleChange} 
                                value={formik.values.mensagem}
                                onBlur={formik.handleBlur}>
                            </textarea>

                                <div>
                                    {formik.touched.mensagem && formik.errors.mensagem ?(
                                        <span>{formik.errors.mensagem}</span>
                                    ):null}
                                </div>

                        </S.containerLabelInput>

                        <S.buttonNewsLetter>
                            <Botao name="Enviar" type="submit"/>
                        </S.buttonNewsLetter>
                    </S.form>
                </S.containerFormulario>
            </S.containerMain>
        </S.container>
        </>    
    )
}

export { NewsLetter }