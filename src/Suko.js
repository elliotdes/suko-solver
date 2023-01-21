// Checking

function checkColorSums(grid, colors, colorSums) {
  let orangeSum = 0;
  let blueSum = 0;
  let greenSum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (colors[i][j] === "#FFA07A") {
        orangeSum += grid[i][j];
      } else if (colors[i][j] === "#87CEFA") {
        blueSum += grid[i][j];
      } else if (colors[i][j] === "#7FFFAA") {
        greenSum += grid[i][j];
      }
    }
  }
  if (
    orangeSum === colorSums["#FFA07A"] &&
    blueSum === colorSums["#87CEFA"] &&
    greenSum === colorSums["#7FFFAA"]
  ) {
    return true;
  } else {
    return false;
  }
}

function checkQuadSums(grid, quad) {
  const quadSums = [
    grid[0][0] + grid[0][1] + grid[1][0] + grid[1][1],
    grid[0][1] + grid[0][2] + grid[1][1] + grid[1][2],
    grid[1][0] + grid[1][1] + grid[2][0] + grid[2][1],
    grid[1][1] + grid[1][2] + grid[2][1] + grid[2][2],
  ];
  const quad_flat = quad.flat();
  for (let i = 0; i < quad_flat.length; i++) {
    if (quadSums[i] !== quad_flat[i]) {
      return false;
    }
  }
  return true;
}

function checkUniqueGrid(grid) {
  // create a set to store unique elements
  const arr = grid.flat();
  let uniqueElements = new Set();
  for (let i = 0; i < arr.length; i++) {
    // check if element is between 1 and 9
    if (arr[i] < 1 || arr[i] > 9) {
      return false;
    }
    if (uniqueElements.has(arr[i])) {
      return false;
    }
    uniqueElements.add(arr[i]);
  }
  return true;
}

// Solving

function convertTo3x3(arr) {
  return [arr.slice(0, 3), arr.slice(3, 6), arr.slice(6)];
}

function getPermutations(arr) {
  let permutations = [];
  function permute(arr, m = []) {
    if (arr.length === 0) {
      permutations.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }
  permute(arr);
  return permutations;
}

// Exports

export function checkSums(grid, colors, quad, colorSums) {
  if (
    checkUniqueGrid(grid) &&
    checkColorSums(grid, colors, colorSums) &&
    checkQuadSums(grid, quad)
  ) {
    return true;
  } else {
    return false;
  }
}

export function getSolution(colors, quad, colorSums) {
  const options = getPermutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for (let i = 0; i < options.length; i++) {
    const possible_grid = convertTo3x3(options[i]);
    if (checkSums(possible_grid, colors, quad, colorSums)) {
      return possible_grid;
    }
  }
  return false;
}
