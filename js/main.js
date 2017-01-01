/**
* Scripts for {Project name and url}
*
* author: {name}
* email: {email}
* website: {portfolio}
*/

/*
* TASK 1: Copy heading into footer
* https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
*/

var pageTitle = document.getElementById('pageTitle');
var pageFooter = document.getElementById('pageFooter');

// Add heading content and a space to seperate the text to the footer
pageFooter.innerHTML += pageFooter.innerHTML + ' ' + pageTitle.innerHTML;
/*
* This can also be written as:
* pageFooter.innerHTML += ' ' + pageTitle.innerHTML;
*/


/*
* TASK 2: copy the .content_column's into a new row
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

var columns = document.querySelectorAll('.content_column');

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
* TASK 3: Change heading to red via inline styles and add 20px of left padding
*/

//pageTitle variable already exists from TASK 1
pageTitle.style.color = 'red';
pageTitle.style.paddingLeft = '20px';

// note that this line has no effect as the text-shadow is applied via a stylesheet, not inline
pageTitle.style.textShadow = null;


/*
* TASK 4: Styles via setAttribute
*/

// columns variable already exists from TASK 2
// Loop through our columns and change their font
for (var i = 0; i < columns.length; i++) {
	/*
	* Note that only the original columns are changed, this is becuase the new columns did not exist when we set the value of columns
	* querySelectorAll returns a "non-live" nodeList
	* - This means it won't update if new items are added to our HTML
	*
	* try changing line 41 to a getElementsByClassName function call instead
	*/
	columns[i].setAttribute('style', 'font-family: Georgia');
}