function DepositBalanceButton({table, balance, setEditAccount, setBalance}){

    const clickHandler = () => {
        if(balance <= 0 || balance === null ){
            return;
        }
        const newBalance = table.balance + parseInt(balance);
        const editValues = {...table, balance: parseInt(newBalance)};
        setEditAccount(editValues)
        setBalance(0);
        document.getElementById(`${table.id}`).value = 0;

    }

    return (
        <>
            <button onClick={clickHandler} className="btn btn-success">
                Deposit
            </button>
        </>
    )
}

export default DepositBalanceButton;