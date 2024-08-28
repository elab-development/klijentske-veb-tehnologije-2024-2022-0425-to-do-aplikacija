import { useNavigate } from 'react-router-dom';
import style from '../../modules/Header.module.css';
import logoImg from '../../assets/logo.png'; 
import {UserProp} from '../../types';


function Header({ user }: UserProp) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };


  return (
    <header className={style.header}>
      <div className={style.logo}>
        <img 
          src={logoImg} 
          alt="ToDoo Logo" 
          onClick={() => handleNavigation('/')} 
          className={style.logoImg} 
        />
      </div>
      <nav>
        <ul>
          <li className={style.navItem} onClick={() => handleNavigation('/kategorije')}>Kategorije</li>
          <li className={style.navItem} onClick={() => handleNavigation('/cenovnik')}>Cenovnik</li>
          <li className={style.navItem} onClick={() => handleNavigation('/kontakt')}>Kontakt</li>
          <li className={style.navItem} onClick={() => user?handleNavigation('/profil'):handleNavigation('/prijavi-se')}>{user?"Profil":"Prijavi se"}</li>
          <li className={style.optli}>
          <div className={style.navItem + ' ' + style.opt} onClick={() => handleNavigation('/daily')}>Daily</div>
          <div className={style.navItem + ' ' + style.opt} onClick={() => handleNavigation('/travel')}>Travel</div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
