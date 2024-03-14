<script lang='ts'>
  import accessibilityIcon from '../assets/accessibility_icon.png';
  let accessibilityMenuOpen = false;

  // Accessibility menu functions
  /**
   * @param {number} sizeDifference
   */
  function changeTextSize(sizeDifference: number) {
    let currentSize = parseInt(getComputedStyle(document.body).fontSize);
    let newSize = currentSize + sizeDifference;
    document.body.style.fontSize = newSize + 'px';
  }

  function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
  }

  function resetSettings() {
    document.body.style.fontSize = ''; // Reset text size
    document.body.classList.remove('high-contrast'); // Reset high contrast
  }

  function toggleAccessibilityMenu() {
    accessibilityMenuOpen = !accessibilityMenuOpen;
  }
  
  function showKeyboardShortcuts() {
    alert("Keyboard Shortcuts:\n\n1. Navigate to the next option: Right arrow key\n2. Navigate to the previous option: Left arrow key\n3. Select an option: Enter key\n4. Toggle Accessibility Menu: Alt + A\n5. Select a line: Shift + Up/Down arrow keys\n6. Copy selected text: Ctrl + C\n7. Paste copied text: Ctrl + V");
  }
</script>

<main>
  <!-- Accessibility menu toggle button -->
  <img id="accessibility-menu-button" src={accessibilityIcon} alt="Accessibility Menu" on:click={toggleAccessibilityMenu} style="position: fixed; bottom: 20px; left: 20px; width: 40px; height: 40px; cursor: pointer;">

  <!-- Accessibility menu -->
  <div class="accessibility-menu {accessibilityMenuOpen ? 'open' : ''}" style="left: 100px; bottom:150px; transform: translateX(-50%);">
    <button on:click={() => changeTextSize(2)}>Increase Text Size</button>
    <button on:click={() => changeTextSize(-2)}>Decrease Text Size</button>
    <button on:click={toggleHighContrast}>High Contrast</button>
    <button on:click={resetSettings}>Reset</button>
    <!-- New button for keyboard shortcuts -->
    <button on:click={showKeyboardShortcuts}>Keyboard Shortcuts</button>
  </div>
</main>

<style>
  button {
    margin-top: 10px;
    padding: 10px;
    background-color: #2ecc71;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }

  /* Added styles for high contrast */
  .high-contrast {
    color: #fff !important;
    background-color: #000 !important;
  }

  /* Added styles for pop-up accessibility menu */
  .accessibility-menu {
    position: absolute;
    bottom: calc(100% + 10px); /* Position the menu above the button */
    left: 20px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    display: none; /* Initially hidden */
    z-index: 999; /* Ensure the menu is above other content */
  }

  .accessibility-menu.open {
    display: flex; /* Display the menu when open */
    flex-direction: column; /* Align buttons in a column */
  }

  .accessibility-menu button {
    margin-bottom: 5px; /* Add some space between buttons */
  }

  /* Accessibility menu toggle button */
  #accessibility-menu-button {
    position: fixed;
    bottom: 20px;
    left: 20px;
    cursor: pointer;
    z-index: 999; /* Ensure the button is above other content */
  }
</style>