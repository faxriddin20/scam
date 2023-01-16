const form = document.querySelector("#form");

form.addEventListener("submit", function(evt) {
    evt.preventDefault()
    examples.forEach((ex) => {
        document.body.style.backgroundColor = "lightgreen" 
        document.body.innerHTML += `<h1 class="text-succes display-1 text-center">uxladin pullarin endi maniki :)</h1>`
            const ism = evt.target[0].value
            let confirmation = confirm(`${ism} ${ex.scam}`)
            setTimeout(() => {
                document.body.innerHTML += `<h1 class="text-succes display-1 text-center">Bu albatta hazil! :)</h1>`
            },2500)
    });
})