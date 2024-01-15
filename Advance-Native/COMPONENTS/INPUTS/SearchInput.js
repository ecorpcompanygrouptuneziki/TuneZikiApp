const SEARCHINPUT = document.createElement('input');
SEARCHINPUT.placeholder = 'Enter Your Search';
SEARCHINPUT.type = 'search';

// STYLES
SEARCHINPUT.style.position = 'relative';
SEARCHINPUT.style.width = '95%';
SEARCHINPUT.style.height = '32px';
SEARCHINPUT.style.minHeight = '16px';
SEARCHINPUT.style.maxHeight = '32px';
SEARCHINPUT.style.background = '#00000080';
SEARCHINPUT.style.marginTop = '1rem';
SEARCHINPUT.style.marginBottom = '1rem';
SEARCHINPUT.style.left = '2%';
SEARCHINPUT.style.textAlign = 'left';
SEARCHINPUT.style.display = 'block';
SEARCHINPUT.style.borderRadius = '5px';
SEARCHINPUT.style.color = 'white';
SEARCHINPUT.style.border = 'none';
SEARCHINPUT.style.userSelect = 'none';
SEARCHINPUT.style.outline = 'none';

export { SEARCHINPUT };