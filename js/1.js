

function myFunction3(){
    var person = prompt("Please enter your name", "Harry Potter");
    s1="welcome ";
    var res=s1.concat(person);
    document.getElementById("demo").value=res;
}
function clickk(){
    var x=0;
    while(x<3){
        a=document.getElementById("c11").checked;
        if(a==true){
            x=x+1;
        }
        b=document.getElementById("c22").checked;
        if(b==true){
            x=x+1;
        }
        c=document.getElementById("c33").checked;
        if(c==true){
           x=x+1;
        }
        if(x<3){
            alert("you have selected: "+x+" box");
            break;
        }
    }
}
function clickkk(){
    location.replace("https://www.wikipedia.org/");
}


function kkeyPress(){
    
    var x=parseInt(myForm.nam1.value);
    if(x>=0&&x<=9){
        document.getElementById("nn").innerHTML = "Invalid Character!";
    }
}

function kkkeyPress(){
    
    var x=parseInt(myForm.email1.value);
    if(x>=0&&x<=9){
        document.getElementById("nnn").innerHTML = "Invalid Character!";
    }
}

function clickkkk(){
    var a=tr.search.value;
    var b=tr.s11.value;

    var c="https://en.wikipedia.org/wiki/";
    var cc="&rlz=1C1GCEU_enIN886IN886&oq=google+music&aqs=chrome.0.0j69i60l3j0l2.3494j0j7&sourceid=chrome&ie=UTF-8";
    var c1="https://www.google.co.in/search?q=google+";
    var c3="https://in.search.yahoo.com/search?p=";
    var c4="&fr=yfp-t&fp=1&toggle=1&cop=mss&ei=UTF-8";

    if(b=="google"){
        var d=c1.concat(a);
        var d=d.concat(cc);
        window.open(d);
    }
    else if(b=="yahoo"){
        var d=c3.concat(a);
        var d=d.concat(c4);
        window.open(d);
    }
    else{
        var d=c.concat(a);
        window.open(d);
    }
 
}


function validateForm1() {
    var x=document.getElementById("no1").value;
    var y=document.getElementById("no2").value;
    var z=document.getElementById("no3").value;
    var a=parseInt(x,10);
    var b=parseInt(y,10);
    var c=parseInt(z,10);
    var to=a+b+c;
    var per=(to/300)*100;
    document.getElementById("total").value=to;
    document.getElementById("percentage").value=per;  
    if(a>b&&a>c){
        document.getElementById("highestmarks").value=a;
    }
    else if(b>c&&b>a){
        document.getElementById("highestmarks").value=b;
    }
    else if(c>b&&c>a){
        document.getElementById("highestmarks").value=c;
    }
  }
function mouseOver(){
    alert("hiii");
}
function mouseOut(){
    alert("hello");
    
}
function keyPress(){
alert("for office use only ");
}
function load(){
 window.open("welcome.html","","height:200px;width:200px;");
}

function change(){
    var x=document.getElementById("s1").value;
    if(x=="volvo"){
        document.getElementById("ta1").value="adfj df jfkldjf d";
    }
    else if(x=="saab"){
        document.getElementById("ta1").value="vimal";
    }
    else if(x=="mercedes"){
        document.getElementById("ta1").value="adhikri";
    }
    else if(x=="audi"){
        document.getElementById("ta1").value="singh adhikri";
    }
}
function testResult(){
    var x=tr.r1.value;
    var y=tr.r2.value;
    if(x==""||y==""){
        alert("please fill the name");
        return false;
    }
    var z=0;
    

    if(x=="static"){
        z=z+2;

    }

    if(y=="daynamic1"){
        z=z+2;
    }

    alert("your score is= "+z);
}

