// Add the coffee to local storage with key "coffee"




let url = `https://masai-mock-api.herokuapp.com/coffee/menu`
// console.log(url)

fetch(url).then(function(res){
    return res.json()
})
.then(function(res){
    let coffee = res.menu.data;
    localStorage.setItem("coffee",JSON.stringify(coffee))
    displaycoffee(res.menu.data);
})
.catch(function(err){
    console.log(err)
})


let coffee = JSON.parse(localStorage.getItem('coffee'))
let item = []



function displaycoffee(data){
    
data.forEach(el => {
    let menu = document.getElementById("menu");
   

    let div = document.createElement("div");
    div.setAttribute("id","container")
     let img = document.createElement("img");
    img.setAttribute("id","img");
    img.src = el.image;

    let h3 = document.createElement("h3");
    h3.setAttribute("id","type");
    h3.innerText = `coffee type: ${el.title}`

    let p = document.createElement("p");
    p.setAttribute("id","price");
    p.innerText = `price: ${el.price}`;

    let button = document.createElement("button");
    button.setAttribute("id","addtobucket");
    button.innerText = "Add to bucket"

    button.addEventListener("click",function(){
        console.log("click")
        addtobucket(el)

    })
  div.append(img,h3,p,button);
  menu.append(div)
  
    
});



function addtobucket(el)
{
    var bucket=JSON.parse(localStorage.getItem("coffee"))||[]
    bucket.push(el)
    console.log(bucket)
    localStorage.setItem("coffee",JSON.stringify(bucket))
    
}




}