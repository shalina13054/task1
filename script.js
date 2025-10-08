document.addEventListener('DOMContentLoaded', () => {
    // --- For index.html (Letter Builder Page) ---
    const recipientNameInput = document.getElementById('recipientName');
    const mainMessageTextarea = document.getElementById('mainMessage');
    const charCounter = document.getElementById('charCounter');
    const previewButton = document.getElementById('previewButton');

    if (mainMessageTextarea && charCounter) {
        mainMessageTextarea.addEventListener('input', () => {
            charCounter.textContent = mainMessageTextarea.value.length;
        });
    }

    if (previewButton) {
        previewButton.addEventListener('click', () => {
            const recipient = recipientNameInput ? recipientNameInput.value.trim() : 'My Dearest';
            const message = mainMessageTextarea ? mainMessageTextarea.value.trim() : 'Thank you for being in my life. Every moment with you is a cherished memory, and I look forward to many more. With all my love.';
            
            // Store data in localStorage (a simple way to pass data between pages)
            localStorage.setItem('loveLetterRecipient', recipient);
            localStorage.setItem('loveLetterMessage', message);
            
            // Navigate to the preview page
            window.location.href = 'preview.html';
        });
    }

    // --- For preview.html (Letter Preview Page) ---
    const displayRecipient = document.getElementById('displayRecipient');
    const displayMessage = document.getElementById('displayMessage');
    const finalizeButton = document.getElementById('finalizeButton');

    if (displayRecipient && displayMessage) {
        // Retrieve data from localStorage
        const storedRecipient = localStorage.getItem('loveLetterRecipient') || 'My Dearest Love';
        const storedMessage = localStorage.getItem('loveLetterMessage') || 'Thank you for being in my life. Every moment with you is a cherished memory, and I look forward to many more. With all my love.';
        
        displayRecipient.textContent = storedRecipient;
        displayMessage.textContent = storedMessage;
    }

    if (finalizeButton) {
        finalizeButton.addEventListener('click', () => {
            // This button will eventually trigger our GA4 event via GTM
            // For now, it just navigates to the thank you page
            window.location.href = 'thankyou.html';
        });
    }

    // You can add more interactive elements here as you learn JS!
});
