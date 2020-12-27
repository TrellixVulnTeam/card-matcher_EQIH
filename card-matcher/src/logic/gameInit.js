const MAX_LENGTH = 9

const cardMainList = [
    'cat', 'crow', 'dragon', 'horse', 'hamburger',  'pizza-slice', 'carrot', 'candy-cane', 'cookie', 
]

const randomArrayIndex = (length) => {
    return Math.floor(Math.random() * length)
}

const randomizeArray = (arr, limit = null) => {
    let arrDup = [...arr];
    let randomArray = [];
    let num = limit === null ? arrDup.length : limit;
    for (let i = 0; i < num; ++i) {
        let index = randomArrayIndex(arrDup.length);
        randomArray.push(arrDup[index]);
        arrDup.splice(index, 1);
    }
    return randomArray;
}

const generateCardList = (lim = 3) => {
    // Randomize initial card list with limit
    let randomCardList = randomizeArray(cardMainList, lim);
    // Duplicate elements in list
    randomCardList.push(...randomCardList)
    // Randomize elements again (no limit)
    return randomizeArray(randomCardList);
}

export { MAX_LENGTH };

export default generateCardList;




