import DeleteButton from "./Buttons/DeleteButton";
import DepositBalanceButton from "./Buttons/DepositiBalanceButton";
import WithdrawBalanceButton from "./Buttons/WithdrawBalanceButton";
import Filter from "./Filters/Filter";
import { useState } from "react";

const filterValues = [
    {name: "Show All Accounts", id: 'all'}, 
    {name: "Show Empty Accounts", id: 'e'}, 
    {name: "Show Positive Accounts", id: 'p'}
];

function Table({table, setDeleteAccount, setEditAccount, setSortData}){

    const [balance, setBalance] = useState(0);

    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value);
        setBalance(value);
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
                        <th scope="col"  className="sort" onClick={() => setSortData('name')}>Name</th>
                        <th scope="col"  className="sort" onClick={() => setSortData('surname')}>Surname</th>
                        <th scope="col" className="sort" onClick={() => setSortData('balance')}>Balance</th>
                        <th scope="col">
                            <Filter filter={filterValues}/>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        table === null ? null : table.map((t, index) =>
                        <tr className={t.balance === 0 ? "empty-balance" : "positive-balance"} key={index}>
                           <th scope="row">{index}</th>
                            <td>{t.name}</td>
                            <td>{t.surname}</td>
                            <td>{t.balance}</td> 
                            <td className={"right"}>
                                <input type="number" onChange={handleChange}  id={t.id} min={0}></input>
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