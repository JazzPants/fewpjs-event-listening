function addingEventListener() {
    const input = document.getElementById('input'); //node/element that listens
input.addEventListener('click', function() { //invoke addEventListener() on "input"
  alert('I was clicked!'); //listen for click, then execute function to do work on the node.
});
}

addingEventListener();
