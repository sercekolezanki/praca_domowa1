import { useState } from "react";
import quizdata from "../data/quiz.json";
import "../style/quiz.css"

function Quiz(){
    const data= quizdata;
    const [i,seti]=useState(0);
    const [correct,setcorrect]=useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(0);
    function select(event){
      setSelectedAnswer(event.target.value);
      console.log(selectedAnswer);

    }
    function sprawdz(event){ 
        event.preventDefault();
        if(selectedAnswer==data.pytania[i].poprawna)setcorrect(correct+1);
        seti(i+1);
        

    }
    function strona(){
      if(data.pytania.length>i)
      return(
        <form onSubmit={sprawdz}>
          <h2 id="naglowek_quiz">{data.pytania[i].pytanie}</h2><br/>
          <div id="odpowiedzi">
          {
            data.pytania[i].odpowiedzi.map((input, index) => (
            <span key={index}><button value={index} type="submit" name="pytanie" onClick={select}>{input}</button></span>
            ))
          }
          </div>
        </form>
      )
      else
      return(
        <form><h2>twój wynik to:</h2><br/><span>{correct}/{data.pytania.length}</span></form>
        
      )
    }
    
return(
<div>
{strona()}
</div>


)
}
export default Quiz;