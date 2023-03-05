import { useState } from "react";

function Form({setAccount}){
    
    const [acc, setAcc] = useState({name: '', surname: '',  balance: 0, id: crypto.randomUUID()});

    const clickHandler = () => {
        setAccount(a => [...a, acc]);
    }

    const handleChange = (event) => {
        const data = event.target.value;
        const name = event.target.name

        setAcc(s => ({...s, [name]: data}));
    }

    return(
        <>
            <div className="form-group">
                <label htmlFor="accountName">Name</label>
                <input type="text" name={"name"} onChange={handleChange} placeholder="John"/>
            </div>
            <div className="form-group">
                <label htmlFor="accountSurname">Surname</label>
                <input type="text" name={"surname"} onChange={handleChange} placeholder="Leggins"/>
            </div>
            <button type="submit" value="Submit" onClick={clickHandler}>Add Account</button>
        </>
    )
}

export default Form;