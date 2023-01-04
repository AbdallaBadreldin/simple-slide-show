// function sum(x,y){
//     if(arguments.length!==2){
//         throw("aruments should be 2");
//     }
//     else if(typeof x !=="number" && typeof y !== "number"){
//         throw("type of arguments should be numbers");
//     }

// //    console.log(arguments);
//     return x+y;

// }
// var res = sum(5,6);
// var func = function(){
//     console.log("hello");
// }
// func();
// // var x = new Function({

// // })
// // throw("error")
// // console.log(res);

// function test(){
//     x = "hello";
//     console.log(x);
// }

// //test();
// console.log(x);

///hoisting
// var x; var test;

// console.log(x);
// let x = 10;
// console.log(test);
// var test = function(){
//     console.log("hello");
// }
// test();
// var html = document.children[0];
var imageCounter=1;
var image = document.getElementsByTagName("img")[0];
var c = setInterval(function(){
    if (imageCounter===1){
    image.setAttribute("src","2.jpg");
imageCounter=2;
}
 else if (imageCounter===2){
    image.setAttribute("src","3.jpg");
 
    imageCounter=3;}
 else if (imageCounter===3){
    image.setAttribute("src","4.jpg");
    imageCounter=4; 
}
 else if (imageCounter===4){
    image.setAttribute("src","5.jpg");
    imageCounter=5; 
}
 else if (imageCounter===5){
    image.setAttribute("src","6.jpg");
    imageCounter=6; 
}

 else if (imageCounter===6){
    image.setAttribute("src","1.jpg");
    imageCounter=1; 
}

},2000)

function start(){
    c = setInterval(function(){
        if (imageCounter===1){
        image.setAttribute("src","2.jpg");
    imageCounter=2;
    }
     else if (imageCounter===2){
        image.setAttribute("src","3.jpg");
     
        imageCounter=3;}
     else if (imageCounter===3){
        image.setAttribute("src","4.jpg");
        imageCounter=4; 
    }
     else if (imageCounter===4){
        image.setAttribute("src","5.jpg");
        imageCounter=5; 
    }
     else if (imageCounter===5){
        image.setAttribute("src","6.jpg");
        imageCounter=6; 
    }
    
     else if (imageCounter===6){
        image.setAttribute("src","1.jpg");
        imageCounter=1; 
    }
    
    },2000)
    
}

 function stop(){
     clearInterval(c);

    }
 function next(){
    if(imageCounter===6){
        imageCounter=1;
    }
    else{imageCounter++;}
    if (imageCounter===1){
        image.setAttribute("src","1.jpg");
    }
     else if (imageCounter===2){
        image.setAttribute("src","2.jpg");
     }
     else if (imageCounter===3){
        image.setAttribute("src","3.jpg"); 
    }
     else if (imageCounter===4){
        image.setAttribute("src","4.jpg"); 
    }
     else if (imageCounter===5){
        image.setAttribute("src","5.jpg");
    }
    
     else if (imageCounter===6){
        image.setAttribute("src","6.jpg");
      }
 }

 function previous(){    if(imageCounter===1){
    imageCounter=6;
}
else{imageCounter--;}
if (imageCounter===1){
    image.setAttribute("src","1.jpg");
}
 else if (imageCounter===2){
    image.setAttribute("src","2.jpg");
 }
 else if (imageCounter===3){
    image.setAttribute("src","3.jpg"); 
}
 else if (imageCounter===4){
    image.setAttribute("src","4.jpg"); 
}
 else if (imageCounter===5){
    image.setAttribute("src","5.jpg");
}

 else if (imageCounter===6){
    image.setAttribute("src","6.jpg");
  }
}




function test(e){
    console.log(e);
    var div = document.createElement("div");
    div.innerHTML = "<span>hello</span>";
    console.log(div);
    
    //append
    document.getElementsByClassName("hamada")[0].append(div);
    document.body.append(div.cloneNode(true));

}

function validtion(){
    var inp = document.getElementsByTagName("input")[0];
    var span = document.querySelector("span");
   // console.log(inp.value);
    if(inp.value === ""){
        span.style.display = "inline";
        span.textContent = "*"
        inp.value = "";
    }
   else if(isFinite(inp.value)){
       span.style.display = "inline";
       span.textContent = "you must enter string"
       inp.value = "";

   }
   else{
       var tbody = document.querySelector("tbody");
       var ageinp= document.getElementsByTagName("input")[1];
       var tr = document.createElement("tr");
       tr.innerHTML =  `<td> ${inp.value}</td><td> ${ageinp.value}</td>`
       tbody.append(tr);
       tbody.parentElement.style.display = "table";
       ageinp.value = "";
    //    var div = document.getElementById("mydiv");
      
    //    div.textContent = "hello " + inp.value;
    // span.style.display = "none";
    inp.value = "";
       //console.log("ok");
   }

}