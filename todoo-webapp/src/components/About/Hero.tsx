import slika1 from '../../assets/slika1.png'; 
import style from '../../modules/Hero.module.css';
import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  }
  return (
    <section className={style.hero}>
      <img src={slika1} alt="slika" className={style.image} />
      <div className={style.heroContent}>
        <h2>Organizujte svoj dan sa našom ToDoo aplikacijom</h2>
        <p>Jednostavan način da pratite svoje zadatke...</p>
        <ul>
          <li>Lako dodavanje i uređivanje zadataka</li>
          <li>Postavljanje podsetnika i rokova</li>
          <li>Kategorizacija zadataka po prioritetima</li>
          <li>Praćenje napretka</li>
        </ul>
        <button className={style.button}  onClick={() => handleNavigation('/Register')}>Registruj se</button>
      </div>
    </section>
  );
}

export default Hero;
