import style from "../../modules/Features.module.css";
import sijalica from '../../assets/sijalica.png'; 
import TextBox from '../ReusableComponents/TextBox';

function Features() {

  return (
    <section className={style.features}>
      <div className={style.headText}>
        <img src={sijalica} alt="sijalica" className={style.sijalica} />
        <h2>Šta sve možete sa našom aplikacijom:</h2>
      </div>
      <ul>
        <li>
          <TextBox txtcolor='white' backgroundcolor='#600120' text='Povecati svoju produktivnost' widthFraction={0.25} />
        </li>
        <li>
          <TextBox txtcolor='white' backgroundcolor='#600120' text='Organizujte svoje zadatke i postavite prioritete' widthFraction={0.25} />
        </li>
        <li>
          <TextBox txtcolor='white' backgroundcolor='#600120' text='Uštedite vreme' widthFraction={0.25} />
        </li>
        <li>
          <TextBox txtcolor='white' backgroundcolor='#600120' text='Primajte obaveštenja o važnim zadacima' widthFraction={0.25} />
        </li>
      </ul>
    </section>
  );
}

export default Features;
