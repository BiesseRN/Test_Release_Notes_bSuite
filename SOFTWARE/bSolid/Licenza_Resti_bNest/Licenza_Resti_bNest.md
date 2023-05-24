**Procedura di installazione della licenza di rete del modulo resti di bNest**
---------------------------------------------------------------------------------------
**Materiale necessario**

- “bNest\_Dongle\_Server.exe” (nella cartella di distribuzione dell’installer di bSuite a partire dalla versione 3.0.8.140, nel percorso Installer\Packages\bSolid\Wood)<br>
- File di licenza resti abilitata alla condivisione di rete<br>
- Chiave hardware abilitata alla condivisione di rete

<hr>

**Procedura di installazione e configurazione del server**<br>
- Inserire la chiave hardware e avviare il pacchetto di installazione “*bNest\_Dongle\_Server.exe*” sulla postazione indicata come server<br>
- Una volta terminata l’installazione, impostare il percorso della licenza di rete da condividere selezionando il file di licenza di rete “VirtualHwKey-xxxx.ini”<br>
- Viene avviato il “Server chiavi hardware 15.10” che rimane in esecuzione e viene lanciato in modo automatico all’avvio della postazione.<br>
- Aprendo la scheda “Informazioni diagnostiche”, è possibile visualizzare l’UUID della chiave hardware, il percorso in cui viene importata la licenza, l’indirizzo IP e la porta da utilizzare in bNest per collegare la licenza di rete

  ![Image Not Found](Image/Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.011.png)

<hr>

**Procedura di configurazione del client**
Nelle postazioni in cui è installato bNest che necessitano del collegamento di rete del modulo resti:

- Avviare bNest, e aprire la gestione delle licenze per il modulo dei resti (confermare con ok se appare il messaggio di licenza già installata)<br>
- Impostare la “cartella configurazione” con il percorso che contiene il file di licenza “VirtualHwKey-xxxx.ini”<br>
- Premere l’icona “preleva codice di attivazione da internet” e verificare che venga compilato il campo “codice di controllo”<br>
- Impostare il “Server chiavi hardware” con *IP* nota sotto\* e *Porta* della postazione sulla quale è installato “bNest\_Dongle\_Server” (se bNest è installato sulla stessa postazione del server, utilizzare come IP “Localhost”)<br>
- Cliccare sull’icona della chiave e verificare che appaia il messaggio”Chiave hardware trovata”<br>
- Premere Conferma e successivamente ok per sostituire l’eventuale file di licenza precedente

  ![Image Not Found](Image/Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.012.png)

- Verificare che appaia il messaggio “licenza correttamente installata”, e provare ad elaborare un progetto contenente resti senza avere errori di licenza<br>
**NOTA**: si consiglia di inserire il nome del server nel campo “Server chiavi hardware”; se si volesse inserire l’IP è necessario impostare l’IP statico nel server.
