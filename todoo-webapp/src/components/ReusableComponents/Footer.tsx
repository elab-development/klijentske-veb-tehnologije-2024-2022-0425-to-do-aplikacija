import { useNavigate } from 'react-router-dom';
import styles from "../../modules/Footer.module.css";
import fbIcon from '../../assets/fb.png'; 
import igIcon from '../../assets/ig.png'; 
import ytIcon from '../../assets/yt.png';  
function Footer() {
  const navigate = useNavigate();
  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p>Kontakt: +38160000000</p>
        <p>Email: todoo@gmail.com</p>
      </div>
      <div className={styles.socialLinks}>
        <p>Brzi linkovi: 
          <span onClick={() => handleNavigation('/prijavi-se')}><a>Prijavi se</a></span> | 
          <span onClick={() => handleNavigation('/kategorije')}><a>Kategorije</a></span> | 
          <span onClick={() => handleNavigation('/cenovnik')}><a>Cenovnik</a></span> | 
          <span onClick={() => handleNavigation('/')}><a>O nama</a></span>
        </p>
        <div className={styles.icons}>
          <img src={fbIcon} alt="Facebook" onClick={() => window.open('https://www.facebook.com', '_blank')} />
          <img src={igIcon} alt="Instagram" onClick={() => window.open('https://www.instagram.com', '_blank')} />
          <img src={ytIcon} alt="YouTube" onClick={() => window.open('https://www.youtube.com', '_blank')} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
