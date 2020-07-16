function getPlatform(platformString) {
    const platformRegex = /^(Win)[a-zA-Z0-9.]+|(MacOSX)$/;
    return platformRegex.test(platformString) ? 'Desktop' : 'Mobile';
}

function filterDataByComment(keyword, data) {
    return data.filter(({ comment }) => comment.search(keyword) > -1);
}

function filterDataByRating(ratings, data) {
    let filteredData = [];

    ratings.forEach(value => {
        filteredData = [...filteredData, ...data.filter(({ rating }) => value === rating)];
    });

    return filteredData;
}

export { getPlatform, filterDataByComment, filterDataByRating };
