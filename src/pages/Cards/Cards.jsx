import Card from '../../components/Card/Card';
import styles from "./Cards.module.css"

export default function Cards(props) {
   const { characters } = props; 

   return (
      <div className={styles.container} >
         { 
            characters.map(({ name, species, gender, image, id }) => {
               return <Card
                  id={id}
                  key={id}  
                  name={name}
                  species={species}
                  gender={gender}
                  image={image}
                  onClose={() => props.onClose(id)}
               /> 
            })
         }

      </div>
   );
}
