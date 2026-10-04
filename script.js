/* ==========================================================
   DETECT - HAUNTED HALLOWEEN EDITION: SCRIPT.JS
   Created by Lowrenz Dev
   ========================================================== */

function openAuthModal(type) {
    const modal = document.getElementById('authModal');
    const loginContainer = document.getElementById('loginFormContainer');
    const registerContainer = document.getElementById('registerFormContainer');

    if (!modal) return;
    modal.style.display = 'flex';
    
    if (type === 'login') {
        if (loginContainer) loginContainer.style.display = 'block';
        if (registerContainer) registerContainer.style.display = 'none';
    } else {
        if (loginContainer) loginContainer.style.display = 'none';
        if (registerContainer) registerContainer.style.display = 'block';
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.style.display = 'none';
}

function togglePassword(fieldId, iconElement) {
    const passwordInput = document.getElementById(fieldId);
    if (!passwordInput) return;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        if (iconElement) iconElement.textContent = 'Hide 👁️';
    } else {
        passwordInput.type = 'password';
        if (iconElement) iconElement.textContent = 'Show 👁️‍🗨️';
    }
}

function handleLogin(event) {
    event.preventDefault();
    showHauntedNotification("Successfully entered the haunted crypt! 🕯️🦇", "success");
    closeAuthModal();
}

function handleRegister(event) {
    event.preventDefault();
    const passElem = document.getElementById('registerPassword');
    const confirmPassElem = document.getElementById('confirmPassword');
    
    if (!passElem || !confirmPassElem) return;
    
    const pass = passElem.value;
    const confirmPass = confirmPassElem.value;

    if (pass !== confirmPass) {
        showHauntedNotification("Passwords do not match! The ritual has failed. ❌👻", "error");
        return;
    }

    showHauntedNotification("Account successfully created and bound to the coven! 🔮", "success");
    closeAuthModal();
}

function socialAuth(providerName) {
    showHauntedNotification(`Establishing secure ghostly link with ${providerName}... 👻✨`, "info");
    closeAuthModal();
}

function copyLink(urlText) {
    navigator.clipboard.writeText(urlText);
    showHauntedNotification("Haunted tool link copied to clipboard successfully! 📋🔗", "success");
}

/* Footer Modal handler for Changelogs, Privacy Policy, TOS, and Free Tools */
function openFooterModal(type) {
    const modal = document.getElementById('footerModal');
    const title = document.getElementById('footerModalTitle');
    const body = document.getElementById('footerModalBody');

    if (!modal || !title || !body) return;
    modal.style.display = 'flex';

    if (type === 'freeTools') {
        title.textContent = "Free Cursed Tools Overview 🎃";
        body.innerHTML = "Detect Version 1 Tool provides a curated suite of next-gen forensic utilities built for professional PC checkers, system diagnostics, and artifact analysis. Enhanced with haunting gothic styling, all tools are completely free to download and use under Lowrenz Dev.";
    } else if (type === 'changelogs') {
        title.textContent = "System Changelogs (Haunted Edition)";
        body.innerHTML = "<strong>v1.0.7 Haunted Edition (Current):</strong><br>- Enhanced side backgrounds with floating gothic elements, glowing vignettes, and spooky glows.<br>- Redesigned all PC check tool cards and action buttons with eerie dark magic hover animations.<br>- Upgraded Sign In and Register modals with immersive dark ritual styles.<br>- Integrated official Google and GitHub login connectors with custom dark toasts.";
    } else if (type === 'privacy') {
        title.textContent = "Privacy Policy 📜";
        body.innerHTML = "We respect your digital privacy. Detect Version 1 Tool operates locally on your machine for diagnostic scans. We do not collect, store, or transmit personal data, execution logs, or system artifacts to external third-party servers.";
    } else if (type === 'tos') {
        title.textContent = "Terms of Service (TOS) ⚖️";
        body.innerHTML = "By downloading and utilizing the software and utilities provided by Detect Version 1 Tool, you agree to use them solely for legitimate system diagnostics, personal security audits, and authorized PC verification purposes.";
    }
}

function closeFooterModal() {
    const modal = document.getElementById('footerModal');
    if (modal) modal.style.display = 'none';
}

/* Live filtering function for individual tool GUI search bars */
function filterToolData(inputElement, listId) {
    const filterValue = inputElement.value.toLowerCase();
    const listContainer = document.getElementById(listId);
    if (!listContainer) return;
    
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

    showHauntedNotification(`Summoning ${toolDisplayName}... 🎃 Check your browser downloads!`, "info");

    const downloadLink = document.createElement('a');
    downloadLink.href = fullDownloadUrl;
    downloadLink.download = fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

/* Custom Gothic Toast Notification System */
function showHauntedNotification(message, type = "info") {
    const existingToast = document.getElementById('hauntedToastBox');
    if (existingToast) existingToast.remove();

    const toastBox = document.createElement('div');
    toastBox.id = 'hauntedToastBox';
    toastBox.style.position = 'fixed';
    toastBox.style.bottom = '25px';
    toastBox.style.right = '25px';
    toastBox.style.backgroundColor = '#120c1f';
    
    let borderColor = '#ff7518';
    if (type === 'success') borderColor = '#00ffcc';
    if (type === 'error') borderColor = '#ff3366';
    
    toastBox.style.border = `1px solid ${borderColor}`;
    toastBox.style.color = '#ffffff';
    toastBox.style.padding = '14px 20px';
    toastBox.style.borderRadius = '10px';
    toastBox.style.boxShadow = `0 8px 25px rgba(255, 117, 24, 0.35), inset 0 0 12px rgba(138, 43, 226, 0.2)`;
    toastBox.style.zIndex = '9999';
    toastBox.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    toastBox.style.fontSize = '13px';
    toastBox.style.fontWeight = '500';
    toastBox.style.display = 'flex';
    toastBox.style.alignItems = 'center';
    toastBox.style.gap = '10px';
    toastBox.style.animation = 'toastSlideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    toastBox.innerHTML = `<span>${message}</span>`;
    
    document.body.appendChild(toastBox);

    setTimeout(() => {
        toastBox.style.animation = 'toastSlideDown 0.3s ease forwards';
        setTimeout(() => toastBox.remove(), 300);
    }, 4000);
}

// Inject keyframe animations dynamically for toast notifications
const customStyleTag = document.createElement('style');
customStyleTag.innerHTML = `
@keyframes toastSlideUp {
    0% { transform: translateY(30px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
}
@keyframes toastSlideDown {
    0% { transform: translateY(0); opacity: 1; }
    100% { transform: translateY(30px); opacity: 0; }
}
`;
document.head.appendChild(customStyleTag);
