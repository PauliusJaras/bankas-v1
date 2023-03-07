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
    allData.push(data);
    write(key, allData);
}

export const destroy = (key, id) => {
    const allData = read(key);
    const deletedData = allData.filter(a => a.id !== id);
    write(key, deletedData);
}