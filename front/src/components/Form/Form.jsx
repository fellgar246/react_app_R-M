import React, {useState} from 'react';
import { validation } from './validation';

import styles from "./Form.module.css";

export default function Form(props) {

    const [userData, setUserData] = useState({ 
        username: '', 
        password: '',
    });

    const [errors, setErrors] = useState({ 
        username: '',  
        password: '' 
    });

    const handleInputChange = (event) => {
        const { name, value} = event.target
        setUserData({
            ...userData,
            [name]: value 
        })
        setErrors(
            validation({
              ...userData,
              [name]: value 
            })
          )
    }


  const handleSubmit = (event) => {
    event.preventDefault();

    props.login(userData)
  }

  //TODO: Agregar fecto s10 floating text en logo rick&morty

  return (
    <div className={styles.container} >

    <h1 className={styles.title}>You’re Welcome</h1>

    <form 
        onSubmit={handleSubmit} 
        className={styles.form}
    >
        <label className={styles.form__text}>
            Username
        </label>        
        <input 
            type="text" 
            name='username'
            value={userData.username}
            onChange={handleInputChange}
            className={styles.form__input}
        />
        <p className={styles.error}>
            {errors.username && errors.username}
        </p>
    
        <label className={styles.form__text}> 
            Password
        </label>
        <input 
            type="password" 
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            className={styles.form__input}
        />  
         <p className={styles.error}>
            {errors.password && errors.password}
        </p>
        <button 
            type='submit'
            className={styles.form__button}
        >
            <span className={styles.form__button__text}>LOGIN</span>
        </button>
       
    </form>

    </div>
  )
}
