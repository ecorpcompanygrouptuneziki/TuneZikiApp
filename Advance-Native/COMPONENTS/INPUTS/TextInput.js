const TEXTINPUT = document.createElement('input');
TEXTINPUT.placeholder = 'Enter Your Text';
TEXTINPUT.type = 'text';

// STYLES
TEXTINPUT.style.position = 'relative';
TEXTINPUT.style.width = '95%';
TEXTINPUT.style.height = '32px';
TEXTINPUT.style.minHeight = '16px';
TEXTINPUT.style.maxHeight = '32px';
TEXTINPUT.style.background = '#00000080';
TEXTINPUT.style.marginTop = '1rem';
TEXTINPUT.style.marginBottom = '1rem';
TEXTINPUT.style.left = '2%';
TEXTINPUT.style.textAlign = 'left';
TEXTINPUT.style.display = 'block';
TEXTINPUT.style.borderRadius = '5px';
TEXTINPUT.style.color = 'white';
TEXTINPUT.style.border = 'none';
TEXTINPUT.style.userSelect = 'none';
TEXTINPUT.style.outline = 'none';

export { TEXTINPUT };