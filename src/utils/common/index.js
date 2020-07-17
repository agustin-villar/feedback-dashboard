/**
 * Will return if a platform is Desktop or Mobile
 * @param {string} platformString - The platform name
 * @returns {string}
 */
function getPlatform(platformString) {
    const platformRegex = /^(Win)[a-zA-Z0-9.]+|(MacOSX)$/;
    return platformRegex.test(platformString) ? 'Desktop' : 'Mobile';
}

/**
 * Will filter items based no wether or not the given string matches
 * the 'comment' attributes for each one of the items
 * @param {string} keyword - The string to filter by
 * @param {[Object]} data - The data collection
 * @returns {string}
 */
function filterDataByComment(keyword, data) {
    return data.filter(({ comment }) => comment.toLowerCase().search(keyword.toLowerCase()) > -1);
}

/**
 * Will filter items based on how the specified property matches the objects properties
 * inside the collection of items
 * @param {[string]} values - An array with values to filter by
 * @param {string} criteria - The property by wich the objects should be filtered
 * @param {[Object]} data - The data collection to be filtered
 * @returns {[Object]}
 */
function filterDataByValues(values, criteria, data) {
    return data.filter(item => !values.includes(item[criteria]));
}

/**
 * Will add or remove items to a collection depending on if they are already on the
 * collection or not.
 * @param {array} array - The array of values
 * @param {Object} value - The value to be added or removed
 * @returns {array}
 */
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
