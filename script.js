function findLargest(a, b, c) {
  //your code here
	let arr = [a, b, c];
	let max = arr[0];
	for(let i=1;i<arr.length;i++)
		{ 
			if(arr[i]>max)
			{
				max = arr[i];
			}
		}
	return max;
} 

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
