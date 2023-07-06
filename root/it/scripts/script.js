var opt_html2pdf = {
  margin: 15,
  pagebreak: { mode: 'avoid-all' }
};

var searchQuery;

function convertToPdf(markdownFilePath) {
  const releaseNotesName = markdownFilePath.substring(markdownFilePath.lastIndexOf('/') + 1);
  const pdfFileName = releaseNotesName.replace('.md', '');

  fetch(markdownFilePath)
    .then(response => response.text())
    .then(markdown => {
      const md = window.markdownit();
      const html = md.render(markdown);

      // Converti l'HTML in PDF utilizzando html2pdf
      const element = document.createElement('div');
      element.innerHTML = html;
      html2pdf().set(opt_html2pdf).from(element).save(pdfFileName + '.pdf');
    });
}

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
      var release = this.getAttribute('data-release-path');
      if (release) {
        loadReleaseNotes(release);
        removeSelectedLinks(); // Rimuove eventuali link precedentemente evidenziati
        this.classList.add('selected'); // Aggiunge la classe "selected" al link selezionato
      }
    });
  }

  function loadReleaseNotes(release, searchIsActive, searchQuery) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var markdown = xhr.responseText;
          if (searchIsActive == 1) {
            const md = window.markdownit();
            const html = md.render(markdown);
            const highlightedHtml = highlightSearchQuery(html, searchQuery);
            releaseContent.innerHTML = highlightedHtml;
          }else{
            var renderedHTML = markdownit().render(markdown);
            releaseContent.innerHTML = renderedHTML;
          }
        } else {
          releaseContent.innerHTML = 'Failed to load the requested file, please try again later.';
        }
      }
    };
    xhr.open('GET', release, true);
    xhr.send();
  }

  // QUESTE 2 FUNZIONI SEGUENTI FANNO IN MODO TALE CHE I VALORI ALL'INTERNO DELLE "<>" NON VENGANO SOSTITUITI, QUESTO SERVE PERCHE INIZIALMENTE VENIVANO CAMBIATE ANCHE LE STRINGHE DELLE IMMAGINI SUI FILE MARKDOWN
  function highlightSearchQuery(html, searchQuery) {
    var highlightedHtml = html.replace(new RegExp(`(?![^<>]*>)${escapeRegExp(searchQuery)}`, 'gi'), '<span class="highlight">$&</span>');
    return highlightedHtml;
  }
  
  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
  }


  function removeSelectedLinks() {
    var selectedLinks = document.getElementsByClassName('selected');
    for (var k = 0; k < selectedLinks.length; k++) {
      selectedLinks[k].classList.remove('selected');
    }
  }

  // Inizio script di ricerca
  function searchInReleaseNotes() {
    searchQuery = document.getElementById("search-input").value;
  
    //EASTEREEEEEEGGGGG AHAHAHAHAH BY SAYMON MUSK ZUCKERBERG BEZOS SUS
    if (searchQuery.toLowerCase() === "uomoditest" || searchQuery.toLowerCase() === "saymonmusk") {
      // Mostra la GIF al posto di eseguire la ricerca
      document.getElementById("releaseContent").innerHTML = '<img src="../it/images/easteregg.gif" alt="GIF">';
      document.getElementById("search-results-menu").style.display = "none";
    } else {
      var filename = "./scripts/md_files_paths.txt"; // Nome del file contenente i percorsi
  
      // Crea una nuova richiesta per ottenere il file di testo
      var xhr = new XMLHttpRequest();
      xhr.open('GET', filename, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            var fileContents = xhr.responseText;
            var releaseNoteFiles = fileContents.split("\n").map(function(line) {
              var match = line.match(/"([^"]+)"\s+"([^"]+)"/);
              if (match) {
                return {
                  filePath: match[1],
                  fileName: match[2]
                };
              } else {
                return null;
              }
            }).filter(function(file) {
              return file !== null;
            });
  
            // Crea un array di promesse per tutte le richieste di file
            var fileRequests = releaseNoteFiles.map(function(file) {
              return fetch(file.filePath).then(function(response) {
                if (response.ok) {
                  return response.text();
                }
                throw new Error("Errore nella richiesta del file: " + file.filePath);
              });
            });
  
            // Esegui tutte le richieste contemporaneamente utilizzando Promise.all
            Promise.all(fileRequests)
              .then(function(fileContents) {
                var searchResults = [];
                // Cerca la parola in tutti i contenuti dei file
                for (var i = 0; i < fileContents.length; i++) {
                  var fileContent = fileContents[i];
                  var matches = fileContent.match(new RegExp(searchQuery, "gi"));
                  if (matches && matches.length > 0) {
                    // La parola è trovata nel file
                    var release = releaseNoteFiles[i].fileName;
                    var numOccurrences = matches.length;
                    searchResults.push({ release: release, numOccurrences: numOccurrences });
                  }
                }
  
                if (searchResults.length > 0) {
                  // Mostra i risultati nel menu a discesa
                  var searchResultsMenu = document.getElementById("search-results-menu");
                  searchResultsMenu.innerHTML = "";
                  searchResults.forEach(function(result) {
                    var option = document.createElement("option");
                    option.value = result.release;
                    option.text = result.release + " (" + result.numOccurrences + ")";
                    option.setAttribute("data-release", result.release);
                    option.setAttribute("data-release-path", result.filePath); // Aggiungi attributo "data-release-path" con il percorso del file
                    searchResultsMenu.add(option);
                  });
                  searchResultsMenu.style.display = "block";
  
                  // Rimuovi la selezione predefinita se ci sono risultati
                  searchResultsMenu.selectedIndex = -1;
                  searchResultsMenu.size = searchResults.length + 1;
                  handleSearchResultsMenu(searchQuery);
                } else {
                  // Nessun risultato trovato
                  document.getElementById("releaseContent").innerHTML = '<p><font color="red"><b>Errore: <font color="black">Nessun risultato trovato, la invitiamo a riprovare.</p></b>';
                  document.getElementById("search-results-menu").style.display = "none";
                }
              })
              .catch(function(error) {
                console.error("Errore nella richiesta dei file:", error);
                document.getElementById("releaseContent").innerHTML = '<p><font color="red"><b>Errore: <font color="black">Si è verificato un errore nella ricerca, contattare il supporto se il problema persiste.</p></b>';
              });
          } else {
            console.error("Errore nella richiesta del file:", xhr.status);
            document.getElementById("releaseContent").innerHTML = '<p><font color="red"><b>Errore: <font color="black">Si è verificato un errore nella ricerca, contattare il supporto se il problema persiste.</p></b>';
          }
        }
      };
      xhr.send();
    }
  }
  


  // Nascondi il pulsante di ricerca all'inizio
  var searchButton = document.getElementById("search-button");
  searchButton.style.display = "none";  



  function handleSearchResultsMenu() {
    var selectedFile = searchResultsMenu.value;
    if (selectedFile) {
      var releaseNoteFiles = document.querySelectorAll("[data-release]");
      var filePath = null;
  
      for (var i = 0; i < releaseNoteFiles.length; i++) {
        var file = releaseNoteFiles[i].getAttribute("data-release");
        if (file && file.includes(selectedFile)) {
          filePath = releaseNoteFiles[i].getAttribute("data-release-path");
          break;
        }
      }
  
      if (filePath) {
        var searchIsActive = 1;
        loadReleaseNotes(filePath, searchIsActive, searchQuery);
        removeSelectedLinks();
        var links = document.querySelectorAll("#releaseTree a[data-release]");
        for (var j = 0; j < links.length; j++) {
          var link = links[j];
          if (link.getAttribute("data-release-path") === filePath) {
            link.classList.add('selected');
          } else {
            link.classList.remove('selected');
          }
        }
  
        // Mostra il pulsante di ricerca
        searchButton.style.display = "block";
      } else {
        // Nascondi il pulsante di ricerca se nessun elemento corrisponde alla selezione
        searchButton.style.display = "none";
      }
    } else {
      // Nascondi il pulsante di ricerca se nessun elemento è selezionato
      searchButton.style.display = "none";
    }
  }
  
  

  document.getElementById("search-input").addEventListener("input", searchInReleaseNotes);

  var searchResultsMenu = document.getElementById("search-results-menu");

  // Apri il menu a discesa dopo il click
  searchResultsMenu.addEventListener("click", function(event) {
    event.stopPropagation();
    if (searchResultsMenu.size === 1) {
      searchResultsMenu.size = searchResultsMenu.options.length;
    }
  });


  // Aggiungi un gestore di eventi per il clic sull'intero documento
document.addEventListener("click", function(event) {
  var targetElement = event.target; // Ottieni l'elemento su cui è stato effettuato il clic

  // Controlla se l'elemento su cui è stato effettuato il clic è all'interno del menu dei risultati di ricerca
  var isClickInsideMenu = searchResultsMenu.contains(targetElement);

});

// Gestisce la chiusura ad "icona" del menu quando viene cliccato altrove
searchResultsMenu.addEventListener("blur", function() {
  if (searchResultsMenu.size !== 1) {
    searchResultsMenu.size = 1;
  }
});

// Aggiungi un gestore di eventi al documento per chiudere il menu quando si fa clic al di fuori
document.addEventListener("click", function(event) {
  var target = event.target;
  var searchInput = document.getElementById("search-input");

  // Controlla se il clic è avvenuto al di fuori del campo di ricerca o del menu
  if (target !== searchInput && !searchResultsMenu.contains(target)) {
    searchResultsMenu.size = 1;
  }
});

// Aggiungi un gestore di eventi per il campo di ricerca
document.getElementById("search-input").addEventListener("keyup", function(event) {
  var newSearchQuery = event.target.value.trim();

  // Verifica se la nuova query di ricerca è diversa dalla precedente
  if (newSearchQuery !== searchQuery) {
    searchQuery = newSearchQuery;

    // Controlla la lunghezza effettiva del campo di ricerca
    if (searchQuery.length === 0) {
      searchResultsMenu.style.display = "none";
      searchButton.style.display = "none";
    } else {
      searchResultsMenu.style.display = "block";
      searchButton.style.display = "none";
    }
  }

  // Controlla se il campo di ricerca è vuoto
  if (searchQuery.length === 0) {
    searchResultsMenu.style.display = "none";
    searchButton.style.display = "none";
  }
});


// Aggiungi un gestore di eventi per il clic al di fuori del menu
document.addEventListener("click", function(event) {
  var target = event.target;

  // Verifica se il clic è avvenuto al di fuori del menu e del campo di ricerca
  if (!searchResultsMenu.contains(target) && target !== document.getElementById("search-input")) {
    // Controlla se il campo di ricerca è vuoto
    if (document.getElementById("search-input").value.trim().length === 0) {
      searchResultsMenu.style.display = "none";
      searchButton.style.display = "none";
    }
  }
});


document.getElementById("search-input").addEventListener("input", function(event) {
  var searchQuery = event.target.value;
  console.log(searchQuery);
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1; // I mesi in JavaScript sono indicizzati da 0 a 11, quindi aggiungi 1
  var year = currentDate.getFullYear();
  
  // Aggiungi uno zero iniziale se il giorno o il mese è inferiore a 10
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  
  var formattedDate = day + '-' + month + '-' + year;

  // DIVENTA GIORNO-MESE-ANNO Es: 06-07-2023

  if (searchQuery === formattedDate) {
    document.getElementById("InProgress").style.display = "block";
  } else {
    document.getElementById("InProgress").style.display = "none";
  }
});



searchResultsMenu.addEventListener("change", handleSearchResultsMenu);

});
