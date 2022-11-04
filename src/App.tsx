import {useState} from "react";

import styles from "./App.module.css";
import poweredImage from "./assets/powered.png";
import leftarrow from "./assets/leftarrow.png";

import {levels, calculateImc, Level}from "./helpers/imcs";
import {GridItem} from "./components/GridItem";


const App = () =>{
  const[heightField, setHeightFiel] = useState<number>(0);
  const[weightField, setweightFiel] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);
  const CalculateButton = () =>{
    if(heightField && weightField){
      setToShow(calculateImc(heightField, weightField));
    }else{
      alert("Preencha todos os campos.")
    }
  }
  const ButtonReset = () =>{
    setToShow(null);
    setweightFiel(0);
    setHeightFiel(0);
  }
  


  return(
    <div className={styles.main}>
      <div className={styles.container}>
          <div className={styles.leftSide}>
            <h1>Calcule o seu imc</h1>
            <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          
            <input type="number"
            value={heightField > 0 ? heightField : "" }
            onChange={e => setHeightFiel(parseFloat(e.target.value))}
            placeholder="Digite a sua altura. EX: 1.5(metro)"
            disabled={toShow? true : false} 
            />    

            <input type="number"
            value={weightField > 0 ? weightField : "" }
            onChange={e => setweightFiel(parseFloat(e.target.value))}
            placeholder="Digite o seu peso. EX: 75.3 (em kilos)"
            disabled={toShow? true : false} 
            />      

            <button onClick={CalculateButton} disabled={toShow? true : false} >Calcular</button>   
          </div>
          
          <div className={styles.rightSide}>
            {!toShow && 
              <div className={styles.grid}>
              {levels.map((item,key)=>(
                <GridItem key={key} item={item}/>
              ))}
              </div>
              }
              {toShow && 
                <div className={styles.rightBig}>
                  <div className={styles.RightArrow} onClick={ButtonReset}>
                  <img src={leftarrow} alt="" width={25} />
                  </div>
                  <GridItem item={toShow}/>
                </div>
              }
          </div>
      </div>
      <div>
        
      </div>

      </div>
  )
}
export default App;