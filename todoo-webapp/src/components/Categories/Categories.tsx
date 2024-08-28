import TextBox from '../ReusableComponents/TextBox';
import styles from '../../modules/Categories.module.css';

function Categories(){
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.heading}>
          <TextBox
            txtcolor='#9A1750'
            backgroundcolor='#E3E2DF'
            text='KATEGORIJE'
            borderRad='10px'
            widthFraction={0.6}
            boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
            borderWidth='5px'
            borderColor='#9A1750'
          />
        </h2>
        <div className={styles.flexContainer}>
          <div className={styles.flexItem}>
            <strong className={styles.textBoxContainerHead}>
              <TextBox
                txtcolor='#9A1750'
                backgroundcolor='#E3E2DF'
                text='DAILY PLAN'
                borderRad='10px'
                widthFraction={0.5}
                boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                borderWidth='2px'
                borderColor='#9A1750'
              />
            </strong>
            <p className={styles.textBoxDescription}>
              Jeste li ikada imali osećaj da dani prolaze u haosu, a da ne uspevate da završite sve što ste planirali? Upravo tu može da vam pomogne naša <strong className={styles.bold}>ToDo aplikacija</strong> za dnevni plan. Evo nekoliko razloga zašto bi trebalo da je probate:
            </p>
            <div className={styles.textBoxContainer}>
              <TextBox
                txtcolor='black'
                backgroundcolor='#E3E2DF'
                text='Organizacija i preglednost'
                borderRad='10px'
                widthFraction={0.8}
                boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                borderWidth='2px'
                borderColor='#9A1750'
              />
              <div className={styles.textBoxMargin}>
                <TextBox
                  txtcolor='black'
                  backgroundcolor='#E3E2DF'
                  text='Povećana produktivnost'
                  borderRad='10px'
                  widthFraction={0.8}
                  boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                  borderWidth='2px'
                  borderColor='#9A1750'
                />
              </div>
              <div className={styles.textBoxMargin}>
                <TextBox
                  txtcolor='black'
                  backgroundcolor='#E3E2DF'
                  text='Podsetnici i obaveštenja'
                  borderRad='10px'
                  widthFraction={0.8}
                  boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                  borderWidth='2px'
                  borderColor='#9A1750'
                />
              </div>
              <div className={styles.textBoxMargin}>
                <TextBox
                  txtcolor='black'
                  backgroundcolor='#E3E2DF'
                  text='Fleksibilnost i prilagodljivost'
                  borderRad='10px'
                  widthFraction={0.8}
                  boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                  borderWidth='2px'
                  borderColor='#9A1750'
                />
              </div>
            </div>
          </div>
          <div className={styles.flexItem}>
          <strong className={styles.textBoxContainerHead}>
                <TextBox
                txtcolor='#9A1750'
                backgroundcolor='#E3E2DF'
                text='TRAVEL PLAN'
                borderRad='10px'
                widthFraction={0.5}
                boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                borderWidth='2px'
                borderColor='#9A1750'
              />
            </strong>
            <p className={styles.textBoxDescription}>
              Planiranje putovanja može biti uzbudljivo, ali često može biti i stresno zbog svih detalja koje treba isplanirati. Naša <strong className={styles.bold}>ToDo aplikacija</strong> za planiranje putovanja tu je da vam pomogne da organizujete svaki aspekt vašeg putovanja na jednostavan i efikasan način. Evo nekoliko razloga zašto bi trebalo da je probate:
            </p>
            <div className={styles.textBoxContainer}>
              <TextBox
                  txtcolor='black'
                backgroundcolor='#E3E2DF'
                text='Sve na jednom mestu'
                borderRad='10px'
                widthFraction={0.8}
                boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                borderWidth='2px'
                borderColor='#9A1750'
              />
              <div className={styles.textBoxMargin}>
                <TextBox
                  txtcolor='black'
                  backgroundcolor='#E3E2DF'
                  text='Podsetnici za važne datume'
                  borderRad='10px'
                  widthFraction={0.8}
                  boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                  borderWidth='2px'
                  borderColor='#9A1750'
                />
              </div>
              <div className={styles.textBoxMargin}>
                <TextBox
                  txtcolor='black'
                  backgroundcolor='#E3E2DF'
                  text='Lista za pakovanje'
                  borderRad='10px'
                  widthFraction={0.8}
                  boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                  borderWidth='2px'
                  borderColor='#9A1750'
                />
              </div>
              <div className={styles.textBoxMargin}>
                <TextBox
                  txtcolor='black'
                  backgroundcolor='#E3E2DF'
                  text='Planiranje aktivnosti'
                  borderRad='10px'
                  widthFraction={0.8}
                  boxShadow='0 4px 8px rgba(0, 0, 0, 0.1)'
                  borderWidth='2px'
                  borderColor='#9A1750'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
