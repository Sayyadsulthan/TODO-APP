let catreory = document.querySelectorAll('.category');

for (const item of catreory) {
    if(item.innerText=='personal'){
        console.log("true");
        item.style.background="#8282dc";
    }else if(item.innerText=='work'){
        item.style.background="rgb(220 130 130)"
    }else if(item.innerText=='school'){
        item.style.background="rgb(83 170 149)"
    }else if(item.innerText=='cleaning'){
        item.style.background="rgb(221 32 110 / 55%)"
    }else{
        item.style.background="rgb(156 166 54)"
    }
}
