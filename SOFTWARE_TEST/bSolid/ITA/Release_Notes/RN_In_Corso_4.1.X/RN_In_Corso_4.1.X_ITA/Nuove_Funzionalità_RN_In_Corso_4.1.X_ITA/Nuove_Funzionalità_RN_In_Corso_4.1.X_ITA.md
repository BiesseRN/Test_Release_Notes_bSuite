**Nuove funzionalità**
----------------------------------------------
**B_SUITE 4.1.0.121**<br>

**Feature 197422: [bSuite][bNest] Ottimizzazione sul trasferimento file a seguito dell’import di più articoli che riferiscono lo stesso file**<br>

E' stata ottimizzata la gestione del trasferimento e archiviazione dei file di programma (bSolid, cix, ...) associati agli articoli da importare (da csv, da file, ecc.) facendo in modo di trasferire un solo file nel caso più articoli riferiscono lo stesso file, o di non trasferire i file nel caso siano già presenti in archivio. Questa ottimizzazione può rendere più "leggeri" i backup di bNest.**

<hr>

**Feature 197424: [bSuite] [bNest] Nesting con tecnologia indotta**<br>

E' stata aggiunta una nuova tecnologia automatica che permette di applicare una fresatura intorno ad ogni singolo pezzo dello schema di nesting. Questa funzionalità è molto utile nel caso di pezzi composti da sole geometrie. 
Per attivare questa funzionalità basta andare nei parametri di progetto e selezionare "Fresatura a pezzo singolo" nel tipo di fresatura della tecnologia automatica**

![Image Not Found](Image/Aspose.Words.5060ec76-ade4-47a5-9909-f396d2b98e18.003.jpeg)

Per impostare tutti i parametri tecnologici e di comportamento della fresatura a pezzo singolo, basta andare nella specifica scheda

![Image Not Found](Image/Aspose.Words.5060ec76-ade4-47a5-9909-f396d2b98e18.004.jpeg)

Tra i parametri di comportamento di questa scheda particolarmente importanti sono quelli relativi alla gestione del punto di attacco, che offrono la possibilità di decidere in quale punto del pezzo posizionare il punto di attacco (es. sul tratto più lungo, in base all'ordine di distacco dei pezzi, prediligendo i tratti lineari, ...).
