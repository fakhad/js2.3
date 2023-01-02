var one = +prompt('введите первое число'); 1
var two = +prompt('введите второе число'); 3
var three = +prompt('введите третье число'); 5

if (two > one && two < three || two > three && two < one){
   alert('среднее число' + two)
}else if (one > two && one < three || one < two && one > three){
    alert('среднее число' + one)
}else if (three > two && one > three || three < two && one < three){
    alert('среднее число' + three)
}else {
    alert('что то пошло не так')
}