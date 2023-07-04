**LISTA PROBLEMI RISOLTI**
 
***

**B_SUITE 4.1.0.121**   

***

**Bug 196134: [bSuite]: PR00018546: bsolid: macro con aggregato da sotto da errore di collisione in ottimizzazione**  

NOTA: è necessario cancellare e reinserire manualmente le macro

***

**Bug 196426: PR00018923: bsolid: crash istantaneo aprendo alcune macro create sulla stessa 4.0**

***

**Bug 196427: PR00019010 [PAV] : problema con il PAV ed il passo di rotazione.**  

NOTE: Per ragioni prestazionali è fortemente consigliato al cliente di usare il parametro 0 nel passo di discretizzazione.  
In questo modo il PAV riesce a scegliere il passo corretto in funzione delle dimensioni del pannello ed ad avere una velocità di esecuzione ottimale.  
![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Bug196427.png)

***

**Bug 196439: [bSuite]: PR00018817: bsolid: opzione di attrezzaggio "Lettura da CN" non riporta mai la posizione del piano 10**  

NOTA: è necessario eseguire l’import del modello macchina

***

**Bug 196535: PR00019128: bSolid: comando "Salva macro con nome" non abilitato nel modulo BASE**  

***

**Bug 196688: [bNest]: PR00019091: bNest: problema con fresature a ghigliottina.**  

***

**Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**  

NOTA: è necessario eseguire l’import del modello macchina con il check “preservare i dati” abilitato

***

**Bug 196872: [OT] LUA ToolLogic P120: problemi modello 3D**  

NOTA: è necessario eseguire l’import del modello macchina con il check “preservare i dati” abilitato e avere una versione PLC uguale o superiore alla 16.2.34.005.

***

**Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**  

NOTA: è necessario eseguire l’import del modello macchina con il check “preservare i dati” abilitato

***

**Bug 197147: PR00019420: Carrelli piani HTS con la pneumatica laterale dal lato sbagliato. In realtà è a destra in bSuite è a sinistra.**

***

**Bug 197197: [OT] - [bSuite] PR00016886: Collisione tra Multifunzione 3+1 e pezzi su due file di Finger se presente una traslazione di pezzi.**

***

**Bug 197468: [AU Issue] PR00008869: Cliente SANELCO Grecia - PROBLEMA CON REGOLAZIONE/MEMORIZZAZIONE OFFSET DI STAMPA ETICHETTA DA LPRINT**

***

**Bug 197469: PR00013881: bsolid: crash sistematico se si provano a selezionare tutte le sezioni per creare la superificie**

***

**Bug 197470: PR00014496: bsolid: swarfing con passate verticali rovina il pezzo nei movimenti di ingresso/uscita**

***

**Bug 197471: PR00015532: bSolid: Errore oltrecorsa UP asse Y**

***

**Bug 197472: PR00015788: bsolid: pezzo rovinato lavorando una polilinea di 2 elementi**

***

**Bug 197473: PR00015892: bSolid: errore AXS\_843=Posizionamento oltre fine corsa software Y UP con file CIX di AlphaCam.**

***

**Bug 197474: [bSuite]: PR00015136: Pannello in errore "Finecorsa software down asse XB1"**

***

**Bug 197476: [bSuite]: PR00018312: bsolid: crash sistematico quando si imposta la "distanza tra passate" di un pocketing a 3.5mm**

***

**Bug 197478: [bSuite]: PR00018760: bedge: bordatura automatica sbaglia la scelta dell'aggregato in base allo spessore bordo**

***

**Bug 197479: [bSuite]: PR00018787: bEdge: Problema sparizione lavorazioni di bordatura dalla Timeline**

***

**Bug 197480: [bSuite]: PR00018824: bSolid: crash sistematico con finitura 3 assi.**

***

**Bug 197481: PR00018997: bSolid: Lavorazione e visualizzazione percorsi errata se backup utilizzato del cliente**

***

**Bug 197486: rimozione dato sottomandrino Aggregato "tipo cambio utensile"**  

NOTA: è stato rimosso il dato "Tipo cambio utensile" dai parametri dei sottomandrini degli aggregati

***

**Bug 197488: [AU Issue] PR00008763: bNest: impossibile processare progetto con 400 articoli (file CIX)**  

***

**Bug 197810: [AU-ISSUE] Tastatore. Collegamento post per PR00019461**  

***

**Bug 196679: [4.1Validation]: shortcut del comando "vista fotorealistica" (Control+Shift+R ) non corretto**  

NOTA: il comando "vista fotorealistica" ora presenta il corretto shortCut "Shift+Alt+P" nel suo tooltip  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Bug197810.png)

***

**Bug 196136: [bSuite]: PR00018836: bSolid: Crash sistematico programma pezzo in macchina con attrezzaggio fatto con un’altra macchina**

***

**Bug 197482: PR00019052: bSolid: il CAD non mostra il percorso corretto di fresatura. In simulazione è OK**  

NOTA: la soluzione al problema va abilitata esplicitamente tramite intervento di configurazione da parte di Software Support

***

**Bug 197483: PR00019150: bSolid: problema di disallineamento tra simulazione CAD e simulazione macchina.**  

NOTA: la soluzione al problema va abilitata esplicitamente tramite intervento di configurazione da parte di Software Support

***

**Bug 198441: [bSuite] [4.1Validation] Velocità d'Impatto e velocità di avvicinamento/uscita in errore e obbligatorio**

***

**Bug 198612: [bSuite] PR00019623: creare il dispositivo di bordatura con gemelli non funziona se il nome supera i 10 caratteri**

***

**Bug 196749: Problema PMOR dopo scambio morse standard (senza manipolatore) - Winline Step 2 prototipo - 1000060407**

***

**Bug 196767: Winline Step2 - 1000060407 - problema simulazione deflettore**  

***

**Bug 197376: [OT] Layout Cuffia Tagliata per MFLama300 - Winline Step2**  

NOTA: è necessario eseguire import della macchina con il check "preservare i dati" attivo.  
Inserimento a catalogo dei modelli di aggregato lama 300 con cuffia dedicata per poter consentire l'attrezzaggio delle due tipologie di cuffia nella stessa macchina come avviene nella realtà. Quindi, in fase di import, non sarà più importata la cuffia parascheggia.

***

**Bug 197821: [Validazione 4.1] Winline Step 2 1000060407: Problema comando "Traslazione con manipolatore" su morse HYPERCLAMP con scambio su stessa fila**

***

**Bug 198431: [bSuite] [4.1Validation] Prototipo Winline Step2 - da import impostare parametro postprocessor VROT\_T = 4000 [CATALOGO]**  

NOTA: è necessario eseguire l'import del modello macchina

***

**Bug 196437: [WRT] - PR00019205: bSolid: Problema fresatura con deflettore. la fresa non mangia correttamente. OK senza deflettore**

***

**Bug 198028: [bNest] [HCL-Nestlib] nel risultato del progetto non vengono inseriti tutti gli articoli e viene usata una lastra in più anche se lo spazio c'è**

***

**Bug 198032: [OT] Prototipo Winline Step2 - collisione con deflettore con NOPRK attivo**

***

**Bug 196768: Winline Step2 - 1000060407 - Installazione B\_SUITE 4.1.0.48 - problema import backup macchina**  

NOTA: è necessario eseguire l’import del modello macchina

***

**Bug 197485: Checklist 3.0.8 - 117 - Crash durante simulazione con "qualità" di simulazione al massimo**

***

**Bug 197484: Checklist 3.0.8 - 099 - Crash in simulazione con pannelli fonoassorbenti**

***

**Bug 198616: [AU-ISSUE] Inserimento spina a LPZ/2 (eko 2.x)**  

NOTA: nelle lavorazioni di tipo "Inserimento spina/colla" è stata aggiunta la possibilità di parametrizzare i valori di "Posizione X", "Posizione Y" con l'utilizzo delle variabili di ambiente; ad esempio è ora possibile utilizzare una formula del tipo "LPZ/2" come valore del campo.

***

**Bug 198326: [OT] [AU-ISSUE] LUA ToolLogic P139: quota Z errata multifunzione in simulazione**

***

**Bug 198313: [bSuite] Distinta bsolid: i programmi ISO non vanno in esecuzione**

***

**Bug 197922: [bSuite] PR00019524: bSolid: problema con una macro, appare errore "Selezionare una geometria".**  

NOTA: è necessario rendere la macro "editata" (aprire la macro in "modifica", modificare un parametro e ripristinarlo, salvare la macro) e successivamente eseguire un calcolo delle lavorazioni

***

**Bug 197342: [bSuite]: PR00017672: bSolid: Problema con correzione raggio utensile con file .STEP**
 
 ***

**Bug 198317: [OT] LUA ToolLogic P136: cuffia lama non collidibile**  

NOTA: E' necessario eseguire l'import del modello macchina

***

**Bug 197589: [Au - Biesse] Simulazione: errate lavorazioni effettuate prima del riposizionamento "non ottimizzabile"**

***

**Bug 197593: [bSuite]: PR00018899: bsolid: ottimizzatore "fori in testa e lista" non funziona correttamente se mancano i fori**

***

**Bug 200371: [bNest] PR00019904: bNest: Problema trasmissione risultato progetto con 380 articoli. Il software va in crash**

***

**Bug 201132: [bNest] PR00019959: bNest: problema con fresature inclinate, nel progetto risultante l'angolo è negativo.**

***

**Bug 199974: Crash import cix versione 4.0**

***

**Bug 196144: [bSuite]: PR00018608: bsolid: la macro per il CLAMEX del cliente lavora male se è presente anche la macro LAMELLO di Biesse**  

NOTA: E' necessario cancellare la macro CLAMEX e reinserirla in modo da applicare la nuova gestione sui parametri.

***

**Bug 199981: [OT] problema grafico carena Rover A1556 1000060444**  

NOTA: E' necessario eseguire l'import del modello macchina

***

**Bug 200462: [4.1Validation]: P30 - Crash B\_SUITE durante l'avvio, se non c'è la cartella bEdge dentro C:\BIESSE\bSuite\Extensions**

***	

**Bug 196764: [bSuite]: PR00019001: Problema parametri fori con valori errati dopo import file CSV in bNest**

***

**Bug 199966: PR00019803: bSolid: Problema con la funzione "COPIA ATTREZZAGGIO"**

***

**Bug 201222: [PAV] PR00020067: bSolid: problema con il PAV "Errore 2024 fine-corsa assi non presenti o non corretti". (anticipata da sp. 2)**

***

**Bug 196156: [bSuite]: PR00017593: bSolid: Errore di traduzione con la lingua olandese**

***

**Bug 198776: PR00019646: bSolid: crash sistematico modificando le dimensioni del pannello**

***

**Bug 202876: [PAV] PR00020190: bSolid: Impossibile ottimizzare le lavorazione. Errore interno 2001 (anticipata da sp. 3)**

***

**Bug 200502: PR00019909: bSolid: Crash bSolid gestendo file CIX da 5Mb**  

NOTA: Per ripetizioni a matrice il CIX, al fine di risparmio di utilizzo di memoria e maggiore velocita nel calcolo e nel caricamento del risultato, non andrebbe programmato inserendo 16000 fori ma utilizzando le ripetizioni e i cicli 'for'.

ciclo for:

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Bug200502_01.png)

ripetizioni:

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Bug200502_02.png)

***

**Bug 203457: [Validation 4.1] Crash sistematico editando una faccia custom**

***

**Bug 201023: [bsuite] PR00019967: La battuta 2 della barra fissa 12 si muove spostando l'origine 13. La barra fissa 12 si muove spostando l'origine 3**

***

**Bug 203118: [AU-ISSUE] PR00020250 - urto foratrice e sistema hyperpod con riposizionamento su piano assistito**

***

**Bug 203013: [4.1Validation] - P60:Crash invio programma in lista da pagina di simulazione**

***

**Bug 203481: [OT] Matricola 1000061428 - grafica macchina errata (fix catalogo)**  

NOTA: è necessario eseguire l'import del modello macchina con il check "Preservare i dati" abilitato. 

***

**Bug 196534: PR00018984: bSolid: collisione non segnalata in simulazione macchina**

***

**Bug 201156: [bSuite] la diagnostica restituisce errore "crash" senza specificare il problema**

***

**Bug 201189: [PAV] PR00019484: bSolid: errore con PAV "Il documento non è multipannello" e crash sistematico successivo.**

***

**Bug 197118: PR00019416: bSolid: manca il manuale in lingua olandese (dutch).**

***

**Bug 200831: [bSuite] Template bSolid con scaricatori area dx sporgenti Rv C matr. 1000058810 (fix catalogo) [CATALOGO]**  

NOTA: è necessario eseguire l’import del modello macchina

***

**Bug 197477: [PktLib]: [bSuite]: PR00018743: bSolid: problema con la lavorazione di svuotamento su file CIX [PocketLib]**

***

**Bug 199300: [bNest] PR00019742: bNest: Errore incomprensibile durante import file CSV. Cannot complete the template ....**

