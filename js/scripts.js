function newItem() {
	let toDoInput = $("#toDoInput");
	let toDoInputValue = toDoInput.val();
	let toDoItem = $("<li></li>");

	// check input value
	let isInputEmpty = toDoInputValue === "" ? true : false;
	if (isInputEmpty) {
		alert("You must write something!");
	} else {
		console.log(toDoInputValue);
		let toToItemList = $("#toDoItemslist");
		let toDoItemText = toDoItem.text(toDoInputValue);
		toToItemList.append(toDoItemText);
		// clear the Input text
		toDoInput.val("");
	}

	//function to strike a todo item
	function crossOut() {
		toDoItem.toggleClass("strike");
	}
	// Add dblclick event handler function .
	toDoItem.dblclick(function () {
		crossOut();
	});

	// Add the delete button "X"
	let crossOutButton = $("<crossOutButton></crossOutButton>");
	crossOutButton.append(document.createTextNode("X"));
	toDoItem.append(crossOutButton);

	//function to delete a todo item
	function deleteListItem() {
		toDoItem.addClass("delete");
	}
	crossOutButton.click(() => deleteListItem());

	//Order ToDo items
	$("#toDoItemslist").sortable();
}
