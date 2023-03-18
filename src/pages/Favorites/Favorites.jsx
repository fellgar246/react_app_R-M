import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { orderCards, filterCards, allCards } from '../../redux/actions';
import styles from "./Favorites.module.css"

export function Favorites(props) {

    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

    const handlerAll = () => {
        dispatch(allCards())
    }
    //TODO: Habilitar handlerAll
    //TODO: Agregar estilos

  return (
    <div>
        <h2 className={styles.favorites__title} >My Favorites</h2>
        <div>
            <select onChange={handlerOrder}>
                <option value="order" disabled="disabled">Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select onChange={handlerFilter}>
                <option value="order" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
            </select>
            {/* <button onSubmit={handlerAll}> ALL </button> */}
        </div>
        {   
            //TODO: Agregar el link to Details (copiar de CARD)
            props.myFavorites?.map((character) => (
                <div>
                    <h2>{character.name}</h2>
                    <h2>{character.gender}</h2>
                    <img src={character.image} alt={character.name} />
                </div>
            ))
        }
    </div>
  )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);
