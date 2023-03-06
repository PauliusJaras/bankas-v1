function DeleteButton({account, setAccount}){

    const clickHandler = () => {
        setAccount(acc => acc.filter(a=> a.id !== account.id));
    }

    return (
        <>
            <button onClick={clickHandler} className="btn btn-danger">
                Delete
            </button>
        </>
    )
}

export default DeleteButton;