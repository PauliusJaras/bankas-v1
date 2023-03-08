function DeleteButton({table, setDeleteAccount}){

    const clickHandler = () => {
        if(window.confirm("Do you really want to delete this account?")){
            setDeleteAccount(table);
        }
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