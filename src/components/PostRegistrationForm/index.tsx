import './style.css'

function PostRegistrationForm (){
    return(
       <div className="container">
            <div className="row">
                <div className="col-5">
                    <div className="card-left-post-registration">
                        <img className="card-img-post-registration"/>
                        <div className="card-body">
                            <h5 className="card-title-name-post-registration">Nome cadastrado</h5>
                            <p className="card-text-email-post-registration"> emailcadastrado@email.com </p>
                            <hr className='linha-horizontal'/>
                            <form className='form-waiting-list' >
                                <p className='card-title-work-post-registration'>Profissão</p>
                                <div className="form-post-registration">
                                    <input type="text" className="control-registration-work" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Profissão cadastrada" />
                                    <p></p>
                                    <input type="text" className="control-registration-especialist" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Especialidade clínica cadastrada" />
                                    <p></p>
                                    <input type="text" className="control-registration-advice" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nº de Insc. do Conselho de Classe" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='col-7'>
                    <div className='row'>
                        <div className="col-dados-post-registration"> Dados </div>
                        <div className="col-post-registration"> Pós Cadastro </div>
                    </div>
                    
                    <form className='form-data-post-registration' >
                        <p className='card-title-person-post-registration'>Pessoal</p>        
                        <div className="form-post-registration-person">
                            <input type="text" className="control-registration-person" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Profissão" />
                            <p></p>
                            <input type="text" className="control-registration-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" />
                            <hr className='linha-horizontal'/>

                            <p className='card-title-person-post-registration'>Profissional</p>        
                            <input type="text" className="control-registration-person" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Profissão" />
                            <p></p>
                            <input type="text" className="control-registration-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Especialidade clínica" />
                            <p></p>
                            <input type="text" className="control-registration-email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nº de Insc. do Conselho de Classe" />
                            <hr className='linha-horizontal'/>

                            <input type="text" className="control-registration-options-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Acessibilidade" />
                            <p></p>
                            <input type="text" className="control-registration-options-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Atendimento" />
                            <p></p>
                            <input type="text" className="control-registration-options-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Convênio" />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default PostRegistrationForm