**LIST OF NEW FEATURES**
----------------------------------------------
**B_SUITE 4.1.0.121**

***

**Feature 197422: [bSuite][bNest] Optimization on file transfer when importing multiple items that reference the same file.**  

The management of file transfer and storage for program files (bSolid, cix, etc.) associated with imported items (from CSV, from file, etc.) has been optimized. Now, only one file is transferred if multiple items refer to the same file, or files are not transferred if they are already present in the archive. This optimization can make bNest backups more lightweight.

***

**Feature 197424: [bSuite] [bNest] Nesting with induced technology**  

A new automatic technology has been added, allowing milling to be applied around each individual piece in the nesting pattern. This feature is especially useful for pieces composed solely of geometries. To activate this feature, simply go to the project parameters and select "Single-piece milling" in the automatic technology's milling type.  

![Image Not Found](eng/Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature_197424_01.jpeg)

To configure all the technological and behavioral parameters of single-piece milling, navigate to the specific tab.  

![Image Not Found](eng/Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature_197424_02.jpeg)

Among the behavioral parameters on this tab, the ones related to the attachment point management are particularly important. They offer the possibility to decide where to position the attachment point on the piece (e.g., on the longest stretch, based on the detachment order of the pieces, prioritizing linear stretches, etc.).  
