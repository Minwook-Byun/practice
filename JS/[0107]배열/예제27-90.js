// 예제 27-90
let 메뉴가격 = [2500, 5500, 3500, 8750, 4500]
console.log(메뉴가격.sort()); //[ 2500, 3500, 4500, 5500, 8750 ]

메뉴가격 = [20, 40, 1, 5, 2]
console.log(메뉴가격.sort()); //[ 1, 2, 20, 40, 5 ]

// 예제 27-93
메뉴가격.sort((a,b)=> a-b) 
console.log(메뉴가격) //[ 1, 2, 5, 20, 40 ]




