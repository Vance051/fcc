// Add Length---7

function addLength(str) {
    const arrayStr = str.split(" ");
    return arrayStr.map(arrayStr => `${arrayStr} ${arrayStr.length}`)