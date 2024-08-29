import { useNavigate } from "react-router-dom";
import { UserProp } from "../../types";
import ToDoList from "../ReusableComponents/ToDoList";


function Travel({user,setUser}:UserProp) {

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <section>
      <div style={{ display: "flex", flexDirection:"column", justifyContent: "center",alignItems:"center" }}>
        <div style={{ width: "60vh", minHeight:"60vh" }}>
          <ToDoList name="TRAVEL" user={user} setUser={setUser} ></ToDoList>
        </div>
        <div><a><span onClick={() => handleNavigation('/daily')}>{"< "}</span></a><span> 2</span></div>
      </div>
    </section>
  );
};

export default Travel;
