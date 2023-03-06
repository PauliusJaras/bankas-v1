import DeleteButton from "./Buttons/DeleteButton";
import DepositBalanceButton from "./Buttons/DepositiBalanceButton";
import WithdrawBalanceButton from "./Buttons/WithdrawBalanceButton";
import { useState } from "react";

function Table({account, setAccount}){

    const [balance, setBalance] = useState(0);

    const handleChange = (event) => {
        const value = event.target.value;
        setBalance(Number(value));
    }

    return(
        <>
            <h1>Accounts</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Balance</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        account === null ? null : account.map((acc, index) => 
                        <tr key={index}>
                           <th scope="row">{index}</th>
                            <td>{acc.name}</td>
                            <td>{acc.surname}</td>
                            <td>{acc.balance}</td> 
                            <td>
                                <input type="number" onChange={handleChange}></input>
                                <DeleteButton account={acc} setAccount={setAccount}/> 
                                <WithdrawBalanceButton account={acc} balance={balance} setAccount={setAccount}/> 
                                <DepositBalanceButton account={acc} balance={balance} setAccount={setAccount}/>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;