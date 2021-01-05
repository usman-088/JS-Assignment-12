

//Assignment 6

//Task1

/* var a=+prompt("Enter any number","10")
document.write("<br> Result:<br>The value of a is: "+a)
document.write("<br>...................................")
document.write("<br>The value of ++a is: "+ ++a)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>The value of a++ is: "+ a++)
document.write("<br>Now the value of a is: "+ a)

document.write("<br><br>The value of --a is: "+ --a)
document.write("<br>Now the value of a is: "+ a)
document.write("<br><br>The value of a-- is: "+ a--)
document.write("<br>Now the value of a is: "+ a)
 */

//task 2
/*
var a=2,b=1
var result = --a - --b + ++b + b--;
document.write("<br>At --a <br> a is 1,b is 1 and result is 1")
document.write("<br><br>At --a - --b <br> a is 1,b is 0 and result is 1")
document.write("<br><br>At --a - --b + ++b <br> a is 1,b is 1 and result is 2")
document.write("<br><br>At --a - --b + ++b + b-- <br> a is 1,b is 0 and result is 3")

*/
//Task 3
/*var a=prompt("Please Enter your name","Ali")
alert("Welcome, "+a)
*/
//Task 5
/*var n= +prompt("Enter a number for multiplication table","5");
//var l= prompt("Enter length for multiplication table");
var l=10
document.write("Table of "+n+"<br>Length"+l+"<br>")

for(var i=1;i<=l;i++){
    document.write("<br>"+n+"*"+i+"="+(n*i))
} */

//Task 6

/* var sub1= prompt("Enter 1st subject","English");
var sub2= prompt("Enter 2nd subject","Math");
var sub3= prompt("Enter 3rd subject","Urdu");

var t=100

var m1= +prompt("Enter Obtained Marts for "+ sub1,"54");
var m2= +prompt("Enter Obtained Marts for "+ sub2,"54");
var m3= +prompt("Enter Obtained Marts for "+ sub3,"48");

document.write("<table>\
<tr>\
    <th>Subject</th>\
    <th>Total Marks</th>\
    <th>Obtained Marks</th>\
    <th>Percentage</th>\
</tr>\
<tr>\
    <td>"+sub1+"</td>\
    <td>"+t+"</td>\
    <td>"+m1+"</td>\
    <td>"+m1+"%</td>\
</tr>\
<tr>\
    <td>"+sub2+"</td>\
    <td>"+t+"</td>\
    <td>"+m2+"</td>\
    <td>"+m2+"%</td>\
</tr>\
<tr>\
    <td>"+sub3+"</td>\
    <td>"+t+"</td>\
    <td>"+m3+"</td>\
    <td>"+m3+"%</td>\
</tr>\
<tr>\
    <td></td>\
    <td><b>"+(3*t)+"</b></td>\
    <td><b>"+(m1+m2+m3)+"</b></td>\
    <td><b>"+(m1+m2+m3)/300+"%</b></td>\
</tr>\
</table>")
 */

//Assignment 7
/*
//Task 1
var city = prompt("Enter your city","Karachi");
if(city==="Karachi"){
    alert("Welcome to the city of lights")
}
//Task2
var g = prompt("Enter your gender","male");
if(g==="male"){
    alert("Good Morning Sir")
}
else if(g==="female"){
    alert("Good Morning Ma\'am")
}
else{
    alert("Ok")
}
//Task3
var red= prompt("Enter 1st subject","Must Stop");
var yellow= prompt("Enter 2nd subject","Ready to move");
var green= prompt("Enter 3rd subject","Move now");

document.write("<table style=\"text-align: center;\">\
<tr>\
    <th>Signal color</th>\
    <th>Message</th>\
</tr>\
<tr>\
    <td>Red</td>\
    <td>"+red+"</td>\
</tr>\
<tr>\
    <td>Yellow</td>\
    <td>"+yellow+"</td>\
</tr>\
<tr>\
    <td>Green</td>\
    <td>"+green+"</td>\
</tr>\
</table>")

//Task 4

var f= +prompt("Please enter your current feul","0.24");
if(f<.025){
    alert("Please refill the fuel in your car")
}

//Task 5

document.write("<br>a). given condition for variable a is true")
document.write("<br>b). The output is not displayed")

document.write("<br>c). condition 2 is true and condition 4 is true")
document.write("<br>d). The cost equals")
document.write("<br>True")
document.write("<br>The output is not displayed")
document.write("<br>car is smaller than cat")
//Task 6
var sub1= prompt("Enter 1st subject","English");
var sub2= prompt("Enter 2nd subject","Math");
var sub3= prompt("Enter 3rd subject","Urdu");

var t=100

var m1= +prompt("Enter Obtained Marts for "+ sub1,"54");
var m2= +prompt("Enter Obtained Marts for "+ sub2,"54");
var m3= +prompt("Enter Obtained Marts for "+ sub3,"48");

var o =m1+m2+m3;

document.write("<h1>Marks Sheet</h1>")
document.write("<br>Total Marks: "+(3*t))
document.write("<br>Marks Obtained: "+o)
document.write("<br>Percentage: "+o/300+"%")
var g;
var c;
if(o/300>=80){
    g="A-one"
    c="Excellent"
}
else if(o/300>=70){
    g="A"
    c="Good"
}

else if(o/300>=60){
    g="B"
    c="You need to improve"
}

else {
    g="Fail"
    c="Sorry"
}
document.write("<br>Grade: "+g)
document.write("<br>Remarks: "+c)
//Task 7
var sn=7;

var a=+prompt("Guess the secret number 1-10")
if(a===sn){
    alert("Bingo! Correct answer")
}
else if(a===(sn+1)){
    alert("Close enough to the correct answer")
}
//task 8 
var a=+prompt("Enter a number",5)
if(a%3===0){
    alert(a+" is divisible by 3")
}

//task 9 
var a=+prompt("Enter a number",5)
if(a%2===0){
    alert(a+" is even")
}
else {
    alert(a+" is odd")
}
//Task 10
var a=+prompt("Enter the temperature",25)
if(a>40){
    alert("It is too hot outside")
}
else if(a>30){
    alert("The Weather today is Normal")
}
else if(a>20){
    alert("Today’s Weather is cool")
}
else if(a>10){
    alert("OMG! Today’s weather is so Cool.")
}
//Task 11
var a=+prompt("Enter First Number",25)
var b=+prompt("Enter Second Number",5)
var c=prompt("Enter Operation(+,-,*,/,%)","+")

if(c=="+"){
    alert(a+b)
}
else if(c=="-"){
    alert(a-b)
}
else if(c=="*"){
    alert(a*b)
}
else if(c=="/"){
    alert(a/b)
}
else if(c=="%"){
    alert(a%b)
}
else{
    alert("Invalid Operation")
}
*/

//Assignment 8
//Task 1
/*
var c=prompt("Enter any character","A")

if(c>="0" && c<="9"){
    alert("Number")
}
else if(c>="A" && c<="Z"){
    alert("Upper case alphabet")
}
else if(c>="a" && c<="z"){
    alert("Lower case alphabet")
}
//Task 2

var a=+prompt("Enter First Number",25)
var b=+prompt("Enter Second Number",25)

if(a<b){
    alert(a+" is less than "+b)
}
else if(a>b){
    alert(a+" is greater than "+b)
}
else {
    alert(a+" is equal to "+b)
}

//Task 3
var a=+prompt("Enter a number",25)

if(a<0){
    alert(a+" is negative")
}
else if(a>0){
    alert(a+" is postive")
}
else {
    alert(a+" is equal to 0")
}
//Task 4
var c=prompt("Enter any character","A")

if(c=="a"|| c=="A" || 
    c=="e" || c=="E" ||
    c=="i" || c=="I" ||
    c=="o" || c=="O" ||
    c=="u" || c=="U" ){
    alert("It is a vowel")
}
else {
    alert("Not a vowel")
}
//Task 5

var pass="123"
var a=prompt("Password:")
if(a==Nan){
    alert("Please enter your password")
}
else if(a==pass){
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Incorrect password")
}
//Task 6

var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else {
greeting = "Good evening";
}
//task 7


var a=+prompt("Enter time",1500)

if(a>1200){
    alert((a/100-12)+"pm")
}
else{
    alert((a/100)+"am")
}

*/

var namesArr=[]
var arr = new Array();

var sArr=["abc","123"]
var nArr=[1,2,3]
var bArr=[true,true,false]
var mArr=["abc",2,true]

var qA=[ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
document.write("Qualifications:<br>")
for(var i = 0; i < qA.length; i++){
    document.write("<br>"+(i+1)+") "+qA[i])
}

var stuArr=["Ali","Ahsan","Adnan"]
var numArr=[230,350,459]
for(var i = 0; i < stuArr.length; i++){
    document.write("<br>Score of "+stuArr[i]+" is "+numArr[i]+". Percentage: "+(numArr[i]/5)+"%")
}


var col = ["red","green","blue"]
console.log(col)
col.unshift(prompt("Enter a color","black"))
console.log(col)
col.push(prompt("Enter a color","black"))
console.log(col)
col.unshift("brown","yellow")
console.log(col)
col.shift();
console.log(col)

var i=+prompt("At which index do you want to insert",3)
col.splice(i,0,prompt("Enter a color","black"))
console.log(col)
var beg=+prompt("which index do you want to delete",3)
var n=+prompt("how many colors do you want to delete",3)
col.splice(beg,n)
console.log(col)

var scores=[320,230,480,120]
scores.sort();
console.log(scores)

var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
var selectedCities=cities.slice(2,4)

console.log(selectedCities)

var sent=["This", "is" ,"my" ,"cat"]
sent.join(" ")
console.log(sent)
var arr =[]
arr.unshift(prompt("Enter device","Keyboard"))
arr.unshift(prompt("Enter device","Mouse"))
arr.unshift(prompt("Enter device","Printer"))
arr.unshift(prompt("Enter device","Mouse"))
alert(arr.pop())
alert(arr.pop())
alert(arr.pop())
alert(arr.pop())
var arr=[]
arr.push(prompt("Enter device","Keyboard"))
arr.push(prompt("Enter device","Mouse"))
arr.push(prompt("Enter device","Printer"))
arr.push(prompt("Enter device","Mouse"))
alert(arr.pop())
alert(arr.pop())
alert(arr.pop())
alert(arr.pop())

//Assignment 10

var a=[]
var mDA=[];
mDA.push([0,1,2,3])
mDA.push([1,0,1,2])
mDA.push([2,1,0,1])
console.log(mDA)
for(var i=1;i<=10;i++){
    document.write("<br>"+i)
}
var n= prompt("Enter a number for multiplication table");
var l= prompt("Enter length for multiplication table");
document.write("<br><br>Table of "+n+"<br>Length"+l)

for(var i=1;i<=l;i++){
    document.write("<br>"+n+"*"+i+"="+(n*i))
} 

var fruits = ["apple","banana","mango","orange","strawberry"]
for(var i=0;i<fruits.length;i++){
    document.write("<br>"+fruits[i])
}
for(var i=0;i<fruits.length;i++){
    document.write("<br>Element at index "+i+" is "+fruits[i])
}
document.write("<br>Counting")
for(var i=1;i<16;i++){
    document.write(i+", ")
}

document.write("<br>Reverse Counting")
for(var i=10;i<0;i--){
    document.write(i+", ")
}


document.write("<br>Even")
for(var i=0;i<20;i+=2){
    document.write(i+", ")
}

document.write("<br>Odd")
for(var i=1;i<20;i+=2){
    document.write(i+", ")
}

document.write("<br>Series")
for(var i=0;i<20;i++){
    document.write(i+"K, ")
}

var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var a = prompt("Welcome to Abc bakery what do you want to order?","cookie")
var found=false
var i=0;
for(i=0;i<A.length;i++){
    if(A[i]=="a"){
        found=true
        break;
    }
}
if(found){
    alert(A[i]+ " is at index "+i+" in our bakery")
}
else{
    alert("we are sorry "+a+" is not available in our bakery")
}

var A = [24, 53, 78, 91, 12];
var min=A[0]
for(var i =0;i<A.length;i++){
    if(i<min){
        min=A[i]
    }
}
alert("Minimum value is "+min)

var A = [24, 53, 78, 91, 12];
var max=A[0]
for(var i =0;i<A.length;i++){
    if(i<max){
        max=A[i]
    }
}
alert("maximum value is "+max)
document.write("<br>Multiples of 5 <br>")
for(var i=5;i<20;i+=2){
    document.write(i+", ")
}


