// Detect Version 1 Tool - Haunted Halloween Edition
// Developer: Lowrenz Dev

// Live Search Filter for Tool Cards
function filterToolData(inputElement, listId) {
    const filterValue = inputElement.value.toLowerCase();
    const listContainer = document.getElementById(listId);
    const items = listContainer.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        let textValue = items[i].textContent || items[i].innerText;
        if (textValue.toLowerCase().indexOf(filterValue) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

// Copy Direct Download Link to Clipboard
function copyLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        showSpookyNotification("Link successfully copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy link: ', err);
    });
}

// Simulated Download Handler with Spooky Notification
function startDownload(fileName, toolName) {
    showSpookyNotification(`Summoning download for ${toolName}...`);
    
    setTimeout(() => {
        const dummyElement = document.createElement('a');
        dummyElement.href = '#';
        dummyElement.setAttribute('download', fileName);
        document.body.appendChild(dummyElement);
        document.body.removeChild(dummyElement);
        showSpookyNotification(`${toolName} successfully downloaded!`);
    }, 1500);
}

// Custom Spooky Toast Notification
function showSpookyNotification(message) {
    const existingToast = document.querySelector('.spooky-toast');
    if (existingToast) {
        existingToast.remove();
    }

    const toast = document.createElement('div');
    toast.className = 'spooky-toast';
    toast.innerHTML = `🦇 <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show-toast');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show-toast');
        setTimeout(() => toast.remove(), 400);
    }, 3500);
}

// Authentication Modal Controls (Fixed Sign In / Register switching)
function openAuthModal(mode) {
    const modal = document.getElementById('authModal');
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');

    if (mode === 'login') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }

    modal.style.display = 'flex';
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Password Eye Toggle
function togglePassword(fieldId, btnElement) {
    const passwordInput = document.getElementById(fieldId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        btnElement.style.color = '#ff4646';
    } else {
        passwordInput.type = 'password';
        btnElement.style.color = '#8a7aab';
    }
}

// Handle Form Submissions
function handleLogin(event) {
    event.preventDefault();
    closeAuthModal();
    showSpookyNotification("Welcome back to the coven, operative!");
}

function handleRegister(event) {
    event.preventDefault();
    closeAuthModal();
    showSpookyNotification("Coven membership registered successfully!");
}

function socialAuth(provider) {
    closeAuthModal();
    showSpookyNotification(`Connecting securely via ${provider}...`);
}

// Footer Modal Data & Controls
const footerData = {
    freeTools: {
        title: "Free Forensic Tools",
        body: "All tools included in Detect Version 1 are 100% free for community auditing, PC checking, and educational diagnostics. Built with precision and optimized for local Windows artifact inspection."
    },
    changelogs: {
        title: "Changelogs - Version 1.0.0",
        body: "&bull; Released Haunted Halloween Edition with atmospheric animations.<br>&bull; Added live filter search bars inside all 9 forensic utility cards.<br>&bull; Upgraded All-In-One bundle repository download links.<br>&bull; Enhanced secure password toggles and modal layouts."
    },
    privacy: {
        title: "Privacy Policy",
        body: "Detect Platform respects your privacy. All scans, searches, and forensic auditing tools operate strictly local on your machine. No telemetry data or system logs are ever transmitted externally."
    },
    tos: {
        title: "Terms of Service",
        body: "By downloading and utilizing Detect Version 1 tools, you agree to use them solely for authorized system diagnostics, personal device auditing, and legitimate community PC verification."
    }
};

function openFooterModal(type) {
    const modal = document.getElementById('footerModal');
    const titleElem = document.getElementById('footerModalTitle');
    const bodyElem = document.getElementById('footerModalBody');

    if (footerData[type]) {
        titleElem.innerHTML = footerData[type].title;
        bodyElem.innerHTML = footerData[type].body;
        modal.style.display = 'flex';
    }
}

function closeFooterModal() {
    document.getElementById('footerModal').style.display = 'none';
}

// Close Modals on Outside Click
window.onclick = function(event) {
    const authModal = document.getElementById('authModal');
    const footerModal = document.getElementById('footerModal');
    if (event.target === authModal) {
        closeAuthModal();
    }
    if (event.target === footerModal) {
        closeFooterModal();
    }
}
