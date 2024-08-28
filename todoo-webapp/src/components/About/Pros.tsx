import kvacica from '../../assets/kvačica bez pozadine.png'; 
import TextBox from '../ReusableComponents/TextBox';
import style from "../../modules/Pros.module.css"
import { useNavigate } from 'react-router-dom';


function Pros() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
    return (
      <section className={style.pros}>
        <div className={style.heroContent}>
          <ul>
            <li>
              <img className={style.imgKvac} src={kvacica} alt="kvacica" />
              <TextBox txtcolor='white' backgroundcolor='#9A1750' text='Lako dodavanje i uredjivanje zadataka' widthFraction={0.7} />
            </li>
            <li>
              <img className={style.imgKvac} src={kvacica} alt="kvacica" />
              <TextBox txtcolor='white' backgroundcolor='#9A1750' text='Postavljanje podsetnika' widthFraction={0.7} />
            </li>
            <li>
              <img className={style.imgKvac} src={kvacica} alt="kvacica" />
              <TextBox txtcolor='white' backgroundcolor='#9A1750' text='Kategorizacija zadataka' widthFraction={0.7} />
            </li>
            <li>
              <img className={style.imgKvac} src={kvacica} alt="kvacica" />
              <TextBox txtcolor='white' backgroundcolor='#9A1750' text='Pracenje napretka' widthFraction={0.7} />
            </li>
          </ul>
        </div>
        <div className={style.heroContent}>
        <div className={style.fontb}>
        <TextBox txtcolor='#9A1750' backgroundcolor='white' text='Preuzmite sada i zapocnite put ka boljoj organizaciji       ' widthFraction={0.5} borderRad={"50%"}></TextBox>
        <br />
        <br />
        <br />
        <div onClick={() => handleNavigation('/Register')}>
        <TextBox  txtcolor='#9A1750' backgroundcolor='white' text='Registruj se! ' widthFraction={0.5} ></TextBox>
        </div>
        </div>
        </div>
      </section>
    );
}

export default Pros;
