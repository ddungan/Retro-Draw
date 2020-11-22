function makeGrid() {
    for(let i = 0; i < 64; i++) {
    let cells = '<div class="cell">';
    $('.grid').append(cells);
    };
}

makeGrid();

const PALETTE = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'blueviolet',
    'violet',
  ];

function makePalette() {
    for (let i = 0; i < PALETTE.length; i++) {
        let nextColor = PALETTE[i];
        let colorButton = $('<button style="background-color:' + nextColor + '"></button>');
        $('.palette').append(colorButton);
        $('.palette button').first().addClass('active');
    };
}

makePalette();

function onPaletteClick() {
    $('.palette button').removeClass('active');
    $((this), '.palette button').addClass('active');
}

$('.palette button').click(onPaletteClick);

function onGridClick() {
    let backgroundColor = $('.palette .active').css('background-color');
    let thisCell = $((this), '.grid .cell');
    if ((thisCell).css('background-color') === $('.palette .active').css('background-color')) {
        $(thisCell).css('background-color', 'rgba(0, 0, 0, 0)');
        } else {
        $(thisCell).css('background-color', backgroundColor);
        }
}

$('.grid .cell').click(onGridClick);

function onClearClick() {
    $('.grid .cell').css('background-color', '');
}

$('.controls .clear').click(onClearClick);

function onFillAllClick() {
    let backgroundColor = $('.palette .active').css('background-color');
    $('.grid .cell').css('background-color', backgroundColor);
}

$('.controls .fill-all').click(onFillAllClick);

function onFillEmptyClick() {
    let backgroundColor = $('.palette .active').css('background-color');
    const elements = $('.grid .cell')
    for (let i = 0; i < elements.length; i++) {
      let nextElement = $(elements[i]);

      if (nextElement.css('background-color') === 'rgba(0, 0, 0, 0)') {
        $(nextElement).css('background-color', backgroundColor);
      }
    }
    
}

$('.controls .fill-empty').click(onFillEmptyClick);