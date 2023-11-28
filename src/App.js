import './App.css';
import { createElement } from 'react';
import './numPick.css';
const focusColorOnly = 'rgb(243, 191, 137)';
const focusColor = focusColorOnly + ' none repeat scroll 0% 0% / auto padding-box border-box';

var sudokuPuzzle = [['0', '4', '0', '6', '0', '0', '9', '0', '3'],
                    ['0', '0', '0', '0', '0', '3', '0', '2', '0'],
                    ['0', '0', '7', '0', '0', '8', '0', '0', '0'],
                    ['0', '1', '6', '0', '0', '0', '5', '9', '0'],
                    ['7', '8', '2', '1', '0', '0', '0', '0', '6'],
                    ['3', '0', '0', '2', '6', '0', '0', '8', '7'],
                    ['1', '0', '4', '0', '0', '0', '8', '3', '9'],
                    ['0', '0', '0', '3', '0', '0', '0', '5', '4'],
                    ['0', '0', '0', '4', '0', '0', '0', '0', '0']];

var sudokuChoices = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
    createElement(divPuzzle, {className: 'divPuzzle'}),
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
      if(Object.is(sudokuPuzzle[i][j], '0')){

        var cell = createElement(
          'div',
          { 
            className: "Cell",
            id: "board-" + counter
          },
          // createElement('p',  {
          //                       className: "CellValue",
          //                       id: "cell-" + counter
          //                     })
        );
        components.push(cell);
      }
      else{

        var cellValued = createElement(
          'div',
          {
            className: "Cell Filled",
            id: "board-" + counter
          },
          sudokuPuzzle[i][j]
          // createElement('p',  {
          //                       className: "CellValue",
          //                       id: "cell-" + counter,
          //                     }, sudokuPuzzle[i][j])
        );
        components.push(cellValued);
      }
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

  if(element.getAttribute('id').includes('picker') && (editingCell != null))
  {
    editingCell.innerHTML = element.innerHTML;
    unfocusCell(editingCell);
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
  console.log(style.background);
  console.log(focusColor);
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

  if( !(objectElement === null) && (Object.is(objectElement.className, "Cell")))
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
  else
  {
    editingCell = null;
  }
}

export default App;
