var a=3,b=5;
document.write("Sum of "+a+" and "+b +" is "+(a+b))
document.write("<br>Difference of "+a+" and "+b +" is "+(a-b))
document.write("<br>Product of "+a+" and "+b +" is "+(a*b))
document.write("<br>Division of "+a+" with "+b +" is "+(a/b))
document.write("<br>Remainder of "+a+" after dividing by "+b +" is "+(a%b))


var v;
document.write("<br><br>"+v)
v=5
document.write("<br>Initial value is: "+v)
v++;
document.write("<br>Value after Increment:"+v)
v+=7;
document.write("<br>Value after adding 7:"+v)
v--;
document.write("<br>Value after decrement:"+v)
v=v%3;
document.write("<br>Remainder after dividing by 3:"+v)

var cost = 600
document.write("<br>Cost of buying 5 tickets is:"+(cost*5)+"PKR")
var n= 4;
document.write("<br><br>Table of "+n)

for(var i=1;i<=10;i++){
    document.write("<br>"+n+"*"+i+"="+(n*i))
}
var c=25;
var f=70
document.write("<br><br> "+c+"<sup>o</sup>C is "+(c*9/5+32)+"<sup>o</sup>F")
document.write("<br> "+f+"<sup>o</sup>F is "+((f-32)*5/9)+"<sup>o</sup>C")



var p1=650
var q1=3
var p2=100
var q2=7
var sC=100
document.write("<br><br> Price of Item1 is "+p1)
document.write("<br> Quantity of Item1 is "+q1)
document.write("<br> Price of Item2 is "+p2)
document.write("<br> Quantity of Item2 is "+q2)


document.write("<br> Shipping charges are "+sC)

var tc= p1*q1+p2*q2+sC
document.write("<br> Total cost of your order is "+tc)

var tM=980
var oM=804
var per=oM/tM*100

document.write("<br><br><h1>Marks Sheet</h1>\
<p>Total marks: "+tM+"\
<br>Obtained marks: "+oM+"\
<br>Percentage: "+per+"%</p>")

var dollars=10
var riyal=25
var rupee=dollars*104.80 +riyal*28
document.write("<br><br><h1>Currency in PKR</h1>\
<p>Total Currency in PKR: "+rupee+"</p>")

var x=5
var y=(x+5)*10/2

document.write("<br><br>"+x+"----:"+y)
