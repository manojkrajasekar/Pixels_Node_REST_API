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


const processVoteResults = (resolve, reject) => (error, results, fields) => {
    if (error) {
        reject(error);
        return;
    }

    resolve(results);
};


// const processgetVoteCountResults = (resolve, reject) => (error, results, fileds) => {
//     if (error) {
//         reject(error);
//         return;
//     }

//     resolve(results[0]);
// };

module.exports = { processResults, processUpdateResults };