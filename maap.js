
let arr = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
 
let m = arr.map((value)=>{
    if(value === ' '){
        return value = 'empty string';
    }
    else{
        return value;
    }
})

console.log(m);


