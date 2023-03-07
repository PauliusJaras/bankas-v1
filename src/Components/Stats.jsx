function Stats({account}){
    return (
        <>
            <div>Total accounts: {account === null ? 0 : account.length}</div>
            <div>Total balance: {account === null ? 0 : account.reduce((accumulator, currentValue) => accumulator+currentValue.balance, 0)}</div>
        </>
    )
}

export default Stats;