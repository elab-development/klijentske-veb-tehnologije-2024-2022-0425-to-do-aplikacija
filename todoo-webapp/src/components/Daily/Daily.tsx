import { UserProp } from "../../types";
import ToDoList from "../ReusableComponents/ToDoList";


function Daily({user,setUser}:UserProp) {


  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60vh", minHeight:"60vh" }}>
          <ToDoList name="DAILY" user={user} setUser={setUser} ></ToDoList>
        </div>
      </div>
    </section>
  );
};

export default Daily;
