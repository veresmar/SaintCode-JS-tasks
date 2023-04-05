const p = document.querySelector(".start")



const a = document.querySelectorAll(".new")

for (let item of a ){
    if (item.hasAttribute("hello")){
        item.attributes.hello.value = "123"
    } else {
        item.setAttribute("hello", "123")
    }

}
console.log(8888)

console.dir(first)