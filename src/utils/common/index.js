function getPlatform(platformString) {
    const platformRegex = /^(Win)[a-zA-Z0-9.]+|(MacOSX)$/;
    return platformRegex.test(platformString) ? 'Desktop' : 'Mobile';
}

function filterDataByComment(keyword, data) {
    return data.filter(({ comment }) => comment.toLowerCase().search(keyword.toLowerCase()) > -1);
}

function filterDataByRating(ratings, data) {
    let filteredData = [];

    ratings.forEach(value => {
        filteredData = [...filteredData, ...data.filter(({ rating }) => value === rating)];
    });

    return filteredData;
}

function filterDataByStatus(statuses, data) {
    let filteredData = [];

    statuses.forEach(value => {
        filteredData = [...filteredData, ...data.filter(({ status }) => value === status)];
    });

    return filteredData;
}

export { getPlatform, filterDataByComment, filterDataByRating, filterDataByStatus };
