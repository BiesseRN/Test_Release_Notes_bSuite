**NUOVE FUNZIONALITA'**

***

**B_SUITE 4.1.0.121** 

***

**Feature 197422: [bSuite][bNest] Ottimizzazione sul trasferimento file a seguito dell’import di più articoli che riferiscono lo stesso file** 


E' stata ottimizzata la gestione del trasferimento e archiviazione dei file di programma (bSolid, cix, ...) associati agli articoli da importare (da csv, da file, ecc.) facendo in modo di trasferire un solo file nel caso più articoli riferiscono lo stesso file, o di non trasferire i file nel caso siano già presenti in archivio.  
Questa ottimizzazione può rendere più "leggeri" i backup di bNest.

***

**Feature 197423: [bSuite][bNest] Ottimizzazione dell’archivio file quando più articoli riferiscono lo stesso file**  

E' stata ottimizzata la gestione dell'archivio file dell'applicazione facendo in modo che quando più articoli riferiscono lo stesso file di programma (bSolid, cix, ...) in archivio ce n'è sempre una sola copia.  
Questa ottimizzazione può rendere più "leggeri" i backup di bNest.

***

**Feature 197424: [bSuite] [bNest] Nesting con tecnologia indotta**  

E' stata aggiunta una nuova tecnologia automatica che permette di applicare una fresatura intorno ad ogni singolo pezzo dello schema di nesting. Questa funzionalità è molto utile nel caso di pezzi composti da sole geometrie.  
Per attivare questa funzionalità basta andare nei parametri di progetto e selezionare "Fresatura a pezzo singolo" nel tipo di fresatura della tecnologia automatica.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197424_01.jpeg)

Per impostare tutti i parametri tecnologici e di comportamento della fresatura a pezzo singolo, basta andare nella specifica scheda

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197424_02.jpeg)

Tra i parametri di comportamento di questa scheda particolarmente importanti sono quelli relativi alla gestione del punto di attacco, che offrono la possibilità di decidere in quale punto del pezzo posizionare il punto di attacco (es. sul tratto più lungo, in base all'ordine di distacco dei pezzi, prediligendo i tratti lineari, ...).

***

**Feature 197426: [bNest] Spostamento manuale degli ingressi**  

E' stata aggiunta la possibilità di spostare la posizione degli ingressi delle fresature su pezzo singolo, direttamente dall'ambiente di modifica manuale.  
Si può spostare l'ingresso del singolo pezzo, di una selezione di pezzi o dell'intero schema.  
Per farlo ci sono varie modalità:  

· Usando il gruppo di comandi automatici ![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197426_01.png) che permette di posizionare il punto di ingresso con le stesse possibilità offerte dai parametri di elaborazione:  
· In posizione predefinita  
· Il tratto più lungo  
· Verso il bordo più vicino della lastra  
· Verso il centro della lastra  
· Usando il gruppo di comandi manuali ![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197426_02.png)che permettono di far ruotare il punto di ingresso intorno al pezzo a passi discreti in entrambi i versi, sia tramite click sui bottoni (e relativi shortcuts coi tasti Ctrl e '+' e Ctrl e '-'), sia attraverso uno specifico controllo cursore dove si riesce a percorrere un intero giro intorno al pezzo  
- Usando direttamente la rotellina del mouse in combinazione con il tasto Ctrl. Si può applicare su un singolo pezzo posizionandoci sopra il mouse oppure se si vuole agire sui pezzi selezionati, basta posizionare il mouse nel vuoto. Ruotando la la rotellina si otterrà lo spostamento del punto di ingresso nei pezzi interessati

***

**Feature 197427: [bSuite][bNest] Creazione automatica di un nuovo progetto per i pezzi mancanti dei progetti elaborati (modalità statica) – porting da bOpti**  

La funzionalità "Reintegro pezzi mancanti" cerca tra i progetti selezionati i pezzi che non sono stati inseriti nei risultati e li inserisce in un nuovo progetto o in uno già esistente.  
Il comando è contraddistinto dalla icona ![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197427_01.png) ed è disponibile sia nella vista della lista dei progetti  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197427_02.png)

sia nella vista di dettaglio del progetto  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197427_03.png)

***

**Feature 197428: [bNest] Tabella dei progetti integrata con nuovi campi: lastre, resti aree, ecc. – porting da bOpti**  

La tabella dei progetti presenta dei nuovi campi che riportano alcune informazioni generali del progetto e alcune informazioni tratte dai risultati.  
Informazioni generali: Cartella di appartenenza, [Somma di] Quantità di linee, Numero di linee, Essenze, Spessori.  

Informazioni dai risultati: Lastre, Resti, Lastre + Resti, Numero schemi, Area totale, Percentuali di utilizzo, Area utilizzata (misura e %), Area inutilizzata (misura e %), Area lastre (misura e %), Area resti (misura e %), Costo materiali, Costo totale, Resto riutilizzabile (misura e %).  

Nell'immagine sotto si possono vedere alcuni dei nuovi campi:  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197428.png)

***

**Feature 197429: [bNest] Rebranding software - Step 2 (completamento integrazione icone)**  
Le modifiche introdotte con la nuova interfaccia di bNest riguardano puramente lo stile grafico e non alterano il funzionamento dei comandi dell’applicativo.

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197429.png)

I principali cambiamenti sono:  

· Sostituzione icone nei vari ambienti  
· Rivisitazione stili schede degli ambienti  

***

**Feature 197430: [bNest] Refactoring per passaggio a 64bit (Step1)**  

A partire dal rilascio di bSuite 4.1.0.X bNest è un'applicazione con architettura a 64 bits e può essere utilizzata solo su sistemi con Windows 10 (64 bits) o superiori.

***

**Feature 197431: [bSuite][bNest] Pulizia bNest legata a phase-out di NextStep**  

bNest non supporta più la macchina Nextstep, non è più possibile elaborare progetti di nesting per questa macchina.

***

**Feature 197432: [bSuite][bNest] Calcolo dei punti di attacco in relazione agli ordinali di distacco**  

Il calcolo della posizione dei punti di attacco in relazione agli ordinali di distacco è una funzionalità che serve a favorire la stabilità dei pezzi nella fase di lavorazione in macchina degli schemi di nesting, ed in particolare nelle lavorazioni di distacco.  
In contesto di "fresature a pezzo singolo" le lavorazioni di distacco vengono aggiunte ai pezzi, ed è possibile decidere quale sia il miglior punto di approccio per la lavorazione di distacco di ciascun pezzo.  
Tipicamente le possibilità di scelta per la posizione del punto di approccio per un pezzo sono in relazione allo schema (verso il centro, verso la periferia), o rispetto alla conformazione del pezzo stesso (sul punto programmato originariamente, sul tratto più lungo).  
Per favorire però la stabilità dei pezzi in fase di elaborazione è anche disponibile la possibilità di mettere in correlazione la sequenza di distacchi, che si desidera imporre ai pezzi, e la posizione dei punti di approccio per le stesse lavorazioni di distacco.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_01.png)

Tra i parametri di elaborazione, nella sezione relativa alla "fresatura a pezzo singolo", è possibile selezionare tutte le "regole" per decidere il punto migliore, sul contorno del pezzo, in cui inserire il punto di approccio delle lavorazione di contornatura\distacco.  
Come si vede in figura è possibile scegliere delle modalità di inserimeno rispetto allo schema o alla forma del pezzo...  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_02.png)

.. ed è possibile combinare la scelta rispetto alla forma dei pezzi  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_03.png)

Ricordiamo che In BNEST sono disponibili delle modalità di associazione di numeri ordinali ai pezzi, che rappresentano la sequenza di distacco dei pezzi dalla lastra. Ricordiamo anche che ci sono parametri che regolano l'attribuzione di tali ordinali ai pezzi secondo regole precise (dalla dimensione dei pezzi, alla loro posizione sulla lastra)  
Per quanto riguarda quindi la scelta della posizione dei punti di approccio in un contesto in cui siano stati assegnati degli ordinali ai pezzi in uno schema, in aggiunta alle possibilità pilotate dai parametri riportati nelle figure sopra, è disponibile anche una modalità di lavoro in cui si tenga conto anche delle relazioni di adiacenza dei pezzi nei risultati, considerandone in particolar modo i numeri ordinali associati dal sistema, relativi alla sequenza di distacco.  
Il principio operativo che caratterizza questa funzionalità consiste nel fatto che, per favorire la stabilità dei pezzi durante la vera e propria lavorazione in macchina di uno schema di nesting, il punto di approccio per la lavorazione di distacco di un pezzo, andrebbe preferibilmente sempre posizionato nei tratti del profilo del pezzo che si trovano ad essere adiacenti a:  

1. Una zona dello schema senza pezzi posizionati, ossia di lastra "piena", non lavorata  
2. Una zona dello schema con dei Resti (che verranno sicuramente distaccati alla fine, il che equivale ad avere una lastra piena e non lavorata al momento del taglio del pezzo in questione)  
3. Altri pezzi posizionati, ma preferibilmente con ordinale maggiore, ossia che verranno tagliati successivamente al pezzo in questione (il che equivale ad avere una zona di legno pieno al momento del taglio del pezzo in questione)  

Se infatti immaginiamo la lavorazione di taglio di un pezzo, e che il punto di approccio sia collocato in una zona nei pressi della quale, durante la lavorazione, non c'è legno (perché c'erano pezzi, ma sono stati già tagliati e quindi il meccanismo del vuoto in macchina ha meno "presa"), la lavorazione di distacco inizierà e terminerà in un punto "delicato" e, in particolare sul finire della lavorazione, l'unica porzione di legno "salda" sarà sempre più piccola.  
Al contrario se un punto di approccio è collocato in modo da avere una larga porzione di legno "ben tenuto" dal vuoto nelle sue vicinanze, allora la lavorazione inizierà e terminerà in un contesto di solidità e stabilità maggiori.  
Con la funzionalità "Calcolo dei punto di attacco in relazione agli ordinali di distacco" è possibile imporre automaticamente il posizionamento dei punti di approccio anche nel rispetto delle relazioni di adiacenza 1, 2, 3, e, una volta soddisfatte queste, cercare di rispettare più possibile le regole imposte rispetto alla posizione sulla lastra o rispetto, ad esempio, al tratto più lungo.  
Sostanzialmente ci sono dei parametri per regolare la ricerca dei punti di approccio rispetto ai numeri ordinali associati ai pezzi adiacenti nei vari tratti che compongono il contorno di un certo pezzo. Una volta isolati tali tratti di contorno, nell'ipotesi di trovarne più di uno, su di essi verranno applicati i parametri definiti normalmente (quelli delle figure sopra, come ad esempio scegliere il tratto più lungo).  
Nella figura sotto riportiamo i parametri per attivare e regolare tale modalità di ricerca della posizione dei punti di approccio.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_04.png)

Il primo parametro permette di decidere se effettivamente tenere conto delle relazioni di adiacenza e degli ordinali assegnati per il posizionamento del punto di approccio sui vari pezzi.  

Ricordando che i pezzi possono avere le forme più svariate, gli altri due parametri servono per definire  

· Il concetto di adiacenza, determinando cosa si intenda per "vicinanza" tra due pezzi  
· La minima lunghezza per definire un tratto come "tratto di adiacenza", candidandolo alla collocazione del punto di approccio  

Nelle sessioni di Editing Manuale degli schemi, in cui l'utente può modificare le posizioni dei pezzi, visto che vengono ad essere potenzialmente modificate sia le relazioni di adiacenza che gli ordinali di distacco, sono presenti automatismi e comandi per mantenersi coerenti il più possibile con le regole impartite in fase di elaborazione.  
La posizione del punto di approccio di una lavorazione di distacco potrà subire modifiche automatiche in conseguenza ad un movimento di uno o più pezzi (il pezzo in questione o gli adiacenti) o alla modifica dell’ordinale di sequenza di distacco (per il pezzo in questione o per gli adiacenti).  
Il sistema permette anche di manipolare manualmente la posizione del punto di approccio, e se per un pezzo poi si decide manualmente di fissarla, allora, con delle opportune attivazioni, potrà essere preservato anche rispetto a movimentazioni e modifiche successive.  
D'altro canto, se un utente avesse stabilito per un pezzo un posizionamento di un punto di approccio, ma poi ripensasse alla collocazione del pezzo o dei pezzi vicini sullo schema, è possibile re-innescare il calcolo del punto di approccio in modo coerente.

***

**Feature 197433: [bSuite][bNest] Problemi di precisione con gli spessori dei pezzi e delle lastre\resti**  

E' stato risolto il problema di precisione dando la possibilità all'utente di gestire la tolleranza

***

**Feature 197434: [bNest] Cambio complessità password per installazioni software**  

Cambiata la complessità della password di accesso al Database  

· Criptata la Password  
· Creata una nuova istanza SQL -> BNEST\_19\_2


**Feature 197435: [bSuite] [bNest] Avvio del configuratore senza aspettare la chiusura in fase di installazione**  

Aggiunto, nella esecuzione batch del configuratore, l'avvio del ripristino dopo il termine del processo dell'installatore

***

**Feature 197436: Ottimizzatore: eliminare legame dal dato "CentroCAM" della testa**  

Questo sviluppo ha modificato il significato di un parametro in interfaccia, che si chiamava “Centro CAM” e che ora assume un significato diverso, ovvero quello di “Centro ISO”. Questo parametro si trova nei Dati Macchina, nella sezione “Unità operatrici”, ed è presente per ognuna di esse:  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197436.png)

Fino alla versione precedente, per le macchine importate (Rover, Winline, Eko), questo valore assumeva un doppio significato:  

· Per il CAM, il centro rappresentava un contenitore di una o più teste (o unità operatrici), pertanto il parametro indicava per ogni testa il suo “centro” di appartenenza, e veniva utilizzata sia dall’ottimizzatore che dal CAM per i suoi ragionamenti;  
· Per il PostProcessor indica la sezione all’interno del file ISO in cui quella testa viene esportata, contenendo le rispettive istruzioni ISO che quella testa esegue in macchina.  

Con questo sviluppo, è rimasto invariato il significato per il PostProcessor, mentre nel CAM\ottimizzatore viene calcolato tutto internamente, basandosi su ragionamenti legati agli assi e agli ingombri delle teste. Per questo motivo, in interfaccia il parametro assume il nome di “Centro ISO” e il suo significato resta solo quello legato al PostProcessor; in più, non saranno più presenti messaggi di diagnostica del CAM con errori relativi a questo parametro, dato che il CAM ora è indipendente da esso.  
Questo sviluppo permette anche all’ottimizzatore di avere maggiore autonomia nelle scelte dell’ordine delle lavorazioni e dei cambi utensili, e dai risultati di alcuni test interni, ha migliorato le prestazioni di alcuni casi specifici, in particolare sulle Rover Edge.  
Per le macchine non importate (es. Modulo, NextStep) quel parametro non aveva significato relativamente al PostProcessor, in quanto per queste il centro ISO di esportazione è unico; per questo motivo, per queste macchine, la modifica non ha effetto, visto che non era comunque un dato utilizzato.  
In aggiunta a questo sviluppo, è stato modificato anche il valore del parametro “Testa interferente” (si trova sotto a “Centro ISO”).  
In precedenza, questo era sempre vuoto, tranne nei casi in cui i dati del controllo numerico (CN) lo popolavano; ora bSuite è indipendente da questo concetto, e il campo viene riempito in base a calcoli interni, indicando per ogni testa se ne esiste un’altra (o più di una) che possa andare in conflitto di interferenza su almeno un asse (esempio: le macchine Rover doppio carro Y, hanno due teste in cui la X è condivisa e la Y no, pertanto possono andare in interferenza tra loro, e avranno il rispettivo campo riempito).

***

**Feature 197437: [bSuite] visualizzare nel tooltip in timeline la riga iso (anziché il suo nome)**  

E' stato modificato il contenuto del tooltip della Riga ISO in Timeline: non sarà più scritto il nome della Machine Operation, ma la stringa contenuta nel campo "Riga ISO" al suo interno.

***

**Feature 197442: [bSuite] Toolpath 3DE ottenuto tramite compensazione utensile sfruttando libreria WRT**  

La modifica dell’algoritmo di calcolo del toolpath in compensazione (3DE), come potevasi prevedere, ha portato al fallimento di numerosi test automatici, alcuni dei quali sono stati semplicemente rivalidati, mentre altri, non potendo essere rivalidati perché andavano in errore, sono stati risolti in altro modo e sono elencati di seguito.  

**Fallimenti dei programmi in Gantry.**  

Alcuni programmi che con il vecchio algoritmo risultavano erroneamente come nella figura seguente  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_01.png)

Ora si presentano, come realmente sono eseguiti in macchina.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_02.png)

E’ chiaro che questi programmi erano errati e realizzavano sul pezzo lavorazioni non corrette.  

Questo tipo di test è stato modificato.  

**Fallimenti dei programmi con Link tra una lavorazione e l’altra.**  

Programmi in cui i toolpath erano collegati perché (erroneamente) allineati,  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_03.png)

con il nuovo calcolo toolpath (più corretto) non eseguono più il link tra una lavorazione e l’altra anche se stiamo parlando di decimi di millimetro.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_04.png)

Il problema è dovuto a seguente parametro presente nei “Dati ottimizzatore” del documento,  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_05.png)

che ha un default di 0 e zero significa proprio ZERO.  
In questo caso interveniamo in due punti nel codice.  
Il primo punto è nel CAM dove andiamo ad utilizzare una tolleranza di 0.1mm anche dove l’utente avesse impostato zero come “Massimo disallineamento XY”.  
Il secondo punto è nel valore di default di questo parametro per i nuovi documenti che nella prossima versione sarà impostato a 1 mm.  
Nei programmi dove “Massimo disallineamento XY” è impostato a zero e la tolleranza di 0.1 non dovesse essere sufficiente sarà necessario aumentare il valore di “Massimo disallineamento XY” o modificare il programma.  

**Fallimenti dei programmi di Nesting.**  

Con l’introduzione della nuova libreria di Offset WRT, bNest ha riscontrato diversi fallimenti nei test che potranno essere risolti solo con nuovi sviluppi della Nestlib disponibili a partire dal 04/2023.  
Per ovviare alle regressioni allora si è deciso quanto segue: bSolid uscirà con una modalità compatibile con le vecchie versioni.  
Per default non utilizzerà la libreria di offset del WRT.  
Nel file BswFiles\IniFiles\CamSwitcher.ini sarà infatti presente il seguente flag  

[Toolpath]  

useOld3de=1  

Il cliente che vorrà usufruire della nuova libreria di offset dovrà disabilitare il flag come segue  

[Toolpath]  

useOld3de=0 

***

**Feature 197443: [bSuite][bSolid] Integrare l’informazione nel manuale di generazione wireframe durante l'import**  

Nel manuale è stata completata la descrizione della funzionalità di generazione wireframe durante l'import indicando che non è disponibile per i formati DXF ed STL.

***

**Feature 197444: [bSuite] Possibilità di filtrare utensili attrezzati in macchina nei plugin di lavorazione**  

É stato introdotto un check che permette la visualizzazione dei soli utensili attrezzati tra i filtri della selezione utensili. Come gli altri filtri viene resettato ad ogni apertura ed il suo stato non é memorizzato.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197444.png)

***

**Feature 197445: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Polilinea"**  

Nell'area CAD è stata nascosta la sezione "Dati CAM" presente nel tab "Avanzate" del plug-in "Polilinea"

***

**Feature 197446: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Punto"**  

Nell'area CAD è stata nascosta la sezione "Dati CAM" presente nel tab "Avanzate" del plug-in "Punto"

***

**Feature 196242: [bNest] Comando di cancellazione di un sottoprogetto**  

Nella definizione di sottoprogetto è stata aggiunta la funzionalità relativa alla sua cancellazione.  
Il comando è:  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196242_01.png)

Il comando è disponibile anche sulla definizione di sottoprogetto della pagina dei risultati (sottoprogetto elaborato):  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196242_02.png)

L’utilizzo del comando elimina il sottoprogetto, le relative linee di progetto e i relativi risultati dell’elaborazione.  
Il salvataggio renderà effettive le modifiche fatte.

***

**Feature 196245: [bNest] Gestione della convenienza di un sottoprogetto**  

È stata data la possibilità all’utente di stabilire se un sotto-progetto è conveniente o meno.  
Per farlo sono stati messi a disposizioni due parametri di elaborazione che permettono di stabilire una soglia di convenienza:  

· Per percentuale pezzi: un progetto è sconveniente se la percentuale di area dei pezzi inseriti rispetto all’area totale delle lastre usate è inferiore alla soglia impostata  
· Per superficie di scarto totale: un progetto è sconveniente se l’area di scarto totale è superiore alla soglia impostata  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.025.png)  

I due parametri possono anche essere combinati; in tal caso il sotto-progetto risulta sconveniente se almeno una delle due soglie non è stata rispettata.  
Una volta impostate le soglie, se si procede con l’elaborazione del progetto, nell’ambiente dei risultati verranno contrassegnati con un triangolo rosso tutti i sotto-progetti che non rispettano le rispettive soglie impostate.  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.026.png)  

Andando con il mouse sopra il triangolo rosso apparirà un tooltip con la motivazione per cui il sotto-progetto risulta sconveniente  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.027.png)  

***

**Feature 197859: [bNest] (SRFT23009) (Cliente KXN) rendere disponibile nei tracciati MNO generati da B\_NEST il dato densità associato alle lastre**  

Il file MNO, creato da bNest in fase di elaborazione, contiene l’elenco degli schemi di taglio ottenuti. Ad ogni schema di taglio è associata l’informazione relativa alla lastra utilizzata dallo schema stesso.  
All’interno di queste informazioni è stata aggiunta quella relativa alla densità.  
Per impostare la densità di una lastra:  

- Aprire l’anagrafica delle lastre  
- Aprire una lastra  
- Impostare il valore relativo alla densità  
![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.028.png)  

Per leggere l’informazione relativa alla densità della lastra utilizzata da uno schema di taglio è sufficiente aprire l’MNO trasmesso in macchina e cercare il nodo <FOGLIO> d’interesse.  

Tale nodo contiene il sotto-noto <SheetInfo>, il quale contiene la proprietà “Density” valorizzata col valore impostato in bNest.  
![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.029.png)  

**Feature 197495: [bSuite][bNest] Gestione transitorio per libreria offset Nestlib: utilizzo della vecchia traiettoria 3DE**  

Nel caso in cui il cliente avesse bisogno di utilizzare il nuovo algoritmo per il calcolo della nuova traiettoria 3DE, è necessario contattare Software.Support per eseguire una verifica.

***

**Feature 196093: [bSuite] Gestione WTT tra macchine P&R**  

Abilitando il nuovo Flag “Mantieni attrezzaggio piani con macchina differente” (Tab – “Imp generali”? [DA DEFINIRE]) ci si aspetta che aprendo un file.bSolid con un attrezzaggio piani, questo venga mantenuto indipendentemente dalla macchina attiva, a patto che questa sia P&R.  
Nel fare questo, bSuite eseguirà un controllo di fattibilità e quando non sarà possibile applicare l’attrezzaggio del programma (vedi casi sotto) sarà generato un WARNING (giallo) all’apertura dello stesso in ambiente CAD. Il warning in questione proporrà il messaggio generico “ATTENZIONE: non è stato possibile applicare l’attrezzaggio piani originale del programma” (quindi senza alcuna diagnostica avanzata).     L’applicazione dell’attrezzaggio originale del programma non sarà applicato nei seguenti casi:  

- L’origine selezionata nell’attrezzaggio piani originale NON è presente sulla macchina attualmente attiva  
- L’attrezzaggio piani originale genera delle collisioni fra piani e/o carrelli della macchina attualmente attiva  
- Il posizionamento dei piani e/o carrelli dell’attrezzaggio originale non è compreso nei limiti degli assi della macchina attualmente attiva  
- Non viene gestita la modalità MULTIPANNELLO: l’attrezzaggio piani originale è stato creato in modalità multipannello, oppure il parametro è abilitato sulla macchina attiva  
- Non vengono gestite le macchine FT: l’attrezzaggio piani è stato creato su una macchina FT e/o la macchina attiva è una macchina FT  

Aprendo un programma direttamente dall’ambiente Distinta, ci si aspetta il medesimo comportamento: nella parte bassa dello schermo sarà visualizzato lo stesso Warning spiegato al PT precedente.  
La funzionalità dovrà gestire anche il caso di attrezzaggio con formule parametriche nella posizione dei piani e carrelli.  
Nel caso di molteplici files di attrezzaggio piani salvati in un programma, verrà applicato l’ultimo attrezzaggio salvato (in ordine cronologico).  
La descrizione del parametro nel manuale utente dovrà essere la seguente: “Abilita (casella marcata) o disabilita la gestione del posizionamento dei piani e carrelli salvato in un programma su macchine differenti rispetto a quella con cui è stato creato.  

NOTA: l'attrezzaggio piani originale del programma non sarà applicato nei seguenti casi:  

- L’origine selezionata nell’attrezzaggio piani originale NON è presente sulla macchina attualmente attiva  
- L’attrezzaggio piani originale genera delle collisioni fra piani e/o carrelli della macchina attualmente attiva  
- Il posizionamento dei piani e/o carrelli dell’attrezzaggio originale non è compreso nei limiti degli assi della macchina attualmente attiva  
- Non viene gestita la modalità MULTIPANNELLO: l’attrezzaggio piani originale è stato creato in modalità multipannello, oppure il parametro è abilitato sulla macchina attiva  
- Non vengono gestite le macchine FT: l’attrezzaggio piani è stato creato su una macchina FT e/o la macchina attiva è una macchina FT  

***

**Feature 197441: [bSuite] Refactoring per passaggio a 64bit (Step1)**  

bSuite a 64 bit è in grado di gestire più memoria RAM rispetto alle versioni precedenti (32 bit) il che si traduce in un miglioramento delle prestazioni, soprattutto per le funzionalità che richiedono l'elaborazione di grandi quantità di dati.  
Ciò significa che l'applicazione potrebbe elaborare i dati più velocemente e in modo più efficiente, migliorando la produttività e riducendo i tempi di attesa.  
Maggiore stabilità: bSuite a 64 bit può essere generalmente più stabile della versione a 32 bit, sulla medesima funzionalità, poiché può gestire maggiori quantità di memoria e di dati.  
Ciò significa che l'applicazione potrebbe essere meno soggetta a crash e malfunzionamenti dovuti alle limitazioni all'utilizzo della memoria nelle versioni a 32 bit, migliorando l'affidabilità e riducendo il rischio di perdita di dati.  
Maggiore compatibilità: le applicazioni a 64 bit sono compatibili con i sistemi operativi a 64 bit, che stanno diventando sempre più comuni.  

**Feature 198680: [bSuite] Gestione del parametro LPZ/2 (LpzMiddle) nelle lavorazioni di inserimento colla e spina**  

Se nelle lavorazioni di tipo "Inserimento spina/colla" si usa la formula LPZ\2, la spina o la colla verranno inserita sempre a metà pannello, anche dopo aver effettuato in macchina la misura del pannello con il tastatore.  
Verrà generato un iso parametrico. Questa funzionalità è già attiva nella lavorazione della foratura.  

***

**Feature 196248: [bNest] Comando di cancellazione di tutti i sottoprogetti non convenienti**  

Nella gestione del progetto è stata aggiunta la funzione di cancellazione dei sottoprogetti non convenienti.  
Il comando cancella tutti i sottoprogetti elaborati ma identificati come “non convenienti”. La definizione di convenienza viene impostata prima dell’elaborazione e l’elaborazione ne identifica gli schemi e i sottoprogetti. Questa rappresentazione e disponibile solo nella pagina dei risultati Il comando è disponibile sulla colonna di sinistra.

***

**Feature 197541: [bSuite][bSolid] Gestione Tjet in lavorazioni con pressatore a rulli**  

Lo sviluppo riguarda la gestione di lavorazioni in cui viene programmata la presenza sia del T-Jet che del pressatore a rulli.  
Se per una lavorazione vengono abilitati sia il T-Jet che pressare a rulli, bSolid fornirà la priorità al pressatore a rulli e di disattiverà il T-Jet.  

***

**Feature 197540: [bSuite][bNest] Gestione default dell'attivazione del vuoto dinamico**  

L’obiettivo è quello di consentire all’utente di attivare il vuoto dinamico nei programmi degli schemi di taglio, generati da B\_NEST, senza dover necessariamente impostare un comportamento di default nei parametri di B\_SOLID. Nei parametri di elaborazione di B\_NEST, in particolare nella pagina “Parametri di progetto”, scheda “Risultati” viene inserita una nuova sezione, chiamata “Parametri di programma”.  
All’interno di questa sezione viene inserito il parametro “Vuoto dinamico”.  
Tale parametro può avere i seguenti valori:  

- Predefinito  
- Attivo  
- Disattivo  
![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.030.png)  

- Impostando “Predefinito” verrà generato un programma avente come gestione il comportamento di default impostato in B\_SOLID. Impostando “Attivo” o “Disattivo”, verrà generato un programma nel quale il vuoto dinamico sarà forzato ad essere rispettivamente attivo o disattivo.

***

**Feature 196741: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Testo lineare" e "Testo su percorso"**  

Nell' insertore del "Testo lineare" e nell’ insertore del "Testo su percorso"  è stata nascosta la sezione "Dati CAM”:  

![Immagine](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.031.png)  

![Immagine](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.032.png)

***

**Feature 196742: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Spline"**  

Nell' insertore della “Spline” è stata nascosta la sezione "Dati CAM”:  

![Immagine](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.033.png)

***

**Feature 196740: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Selezione Parziale"**  

"Nell' insertore "Selezione Parziale" è stata nascosta la sezione "Dati CAM":  

![Immagine](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.034.png)

***

**Feature 199262: [bNest] Gestione della modalità Common Cut con clonazione**  

Abbiamo eliminato la limitazione che esisteva tra l’applicazione della tecnologia a “fresature in comune” e la possibilità di Clonare i risultati.  
Tipicamente queste due funzionalità erano dissociate e nelle versioni precedenti, qualora si selezionasse “Fresature a tagli in comune” non era possibile attivare anche la clonazione.  
E’ stato deciso di superare questo limite, introducendo quindi la possibilità di coniugare i due approcci, e facendo in modo che, nella maggior parte dei casi, una macchina con doppia testa, possa sfruttare la velocità di lavoro anche della tecnologia a tagli in comune.  
Per riuscire ad impostare, nei parametri di un progetto bNEST, sia la volontà di eseguire la clonazione, che la volontà di eseguire fresature a tagli in comune, è stata eliminata l’inibizione che era presente prima, e che ora, quando si sceglie “fresature a tagli in comune” continua ad esistere solo per l’approccio “Multi-Testa”.  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.035.png)

***

Come si vede in figura ora il segnale “giallo” di inibizione viene ad essere visualizzato solo per la parte di parametri relativi al “Multi-Testa”, mentre la scheda di configurazione dei parametri per la clonazione dei risultati risulta ora accessibile. Per effettuare fresature a tagli in comune l’ordine delle lavorazioni deve essere STRETTAMENTE deciso in fase di generazione dei risultati di nesting e poco è lasciato all’ottimizzatore della time-line di bSOLID.  
Il motivo di questo è che per come è strutturato, l’approccio delle fresature a tagli in comune prevede dei criteri di progressione per la scelta della sequenza dei pezzi da “tagliare”, e poi diviene strettamente rigida la sequenza, poiché, dopo il primo pezzo tagliato per intero, i pezzi adiacenti che vengono scelti, che avranno dei segmenti “in comune” con i pezzi precedentemente tagliati, possono essere lavorati “scendendo in verticale” sul canale della fresature dei contorni dei poligoni precedenti.  
Questo implica che tutte le lavorazioni di fresatura a tagli in comune, con cui si separano i pezzi, dovranno essere inserite in time-line come “strettamente” non ottimizzabili. Dando questo ordine “stretto” alle lavorazioni era impossibile che macchine con testa multipla potessero riuscire a ottimizzare la sequenza “accoppiando” le lavorazioni.  
Con questo sviluppo si è voluto proprio superare questo limite, inserendo nella time-line dei risultati di nesting le lavorazioni “gemelle”, fornite dalla clonazione, in modo “isolato” e ordinato, rispetto agli altri, chiuso in una sezione della time-line, ma “aperte” alla possibilità di essere trattate insieme dall’ottimizzatore di sequenza.  

|**Esempio di sequenza senza Clonazione + Fresatura a tagli in comune**|**Esempio di sequenza con Clonazione + Fresatura a tagli in comune**    

|![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.036.png)  |![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.037.png)|

Come si può notare dalla figura, la sequenza è sempre scandita in ordine stretto, ma in presenza di clonazione vengono accoppiati le parti clonate e sistemate tra separatori.  
In questo modo è garantito l’ordine stretto per la buona riuscita delle lavorazioni di fresatura per il distacco dei pezzi, ma l’ottimizzatore riuscirà ad accoppiare le lavorazioni racchiuse tra separatori, realizzando di fatto il parallelismo, dal momento che i pezzi contenuti in una sezione tra separatori sono, appunto, gemelli e identici.

***

**Feature 200521: [bNest] Possibilità di trasmettere da B\_NEST un’unica distinta che comprenda tutti i sotto progetti del progetto trasmesso**  

Trasmettendo in macchina un progetto contenente diversi sotto-progetti, vengono generate diverse distinte macchina, una per ogni sotto-progetto.  
Ad oggi, per eseguire in macchina l’intero progetto, l’utente dovrebbe aprire una distinta alla volta ed eseguirla.  
L’intento dello sviluppo è quello di fornire, oltre alle distinte di sotto-progetto, una distinta “globale”, per facilitare l’esecuzione in macchina dell’intero progetto.  
La trasmissione in macchina della distinta di progetto è per default disabilitata. Per abilitarla è necessario attivarla nelle impostazioni macchina di B\_NEST, all’interno del gruppo “Trasmissione”  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.038.png)  

Abilitando tale impostazione, in fase di trasmissione, oltre alle distinte di sotto-progetto, verrà inviata anche la distinta di progetto contenente tutti gli schemi di taglio generati dall’elaborazione di tutti i sotto-progetti.  
Tale distinta avrà come nome lo stesso del progetto di B\_NEST (a differenza delle altre, che oltre a tale nome, avranno anche il nome del sotto-progetto)  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.039.png)

***

Coerentemente come avviene per le distinte di sotto-progetto, anche in questo caso l’utente può decidere la tipologia di distinta da generare, scegliendo una delle seguenti tipologie:  

1. Distinta unica per lastre e resti  
2. Distinta unica con separazione tra lastre e resti  
3. Una distinta per lastre e una per resti  

La scelta ti tale tipologia si effettua nelle impostazioni macchina di B\_NEST, all’interno del gruppo “Trasmissione”  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.040.png)  

**Distinta unica per lastre e resti**

Tale tipologia prevede la trasmissione di un'unica distinta contenente l’elenco degli schemi di taglio generati da tutti i sotto-progetti

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.041.png)  

**Distinta unica con separazione tra lastre e resti**  

Tale tipologia prevede la trasmissione di un'unica distinta contenente l’elenco degli schemi di taglio generati da tutti i sotto-progetti, ordinati come segue:  

•	Schemi derivanti da lastre  
•	Elemento di pausa  
•	Schemi derivanti da resti  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.042.png)  

**Una distinta per lastre e una per resti**  

Tale tipologia prevede la trasmissione di due distinte, la prima contenente l’elenco degli schemi di taglio derivanti da lastre mentre la seconda quelli derivanti da resti. La distinta unica delle lastre ha lo stesso nome del progetto, mentre quelle dei resti ha lo stesso nome del progetto seguita dal suffisso “\_W”;  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.043.png)  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.044.png)  

Non è possibile trasmettere la distinta macchina di progetto nelle seguenti situazioni:  

- Qualche sotto-progetto non risulta elaborato  
- Qualche sotto-progetto segnala degli errori di trasmissione  
- Si cerca di trasmettere soltanto alcuni sotto-progetti singolarmente  

In generale la distinta di progetto viene trasmessa soltanto se si esegue la trasmissione totale del progetto senza che nessun sotto-progetto vada in errore. In caso contrario, un messaggio di warning avvisa l’utente del problema  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.045.png)  

***

**Feature 198952: [bSuite] [ASR21500] Morsa orizzontale Uniclamp H74mm con spillini. [CATALOGO]**  

Inserito a catalogo un nuovo clamper orizzontale di H74mm con spillini, il suo codice prodotto è: "ASR21500" mentre il codice tecnico: "AS50100441".

***

**Feature 199857: [OT] Eko 1.1 Redesign gruppo pinza (CR00011030) PR00019778**  

Implementata la modifica tecnica “CR00011030”; qui sotto un’immagine che identifica la modifica eseguita:  

![](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.046.png)

***

**Feature 196008: [bSuite][Rover A HF] Tool Logic Automatic (spesa)**  

La spesa analizza una distinta di programmi (bsolid,.cix,,ISO), trovando la lista degli utensili che sono utilizzati da tutti i programmi contenuti nella distinta. Gli utensili che sono soggetti a più cambi verranno spostati dai magazzini lenti ai magazzini più veloci della macchina.  
Sarà definito un dato macchina che permetterà di definire un utensile/aggregato “non spesabile”.  
In macchina ci possono essere 3 condizioni:  

- **TooLogic automatica** (viene applicato l’attrezzaggio calcolato dall’ algoritmo di spesa solo se conveniente relativamente ai soli tempi di cambio utensile)**  
- **TooLogic sempre attiva** (viene sempre applicato l ‘attrezzaggio calcolato dall’ algoritmo di spesa)  
- **TooLogic disattivata** (non viene applicato l’attrezzaggio calcolato dall’ algoritmo di spesa)**  

La spesa verrà effettuata in questa modalità.  

- Il cliente mette in Start una distinta, che può essere composta da programmi **bSolid**, **cix**, **ISO**.  
  Allo start i programmi che non sono in formato .ISO verranno, grazie al modulo di ottimizzazione, ottimizzati con l’attrezzaggio dei magazzini presente in quel momento in macchina.  
- Terminata la ottimizzazione dei programmi, che trasformerà i programmi bSolid, cix in formato .ISO inizierà, da parte di un ottimizzatore di attrezzaggio dei magazzini, l’ analisi dei programmi ottenuti e alla fine di questa analisi si otterrà un nuovo attrezzaggio dei magazzini e una stima del tempo guadagnato o “perso”, dato dalla differenza tra [i tempi di cambio utensili prima del calcolo del nuovo attrezzaggio] e [il tempo necessario per lo spostamento degli utensili da magazzini lenti a quelli veloci, più il tempo di cambio utensili con il nuovo attrezzaggio].  
- Se ci saranno le condizioni, che sono state riportate nei paragrafi sotto, verrà applicato il nuovo attrezzaggio dei magazzini.  
- Terminato lo spostamento degli utensili, i programmi cix e bSolid verranno ottimizzati di nuovo con il nuovo attrezzaggio dei magazzini.  
- A questo punto verranno eseguiti in macchina i programmi con il nuovo attrezzaggio dei magazzini.  

**NOTA:** A seguito dello sviluppo in oggetto, al primo avvio di bSuite 4.1.0.X, una volta ripristinato un qualsiasi backup verrà richiesto l'allineamento degli utensili.  
**L'allineamento verrà richiesto per tutte le tipologie di macchine.**

***

**Feature 199291: gestione parametro CRT in import cix**  

E' Importato/Esportato nel@ CIX il parametro CRT (Tipo di spigolo) della lavorazione di Fresatura ![Immagine](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.047.png)  

![Immagine](Aspose.Words.adf92199-a553-4311-a96d-acc49cc6bd3b.048.png)  

La sintassi CIX è la seguente  

PARAM,NAME=CRT,VALUE=<valore>   con    <valore>=    0:Ruota attorno;      1:Spigolo vivo

***

**Feature 197509: [bSuite][bSolid] Firma digitale file eseguibili B\_SUITE**  

Gli eseguibili dedicati all'utente finale distribuiti con l'applicativo sono stati firmati digitalmente.  
La firma digitale sugli eseguibili è utile per garantire l'autenticità e l'integrità del software che si sta utilizzando. La firma digitale garantisce che il software è stato compilato e distribuito da Biesse e che quindi non sia stato modificato in alcun modo dalla sua origine.

***

**Feature 197447: [Process] Modifiche a installatore per rimozione supporto macchina Next Step**  

Dalla versione di bSuite 4.1 non sarà più supportata la macchina "Next Step"; durante la fase di installazione sarà disponibile solamente la macchina "Rover FT".

***

**Feature 196084: [bSuite] Integrazione libreria HOOPS**  

In questa nuova versione è stata integrata la libreria Hoops Techsoft3d per l'import dei formati esterni.  
La nuova libreria va in sostituzione della libreria Spatial.  
Questa la lista dei formati supportati:  

ACIS Format (sab)
ACIS Format (* sat)
BiesseWorks Exchange File(* cix)
BiesseWorks File (* bpp)
CATIA V4 Format (*.exp)
CATIA V4 Format (* model)
CATIA V4 Format (* session)
CATIA V5 & V6 Format (*.CATPart)
CATIA V5 & V6 Format (*.CATProduct)
CNI Exchange File(* cid)
Collada (*dae)
DWG Drawing Format 2D (* dwg)
DWG Drawing Format 3D (*dwg)
DXF Drawing EXchange Format 2D (*.dxf)
DXF Drawing EXchange Format 3D (* .dxf)
DXF Drawing EXchange Format Lite (*.dxf)
Feature File (* b Feature)
File bitmap (* bmp)
ICP file (* icp)
IGES Initial Graphics Exchange Specification (* iges)
IGES Initial Graphics Exchange Specification (* igs)
Inventor Format (* ipt)
JPG file (* jpg)
INX Format (* prt)
Parasolid Format (* ×_b)
Parasolid Format (* x t)
Parasolid Format (* xmt bin)
Parasolid Format (* xmt txt)
PDF (* pdf)
PNT Point TextFile (* pnt)
Pro/E / Creo (* prt)
Rhino 3D (*.3dm)
Solid Edge Format (* par)
Solid Edge Format (* psm)
SolidWorks Format (*.sldprt)
STEP Format (*step)
STEP Format (*stp)
STL Stereo Lithography File (* .stl)
TAS Laser Image (* tas)
Technologic DXF File (* .dxf)
VDA-FS Format (* vda)
Wavefront OBJ (* obj)
WRL Virtual Reality Modeling Language (* .wrml)
WRL Virtual Reality Modeling Language (* .wrl)
