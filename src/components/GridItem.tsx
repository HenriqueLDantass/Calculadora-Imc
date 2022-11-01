import { Level } from "../helpers/imcs";
import styles from "./Griditem.module.css"; 
import upImage from "../assets/up.png";
import downImage from "../assets/down.png";
import { Fragment } from "react";
type Props = {
    item:Level
}

export const GridItem = ({item}:Props) =>{
    return(
        <div className={styles.main} style={{background:item.color}}>
            <div className={styles.GridIcon}>
               {item.icon === "up" && <img src={upImage} alt="" width={30}/>} 
               {item.icon === "down" && <img src={downImage} alt="" width={30}/>} 
            </div>
            <div className={styles.GridTitle}>{item.title}</div>

            {item.yourIMC &&
                <div className={styles.yourImc}>Seu IMC é: {item.yourIMC} kg/m²</div>
            }

            <div className={styles.GridInfo}>
                <Fragment>
                    IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </Fragment>
            </div>
        </div>
    )
}