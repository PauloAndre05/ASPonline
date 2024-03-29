import { useFormik } from 'formik'
import * as S from './stylesAgendar'
import * as C from '../../layout/modal/stylesModal'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { NavBar } from '../../layout/NavBar/NavBar'
import { Comprovativo } from '../../layout/comprovativo/Comprovativo'
import { Modal } from '../../layout/modal/Modal'
import { toast } from 'react-toastify'

function Agendar() {

    /* const urlIdentificacao = "http://localhost:3002/" */
    const urlService = "http://localhost:5555/servico/"
    const urlPosto = "http://localhost:5555/posto"
    /* const urlHorario = "http://localhost:3001/hora" */
    const [dataService, setDataService] = useState([])
    const [dataPosto, setDataPosto] = useState([])
    /* const [dataHorario, setDataHorario] = useState([]) */
    const [openModal, setOpenModal] = useState (false)
    const [horariosDisponiveis, setHorariosDisponiveis] = useState([]);
    const urlAgendamento = "http://localhost:5555/agendamento"
    const [dataResponseAgendamento, setDataResponseAgendamento] = useState({})


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

    /* ««««««««««««««««««««««««««««««««««««««««« REQUEST HORARIODISPONIVEL »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» */
      
/* 
    getHorario() */
    /* »»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»» VALIDATION ««««««««««««««««««««««««««««««««««««««««««««««««« */


    const formik = useFormik({
        initialValues:{
            nome: '',
            telefone: '',
            email: '',
            servicoId: '',
            bi: '',
            postoId: '',
            dataAgenda: '',
            horaId: '',
        },

        validationSchema: yup.object({
            nome: yup.string().required("O nome é obrigatório").min(6, "O nome deve ter no mínimo 6 caracteres"),
            telefone: yup.string().required("Digite o número de telefone").matches(/^[0-9]+$/, 'Digite apenas números').min(9, "Digite um número válido de angola").max(9, "Digite um número válido de angola"),
            email: yup.string().email("Digite email válido"),
            servicoId: yup.string().required("Selecione um documento"),
            bi: yup.string(),
            dataAgenda: yup.string().required("Escolha a data"),
            horaId: yup.string().required("Selecione um horário"),
        }),

        onSubmit: async(data) => {
            
            if(data.servicoId !== "b322590f-2196-4f63-bd91-e9f05d62c7f8"){
                try{
                    const responseApiIdentificacao = await fetch(`http://localhost:5050/bilhete/procurar/${data.bi}`)
                    if(responseApiIdentificacao.ok){
                        const responseDataApiIdentificacao = await responseApiIdentificacao.json() 
                        console.log(responseDataApiIdentificacao);
                    }
    
                    else{
                        toast.error("BI inválido")
                        return
                    }
                }   
    
                catch (error){
                    console.log(error);
                    toast.error("Erro!")
                    formik.resetForm()
                    return
                }
            }
            

            try{
                const response = await fetch(urlAgendamento, {
                    method: "POST",
                    headers:{
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                
    
                if (response.ok) {
                    const responseData = await response.json()
                    console.log("Dados enviados no back");
                    console.log("Resultado: ", responseData);
                    try{
                        const encontrarAgendamento = await fetch(`http://localhost:5555/agendamento/${responseData.id}`)
                        if (encontrarAgendamento.ok) {
                            const agendamentoEncontrado = await encontrarAgendamento.json()
                            formik.resetForm()
                            setDataResponseAgendamento(agendamentoEncontrado)
                            setOpenModal(true)
                        }
                    }

                    catch(error){
                        console.log("Erro do servidor");
                    }
                }

                else {
                    console.log("Erro ao enviar dados no servidor");
                }
            }

            catch (error){
                console.log(error);
            }
        }
    })

    const fetchHorariosDisponiveis = async (postoId, dataAgenda) => {
        try {
          const response = await fetch(`http://localhost:5555/posto/${postoId}/${dataAgenda}`, {
            method: "GET"
          });
          const responseData = await response.json();
          setHorariosDisponiveis(responseData.horariosDisponiveis);
        } catch (error) {
          toast.error(error.response.data.message)
        }
      };

    useEffect(() => {
        if (formik.values.postoId && formik.values.dataAgenda) {
          fetchHorariosDisponiveis(formik.values.postoId, formik.values.dataAgenda);
        }
      }, [formik.values.postoId, formik.values.dataAgenda]);


    return(
        <>
            <NavBar /> 
            <S.container>
                <S.text>
                    <h1>Formulário de Agendamento</h1>
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
                                        minLength={9}
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
                                        placeholder="E-mail"
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
                                        name="postoId"
                                        id="postoId"
                                        value={formik.values.postoId}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        >
                                        <option value="" disabled selected>Posto de atendimento </option>
                                        {dataPosto.map((option) => (
                                        <option value={option.id} key={option.id}>
                                            {option.nome}
                                        </option>
                                        ))}
                                    </select>
                                        <div>
                                            {
                                                formik.touched.postoId && formik.errors.postoId?(
                                                    <span>{formik.errors.postoId}</span>
                                                ):null
                                            }
                                        </div>
                                </div>

                                <div>
                                    <select
                                        name="servicoId"
                                        id="servicoId"
                                        value={formik.values.servicoId }
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    >
                                        <option value="" disabled selected>Documento </option>
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

                                
                            
                                {formik.values.servicoId !== "b322590f-2196-4f63-bd91-e9f05d62c7f8" &&(
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
                               
                                
                            </S.inputs>
                        </S.sessao1>
                                            
                        <S.sessao2>
                            <div>
                                <input
                                    type="date"
                                    name="dataAgenda"
                                    id="dataAgenda"
                                    placeholder=""
                                    value = {formik.values.dataAgenda}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                <div>
                                    {formik.touched.dataAgenda && formik.errors.dataAgenda ? (
                                        <span> {formik.errors.dataAgenda} </span>
                                    ):null}
                                </div>
                            </div>
                            
                        </S.sessao2>
                        <S.containerHoras>
                        {horariosDisponiveis.map((horario) => (
                            <S.horas key={horario.id}>
                                <label htmlFor={horario.id}>{horario.hora}</label>
                                <input
                                type="radio"
                                id={horario.id}
                                name="horaId"
                                value={horario.id}
                                checked={formik.values.horaId === horario.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                            </S.horas>
                            ))}

                                <section>
                                    {formik.touched.horaId && formik.errors.horaId ? (
                                        <span> {formik.errors.horaId} </span>
                                    ):null}
                                </section>
                                </S.containerHoras>
                            
                        <button type='submit'>Submeter</button>
                    </form>
                        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
                            <C.contentModal>
                                <C.sucesso>
                                    <p>Agendado com sucesso!</p>
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
                                    <span>Data da Agenda: </span>
                                    <p>{dataResponseAgendamento?.dataAgenda}</p>
                                </div>
                                
                                <div>
                                    <span>Horário: </span>
                                    <p>{dataResponseAgendamento?.horario?.hora}</p>
                                </div>

                                
                                <div>
                                    <span>Posto de atendimento: </span>
                                    <p>{dataResponseAgendamento?.postoAtendimento?.nome}</p>
                                </div>

                                <div>
                                    <span>Localização: </span>
                                    <p>{dataResponseAgendamento?.postoAtendimento?.local}</p>
                                </div>

                                <article>Baixe o seu comprovativo de agendamento</article>
                                <button onClick={() => {Comprovativo(dataResponseAgendamento)
                                    setOpenModal(false)
                                }} type='button'> Baixar Comprovativo</button>
                            </C.contentModal>
                        </Modal>
                </S.containerForm>
            </S.container>
        </>
    )
}

export { Agendar }      