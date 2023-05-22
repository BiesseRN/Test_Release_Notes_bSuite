**Operazioni Preliminari**

Nel caso in cui nel PC sia già installata una versione di bSuite, prima di avviare la procedura di installazione devono essere eseguite le seguenti operazioni
<br>
<br>
<br>
**Creazione di una copia di backup dei dati**

Creare una copia dei dati prima di procedere alla disinstallazione della versione corrente di bSuite e all'installazione del setup. A tal fine procedere come segue:

- Andare in impostazioni generali

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.009.png)


- Selezionare esegui backup

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.010.png)

- Scegliere il percorso nel quale salvare il backup
- Attendere la fine del backup.
- Ricordarsi di salvare la cartella di default in documenti chiamata bSolid.
- Chiudere bSolid.

### <a name="_toc97039210"></a><a name="_toc127375706"></a>**4.1.2 Arresto dell'applicazione e del WRT**
Per evitare malfunzionamenti, arrestare bSuite e, se si sta lavorando su un PC a bordo macchina, il WRT prima di avviare la disinstallazione dell'applicazione. Il setup di bSuite rileva comunque l'esecuzione di tali processi e chiede che vengano chiusi prima di procedere con l'installazione, la disinstallazione, la modifica o la riparazione.


### <a name="_toc97039211"></a><a name="_toc127375707"></a>**4.1.3 Disinstallazione della versione corrente di bSuite**
ATTENZIONE: se la versione commerciale di bSuite da rimuovere è antecedente alla versione 3.0.1, prima di disinstallare bSuite è necessario disinstallare manualmente tutte le patch di aggiornamento eventualmente installate.

Le patch sono identificabili dal nome "bSuite Patch <Versione>" dove <Versione> è il numero di versione a cui la patch ha aggiornato bSuite (ad es. "bSuite 3.0.1 Patch 3.18.18.0").

Dalla versione 3.0.1, le patch vengono rimosse automaticamente dall'installer.

Per disinstallare bSuite dal proprio PC aprire "Programmi e funzionalità" dal Pannello di Controllo di Windows e selezionare la voce "bSolid" o "bSuite X.Y.W.Z" dove X.Y.W.Z corrisponde alla versione commerciale (ad es. "bSuite 3.0.6.60") dall'elenco dei programmi.

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.011.png)

Premere il pulsante Disinstalla che compare nella toolbar sopra l'elenco dei programmi. Alternativamente è possibile eseguire un doppio click sulla voce.

Apparirà la finestra qui a destra, da cui è possibile premere il pulsante <Disinstalla> in basso a destra per avviare la procedura di disinstallazione.

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.012.png)








<a name="_toc97039212"></a><a name="_toc127375708"></a>**4.1.4 Aggiornamento Driver scheda video dedicata**

-----------------------------------------------------------------------------------------------------------
A partire dalla versione bSuite 4.0.0 è richiesto l’aggiornamento dei driver della scheda video dedicata all’ultima versione disponibile.
Per eseguire questa operazione è necessario:

1. Aprire il “Pannello di controllo”
1. ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.013.png)Selezionare la voce “Gestione dispositivi”
1. Espandere la sezione “Schede video”

   ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.014.png)
1. Selezionare con il tasto destro del mouse la scheda video dedicata e selezionare l’opzione “Aggiorna driver”

   ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.015.png)

1. Selezionare l’opzione “Cerca automaticamente un driver aggiornato”.
   ATTENZIONE: è necessario che il PC sia collegato alla rete Internet

   ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.016.png)

1. Attendere che la verifica dei driver aggiornati e l’eventuale installazione termini con successo


### <a name="_toc127375709"></a><a name="_hlk99711384"></a><a name="_hlk116391567"></a>**4.1.5 Configurazione scheda video NVidia** 
<a name="_hlk116391415"></a><a name="_hlk99711311"></a>NOTA: mentre bSuite è in esecuzione non è possibile modificare la dimensione di testo dello schermo. 

Passi da eseguire nel “Pannello di controllo NVIDIA”: 

1. Nella sezione “Regola le impostazioni dell’immagine con anteprima” abilitare il parametro “Usa le impostazioni dell’immagine 3D avanzate” 

   ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.017.png)
1. Cliccare sul link “Apri la pagina” accanto al parametro “Usa le impostazioni dell’immagine 3D avanzate” 
1. Selezionare la voce “Profilo base” nei “Predefiniti globali” 
   ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.018.png)
1. ”Premere il pulsante “Ripristina” per resettare i valori di default (se uno o più di essi era stato precedentemente modificato) 
1. In caso si tratti di un laptop, selezionare la voce “Processore NVIDIA ad alte prestazioni” in “Processore grafico preferito” 
1. Nell’elenco sottostante  “Impostazioni:”, ricercare il parametro “Modalità di gestione dell’alimentazione” ed impostare il valore “Preferisci le prestazioni massime” 

   ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.019.png)
1. Applicare le modifiche effettuate cliccando sul comando “Applica” (pulsante in basso a destra) 


<a name="_toc127375710"></a>**4.2 Operazioni preliminari su alcuni sistemi operativi**

--------------------------------------------------------------------------------------
**ATTENZIONE: Durante l'installazione su WINDOWS 10 si potrebbe riscontrare un'anomalia relativa
all'impossibilità di installare il pacchetto di .NET Framework 3.5: tale software è un prerequisito dell'applicazione e deve quindi essere installato obbligatoriamente.
Per installare il software in tale sistema operativo è possibile utilizzare una delle seguenti opzioni:**

### <a name="_bookmark64"></a><a name="_toc97039214"></a><a name="_toc127375711"></a>**4.2.1 Abilitare .NET Framework 3.5 dal Pannello di Controllo**
La procedura di seguito descritta necessita di una connessione Internet attiva:

1. Premere il tasto Windows  ![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.020.png)  sulla tastiera, digitare Funzionalità Windows e premere Invio. Verrà visualizzata la finestra di dialogo Attivazione o disattivazione delle funzionalità Windows. In alternativa, aprire Pannello di controllo, fare clic sugli elementi Programmi e quindi fare clic su "Attivazione o disattivazione delle funzionalità Windows" in Programmi e funzionalità.

1. Selezionare la casella di controllo .NET Framework 3.5 (include .NET 2.0 e 3.0), fare clic su OK e riavviare il computer, se richiesto.
### <a name="_bookmark65"></a><a name="_toc97039215"></a><a name="_toc127375712"></a>**4.2.2 Abilitare .NET Framework 3.5 da linea di comando**
E' possibile installare .NET Framework 3.5 anche in assenza di una connessione Internet, utilizzando la seguente procedura:

1. Caricare il CD/DVD di installazione del sistema operativo in uso. Se si è in possesso dell'immagine ISO, è possibile installarla cliccando col tasto destro del mouse sul file e selezionare la voce di menu "Monta"

1. Aprire la console di Windows in modalità Amministratore e scrivere la seguente linea di comando:

   Dism /online /enable-feature /featurename:NetFx3 /All /Source:<Windows Setup Drive>\sources\sxs/LimitAccess

Dove <Windows Setup Drive> è la lettera che contraddistingue il drive in cui è presente il CD/DVD di installazione di Windows o in cui è stata installata l'immagine ISO del sistema operativo. Ad esempio

`        `<a name="_hlk129175648"></a><a name="_hlk129175630"></a>Dism /online /enable-feature /featurename:NetFx3 /All /Source:D:\sources\sxs /LimitAccess

<a name="_hlk129175655"></a>Una volta avviato il comando <a name="_hlk129175669"></a>premendo il tasto invio, Windows installerà .NET Framework 3.5 sul PC.


## <a name="_toc127375713"></a>**4.3 Installazione di bSuite**
<a name="_hlk129175795"></a>NOTE: 
\- prima di avviare l'installazione di B\_SUITE è necessario assicurarsi che l'utenza in uso abbia i diritti di amministratore del PC.
\- per evitare possibili conflitti con applicazioni esterne è strettamente necessario NON eseguire il setup di installazione dal Desktop del PC e/o dalla cartella “Documenti”.

<a name="_hlk129175806"></a>Copiare la cartella dell'installer sul proprio PC.

**ATTENZIONE: non bisogna in alcun modo copiare la cartella dell'installer di bSuite dentro una delle cartelle di destinazione (ad esempio C:\Biesse o C:\WNC) in quanto la presenza del setup in tali cartelle potrebbe creare dei problemi potenzialmente bloccanti per l'installazione.**

<a name="_hlk129175863"></a>All'avvio del setup, apparirà la seguente finestra

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.021.png)

<a name="_hlk129175931"></a>Premendo il pulsante <Avanti> verrà mostrato il contratto di licenza con l'utente finale

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.022.png)

<a name="_hlk129175984"></a>Per proseguire con l'installazione è necessario accettare i termini del contratto di licenza attivando la spunta corrispondente (evidenziata nell'immagine con un rettangolo rosso).

Si attiverà il pulsante <Avanti> per passare alla schermata successiva, che consente di selezionare il tipo di materiale su cui si intenderà lavorare.
### <a name="_toc97039217"></a><a name="_toc127375714"></a><a name="_hlk129176014"></a>**4.3.1 Opzioni di Installazione**
<a name="_hlk129176263"></a>La schermata è suddivisa in quattro schede (Pacchetti, Dati di Esempio, Lingue ed Opzioni).
#### <a name="_toc127375715"></a>**4.3.1.1 Pacchetti**
<a name="_hlk129176512"></a><a name="_hlk129176275"></a>La scheda <Pacchetti> consente di selezionare i componenti di base di bSuite e gli eventuali pacchetti opzionali. Saranno quindi disponibili i 2 pacchetti “bEdge”, “bNest”.

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.023.png)

<a name="_hlk129176301"></a>NOTA: il check “Installazione a bordo macchina” si attiverà automaticamente nel caso in cui nel PC verrà rilevata la presenza dell’applicativo “WRT” (come nel caso dei computer a bordo macchina).

Con questo check disattivato (modalità ufficio) l’installazione di bSuite PROVVEDERA’ AD INSTALLARE ANCHE IL WRT.

#### <a name="_toc127375716"></a>**4.3.1.2 Lingue**
<a name="_hlk129176312"></a>La scheda <Lingue> consente di selezionare una o più lingue da installare.

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.024.png)

<a name="_hlk129176341"></a>La lingua inglese (EN) viene sempre installata e non è quindi possibile deselezionarla. Di default il setup attiva la lingua correntemente selezionata, visibile in alto a destra vicino ai pulsanti di chiusura e riduzione a icona della finestra (nell'immagine sopra è stata evidenziata con un rettangolo rosso). Cliccando sulla lingua corrente del setup, è possibile selezionare una lingua diversa da quella attualmente utilizzata: il setup aggiornerà la finestra automaticamente (nell'immagine seguente, ad esempio, l'utente ha selezionato la lingua tedesca).

#### <a name="_toc127375717"></a>**4.3.1.3 Opzioni**
<a name="_hlk129176376"></a>La scheda <Opzioni> consente di selezionare il file contenente il badge di licenza software

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.025.png)

<a name="_hlk129176395"></a>Di default, il setup installerà il software nella cartella C:\BIESSE

### <a name="_toc127375718"></a>**4.3.2 Avvio dell'Installazione**
Una volta configurata l'installazione, sarà possibile avviarla premendo il pulsante <Installa>.

Verrà mostrata una barra di avanzamento che consentirà all'utente di capire fino a che punto è arrivata l'installazione dei componenti selezionati.

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.026.png)

### <a name="_bookmark69"></a><a name="_toc97039219"></a><a name="_toc127375719"></a>**4.3.3 Attivazione firewall**
Se è attivo Windows Firewall, durante l'installazione potrebbero apparire alcune finestre che richiedono l'autorizzazione ad accedere alla rete per alcune applicazioni. Consentire l'accesso alla rete privata, come evidenziato nell'immagine sotto

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.027.png)














## <a name="_toc127375720"></a>**4.4 Operazioni finali**
Una volta installato bSuite nel PC, eseguire le seguenti operazioni:
### <a name="_bookmark71"></a><a name="_toc97039221"></a><a name="_toc127375721"></a>**4.4.1 Ripristino di una copia di backup**
In generale, se si è creata una copia di backup dei dati, come specificato in "Creazione di una copia di backup dei dati" (sez.5.1.1), è possibile ripristinare la situazione precedente all'installazione di bSuite eseguendo le seguenti operazioni:

1. Ricercare la cartella in cui sono stati depositati i file di backup.

1. Cliccare due volte sul file .bBack desiderato, o in alternativa trascinarlo sull'icona di bSuite che si trova sul Desktop. Si aprirà la finestra di ripristino dei dati:

![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.028.jpeg)

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









### <a name="_toc97039222"></a><a name="_toc127375722"></a>**4.4.2 Eventuali anomalie riscontrate all'avvio dell'applicazione**
Quando viene eseguita l'installazione di bSuite, eventuali files di configurazione di un'installazione precedente presenti nella cartella utente Documenti\Biesse Spa\bSuite che non vengono rimossi dalla disinstallazione, vengono modificati oppure eliminati (in quest'ultimo caso viene creata una copia di backup del file con estensione.bak) per far sì che bSuite si avvii con le nuove impostazioni risultanti dalle opzioni selezionate nell'interfaccia dell'installatore.

Se si riscontrano delle anomalie all'avvio dell'applicazione, chiudere bSuite ed eliminare manualmente il file SuiteSetup.bSetup presente nella cartella Documenti\Biesse Spa\bSuite.

La rimozione del file assicura che al riavvio dell'applicazione verrà ricreato il file di configurazione in base alle selezioni effettuate dall'utente al momento dell'installazione.

Se l'anomalia persiste è necessario chiamare l'assistenza tecnica di Biesse S.p.A.


Pag. 16** di 16**
![](Aspose.Words.8634bbf2-0062-4359-b7e5-f8c034eddfb0.029.png)
