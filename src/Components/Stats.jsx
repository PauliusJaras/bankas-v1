function Stats({account}){
    return (
        <>
            <div>Total accounts: {account.length}</div>
            <div>Total balance: {account.reduce((accumulator, currentValue) => accumulator+currentValue.balance, 0)}</div>
        </>
    )
}

export default Stats;