import Png from './imagens/imagem2.png';
import Jpg from './imagens/imgverde.png';
import './App.css';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section>
        <div className="central1">
          <div className="card-1">
                <br></br><br></br><br></br>
                <h1 className="titulo-consultorio">🏥 Consultório e Serviços</h1>
                <br></br>
               <img src={Png} className="img"/>
          </div>
          <div className="card-2">
          <h1 className="titulo-1">Selecione a modalidade de atendimento</h1>
          <div className="modalidade">
          <form>
          <input type="radio" id="html" name="fav_language" value="HTML"></input>
           <label className="p" for="html">Clínica / Consultório</label><br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"></input>
           <label className="p" for="html">Tele Consulta</label><br></br>
          <input type="radio" id="html" name="fav_language" value="HTML"></input>
           <label className="p" for="html">Na casa do paciente</label>
          </form>
          
          </div><br></br>
         
          <h1 className="titulo-1">Endereço e contato 🛣  </h1>
          <div className="contato">

          <form className="endereco">
  <label for="fname">Rua:</label>
  <input className="input1" type="text" id="fname" name="fname"></input>
  <label for="lname">N:</label>
  <input className="input1" type="text" id="lname" name="lname"></input><br></br>
  <label for="lname">Bairro:</label>
  <input className="input1" type="text" id="lname" name="lname"></input>
  <label for="lname">Cidade:</label>
  <input className="input1" type="text" id="lname" name="lname"></input><br></br>
  <label for="lname">Cel / WhatsApp:</label>
  <input className="input1" type="text" id="lname" name="lname"></input>
  <label for="lname">Tel Fixo:</label>
  <input className="input1" type="text" id="lname" name="lname"></input><br></br>
</form> 
          </div>
          </div>
        </div>
        <img src={Jpg} className="img1"/>
        <br></br>
       <div className="central2">
        <div className="card-3">
        <h1 className="titulo-1">Acessibilidade ♿</h1>
        <form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR 13434.</label>
  <p className="input3">todas as partes) Sinalização de segurança contra incêndio e pânico</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ASTM C609-07</label>
  <p className="input3">Medição do valor de refletância da luz e pequenas diferenças de cor entre 
  as peças de telha cerâmica</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR 13713</label>
  <p className="input3"> Instalações hidráulicas prediais ‒ Aparelhos automáticos acionados mecanicamente e com ciclo de fechamento
   automático ‒ Requisitos e métodos de ensaio</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR 14718</label>
  <p className="input3">Guarda-corpos para edifcação</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR 15097 </label>
  <p className="input3">(todas as partes) Aparelho sanitário de material cerâmico</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR 15250 </label>
  <p className="input3">Medição do valor de refletância da luz e pequenas diferenças de cor entre 
  as peças de telha cerâmica</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR 15599</label>
  <p className="input3">Acessibilidade em caixa de auto-atendimento bancário</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR ISO 9386 </label>
  <p className="input3">cessibilidade ‒ Comunicação na prestação de serviços</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR NM 313,</label>
  <p className="input3"> (todas as partes), Plataformas de elevação motorizadas para pessoas com mobilidade reduzida
   ‒ Requisitos para segurança, dimensões e operação</p><br></br>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2" for="vehicle1">ABNT NBR IEC 60529</label>
  <p className="input3">Graus de proteção para invólucros de equipamentos elétricos (código IP)</p><br></br>

   
</form> 
        </div>
        <div className="card-4">
        <h1 className="titulo-1">Convênios🤝</h1>
          <h1 className="input2">MARQUE TODOS OS CONVENIOS ASSOCIADOS O SEU LOCAL DE TRABALHO.</h1>
          
          <form>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">AGF</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Eletros- Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Fiosaúde</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">IPALERJ</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">EMBRATEL</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Golden Cross</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">AMAFRERJ</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">CASAL</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Fiocruz</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Unimed</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Medservice</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">BACEN</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">HAPVIDA</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">ABET</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Unimed Intermediário</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">ANASPS</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Appai</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Fioprev</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Unimed Rio</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Santa Casa Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Amil</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Allianz</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Sind Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Vale do rio doce</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Assim Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Porto Seguro Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Ônix</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">NUCLEP</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Gesp Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Intermédica</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Dix Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Saúde Itaú</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike" for="vehicle1">Sul América Saúde</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2" for="vehicle1">CLUB SAÚDE</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2 " for="vehicle1">Postal Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2 " for="vehicle1">Eletronuclear</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2" for="vehicle1">Vale - Parsa</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2" for="vehicle1">GAMA Saúde</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2" for="vehicle1">Memorial Saúde</label>
  </div>
            <div className="card-5">
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2 " for="vehicle1">CEMERU</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2 " for="vehicle1">Interodonto</label>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
  <label className="input2 bike2" for="vehicle1">CAC</label>
  </div><br></br>
            
        
         
          </form>
          <h1 className="titulo-1">Atendimento🩺 </h1>
          <div className="card-5">
            <div className="atendimentos">
            <h1 className="input2">DIAS E HORÁRIOS DE FUNCIONAMENTO NA SEMANA.</h1>
           
            </div>
            <div className="atendimentos">
            <div className="dias">
            <p>Selecione os dias de atendimento:</p>
            </div>
            <button class="botao">S</button>
            <button class="botao">T</button>
            <button class="botao">Q</button>
            <button class="botao">Q</button>
            <button class="botao">S</button>
            <button class="botao">S</button>
            <button class="botao">D</button>
            
           
            </div>
            <p class="red">Campos de Hora:Minuto referente ao dias de atendimento da semana.</p>
            <div className="atendimentos">
            <div className="dias">
            <label for="lname">Digite Digite o horário de atendimento do dias:</label>
            <br></br>
            <div className="horario">
  <input className="input1 hora" placeholder="HH:MM" type="text" id="lname" name="lname"></input>
  <input className="input1 hora" placeholder="HH:MM" type="text" id="lname" name="lname"></input>
  <input className="input1 hora" placeholder="HH:MM" type="text" id="lname" name="lname"></input>
  <input className="input1 hora" placeholder="HH:MM" type="text" id="lname" name="lname"></input>
  <input className="input1 hora" placeholder="HH:MM" type="text" id="lname" name="lname"></input>
  <input className="input1 hora" placeholder="HH:MM" type="text" id="lname" name="lname"></input>
  
            
            </div>
            </div>
            </div>
            <div className="atendimentos1">
            <form>

  <label for="lname">Nome do serviço:</label>
  <input className="input1" type="text" id="lname" name="lname"></input><br></br>
  <label for="lname">Valor da consulta:</label>
  <input className="input1" type="text" id="lname" name="lname"></input><br></br>
  <label for="lname">Duração em minutos:</label>
  <input className="input1" type="text" id="lname" name="lname"></input><br></br>
            </form>
     </div>
    
            </div>
            <button className="botao3">Concluir cadastro</button>
          </div>
        </div>
    
      
      </section>
      <br></br>
      <footer>
      <img src={Jpg} className="img1"/>
      </footer>
    </div>

  );
}

export default App;
