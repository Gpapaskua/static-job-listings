const filterBtn = document.querySelector(".filter-btn");
const filterBox = document.querySelector(".filter-box");
const filterItems = document.querySelectorAll(".item");
const skills = document.querySelectorAll(".skill");
const container = document.querySelector(".container")
const jobs = document.querySelectorAll(".job-item");
const techChoices = ['HTML', 'JavaScript', 'Ruby', 'Sass', 'React', 'Vue', 'Python'];

filterBtn.addEventListener("click", () => {
    if (filterBox.style.display === "" || filterBox.style.display === "none") {

        filterBox.style.display = "block";
    }
    else {
        filterBox.style.display = "none";
        jobs.forEach(job => container.appendChild(job));
    }
})


filterItems.forEach(item => item.addEventListener('click', () => {
    container.innerHTML = " ";
    filterItems.forEach(el => el.classList.remove("active"));
    item.classList.toggle('active');
    skills.forEach(skill => {
        if (techChoices.includes(skill.innerHTML) && skill.innerHTML === item.innerHTML) {
            let element = skill.parentElement.parentElement.parentElement;
            console.log(element)
            container.appendChild(element);
        }
    });

}));