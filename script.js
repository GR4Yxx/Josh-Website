const output = document.getElementById('output');
const input = document.getElementById('input');
const prompt = document.getElementById('prompt');

// Store the welcome message in a variable
const welcomeMessage = `
     _           _                   ____                           
    | | ___  ___| |__  _   _  __ _  |  _ \\ ___  ___  _   _ ______ _ 
 _  | |/ _ \\/ __| '_ \\| | | |/ _  | | | | / __|/ _ \\| | | |_  / _  |
| |_| | (_) \\__ \\ | | | |_| | (_| | | |_| \\__ \\ (_) | |_| |/ / (_| |
 \\___/ \\___/|___/_| |_|\\__,_|\\__,_| |____/|___/\\___/ \\__,_/___\\__,_|
                                                                   
Welcome to my interactive resume! Type 'help' to see available commands, or type 'simple-mode' for an easier view.
`;

// Display the welcome message on page load
output.innerHTML += `<div class="welcome">${welcomeMessage}</div>`;

const commands = {
    help: `<pre class="ascii-table">
+-------------------+--------------------------------------------------+
| Command           | Description                                      |
+-------------------+--------------------------------------------------+
| help              | List of available commands                      |
| about             | Information about me                            |
| skills            | List of my skills                               |
| experience        | My work experience                              |
| education         | My educational background                       |
| clear             | Clear the terminal screen                       |
+-------------------+--------------------------------------------------+
</pre>`,
    about: `<pre class="ascii-table">
+-------------------+--------------------------------------------------+
| About Me          | Joshua Dsouza                                    |
+-------------------+--------------------------------------------------+
| Background        | Cloud Web Developer                             |
| Technologies      | Angular2, PHP, Laravel, SQL, Flutter, Bash, Azure, Azure DevOps |
+-------------------+--------------------------------------------------+
</pre>`,
    skills: `<pre class="ascii-table">
+-------------------+--------------------------------------------------+
| Skills            | Description                                      |
+-------------------+--------------------------------------------------+
| Full-stack        | Development across both front-end and back-end  |
| Mobile app        | Development for mobile applications              |
| Cloud & DevOps    | Cloud services and DevOps practices             |
| Game development  | Design and development of games                  |
| Strategic problem | Solving complex problems efficiently            |
| Leadership        | Leading and managing teams                       |
| Agile project     | Management using agile methodologies             |
+-------------------+--------------------------------------------------+
</pre>`,
    experience: `<pre class="ascii-table">
+-------------------+--------------------------------------------------+
| Experience        | Details                                          |
+-------------------+--------------------------------------------------+
| Position          | Cloud Web Developer                             |
| Company           | Fourth Signal                                   |
| Duration          | Nov 2022 - Jul 2024                             |
+-------------------+--------------------------------------------------+
</pre>`,
    education: `<pre class="ascii-table">
+-------------------+--------------------------------------------------+
| Education         | Details                                          |
+-------------------+--------------------------------------------------+
| Degree            | Bachelors in Information Technology             |
| Institution       | St. Francis Institute of Technology              |
| GPA               | 3.33/4.0                                        |
+-------------------+--------------------------------------------------+
</pre>`,
    'simple-mode': () => window.location.href = 'simple-mode.html', 
    clear: () => {
        output.innerHTML = ''; // Clear the terminal output
    }
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
        if (typeof command === 'function') {
            command(); // Execute the command if it's a function
        } else {
            output.innerHTML += `<div>${prompt.textContent} ${userInput}</div><div class="command-output">${command}</div>`;
        }
    } else {
        output.innerHTML += `<div>${prompt.textContent} ${userInput}</div><div class="command-output">Command not found. Type 'help' for a list of commands.</div>`;
    }
    output.scrollTop = output.scrollHeight; // Auto-scroll to bottom
}

// Focus input when clicking anywhere on the screen
document.addEventListener('click', () => {
    input.focus();
});
