import { useFormik } from 'formik'
import * as S from './stylesAgendar'
import * as yup from 'yup'
import { useEffect, useState } from 'react'


function Agendar() {

    const urlService = "http://localhost:3001/servico"
    const urlPosto = "http://localhost:3001/posto"

    const [dataService, setDataService] = useState([])
    const [dataPosto, setDataPosto] = useState([])

    /* »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» COLLING FUNCTIONS REQUEST ««««««««««««««««««««««««««««««««««««««««««««««««« */

    useEffect(() => {
        getService()
        getPosto()
    }, [])
    

    /* »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» REQUEST SERVICE ««««««««««««««««««««««««««««««««««««««««««««««««« */

    const getService = async () => {
        try{
            const response = await fetch(urlService)
            const responseData = await response.json()
            setDataService(responseData)
        }
        catch (error){
            console.log(error);
        }
    }

    /* »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» REQUEST POSTO ««««««««««««««««««««««««««««««««««««««««««««««««« */

    const getPosto = async () => {
        try{
            const response = await fetch(urlPosto)
            const responseData = await response.json()
            setDataPosto(responseData)
        }
        catch (error){
            console.log(error);
        }
    }

    /* »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» VALIDATION ««««««««««««««««««««««««««««««««««««««««««««««««« */


    const formik = useFormik({
        initialValues:{
            nome: '',
            telefone: '',
            email: '',
            servicoId: '',
            bi: '',
            cedula:'',
            postoId: '',
            data: '',
            hora: '',
        },

        validationSchema: yup.object({
            nome: yup.string().required('Por favor, digite o seu nome'),
            telefone: yup.string().required('O número de telefone é obrigatório').min(9, 'Digite um número válido de angola').max(12, 'Digite um numero validos'),
            email: yup.string().required('O email é obrigatório').email('Email inválido'),
            servicoId: yup.string().required('Selecione um serviço'),
            bi: yup.string().required('Informe o número do seu documento').min(14, 'Bi inválido'),
            cedula: yup.string().required('Informe o número do seu documento').min(6, 'Identificação inválida')
        }),

        onSubmit: async(data) => {
            console.log(data);
        }
    })


    return(
        <S.container>
            <S.text>
                <h1>Formulario de Agendamento</h1>
                <p>Entre com os dados no formulario abaixo para proceder com o agendamento</p>
            </S.text>
            <S.containerForm>
                <form onSubmit={formik.handleSubmit}>

                    <S.sessao1>
                        <S.inputs>
                            <div>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    placeholder="Nome Completo "
                                    value = {formik.values.nome}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div>
                                    {formik.touched.nome && formik.errors.nome ? (
                                        <span> {formik.errors.nome} </span>
                                    ):null}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="telefone"
                                    id="telefone"
                                    placeholder="Telefone "
                                    value = {formik.values.telefone}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div>
                                    {formik.touched.telefone && formik.errors.telefone ? (
                                        <span> {formik.errors.telefone} </span>
                                    ):null}
                                </div>
                            </div>
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="E-mail "
                                    value = {formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <div>
                                    {formik.touched.email && formik.errors.email ? (
                                        <span> {formik.errors.email} </span>
                                    ):null}
                                </div>
                            </div>
                        </S.inputs>
                        
                        <S.inputs>
                            <div>
                                <select
                                    name="servicoId"
                                    id="servicoId"
                                    value={formik.values.servico }
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="" disabled>Selecione o serviço *</option>
                                    {dataService.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.nome}
                                    </option>
                                    ))}
                                </select>
                        
                                <div>
                                    {formik.touched.servicoId && formik.errors.servicoId ? (
                                        <span> {formik.errors.servicoId} </span>
                                    ):null}
                                </div>
                            </div>
                        
                            {dataService.servico !== "de15629f-b447-480d-a778-60d2b984f8a3" &&(
                                <div>
                                    <input
                                        type="text"
                                        name="bi" id="bi"
                                        placeholder="Nº do bilhete "
                                        value = {formik.values.bi}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                        
                                    <div>
                                        {formik.touched.bi && formik.errors.bi ? (
                                            <span> {formik.errors.bi} </span>
                                        ):null}
                                    </div>
                                </div>
                            )}
                            {dataService.servico === "de15629f-b447-480d-a778-60d2b984f8a3" &&(
                                <div>
                                <input
                                    type="text"
                                    name="cedula"
                                    id="cedula"
                                    required placeholder="Nº de cédula pessoal ou certidão de nascimento *"
                                    value = {formik.values.cedula}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                        
                                <div>
                                    {formik.touched.cedula && formik.errors.cedula ? (
                                        <span> {formik.errors.cedula} </span>
                                    ):null}
                                </div>
                            </div>
                            )}

                            <div>
                                <select
                                    name="postoId"
                                    id="postoId"
                                    value={formik.values.posto}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    >
                                    <option value="" disabled>Posto de atendimento (seleção automática)</option>
                                    {dataPosto.map((option) => (
                                    <option value={option.id} key={option.id}>
                                        {option.nome}
                                    </option>
                                    ))}
                                </select>
                                    <div> </div>
                        
                            </div>
                        </S.inputs>
                    </S.sessao1>
                                        
                    <S.sessao2>
                        <div>
                            <input
                                type="datetime-local"
                                name="data"
                                id="data"
                                placeholder=""
                                value = {formik.values.nome}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                    </S.sessao2>
                        
                    <button type='submit'>Submeter</button>
                </form>
            </S.containerForm>
        </S.container>
    )
}

export { Agendar }