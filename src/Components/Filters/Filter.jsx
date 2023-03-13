function Filter({filter}){

    const changeHandler = (event) => {
        const checked = event.target.value;
        if(checked === 'p'){
            const data = document.querySelectorAll('.empty-balance');
            data.forEach(s => {
                s.style.display = 'none'
            })
            const data2 = document.querySelectorAll('.positive-balance');
            data2.forEach(s => {
                s.style.display = 'table-row'
            })
        } else if(checked === 'e'){
            const data = document.querySelectorAll('.positive-balance');
            data.forEach(s => {
                s.style.display = 'none'
            })
            const data2 = document.querySelectorAll('.empty-balance');
            data2.forEach(s => {
                s.style.display = 'table-row'
            })
        } else{
            const data = document.querySelectorAll('tr');
            data.forEach(s => {
                s.style.display = 'table-row'
            })
        }
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