import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../redux/actions";

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

   return (
      <div>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button onClick={props.onClose}>X</button>
         <Link
            to={`/detail/${props.id}`}
         >
            <h2>{props.name}</h2>
            <h2>{props.species}</h2>
            <h2>{props.genero}</h2>
            <img  src={props.image} alt={`${props.id}-${props.name}`} />
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