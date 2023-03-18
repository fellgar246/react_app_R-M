import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import styles from "./Detail.module.css"

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState("");

    const URL_BASE = "https://be-a-rym.up.railway.app/api"

    const navigate = useNavigate();

    const backToHome = () => navigate("/home");
    
    useEffect(() => {
    fetch(`${URL_BASE}/character/${detailId}?key=${process.env.REACT_APP_API_KEY}`)
        .then((response) => response.json())
        .then((char) => {
        if (char.name) {
            setCharacter(char);
        } else {
            window.alert("No hay personajes con ese ID");
        }
        })
        .catch((err) => {
        window.alert("No hay personajes con ese ID");
        });
    return setCharacter({});
    }, [detailId]);
    //TODO: Centrar Loading
    //TODO: Resetear el State
    //TODO: agregar button en CSS
  return (
    <>  
        { character.name ? (
            <>
            <div className={styles.container}>
                <h2 className={styles.name} >
                    {character.name}
                </h2>
                <span className={styles.decorationLine }></span>
                <div className={styles.subContainer }>
                    <img className={styles.image} src={character.image} alt={character.name}/>   
                    <div className={styles.textContainer}>
                        <h3 className={styles.text}>
                            Status: {character.status}
                        </h3>
                        <h3 className={styles.text}>
                            Specie: {character.species} 
                        </h3>
                        <h3 className={styles.text}>
                            Gender: {character.gender}
                        </h3>
                        { character.origin &&  <h3 className={styles.text}> Origin: {character.origin.name}</h3>}
                    </div>        
                </div>
              
            </div> 
            <button onClick={backToHome}>
            Regresar
            </button>  
            </>
        ) : (
            <div>
                <Loading />
            </div>
        )}
     
    </>

  )
}
