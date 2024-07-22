let passwordInput = document.querySelector("input")
let eyeIcon = document.querySelector(".input-field i")
let listItem = document.querySelector(".list-item")
// console.log(listItem);

let requirementsList = document.querySelector(".requirment-list li i");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");

let arry = [one.className , two.className , three.className , four.className , five.className ]
// console.log(arry);




// console.log(requirementsList.className == "fa fa-check-circle");

let requirements = [
    { regex : /.{8}/},
    { regex : /[0-9]/},
    { regex : /[^A-Za-z0-9]/},
    { regex : /[a-z]/},
    { regex : /[A-Z]/}
]


passwordInput.addEventListener('keyup',() => {

    
    requirements.forEach((item,i) => {

        let isValid = item.regex.test(passwordInput.value);

        if(isValid){
             arry[i] = `fa fa-check`
             if(arry[0] == "fa fa-check"){
                one.className = `fa fa-check text-success fw-bolder fs-5`
             }
             if(arry[1] == "fa fa-check"){
                two.className = `fa fa-check text-success fw-bolder fs-5`
             }
             if(arry[2] == "fa fa-check"){
                three.className = `fa fa-check text-success fw-bolder fs-5`
             }
             if(arry[3] == "fa fa-check"){
                four.className = `fa fa-check text-success fw-bolder fs-5`
             }
             if(arry[4] == "fa fa-check"){
                five.className = `fa fa-check text-success fw-bolder fs-5`
             }
        }else{
            arry[i] = `fa-solid fa-circle`

        }

    })
    
})

     eyeIcon.addEventListener('click',()=>{
    
    passwordInput.type = passwordInput.type === "password" ? "text" :"password";
    eyeIcon.className = `fa fa-eye-slash ${passwordInput.type === "password" ? "" : "fa fa-eye"}`
    
    
           })


  let btn = document.getElementById("btn");

//   console.log(btn.className);
  
  btn.addEventListener('mouseover',function(){
    btn.className = `badge bg-success`
  })

  btn.addEventListener('mouseleave',function(){
    btn.className = `bg-info badge text-dark`
  })

  btn.addEventListener('click',()=>{
     if(one.className == `fa fa-check text-success fw-bolder fs-5` && two.className == `fa fa-check text-success fw-bolder fs-5` && three.className == `fa fa-check text-success fw-bolder fs-5` && four.className == `fa fa-check text-success fw-bolder fs-5` && five.className == `fa fa-check text-success fw-bolder fs-5`){

        alert('Done')
        location.reload();
     }else{
        alert('Enter valid password')
     }
  })