const { performance } = require('perf_hooks');
const { std, mean } = require('mathjs');

// swap function
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// Bubble sort
function bubbleSort(nums) {
  let limit = nums.length - 1;
  while (limit > 0) {
    for (let i = 0; i < limit; i++) {
      if (nums[i + 1] < nums[i]) {
        swap(nums, i, i + 1);
      }
    }
    limit--;
  }
  return nums;
}

// Insertion sort
function insertionSort(nums, lower = 0, upper = nums.length - 1) {
  // keeping your card sorted so far.
  for (let i = lower + 1; i <= upper; i++) {
    // a new card coming in. compare to cards from the last sorted postion.
    for (let j = i; j > lower && nums[j - 1] > nums[j]; j--) {
      swap(nums, j, j - 1);
    }
  }
  return nums;
}

// Merge sort
function split(nums) {
  const median = Math.floor(nums.length / 2);
  return [nums.slice(0, median), nums.slice(median, nums.length)];
}

function merge(arr1, arr2) {
  let mergedArray = [];
  let index1 = 0;
  let index2 = 0;
  while (index1 < arr1.length && index2 < arr2.length) {
    if (arr1[index1] < arr2[index2]) {
      mergedArray.push(arr1[index1]);
      index1++;
    } else {
      mergedArray.push(arr2[index2]);
      index2++;
    }
  }
  if (index1 < arr1.length) {
    return mergedArray.concat(arr1.slice(index1));
  } else {
    return mergedArray.concat(arr2.slice(index2));
  }
}

function mergeSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  // Split all the way
  let splitArrays = split(nums);
  let sortedA = mergeSort(splitArrays[0]);
  let sortedB = mergeSort(splitArrays[1]);

  // merge sorted (nums.length 0 and 1 are sorted)
  return merge(sortedA, sortedB);
}

// Quicksort
function quickSort(nums, lower, upper) {
  if (lower === undefined) {
    lower = 0;
  }
  if (upper === undefined) {
    upper = nums.length - 1;
  }

  // Base case: An empty array or an array with only 1 item is sorted.
  if (lower > upper) {
    return;
  }
  let p = randomizedPartition(nums, lower, upper);

  quickSort(nums, lower, p - 1);
  quickSort(nums, p + 1, upper);
}

// Quicksort with Insertion Sort 1.
// Insertion sort is preformed on the subarray left of the partition and then the subarray right of the partition after quicksort to the base case.
function quickSortInsertion(nums, lower, upper) {
  if (lower === undefined) {
    lower = 0;
  }
  if (upper === undefined) {
    upper = nums.length - 1;
  }

  // Base case: Base on the analysis, insertion sort has a faster runtime than quicksort for n < 2**10 elements.
  if (upper - lower <= 8) {
    return insertionSort(nums, (lower = lower), (upper = upper));
  }
  let p = randomizedPartition(nums, lower, upper);

  quickSortInsertion(nums, lower, p - 1);
  quickSortInsertion(nums, p + 1, upper);
}

// Quicksort with Insertion sort 2.
// Insertion sort is prefromed on the entire quicksorted array up to the base case.
function quickSortInsertion2(nums, lower, upper) {
  _quickSortInsertion(nums, lower, upper);
  insertionSort(nums);
}

function _quickSortInsertion(nums, lower, upper) {
  if (lower === undefined) {
    lower = 0;
  }
  if (upper === undefined) {
    upper = nums.length - 1;
  }

  // Base case
  if (upper - lower <= 8) {
    return;
  }
  let p = randomizedPartition(nums, lower, upper);

  quickSortInsertion(nums, lower, p - 1);
  quickSortInsertion(nums, p + 1, upper);
}

function partition(nums, lower, upper) {
  let pivot = nums[upper];
  let i = lower - 1;
  for (let j = lower; j < upper; j++) {
    // invariant: items between lower bound and i, inculsively are less than or equal to the pivot.
    //            items btween i+1 and upper bount -1, inculsively, are greater than the pivot.
    //            if item is the last item, item is the pivot.
    if (nums[j] <= pivot) {
      swap(nums, ++i, j);
    }
  }
  swap(nums, ++i, upper);
  return i;
}

function randomizedPartition(nums, lower, upper) {
  let i = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  swap(nums, i, upper);
  return partition(nums, (lower = lower), (upper = upper));
}

// For non unquie elements
const nums = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));

function getRunTime(arrSize, func, trials) {
  let times = [];
  let count = 0;
  while (count < trials) {
    const t0 = performance.now();
    func(shuffleArray(arrSize));
    const t1 = performance.now();
    times.push(t1 - t0);
    count++;
  }
  const average = Number(mean(times).toFixed(5));
  const stdev = Number(std(times).toFixed(3));
  return [average, stdev];
}

function shuffleArray(arrSize) {
  const arr = [];
  for (let i = 1; i <= arrSize; i++) {
    arr.push(i);
  }

  for (let i = 0; i < arr.length; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    swap(arr, i, randomIndex);
  }
  return arr;
}

function RunTimes(
  insertionSort,
  quickSort,
  quickSortInsertion,
  quickSortInsertion2,
  mergeSort
) {
  this.insertionSort = insertionSort;
  this.quickSort = quickSort;
  this.quickSortInsertion = quickSortInsertion;
  this.quickSortInsertion2 = quickSortInsertion2;
  this.mergeSort = mergeSort;
}

function measureTimes(size, maxSize, trials, funcs) {
  const times = {};
  for (let i = size; i <= maxSize; i = i * 2) {
    let runTimes = [];
    funcs.forEach((func) => {
      runTimes.push(getRunTime(i, func, trials));
      console.log(`    ${func.name}, ${runTimes[runTimes.length - 1]}`);
    });
    times[i] = new RunTimes(...runTimes);
    console.log(i);
  }
  console.table(times);
  return times;
}

console.log(
  measureTimes(2, 2 ** 20, 20, [
    insertionSort,
    quickSort,
    quickSortInsertion,
    quickSortInsertion2,
    mergeSort,
  ])
);
