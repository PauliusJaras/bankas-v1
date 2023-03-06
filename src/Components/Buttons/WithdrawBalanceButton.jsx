function WithdrawBalanceButton({account, balance, setAccount, setBalance}){

    const clickHandler = () => {
        const newValue = account.balance - balance;       
        setAccount(acc => acc.map(a => a.id === account.id ? ({...a, balance: newValue}) : a));
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