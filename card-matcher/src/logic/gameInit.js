const MAX_LENGTH = 9

const cardMainList = [
    'fa-cat', 'fa-crow', 'fa-dragon', 'fa-horse', 'fa-hamburger',  'fa-pizza-slice', 'fa-carrot', 'fa-candy-cane', 'fa-cookie', 
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
    console.log(randomCardList)
    //Duplicate elements in list
    randomCardList.push(...randomCardList)
    console.log(randomCardList)
    // Randomize elements again (no limit)
    return randomizeArray(randomCardList);
}

export { MAX_LENGTH }

export default generateCardList;




