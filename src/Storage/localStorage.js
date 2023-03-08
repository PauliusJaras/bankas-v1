const write = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const read = key => {
    const data = localStorage.getItem(key);
    if(null === data){
        return [];
    }
    return JSON.parse(data);
}

export const create = (key, data) => {
    const allData = read(key);
    data.id = crypto.randomUUID();
    data.show = true;
    allData.push(data);
    write(key, allData);
}

export const destroy = (key, id) => {
    const allData = read(key);
    const deletedData = allData.filter(a => a.id !== id);
    write(key, deletedData);
}

export const edit = (key, data) => {
    const allData = read(key);
    const editedData = allData.map(a => data.id === a.id ? {...data} : {...a});
    write(key, editedData);
}

export const sort = (key, sortData) => {
    console.log(sortData);
    const allData = read(key);
    const newData = [...allData]
    const sortedData = newData.sort((a, b) => {
        if(a[sortData] < b[sortData]) { return 1; }
    if(a[sortData] > b[sortData]) { return -1; }
    return 0;
    })
    write(key, sortedData);
}

