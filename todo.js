let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let input=document.querySelector("input");


btn.addEventListener("click",function(){
    // console.log("clicked!");
    // console.log(input.value);

    let item=document.createElement("li"); //create li
    item.innerText=input.value; //set innerText


        let dbtn=document.createElement("button"); //create del btn
    dbtn.innerText="delete"; //set innerText
    dbtn.classList.add("delete");



item.appendChild(dbtn);
    ul.appendChild(item); //paste

    input.value="";
});

let dbtn=document.querySelectorAll(".delete");
for(db of dbtn){
    db.addEventListener("click",function(){
        // console.log("deletedddddddddd");

        let par=this.parentElement;
        console.log(par);
        par.remove();
    })
}

