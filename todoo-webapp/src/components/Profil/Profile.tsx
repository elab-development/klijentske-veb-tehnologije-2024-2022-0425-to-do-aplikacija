import style from "../../modules/Profile.module.css";
import { User, UserProp } from "../../types";
import TextBox from "../ReusableComponents/TextBox";
import { useEffect, useState} from 'react';

function Profile(prop: UserProp) {

    const [currUser, setCurrUser] = useState<User | null>(null);

    useEffect(() => {
            setCurrUser(prop.user);
    }, [prop.user]);
    
    function logout(){
        if(!prop.user)
            return;
        const allUsersJson = localStorage.getItem("all_users");
        if (allUsersJson && currUser) {
            const allUsers: User[] = JSON.parse(allUsersJson);
            const updatedUsers = allUsers.map(user => 
                user.username === currUser.username ? currUser : user
            );
            localStorage.setItem("all_users", JSON.stringify(updatedUsers));
        }
        prop.setUser(null);        
    }


    return (
        <section>
            <div className={style.container}>
                <strong className={style.centered}>
                    <TextBox
                        txtcolor='#9A1750'
                        backgroundcolor='#E3E2DF'
                        text='TVOJ PROFIL: '
                        borderRad='10px'
                        widthFraction={1}
                        boxShadow='0 8px 8px rgba(0, 0, 0, 0.5)'
                        isHeading={true}
                    />
                </strong>
                <div className={style.container2}>
                    <table className={style.table}>
                        <tbody>
                        <tr>
                            <td colSpan={2} style={{ backgroundColor: "#e3afbc" }}>LICNI PODACI:</td>
                        </tr>
                        <tr>
                            <td>Korisnicko ime:</td>
                            <td>{currUser?currUser.username:""}</td>
                        </tr>
                        <tr>
                            <td>Ime:</td>
                            <td>{currUser?currUser.name:""}</td>
                        </tr>
                        <tr>
                            <td>Prezime:</td>
                            <td>{currUser?currUser.surname:""}</td>
                        </tr>
                        <tr>
                            <td>email:</td>
                            <td>{currUser?currUser.email:""}</td>
                        </tr>
                        <tr>
                            <td>Mesecni plan:</td>
                            <td>Pocetnik</td>
                        </tr>
                        </tbody>
                    </table>
                    <table className={style.table}>
                        <tbody>
                        <tr>
                            <td colSpan={2} style={{ backgroundColor: "#e3afbc" }}>STATISTIKA:</td>
                        </tr>
                        <tr>
                            <td>Broj zadataka:</td>
                            <td>{currUser?currUser.daily.length+currUser.travel.length:""}</td>
                        </tr>
                        <tr>
                            <td>Broj resenih:</td>
                            <td>{currUser? currUser.daily.filter(task => task.isFinished).length +currUser.travel.filter(task => task.isFinished).length: ""}</td>
                        </tr>
                        <tr>
                            <td>Procenat uspesnosti:</td>
                            <td>{currUser?(currUser.daily.filter(task => task.isFinished).length +currUser.travel.filter(task => task.isFinished).length)/(currUser.daily.length+currUser.travel.length):""}</td>
                        </tr>
                        <tr>
                            <td>*Faktor poboljsanja:</td>
                            <td> /</td>
                        </tr>
                        <tr style={{textAlign:"right"}}>
                            <td><button onClick = {logout} style={{backgroundColor:"#9A1750",color:"white"}}>logout</button></td>
                        </tr>
                        </tbody>
                    </table>

                </div>
                <p style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                    *za dodatne opcije unapredite svoj plan
                </p>
            </div>
        </section>
    );
}

export default Profile;
