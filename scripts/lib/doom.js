/**
 * Given a doom color, returns the range of word counts appropriate for that
 * color
 * @param {DoomColor} color
 * @return {[number, number]}
 */
function getRange(color) {
  switch (color) {
    case 'green':
      return [100, 400];
    case 'blue':
      return [200, 525];
    case 'purple':
      return [500, 850];
    case 'red':
      return [800, 1250];
    case 'black':
      return [1175, 1650]
  }
}

/**
 * @param {number} n
 * @return {number}
 */
function roundToFive(n) {
  return Math.round(n / 5) * 5;
}

/**
 * @param {[number, number]} range
 * @return {number}
 */
function numberInRange(range) {
  const trueRange = range[1] - range[0];
  const value = Math.random() * trueRange;
  return roundToFive(value + range[0]);
}

/**
 * Retrieves a Box of Doom challenge
 * @param {DoomColor} color
 * @return {string}
 */
function doom(color) {
  const range = getRange(color);
  return numberInRange(range).toString();
}
module.exports.doom = doom;
