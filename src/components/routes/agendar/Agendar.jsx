import { useFormik } from 'formik'
import * as S from './stylesAgendar'
import * as C from '../../layout/modal/stylesModal'
import * as yup from 'yup'
import { useEffect, useState } from 'react'
import { NavBar } from '../../layout/NavBar/NavBar'
import { Comprovativo } from '../../layout/comprovativo/Comprovativo'
import { Modal } from '../../layout/modal/Modal'
import { CheckCircle } from 'phosphor-react'
import { toast } from 'react-toastify'

function Agendar() {

    /* const urlIdentificacao = "http://localhost:3002/" */
    const urlService = "http://localhost:5555/servico"
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
            cedula:'',
            postoId: '',
            dataAgenda: '',
            horaId: '',
        },

        validationSchema: yup.object({
            nome: yup.string().required("O nome é obrigatório").min(6, "O nome deve ter no mínimo 6 caracteres"),
            telefone: yup.string().required("Digite o número de telefone").matches(/^[0-9]+$/, 'Digite apenas números').min(9, "Digite um número válido de angola").max(9, "Digite um número válido de angola"),
            email: yup.string().email("Digite email válido"),
            servicoId: yup.string().required("Selecione um documento"),
            bi: yup.string().required("Informe o número do documento"),
            cedula: yup.string(),
            dataAgenda: yup.string().required("Escolha a data"),
            horaId: yup.string().required("Selecione um horário"),
        }),

        onSubmit: async(data) => {
            console.log(data);
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
                            console.log(agendamentoEncontrado.postoAtendimento);
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
          console.log(responseData);
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
      console.log(horariosDisponiveis);


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
                                <CheckCircle size={52} color="#35dd0b"/>
                                <p>Agendado com sucesso!</p>
                                <span>Baixe o seu comprovativo de agendamento</span>
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