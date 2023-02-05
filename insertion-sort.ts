// Insertion Sort out-of-place
// Do not modify the original array
export function insertionSort(arr: number[]): number[] {
  const array = arr.slice();
  const sorted: number[] = [];
  while (array.length) {
    console.log(sorted.join(","));
    const last = array.pop();
    sorted.push(0);
    for (let i = sorted.length - 1; i >= 0; i--) {
      const prev = sorted[i - 1];
      if (last != null && (i === 0 || (prev != null && prev < last))) {
        sorted[i] = last;
        break;
      } else if (prev != null) {
        sorted[i] = prev;
      }
    }
  }
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
export function insertionSortInPlace(arr: number[]): number[] {
  let divider = 1;
  while (arr[divider] != null) {
    console.log(arr.join(","));
    const n = arr[divider];
    for (let i = divider; i >= 0; i--) {
      const prev = arr[i - 1];
      if (n != null && (i === 0 || (prev && prev < n))) {
        arr[i] = n;
        break;
      } else if (prev != null) {
        arr[i] = prev;
      }
    }
    divider++;
  }
  return arr;
}
