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
    xhr.open('GET', release + '.html', true);
    xhr.send();
  }

  function removeSelectedLinks() {
    var selectedLinks = document.getElementsByClassName('selected');
    for (var k = 0; k < selectedLinks.length; k++) {
      selectedLinks[k].classList.remove('selected');
    }
  }

  //QUESTO JQUERY CODE SERVER PER INTERAGIRE CON LA FRECCIA VERSO IL BASSO, QUANDO VIENE CLICCATA TRASFORMA LA FRECCIA VERSO IL BASSO A VERSO DESTRA
  $(document).ready(function() {
	$('.toggle').click(function() {
    $(this).find('i:not(.download-pdf, .fa-globe)').toggleClass('fa-chevron-down fa-chevron-right');
  });
 });


  
});
  
function convertToPdf(htmlFilePath) {
  // Ottieni il nome del file dalle release notes
  const releaseNotesName = htmlFilePath.substring(htmlFilePath.lastIndexOf('/') + 1);

  // Rimuovi l'estensione ".html" dal nome del file
  const pdfFileName = releaseNotesName.replace('.html', '');

  // Carica il contenuto HTML dal file specificato
  fetch(htmlFilePath)
    .then(response => response.text())
    .then(html => {
      // Crea un oggetto "html2pdf"
      const element = document.createElement('div');
      element.innerHTML = html;
      html2pdf().set({
        pagebreak: { mode: 'avoid-all' } // Opzione per evitare la separazione del testo tra le pagine
      }).from(element).save(pdfFileName + '.pdf');
    });
}
