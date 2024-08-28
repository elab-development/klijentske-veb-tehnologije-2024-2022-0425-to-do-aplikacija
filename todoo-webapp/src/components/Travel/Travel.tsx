import { UserProp } from "../../types";
import ToDoList from "../ReusableComponents/ToDoList";


function Travel({user,setUser}:UserProp) {

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60vh", minHeight:"60vh" }}>
          <ToDoList name="TRAVEL" user={user} setUser={setUser}></ToDoList>
        </div>
      </div>
    </section>
  );
};

export default Travel;
