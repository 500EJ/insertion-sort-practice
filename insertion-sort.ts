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
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */
  // Your code here
}
