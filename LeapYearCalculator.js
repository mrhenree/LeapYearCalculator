var year = prompt("Input year");
if ((year%4 ===0 && year%100 !==0) || (year%4 ===0 && year%100 ===0 && year%400 ===0 )) {
    alert(year +" is a Leap Year ")
} else {alert(year +" is Not a Leap Year ")}
