const processResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[0]);
};

const processVoteResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[1]);
};

module.exports = { processResults, processVoteResults };