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
      'shape': (shape) => {
        if (shape === 'circle') square.style.borderRadius = '50%';
        // add shapes here
      },
      'length': (height) => square.style.height = height + 'px',
      'height': (height) => square.style.height = height + 'px',
      'width': (width) => square.style.width = width + 'px',
      'position': (position) => {
        const [x, y] = position.split(',');
        square.style.top = y + 'px';
        square.style.left = x + 'px';
      },
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

