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

    resolve(results);
};

const processgetVoteCountResults = (resolve, reject) => (error, results, fileds) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results[0]);
};

module.exports = { processResults, processAddVoteResults, processgetVoteCountResults };