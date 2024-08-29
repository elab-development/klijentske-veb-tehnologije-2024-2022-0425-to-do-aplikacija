import { useNavigate } from "react-router-dom";
import { UserProp } from "../../types";
import ToDoList from "../ReusableComponents/ToDoList";


function Daily({user,setUser}:UserProp) {

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section>
      <div style={{ display: "flex", flexDirection:"column", justifyContent: "center",alignItems:"center" }}>
        <div style={{ width: "60vh", minHeight:"60vh" }}>
          <ToDoList name="DAILY" user={user} setUser={setUser} ></ToDoList>
        </div>
        <div><span>1 </span><a><span onClick={() => handleNavigation('/travel')}>{">"}</span></a></div>
      </div>
    </section>
  );
};

export default Daily;
