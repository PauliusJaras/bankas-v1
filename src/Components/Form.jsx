import { useState } from "react";

function Form({setCreateAccount}){
    
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const balance = 0.00;

    const clickHandler = () => {
        if(name === '' || surname === ''){
            alert("Name or Surname fields can not be blank")
            return null;
        }
        
        setCreateAccount({
            name: name,
            surname: surname,
            balance: balance
        });
        setName('');
        setSurname('');
    }

    return(
        <>
            <div className="form-group">
                <label htmlFor="accountName">Name</label>
                <input type="text" name={"name"} value={name} onChange={(e) => {
                    setName(e.target.value);
                }} placeholder="Steve"/>
            </div>
            <div className="form-group">
                <label htmlFor="accountSurname">Surname</label>
                <input type="text" name={"surname"} value={surname} onChange={(e) => {
                    setSurname(e.target.value);
                }} placeholder="Stevens"/>
            </div>
            <button type="submit" value="Submit" onClick={clickHandler}>Add Account</button>
        </>
    )
}

export default Form;