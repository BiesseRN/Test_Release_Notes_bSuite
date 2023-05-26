document.addEventListener('DOMContentLoaded', function() {
  var toggles = document.getElementsByClassName('toggle');
  var releaseContent = document.getElementById('releaseContent');
  var releaseLinks = document.querySelectorAll('#releaseTree a');

  for (var i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function() {
      var subtree = this.nextElementSibling;
      subtree.classList.toggle('expanded');
    });
  }

  for (var j = 0; j < releaseLinks.length; j++) {
    releaseLinks[j].addEventListener('click', function(event) {
      event.preventDefault();
      var release = this.getAttribute('data-release');
      if (release) {
        loadReleaseNotes(release);
        removeSelectedLinks(); // Rimuove eventuali link precedentemente evidenziati
        this.classList.add('selected'); // Aggiunge la classe "selected" al link selezionato
      }
    });
  }

  function loadReleaseNotes(release) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          releaseContent.innerHTML = xhr.responseText;
        } else {
          releaseContent.innerHTML = 'Failed to load the requested file, please try again later.';
        }
      }
    };
    xhr.open('GET', 'release_notes/' + release + '.html', true);
    xhr.send();
  }

  function removeSelectedLinks() {
    var selectedLinks = document.getElementsByClassName('selected');
    for (var k = 0; k < selectedLinks.length; k++) {
      selectedLinks[k].classList.remove('selected');
    }
  }
  
});