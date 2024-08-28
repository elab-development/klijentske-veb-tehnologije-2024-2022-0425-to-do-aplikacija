import styles from '../../modules/Card.module.css'; 

function hexToRgb(hex: string): string {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    }
    else if (hex.length === 7) {
      r = parseInt(hex[1] + hex[2], 16);
      g = parseInt(hex[3] + hex[4], 16);
      b = parseInt(hex[5] + hex[6], 16);
    }
    return `${r}, ${g}, ${b}`;
  }
  
interface CardProp {
  title: string;
  description: string[];
  buttonText: string;
  price?: string;
  backgroundColor: string;
  buttonColor: string;
  transparency:number;
}

function Card(prop: CardProp) {
    return (
      <div
        className={styles.offerCard}
        style={{ backgroundColor: `rgba(${hexToRgb(prop.backgroundColor)}, ${prop.transparency})` }}
      >
        {}
        <div className={styles.headerContainer} style={{ backgroundColor: `rgba(${hexToRgb(prop.backgroundColor)}, 1)` }} >
          <h3 className={styles.cardTitle} style={{ textAlign: "center" }}>{prop.title}</h3>
        </div>
  
        <hr className={styles.fullWidthHr} />
  
        {}
        <ul className={styles.descriptionList}>
          {prop.description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <hr className={styles.fullWidthHr} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={styles.cardFooter}>
            {prop.price && <span className={styles.price}>{prop.price}</span>}
            <button className={styles.button} style={{ backgroundColor: prop.buttonColor }}>{prop.buttonText}</button>
          </div>
        </div>
      </div>
    );
  }
  
export default Card;
