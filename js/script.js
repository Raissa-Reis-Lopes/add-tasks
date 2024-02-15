const button = document.querySelector("#add")

button.addEventListener("click", function (){
    let ul = document.getElementById("ul")
    let input = document.getElementById("input").value
    let texto = input.toLowerCase()

    const li = document.createElement("li")
    li.textContent = texto
    document.getElementById("ul").appendChild(li)

    document.getElementById("input").value = '' 
})