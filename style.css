/* Detect Version 1 Tool - Haunted Halloween New */
/* Developer: Lowrenz Dev */

// Function to filter tool data dynamically inside each card search bar
function filterToolData(inputElement, resultsListId) {
    let filterValue = inputElement.value.toLowerCase();
    let resultsList = document.getElementById(resultsListId);
    let items = resultsList.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let textValue = items[i].textContent || items[i].innerText;
        if (textValue.toLowerCase().indexOf(filterValue) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Function to handle simulated file downloads and show spooky notification
function startDownload(fileName) {
    showSpookyToast(`Successfully initiated download for: ${fileName}`);
}

// Function to copy direct links to clipboard
function copyLink(linkText) {
    navigator.clipboard.writeText(linkText).then(() => {
        showSpookyToast("Link copied to clipboard successfully!");
    }).catch(err => {
        console.error('Failed to copy link: ', err);
    });
}

// Authentication Modal Control Functions
function openAuthModal(mode) {
    let modal = document.getElementById('authModal');
    let loginContainer = document.getElementById('loginFormContainer');
    let registerContainer = document.getElementById('registerFormContainer');

    modal.style.display = 'flex';

    if (mode === 'login') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else if (mode === 'register') {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }
}

function closeAuthModal() {
    let modal = document.getElementById('authModal');
    modal.style.display = 'none';
}

// Toggle Password Visibility Function
function togglePassword(fieldId, buttonElement) {
    let passwordInput = document.getElementById(fieldId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        buttonElement.style.color = '#ff4646';
    } else {
        passwordInput.type = 'password';
        buttonElement.style.color = '#8a7aab';
    }
}

// Footer Info Modal Functions
function openFooterModal(type) {
    let modal = document.getElementById('footerModal');
    let titleElement = document.getElementById('footerModalTitle');
    let bodyElement = document.getElementById('footerModalBody');

    modal.style.display = 'flex';

    if (type === 'freeTools') {
        titleElement.textContent = 'Free Forensic Tools Policy';
        bodyElement.textContent = 'All utility modules provided within Detect Version 1 are completely free for local system auditing, diagnostic checks, and educational research purposes.';
    } else if (type === 'changelogs') {
        titleElement.textContent = 'System Changelogs - v1.0.0';
        bodyElement.textContent = '- Released Haunted Halloween Edition UI.\n- Integrated 9 targeted forensic analysis modules.\n- Added real-time log search filtering and instant bundle downloads.';
    } else if (type === 'privacy') {
        titleElement.textContent = 'Privacy Policy';
        bodyElement.textContent = 'Detect operates strictly on a local client-side execution model. No telemetry data, system logs, or personal artifacts are ever transmitted or stored externally.';
    } else if (type === 'tos') {
        titleElement.textContent = 'Terms of Service';
        bodyElement.textContent = 'By utilizing Detect Version 1 utilities, you agree to use these diagnostic modules exclusively on authorized machines and personal hardware environments.';
    }
}

function closeFooterModal() {
    let modal = document.getElementById('footerModal');
    modal.style.display = 'none';
}

// Simulated Form Handling
function handleLogin(event) {
    event.preventDefault();
    closeAuthModal();
    showSpookyToast("Welcome back to the coven, Checker!");
}

function handleRegister(event) {
    event.preventDefault();
    closeAuthModal();
    showSpookyToast("Coven membership registered successfully!");
}

// Social Authentication Handler
function socialAuth(provider) {
    closeAuthModal();
    showSpookyToast(`Authenticating securely via ${provider}...`);
}

// Spooky Toast Notification System
function showSpookyToast(message) {
    let existingToast = document.querySelector('.spooky-toast');
    if (existingToast) {
        existingToast.remove();
    }

    let toast = document.createElement('div');
    toast.className = 'spooky-toast';
    toast.innerHTML = `<span>🎃</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show-toast');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show-toast');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}

// Close modals when clicking outside content area
window.onclick = function(event) {
    let authModal = document.getElementById('authModal');
    let footerModal = document.getElementById('footerModal');
    if (event.target === authModal) {
        closeAuthModal();
    }
    if (event.target === footerModal) {
        closeFooterModal();
    }
}
