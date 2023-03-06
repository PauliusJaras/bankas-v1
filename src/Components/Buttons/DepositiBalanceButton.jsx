function DepositBalanceButton({account, balance, setAccount}){

    const clickHandler = () => {

        const newValue = account.balance + balance;
        setAccount(acc => acc.map(a => a.id === account.id ? ({...a, balance: newValue}) : a));
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