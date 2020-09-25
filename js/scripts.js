function newItem(){

  // 1. Adds a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something');
  } else {
    $('#list').append(li);
  }

  // 2. Crosses out an item from the list of active items OR removes cross out from an
  // already crossed out item :
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  // 3a. Adds the delete button "X"
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  // 3b. Actually removes item from list upon clicking "X" on delete button
  crossOutButton.on('click', deleteListItem);
  function deleteListItem() {
    li.addClass('delete')
  }

  // 4. Allows the items to be resorted:
  $('#list').sortable();
}
