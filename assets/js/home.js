let catreory = document.querySelectorAll('.category');
let main_description_date= document.querySelector('.description-date');
let main_description_categoty= document.querySelector('.description-category');
let main_description_input= document.querySelector('.description');
let todoCheck = document.querySelectorAll('.todo_list ');

// for filling the description_category background color
for (const item of catreory) {
    if (item.innerText == 'personal') {
        console.log("true");
        item.style.background = "#8282dc";
    } else if (item.innerText == 'work') {
        item.style.background = "rgb(220 130 130)"
    } else if (item.innerText == 'school') {
        item.style.background = "rgb(83 170 149)"
    } else if (item.innerText == 'cleaning') {
        item.style.background = "rgb(221 32 110 / 55%)"
    } else {
        item.style.background = "rgb(156 166 54)"
    }
}

// for making the text strikeout when checkbox event is trigered
for (let i of todoCheck) {

    i.addEventListener('click', function (e) {
        if (e.target.className == "checkset") {


            // console.log(typeof(e.target.className))
            let des_date_text = i.children[1];
            let des_mark = des_date_text.children[0];
            if (des_mark.style.textDecoration == "line-through") {
                des_mark.style.textDecoration = "none";
            } else {
                des_mark.style.textDecoration = "line-through";

            }
        }
    })
}


// on hover background color of input fields change
main_description_input.addEventListener('mouseover', function(){
    main_description_input.style.background="hsl(0, 0%, 90%)";
    main_description_input.children[1].style.background="hsl(0, 0%, 90%)";
})
main_description_input.addEventListener('mouseout', function(){
    main_description_input.style.background="white";
    main_description_input.children[1].style.background="white";
})

main_description_date.addEventListener('mouseover', function(){
        main_description_date.style.background="hsl(0, 0%, 90%)";
        main_description_date.children[1].style.background="hsl(0, 0%, 90%)";
})
main_description_date.addEventListener("mouseout", function(){
    main_description_date.style.background="white";
    main_description_date.children[1].style.background="white";
})
main_description_categoty.addEventListener('mouseover', function(){
    main_description_categoty.style.background="hsl(0, 0%, 90%)";
    main_description_categoty.children[1].style.background="hsl(0, 0%, 90%)";
})
main_description_categoty.addEventListener("mouseout", function(){
    main_description_categoty.style.background="white";
    main_description_categoty.children[1].style.background="white";
})
