function WithdrawBalanceButton({table, balance, setEditAccount, setBalance}){

    const clickHandler = () => {
        if(balance === null || balance <= 0){
            document.getElementById(`${table.id}`).value = 0;
            return;
        }
        const newBalance = table.balance - balance;
        if(newBalance < 0){
            document.getElementById(`${table.id}`).value = 0;
            return null;
        }
        const editValues = {...table, balance: newBalance};
        setEditAccount(editValues)
        setBalance(0);
        document.getElementById(`${table.id}`).value = 0;
    }

    return (
        <>
            <button onClick={clickHandler} className="btn btn-primary">
                Withdraw
            </button>
        </>
    )
}

export default WithdrawBalanceButton;