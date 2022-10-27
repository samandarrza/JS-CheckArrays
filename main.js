let arr1 = [1,2,3];
let arr2 = [1,'2',3];
let check = true;

if (arr1.length !== arr2.length) {
    check = false;
}
else{
    arr1.sort();
    arr2.sort();
    for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) {
        check = false;
       }  
    }
}
console.log(check);