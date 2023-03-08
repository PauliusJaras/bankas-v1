import DeleteButton from "./Buttons/DeleteButton";
import DepositBalanceButton from "./Buttons/DepositiBalanceButton";
import WithdrawBalanceButton from "./Buttons/WithdrawBalanceButton";
import { useState } from "react";

function Table({table, setDeleteAccount, setEditAccount}){

    const [balance, setBalance] = useState(0);

    const handleChange = (event) => {
        const value = event.target.value;
        setBalance(parseFloat(value).toFixed(2));
    }

    if(table === null){
        return (
            <div>Loading...</div>
        )
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
                        table === null ? null : table.map((t, index) => 
                        <tr key={index}>
                           <th scope="row">{index}</th>
                            <td>{t.name}</td>
                            <td>{t.surname}</td>
                            <td>{t.balance}</td> 
                            <td>
                                <input type="number" onChange={handleChange}></input>
                                <DeleteButton table={t} setDeleteAccount={setDeleteAccount}/> 
                                <WithdrawBalanceButton table={t} balance={balance} setEditAccount={setEditAccount} setBalance={setBalance}/> 
                                <DepositBalanceButton table={t} balance={balance} setEditAccount={setEditAccount} setBalance={setBalance}/>
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