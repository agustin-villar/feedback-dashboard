function getPlatform(platformString) {
    const platformRegex = /^(Win)[a-zA-Z0-9.]+|(MacOSX)$/;
    return platformRegex.test(platformString) ? 'Desktop' : 'Mobile';
}

function filterDataByComment(keyword, data) {
    return data.filter(({ comment }) => comment.toLowerCase().search(keyword.toLowerCase()) > -1);
}

function filterDataByValues(values, criteria, data) {
    let filteredData = [];

    values.forEach(value => {
        filteredData = [...filteredData, ...data.filter(item => value === item[criteria])];
    });

    return filteredData;
}

function getUniqueFilterValues(array, value) {
    const valuesCollection = new Set(array);

    if (valuesCollection.has(value)) {
        valuesCollection.delete(value);
    } else {
        valuesCollection.add(value);
    }

    return Array.from(valuesCollection);
}

export { getPlatform, filterDataByComment, filterDataByValues, getUniqueFilterValues };
