window.onload = () => {
    //2.1
    let div = document.createElement("div")
    document.body.append(div)

    //2.2
    let newDiv = document.createElement("div")
    let p = document.createElement("p")
    newDiv.appendChild(p)
    document.body.append(newDiv)

    //2.3
    let otherDiv = document.createElement("div")

    //2.4
    let dinamicP = document.createElement("p")
    dinamicP.innerText = 'Soy dinámico!'
    document.body.append(dinamicP)

    //2.5
    let h2 = document.querySelector("h2.fn-insert-here")
    h2.innerHTML = 'Wubba Lubba dub dub'

    //2.6
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
    let ul =  document.createElement("ul")
    apps.forEach((item) => {
        let li = document.createElement("li")
        li.innerHTML = item
        ul.appendChild(li)
    })
    document.body.append(ul)

    //2.7
    let borrados = document.querySelectorAll(".fn-remove-me")
    for (var i = 0; i < borrados.length; i++) {
        borrados[i].remove()
    }

    //2.8
    let newP = document.createElement("p")
    newP.innerText = 'Voy en medio!'
    let firstDiv = document.querySelectorAll("div")[1]
    document.body.insertBefore(newP, firstDiv)

    //2.9
    let divClass = document.querySelectorAll("div.fn-insert-here")
    divClass.forEach((item) => {
        let otherP = document.createElement("p")
        otherP.innerText = 'Voy dentro!'
        item.appendChild(otherP)
    })    
}

