
const form = document.getElementById('form')
const formButton = document.getElementById('form__button')
const user = document.getElementById('user')
const clearBtn = document.getElementById('clear__button')



// form input
form["form__input"].addEventListener("input", () => {
    const text = form["form__input"].value.toLowerCase()
    const user_name = document.querySelectorAll(".user__name")
    // search
    user_name.forEach((item) => {
        if (item.lastElementChild.textContent.toLowerCase().includes(text)) {
            item.parentElement.classList.remove("hidden")
        } else {
            item.parentElement.classList.add("hidden")

        }

    });

})


// form
formButton.addEventListener("click", (e) => {
    e.preventDefault()
    reset()
})
// clear
clearBtn.addEventListener("click", (e) => {
    e.preventDefault()
    user.innerHTML = ''
})


function upData(data) {
    user.innerHTML = ""
    data.forEach((item) => {
        const { dob, gender, picture, name, location } = item
        user.innerHTML += `<li class="user__item">
<button id="delete__btn" class="user__delete--btn">
    <i class="fas fa-trash"></i>
</button>
<img class="user__img" alt="User photo" src=${picture.large} width="100"
    height="100" />
<div class="user__name">
    <span class="material-symbols-outlined">badge</span>
    <span>- ${name.title} ${name.first} ${name.last}</span>
</div>
<div class="user__year">
    <span class="material-symbols-outlined">cake</span>
    <span>- ${dob.age} years old.</span>
</div>
<div class="user__location">
    <span class="material-symbols-outlined">person_pin_circle</span>
    <span>${location.city}, ${location.country}</span>
</div>
<div class="user__gender">
    <span class="material-symbols-outlined">man</span>
    <span>- ${gender}</span>
</div>
</li>`

    });
}





document.addEventListener("click", (e) => {
    if (e.target.classList[0] === "user__delete--btn") {
        e.target.parentElement.remove();
    }

})