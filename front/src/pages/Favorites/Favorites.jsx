import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
    //TODO: Agregar estilos filtros
    //TODO: texto de nombre reducir

  return (
    <div>
        <h2 className={styles.favorites__title} >My Favorites</h2>
        <div>
            <select className={styles.select}  onChange={handlerOrder}>
                <option value="order" disabled="disabled">Order By</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select className={styles.select} onChange={handlerFilter}>
                <option value="order" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Unknown">Unknown</option>
                <option value="Genderless">Genderless</option>
            </select>
            {/* <button onSubmit={handlerAll}> ALL </button> */}
        </div>
        <div className={styles.main_container}>
            {   
                props.myFavorites?.map((character) => (
                    <div className={styles.card__container}>
                        <Link to={`/detail/${character.id}`} >
                            <img className={styles.image} src={character.image} alt={character.name} />
                            <h2 className={styles.name}>{character.name}</h2>
                        </Link>   
                        <h2 className={styles.gender}>{character.gender}</h2>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export function mapStateToProps(state) {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites);
