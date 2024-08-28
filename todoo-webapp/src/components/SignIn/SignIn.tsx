import { useNavigate } from 'react-router-dom';
import style from "../../modules/Contact.module.css";
import korisnik from "../../assets/slika korisnik.png";
import {useRef} from 'react'
import { User } from '../../types';
interface SignInProps {
  setUser: (user: User | null) => void;
}

function SignIn({ setUser }: SignInProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function login(user:string | undefined,pass:string | undefined){
      let users =  localStorage.getItem("all_users");
      if(!users){return;}
      let allUsers : User[] = JSON.parse(users);
      for(let i =0;i<allUsers.length;i++){
        if(allUsers[i].username===user && allUsers[i].password===pass)
        {
            localStorage.setItem("curr_user",JSON.stringify(allUsers[i]));
            setUser(allUsers[i]);  
        }
      }
      return;
  }
  return (
    <section>
      <div className={style.container}>
        <div style={{ backgroundColor: "#e3afbc", borderRadius: "20px", padding: "2rem" }}>
          <div style={{ textAlign: "center" }}>
            <img src={korisnik} alt="User icon" style={{ width: "5rem" }} />
          </div>
          <form>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="username:"
                      ref={username}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="password"
                      placeholder="password:"
                      ref={password}
                    />
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td colSpan={2}>
                    <button
                      onClick={()=>login(username.current?.value,password.current?.value)}
                      type="button"
                      style={{ backgroundColor: "#9A1750", color: "white", fontWeight: "bold" }}
                    >
                      Log in
                    </button>
                  </td>
                </tr>
                <tr style={{ textAlign: "center" }}>
                  <td colSpan={2}>
                    <button
                      type="button"
                      onClick={() => handleNavigation('/register')}
                      style={{ backgroundColor: "#9A1750", color: "white", fontWeight: "bold" }}
                    >
                      Nemas nalog?
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
