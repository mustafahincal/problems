# Reverse Integer

Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

- Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

## Example 1:

Input: x = 123
Output: 321

## Example 2:

Input: x = -123
Output: -321

## Example 3:

Input: x = 120
Output: 21

# Bad and Long Code

```
const reverse = (x: number): number => {

      let numStr : string[] = x.toString().split("");
      let leftInd: number = 0, rightInd:number = numStr.length -1, temp:string, control : number = 0, reversed : string;
      if(numStr.includes("-")){
          numStr = numStr.slice(numStr.indexOf("-")+1,numStr.length);
          control = 1;
      }
      for(let i = 0 ; i < numStr.length / 2 ; i++){
          temp = numStr[leftInd];
          numStr[leftInd] = numStr[rightInd];
          numStr[rightInd] = temp;
          leftInd ++;
          rightInd --;
      }
      reversed = numStr.join("");
      if(control === 1)
          reversed = "-"+reversed;

      if (Number(reversed) > Math.pow(2, 31) - 1 || Number(reversed) < - (Math.pow(2,31)))
          return 0;

      return Number(reversed);
  };
```

# Short Code

```
const reverse = (x: number): number => {
  let reversed: string = String(Math.abs(x)).split("").reverse().join("");

  if (Number(reversed) > Math.pow(2, 31) - 1) return 0;

  return x < 0 ? -Number(reversed) : Number(reversed);
}
```

# True Code

```
const reverse = (x: number): number => {

    let reversed : number = 0;
    let num : number = Math.abs(x);
    while(num > 0){
        reversed = (reversed * 10) + num % 10;
        num = Math.floor(num/10);
    }

    if(reversed > Math.pow(2,31) - 1)
        return 0;

    return x < 0 ? -reversed : reversed;
};
```
