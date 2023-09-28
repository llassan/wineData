export function calculateMean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

export function calculateMedian(arr) {
  // Sort the array and calculate median
  let median = 0;
  let num = arr.length;
  arr.sort();
  if (num % 2 !== 0) {
    median = arr[Math.floor(num / 2)];
  } else if (num % 2 === 0) {
    median = (arr[num / 2] + arr[num / 2 - 1]) / 2;
  }
  return median.toFixed(3);
}

export function calculateMode(arr) {
  const frequencyTable = {};
  arr.forEach((elem) => (frequencyTable[elem] = frequencyTable[elem] + 1 || 1));

  let modes = [];
  let maxFrequency = 0;
  for (const key in frequencyTable) {
    if (frequencyTable[key] > maxFrequency) {
      modes = [Number(key)];
      maxFrequency = frequencyTable[key];
    } else if (frequencyTable[key] === maxFrequency) {
      modes.push(Number(key));
    }
  }

  if (modes.length === Object.keys(frequencyTable).length) modes = [];
  return modes;
}
