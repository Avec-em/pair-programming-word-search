const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
        if (l.includes(reverseStr(word))) return true;

    }

    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
        if (l.includes(reverseStr(word))) return true;
    }
    return false;

    
}


const reverseStr = (str) => {
    return str.split('').reverse().join('');
}

const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let row = [];
    for (let k = 0; k < matrix.length; k++) {
      
      row.push(matrix[k][i]);
    }
    newMatrix.push(row)
  } 
  return newMatrix;
};