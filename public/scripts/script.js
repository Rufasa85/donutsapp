console.log("hello")
const donutList = document.querySelector("#donut-list")
const donutForm = document.querySelector("#donut-form");

fetch("/api/donuts").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
    data.forEach(donut=>{
        const donutLi = document.createElement("li");
        donutLi.textContent = `${donut.name} cost: ${donut.price}`
        donutList.append(donutLi);
    })
})

donutForm.addEventListener("submit",event=>{
    event.preventDefault();
    const newDonutObj = {
        id:document.querySelector("#donut-id").value,
        name:document.querySelector("#donut-name").value,
        price:document.querySelector("#donut-price").value,
    }
    console.log(newDonutObj)
    fetch("/api/donuts",{
        method:"POST",
        body:JSON.stringify(newDonutObj),
        headers:{
            "Content-Type":"application/json"
        } 
    }).then(res=>{
        return res.json()
    }).then(data=>{
        console.log(data);
        location.reload();
    })
})