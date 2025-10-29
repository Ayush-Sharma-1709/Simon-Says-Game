let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
  let li = document.createElement("li");
  li.innerText = inp.value;
  inp.value = "";

  let delBtn = document.createElement("button");
  delBtn.classList.add("del");
  delBtn.innerText = "delete";

  li.appendChild(delBtn);
  ul.appendChild(li);
});


ul.addEventListener("click" , function(event) {

    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement; 
        listItem.remove();
        console.log("deleted");
    }
})

// let delbtns = document.querySelectorAll(".del");

// for(delbtn of delbtns) {
//     delbtn.addEventListener("click" , function() {

//         console.log("dle")
//     });
// }