const age = prompt("How od are you?");

 // 문자열을 정수로 바꾸는 방법 
console.log(parseInt(age));

 // 변수의 타입을 보는 방법
 console.log(typeof age);

// NaN인지 확인하는 방법
isNaN(age);

// 숫자 입력 확인
if(isNaN(age)) {
    console.log("Please input Number");
} else {
    console.log("Thanks you for writing your age.");
}