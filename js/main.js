const form = document.querySelector("#form");

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    examples.forEach((ex) => {
        const ism = evt.target[0].value
        const familiya = evt.target[1].value
        const yosh = evt.target[2].value
        const location = evt.target[3].value
        const loader = "../loader/loader.gif"
        let confirmation = confirm(`${ism} cookie fayllaringizni ishlatishga ruxsat berasizmi`);
        setTimeout(() => {
            document.body.style.opacity = "30%";
            form.innerHTML += `<div class="d-flex justify-content-center align-items-center spin">
            <div class="spinner-border text-success spinner" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            </div>`
            document.querySelector(".btn").classList.toggle("d-none");
        }, 500)
        setTimeout(() => {
            document.body.style.opacity = "100%";
            document.body.querySelector(".spin").classList.add("d-none");

        }, 1700)
        setTimeout(() => {
            const res = document.querySelector(".result");
            res.innerHTML = ""
            res.innerHTML += `<h2 class="text-success text-center">Ismi: ${ism}</h2>`
        }, 2000)
        setTimeout(() => {
            const res = document.querySelector(".result");
            res.innerHTML += `<h2 class="text-success text-center">Familiyasi:${familiya}</h2>`
        }, 3000)
        setTimeout(() => {
            const res = document.querySelector(".result");
            res.innerHTML += `<h2 class="text-success text-center">Yoshi: ${yosh}</h2>`
        }, 4000);
        setTimeout(() => {
            const res = document.querySelector(".result");
            res.innerHTML += `<h3 class="text-success text-center">Yashash joyi: ${location}</h3>`
        }, 5000)
        setTimeout(() => {
            const res = document.querySelector(".result");
            res.innerHTML += `<div class="d-flex align-items-center text-center justify-content-center gap-3 pay">
                <h3 class="text-success">Karta raqamini aniqlash</h3>
                <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>`
        }, 6000)
        setTimeout(() => {
            document.querySelector(".pay").classList.toggle("d-none")
            const res = document.querySelector(".result");
            res.innerHTML += `<p class="text-center text-success">KARTA RAQAMI **** **** **** ****</p>`
        }, 8000)
        setTimeout(() => {
            const res = document.querySelector(".result");
            res.innerHTML += `<div class="d-flex align-items-center justify-content-center text-primary gap-3">
                <h3>Pull Yechilmoqda</h3>
                <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
            </div>`
        }, 9000)
        setTimeout(() => {
            let consirmation = confirm("TABRIKLAYMAN ENDI SIZNI QURULMANGIZ DDOS XUJUMLAR UCHUN ISHLATILADI")
            let confirmation = confirm("QURULMANGIZGA O'TQAZILGAN JAMI VIRUSLAR SONI 50")
            let con = confirm("SOG' BO'LASIZ!")
            let confirmatio = confirm("albatt bu hazil!")
        },11000)
    });
})
const res = document.querySelector(".res");
res.onclick = () => {
    location.reload()
}

