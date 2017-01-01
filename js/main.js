/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/

/*
* TASK 1: Copy heading into footer
*
* innerHTML
* https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
*/

var pageTitle = document.getElementById('pageTitle');
var pageFooter = document.getElementById('pageFooter');

// Add heading content and a space to seperate the text to the footer
pageFooter.innerHTML = pageFooter.innerHTML + ' ' + pageTitle.innerHTML;
/*
* This can also be written as:
* pageFooter.innerHTML += ' ' + pageTitle.innerHTML;
*/


/*
* TASK 2: Change heading to red via inline styles and add 20px of left padding
*/

//pageTitle variable already exists from TASK 1
pageTitle.style.color = 'red';
pageTitle.style.paddingLeft = '20px';

// note that this line has no effect as the text-shadow
// is applied via a stylesheet, not inline
pageTitle.style.textShadow = null;


/*
* TASK 3: Styles via setAttribute
*/

var columns = document.querySelectorAll('.content_column');

// Loop through our columns and change their font
for (var i = 0; i < columns.length; i++) {
	columns[i].setAttribute('style', 'font-family: Georgia');
}

/*
* TASK 4: copy the .content_column's into a new row
*
* createElement
* https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
*
* setAttribute
* https://developer.mozilla.org/en/docs/Web/API/Element/setAttribute
*
* outerHTML
* https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML
*
* appendChild
* https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
*/

// columns variable already exists from TASk 2

//create a new div, note it is NOT in our page yet, it's just living in memory
var newRow = document.createElement('div');

// give our new div some classes
newRow.setAttribute('class', 'row grey_bg');

// Loop through our columns and add a copy to our new row
for (var i = 0; i < columns.length; i++) {
	newRow.innerHTML += columns[i].outerHTML;
}

//add our new row just before the footer
var card = document.querySelector('.card');

card.appendChild(newRow);

/*
* TASK 5: Adding a removing classes
*
* classList
* https://developer.mozilla.org/en/docs/Web/API/Element/classList
*/

var findableItems = document.querySelectorAll('.find_me');

for (var i = 0; i < findableItems.length; i++) {
	findableItems[i].classList.add('found');
	findableItems[i].classList.remove('find_me');
}


/*
* TASK 6: Creating an entire stylesheet
* 
* CSSStyleSheet
* https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet
*
* David Walsh Article
* https://davidwalsh.name/add-rules-stylesheets
*/

var styleEl = document.createElement('style');

document.head.appendChild(styleEl);

var sheet = styleEl.sheet; // easy referance

sheet.insertRule('#pageTitle{background-color: red;}', 0);
sheet.insertRule('#pageTitle{background-color: yellow;}', sheet.cssRules.length);
sheet.insertRule('p{color: blue;}', sheet.cssRules.length);