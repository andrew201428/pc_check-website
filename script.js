function openAuthModal(type) {
    const modal = document.getElementById('authModal');
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');

    modal.style.display = 'flex';
    if (type === 'login') {
        loginContainer.style.display = 'block';
        registerContainer.style.display = 'none';
    } else {
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    }
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

function togglePassword(fieldId, iconElement) {
    const passwordInput = document.getElementById(fieldId);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        iconElement.textContent = 'Hide';
    } else {
        passwordInput.type = 'password';
        iconElement.textContent = 'Show';
    }
}

function handleLogin(event) {
    event.preventDefault();
    alert("Successfully logged in!");
    closeAuthModal();
}

function handleRegister(event) {
    event.preventDefault();
    const pass = document.getElementById('registerPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (pass !== confirmPass) {
        alert("Passwords do not match! Please check again.");
        return;
    }

    alert("Account successfully created!");
    closeAuthModal();
}

function copyLink(urlText) {
    navigator.clipboard.writeText(urlText);
    alert("Tool link copied to clipboard successfully!");
}

/* Footer Modal handler for Changelogs, Privacy Policy, TOS, and Free Tools */
function openFooterModal(type) {
    const modal = document.getElementById('footerModal');
    const title = document.getElementById('footerModalTitle');
    const body = document.getElementById('footerModalBody');

    modal.style.display = 'flex';

    if (type === 'freeTools') {
        title.textContent = "Free Tools Overview";
        body.innerHTML = "Detect Version 1 Tool provides a curated suite of 9 next-gen forensic utilities built for professional PC checkers, system diagnostics, and artifact analysis. All tools are completely free to download and use.";
    } else if (type === 'changelogs') {
        title.textContent = "System Changelogs";
        body.innerHTML = "<strong>v1.0.5 Release (Current):</strong><br>- Added USB & Registry Persistence Hunter.<br>- Integrated live GUI search filters across all individual tool cards.<br>- Upgraded dashboard grid system into a streamlined 3-column layout.<br>- Refined overall security audits and performance metrics.";
    } else if (type === 'privacy') {
        title.textContent = "Privacy Policy";
        body.innerHTML = "We respect your digital privacy. Detect Version 1 Tool operates locally on your machine for diagnostic scans. We do not collect, store, or transmit personal data, execution logs, or system artifacts to external third-party servers.";
    } else if (type === 'tos') {
        title.textContent = "Terms of Service (TOS)";
        body.innerHTML = "By downloading and utilizing the software and utilities provided by Detect Version 1 Tool, you agree to use them solely for legitimate system diagnostics, personal security audits, and authorized PC verification purposes.";
    }
}

function closeFooterModal() {
    document.getElementById('footerModal').style.display = 'none';
}

/* Live filtering function for individual tool GUI search bars */
function filterToolData(inputElement, listId) {
    const filterValue = inputElement.value.toLowerCase();
    const listContainer = document.getElementById(listId);
    const items = listContainer.getElementsByClassName('search-item');

    for (let i = 0; i < items.length; i++) {
        const itemText = items[i].textContent || items[i].innerText;
        if (itemText.toLowerCase().indexOf(filterValue) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

/* Direct Download Handler */
function startDownload(fileUrl, toolName) {
    const downloadLink = document.createElement('a');
    downloadLink.href = fileUrl;
    downloadLink.download = toolName + '.exe';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
