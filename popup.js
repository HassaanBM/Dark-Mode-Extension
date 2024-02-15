document.addEventListener('DOMContentLoaded', function() {
    var status = document.getElementById('status');
    var darkModeCheckbox = document.getElementById('darkModeCheckbox');
    var enabled = localStorage.getItem('darkModeEnabled') === 'true';

    darkModeCheckbox.checked = enabled;
    status.textContent = enabled ? 'Dark Mode is enabled' : 'Dark Mode is disabled';

    darkModeCheckbox.addEventListener('change', function() {
        var value = this.checked;
        localStorage.setItem('darkModeEnabled', value);
        status.textContent = value ? 'Dark Mode is enabled' : 'Dark Mode is disabled';

        chrome.runtime.sendMessage({ action: 'toggleDarkMode', enabled: value });
    });
});
