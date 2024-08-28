import style from "../../modules/Contact.module.css";
import korisnik from "../../assets/slika korisnik.png";
import { useRef } from "react";
import { User } from "../../types";

function Register() {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const againpassword = useRef<HTMLInputElement>(null);
  const ime = useRef<HTMLInputElement>(null);
  const prezime = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  function register() {
    const newUser: User = new User(
      ime.current?.value || '',
      prezime.current?.value || '',
      username.current?.value || '',
      password.current?.value || '',
      email.current?.value || ''
    );

    let users = localStorage.getItem("all_users");
    let allUsers: User[] = users ? JSON.parse(users) : [];

    if (allUsers.find(user => user.username === newUser.username)) {
      alert("Username already exists. Please choose a different username.");
      return;
    }

    allUsers.push(newUser);
    localStorage.setItem("all_users", JSON.stringify(allUsers));
    alert("Registration successful. You can now log in.");
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
                      required
                      type="text"
                      placeholder="Ime:"
                      ref={ime}  
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="email"
                      placeholder="Email:"
                      ref={email}  
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      required
                      type="text"
                      placeholder="Prezime:"
                      ref={prezime}  
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="password"
                      placeholder="Lozinka:"
                      ref={password} 
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      required
                      type="text"
                      placeholder="Korisnicko ime:"
                      ref={username} 
                    />
                  </td>
                  <td>
                    <input
                      required
                      type="password"
                      placeholder="Ponovi lozinku:"
                      ref={againpassword}  
                    />
                  </td>
                </tr>
                <tr style={{ textAlign: "right" }}>
                  <td colSpan={2}>
                    <button onClick={register} type="submit" style={{ backgroundColor: "#9A1750", color: "white", fontWeight: "bold" }}>
                      Registruj se
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

export default Register;
