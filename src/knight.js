/**
 * TODO:
 *  [] - API to calculate possible movements
 *  [] - Return them so I can access the result in the frontend
 *  [] - The backend should only accept the Knight position if it’s in Algebraic notation
 * FIXME:
 *  [] - Remove comments in Portuguese
 *  [] - improve for use
 *  [] - Remove console.log()
 */

/**
 * Find all possible X Positions Calculates 4 times the reported value,
 * Performs a filter and returns only the values that
 * are greater than 0 and less than 9
 * */
const axisPositions = axis => [axis + 2, axis - 2, axis + 1, axis - 1].filter(
  position => position > 0 && position < 9,
);

const calculateMovements = (cell) => {
  const coordinates = [];
  const axisX = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  // extrai somente os numeros da posiçao X e y
  const cellX = axisX.indexOf(cell[0]) + 1;
  const cellY = parseInt(cell[1], 10);

  const xPositions = axisPositions(cellX);
  const yPositions = axisPositions(cellY);

  for (let i = 0; i < xPositions.length; i++) {
    for (let j = 0; j < yPositions.length; j++) {
      if (
        Math.abs(cellX - xPositions[i])
          + Math.abs(cellY - yPositions[j])
        === 3
      ) {
        console.log('Valid: ', [
          xPositions[i],
          yPositions[j],
        ]);
        if (
          !coordinates.includes([xPositions[i], yPositions[j]])
        ) {
          coordinates.push([xPositions[i], yPositions[j]]);
        }
      }
    }
  }

  console.log('eixo x: ', cellX);
  console.log('eixo y: ', cellY);
  console.log('Possivel posiçoes em x:', xPositions);
  console.log('Possivel posiçoes em y:', yPositions);
  console.log('Possiveis cordenadas:', coordinates);
  console.log('Numero de movimentações:', coordinates.length);
  return coordinates.length;
};

calculateMovements('e5');
