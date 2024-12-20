// Dynamic skills list
const skills = ["HTML", "CSS", "JavaScript", "Java", "C++", "Python", ];
const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsList.appendChild(li);
});

// Function for project button
function viewProject() {
    alert("This will open the project link! Add the link in the future.");
}