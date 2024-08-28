import slika1 from "../../assets/danilo.png"
import slika2 from "../../assets/lena.png"
import slika3 from "../../assets/andjela.png"

import styles from "../../modules/Testimonials.module.css";

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Naši ToDuovci:</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src={slika2} alt="Testimonial 1" />
          <p className={styles.text}>Sve moje obaveze sada su zanimljvije, jer ne mogu da dočekam ih štikliram na ToDoou</p>
          <span className={styles.author}>- Magdalena</span>
        </div>
        <div className={styles.card}>
          <img src={slika1} alt="Testimonial 2" />
          <p className={styles.text}>ToDoo mi je olakšao work&travel, sve mi je bilo na jednom mjestu</p>
          <span className={styles.author}>- Danilo</span>
        </div>
        <div className={styles.card}>
          <img src={slika3} alt="Testimonial 3" />
          <p className={styles.text}>Zbog ToDooa ponovo mogu da budem srećna i nasmejana jer svi moji zadaci se sa zadovoljstvom obavljaju.</p>
          <span className={styles.author}>- Andjela</span>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
