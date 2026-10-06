/* Detect Version 1 Tool - Haunted Halloween & Premium Edition */
/* Developer: Lowrenz Dev */

// Global State Variables for Premium & Theme
let currentThemeState = 0; // 0: Default, 1: Dark, 2: Light
let isPremiumUnlocked = false;

// Initialize script on window load
window.addEventListener('DOMContentLoaded', () => {
    initializeCountdownTimer();
    populateForensicAuditorTable();
});

// 3-State Theme Cycling Function (Default -> Dark -> Light -> Default)
function cycleTheme() {
    let htmlElement = document.documentElement;
    let themeBtn = document.getElementById('themeToggleBtn');

    currentThemeState = (currentThemeState + 1) % 3;

    if (currentThemeState === 0) {
        htmlElement.setAttribute('data-theme', 'default');
        themeBtn.textContent = 'Dark Mode';
        showSpookyToast('Switched to Default Halloween Theme');
    } else if (currentThemeState === 1) {
        htmlElement.setAttribute('data-theme', 'dark');
        themeBtn.textContent = 'Light Mode';
        showSpookyToast('Switched to Dark Mode');
    } else if (currentThemeState === 2) {
        htmlElement.setAttribute('data-theme', 'light');
        themeBtn.textContent = 'Default Mode';
        showSpookyToast('Switched to Light Mode');
    }
}

// Countdown Timer & Free Trial System (10 Days Countdown + 5 Days Claim Window)
function initializeCountdownTimer() {
    // Simulating 10 days countdown timer logic
    let totalSeconds = 10 * 24 * 60 * 60; 
    let timerDisplay = document.getElementById('countdownTimer');
    let statusText = document.getElementById('trialStatusText');
    let dashClaimBtn = document.getElementById('claimTrialDashboardBtn');
    let modalClaimBtn = document.getElementById('modalClaimBtn');

    // For testing/demonstration purposes right away, we simulate that the 10 days have elapsed
    // and the 5-day claim window is currently active:
    statusText.textContent = 'Free trial is active and available to claim within 5 days!';
    timerDisplay.textContent = '00d 05h 23m 41s remaining';
    
    // Enable Claim Buttons
    if (dashClaimBtn) {
        dashClaimBtn.disabled = false;
        dashClaimBtn.className = 'claim-btn-active';
        dashClaimBtn.textContent = 'Claim Free Trial Now';
    }
    if (modalClaimBtn) {
        modalClaimBtn.disabled = false;
        modalClaimBtn.className = 'claim-btn-active';
        modalClaimBtn.textContent = 'Claim Free Trial (Active)';
    }
}

// Function to claim free trial
function claimFreeTrial() {
    isPremiumUnlocked = true;
    unlockPremiumContentUI();
    closePremiumModal();
    showSpookyToast('Successfully claimed 10-day Free Trial! Premium Tools unlocked.');
}

// Simulate Subscription Purchase (Monthly ₱50 / Yearly ₱100)
function simulatePurchase(planName) {
    isPremiumUnlocked = true;
    unlockPremiumContentUI();
    closePremiumModal();
    showSpookyToast(`Successfully subscribed to ${planName}! Access granted.`);
}

// Unlock UI for Premium Tools
function unlockPremiumContentUI() {
    let lockedSection = document.getElementById('premiumToolsSection');
    let unlockedContent = document.getElementById('unlockedPremiumContent');
    
    if (lockedSection) lockedSection.style.display = 'none';
    if (unlockedContent) unlockedContent.style.display = 'block';
}

// Populate LastActivityView Forensic Auditor Table with realistic timestamps (pre-Oct 6, 2026)
function populateForensicAuditorTable() {
    let tableBody = document.getElementById('lavTableBody');
    if (!tableBody) return;

    let forensicData = [
        { time: "05/10/2026 21:42:15", desc: "Run .EXE file", name: "ghost_loader_v4.exe", path: "C:\\Users\\Admin\\Downloads\\ghost_loader_v4.exe" },
        { time: "05/10/2026 21:38:02", desc: "Run .EXE file", name: "injector_x64.exe", path: "C:\\Windows\\Temp\\injector_x64.exe" },
        { time: "05/10/2026 20:15:30", desc: "Open file or folder", name: "CheatsFolder", path: "C:\\Users\\Admin\\Downloads\\CheatsFolder" },
        { time: "04/10/2026 18:22:11", desc: "Run .EXE file", name: "aim_assist_setup.exe", path: "C:\\Users\\Admin\\Desktop\\aim_assist_setup.exe" },
        { time: "04/10/2026 17:05:44", desc: "Select file in open/save dialog", name: "payload.dll", path: "E:\\Dlls\\payload.dll" },
        { time: "03/10/2026 14:11:50", desc: "Run .EXE file", name: "discord_hook.exe", path: "C:\\Tools\\discord_hook.exe" },
        { time: "02/10/2026 11:02:18", desc: "Run .EXE file", name: "bypass_v1.exe", path: "C:\\Windows\\Prefetch\\BYPASS_V1.EXE-7F82A1.pf" }
    ];

    tableBody.innerHTML = "";
    forensicData.forEach(item => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.time}</td>
            <td>${item.desc}</td>
            <td>${item.name}</td>
            <td>${item.path}</td>
        `;
        tableBody.appendChild(row);
    });

    let itemCountLabel = document.getElementById('lavItemCount');
    if (itemCountLabel) {
        itemCountLabel.textContent = `${forensicData.length} item(s), 1 Selected`;
    }
}

// Function to filter tool data dynamically inside card search bars
function filterToolData(inputElement, resultsListId) {
    let filterValue = inputElement.value.toLowerCase();
    let resultsList = document.getElementById(resultsListId);
    if (!resultsList) return;
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

// Simulated File Download Function
function startDownload(fileName) {
    showSpookyToast(`Successfully initiated secure download for: ${fileName}`);
}

// Authentication Modal Control Functions
function openAuthModal(mode) {
    let modal = document.getElementById('authModal');
    let loginContainer = document.getElementById('loginFormContainer');
    let registerContainer = document.getElementById('registerFormContainer');

    if (!modal) return;
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
    if (modal) modal.style.display = 'none';
}

// Premium Modal Control Functions
function openPremiumModal(event) {
    if (event) event.preventDefault();
    let modal = document.getElementById('premiumModal');
    if (modal) modal.style.display = 'flex';
}

function closePremiumModal() {
    let modal = document.getElementById('premiumModal');
    if (modal) modal.style.display = 'none';
}

// Toggle Password Visibility Function
function togglePassword(fieldId, buttonElement) {
    let passwordInput = document.getElementById(fieldId);
    if (!passwordInput) return;
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

    if (!modal) return;
    modal.style.display = 'flex';

    if (type === 'freeTools') {
        titleElement.textContent = 'Free Forensic Tools Policy';
        bodyElement.textContent = 'All utility modules provided within Detect Version 1 are completely free for local system auditing, diagnostic checks, and educational research purposes.';
    } else if (type === 'changelogs') {
        titleElement.textContent = 'System Changelogs - v1.0.0 Halloween Edition';
        bodyElement.textContent = '- Released Halloween Style UI with dense dead trees and spider webs.\n- Integrated 9 targeted forensic analysis modules plus USB and LastActivityView audit tools.\n- Added 3-state theme cycle and flexible subscription/free trial mechanics.';
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
    if (modal) modal.style.display = 'none';
}

// Simulated Form Handlers
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
    toast.style.position = 'fixed';
    toast.style.bottom = '25px';
    toast.style.right = '25px';
    toast.style.background = 'rgba(28, 17, 53, 0.95)';
    toast.style.border = '1px solid #ff4646';
    toast.style.color = '#fff';
    toast.style.padding = '12px 20px';
    toast.style.borderRadius = '10px';
    toast.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    toast.style.zIndex = '9999';
    toast.style.fontSize = '13px';
    toast.style.fontWeight = '600';
    toast.style.transition = 'all 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    
    toast.innerHTML = `<span>🎃</span> <span>${message}</span>`;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    }, 50);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3500);
}

// Close modals when clicking outside content area
window.onclick = function(event) {
    let authModal = document.getElementById('authModal');
    let footerModal = document.getElementById('footerModal');
    let premiumModal = document.getElementById('premiumModal');

    if (event.target === authModal) {
        closeAuthModal();
    }
    if (event.target === footerModal) {
        closeFooterModal();
    }
    if (event.target === premiumModal) {
        closePremiumModal();
    }
}
