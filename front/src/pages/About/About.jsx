import React from 'react'
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
        <h1 className={styles.about__title}>About me</h1>
        <div className={styles.about__container}>
          <img src="./profile_image.jpeg" alt="profile" className={styles.about__img} />
          <p className={styles.about__text}>
          Hello! My name is Felipe and I enjoy creating things that live on the internet. My interest in web development started recently with data analysis and turns out I ended discovering a whole new world, also specializing in UX/UI design and web development (full stack). Fast-forward to today, I’ve had the privilege to get the knowledge of different programming languages and apply them on personal projects, some of them you can find it in this portfolio. My main focus these days is building better digital experiences through accessible and a great digital products.
          </p>
        </div>
    </div>

  )
}


