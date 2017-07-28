
function print(text) {
    document.write(text + '<br>');
}

function recursionFib(n) {
    if (n === 1 || n === 2) {
        return (1);
    } 
    else {
        return (recursionFib(n - 1) + recursionFib(n - 2));
    }
}

function input() {
    let number = prompt('Pleace enter N ');
    return number;
}

function cycleFib(n) {
    let fibPrev = 1;
    let fibNext = 1;
    let fib;
    if (n === 1 || n ===2) {
        return 1;
    }
    else{
        for (var i = 3; i <= n; i++) {
            fib = fibPrev + fibNext;
            fibPrev = fibNext;
            fibNext = fib;    
        }
        return fib;
    }
}

function arrayFib(n){
    let fibArr = [1, 1];
    if (n === 1 || n ===2) {
        return (1);
    }
    else{
        for (var i = 1; i <= n; i++) {
            let prevInd = i - 1;
            fibArr.push(fibArr[i] + fibArr[prevInd]);
        }
        return fibArr[i - 2];
    }
}
let n = parseInt(input());
print ('Число Фибаеаччи рукурсией ' + recursionFib(n));
print ('Число Фибаеаччи циклом ' + cycleFib(n));
print ('Число Фибаеаччи из массива ' + arrayFib(n));