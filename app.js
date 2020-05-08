let filterBtn = document.querySelector(".filter-btn");
let filterBox = document.querySelector(".filter-box");
let filter = document.querySelectorAll(".item");
let skills = document.querySelectorAll(".skill");
let container = document.querySelector(".container")
let jobs = document.querySelectorAll(".job-item");

filterBtn.addEventListener("click", () => {
    if (filterBox.style.display === "" || filterBox.style.display === "none") {

        filterBox.style.display = "block";
    }
    else {
        filterBox.style.display = "none";
        jobs.forEach(job => container.appendChild(job));
    }
})


filter.forEach(coin => coin.addEventListener('click', () => {
    console.log("click")
    container.innerHTML = " ";
    filter.forEach(el => el.classList.remove("active"));
    let option = coin.innerHTML;
    coin.classList.toggle('active');
    switch (option) {
        case "HTML":
            skills.forEach(skill => {
                if (skill.innerHTML === "HTML") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
        case "JavaScript":
            console.log("JavaScript")
            skills.forEach(skill => {
                if (skill.innerHTML === "JavaScript") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
        case "Sass":
            console.log("Sass")
            skills.forEach(skill => {
                if (skill.innerHTML === "Sass") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
        case "Vue":
            console.log("Vue")
            skills.forEach(skill => {
                if (skill.innerHTML === "Vue") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
        case "React":
            skills.forEach(skill => {
                if (skill.innerHTML === "React") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
        case "Python":
            skills.forEach(skill => {
                if (skill.innerHTML === "Python") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
        case "Ruby":
            skills.forEach(skill => {
                if (skill.innerHTML === "Ruby") {
                    let element = skill.parentElement.parentElement.parentElement;
                    container.appendChild(element);
                }
            })
            break;
    }

}));