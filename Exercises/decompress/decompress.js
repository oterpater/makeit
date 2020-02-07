// We are given a list nums of integers representing a list compressed
//  with run-length encoding.

// Consider each adjacent pair of elements [a, b] = [nums[2*i], nums[2*i+1]]
//  (with i >= 0).  For each such pair, there are a elements with value b in the 
//  decompressed list.

// Return the decompressed list.

 // nums = [1,2];
 // decompressRLElist([3,4]) = [4,4,4];
 //  decompressRLElist([2,5]) = [5,5];

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [2,4,4,4]
// Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so
//  we generate the array [2].
// The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
// At the end the concatenation [2] + [4,4,4,4] is [2,4,4,4].
 

// Constraints:

// 2 <= nums.length <= 100
// nums.length % 2 == 0
// 1 <= nums[i] <= 100

function decompressRLElist(listNums){
	const result = [];
	for(let i = 0; i < listNums.length; i += 2){
		for (let j = 0; j < listNums[i]; j++){
			result.push(listNums[i+1]);
		}
	}
	return result;
};

console.log(decompressRLElist([3,4,2,5]));



















