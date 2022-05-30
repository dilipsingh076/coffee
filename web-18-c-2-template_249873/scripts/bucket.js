// On clicking remove button the item should be removed from DOM as well as localstorage.

function datacoffee()
{
    var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
    append(coffee)
}
datacoffee()
function append(data) {
    var container = document.getElementById("bucket")
    container.innerHTML = null
    var total=0

    data.forEach(function (ele,index) {


        var div = document.createElement("div")
        var image = document.createElement("img")
        image.src = ele.image
        console.log(image)
        var p = document.createElement("p")
        p.innerText = ele.title
        console.log(p)
        var p1 = document.createElement("p")
        p1.innerText = ele.price
        console.log(p1)
        var button = document.createElement("button")
        button.innerText = "remove coffee"
        button.setAttribute("id","remove_coffee")
        button.addEventListener("click",function()
        {
            removecoffee(ele,index)
        })

         total=total+ele.price
        
        div.append(image, p, p1, button)
        container.append(div)
    })

    document.querySelector("#total_amount").innerText=total
}

function removecoffee(ele,index)
{
    event.preventDefault()
    var coffee=JSON.parse(localStorage.getItem("coffee"))||[]
    coffee.splice(index,1)
    localStorage.setItem("coffee",JSON.stringify(coffee))
    console.log(coffee)
    append(coffee)

}