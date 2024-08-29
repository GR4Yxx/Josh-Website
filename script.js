const output = document.getElementById('output');
const input = document.getElementById('input');
const prompt = document.getElementById('prompt');

const commands = {
    help: 'Available commands: help, about, skills, experience, education, clear',
    about: 'My name is Joshua Dsouza. I am a Cloud Web Developer with a background in Angular2, PHP, Laravel, SQL, Flutter, Bash, Azure, and Azure DevOps.',
    skills: 'Full-stack development, Mobile app development, Cloud & DevOps, Game development, Strategic problem-solving, Leadership & Team management, Agile project management.',
    experience: 'Cloud Web Developer at Fourth Signal (Nov 2022 - Jul 2024).',
    education: 'Bachelors in Information Technology, St. Francis Institute of Technology, GPA: 3.33/4.0',
    clear: ''
};

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const userInput = input.value.trim();
        input.value = '';
        processInput(userInput);
    }
});

function processInput(userInput) {
    const command = commands[userInput];
    if (command !== undefined) {
        if (userInput === 'clear') {
            output.innerHTML = ''; // Clear the terminal output
        } else {
            output.innerHTML += `<div>${prompt.textContent} ${userInput}</div><div>${command}</div>`;
        }
    } else {
        output.innerHTML += `<div>${prompt.textContent} ${userInput}</div><div>Command not found. Type 'help' for a list of commands.</div>`;
    }
    output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
}
