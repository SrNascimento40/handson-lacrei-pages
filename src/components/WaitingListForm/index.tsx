import './style.css'

function WaitingListForm (){
    return(
        <div className="WaitingList">
            <p className="text-initial">Poxa que pena, adorariamos contar com a sua contribuição, porém no momento estamos atuando somente no estado de São Paulo. Mas não se preocupe, estamos em constante expansão e em breve a Lacrei estará disponível no estado em que você reside!</p>
            <form className='form-waiting-list' >
                <p className='text-waiting-list'>Participe da nossa lista de espera!</p>
                <div className="form-group">
                    <label className='describe-text' for="InputEmail">E-mail *</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite seu E-mail" />
                </div>
                <div className="form-group">
                    <label className='describe-text' for="InputProfissao">Profissão *</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digite sua profissão" />
                </div>
                <button type="submit" className="btn">Participar</button>
            </form>
        </div>
    )
}
export default WaitingListForm