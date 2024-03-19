let toTop = document.getElementById("ClicktoTop");
let toTop2 = document.querySelector(".imgLogo")
toTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
toTop2.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function DisplayingSignInBox()
{

    let MoreInSignIn = document.querySelector(".nav_signin");
    let DisplayBox = document.querySelector(".SignInBox");
    
    MoreInSignIn.addEventListener("mouseenter", () => {
        DisplayBox.style.display = "flex"
    });
    
    MoreInSignIn.addEventListener("mouseleave",()=>{
        DisplayBox.style.display = "none" 
        
    })
    DisplayBox.addEventListener("mouseenter", () => {
        DisplayBox.style.display = "flex" 
    });
    DisplayBox.addEventListener("mouseleave", () => {
        DisplayBox.style.display = "none" 
    });
}
DisplayingSignInBox()

// let searchInput = document.querySelector(".input_search input");
// let searchSelect = document.querySelector("#search_select");
// let searchIcon = document.querySelector("#magnifying");

// function changeBg() {
//     searchInput.addEventListener("click", () => {
//         searchSelect.style.backgroundColor = "#DDDADA"
//         searchInput.style.backgroundColor = "#FFFFFF"
//         searchIcon.style.backgroundColor = "#FFA200"
//         document.body.classList.add("dullBackground")
//     })
//     searchInput.addEventListener("blurr", () => {
//         searchSelect.style.backgroundColor = " "
//         searchInput.style.backgroundColor = " "
//         searchIcon.style.backgroundColor = " "
//         document.body.classList.remove("dullBackground")
//     })

//     window.addEventListener("scroll", () => {
//         if (window.pageYOffset > 100) {
//             body.style.backgroundColor = "none"
//         }
//     })

// }

// changeBg()

