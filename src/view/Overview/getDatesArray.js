var ourDate = new Date();
const pastMonth = ourDate.getMonth() - 1;
ourDate.setMonth(pastMonth);

var tomorrow = new Date();
const modifier = tomorrow.getDate() + 1;
tomorrow.setDate(modifier);

var date_sort_asc = function (item1, item2) {
    const date1 = item1.date;
    const date2 = item2.date;
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
};

const getDateArray = function (start, end) {
    var
        arr = {},
        dt = new Date(start);

    while (dt <= end) {
        const thisDate = new Date(dt).toLocaleDateString();
        arr[thisDate] = 0
        dt.setDate(dt.getDate() + 1);
    }
    return arr;
}

const getDatesArray = (tableData)=>{
    tableData.sort(date_sort_asc);
    let correctDate = tableData.map(item => {
        const date = item.date
            .split(' ')[0]
            .split('-')
            .reverse()
            .join('-');
        item.date = new Date(date).toLocaleDateString();
        return item;
    });
    let filtered = {};
    correctDate.map((item) => {
        filtered[item.date] = item.searches
        return item
    })
    
    const month = getDateArray(ourDate, tomorrow);
    
    const preFinal = { ...month, ...filtered }
    const final = Object.entries(preFinal).map((item, id) => {
        return { key: new Date(item[0]), data: item[1], id: id.toString() }
    })

    return final
};

export default getDatesArray;