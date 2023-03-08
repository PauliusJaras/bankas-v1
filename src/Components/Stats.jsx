function Stats({table}){
    return (
        <>
            <div className="top">
                <div>Total accounts: {table === null ? 0 : table.length}</div>
                <div>Total balance: {table === null ? 0 : table.reduce((accumulator, currentValue) => accumulator+currentValue.balance, 0)}</div>
            </div>
        </>
    )
}

export default Stats;