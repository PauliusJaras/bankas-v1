function Filter({setFilter, filter}){

    const changeHandler = (event) => {
        const checked = event.target.value;
        setFilter(checked);
    }

    return (
        <>
            <select onChange={changeHandler} className="form-select" aria-label="Default select example">
                <option key={0} disabled>Filter Accounts</option>
                {filter.map((f,i) => <option key={i+1} value={f.id}>{f.name}</option>)}
            </select>
        </>
    )
}

export default Filter;