function DeleteButton({table, setDeleteAccount}){

    const clickHandler = () => {
        if(window.confirm("Do you really want to delete this account?")){
            if(table.balance > 0){
                alert("Can not delete an account with a positive balance. First withdraw all of your money and try again");
                return null;
            }
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