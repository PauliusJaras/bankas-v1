function DepositBalanceButton({table, balance, setEditAccount, setBalance}){

    const clickHandler = () => {
        if(balance <= 0 || balance === null ){
            return;
        }
        const newBalance = table.balance + balance;
        const editValues = {...table, balance: newBalance};
        console.log(editValues)
        setEditAccount(editValues)
        setBalance(0);
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