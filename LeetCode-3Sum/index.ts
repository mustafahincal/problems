const threeSum = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  let triplets: number[][] = [];
  let j: number, k: number, sum: number;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;

    j = i + 1;
    k = nums.length - 1;

    while (j < k) {
      sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) k--;
      else if (sum < 0) j++;
      else {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        while (nums[j] == nums[j - 1]) j++;
      }
    }
  }
  return triplets;
};
