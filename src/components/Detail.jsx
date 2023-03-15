import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


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
    //TODO: Agregar Loading
  return (
    <>  
        { character.name ? (
            <>
            <button onClick={backToHome}>
            Regresar
            </button>  
            <div>
                <h1>Detail</h1>
                <h2>Name: {character.name}</h2>
                <img src={character.image} alt={character.name}/>    
                <h3>Status: {character.status}</h3>
                <h3>Specie: {character.species} </h3>
                <h3>Gender: {character.gender}</h3>
                { character.origin &&  <h3>Origin: {character.origin.name}</h3>}
            </div> 
            </>
        ) : (
            <h3>Loading ...</h3>
        )}
     
    </>

  )
}
