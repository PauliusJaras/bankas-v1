function WithdrawBalanceButton({table, balance, setEditAccount, setBalance}){

    const clickHandler = () => {
        if(balance === null){
            return;
        }
        const newBalance = table.balance - balance;
        if(newBalance < 0){
            //Reikia message
            alert("Not enough money to withdraw")
            return null;
        }
        const editValues = {...table, balance: newBalance};
        setEditAccount(editValues)
        setBalance(0);
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