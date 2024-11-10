const textBox = document.getElementById('text-box');
const output = document.getElementById('output');
const square = document.querySelector('.square');

textBox.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = textBox.value.trim();
    const commands = {
      'color': (color) => square.style.backgroundColor = color,
      'colour': (color) => square.style.backgroundColor = color,
      'size': (size) => {
  const scaleFactor = size / 100;
  square.style.width = (100 * scaleFactor) + 'px';
  square.style.height = (100 * scaleFactor) + 'px';
},
      
      'length': (height) => square.style.height = height + 'px',
      'height': (height) => square.style.height = height + 'px',
      'width': (width) => square.style.width = width + 'px',
      'position': (position) => {
        const [x, y] = position.split(',');
        square.style.top = y + 'px';
        square.style.left = x + 'px';
      },
      'bordercolor': (bordercolor) => square.style['border-color'] = bordercolor,
      'borderwidth': (borderwidth) => square.style['borderWidth'] = borderwidth + 'px',
      'corner': (corner) => square.style.borderRadius = corner + 'px',
      'cornertopleft' : (cornertl) => square.style.borderTopLeftRadius = cornertl + 'px',
      'cornertopright' : (cornertr) => square.style.borderTopRightRadius = cornertr + 'px',
      'cornerbottomleft' : (cornerbl) => square.style.borderBottomLeftRadius = cornerbl + 'px',
      'cornerbottomright' : (cornerbr) => square.style.borderBottomRightRadius = cornerbr + 'px',
      'reset': (arg) => {
        if (arg === 'position') {
            square.style.top = '50%';
            square.style.left = '50%';
        }
        if (arg === 'color') {
            square.style.backgroundColor = '#FFFFFF';
        }
        if (arg === 'size') {
            square.style.width = '100px'
            square.style.height = '100px'
        }
    },
    };

    const [command, arg] = value.split(':');
    if (commands[command]) {
      commands[command](arg.trim());
    }
    textBox.value = ''; 
  }
});

