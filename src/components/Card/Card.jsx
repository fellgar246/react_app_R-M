import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import styles from "./Card.module.css" 

export function Card(props) { //* Tambien se puede destructurar props
   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         props.deleteFavorites(props.id);
      } else {
         setIsFav(true)
         props.addFavorites(props)
      }
   }


   //TODO aplicar efecto S7 expandable Effect y efecto s7 creative layered
   return (
      <div className={ styles.card__container }>
         {
            isFav ? (
               <button className={styles.heartIcon_on} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.heartIcon_off} onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={styles.closeIcon} onClick={props.onClose}>X</button>
         <Link
            to={`/detail/${props.id}`}
         >
            <img  className={styles.image} src={props.image} alt={`${props.id}-${props.name}`} />
            <h2 className={styles.name} >{props.name}</h2>
         </Link>
      </div>
   );
}

export function mapStateToProps(state){
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps(dispatch) {
   return {
      addFavorites: (character) => dispatch(addFavorites(character)),
      deleteFavorites: (id) => dispatch(deleteFavorites(id))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);