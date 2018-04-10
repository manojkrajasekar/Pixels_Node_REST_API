const processResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[0]);
};

const processAddVoteResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[1]);
};

const processValidVoteResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[0]);
};

module.exports = { processResults, processAddVoteResults, processValidVoteResults };