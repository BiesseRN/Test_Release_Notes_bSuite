<a name="_hlk132712297"></a>Paragrafi

Revisionati:

00

Data Validità:

05/05/2023

B\_SUITE 4.1.0.121

Official Release

Data Emissione: 05/05/2023

Descrizione:

Documento di Release Notes

Revisione:
00
![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.001.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.002.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.003.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.004.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.005.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.006.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.007.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.008.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.008.png)
![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.009.png)![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.010.png)

# **Sommario**
[1   Compatibilità	7](#_toc134177638)

[**1.1 Compatibilità con sistemi operativi	7****](#_toc134177639)

[**1.2 Compatibilità hardware	7****](#_toc134177640)

[**1.3 Compatibilità con altri software (controlli numerici, CAD/CAM, ecc.)	7****](#_toc134177641)

[2	Lista problemi risolti	8](#_toc134177642)

[**2.1 Problemi risolti B_SUITE 4.1.0.121	8****](#_toc134177643)

[**2.1.1 Bug 196134: \[bSuite\]: PR00018546: bsolid: macro con aggregato da sotto da errore di collisione in ottimizzazione**	8](#_toc134177644)

[**2.1.2 Bug 196426: PR00018923: bsolid: crash istantaneo aprendo alcune macro create sulla stessa 4.0**	8](#_toc134177645)

[**2.1.3 Bug 196427: PR00019010 \[PAV\] : problema con il PAV ed il passo di rotazione.**	8](#_toc134177646)

[**2.1.4 Bug 196439: \[bSuite\]: PR00018817: bsolid: opzione di attrezzaggio "Lettura da CN" non riporta mai la posizione del piano 10**	8](#_toc134177647)

[**2.1.5 Bug 196535: PR00019128: bSolid: comando "Salva macro con nome" non abilitato nel modulo BASE**	8](#_toc134177648)

[**2.1.6 Bug 196688: \[bNest\]: PR00019091: bNest: problema con fresature a ghigliottina.**	9](#_toc134177649)

[**2.1.7 Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**	9](#_toc134177650)

[**2.1.8 Bug 196872: \[OT\] LUA ToolLogic P120: problemi modello 3D**	9](#_toc134177651)

[**2.1.9 Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**	9](#_toc134177652)

[**2.1.10 Bug 197147: PR00019420: Carrelli piani HTS con la pneumatica laterale dal lato sbagliato. In realtà è a destra in bSuite è a sinistra.**	9](#_toc134177653)

[**2.1.11 Bug 197197: \[OT\] - \[bSuite\] PR00016886: Collisione tra Multifunzione 3+1 e pezzi su due file di Finger se presente una traslazione di pezzi.**	9](#_toc134177654)

[**2.1.12 Bug 197468: \[AU Issue\] PR00008869: Cliente SANELCO Grecia - PROBLEMA CON REGOLAZIONE/MEMORIZZAZIONE OFFSET DI STAMPA ETICHETTA DA LPRINT**	9](#_toc134177655)

[**2.1.13 Bug 197469: PR00013881: bsolid: crash sistematico se si provano a selezionare tutte le sezioni per creare la superificie**	9](#_toc134177656)

[**2.1.14 Bug 197470: PR00014496: bsolid: swarfing con passate verticali rovina il pezzo nei movimenti di ingresso/uscita**	10](#_toc134177657)

[**2.1.15 Bug 197471: PR00015532: bSolid: Errore oltrecorsa UP asse Y**	10](#_toc134177658)

[**2.1.16 Bug 197472: PR00015788: bsolid: pezzo rovinato lavorando una polilinea di 2 elementi**	10](#_toc134177659)

[**2.1.17 Bug 197473: PR00015892: bSolid: errore AXS_843=Posizionamento oltre fine corsa software Y UP con file CIX di AlphaCam.**	10](#_toc134177660)

[**2.1.18 Bug 197474: \[bSuite\]: PR00015136: Pannello in errore "Finecorsa software down asse XB1"**	10](#_toc134177661)

[**2.1.19 Bug 197476: \[bSuite\]: PR00018312: bsolid: crash sistematico quando si imposta la "distanza tra passate" di un pocketing a 3.5mm**	10](#_toc134177662)

[**2.1.20 Bug 197478: \[bSuite\]: PR00018760: bedge: bordatura automatica sbaglia la scelta dell'aggregato in base allo spessore bordo**	10](#_toc134177663)

[**2.1.21 Bug 197479: \[bSuite\]: PR00018787: bEdge: Problema sparizione lavorazioni di bordatura dalla Timeline**	10](#_toc134177664)

[**2.1.22 Bug 197480: \[bSuite\]: PR00018824: bSolid: crash sistematico con finitura 3 assi.**	10](#_toc134177665)

[**2.1.23 Bug 197481: PR00018997: bSolid: Lavorazione e visualizzazione percorsi errata se backup utilizzato del cliente**	10](#_toc134177666)

[**2.1.24 Bug 197486: rimozione dato sottomandrino Aggregato "tipo cambio utensile"**	11](#_toc134177667)

[**2.1.25 Bug 197488: \[AU Issue\] PR00008763: bNest: impossibile processare progetto con 400 articoli (file CIX)**	11](#_toc134177668)

[**2.1.26 Bug 197810: \[AU-ISSUE\] Tastatore. Collegamento post per PR00019461**	11](#_toc134177669)

[**2.1.27 Bug 197810: \[AU-ISSUE\] Tastatore. Collegamento post per PR00019461**	11](#_toc134177670)

[**2.1.28 Bug 196136: \[bSuite\]: PR00018836: bSolid: Crash sistematico programma pezzo in macchina con attrezzaggio fatto con un’altra macchina**	11](#_toc134177671)

[**2.1.29 Bug 197482: PR00019052: bSolid: il CAD non mostra il percorso corretto di fresatura. In simulazione è OK**	11](#_toc134177672)

[**2.1.30 Bug 197482: Bug 197483: PR00019150: bSolid: problema di disallineamento tra simulazione CAD e simulazione macchina.**	11](#_toc134177673)

[**2.1.31 Bug 198441: \[bSuite\] \[4.1Validation\] Velocità d'Impatto e velocità di avvicinamento/uscita in errore e obbligatorio**	12](#_toc134177674)

[**2.1.32 Bug 198612: \[bSuite\] PR00019623: creare il dispositivo di bordatura con gemelli non funziona se il nome supera i 10 caratteri**	12](#_toc134177675)

[**2.1.33 Bug 196749: Problema PMOR dopo scambio morse standard (senza manipolatore) - Winline Step 2 prototipo - 1000060407**	12](#_toc134177676)

[**2.1.34 Bug 196767: Winline Step2 - 1000060407 - problema simulazione deflettore**	12](#_toc134177677)

[**2.1.35 Bug 197376: \[OT\] Layout Cuffia Tagliata per MFLama300 - Winline Step2**	12](#_toc134177678)

[**2.1.36 Bug 197821: \[Validazione 4.1\] Winline Step 2 1000060407: Problema comando "Traslazione con manipolatore" su morse HYPERCLAMP con scambio su stessa fila**	12](#_toc134177679)

[**2.1.37 Bug 198431: \[bSuite\] \[4.1Validation\] Prototipo Winline Step2 - da import impostare parametro postprocessor VROT_T = 4000 \[CATALOGO\]**	12](#_toc134177680)

[**2.1.38 Bug 196437: \[WRT\] - PR00019205: bSolid: Problema fresatura con deflettore. la fresa non mangia correttamente. OK senza deflettore**	12](#_toc134177681)

[**2.1.39 Bug 198028: \[bNest\] \[HCL-Nestlib\] nel risultato del progetto non vengono inseriti tutti gli articoli e viene usata una lastra in più anche se lo spazio c'è**	13](#_toc134177682)

[**2.1.40 Bug 198032: \[OT\] Prototipo Winline Step2 - collisione con deflettore con NOPRK attivo**	13](#_toc134177683)

[**2.1.41 Bug 196768: Winline Step2 - 1000060407 - Installazione B_SUITE 4.1.0.48 - problema import backup macchina**	13](#_toc134177684)

[**2.1.42 Bug 197485: Checklist 3.0.8 - 117 - Crash durante simulazione con "qualità" di simulazione al massimo**	13](#_toc134177685)

[**2.1.43 Bug 197484: Checklist 3.0.8 - 099 - Crash in simulazione con pannelli fonoassorbenti**	13](#_toc134177686)

[**2.1.44 Bug 198616: \[AU-ISSUE\] Inserimento spina a LPZ/2 (eko 2.x)**	13](#_toc134177687)

[**2.1.45 Bug 198326: \[OT\] \[AU-ISSUE\] LUA ToolLogic P139: quota Z errata multifunzione in simulazione**	13](#_toc134177688)

[**2.1.46 Bug 198313: \[bSuite\] Distinta bsolid: i programmi ISO non vanno in esecuzione**	13](#_toc134177689)

[**2.1.47 Bug 197922: \[bSuite\] PR00019524: bSolid: problema con una macro, appare errore "Selezionare una geometria".**	13](#_toc134177690)

[**2.1.48 Bug 197342: \[bSuite\]: PR00017672: bSolid: Problema con correzione raggio utensile con file .STEP**	14](#_toc134177691)

[**2.1.49 Bug 198317: \[OT\] LUA ToolLogic P136: cuffia lama non collidibile**	14](#_toc134177692)

[**2.1.50 Bug 197589: \[Au - Biesse\] Simulazione: errate lavorazioni effettuate prima del riposizionamento "non ottimizzabile"**	14](#_toc134177693)

[**2.1.51 Bug 197593: \[bSuite\]: PR00018899: bsolid: ottimizzatore "fori in testa e lista" non funziona correttamente se mancano i fori**	14](#_toc134177694)

[**2.1.52 Bug 200371: \[bNest\] PR00019904: bNest: Problema trasmissione risultato progetto con 380 articoli. Il software va in crash**	14](#_toc134177695)

[**2.1.53 Bug 201132: \[bNest\] PR00019959: bNest: problema con fresature inclinate, nel progetto risultante l'angolo è negativo.**	14](#_toc134177696)

[**2.1.54 Bug 199974: Crash import cix versione 4.0**	14](#_toc134177697)

[**2.1.55 Bug 196144: \[bSuite\]: PR00018608: bsolid: la macro per il CLAMEX del cliente lavora male se è presente anche la macro LAMELLO di Biesse**	14](#_toc134177698)

[**2.1.56 Bug 199981: \[OT\] problema grafico carena Rover A1556 1000060444**	14](#_toc134177699)

[**2.1.57 Bug 200462: \[4.1Validation\]: P30 - Crash B_SUITE durante l'avvio, se non c'è la cartella bEdge dentro C:\BIESSE\bSuite\Extensions**	15](#_toc134177700)

[**2.1.58 Bug 196764: \[bSuite\]: PR00019001: Problema parametri fori con valori errati dopo import file CSV in bNest**	15](#_toc134177701)

[**2.1.59 Bug 199966: PR00019803: bSolid: Problema con la funzione "COPIA ATTREZZAGGIO"**	15](#_toc134177702)

[**2.1.60 Bug 201222: \[PAV\] PR00020067: bSolid: problema con il PAV "Errore 2024 fine-corsa assi non presenti o non corretti". (anticipata da sp. 2)**	15](#_toc134177703)

[**2.1.61 Bug 196156: \[bSuite\]: PR00017593: bSolid: Errore di traduzione con la lingua olandese**	15](#_toc134177704)

[**2.1.62 Bug 198776: PR00019646: bSolid: crash sistematico modificando le dimensioni del pannello**	15](#_toc134177705)

[**2.1.63 Bug 202876: \[PAV\] PR00020190: bSolid: Impossibile ottimizzare le lavorazione. Errore interno 2001 (anticipata da sp. 3)**	15](#_toc134177706)

[**2.1.64 Bug 200502: PR00019909: bSolid: Crash bSolid gestendo file CIX da 5Mb**	15](#_toc134177707)

[**2.1.65 Bug 203457: \[Validation 4.1\] Crash sistematico editando una faccia custom**	16](#_toc134177708)

[**2.1.66 Bug 201023: \[bsuite\] PR00019967: La battuta 2 della barra fissa 12 si muove spostando l'origine 13. La barra fissa 12 si muove spostando l'origine 3**	16](#_toc134177709)

[**2.1.67 Bug 203118: \[AU-ISSUE\] PR00020250 - urto foratrice e sistema hyperpod con riposizionamento su piano assistito**	16](#_toc134177710)

[**2.1.68 Bug 203013: \[4.1Validation\] - P60:Crash invio programma in lista da pagina di simulazione**	16](#_toc134177711)

[**2.1.69 Bug 203481: \[OT\] Matricola 1000061428 - grafica macchina errata (fix catalogo)**	17](#_toc134177712)

[**2.1.70 Bug 196534: PR00018984: bSolid: collisione non segnalata in simulazione macchina**	17](#_toc134177713)

[**2.1.71 \[bSuite\] la diagnostica restituisce errore "crash" senza specificare il problema**	17](#_toc134177714)

[**2.1.72 \[PAV\] PR00019484: bSolid: errore con PAV "Il documento non è multipannello" e crash sistematico successivo.**	17](#_toc134177715)

[**2.1.73 Bug 197118: PR00019416: bSolid: manca il manuale in lingua olandese (dutch).**	17](#_toc134177716)

[**2.1.74 Bug 200831: \[bSuite\] Template bSolid con scaricatori area dx sporgenti Rv C matr. 1000058810 (fix catalogo) \[CATALOGO\]**	17](#_toc134177717)

[3	Nuove funzionalità	18](#_toc134177718)

[**3.1 Nuove funzionalità B_SUITE 4.1.0.121	18****](#_toc134177719)

[**3.1.1 Feature 197422: \[bSuite\]\[bNest\] Ottimizzazione sul trasferimento file a seguito dell’import di più articoli che riferiscono lo stesso file**	18](#_toc134177720)

[**3.1.2 Feature 197423: \[bSuite\]\[bNest\] Ottimizzazione dell’archivio file quando più articoli riferiscono lo stesso file**	18](#_toc134177721)

[**3.1.3 Feature 197424: \[bSuite\] \[bNest\] Nesting con tecnologia indotta**	18](#_toc134177722)

[**3.1.4 Feature 197426: \[bNest\] Spostamento manuale degli ingressi**	19](#_toc134177723)

[**3.1.5 Feature 197427: \[bSuite\]\[bNest\] Creazione automatica di un nuovo progetto per i pezzi mancanti dei progetti elaborati (modalità statica) – porting da bOpti**	20](#_toc134177724)

[**3.1.6 Feature 197428: \[bNest\] Tabella dei progetti integrata con nuovi campi: lastre, resti aree, ecc. – porting da bOpti**	21](#_toc134177725)

[**3.1.7 Feature 197429: \[bNest\] Rebranding software - Step 2 (completamento integrazione icone)**	21](#_toc134177726)

[**3.1.8 Feature 197430: \[bNest\] Refactoring per passaggio a 64bit (Step1)**	21](#_toc134177727)

[**3.1.9 Feature 197431: \[bSuite\]\[bNest\] Pulizia bNest legata a phase-out di NextStep**	22](#_toc134177728)

[**3.1.10 Feature 197432: \[bSuite\]\[bNest\] Calcolo dei punti di attacco in relazione agli ordinali di distacco**	22](#_toc134177729)

[**3.1.11 Feature 197433: \[bSuite\]\[bNest\] Problemi di precisione con gli spessori dei pezzi e delle lastre\resti**	24](#_toc134177730)

[**3.1.12 Feature 197434: \[bNest\] Cambio complessità password per installazioni software**	24](#_toc134177731)

[**3.1.13 Feature 197435: \[bSuite\] \[bNest\] Avvio del configuratore senza aspettare la chiusura in fase di installazione**	24](#_toc134177732)

[**3.1.14 Feature 197436: Ottimizzatore: eliminare legame dal dato "CentroCAM" della testa**	24](#_toc134177733)

[**3.1.15 Feature 197437: \[bSuite\] visualizzare nel tooltip in timeline la riga iso (anziché il suo nome)**	25](#_toc134177734)

[**3.1.16 Feature 197442: \[bSuite\] Toolpath 3DE ottenuto tramite compensazione utensile sfruttando libreria WRT**	25](#_toc134177735)

[**3.1.17 Feature 197443: \[bSuite\]\[bSolid\] Integrare l’informazione nel manuale di generazione wireframe durante l'import**	27](#_toc134177736)

[**3.1.18 Feature 197444: \[bSuite\] Possibilità di filtrare utensili attrezzati in macchina nei plugin di lavorazione**	27](#_toc134177737)

[**3.1.19 Feature 197445: \[bSuite\] Nascondere la sezione "Dati CAM" dal plug-in "Polilinea"**	28](#_toc134177738)

[**3.1.20 Feature 197446: \[bSuite\] Nascondere la sezione "Dati CAM" dal plug-in "Punto"**	28](#_toc134177739)

[**3.1.21 Feature 196242: \[bNest\] Comando di cancellazione di un sottoprogetto**	28](#_toc134177740)

[**3.1.22 Feature 196245: \[bNest\] Gestione della convenienza di un sottoprogetto**	29](#_toc134177741)

[**3.1.23 Feature 197859: \[bNest\] (SRFT23009) (Cliente KXN) rendere disponibile nei tracciati MNO generati da B_NEST il dato densità associato alle lastre**	30](#_toc134177742)

[**3.1.24 Feature 197495: \[bSuite\]\[bNest\] Gestione transitorio per libreria offset Nestlib: utilizzo della vecchia traiettoria 3DE**	30](#_toc134177743)

[**3.1.25 Feature 196093: \[bSuite\] Gestione WTT tra macchine P&R**	33](#_toc134177744)

[**3.1.26 Feature 197441: \[bSuite\] Refactoring per passaggio a 64bit (Step1)**	33](#_toc134177745)

[**3.1.27 Feature 198680: \[bSuite\] Gestione del parametro LPZ/2 (LpzMiddle) nelle lavorazioni di inserimento colla e spina**	34](#_toc134177746)

[**3.1.28 Feature 196248: \[bNest\] Comando di cancellazione di tutti i sottoprogetti non convenienti**	34](#_toc134177747)

[**3.1.29 Bug 199300: \[bNest\] PR00019742: bNest: Errore incomprensibile durante import file CSV. Cannot complete the template ....**	34](#_toc134177748)

[**3.1.30 Feature 197541: \[bSuite\]\[bSolid\] Gestione Tjet in lavorazioni con pressatore a rulli**	34](#_toc134177749)

[**3.1.31 Feature 197540: \[bSuite\]\[bNest\] Gestione default dell'attivazione del vuoto dinamico**	34](#_toc134177750)

[**3.1.32 Feature 196741: \[bSuite\] Nascondere la sezione "Dati CAM" dal plug-in "Testo lineare" e "Testo su percorso"**	35](#_toc134177751)

[**3.1.33 Feature 196742: \[bSuite\] Nascondere la sezione "Dati CAM" dal plug-in "Spline"**	37](#_toc134177752)

[**3.1.34 Feature 196740: \[bSuite\] Nascondere la sezione "Dati CAM" dal plug-in "Selezione Parziale"**	37](#_toc134177753)

[**3.1.35 Feature 199262: \[bNest\] Gestione della modalità Common Cut con clonazione**	38](#_toc134177754)

[**3.1.36 Feature 200521: \[bNest\] Possibilità di trasmettere da B_NEST un’unica distinta che comprenda tutti i sotto progetti del progetto trasmesso**	39](#_toc134177755)

[**3.1.37 Feature 198952: \[bSuite\] \[ASR21500\] Morsa orizzontale Uniclamp H74mm con spillini. \[CATALOGO\]**	44](#_toc134177756)

[**3.1.38 Feature 199857: \[OT\] Eko 1.1 Redesign gruppo pinza (CR00011030) PR00019778**	44](#_toc134177757)

[**3.1.39 Feature 196008: \[bSuite\]\[Rover A HF\] Tool Logic Automatic (spesa)**	44](#_toc134177758)

[**3.1.40 Feature 199291: gestione parametro CRT in import cix**	45](#_toc134177759)

[**3.1.41 Feature 197509: \[bSuite\]\[bSolid\] Firma digitale file eseguibili B_SUITE**	45](#_toc134177760)

[**3.1.42 Feature 197447: \[Process\] Modifiche a installatore per rimozione supporto macchina Next Step**	45](#_toc134177761)

[**3.1.43 Feature 196084: \[bSuite\] Integrazione libreria HOOPS**	45](#_toc134177762)

[4	Informazioni d’installazione	47](#_toc134177763)

[**4.1 Operazioni Preliminari	47****](#_toc134177764)

[**4.1.1 Creazione di una copia di backup dei dati**	47](#_toc134177765)

[**4.1.2 Arresto dell'applicazione e del WRT**	47](#_toc134177766)

[**4.1.3 Disinstallazione della versione corrente di bSuite**	48](#_toc134177767)

[**4.1.4 Aggiornamento Driver scheda video dedicata**	49](#_toc134177768)

[**4.1.5 Configurazione scheda video NVidia**	50](#_toc134177769)

[**4.2 Operazioni preliminari su alcuni sistemi operativi	53****](#_toc134177770)

[**4.2.1 Abilitare .NET Framework 3.5 dal Pannello di Controllo**	53](#_toc134177771)

[**4.2.2 Abilitare .NET Framework 3.5 da linea di comando**	53](#_toc134177772)

[**4.3 Installazione di bSuite	54****](#_toc134177773)

[**4.3.1 Opzioni di Installazione**	55](#_toc134177774)

[**4.3.2 Avvio dell'Installazione**	56](#_toc134177775)

[**4.3.3 Attivazione firewall**	57](#_toc134177776)

[**4.4 Operazioni finali	58****](#_toc134177777)

[**4.4.1 Ripristino di una copia di backup**	58](#_toc134177778)

[**4.4.2 Eventuali anomalie riscontrate all'avvio dell'applicazione**	60](#_toc134177779)

[5	Procedura di installazione della licenza di rete del modulo resti di bNest	61](#_toc134177780)

[**5.1.1 Materiale necessario**	61](#_toc134177781)

[**5.1.2 Procedura di installazione e configurazione del server**	61](#_toc134177782)

[**5.1.3 Procedura di configurazione del client**	62](#_toc134177783)

[6  Chiarimenti e informazioni aggiuntive	63](#_toc134177784)

[**6.1 Compatipilità CIX	63****](#_toc134177785)

[**6.2 Semplificazione degli elementi 3D del modello macchina	63****](#_toc134177786)

[7  Localizzazione	64](#_toc134177787)

[8  Storia versioni rilasciate	65](#_toc134177788)




# <a name="_toc134177638"></a>**1   Compatibilità**

<a name="_toc127375271"></a><a name="_toc134177639"></a>**1.1 Compatibilità con sistemi operativi**

---------------------------------------------------------------------------------------------------
B\_SUITE 4.1.0 può essere installato in modalità ufficio sui seguenti sistemi operativi a 64 bit: 

- Windows 10
- Windows 11

Per la modalità “bordo macchina” si rimanda agli appositi documenti di compatibilità.

NOTA: prima di avviare l'installazione di B\_SUITE è necessario assicurarsi che l'utenza in uso abbia i diritti di amministratore del PC

<a name="_toc127375272"></a><a name="_toc134177640"></a>**1.2 Compatibilità hardware**

--------------------------------------------------------------------------------------
B\_SUITE 4.1.0 richiede un PC con almeno la seguente configurazione:

- <a name="_hlk65578557"></a>PC Intel Core I5 o I7
- <a name="_hlk65578568"></a>Almeno 8 GB RAM
- <a name="_hlk65578599"></a>Sistema operativo Windows 10 64 bit o Windows 11 64 bit
- Scheda Grafica nVidia compatibile con OpenGL 4.4 con almeno 2 GB RAM con driver aggiornati all’ultima versione
- Risoluzione minima 1440x900 
- Risoluzione massima 1920x1080 
- Hard Disk di tipo SSD
- Almeno 20 GB di spazio libero su Hard Disk

<a name="_hlk97279649"></a>NOTA: B\_SUITE non può essere installato su macchine virtuali.



<a name="_toc127375273"></a><a name="_toc134177641"></a><a name="_hlk118815157"></a>**1.3 Compatibilità con altri software (controlli numerici, CAD/CAM, ecc.)**

----------------------------------------------------------------------------------------------------------------------------------------------------------------
B\_SUITE 4.1.0 richiede la presenza di:

- WRT <a name="_hlk529961031"></a>12.1 PL 381 o versioni successive
- <a name="_hlk529972968"></a>PLC <a name="_hlk529961023"></a>16.2.33.103 o versioni successive

NOTA: <a name="_hlk118815171"></a>è garantita la compatibilità con B\_OPTI sullo stesso PC a condizione che siano installate le versioni di B\_SUITE e B\_OPTI distribuite con lo stesso rilascio (riferimenti nel capitolo - 8 “Storia Versioni rilasciate”)


2. # <a name="_toc134177642"></a>**Lista problemi risolti**

<a name="_toc97039006"></a><a name="_toc127375275"></a><a name="_toc134177643"></a>**2.1 Problemi risolti <a name="_hlk100826577"></a>B\_SUITE 4.1.0.121**


----------------------------------------------------------------------------------------------------------------------------------------------------------
### <a name="_toc97039007"></a><a name="_toc127375276"></a><a name="_toc52367991"></a><a name="_toc134177644"></a><a name="_hlk71117576"></a>**2.1.1 Bug 196134: [bSuite]: PR00018546: bsolid: macro con aggregato da sotto da errore di collisione in ottimizzazione**
Risolta

NOTA: è necessario cancellare e reinserire manualmente le macro


### <a name="_toc134177645"></a>**2.1.2 Bug 196426: PR00018923: bsolid: crash istantaneo aprendo alcune macro create sulla stessa 4.0**
Risolta


### <a name="_toc134177646"></a>**2.1.3 Bug 196427: PR00019010 [PAV] : problema con il PAV ed il passo di rotazione.**
Risolta

NOTE: Per ragioni prestazionali è fortemente consigliato al cliente di usare il parametro 0 nel passo di discretizzazione.

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.011.png)In questo modo il PAV riesce a scegliere il passo corretto in funzione delle dimensioni del pannello ed ad avere una velocità di esecuzione ottimale


### <a name="_toc134177647"></a>**2.1.4 Bug 196439: [bSuite]: PR00018817: bsolid: opzione di attrezzaggio "Lettura da CN" non riporta mai la posizione del piano 10**
Risolta

NOTA: è necessario eseguire l’import del modello macchina


### <a name="_toc134177648"></a>**2.1.5 Bug 196535: PR00019128: bSolid: comando "Salva macro con nome" non abilitato nel modulo BASE**
Risolta



### <a name="_toc134177649"></a>**2.1.6 Bug 196688: [bNest]: PR00019091: bNest: problema con fresature a ghigliottina.**
Risolta

### <a name="_toc134177650"></a>**2.1.7 Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**
Risolta

NOTA: è necessario eseguire l’import del modello macchina con il check “preservare i dati” abilitato


### <a name="_toc134177651"></a>**2.1.8 Bug 196872: [OT] LUA ToolLogic P120: problemi modello 3D**
Risolta



NOTA: è necessario eseguire l’import del modello macchina con il check “preservare i dati” abilitato e avere una versione PLC uguale o superiore alla 16.2.34.005.


### <a name="_toc134177652"></a>**2.1.9 Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**
Risolta

NOTA: è necessario eseguire l’import del modello macchina con il check “preservare i dati” abilitato


### <a name="_toc134177653"></a>**2.1.10 Bug 197147: PR00019420: Carrelli piani HTS con la pneumatica laterale dal lato sbagliato. In realtà è a destra in bSuite è a sinistra.**
Risolta


### <a name="_toc134177654"></a>**2.1.11 Bug 197197: [OT] - [bSuite] PR00016886: Collisione tra Multifunzione 3+1 e pezzi su due file di Finger se presente una traslazione di pezzi.**
Risolta


### <a name="_toc134177655"></a>**2.1.12 Bug 197468: [AU Issue] PR00008869: Cliente SANELCO Grecia - PROBLEMA CON REGOLAZIONE/MEMORIZZAZIONE OFFSET DI STAMPA ETICHETTA DA LPRINT**
Risolta


### <a name="_toc134177656"></a>**2.1.13 Bug 197469: PR00013881: bsolid: crash sistematico se si provano a selezionare tutte le sezioni per creare la superificie**
Risolta


### <a name="_toc134177657"></a>**2.1.14 Bug 197470: PR00014496: bsolid: swarfing con passate verticali rovina il pezzo nei movimenti di ingresso/uscita**
Risolta


### <a name="_toc134177658"></a>**2.1.15 Bug 197471: PR00015532: bSolid: Errore oltrecorsa UP asse Y**
Risolta


### <a name="_toc134177659"></a>**2.1.16 Bug 197472: PR00015788: bsolid: pezzo rovinato lavorando una polilinea di 2 elementi**
Risolta


### <a name="_toc134177660"></a>**2.1.17 Bug 197473: PR00015892: bSolid: errore AXS\_843=Posizionamento oltre fine corsa software Y UP con file CIX di AlphaCam.**
Risolta


### <a name="_toc134177661"></a>**2.1.18 Bug 197474: [bSuite]: PR00015136: Pannello in errore "Finecorsa software down asse XB1"**
Risolta


### <a name="_toc134177662"></a>**2.1.19 Bug 197476: [bSuite]: PR00018312: bsolid: crash sistematico quando si imposta la "distanza tra passate" di un pocketing a 3.5mm**
Risolta


### <a name="_toc134177663"></a>**2.1.20 Bug 197478: [bSuite]: PR00018760: bedge: bordatura automatica sbaglia la scelta dell'aggregato in base allo spessore bordo**
Risolta


### <a name="_toc134177664"></a>**2.1.21 Bug 197479: [bSuite]: PR00018787: bEdge: Problema sparizione lavorazioni di bordatura dalla Timeline**
Risolta


### <a name="_toc134177665"></a>**2.1.22 Bug 197480: [bSuite]: PR00018824: bSolid: crash sistematico con finitura 3 assi.**
Risolta


### <a name="_toc134177666"></a>**2.1.23 Bug 197481: PR00018997: bSolid: Lavorazione e visualizzazione percorsi errata se backup utilizzato del cliente**
Risolta


### <a name="_toc134177667"></a>**2.1.24 Bug 197486: rimozione dato sottomandrino Aggregato "tipo cambio utensile"**
Risolta

NOTA: è stato rimosso il dato "Tipo cambio utensile" dai parametri dei sottomandrini degli aggregati


### <a name="_toc134177668"></a>**2.1.25 Bug 197488: [AU Issue] PR00008763: bNest: impossibile processare progetto con 400 articoli (file CIX)**
Risolta


### <a name="_toc134177669"></a>**2.1.26 Bug 197810: [AU-ISSUE] Tastatore. Collegamento post per PR00019461**
Risolta







### <a name="_toc134177670"></a>**2.1.27 Bug 197810: [AU-ISSUE] Tastatore. Collegamento post per PR00019461**
Risolta

NOTA: il comando "vista fotorealistica" ora presenta il corretto shortCut "Shift+Alt+P" nel suo tooltip

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.012.png)


### <a name="_toc134177671"></a>**2.1.28 <a name="_hlk129681464"></a>Bug 196136: [bSuite]: PR00018836: bSolid: Crash sistematico programma pezzo in macchina con attrezzaggio fatto con un’altra macchina**
Risolta


### <a name="_toc134177672"></a>**2.1.29 Bug 197482: PR00019052: bSolid: il CAD non mostra il percorso corretto di fresatura. In simulazione è OK**
Risolta

NOTA: la soluzione al problema va abilitata esplicitamente tramite intervento di configurazione da parte di Software Support


### <a name="_toc134177673"></a>**2.1.30 Bug 197482: Bug 197483: PR00019150: bSolid: problema di disallineamento tra simulazione CAD e simulazione macchina.**
Risolta

NOTA: la soluzione al problema va abilitata esplicitamente tramite intervento di configurazione da parte di Software Support


### <a name="_toc134177674"></a>**2.1.31 <a name="_hlk129770842"></a>Bug 198441: [bSuite] [4.1Validation] Velocità d'Impatto e velocità di avvicinamento/uscita in errore e obbligatorio**
Risolta


### <a name="_toc134177675"></a>**2.1.32 <a name="_hlk129770937"></a>Bug 198612: [bSuite] PR00019623: creare il dispositivo di bordatura con gemelli non funziona se il nome supera i 10 caratteri**
Risolta


### <a name="_toc134177676"></a><a name="_hlk129957207"></a>**2.1.33 Bug 196749: Problema PMOR dopo scambio morse standard (senza manipolatore) - Winline Step 2 prototipo - 1000060407**
Risolta


### <a name="_toc134177677"></a><a name="_hlk129957304"></a>**2.1.34 Bug 196767: Winline Step2 - 1000060407 - problema simulazione deflettore**
Risolta



### <a name="_toc134177678"></a><a name="_hlk129957483"></a>**2.1.35 Bug 197376: [OT] Layout Cuffia Tagliata per MFLama300 - Winline Step2**
Risolta

NOTA: è necessario eseguire import della macchina con il check "preservare i dati" attivo.

Inserimento a catalogo dei modelli di aggregato lama 300 con cuffia dedicata per poter consentire l'attrezzaggio delle due tipologie di cuffia nella stessa macchina come avviene nella realtà. Quindi, in fase di import, non sarà più importata la cuffia parascheggia.


### <a name="_toc134177679"></a><a name="_hlk129957624"></a>**2.1.36 Bug 197821: [Validazione 4.1] Winline Step 2 1000060407: Problema comando "Traslazione con manipolatore" su morse HYPERCLAMP con scambio su stessa fila**
Risolta


### <a name="_toc134177680"></a><a name="_hlk129960858"></a>**2.1.37 Bug 198431: [bSuite] [4.1Validation] Prototipo Winline Step2 - da import impostare parametro postprocessor VROT\_T = 4000 [CATALOGO]**
Risolta

NOTA: è necessario eseguire l'import del modello macchina


### <a name="_toc134177681"></a><a name="_hlk129961787"></a>**2.1.38 Bug 196437: [WRT] - PR00019205: bSolid: Problema fresatura con deflettore. la fresa non mangia correttamente. OK senza deflettore**
Risolta


### <a name="_toc134177682"></a>**2.1.39 Bug 198028: [bNest] [HCL-Nestlib] nel risultato del progetto non vengono inseriti tutti gli articoli e viene usata una lastra in più anche se lo spazio c'è**
Risolta


### <a name="_toc134177683"></a>**2.1.40 Bug 198032: [OT] Prototipo Winline Step2 - collisione con deflettore con NOPRK attivo**
Risolta


### <a name="_toc134177684"></a><a name="_hlk129966058"></a>**2.1.41 Bug 196768: Winline Step2 - 1000060407 - Installazione B\_SUITE 4.1.0.48 - problema import backup macchina**
Risolta

NOTA: è necessario eseguire l’import del modello macchina


### <a name="_toc134177685"></a><a name="_hlk130191439"></a>**2.1.42 Bug 197485: Checklist 3.0.8 - 117 - Crash durante simulazione con "qualità" di simulazione al massimo**
Risolta


### <a name="_toc134177686"></a><a name="_hlk130191629"></a>**2.1.43 Bug 197484: Checklist 3.0.8 - 099 - Crash in simulazione con pannelli fonoassorbenti**
Risolta



### <a name="_toc134177687"></a><a name="_hlk130202543"></a>**2.1.44 Bug 198616: [AU-ISSUE] Inserimento spina a LPZ/2 (eko 2.x)**
Risolta

NOTA: nelle lavorazioni di tipo "Inserimento spina/colla" è stata aggiunta la possibilità di parametrizzare i valori di "Posizione X", "Posizione Y" con l'utilizzo delle variabili di ambiente; ad esempio è ora possibile utilizzare una formula del tipo "LPZ/2" come valore del campo.


### <a name="_toc134177688"></a>**2.1.45 Bug 198326: [OT] [AU-ISSUE] LUA ToolLogic P139: quota Z errata multifunzione in simulazione**
Risolta


### <a name="_toc134177689"></a>**2.1.46 Bug 198313: [bSuite] Distinta bsolid: i programmi ISO non vanno in esecuzione**
Risolta


### <a name="_toc134177690"></a>**2.1.47 Bug 197922: [bSuite] PR00019524: bSolid: problema con una macro, appare errore "Selezionare una geometria".**
Risolta

<a name="_hlk130891006"></a>NOTA: è necessario rendere la macro "editata" (aprire la macro in "modifica", modificare un parametro e ripristinarlo, salvare la macro) e successivamente eseguire un calcolo delle lavorazioni


### <a name="_toc134177691"></a>**2.1.48 Bug 197342: [bSuite]: PR00017672: bSolid: Problema con correzione raggio utensile con file .STEP**
Risolta 

### <a name="_toc134177692"></a>**2.1.49 Bug 198317: [OT] LUA ToolLogic P136: cuffia lama non collidibile**
Risolta

NOTA: E' necessario eseguire l'import del modello macchina


### <a name="_toc134177693"></a>**2.1.50 Bug 197589: [Au - Biesse] Simulazione: errate lavorazioni effettuate prima del riposizionamento "non ottimizzabile"**
Risolta


### <a name="_toc134177694"></a>**2.1.51 Bug 197593: [bSuite]: PR00018899: bsolid: ottimizzatore "fori in testa e lista" non funziona correttamente se mancano i fori**
Risolta


### <a name="_toc134177695"></a>**2.1.52 Bug 200371: [bNest] PR00019904: bNest: Problema trasmissione risultato progetto con 380 articoli. Il software va in crash**
Risolta


### <a name="_toc134177696"></a>**2.1.53 Bug 201132: [bNest] PR00019959: bNest: problema con fresature inclinate, nel progetto risultante l'angolo è negativo.**
Risolta

### <a name="_toc134177697"></a>**2.1.54 Bug 199974: Crash import cix versione 4.0**
Risolta

<a name="_toc134177698"></a>**2.1.55 Bug 196144: [bSuite]: PR00018608: bsolid: la macro per il CLAMEX del cliente lavora male se è presente anche la macro LAMELLO di Biesse**

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Risolta

NOTA: E' necessario cancellare la macro CLAMEX e reinserirla in modo da applicare la nuova gestione sui parametri.

### <a name="_toc134177699"></a>**2.1.56 Bug 199981: [OT] problema grafico carena Rover A1556 1000060444**

Risolta

NOTA: E' necessario eseguire l'import del modello macchina


### <a name="_toc134177700"></a>**2.1.57 Bug 200462: [4.1Validation]: P30 - Crash B\_SUITE durante l'avvio, se non c'è la cartella bEdge dentro C:\BIESSE\bSuite\Extensions**

Risolta	


### <a name="_toc134177701"></a>**2.1.58 Bug 196764: [bSuite]: PR00019001: Problema parametri fori con valori errati dopo import file CSV in bNest**

Risolta	


### <a name="_toc134177702"></a>**2.1.59 Bug 199966: PR00019803: bSolid: Problema con la funzione "COPIA ATTREZZAGGIO"**

Risolta


### <a name="_toc134177703"></a>**2.1.60 Bug 201222: [PAV] PR00020067: bSolid: problema con il PAV "Errore 2024 fine-corsa assi non presenti o non corretti". (anticipata da sp. 2)**

Risolta


### <a name="_toc134177704"></a>**2.1.61 Bug 196156: [bSuite]: PR00017593: bSolid: Errore di traduzione con la lingua olandese**

Risolta


### <a name="_toc134177705"></a>**2.1.62 Bug 198776: PR00019646: bSolid: crash sistematico modificando le dimensioni del pannello**

Risolta



### <a name="_toc134177706"></a>**2.1.63 Bug 202876: [PAV] PR00020190: bSolid: Impossibile ottimizzare le lavorazione. Errore interno 2001 (anticipata da sp. 3)**

Risolta


<a name="_toc134177707"></a>**2.1.64 Bug 200502: PR00019909: bSolid: Crash bSolid gestendo file CIX da 5Mb**

------------------------------------------------------------------------------------------------------------
Risolta

NOTA: Per ripetizioni a matrice il CIX, al fine di risparmio di utilizzo di memoria e maggiore velocita nel calcolo e nel caricamento del risultato, non andrebbe programmato inserendo 16000 fori ma utilizzando le ripetizioni e i cicli 'for'.

ciclo for:

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.013.png)

ripetizioni:

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.014.png)


### <a name="_toc134177708"></a>**2.1.65 Bug 203457: [Validation 4.1] Crash sistematico editando una faccia custom**

Risolta 



### <a name="_toc134177709"></a>**2.1.66 Bug 201023: [bsuite] PR00019967: La battuta 2 della barra fissa 12 si muove spostando l'origine 13. La barra fissa 12 si muove spostando l'origine 3**

Risolta 


### <a name="_toc134177710"></a>**2.1.67 Bug 203118: [AU-ISSUE] PR00020250 - urto foratrice e sistema hyperpod con riposizionamento su piano assistito**

Risolta 


### <a name="_toc134177711"></a>**2.1.68 Bug 203013: [4.1Validation] - P60:Crash invio programma in lista da pagina di simulazione**

Risolta


### <a name="_toc134177712"></a>**2.1.69 Bug 203481: [OT] Matricola 1000061428 - grafica macchina errata (fix catalogo)**

Risolta

NOTA: è necessario eseguire l'import del modello macchina con il check "Preservare i dati" abilitato. 


### <a name="_toc134177713"></a><a name="_hlk133589751"></a>**2.1.70 Bug 196534: PR00018984: bSolid: collisione non segnalata in simulazione macchina**

Risolta


### <a name="_toc134177714"></a>**2.1.71 Bug 201156: [bSuite] la diagnostica restituisce errore "crash" senza specificare il problema**

Risolta 


### <a name="_toc134177715"></a>**2.1.72 Bug 201189: [PAV] PR00019484: bSolid: errore con PAV "Il documento non è multipannello" e crash sistematico successivo.**

Risolta 


### <a name="_toc134177716"></a>**2.1.73 Bug 197118: PR00019416: bSolid: manca il manuale in lingua olandese (dutch).**

Risolta


### <a name="_toc134177717"></a>**2.1.74 Bug 200831: [bSuite] Template bSolid con scaricatori area dx sporgenti Rv C matr. 1000058810 (fix catalogo) [CATALOGO]**

Risolta 

NOTA: è necessario eseguire l’import del modello macchina

### **2.1.75 Bug 197477: [PktLib]: [bSuite]: PR00018743: bSolid: problema con la lavorazione di svuotamento su file CIX [PocketLib]**

Risolta 


**2.2 Problemi risolti B\_SUITE 4.1.0.X**


-----------------------------------------
### **2.2.1 Bug 204313: [bSuite][Sinchro] [AU-ISSUE] Simulazione del movimento pannello**
Risolta



### <a name="_hlk134713641"></a>**2.2.2 Bug 204507: PR00020434: bSolid: problema salvataggio programma con maschiatura e crash in simulazione macchina.**
Risolta 


### <a name="_hlk134713603"></a>**2.2.3** **Bug 201214: [bSuite] PR00020065: bSolid: errore valutazione formula della variabile su macro.**
Risolta 


### **2.2.4** **Bug 202878: [bNest] Rinominando un'essenza, non viene più resa disponibile nella lista di essenze selezionabili per una lastra e la sua cancellazione determina un crash dell'applicazione**
Risolta 

**2.2.5 Bug 204648: [AU-ISSUE] PR00020344 - 1000050472-Eko22-POZZOLI-ITALIA\_Errore Post processor exception**


Risolta 


**2.2.6 Bug 200274: [bSuite] PR00019892: In simulazione bSuite non viene rilevata la collisione con la morsa**

Risolta 


**2.2.7 Bug 201170: [OT] [bSuite] PR00019456: bSolid: Errore PLC 9050 asse X1 e AXS 844 asse Z1 con CIX da DDX**

Risolta 


**2.2.8 [Bug 204956](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/204956): [OT] Grafica non corretta Rover A matr. 1000060675 (fix catalogo)**

Risolta 

NOTA: è necessario eseguire l’import del modello macchina


**2.2.9 Bug 205282: [OT] Grafica non corretta con errore durante lavorazione con taglierina Rover PLAST B FT 2243 matr. 1000062889 (fix catalogo)**

Risolta 

NOTA: è necessario eseguire l’import del modello macchina

**2.2.10 Bug 203875: [OT] EKO 1.1 - LUA 1000056711 - asse BD non visibile nel modello 3D**

Risolta 


**2.2.11 [Bug 200864](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/200864): [4.1Validation] P46 Il campo "Z svincoli intermedi" del plugin di Incisione 3D non funziona**

Risolta 

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.015.png)NOTA: Nel plug-in di Incisione 3D selezionando come "Modalita di calcolo" quella "avanzata" il campo "Z svincoli intermedi" viene nascosto  




**2.2.12 [Bug 201080](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/201080): [OT][Validation 4.1] [bSuite] errore parametro "Massimo diametro dell'ingombro circolare (sul piano X/Y) dell'oggetto abbinabile" sui nuovi modelli deflettori (ADEF16, ADEF17, ADEF18)**

Risolta 

NOTA: il parametro "massimo diametro dell' ingombro circolare (sul paino X/Y) dell' oggetto abbinabile sui nuovi modelli deflettori (ADEF16, ADEF17, ADEF18) è stato aggiornato ai valori richiesti.

1. ADEF16:






![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.016.png)

1. ADEF17

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.017.png)

1. ADEF18

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.018.png)


**2.2.13 [Bug 201257](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/201257): [AU Biesse] PR00020080: bSolid: Rotazione asse C inutile su foratura orizzontale con TP 5 assi solo se GAP asse C diverso da 180**


Risolta 

**2.2.14 [Bug 204982](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/204982): [AU-ISSUE] PR00020492: bSolid 4.0.0.270 - problem with double rotation of the C axes**


Risolta 




**2.2.15 [Bug 205386](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/205386): PR00020622: bSolid: Systematic crash when opening milling of imported bpp, CIX or DXF with Explode CIX option after import activated.**


Risolta 


2. # <a name="_toc134177718"></a>**Nuove funzionalità**

<a name="_toc134177719"></a>**3.1 Nuove funzionalità B\_SUITE 4.1.0.121** 

--------------------------------------------------------------------------
<a name="_hlk129608900"></a><a name="_toc134177720"></a><a name="_hlk129609800"></a>**3.1.1 Feature 197422: [bSuite][bNest] Ottimizzazione sul trasferimento file a seguito dell’import di più articoli che riferiscono lo stesso file** 

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
E' stata ottimizzata la gestione del trasferimento e archiviazione dei file di programma (bSolid, cix, ...) associati agli articoli da importare (da csv, da file, ecc.) facendo in modo di trasferire un solo file nel caso più articoli riferiscono lo stesso file, o di non trasferire i file nel caso siano già presenti in archivio. Questa ottimizzazione può rendere più "leggeri" i backup di bNest.**


<a name="_toc134177721"></a>**3.1.2 Feature 197423: [bSuite][bNest] Ottimizzazione dell’archivio file quando più articoli riferiscono lo stesso file**

------------------------------------------------------------------------------------------------------------------------------------------------------
E' stata ottimizzata la gestione dell'archivio file dell'applicazione facendo in modo che quando più articoli riferiscono lo stesso file di programma (bSolid, cix, ...) in archivio ce n'è sempre una sola copia. Questa ottimizzazione può rendere più "leggeri" i backup di bNest.**


<a name="_toc134177722"></a>**3.1.3 Feature 197424: [bSuite] [bNest] Nesting con tecnologia indotta**

-----------------------------------------------------------------------------------------------------
E' stata aggiunta una nuova tecnologia automatica che permette di applicare una fresatura intorno ad ogni singolo pezzo dello schema di nesting. Questa funzionalità è molto utile nel caso di pezzi composti da sole geometrie. 
Per attivare questa funzionalità basta andare nei parametri di progetto e selezionare "Fresatura a pezzo singolo" nel tipo di fresatura della tecnologia automatica**


![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.019.jpeg)
































<a name="_hlk129611893"></a>Per impostare tutti i parametri tecnologici e di comportamento della fresatura a pezzo singolo, basta andare nella specifica scheda

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.020.jpeg)

Tra i parametri di comportamento di questa scheda particolarmente importanti sono quelli relativi alla gestione del punto di attacco, che offrono la possibilità di decidere in quale punto del pezzo posizionare il punto di attacco (es. sul tratto più lungo, in base all'ordine di distacco dei pezzi, prediligendo i tratti lineari, ...).

### <a name="_toc134177723"></a><a name="_hlk129612084"></a>**3.1.4 <a name="_hlk129612108"></a>Feature 197426: [bNest] Spostamento manuale degli ingressi**

**<a name="_hlk129612186"></a>**E' stata aggiunta la possibilità di spostare la posizione degli ingressi delle fresature su pezzo singolo, direttamente dall'ambiente di modifica manuale.

Si può spostare l'ingresso del singolo pezzo, di una selezione di pezzi o dell'intero schema.

Per farlo ci sono varie modalità:

- Usando il gruppo di comandi automatici ![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.021.png) che permette di posizionare il punto di ingresso con le stesse possibilità offerte dai parametri di elaborazione: 
  - in posizione predefinita
  - nel tratto più lungo
  - verso il bordo più vicino della lastra
  - verso il centro della lastra
- Usando il gruppo di comandi manuali ![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.022.png) che permettono di far ruotare il punto di ingresso intorno al pezzo a passi discreti in entrambi i versi, sia tramite click sui bottoni (e relativi shortcuts coi tasti Ctrl e '+' e Ctrl e '-'), sia attraverso uno specifico controllo cursore dove si riesce a percorrere un intero giro intorno al pezzo
- Usando direttamente la rotellina del mouse in combinazione con il tasto Ctrl. Si può applicare su un singolo pezzo posizionandoci sopra il mouse oppure se si vuole agire sui pezzi selezionati, basta posizionare il mouse nel vuoto. Ruotando la la rotellina si otterrà lo spostamento del punto di ingresso nei pezzi interessati


### <a name="_toc134177724"></a><a name="_hlk129613321"></a>**3.1.5 <a name="_hlk129613424"></a>Feature 197427: [bSuite][bNest] Creazione automatica di un nuovo progetto per i pezzi mancanti dei progetti elaborati (modalità statica) – porting da bOpti**

**<a name="_hlk129613562"></a>**La funzionalità "Reintegro pezzi mancanti" cerca tra i progetti selezionati i pezzi che non sono stati inseriti nei risultati e li inserisce in un nuovo progetto o in uno già esistente.

Il comando è contraddistinto dalla icona ![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.023.png) ed è disponibile sia nella vista della lista dei progetti

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.024.png)

sia nella vista di dettaglio del progetto

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.025.png)



### <a name="_toc134177725"></a><a name="_hlk129613800"></a><a name="_hlk129614299"></a>**3.1.6 Feature 197428: [bNest] Tabella dei progetti integrata con nuovi campi: lastre, resti aree, ecc. – porting da bOpti**
**
La tabella dei progetti presenta dei nuovi campi che riportano alcune informazioni generali del progetto e alcune informazioni tratte dai risultati.

Informazioni generali: Cartella di appartenenza, [Somma di] Quantità di linee, Numero di linee, Essenze, Spessori.

Informazioni dai risultati: Lastre, Resti, Lastre + Resti, Numero schemi, Area totale, Percentuali di utilizzo, Area utilizzata (misura e %), Area inutilizzata (misura e %), Area lastre (misura e %), Area resti (misura e %), Costo materiali, Costo totale, Resto riutilizzabile (misura e %).

Nell'immagine sotto si possono vedere alcuni dei nuovi campi:

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.026.png)


### <a name="_toc134177726"></a><a name="_hlk129674144"></a>**3.1.7 Feature 197429: [bNest] Rebranding software - Step 2 (completamento integrazione icone)**

<a name="_hlk129674208"></a>Le modifiche introdotte con la nuova interfaccia di bNest riguardano puramente lo stile grafico e non alterano il funzionamento dei comandi dell’applicativo.

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.027.png)

I principali cambiamenti sono:

- Sostituzione icone nei vari ambienti
- Rivisitazione stili schede degli ambienti


### <a name="_toc134177727"></a><a name="_hlk129674434"></a>**3.1.8 Feature 197430: [bNest] Refactoring per passaggio a 64bit (Step1)**

A partire dal rilascio di bSuite 4.1.0.X bNest è un'applicazione con architettura a 64 bits e può essere utilizzata solo su sistemi con Windows 10 (64 bits) o superiori.



### <a name="_toc134177728"></a>**3.1.9 <a name="_hlk129675821"></a>Feature 197431: [bSuite][bNest] Pulizia bNest legata a phase-out di NextStep**

bNest non supporta più la macchina Nextstep, non è più possibile elaborare progetti di nesting per questa macchina.


### <a name="_toc134177729"></a><a name="_hlk129676319"></a>**3.1.10 <a name="_hlk129676550"></a>Feature 197432: [bSuite][bNest] Calcolo dei punti di attacco in relazione agli ordinali di distacco**

<a name="_hlk129676586"></a>Il calcolo della posizione dei punti di attacco in relazione agli ordinali di distacco è una funzionalità che serve a favorire la stabilità dei pezzi nella fase di lavorazione in macchina degli schemi di nesting, ed in particolare nelle lavorazioni di distacco. 

In contesto di "fresature a pezzo singolo" le lavorazioni di distacco vengono aggiunte ai pezzi, ed è possibile decidere quale sia il miglior punto di approccio per la lavorazione di distacco di ciascun pezzo. 

Tipicamente le possibilità di scelta per la posizione del punto di approccio per un pezzo sono in relazione allo schema (verso il centro, verso la periferia), o rispetto alla conformazione del pezzo stesso (sul punto programmato originariamente, sul tratto più lungo).

Per favorire però la stabilità dei pezzi in fase di elaborazione è anche disponibile la possibilità di mettere in correlazione la sequenza di distacchi, che si desidera imporre ai pezzi, e la posizione dei punti di approccio per le stesse lavorazioni di distacco.

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.028.png)

Tra i parametri di elaborazione, nella sezione relativa alla "fresatura a pezzo singolo", è possibile selezionare tutte le "regole" per decidere il punto migliore, sul contorno del pezzo, in cui inserire il punto di approccio delle lavorazione di contornatura\distacco.

Come si vede in figura è possibile scegliere delle modalità di inserimeno rispetto allo schema o alla forma del pezzo...

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.029.png)

.. ed è possibile combinare la scelta rispetto alla forma dei pezzi

` `![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.030.png)

Ricordiamo che In BNEST sono disponibili delle modalità di associazione di numeri ordinali ai pezzi, che rappresentano la sequenza di distacco dei pezzi dalla lastra. Ricordiamo anche che ci sono parametri che regolano l'attribuzione di tali ordinali ai pezzi secondo regole precise (dalla dimensione dei pezzi, alla loro posizione sulla lastra)





Per quanto riguarda quindi la scelta della posizione dei punti di approccio in un contesto in cui siano stati assegnati degli ordinali ai pezzi in uno schema,

in aggiunta alle possibilità pilotate dai parametri riportati nelle figure sopra, è disponibile anche una modalità di lavoro in cui si tenga conto anche delle relazioni di adiacenza dei pezzi nei risultati, considerandone in particolar modo i numeri ordinali associati dal sistema, relativi alla sequenza di distacco.

Il principio operativo che caratterizza questa funzionalità consiste nel fatto che, per favorire la stabilità dei pezzi durante la vera e propria lavorazione in macchina di uno schema di nesting, il punto di approccio per la lavorazione di distacco di un pezzo, andrebbe preferibilmente sempre posizionato nei tratti del profilo del pezzo che si trovano ad essere adiacenti a:

1. Una zona dello schema senza pezzi posizionati, ossia di lastra "piena", non lavorata
1. Una zona dello schema con dei Resti (che verranno sicuramente distaccati alla fine, il che equivale ad avere una lastra piena e non lavorata al momento del taglio del pezzo in questione)
1. Altri pezzi posizionati, ma preferibilmente con ordinale maggiore, ossia che verranno tagliati successivamente al pezzo in questione (il che equivale ad avere una zona di legno pieno al momento del taglio del pezzo in questione)

Se infatti immaginiamo la lavorazione di taglio di un pezzo, e che il punto di approccio sia collocato in una zona nei pressi della quale, durante la lavorazione, non c'è legno (perché c'erano pezzi, ma sono stati già tagliati e quindi il meccanismo del vuoto in macchina ha meno "presa"), la lavorazione di distacco inizierà e terminerà in un punto "delicato" e, in particolare sul finire della lavorazione, l'unica porzione di legno "salda" sarà sempre più piccola.

Al contrario se un punto di approccio è collocato in modo da avere una larga porzione di legno "ben tenuto" dal vuoto nelle sue vicinanze, allora la lavorazione inizierà e terminerà in un contesto di solidità e stabilità maggiori.

Con la funzionalità "Calcolo dei punto di attacco in relazione agli ordinali di distacco" è possibile imporre automaticamente il posizionamento dei punti di approccio anche nel rispetto delle relazioni di adiacenza 1, 2, 3, e, una volta soddisfatte queste, cercare di rispettare più possibile le regole imposte rispetto alla posizione sulla lastra o rispetto, ad esempio, al tratto più lungo.

Sostanzialmente ci sono dei parametri per regolare la ricerca dei punti di approccio rispetto ai numeri ordinali associati ai pezzi adiacenti nei vari tratti che compongono il contorno di un certo pezzo. Una volta isolati tali tratti di contorno, nell'ipotesi di trovarne più di uno, su di essi verranno applicati i parametri definiti normalmente (quelli delle figure sopra, come ad esempio scegliere il tratto più lungo).

Nella figura sotto riportiamo i parametri per attivare e regolare tale modalità di ricerca della posizione dei punti di approccio.

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.031.png)

Il primo parametro permette di decidere se effettivamente tenere conto delle relazioni di adiacenza e degli ordinali assegnati per il posizionamento del punto di approccio sui vari pezzi. 

Ricordando che i pezzi possono avere le forme più svariate, gli altri due parametri servono per definire

- il concetto di adiacenza, determinando cosa si intenda per "vicinanza" tra due pezzi 
- La minima lunghezza per definire un tratto come "tratto di adiacenza", candidandolo alla collocazione del punto di approccio

Nelle sessioni di Editing Manuale degli schemi, in cui l'utente può modificare le posizioni dei pezzi, visto che vengono ad essere potenzialmente modificate sia le relazioni di adiacenza che gli ordinali di distacco, sono presenti automatismi e comandi per mantenersi coerenti il più possibile con le regole impartite in fase di elaborazione. 
La posizione del punto di approccio di una lavorazione di distacco potrà subire modifiche automatiche in conseguenza ad un movimento di uno o più pezzi (il pezzo in questione o gli adiacenti) o alla modifica dell’ordinale di sequenza di distacco (per il pezzo in questione o per gli adiacenti).

Il sistema permette anche di manipolare manualmente la posizione del punto di approccio, e se per un pezzo poi si decide manualmente di fissarla, allora, con delle opportune attivazioni, potrà essere preservato anche rispetto a movimentazioni e modifiche successive. D'altro canto, se un utente avesse stabilito per un pezzo un posizionamento di un punto di approccio, ma poi ripensasse alla collocazione del pezzo o dei pezzi vicini sullo schema, è possibile re-innescare il calcolo del punto di approccio in modo coerente.


### <a name="_toc134177730"></a>**3.1.11 Feature 197433: [bSuite][bNest] Problemi di precisione con gli spessori dei pezzi e delle lastre\resti**

E' stato risolto il problema di precisione dando la possibilità all'utente di gestire la tolleranza


### <a name="_toc134177731"></a>**3.1.12 <a name="_hlk129677724"></a>Feature 197434: [bNest] Cambio complessità password per installazioni software**

<a name="_hlk129677777"></a>-  Cambiata la complessità della password di accesso al Database

` `- Criptata la Password

` `- Creata una nuova istanza SQL -> BNEST\_19\_2


### <a name="_toc134177732"></a>**3.1.13 <a name="_hlk129677957"></a>Feature 197435: [bSuite] [bNest] Avvio del configuratore senza aspettare la chiusura in fase di installazione**

<a name="_hlk129678008"></a>Aggiunto, nella esecuzione batch del configuratore, l'avvio del ripristino dopo il termine del processo dell'installatore


### <a name="_toc134177733"></a>**3.1.14 <a name="_hlk129678154"></a>Feature 197436: Ottimizzatore: eliminare legame dal dato "CentroCAM" della testa**

Questo sviluppo ha modificato il significato di un parametro in interfaccia, che si chiamava “Centro CAM” e che ora assume un significato diverso, ovvero quello di “Centro ISO”. Questo parametro si trova nei Dati Macchina, nella sezione “Unità operatrici”, ed è presente per ognuna di esse:

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.032.png)

Fino alla versione precedente, per le macchine importate (Rover, Winline, Eko), questo valore assumeva un doppio significato:

- per il CAM, il centro rappresentava un contenitore di una o più teste (o unità operatrici), pertanto il parametro indicava per ogni testa il suo “centro” di appartenenza, e veniva utilizzata sia dall’ottimizzatore che dal CAM per i suoi ragionamenti;
- per il PostProcessor indica la sezione all’interno del file ISO in cui quella testa viene esportata, contenendo le rispettive istruzioni ISO che quella testa esegue in macchina.



Con questo sviluppo, è rimasto invariato il significato per il PostProcessor, mentre nel CAM\ottimizzatore viene calcolato tutto internamente, basandosi su ragionamenti legati agli assi e agli ingombri delle teste. Per questo motivo, in interfaccia il parametro assume il nome di “Centro ISO” e il suo significato resta solo quello legato al PostProcessor; in più, non saranno più presenti messaggi di diagnostica del CAM con errori relativi a questo parametro, dato che il CAM ora è indipendente da esso. Questo sviluppo permette anche all’ottimizzatore di avere maggiore autonomia nelle scelte dell’ordine delle lavorazioni e dei cambi utensili, e dai risultati di alcuni test interni, ha migliorato le prestazioni di alcuni casi specifici, in particolare sulle Rover Edge.

Per le macchine non importate (es. Modulo, NextStep) quel parametro non aveva significato relativamente al PostProcessor, in quanto per queste il centro ISO di esportazione è unico; per questo motivo, per queste macchine, la modifica non ha effetto, visto che non era comunque un dato utilizzato.

In aggiunta a questo sviluppo, è stato modificato anche il valore del parametro “Testa interferente” (si trova sotto a “Centro ISO”). In precedenza, questo era sempre vuoto, tranne nei casi in cui i dati del controllo numerico (CN) lo popolavano; ora bSuite è indipendente da questo concetto, e il campo viene riempito in base a calcoli interni, indicando per ogni testa se ne esiste un’altra (o più di una) che possa andare in conflitto di interferenza su almeno un asse (esempio: le macchine Rover doppio carro Y, hanno due teste in cui la X è condivisa e la Y no, pertanto possono andare in interferenza tra loro, e avranno il rispettivo campo riempito).


### <a name="_toc134177734"></a>**3.1.15 <a name="_hlk129678677"></a>Feature 197437: [bSuite] visualizzare nel tooltip in timeline la riga iso (anziché il suo nome)**

E' stato modificato il contenuto del tooltip della Riga ISO in Timeline: non sarà più scritto il nome della Machine Operation, ma la stringa contenuta nel campo "Riga ISO" al suo interno.


### <a name="_toc134177735"></a>**3.1.16 <a name="_hlk129678963"></a>Feature 197442: [bSuite] Toolpath 3DE ottenuto tramite compensazione utensile sfruttando libreria WRT**

La modifica dell’algoritmo di calcolo del toolpath in compensazione (3DE), come potevasi prevedere, ha portato al fallimento di numerosi test automatici, alcuni dei quali sono stati semplicemente rivalidati, mentre altri, non potendo essere rivalidati perché andavano in errore, sono stati risolti in altro modo e sono elencati di seguito.

**Fallimenti dei programmi in Gantry.**

Alcuni programmi che con il vecchio algoritmo risultavano erroneamente come nella figura seguente

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.033.png)

Ora si presentano, come realmente sono eseguiti in macchina.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.034.png)

E’ chiaro che questi programmi erano errati e realizzavano sul pezzo lavorazioni non corrette.

Questo tipo di test è stato modificato.


**Fallimenti dei programmi con Link tra una lavorazione e l’altra.**


Programmi in cui i toolpath erano collegati perché (erroneamente) allineati,

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.035.png)

con il nuovo calcolo toolpath (più corretto) non eseguono più il link tra una lavorazione e l’altra anche se stiamo parlando di decimi di millimetro.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.036.png)

Il problema è dovuto a seguente parametro presente nei “Dati ottimizzatore” del documento,

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.037.png)

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

### <a name="_toc134177736"></a>**3.1.17 <a name="_hlk129680167"></a>Feature 197443: [bSuite][bSolid] Integrare l’informazione nel manuale di generazione wireframe durante l'import**

<a name="_hlk129680185"></a>Nel manuale è stata completata la descrizione della funzionalità di generazione wireframe durante l'import indicando che non è disponibile per i formati DXF ed STL.


### <a name="_toc134177737"></a>**3.1.18 <a name="_hlk129680566"></a>Feature 197444: [bSuite] Possibilità di filtrare utensili attrezzati in macchina nei plugin di lavorazione**

É stato introdotto un check che permette la visualizzazione dei soli utensili attrezzati tra i filtri della selezione utensili. Come gli altri filtri viene resettato ad ogni apertura ed il suo stato non é memorizzato.

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.038.png)


### <a name="_toc134177738"></a>**3.1.19 Feature 197445: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Polilinea"**

Nell'area CAD è stata nascosta la sezione "Dati CAM" presente nel tab "Avanzate" del plug-in "Polilinea"


### <a name="_toc134177739"></a>**3.1.20 Feature 197446: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Punto"**

Nell'area CAD è stata nascosta la sezione "Dati CAM" presente nel tab "Avanzate" del plug-in "Punto"


### <a name="_toc134177740"></a>**3.1.21 Feature 196242: [bNest] Comando di cancellazione di un sottoprogetto**

Nella definizione di sottoprogetto è stata aggiunta la funzionalità relativa alla sua cancellazione. 

Il comando è:

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.039.png)

Il comando è disponibile anche sulla definizione di sottoprogetto della pagina dei risultati (sottoprogetto elaborato):

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.040.png)

L’utilizzo del comando elimina il sottoprogetto, le relative linee di progetto e i relativi risultati dell’elaborazione. 

Il salvataggio renderà effettive le modifiche fatte.





### <a name="_toc134177741"></a>**3.1.22 Feature 196245: [bNest] Gestione della convenienza di un sottoprogetto**

È stata data la possibilità all’utente di stabilire se un sotto-progetto è conveniente o meno.

Per farlo sono stati messi a disposizioni due parametri di elaborazione che permettono di stabilire una soglia di convenienza:

- per percentuale pezzi: un progetto è sconveniente se la percentuale di area dei pezzi inseriti rispetto all’area totale delle lastre usate è inferiore alla soglia impostata
- per superficie di scarto totale: un progetto è sconveniente se l’area di scarto totale è superiore alla soglia impostata

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.041.png)

I due parametri possono anche essere combinati; in tal caso il sotto-progetto risulta sconveniente se almeno una delle due soglie non è stata rispettata.

Una volta impostate le soglie, se si procede con l’elaborazione del progetto, nell’ambiente dei risultati verranno contrassegnati con un triangolo rosso tutti i sotto-progetti che non rispettano le rispettive soglie impostate.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.042.png)

Andando con il mouse sopra il triangolo rosso apparirà un tooltip con la motivazione per cui il sotto-progetto risulta sconveniente

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.043.png)



<a name="_toc134177742"></a>**3.1.23 Feature 197859: [bNest] (SRFT23009) (Cliente KXN) rendere disponibile nei tracciati MNO generati da B\_NEST il dato densità associato alle lastre**

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Il file MNO, creato da bNest in fase di elaborazione, contiene l’elenco degli schemi di taglio ottenuti. Ad ogni schema di taglio è associata l’informazione relativa alla lastra utilizzata dallo schema stesso.

All’interno di queste informazioni è stata aggiunta quella relativa alla densità.

Per impostare la densità di una lastra:

- Aprire l’anagrafica delle lastre
- Aprire una lastra
- ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.044.png)Impostare il valore relativo alla densità 

Per leggere l’informazione relativa alla densità della lastra utilizzata da uno schema di taglio è sufficiente aprire l’MNO trasmesso in macchina e cercare il nodo <FOGLIO> d’interesse.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.045.png)Tale nodo contiene il sotto-noto <SheetInfo>, il quale contiene la proprietà “Density” valorizzata col valore impostato in bNest.
### <a name="_toc134177743"></a><a name="_hlk129958411"></a>**3.1.24 Feature 197495: [bSuite][bNest] Gestione transitorio per libreria offset Nestlib: utilizzo della vecchia traiettoria 3DE**

La modifica dell’algoritmo di calcolo del toolpath in compensazione (3DE), come potevasi prevedere, ha portato al fallimento di numerosi test automatici, alcuni dei quali sono stati semplicemente rivalidati, mentre altri, non potendo essere rivalidati perché andavano in errore, sono stati risolti in altro modo e sono elencati di seguito.

**Fallimenti dei programmi in Gantry.**

Alcuni programmi che con il vecchio algoritmo risultavano erroneamente come nella figura seguente

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.033.png)

Ora si presentano, come realmente sono eseguiti in macchina.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.034.png)

E’ chiaro che questi programmi erano errati e realizzavano sul pezzo lavorazioni non corrette.

Questo tipo di test è stato modificato.


**Fallimenti dei programmi con Link tra una lavorazione e l’altra.**


Programmi in cui i toolpath erano collegati perché (erroneamente) allineati,

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.035.png)

con il nuovo calcolo toolpath (più corretto) non eseguono più il link tra una lavorazione e l’altra anche se stiamo parlando di decimi di millimetro.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.036.png)

Il problema è dovuto a seguente parametro presente nei “Dati ottimizzatore” del documento,

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.037.png)

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






### <a name="_toc134177744"></a><a name="_hlk129958699"></a>**3.1.25 Feature 196093: [bSuite] Gestione WTT tra macchine P&R**
<a name="_hlk129958685"></a>Abilitando il nuovo Flag “Mantieni attrezzaggio piani con macchina differente” (Tab – “Imp generali”? [DA DEFINIRE]) ci si aspetta che aprendo un file.bSolid con un attrezzaggio piani, questo venga mantenuto indipendentemente dalla macchina attiva, a patto che questa sia P&R 
Nel fare questo, bSuite eseguirà un controllo di fattibilità e, quando non sarà possibile applicare l’attrezzaggio del programma (vedi casi sotto) sarà generato un WARNING (giallo) all’apertura dello stesso in ambiente CAD. Il warning in questione proporrà il messaggio generico “ATTENZIONE: non è stato possibile applicare l’attrezzaggio piani originale del programma” (quindi senza alcuna diagnostica avanzata). L’applicazione dell’attrezzaggio originale del programma non sarà applicato nei seguenti casi:

- l’origine selezionata nell’attrezzaggio piani originale NON è presente sulla macchina attualmente attiva
- l’attrezzaggio piani originale genera delle collisioni fra piani e/o carrelli della macchina attualmente attiva
- il posizionamento dei piani e/o carrelli dell’attrezzaggio originale non è compreso nei limiti degli assi della macchina attualmente attiva
- non viene gestita la modalità MULTIPANNELLO: l’attrezzaggio piani originale è stato creato in modalità multipannello, oppure il parametro è abilitato sulla macchina attiva
- non vengono gestite le macchine FT: l’attrezzaggio piani è stato creato su una macchina FT e/o la macchina attiva è una macchina FT

Aprendo un programma direttamente dall’ambiente Distinta, ci si aspetta il medesimo comportamento: nella parte bassa dello schermo sarà visualizzato lo stesso Warning spiegato al PT precedente.

La funzionalità dovrà gestire anche il caso di attrezzaggio con formule parametriche nella posizione dei piani e carrelli.

Nel caso di molteplici files di attrezzaggio piani salvati in un programma, verrà applicato l’ultimo attrezzaggio salvato (in ordine cronologico).

La descrizione del parametro nel manuale utente dovrà essere la seguente: “Abilita (casella marcata) o disabilita la gestione del posizionamento dei piani e carrelli salvato in un programma su macchine differenti rispetto a quella con cui è stato creato.

NOTA: l'attrezzaggio piani originale del programma non sarà applicato nei seguenti casi: 

- l’origine selezionata nell’attrezzaggio piani originale NON è presente sulla macchina attualmente attiva
- l’attrezzaggio piani originale genera delle collisioni fra piani e/o carrelli della macchina attualmente attiva
- il posizionamento dei piani e/o carrelli dell’attrezzaggio originale non è compreso nei limiti degli assi della macchina attualmente attiva
- non viene gestita la modalità MULTIPANNELLO: l’attrezzaggio piani originale è stato creato in modalità multipannello, oppure il parametro è abilitato sulla macchina attiva
- non vengono gestite le macchine FT: l’attrezzaggio piani è stato creato su una macchina FT e/o la macchina attiva è una macchina FT
<a name="_toc134177745"></a>**3.1.26 Feature 197441: [bSuite] Refactoring per passaggio a 64bit (Step1)**

---------------------------------------------------------------------------------------------------------
bSuite a 64 bit è in grado di gestire più memoria RAM rispetto alle versioni precedenti (32 bit) il che si traduce in un miglioramento delle prestazioni, soprattutto per le funzionalità che richiedono l'elaborazione di grandi quantità di dati.

Ciò significa che l'applicazione potrebbe elaborare i dati più velocemente e in modo più efficiente, migliorando la produttività e riducendo i tempi di attesa.

Maggiore stabilità: bSuite a 64 bit può essere generalmente più stabile della versione a 32 bit, sulla medesima funzionalità, poiché può gestire maggiori quantità di memoria e di dati.

Ciò significa che l'applicazione potrebbe essere meno soggetta a crash e malfunzionamenti dovuti alle limitazioni all'utilizzo della memoria nelle versioni a 32 bit, migliorando l'affidabilità e riducendo il rischio di perdita di dati.

Maggiore compatibilità: le applicazioni a 64 bit sono compatibili con i sistemi operativi a 64 bit, che stanno diventando sempre più comuni.
<a name="_toc134177746"></a>**3.1.27 Feature 198680: [bSuite] Gestione del parametro LPZ/2 (LpzMiddle) nelle lavorazioni di inserimento colla e spina**

-------------------------------------------------------------------------------------------------------------------------------------------------------
Se nelle lavorazioni di tipo "Inserimento spina/colla" si usa la formula LPZ\2, la spina o la colla verranno inserita sempre a metà pannello, anche dopo aver effettuato in macchina la misura del pannello con il tastatore. Verrà generato un iso parametrico. Questa funzionalità è già attiva nella lavorazione della foratura.


### <a name="_toc134177747"></a>**3.1.28 Feature 196248: [bNest] Comando di cancellazione di tutti i sottoprogetti non convenienti**

Nella gestione del progetto è stata aggiunta la funzione di cancellazione dei sottoprogetti non convenienti. Il comando cancella tutti i sottoprogetti elaborati ma identificati come “non convenienti”. La definizione di convenienza viene impostata prima dell’elaborazione e l’elaborazione ne identifica gli schemi e i sottoprogetti. Questa rappresentazione e disponibile solo nella pagina dei risultati Il comando è disponibile sulla colonna di sinistra.


### <a name="_toc134177748"></a>**3.1.29 Bug 199300: [bNest] PR00019742: bNest: Errore incomprensibile durante import file CSV. Cannot complete the template ....**

Risolta



<a name="_toc134177749"></a>**3.1.30 Feature 197541: [bSuite][bSolid] Gestione Tjet in lavorazioni con pressatore a rulli**

---------------------------------------------------------------------------------------------------------------------------
Lo sviluppo riguarda la gestione di lavorazioni in cui viene programmata la presenza sia del T-Jet che del pressatore a rulli.

Se per una lavorazione vengono abilitati sia il T-Jet che pressare a rulli, bSolid fornirà la priorità al pressatore a rulli e di disattiverà il T-Jet


<a name="_toc134177750"></a>**3.1.31 Feature 197540: [bSuite][bNest] Gestione default dell'attivazione del vuoto dinamico**

---------------------------------------------------------------------------------------------------------------------------
L’obiettivo è quello di consentire all’utente di attivare il vuoto dinamico nei programmi degli schemi di taglio, generati da B\_NEST, senza dover necessariamente impostare un comportamento di default nei parametri di B\_SOLID. Nei parametri di elaborazione di B\_NEST, in particolare nella pagina “Parametri di progetto”, scheda “Risultati” viene inserita una nuova sezione, chiamata “Parametri di programma”. All’interno di questa sezione viene inserito il parametro “Vuoto dinamico”.  Tale parametro può avere i seguenti valori: 

- Predefinito 
- Attivo
- Disattivo 

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.046.png)

- impostando “Predefinito” verrà generato un programma avente come gestione il comportamento di default impostato in B\_SOLID. Impostando “Attivo” o “Disattivo”, verrà generato un programma nel quale il vuoto dinamico sarà forzato ad essere rispettivamente attivo o disattivo. 







<a name="_toc134177751"></a>**3.1.32 [Feature 196741](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/196741): [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Testo lineare" e "Testo su percorso"**

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Nell' insertore del "Testo lineare" e nell’ insertore del "Testo su percorso"  è stata nascosta la sezione "Dati CAM”:

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.047.png)


![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.048.png)






<a name="_toc134177752"></a>**3.1.33 [Feature 196742](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/196742): [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Spline"**


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Nell' insertore della “Spline” è stata nascosta la sezione "Dati CAM”:

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.049.png)



<a name="_toc134177753"></a>**3.1.34 Feature 196740: [bSuite] Nascondere la sezione "Dati CAM" dal plug-in "Selezione Parziale"**


---------------------------------------------------------------------------------------------------------------------------------
"Nell' insertore "Selezione Parziale" è stata nascosta la sezione "Dati CAM":![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.050.png)



<a name="_toc134177754"></a><a name="_hlk132710816"></a>**3.1.35 Feature 199262: [bNest] Gestione della modalità Common Cut con clonazione**

--------------------------------------------------------------------------------------------------------------------------------------------
Abbiamo eliminato la limitazione che esisteva tra l’applicazione della tecnologia a “fresature in comune” e la possibilità di Clonare i risultati. Tipicamente queste due funzionalità erano dissociate e nelle versioni precedenti, qualora si selezionasse “Fresature a tagli in comune” non era possibile attivare anche la clonazione. E’ stato deciso di superare questo limite, introducendo quindi la possibilità di coniugare i due approcci, e facendo in modo che, nella maggior parte dei casi, una macchina con doppia testa, possa sfruttare la velocità di lavoro anche della tecnologia a tagli in comune. Per riuscire ad impostare, nei parametri di un progetto bNEST, sia la volontà di eseguire la clonazione, che la volontà di eseguire fresature a tagli in comune, è stata eliminata l’inibizione che era presente prima, e che ora, quando si sceglie “fresature a tagli in comune” continua ad esistere solo per l’approccio “Multi-Testa”.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.051.png)



Come si vede in figura ora il segnale “giallo” di inibizione viene ad essere visualizzato solo per la parte di parametri relativi al “Multi-Testa”, mentre la scheda di configurazione dei parametri per la clonazione dei risultati risulta ora accessibile. Per effettuare fresature a tagli in comune l’ordine delle lavorazioni deve essere STRETTAMENTE deciso in fase di generazione dei risultati di nesting e poco è lasciato all’ottimizzatore della time-line di bSOLID. Il motivo di questo è che per come è strutturato, l’approccio delle fresature a tagli in comune prevede dei criteri di progressione per la scelta della sequenza dei pezzi da “tagliare”, e poi diviene strettamente rigida la sequenza, poiché, dopo il primo pezzo tagliato per intero, i pezzi adiacenti che vengono scelti, che avranno dei segmenti “in comune” con i pezzi precedentemente tagliati, possono essere lavorati “scendendo in verticale” sul canale della fresature dei contorni dei poligoni precedenti. Questo implica che tutte le lavorazioni di fresatura a tagli in comune, con cui si separano i pezzi, dovranno essere inserite in time-line come “strettamente” non ottimizzabili. Dando questo ordine “stretto” alle lavorazioni era impossibile che macchine con testa multipla potessero riuscire a ottimizzare la sequenza “accoppiando” le lavorazioni.  Con questo sviluppo si è voluto proprio superare questo limite, inserendo nella time-line dei risultati di nesting le lavorazioni “gemelle”, fornite dalla clonazione, in modo “isolato” e ordinato, rispetto agli altri, chiuso in una sezione della time-line, ma “aperte” alla possibilità di essere trattate insieme dall’ottimizzatore di sequenza. 



|**Esempio di sequenza senza Clonazione + Fresatura a tagli in comune**|**Esempio di sequenza con Clonazione + Fresatura a tagli in comune**|
| :- | :- |
|![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.052.png)|![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.053.png)|

Come si può notare dalla figura, la sequenza è sempre scandita in ordine stretto, ma in presenza di clonazione vengono accoppiati le parti clonate e sistemate tra separatori. In questo modo è garantito l’ordine stretto per la buona riuscita delle lavorazioni di fresatura per il distacco dei pezzi, ma l’ottimizzatore riuscirà ad accoppiare le lavorazioni racchiuse tra separatori, realizzando di fatto il parallelismo, dal momento che i pezzi contenuti in una sezione tra separatori sono, appunto, gemelli e identici.



<a name="_toc134177755"></a>**3.1.36 Feature 200521: [bNest] Possibilità di trasmettere da B\_NEST un’unica distinta che comprenda tutti i sotto progetti del progetto trasmesso**


<a name="_hlk132710880"></a>Trasmettendo in macchina un progetto contenente diversi sotto-progetti, vengono generate diverse distinte macchina, una per ogni sotto-progetto. Ad oggi, per eseguire in macchina l’intero progetto, l’utente dovrebbe aprire una distinta alla volta ed eseguirla. L’intento dello sviluppo è quello di fornire, oltre alle distinte di sotto-progetto, una distinta “globale”, per facilitare l’esecuzione in macchina dell’intero progetto.


La trasmissione in macchina della distinta di progetto è per default disabilitata. Per abilitarla è necessario attivarla nelle impostazioni macchina di B\_NEST, all’interno del gruppo “Trasmissione”

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.054.png)


Abilitando tale impostazione, in fase di trasmissione, oltre alle distinte di sotto-progetto, verrà inviata anche la distinta di progetto contenente tutti gli schemi di taglio generati dall’elaborazione di tutti i sotto-progetti. Tale distinta avrà come nome lo stesso del progetto di B\_NEST (a differenza delle altre, che oltre a tale nome, avranno anche il nome del sotto-progetto)

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.055.png)



Coerentemente come avviene per le distinte di sotto-progetto, anche in questo caso l’utente può decidere la tipologia di distinta da generare, scegliendo una delle seguenti tipologie:

1. Distinta unica per lastre e resti
1. Distinta unica con separazione tra lastre e resti
1. Una distinta per lastre e una per resti

La scelta ti tale tipologia si effettua nelle impostazioni macchina di B\_NEST, all’interno del gruppo “Trasmissione”

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.056.png)


**

















**Distinta unica per lastre e resti**

Tale tipologia prevede la trasmissione di un'unica distinta contenente l’elenco degli schemi di taglio generati da tutti i sotto-progetti

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.057.png)




**Distinta unica con separazione tra lastre e resti**


Tale tipologia prevede la trasmissione di un'unica distinta contenente l’elenco degli schemi di taglio generati da tutti i sotto-progetti, ordinati come segue:

•	Schemi derivanti da lastre

•	Elemento di pausa

•	Schemi derivanti da resti





![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.058.png)




**Una distinta per lastre e una per resti**


Tale tipologia prevede la trasmissione di due distinte, la prima contenente l’elenco degli schemi di taglio derivanti da lastre mentre la seconda quelli derivanti da resti. La distinta unica delle lastre ha lo stesso nome del progetto, mentre quelle dei resti ha lo stesso nome del progetto seguita dal suffisso “\_W”;



![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.059.png)

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.060.png)



Non è possibile trasmettere la distinta macchina di progetto nelle seguenti situazioni:

- Qualche sotto-progetto non risulta elaborato
- Qualche sotto-progetto segnala degli errori di trasmissione
- Si cerca di trasmettere soltanto alcuni sotto-progetti singolarmente



In generale la distinta di progetto viene trasmessa soltanto se si esegue la trasmissione totale del progetto senza che nessun sotto-progetto vada in errore. In caso contrario, un messaggio di warning avvisa l’utente del problema

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.061.png)
<a name="_toc134177756"></a>**3.1.37 Feature 198952: [bSuite] [ASR21500] Morsa orizzontale Uniclamp H74mm con spillini. [CATALOGO]**

------------------------------------------------------------------------------------------------------------------------------------
Inserito a catalogo un nuovo clamper orizzontale di H74mm con spillini, il suo codice prodotto è: "ASR21500" mentre il codice tecnico: "AS50100441".


<a name="_toc134177757"></a>**3.1.38 Feature 199857: [OT] Eko 1.1 Redesign gruppo pinza (CR00011030) PR00019778**

-----------------------------------------------------------------------------------------------------------------
Implementata la modifica tecnica “CR00011030”; qui sotto un’immagine che identifica la modifica eseguita:

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.062.png)


<a name="_toc134177758"></a>**3.1.39 Feature 196008: [bSuite][Rover A HF] Tool Logic Automatic (spesa)**

--------------------------------------------------------------------------------------------------------
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


### <a name="_toc134177759"></a>**3.1.40 Feature 199291: gestione parametro CRT in import cix**
E' Importato/Esportato nel@ CIX il parametro CRT (Tipo di spigolo) della lavorazione di Fresatura ![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.063.png)

![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.064.png)

La sintassi CIX è la seguente

PARAM,NAME=CRT,VALUE=<valore>         con    <valore>=    0:Ruota attorno;      1:Spigolo vivo


<a name="_toc134177760"></a>**3.1.41 Feature 197509: [bSuite][bSolid] Firma digitale file eseguibili B\_SUITE**

---------------------------------------------------------------------------------------------------------------
Gli eseguibili dedicati all'utente finale distribuiti con l'applicativo sono stati firmati digitalmente.

La firma digitale sugli eseguibili è utile per garantire l'autenticità e l'integrità del software che si sta utilizzando. La firma digitale garantisce che il software è stato compilato e distribuito da Biesse e che quindi non sia stato modificato in alcun modo dalla sua origine


<a name="_toc134177761"></a>**3.1.42 Feature 197447: [Process] Modifiche a installatore per rimozione supporto macchina Next Step**

-----------------------------------------------------------------------------------------------------------------------------------
Dalla versione di bSuite 4.1 non sarà più supportata la macchina "Next Step"; durante la fase di installazione sarà disponibile solamente la macchina "Rover FT".


<a name="_toc134177762"></a>**3.1.43 Feature 196084: [bSuite] Integrazione libreria HOOPS**

-------------------------------------------------------------------------------------------
In questa nuova versione è stata integrata la libreria Hoops Techsoft3d per l'import dei formati esterni.

La nuova libreria va in sostituzione della libreria Spatial.

Questa la lista dei formati supportati:

ACIS Format (sab)

ACIS Format (\* sat)

BiesseWorks Exchange File(\* cix)

BiesseWorks File (\* bpp)

CATIA V4 Format (\*.exp)

CATIA V4 Format (\* model)

CATIA V4 Format (\* session)

CATIA V5 & V6 Format (\*.CATPart)

CATIA V5 & V6 Format (\*.CATProduct)

CNI Exchange File(\* cid)

Collada (\*dae)

DWG Drawing Format 2D (\* dwg)

DWG Drawing Format 3D (\*dwg)

DXF Drawing EXchange Format 2D (\*.dxf)

DXF Drawing EXchange Format 3D (\* dxf)

DXF Drawing EXchange Format Lite (\* .dxf)

Feature File (\* b Feature)

File bitmap (\* bmp)

ICP file (\* icp)

IGES Initial Graphics Exchange Specification (\* iges)

IGES Initial Graphics Exchange Specification (\* igs)

Inventor Format (\* ipt)

JPG file (\* jpg)

INX Format (\* prt)

Parasolid Format (\*×\_b)

Parasolid Format (\*x t)

Parasolid Format (\* mt bin)

Parasolid Format (\* xmt txt)

PDF (\* pdf)

PNT Point TextFile (\* pnt)

Pro/E / Creo (\* prt)

Rhino 3D (\*.3dm)

Solid Edge Format (\* par)

Solid Edge Format (\* psm)

SolidWorks Format (\*.sldprt)

STEP Format (\*step)

STEP Format (\*stp)

STL Stereo Lithography File (\* .stl)

TAS Laser Image (\*tas)

Technologic DXF File ("dd)

VDA-FS Format (\* vda)

Wavefront OBJ (\* obj)

WRL Virtual Reality Modeling Language (\*.vml)

WRL Virtual Reality Modeling Language (\* wrl)


**3.2 Nuove funzionalità B\_SUITE 4.1.0.X** 

--------------------------------------------
**3.2.1 Feature 197422: FEATURE DI RIFERIMENTO à DA SOSTITUIRE**

----------------------------------------------------------------
E' stata ottimizzata la gestione del trasferimento e archiviazione dei file di programma (bSolid, cix, ...) associati agli articoli da importare (da csv, da file, ecc.) facendo in modo di trasferire un solo file nel caso più articoli riferiscono lo stesso file, o di non trasferire i file nel caso siano già presenti in archivio. Questa ottimizzazione può rendere più "leggeri" i backup di bNest.


**3.2.2 [Feature 204627](http://tfsserver:8080/tfs/CDC_Software/B_ASG/_workitems/edit/204627): [bNest] Aggiornamento libreria HCL Nestlib - Versione 2023 R1.2**

----------------------------------------------------------------------------------------------------------------------------------------------------------------
La libreria HCL Nestlib è stata aggiornata alla versione 2023.1.2.0


![Immagine](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.065.png)

2. # <a name="_toc134177763"></a>**Informazioni d’installazione**

<a name="_toc127375704"></a><a name="_toc134177764"></a>**4.1 Operazioni Preliminari**

--------------------------------------------------------------------------------------
Nel caso in cui nel PC sia già installata una versione di bSuite, prima di avviare la procedura di installazione devono essere eseguite le seguenti operazioni
### <a name="_toc97039209"></a><a name="_toc127375705"></a><a name="_toc134177765"></a>**4.1.1 Creazione di una copia di backup dei dati**
Creare una copia dei dati prima di procedere alla disinstallazione della versione corrente di bSuite e all'installazione del setup. A tal fine procedere come segue:

- Andare in impostazioni generali

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.066.png)


- Selezionare esegui backup

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.067.png)

- Scegliere il percorso nel quale salvare il backup
- Attendere la fine del backup.
- Ricordarsi di salvare la cartella di default in documenti chiamata bSolid.
- Chiudere bSolid.

### <a name="_toc97039210"></a><a name="_toc127375706"></a><a name="_toc134177766"></a>**4.1.2 Arresto dell'applicazione e del WRT**
Per evitare malfunzionamenti, arrestare bSuite e, se si sta lavorando su un PC a bordo macchina, il WRT prima di avviare la disinstallazione dell'applicazione. Il setup di bSuite rileva comunque l'esecuzione di tali processi e chiede che vengano chiusi prima di procedere con l'installazione, la disinstallazione, la modifica o la riparazione.


### <a name="_toc97039211"></a><a name="_toc127375707"></a><a name="_toc134177767"></a>**4.1.3 Disinstallazione della versione corrente di bSuite**
ATTENZIONE: se la versione commerciale di bSuite da rimuovere è antecedente alla versione 3.0.1, prima di disinstallare bSuite è necessario disinstallare manualmente tutte le patch di aggiornamento eventualmente installate.

Le patch sono identificabili dal nome "bSuite Patch <Versione>" dove <Versione> è il numero di versione a cui la patch ha aggiornato bSuite (ad es. "bSuite 3.0.1 Patch 3.18.18.0").

Dalla versione 3.0.1, le patch vengono rimosse automaticamente dall'installer.

Per disinstallare bSuite dal proprio PC aprire "Programmi e funzionalità" dal Pannello di Controllo di Windows e selezionare la voce "bSolid" o "bSuite X.Y.W.Z" dove X.Y.W.Z corrisponde alla versione commerciale (ad es. "bSuite 3.0.6.60") dall'elenco dei programmi.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.068.png)

Premere il pulsante Disinstalla che compare nella toolbar sopra l'elenco dei programmi. Alternativamente è possibile eseguire un doppio click sulla voce.

Apparirà la finestra qui a destra, da cui è possibile premere il pulsante <Disinstalla> in basso a destra per avviare la procedura di disinstallazione.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.069.png)








<a name="_toc97039212"></a><a name="_toc127375708"></a><a name="_toc134177768"></a>**4.1.4 Aggiornamento Driver scheda video dedicata**

---------------------------------------------------------------------------------------------------------------------------------------
A partire dalla versione bSuite 4.0.0 è richiesto l’aggiornamento dei driver della scheda video dedicata all’ultima versione disponibile.
Per eseguire questa operazione è necessario:

1. Aprire il “Pannello di controllo”
1. ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.070.png)Selezionare la voce “Gestione dispositivi”
1. Espandere la sezione “Schede video”

   ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.071.png)
1. Selezionare con il tasto destro del mouse la scheda video dedicata e selezionare l’opzione “Aggiorna driver”

   ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.072.png)

1. Selezionare l’opzione “Cerca automaticamente un driver aggiornato”.
   ATTENZIONE: è necessario che il PC sia collegato alla rete Internet

   ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.073.png)

1. Attendere che la verifica dei driver aggiornati e l’eventuale installazione termini con successo


### <a name="_toc127375709"></a><a name="_toc134177769"></a><a name="_hlk99711384"></a><a name="_hlk116391567"></a>**4.1.5 Configurazione scheda video NVidia** 
<a name="_hlk116391415"></a><a name="_hlk99711311"></a>NOTA: mentre bSuite è in esecuzione non è possibile modificare la dimensione di testo dello schermo. 

Passi da eseguire nel “Pannello di controllo NVIDIA”: 

1. Nella sezione “Regola le impostazioni dell’immagine con anteprima” abilitare il parametro “Usa le impostazioni dell’immagine 3D avanzate” 

   ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.074.png)
1. Cliccare sul link “Apri la pagina” accanto al parametro “Usa le impostazioni dell’immagine 3D avanzate” 
1. Selezionare la voce “Profilo base” nei “Predefiniti globali” 
   ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.075.png)
1. ”Premere il pulsante “Ripristina” per resettare i valori di default (se uno o più di essi era stato precedentemente modificato) 
1. In caso si tratti di un laptop, selezionare la voce “Processore NVIDIA ad alte prestazioni” in “Processore grafico preferito” 
1. Nell’elenco sottostante  “Impostazioni:”, ricercare il parametro “Modalità di gestione dell’alimentazione” ed impostare il valore “Preferisci le prestazioni massime” 

   ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.076.png)
1. Applicare le modifiche effettuate cliccando sul comando “Applica” (pulsante in basso a destra) 


<a name="_toc127375710"></a><a name="_toc134177770"></a>**4.2 Operazioni preliminari su alcuni sistemi operativi**

------------------------------------------------------------------------------------------------------------------
**ATTENZIONE: Durante l'installazione su WINDOWS 10 si potrebbe riscontrare un'anomalia relativa
all'impossibilità di installare il pacchetto di .NET Framework 3.5: tale software è un prerequisito dell'applicazione e deve quindi essere installato obbligatoriamente.
Per installare il software in tale sistema operativo è possibile utilizzare una delle seguenti opzioni:**

### <a name="_bookmark64"></a><a name="_toc97039214"></a><a name="_toc127375711"></a><a name="_toc134177771"></a>**4.2.1 Abilitare .NET Framework 3.5 dal Pannello di Controllo**
La procedura di seguito descritta necessita di una connessione Internet attiva:

1. Premere il tasto Windows  ![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.077.png)  sulla tastiera, digitare Funzionalità Windows e premere Invio. Verrà visualizzata la finestra di dialogo Attivazione o disattivazione delle funzionalità Windows. In alternativa, aprire Pannello di controllo, fare clic sugli elementi Programmi e quindi fare clic su "Attivazione o disattivazione delle funzionalità Windows" in Programmi e funzionalità.

1. Selezionare la casella di controllo .NET Framework 3.5 (include .NET 2.0 e 3.0), fare clic su OK e riavviare il computer, se richiesto.
### <a name="_bookmark65"></a><a name="_toc97039215"></a><a name="_toc127375712"></a><a name="_toc134177772"></a>**4.2.2 Abilitare .NET Framework 3.5 da linea di comando**
E' possibile installare .NET Framework 3.5 anche in assenza di una connessione Internet, utilizzando la seguente procedura:

1. Caricare il CD/DVD di installazione del sistema operativo in uso. Se si è in possesso dell'immagine ISO, è possibile installarla cliccando col tasto destro del mouse sul file e selezionare la voce di menu "Monta"

1. Aprire la console di Windows in modalità Amministratore e scrivere la seguente linea di comando:

   Dism /online /enable-feature /featurename:NetFx3 /All /Source:<Windows Setup Drive>\sources\sxs/LimitAccess

Dove <Windows Setup Drive> è la lettera che contraddistingue il drive in cui è presente il CD/DVD di installazione di Windows o in cui è stata installata l'immagine ISO del sistema operativo. Ad esempio

`        `<a name="_hlk129175648"></a><a name="_hlk129175630"></a>Dism /online /enable-feature /featurename:NetFx3 /All /Source:D:\sources\sxs /LimitAccess

<a name="_hlk129175655"></a>Una volta avviato il comando <a name="_hlk129175669"></a>premendo il tasto invio, Windows installerà .NET Framework 3.5 sul PC.


## <a name="_toc127375713"></a><a name="_toc134177773"></a>**4.3 Installazione di bSuite**
<a name="_hlk129175795"></a>NOTE: 
\- prima di avviare l'installazione di B\_SUITE è necessario assicurarsi che l'utenza in uso abbia i diritti di amministratore del PC.
\- per evitare possibili conflitti con applicazioni esterne è strettamente necessario NON eseguire il setup di installazione dal Desktop del PC e/o dalla cartella “Documenti”.

<a name="_hlk129175806"></a>Copiare la cartella dell'installer sul proprio PC.

**ATTENZIONE: non bisogna in alcun modo copiare la cartella dell'installer di bSuite dentro una delle cartelle di destinazione (ad esempio C:\Biesse o C:\WNC) in quanto la presenza del setup in tali cartelle potrebbe creare dei problemi potenzialmente bloccanti per l'installazione.**

<a name="_hlk129175863"></a>All'avvio del setup, apparirà la seguente finestra

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.078.png)

<a name="_hlk129175931"></a>Premendo il pulsante <Avanti> verrà mostrato il contratto di licenza con l'utente finale

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.079.png)

<a name="_hlk129175984"></a>Per proseguire con l'installazione è necessario accettare i termini del contratto di licenza attivando la spunta corrispondente (evidenziata nell'immagine con un rettangolo rosso).

Si attiverà il pulsante <Avanti> per passare alla schermata successiva, che consente di selezionare il tipo di materiale su cui si intenderà lavorare.
### <a name="_toc97039217"></a><a name="_toc127375714"></a><a name="_toc134177774"></a><a name="_hlk129176014"></a>**4.3.1 Opzioni di Installazione**
<a name="_hlk129176263"></a>La schermata è suddivisa in quattro schede (Pacchetti, Dati di Esempio, Lingue ed Opzioni).
#### <a name="_toc127375715"></a>**4.3.1.1 Pacchetti**
<a name="_hlk129176512"></a><a name="_hlk129176275"></a>La scheda <Pacchetti> consente di selezionare i componenti di base di bSuite e gli eventuali pacchetti opzionali. Saranno quindi disponibili i 2 pacchetti “bEdge”, “bNest”.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.080.png)

<a name="_hlk129176301"></a>NOTA: il check “Installazione a bordo macchina” si attiverà automaticamente nel caso in cui nel PC verrà rilevata la presenza dell’applicativo “WRT” (come nel caso dei computer a bordo macchina).

Con questo check disattivato (modalità ufficio) l’installazione di bSuite PROVVEDERA’ AD INSTALLARE ANCHE IL WRT.

#### <a name="_toc127375716"></a>**4.3.1.2 Lingue**
<a name="_hlk129176312"></a>La scheda <Lingue> consente di selezionare una o più lingue da installare.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.081.png)

<a name="_hlk129176341"></a>La lingua inglese (EN) viene sempre installata e non è quindi possibile deselezionarla. Di default il setup attiva la lingua correntemente selezionata, visibile in alto a destra vicino ai pulsanti di chiusura e riduzione a icona della finestra (nell'immagine sopra è stata evidenziata con un rettangolo rosso). Cliccando sulla lingua corrente del setup, è possibile selezionare una lingua diversa da quella attualmente utilizzata: il setup aggiornerà la finestra automaticamente (nell'immagine seguente, ad esempio, l'utente ha selezionato la lingua tedesca).

#### <a name="_toc127375717"></a>**4.3.1.3 Opzioni**
<a name="_hlk129176376"></a>La scheda <Opzioni> consente di selezionare il file contenente il badge di licenza software

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.082.png)

<a name="_hlk129176395"></a>Di default, il setup installerà il software nella cartella C:\BIESSE

### <a name="_toc127375718"></a><a name="_toc134177775"></a>**4.3.2 Avvio dell'Installazione**
Una volta configurata l'installazione, sarà possibile avviarla premendo il pulsante <Installa>.

Verrà mostrata una barra di avanzamento che consentirà all'utente di capire fino a che punto è arrivata l'installazione dei componenti selezionati.

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.083.png)

### <a name="_bookmark69"></a><a name="_toc97039219"></a><a name="_toc127375719"></a><a name="_toc134177776"></a>**4.3.3 Attivazione firewall**
Se è attivo Windows Firewall, durante l'installazione potrebbero apparire alcune finestre che richiedono l'autorizzazione ad accedere alla rete per alcune applicazioni. Consentire l'accesso alla rete privata, come evidenziato nell'immagine sotto

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.084.png)














## <a name="_toc127375720"></a><a name="_toc134177777"></a>**4.4 Operazioni finali**
Una volta installato bSuite nel PC, eseguire le seguenti operazioni:
### <a name="_bookmark71"></a><a name="_toc97039221"></a><a name="_toc127375721"></a><a name="_toc134177778"></a>**4.4.1 Ripristino di una copia di backup**
In generale, se si è creata una copia di backup dei dati, come specificato in "Creazione di una copia di backup dei dati" (sez.5.1.1), è possibile ripristinare la situazione precedente all'installazione di bSuite eseguendo le seguenti operazioni:

1. Ricercare la cartella in cui sono stati depositati i file di backup.

1. Cliccare due volte sul file .bBack desiderato, o in alternativa trascinarlo sull'icona di bSuite che si trova sul Desktop. Si aprirà la finestra di ripristino dei dati:

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.085.jpeg)

1. Marcare le caselle corrispondenti ai dati da ripristinare (notare che le caselle corrispondenti agli oggetti non presenti nell'archivio di backup sono disabilitate):
- **Utensili**
  Salva la lista degli utensili nel database degli utensili. In tal caso, gli utensili con lo stesso nome verranno sovrascritti.
- **Aggregati**

Salva la lista degli aggregati nel database degli utensili. In tal caso, gli aggregati con lo stesso nome verranno sovrascritti.

- **Deflettori**

Salva la lista dei deflettori nel database degli utensili. In tal caso, i deflettori con lo stesso nome verranno sovrascritti.

- **Sequenze**

Salva la lista delle sequenze nel database delle sequenze

- **Operazioni di lavorazione automatica**

Salva l'elenco delle operazioni di lavorazione automatica nel database di lavorazione automatica.

- **Valori predefiniti**

Sovrascrive i dati di lavorazione e geometria salvati come predefiniti nella scheda Avanzate dell'area dei parametri.

- **Listelli di bordatura**

Salva l'elenco dei bordi nel database degli strumenti. I bordi con lo stesso nome verranno sovrascritti.

- **Etichette**

Salva l'elenco delle etichette nel database degli strumenti. Le etichette con lo stesso nome verranno sovrascritte.

- **Macro**

Salva l'elenco delle macro nel database delle macro. Le macro con lo stesso nome verranno sovrascritte.

- **Modelli**

Salva l'elenco dei modelli, quelli utilizzati per creare un nuovo documento (programma di lavorazione).

- **File CAM**

Aggiorna il contenuto della cartella "... Biesse bS solid"

- **Morsa personalizzata**

Salva l'elenco delle Morse personalizzate nel database delle Morse. Le Morse con lo stesso nome verranno sovrascritte.

1. Nel campo dati "Seleziona le macchine da ripristinare", seleziona le macchine da ripristinare: la selezione è evidenziata da una cornice blu. Per impostazione predefinita, tutte le macchine nel file di backup sono già selezionate. Per selezionare/deselezionare una macchina, fare clic sul suo nome. Per impostare una macchina come predefinita quando bSuite si avvia, fare clic sull'icona a forma di stella in basso a destra (la stella diventerà gialla).
   Per rimuovere l'impostazione predefinita della macchina, fare nuovamente clic sull'icona a forma di stella (la stella diventerà grigia). Per ripristinare anche i dati WRT, attivare la casella di controllo "Ripristina dati CN". Questo controllo è presente solo se i dati NC sono disponibili per la corrispondente macchina.

1. Selezionare la casella di controllo "Elimina tutti i modelli di macchine preesistenti" solo se si desidera eliminare tutti i modelli di macchine esistenti (ad esempio quelli importati dall'installazione di bSuite) e mantenere solo quelli nel file di backup.

1. Selezionare la casella di controllo "Elimina dati e configurazioni esistenti" solo se si desidera eliminare tutti i dati nella fase di ripristino per sostituirli con quelli prelevati dal file di backup. In caso contrario, per sovrascrivere quelli esistenti e aggiungerne di nuovi, lasciare la casella disattivata.

1. Fare clic sul pulsante <Ripristina>.

1. Attendere il completamento dell'operazione di ripristino, quindi chiudere il dialogo e avviare bSuite.









### <a name="_toc97039222"></a><a name="_toc127375722"></a><a name="_toc134177779"></a>**4.4.2 Eventuali anomalie riscontrate all'avvio dell'applicazione**
Quando viene eseguita l'installazione di bSuite, eventuali files di configurazione di un'installazione precedente presenti nella cartella utente Documenti\Biesse Spa\bSuite che non vengono rimossi dalla disinstallazione, vengono modificati oppure eliminati (in quest'ultimo caso viene creata una copia di backup del file con estensione.bak) per far sì che bSuite si avvii con le nuove impostazioni risultanti dalle opzioni selezionate nell'interfaccia dell'installatore.

Se si riscontrano delle anomalie all'avvio dell'applicazione, chiudere bSuite ed eliminare manualmente il file SuiteSetup.bSetup presente nella cartella Documenti\Biesse Spa\bSuite.

La rimozione del file assicura che al riavvio dell'applicazione verrà ricreato il file di configurazione in base alle selezioni effettuate dall'utente al momento dell'installazione.

Se l'anomalia persiste è necessario chiamare l'assistenza tecnica di Biesse S.p.A.


2. # <a name="_toc134177780"></a>**Procedura di installazione della licenza di rete del modulo resti di bNest**

### <a name="_toc97039224"></a><a name="_toc127375724"></a><a name="_toc134177781"></a>**5.1.1 Materiale necessario**
- “bNest\_Dongle\_Server.exe” (nella cartella di distribuzione dell’installer di bSuite a partire dalla versione 3.0.8.140, nel percorso Installer\Packages\bSolid\Wood)
- File di licenza resti abilitata alla condivisione di rete
- Chiave hardware abilitata alla condivisione di rete
### <a name="_bookmark75"></a><a name="_toc97039225"></a><a name="_toc127375725"></a><a name="_toc134177782"></a>**5.1.2 Procedura di installazione e configurazione del server**
- Inserire la chiave hardware e avviare il pacchetto di installazione “*bNest\_Dongle\_Server.exe*” sulla postazione indicata come server
- Una volta terminata l’installazione, impostare il percorso della licenza di rete da condividere selezionando il file di licenza di rete “VirtualHwKey-xxxx.ini”
- Viene avviato il “Server chiavi hardware 15.10” che rimane in esecuzione e viene lanciato in modo automatico all’avvio della postazione.
- Aprendo la scheda “Informazioni diagnostiche”, è possibile visualizzare l’UUID della chiave hardware, il percorso in cui viene importata la licenza, l’indirizzo IP e la porta da utilizzare in bNest per collegare la licenza di rete

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.086.png)





















### <a name="_toc97039226"></a><a name="_toc127375726"></a><a name="_toc134177783"></a>**5.1.3 Procedura di configurazione del client**
Nelle postazioni in cui è installato bNest che necessitano del collegamento di rete del modulo resti:

- Avviare bNest, e aprire la gestione delle licenze per il modulo dei resti (confermare con ok se appare il messaggio di licenza già installata)
- Impostare la “cartella configurazione” con il percorso che contiene il file di licenza “VirtualHwKey-xxxx.ini”
- Premere l’icona “preleva codice di attivazione da internet” e verificare che venga compilato il campo “codice di controllo”
- Impostare il “Server chiavi hardware” con *IP* nota sotto\* e *Porta* della postazione sulla quale è installato “bNest\_Dongle\_Server” (se bNest è installato sulla stessa postazione del server, utilizzare come IP “Localhost”)
- Cliccare sull’icona della chiave e verificare che appaia il messaggio”Chiave hardware trovata”
- Premere Conferma e successivamente ok per sostituire l’eventuale file di licenza precedente

![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.087.png)

- Verificare che appaia il messaggio “licenza correttamente installata”, e provare ad elaborare un progetto contenente resti senza avere errori di licenza


*NOTA\**: si consiglia di inserire il nome del server nel campo “Server chiavi hardware”; se si volesse inserire l’IP è necessario impostare l’IP statico nel server.


# <a name="_toc134177784"></a>**6  Chiarimenti e informazioni aggiuntive**

<a name="_toc134177785"></a>**6.1 <a name="_toc127375728"></a>Compatipilità CIX**

---------------------------------------------------------------------------------
Le informazioni relative alla compatibilità dei file CIX tra bSolid e Biesseworks sono specificate nei documenti distribuiti con il Setup nel percorso DVD\Support\CIX
<a name="_toc127375729"></a><a name="_toc134177786"></a>**6.2 Semplificazione degli elementi 3D del modello macchina**

----------------------------------------------------------------------------------------------------------------------
Al fine di massimizzare le prestazioni degli ambienti contenenti il modello 3D della macchina (Simulazione macchina, Attrezzaggio, Dati macchina) si rende noto che per tutti le macchine importate con versione antecedente alla 3.0.7.125 è fortemente consigliato di eseguire nuovamente l’import del modello macchina (con le dovute precauzioni).
L’effetto di questa procedura sarà quello di dare luogo ad un nuovo modello 3D con la medesima qualità grafica, ma alleggerito delle mesh superflue (rif. SWR 118374, sez. 2.7.27 delle ReleaseNotes bSuite 3.0.7)


# <a name="_toc134177787"></a>**7  Localizzazione**
L’applicazione è localizzata in:

- Bulgaro
- Ceco
- Cinese tradizionale
- Coreano
- Croato
- Danese
- Ebraico
- Estone
- Finlandese
- Francese
- Giapponese
- Greco
- Inglese
- Italiano
- Lettone
- Lituano
- Norvegese
- Olandese
- Polacco
- Portoghese
- Rumeno
- Russo
- Slovacco
- Sloveno
- Spagnolo
- Svedese
- Tedesco
- Turco
- Ungherese



il manuale è tradotto in:

- Inglese
- Francese
- Spagnolo
- Tedesco
- Bulgaro
- Ceco
- Croato
- Danese
- Estone
- Finlandese
- Norvegese
- Olandese
- Polacco
- Portoghese
- Rumeno
- Russo
- Sloveno
- Svedese
- Turco
- Ungherese


|<a name="_hlk95472211"></a>**Release**|**Type**|**Date**|**B\_SUITE Bundle**|**B\_SOLID**|**B\_NEST**|**B\_LABEL**|**B\_REPOSITORY**|**B\_OPTI**|
| :- | :- | :- | :- | :- | :- | :- | :- | :- |
|**B\_SUITE 4.1.0**|Official<br>Release|05/05/2023|4\.1.0.121|13\.7.13|13\.0.511.0|13\.1.3.0|9\.0.162.0|2\.0.466.0|
# ` `**<a name="_toc134177788"></a>8  Storia versioni rilasciate**
Pag. 70** di 70**
![](Aspose.Words.26376403-20c7-405b-a190-7fee55209607.088.png)
