# Climbing Stairs

You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

## Example 1:

Input: n = 2
Output: 2

- Explanation: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps

## Example 2:

Input: n = 3
Output: 3

- Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

## Constraints:

1 <= n <= 45

# Code : Recursive, Time Limit Error

```
const climbStairs = (n) => {
    if(n == 1)
        return 1;
    if(n == 2)
        return 2;
    return climbStairs(n-1) + climbStairs(n-2);
};
```

# Code : Not Recursive

```
const climbStairs = (n) => {
    if(n==1)
        return 1;
    if(n==2)
        return 2;

    let x = [];
    x[1] = 1;
    x[2] = 2;

    for(let i = 3; i <= n; i++){
        x[i] = x[i-1] + x[i-2];
    }
    return x[n];
};
```
