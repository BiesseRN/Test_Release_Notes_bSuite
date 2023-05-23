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
![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.001.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.002.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.003.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.004.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.005.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.006.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.007.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.008.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.008.png)
![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.009.png)![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.010.png)


2. # **Procedura di installazione della licenza di rete del modulo resti di bNest**

### <a name="_toc97039224"></a><a name="_toc127375724"></a>**5.1.1 Materiale necessario**
- “bNest\_Dongle\_Server.exe” (nella cartella di distribuzione dell’installer di bSuite a partire dalla versione 3.0.8.140, nel percorso Installer\Packages\bSolid\Wood)
- File di licenza resti abilitata alla condivisione di rete
- Chiave hardware abilitata alla condivisione di rete
### <a name="_bookmark75"></a><a name="_toc97039225"></a><a name="_toc127375725"></a>**5.1.2 Procedura di installazione e configurazione del server**
- Inserire la chiave hardware e avviare il pacchetto di installazione “*bNest\_Dongle\_Server.exe*” sulla postazione indicata come server
- Una volta terminata l’installazione, impostare il percorso della licenza di rete da condividere selezionando il file di licenza di rete “VirtualHwKey-xxxx.ini”
- Viene avviato il “Server chiavi hardware 15.10” che rimane in esecuzione e viene lanciato in modo automatico all’avvio della postazione.
- Aprendo la scheda “Informazioni diagnostiche”, è possibile visualizzare l’UUID della chiave hardware, il percorso in cui viene importata la licenza, l’indirizzo IP e la porta da utilizzare in bNest per collegare la licenza di rete

![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.011.png)





















### <a name="_toc97039226"></a><a name="_toc127375726"></a>**5.1.3 Procedura di configurazione del client**
Nelle postazioni in cui è installato bNest che necessitano del collegamento di rete del modulo resti:

- Avviare bNest, e aprire la gestione delle licenze per il modulo dei resti (confermare con ok se appare il messaggio di licenza già installata)
- Impostare la “cartella configurazione” con il percorso che contiene il file di licenza “VirtualHwKey-xxxx.ini”
- Premere l’icona “preleva codice di attivazione da internet” e verificare che venga compilato il campo “codice di controllo”
- Impostare il “Server chiavi hardware” con *IP* nota sotto\* e *Porta* della postazione sulla quale è installato “bNest\_Dongle\_Server” (se bNest è installato sulla stessa postazione del server, utilizzare come IP “Localhost”)
- Cliccare sull’icona della chiave e verificare che appaia il messaggio”Chiave hardware trovata”
- Premere Conferma e successivamente ok per sostituire l’eventuale file di licenza precedente

![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.012.png)

- Verificare che appaia il messaggio “licenza correttamente installata”, e provare ad elaborare un progetto contenente resti senza avere errori di licenza


*NOTA\**: si consiglia di inserire il nome del server nel campo “Server chiavi hardware”; se si volesse inserire l’IP è necessario impostare l’IP statico nel server.


Pag. 5** di 5**
![](Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.013.png)
