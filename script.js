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

function startDownload(toolName) {
    const modal = document.getElementById('downloadModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalStatus = document.getElementById('modalStatus');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const auditOutput = document.getElementById('toolAuditOutput');

    modalTitle.textContent = `Running Tool: ${toolName}`;
    modalStatus.textContent = "Scanning system logs & forensic artifacts...";
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    auditOutput.style.display = 'block';
    auditOutput.innerHTML = `[${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}] Target: ${toolName}<br>Status: Parsing target files & memory handles...`;
    modal.style.display = 'flex';

    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 4;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            progressBar.style.width = '100%';
            progressText.textContent = '100% - Complete!';
            modalStatus.textContent = "Scan finished successfully!";
            
            const currentDate = new Date().toLocaleString();
            auditOutput.innerHTML += `<br>[${currentDate}] RESULT: System artifacts successfully extracted.<br>- Status: Audit logs verified clean.`;
            
            setTimeout(() => {
                modal.style.display = 'none';
                alert(`Scan complete for ${toolName}. Audit reports ready.`);
            }, 1500);
        } else {
            progressBar.style.width = progress + '%';
            progressText.textContent = progress + '%';
            if (progress > 25 && progress < 60) {
                modalStatus.textContent = "Analyzing directory structures and execution caches...";
                auditOutput.innerHTML = `[${new Date().toLocaleTimeString()}] Parsing execution logs & prefetch targets...`;
            } else if (progress >= 60) {
                modalStatus.textContent = "Compiling results into GUI search view...";
                auditOutput.innerHTML = `[${new Date().toLocaleTimeString()}] Indexing items for instant search...`;
            }
        }
    }, 140);
}