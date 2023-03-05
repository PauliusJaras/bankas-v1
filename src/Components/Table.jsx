function Table({account}){
    return(
        <>
            <h1>Accounts</h1>
            <table className="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Surname</th>
                        <th scope="col">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        account === null ? null : account.map((account, index) => 
                        <tr key={index}>
                           <th scope="row">{index}</th>
                            <td>{account.name}</td>
                            <td>{account.surname}</td>
                            <td>{account.balance}</td> 
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;