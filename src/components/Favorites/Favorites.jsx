import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderCards, filterCards } from '../../redux/actions';

export function Favorites(props) {

    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const handlerFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }

  return (
    <div>
        <h2>My Favorites</h2>
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
