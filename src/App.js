import './App.css';
import { createElement } from 'react';
import './numPick.css';
const focusColorOnly = 'rgb(209, 80, 0)'; 
const focusColor = focusColorOnly + ' none repeat scroll 0% 0% / auto padding-box border-box';

let easySudokuPuzzle = [['9', '1', '4', '3', '6', '0', '2', '7', '8'],
                        ['8', '3', '5', '7', '1', '0', '0', '0', '4'],
                        ['2', '0', '7', '4', '9', '8', '0', '1', '3'],
                        ['4', '0', '0', '8', '2', '0', '0', '0', '0'],
                        ['0', '9', '0', '0', '5', '3', '8', '4', '7'],
                        ['0', '7', '0', '0', '0', '1', '6', '5', '2'],
                        ['7', '4', '3', '5', '0', '0', '0', '2', '0'],
                        ['5', '0', '0', '2', '0', '0', '4', '3', '9'],
                        ['6', '0', '0', '1', '3', '4', '0', '8', '0']
                        ];

let mediumSudokuPuzzle = [['6', '0', '7', '0', '3', '0', '5', '0', '1'],
                          ['0', '0', '0', '5', '0', '0', '3', '0', '0'],
                          ['0', '5', '4', '1', '0', '8', '0', '0', '2'],
                          ['5', '0', '8', '2', '1', '3', '0', '0', '4'],
                          ['1', '0', '2', '0', '6', '0', '0', '5', '0'],
                          ['4', '0', '6', '0', '5', '0', '2', '0', '9'],
                          ['8', '4', '3', '0', '0', '0', '0', '7', '5'],
                          ['7', '0', '0', '3', '0', '4', '0', '2', '8'],
                          ['9', '0', '1', '0', '0', '0', '0', '0', '6']
                          ];

let hardSudokuPuzzle = [['0', '4', '0', '6', '0', '0', '9', '0', '3'],
                        ['0', '0', '0', '0', '0', '3', '0', '2', '0'],
                        ['0', '0', '7', '0', '0', '8', '0', '0', '0'],
                        ['0', '1', '6', '0', '0', '0', '5', '9', '0'],
                        ['7', '8', '2', '1', '0', '0', '0', '0', '6'],
                        ['3', '0', '0', '2', '6', '0', '0', '8', '7'],
                        ['1', '0', '4', '0', '0', '0', '8', '3', '9'],
                        ['0', '0', '0', '3', '0', '0', '0', '5', '4'],
                        ['0', '0', '0', '4', '0', '0', '0', '0', '0']
                      ];

let sudokuPuzzle = [['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0'],
                    ['0', '0', '0', '0', '0', '0', '0', '0', '0']
                    ];

var sudokuChoices = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'Pen'];

let isCandidate = false;

// var sudokuPuzzle = [['0', '4', '0', '6', '0', '0', '9', '0', '3', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '0', '0', '3', '0', '2', '0', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '7', '0', '0', '8', '0', '0', '0', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '1', '6', '0', '0', '0', '5', '9', '0', '9', '11', '4', '7', '4', '3', '2'],
//                     ['7', '8', '2', '1', '0', '0', '0', '0', '6', '9', '11', '4', '7', '4', '3', '2'],
//                     ['3', '0', '0', '2', '6', '0', '0', '8', '7', '9', '11', '4', '7', '4', '3', '2'],
//                     ['1', '0', '4', '0', '0', '0', '8', '3', '9', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '4', '0', '0', '0', '0', '0', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2'],
//                     ['0', '0', '0', '3', '0', '0', '0', '5', '4', '9', '11', '4', '7', '4', '3', '2']];

// var sudokuChoices = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];

let editingCell = null;

function App() {
  return createElement(
    'div',
    { className: "App" },
    createElement(createLevelChooser, {className: 'levelChooseContainer'}),
    createElement(divPuzzle, {className: 'divPuzzle'}),
  );
}

function createLevelChooser(){
  return createElement(
    'div',
    {className: 'levelChooseContainer'},
    null,
    createElement('div', {
      className: 'level',
      id: 'easy'
    }, 'Easy'),
    createElement('div', {
      className: 'level',
      id: 'medium'
    }, 'Medium'),
    createElement('div', {
      className: 'level',
      id: 'hard'
    }, 'Hard')
  );
}

function divPuzzle(){
  return createElement(
    'div',
    { className: 'divPuzzle'},
    null,
    createElement( numPick, {className: 'numPick-container'}),
    createElement( sudokuComponents, { className: 'Sudoku'}),

  );
}

function sudokuComponents() {
  let components = [];
  let counter = 0;
  for(let i = 0; i< sudokuPuzzle.length; i++)
  {
    for(let j = 0; j< sudokuPuzzle[0].length; j++)
    {
      var cell = createElement(
        'div',
        { 
          className: "Cell Answer",
          id: "board-" + counter
        },
      );
      components.push(cell);
      counter++;
    }
  }

  return createElement(
    'div',
    { 
      className: 'Sudoku'
    },
    components,
    createElement('div',  { 
      className: 'vertical-1'
    }),
    createElement('div',  { 
      className: 'vertical-2'
    }),
    createElement('div',  { 
      className: 'horizontal-1'
    }),
    createElement('div',  { 
      className: 'horizontal-2'
    }),
  );

}

function numPick() {
  let pickerComponents = [];

  for( let k = 0; k < sudokuChoices.length; k++)
  {
    var pickValue = createElement(
      'div',
      {
        className: "Choice",
        id: "picker-" + k,
      },
      sudokuChoices[k]
    );
    pickerComponents.push(pickValue);
  }
  
  return createElement(
    'div',
    {
      className: 'numPick-container'
    },
    pickerComponents
  );
}

window.onmousedown = function (e)
{ 

  let element = document.getElementById(e.target.id);

  if( element === null)
  {
    // chooser[0].style.visibility = 'hidden';
    unfocusCell(editingCell);
    return;
  }

  if( Object.is(element.innerHTML, 'Easy'))
  {
    sudokuPuzzle = easySudokuPuzzle;
    initializePuzzle(element);
  } 
  else if( Object.is(element.innerHTML, 'Medium'))
  {
    sudokuPuzzle = mediumSudokuPuzzle;
    initializePuzzle(element);
  }
  else if( Object.is(element.innerHTML, 'Hard'))
  {
    sudokuPuzzle = hardSudokuPuzzle;
    initializePuzzle(element);
  }

  if(element.getAttribute('id').includes('picker') && (editingCell != null) && !(Object.is(element.innerHTML, 'Pen')))
  {
    if(Object.is(element.innerHTML, 'X'))
    {
      editingCell.innerHTML = '';  
    }
    else{
      if(isCandidate)
      {
        editingCell.style.color = 'var(--acc-color4)';
      }
      else
      {
        editingCell.style.color = 'black';
      }
      editingCell.innerHTML = element.innerHTML;  
    }
    unfocusCell(editingCell);
  }
  else if(Object.is(element.innerHTML, 'Pen'))
  {
    isCandidate = !isCandidate;
    let pencilChoice = document.getElementsByClassName('Choice');
    if(isCandidate)
    {
      for(let i = 0; i < pencilChoice.length; i++)
      {
        pencilChoice[i].animate({
          fontWeight: 'normal',
          color: 'white',
          background: 'black',
        }, {duration: 200, fill: 'forwards'});
      }
    }
    else
    {
      for(let i = 0; i < pencilChoice.length; i++)
      {
        pencilChoice[i].animate({
          fontWeight: 'bold',
          color: 'black',
          background: 'var(--acc-color3)',
        }, {duration: 200, fill: 'forwards'});
      }
    }
  }
  pickEditingCell(element, e);
}

window.onmouseover = function (e)
{

  if((e.target == null) && (e.relatedTarget == null))
  {
    return;
  }

  try{
    let element = document.getElementById(e.target.id);
    let relatedElement = document.getElementById(e.relatedTarget.id);

    if((element != null) && (Object.is(element.className, "Choice"))){
      focusChoice(element);
    }

    if((relatedElement != null) && (Object.is(relatedElement.className, "Choice"))){
      unfocusChoice(relatedElement);
    }
  }
  catch(error){
    console.log(error)
    return;
  }

}

function focusChoice(element)
{
  element.animate({
    transform: 'scale(0.9)',
    zIndex: 2
  }, {duration: 100, fill: 'forwards'});
}

function unfocusChoice(element)
{
  element.animate({
    transform: 'scale(0.8)',
    zIndex: 1
  }, {duration: 100, fill: 'forwards'});
}

function focusCell(element)
{
  let finalFocusColor = focusColor;
  let initialColor = 'var(--accent-color3)';
  let style = getComputedStyle(element);

  if( Object.is(style.background, focusColor) )
  {
    finalFocusColor = initialColor;
  }

  element.animate({
    background: `${finalFocusColor}`
  }, {duration: 200, fill: 'forwards'});
  editingCell = element;
}

function unfocusCell(element)
{
  if(element === null)
  {
    return;
  }
  element.animate({
    background: 'var(--accent-color3)'
  }, {duration: 200, fill: 'forwards'});
  editingCell = element;
}

function pickEditingCell(objectElement, mouseEvent) {

  if( !(objectElement === null) && (Object.is(objectElement.className, "Cell Answer")))
  {
    if(editingCell != null)
    {
      unfocusCell(editingCell);
      editingCell = null;
    }
    focusCell(objectElement);
  }
  else if( !(objectElement === null) && (Object.is(objectElement.className, "Cell Filled")))
  {
    unfocusCell(editingCell);
    editingCell = null;
  }
  else if(Object.is(objectElement.innerHTML, "Pen"))
  {
    return;
  }
  else
  {
    editingCell = null;
  }
}

function initializePuzzle(element)
{
  let levels = document.getElementsByClassName('level');
  console.log(levels);

  initializeSudokuComponents();

  let levelChooser = document.getElementsByClassName('levelChooseContainer');
  levelChooser[0].animate({
    transform: 'scale(10)',
    opacity: '0%',
    visibility: 'hidden',
    transitionTimingFunction: 'ease in'
  }, {duration: 1200, fill: 'forwards'});

  // for(let counter = 0; counter < levels.length; counter++)
  // {
  //   levels[counter].style.visibility = 'hidden';
  // }

  let puzzle = document.getElementsByClassName('divPuzzle');
  // puzzle[0].style.visibility = 'visible';
  puzzle[0].animate({
    opacity: '100%'
  }, {duration: 1200, fill: 'forwards'});
}

function initializeSudokuComponents() {
  let counter = 0;

  let cells = document.getElementsByClassName("Cell");

  for(let i = 0; i< sudokuPuzzle.length; i++)
  {
    for(let j = 0; j< sudokuPuzzle[0].length; j++)
    {
      if(Object.is(sudokuPuzzle[i][j], '0')){
        cells[counter].classList.add('Answer');
      }
      else{
        cells[counter].innerHTML = sudokuPuzzle[i][j];
        cells[counter].classList.add('Filled');
      }
      counter++;
    }
  }
}

export default App;
