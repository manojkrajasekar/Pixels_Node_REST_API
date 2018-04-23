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

const processPostResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[2]);
};



module.exports = { processResults, processUpdateResults, processPostResults };