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

$(document).ready(function() {
  // Gestione dell'evento di click sul pulsante di logout
  $('#logout-button').click(function() {
    localStorage.removeItem('accessToken', 'myAccessToken');
    window.location.href = 'login.html'; // Sostituisci 'login.html' con la tua pagina di login o l'URL desiderato
  });
});

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
        var markdown = xhr.responseText;
        var renderedHTML = markdownit().render(markdown);
        releaseContent.innerHTML = renderedHTML;
      } else {
        releaseContent.innerHTML = 'Failed to load the requested file, please try again later.';
      }
    }
  };
  xhr.open('GET', release + '.md', true);
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

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get username and password values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Create an AJAX request to the login PHP script
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'scripts/login.php', true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Successful login
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
			 document.getElementById('success-message').textContent = response.message;
             document.getElementById('success-message').style.display = 'block';
			 localStorage.setItem('accessToken', 'myAccessToken');
			setTimeout(function() {
          window.location.href = 'dashboard.html'; // Redirect to dashboard page
		  }, 3000); // Delay di 3000 millisecondi (3 secondi)
        } else {
          showErrorMessage(response.message); // Show error message
        }
      } else {
        showErrorMessage('An error occurred during the login process.'); // Show error message
      }
    }
  };
  
  // Send the request with username and password as POST parameters
  var params = 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
  xhr.send(params);
});

function showErrorMessage(message) {
  var errorElement = document.getElementById('error-message');
  errorElement.style.display = 'block';
  errorElement.textContent = message;
}