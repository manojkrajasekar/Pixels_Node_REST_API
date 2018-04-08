const arrayFirstElementToObject = (arr) => {
    if (Array.isArray(arr) && arr.length > 0) {
        return arr[0];
    }
}

module.exports = { arrayFirstElementToObject };