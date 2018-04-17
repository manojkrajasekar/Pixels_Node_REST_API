const processResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[0]);
};

const processUpdateResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve({});
};

module.exports = { processResults, processUpdateResults };