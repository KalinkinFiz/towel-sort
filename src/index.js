module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length == 0) return [];

  if (matrix.length == 1) return matrix;

  let reverse = false;
  let result = [];

  matrix.forEach(row => {
    if (!reverse) {
      row.forEach( e => result.push(e) );
      reverse = true;
    } else {
      row.reverse().forEach( e => result.push(e) );
      reverse = false;
    }
  });
  
  return result;
}
