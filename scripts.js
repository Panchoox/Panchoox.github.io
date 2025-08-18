function caption() {
    const inputValue = document.getElementById('captionInput').value;
            
    if (inputValue.trim() !== '') {
        document.getElementById('textDescription').textContent = inputValue.trim();
        document.getElementById('captionInput').value = '';
    }
}

document.getElementById('captionInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        caption();
    }
});