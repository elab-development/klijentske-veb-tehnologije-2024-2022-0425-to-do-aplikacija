import Card from "../ReusableComponents/Card";
import style from "../../modules/Pricing.module.css";
import TextBox from "../ReusableComponents/TextBox";
import { useNavigate } from 'react-router-dom';

function Pricing() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <section>
      <div className={style.container}>
        <strong className={style.centered}>
          <TextBox
            txtcolor='#9A1750'
            backgroundcolor='#E3E2DF'
            text='UPOZNAJTE SE SA NASOM PONUDOM'
            borderRad='10px'
            widthFraction={1}
            boxShadow='0 8px 8px rgba(0, 0, 0, 0.5)'
            isHeading={true}
          />
        </strong>
        <div className={style.cardRow}>
          <div onClick={() => handleNavigation('/register')}>
            <Card
              title="POCETNIK"
              description={[
                'Idealan za nove korisnike',
                '10 taskova dnevno',
                'ograniceno radno vreme customer support-a',
                '*cena plana se odnosi na period od 30 dana'
              ]}
              buttonText="PROBAJ"
              backgroundColor="#e3afbc"
              buttonColor="#e3afbc"
              transparency={0.7}
            />
          </div>
          <div onClick={() => handleNavigation('/kontakt')}>
            <Card
              title="PROFESIONALAC"
              description={[
                'idealan za napredne korisnike i kompanije',
                '30 taskova dnevno po izboru',
                'customer support dostupan 24/7',
                '*cena plana se odnosi na period od 30 dana'

              ]}
              buttonText="1500 RSD"
              backgroundColor="#9a1750"
              buttonColor="#9a1750"
              transparency={0.7}
            />
          </div>

          <div onClick={() => handleNavigation('/kontakt')}>

            <Card
              title="UPIT"
              description={[
                'Imate ideju za neki novi plan koji odgovara vašim potrebama?',
                'Obratite nam se putem forme!',
                'Mi ćemo vam ponuditi najbolje uslove po pristupačnoj ceni!',
                '*rok za odgovor 30 dana'
              ]}
              buttonText="FORMA"
              backgroundColor="#5d001e"
              buttonColor="#5d001e"
              transparency={0.7}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
