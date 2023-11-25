/* Your order, please
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

    Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

    Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/


function order(words){
    if (words==='') {return ''}
    newArr =[]
    words.split(' ').map((w, index)=> {
            w.includes(1) ? newArr[0]=w : w.includes(2) ? newArr[1]=w : w.includes(3) ? newArr[2]=w :
                w.includes(4) ? newArr[3]=w : w.includes(5) ? newArr[4]=w : w.includes(6) ? newArr[5]=w :
                    w.includes(7) ? newArr[6]=w : w.includes(8) ? newArr[7]=w : newArr[8]=w
        }
    )
    // ...
    return newArr.join(' ')
}