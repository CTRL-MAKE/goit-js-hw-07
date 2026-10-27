const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');


const handleInput = (event) => {
   
    const name = event.target.value.trim();
    
    nameOutput.textContent = name === "" ? "Anonymous": name;

}


nameInput.addEventListener('input', handleInput);