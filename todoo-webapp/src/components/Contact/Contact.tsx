import style from "../../modules/Contact.module.css";
import TextBox from "../ReusableComponents/TextBox";

function Contact() {
  return (
    <section>
      <div className={style.container}>
        <strong className={style.centered}>
          <TextBox
            txtcolor='#9A1750'
            backgroundcolor='#E3E2DF'
            text='OSTAVITE NAM VASE MISLJENJE I UTISKE NA SLEDECOJ FORMI:'
            borderRad='10px'
            widthFraction={1}
            boxShadow='0 8px 8px rgba(0, 0, 0, 0.5)'
            isHeading={true}
          />
        </strong>
        <div>
          <form action="submit">
            <table>
              <tbody>
              <tr>
                <td><input type="text" placeholder="Vase ime" /></td>
                <td><input type="text" placeholder="Vase prezime" /></td>
              </tr>
              <tr>
                <td><input type="text" placeholder="Vase email" /></td>
                <td><input type="text" placeholder="Vase broj telefona" /></td>
              </tr>
              <tr>
                <td colSpan={2}>
                <textarea rows={5} placeholder="Uneiste poruku" name="" id="" style={{width:"100%"}}></textarea>
                </td>
              </tr>
              <tr style={{textAlign:"right"}}>
                <td colSpan={2} >
                  <button type="submit">Posalji</button>
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

export default Contact;
