
// FUNCTION MODEL OR CONSTRUCTORES 
function Window(tabs) {
  this.tabs = tabs;
};

/*FUNCTION CONCAT ARRAYS
  O metodo join foi add ao Window.prototype,
  ele recebe outra funcao como parametro,
  e concatena o array da funcao do parametro
  com o array de quem o chamou.
*/
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

/*FUNCTION OPEN NEW TAB
  Esse metodo foi add ao prototype de Window,
  e quando e chamado ele empura "new tab",
  no array de quem o  chamou.
*/
Window.prototype.tabOpen = function () {
  this.tabs.push('new tab');
  return this;
};

/*FUNCTION CLOSE TAB
  metodo add ao prototype de Window,
  e quando chamado retira do array um numero
  determinado de valores do array, conforme lhe e
  passado por parametro

Window.prototype.tabClose = function (index) {

  this.tabs = this.tabs.splice(0, this.tabs.length - index);

  return this;
};*/


Window.prototype.tabClose = function (index) {

  // Only change code below this line
  const arr = [].concat(this.tabs);
  const tabsBeforeIndex = this.tabs.splice(0, index);
  const tabsAfterIndex = arr.splice(index + 1);

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);
  // Only change code above this line

  return this;
};


const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']);
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']);
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']);


const finalTabs = socialWindow
  .tabOpen()
  .join(videoWindow.tabClose(2))
  .join(workWindow.tabClose(1).tabOpen());
 
console.log(finalTabs.tabs);

/*

  [
    'FB', 
    'Gitter', 
    'Reddit',
    'Twitter',
    'Medium', 
    'new tab',
    'Netflix', 
    'YouTube', 
    'Vine',
    'GMail', 
    'Work mail', 
    'Docs',
    'freeCodeCamp', 
    'new tab'
  ]

*/

