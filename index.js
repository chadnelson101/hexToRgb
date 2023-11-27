function convertHexToRgb() {
    const hexInput = document.getElementById('hexInput').value;

    if (!/^#[0-9A-Fa-f]{6}$/.test(hexInput)) {
      alert('Please enter a valid hex color code (e.g., #RRGGBB)');
      return;
    }

    const r = parseInt(hexInput.substring(1, 3), 16);
    const g = parseInt(hexInput.substring(3, 5), 16);
    const b = parseInt(hexInput.substring(5, 7), 16);
    
    const resultInput = document.getElementById('resultInput');
    resultInput.value = `RGB: ${r}, ${g}, ${b}`;
  }