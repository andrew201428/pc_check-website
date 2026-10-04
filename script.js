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
    alert("Successfully logged into the haunted system!");
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

    alert("Account successfully created and blessed with dark magic!");
    closeAuthModal();
}

function socialAuth(providerName) {
    alert(`Connecting securely with ${providerName} account... 🎃`);
    closeAuthModal();
}

function copyLink(urlText) {
    navigator.clipboard.writeText(urlText);
    alert("Spooky tool link copied to clipboard successfully!");
}

/* Footer Modal handler for Changelogs, Privacy Policy, TOS, and Free Tools */
function openFooterModal(type) {
    const modal = document.getElementById('footerModal');
    const title = document.getElementById('footerModalTitle');
    const body = document.getElementById('footerModalBody');

    modal.style.display = 'flex';

    if (type === 'freeTools') {
        title.textContent = "Free Tools Overview (Halloween Edition)";
        body.innerHTML = "Detect Version 1 Tool provides a curated suite of 9 next-gen forensic utilities built for professional PC checkers, system diagnostics, and artifact analysis. Enhanced with Halloween elements, all tools are completely free to download and use.";
    } else if (type === 'changelogs') {
        title.textContent = "System Changelogs";
        body.innerHTML = "<strong>v1.0.6 Halloween Release (Current):</strong><br>- Infused full website with spooky Halloween designs and eerie glowing accents.<br>- Integrated official Google and GitHub social connect buttons with true vector logos.<br>- Added USB & Registry Persistence Hunter.<br>- Upgraded dashboard grid system into a streamlined 3-column layout.";
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

/* Dynamic Download Handler for each tool */
function startDownload(fileName, toolDisplayName) {
    const baseUrl = "https://github.com/andrew201428/pc_check-website/releases/download/v1.0.0/";
    const fullDownloadUrl = baseUrl + fileName;

    showDownloadModal(toolDisplayName);

    const downloadLink = document.createElement('a');
    downloadLink.href = fullDownloadUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Function to generate the notification box
function showDownloadModal(toolName) {
    const modalBox = document.createElement('div');
    modalBox.style.position = 'fixed';
    modalBox.style.bottom = '20px';
    modalBox.style.right = '20px';
    modalBox.style.backgroundColor = '#161022';
    modalBox.style.border = '1px solid #ff7518';
    modalBox.style.color = '#ffffff';
    modalBox.style.padding = '15px 20px';
    modalBox.style.borderRadius = '8px';
    modalBox.style.boxShadow = '0 4px 15px rgba(255,117,24,0.3)';
    modalBox.style.zIndex = '1000';
    modalBox.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';
    modalBox.innerHTML = `<strong>Downloading ${toolName}... 🎃</strong><br><span style="font-size: 12px; color: #ff7518;">Check your browser downloads!</span>`;
    
    document.body.appendChild(modalBox);

    setTimeout(() => {
        modalBox.remove();
    }, 4000);
}
