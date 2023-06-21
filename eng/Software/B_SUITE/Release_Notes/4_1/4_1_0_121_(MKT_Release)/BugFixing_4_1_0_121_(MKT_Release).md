**﻿LIST OF PROBLEMS SOLVED**

***

**B_SUITE 4.1.0.121** 

***

**Bug 196134: [bSuite]: PR00018546: bsolid: macro with subaggregate from collision error in optimization.**  

NOTE: it is necessary to manually delete and re-enter the macros.  

***

**Bug 196426: PR00018923: bsolid: instant crash when opening some macros created on the same 4.0**  

***

**Bug 196427: PR00019010 [PAV] : Problem with PAV and rotation step.**  

NOTE: For performance reasons, it is strongly recommended that the customer use a parameter of 0 in the discretization step. This way, the PAV is able to choose the correct step based on the panel dimensions and achieve optimal execution speed.  
![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Bug196427.png)

***

**Bug 196439: [bSuite]: PR00018817: bsolid: "Read from CN" tooling option never reports position of plane 10.**  

NOTE: Is it necessary to import the machine model

***

**Bug 196535: PR00019128: bSolid: 'Save macro with name' command not enabled in BASE module**

***

**Bug 196688: [bNest]: PR00019091: bNest: problem with guillotine milling**

***

**Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**  

NOTE: It is necessary to perform the machine model import with the "preserve data" check enabled.

***

**Bug 196872: [OT] LUA ToolLogic P120: 3D model issues.**  

NOTE: It is necessary to import the machine model with the "preserve data" check enabled and have a PLC version equal to or greater than 16.2.34.005.

***

**Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**  

NOTE: It is necessary to import the machine model with the "preserve data" option enabled.

***

**Bug 197147: PR00019420: HTS flatbed trolleys with side pneumatic wheels on the wrong side. Actually, it's on the right side, but in bSuite it's on the left.**

***

**Bug 197197: [OT] - [bSuite] PR00016886: Collision between 3+1 Multifunction Printer and pieces on two rows of Fingers if there is a translation of pieces.**

***

**Bug 197468: [AU Issue] PR00008869: SANELCO Greece Customer - ISSUE WITH ADJUSTMENT/STORING OF PRINT LABEL OFFSET FROM LPRINT**

***

**Bug 197469: PR00013881: bsolid: systematic crash when attempting to select all sections to create the surface.**

***

**Bug 197470: PR00014496: bsolid: vertical passes swarfing damages the piece during entry/exit movements.**

***

**Bug 197471: PR00015532: bSolid: Y axis UP overrun error.**

***

**Bug 197472: PR00015788: bsolid: pezzo rovinato lavorando una polilinea di 2 elementi**

***

**Bug 197473: PR00015892: bSolid: AXS\_843 error= Positioning beyond Y UP software limit with AlphaCam CIX file.**

***

**Bug 197474: [bSuite]: PR00015136: Error panel: "Software limit switch down XB1 axis".**

***

**Bug 197476: [bSuite]: PR00018312: bsolid: systematic crash when setting the "pass distance" of a pocketing to 3.5mm.**

***

**Bug 197478: [bSuite]: PR00018760: bedge: automatic edging selects the wrong aggregate based on the edge thickness.**

***

**Bug 197479: [bSuite]: PR00018787: bEdge: Issue of edging operations disappearing from the Timeline.**

***

**Bug 197480: [bSuite]: PR00018824: bSolid: systematic crash with 3-axis finishing.**

***

**Bug 197481: PR00018997: bSolid: Incorrect processing and display of toolpaths when using customer backup.**

***

**Bug 197486: Removal of sub-manifold data for the 'tool exchange rate' aggregate**  

NOTE: The 'tool exchange rate' data has been removed from the sub-manifold parameters of the aggregates

***

**Bug 197488: [AU Issue] PR00008763: bNest: unable to process project with 400 items (CIX file)**

***

**Bug 197810: [AU-ISSUE] Probe. Post link for PR00019461 connection**

***

**Bug 196679: [4.1Validation]: shortcut del comando "vista fotorealistica" (Control+Shift+R ) non corretto**  

NOTE: The "photorealistic view" command now displays the correct shortcut "Shift+Alt+P" in its tooltip.

![Immagine](Aspose.Words.b5620f8b-54bf-4551-bbe8-3c17dd581d23.004.png)

***

**Bug 196136: [bSuite]: PR00018836: bSolid: Systematic program crash piece in the machine with setup made with another machine.**

***

**Bug 197482: PR00019052: bSolid: the CAD does not show the correct milling path. It is OK in simulation.**  

NOTE: The solution to the problem needs to be explicitly enabled through a configuration intervention by the Software Support.

***

**Bug 197482: Bug 197483: PR00019150: bSolid: misalignment issue between CAD simulation and machine simulation**  

NOTE: The solution to the problem needs to be explicitly enabled through a configuration intervention by the Software Support.

***

**Bug 198441: [bSuite] [4.1Validation] Impact speed and approach/exit speed are mandatory in error.**

***

**Bug 198612: [bSuite] PR00019623: Creating the edging device with twins doesn't work if the name exceeds 10 characters.**

***

**Bug 196749: PMOR problem after standard Morse exchange (without manipulator) - Winline Step 2 prototype - 1000060407.**

***

**Bug 196767: Winline Step2 - 1000060407 - deflector simulation problem**

***

**Bug 197376: [OT] Cut Headphone Layout for MFLama300 - Winline Step2**  

NOTE: it is necessary to execute import of the machine with the check "preserve data" active.  
Inclusion in the catalog of the 300 blade aggregate models with dedicated cap to allow the two types of cap to be equipped in the same machine as in reality. Therefore, during the import phase, the splinter guard will no longer be imported.

***

**Bug 197821: [Validazione 4.1] Winline Step 2 1000060407: Issue with "Translation with manipulator" command on HYPERCLAMP chuck with exchange on the same row.**

***

**Bug 198431: [bSuite] [4.1Validation] Prototype Winline Step2 - set postprocessor parameter VROT\_T = 4000 [CATALOG] after importing.**  

NOTE: It is necessary to perform the import of the machine model

***

**Bug 196437: [WRT] - PR00019205: bSolid: Milling problem with deflector. The cutter doesn't properly cut. OK without deflector.**

***

**Bug 198028: [bNest] [HCL-Nestlib] Not all articles are included in the project result and an extra plate is used even though there is enough space.**

***

**Bug 198032: [OT] Prototype Winline Step2 - collision with deflector with NOPRK active.**

***

**Bug 196768: Winline Step2 - 1000060407 - Installation of B\_SUITE 4.1.0.48 - problem importing machine backup.**  

NOTE: It is necessary to perform the import of the machine model

***

**Bug 197485: Checklist 3.0.8 - 117 - Crash during simulation with "quality" set to maximum.**

***

**Bug 197484: Checklist 3.0.8 - 099 - Crash during simulation with sound-absorbing panels.**

***

**Bug 198616: [AU-ISSUE] Insertion of plug into LPZ/2 socket (eko 2.x)**  

NOTE: In "Plug/Adhesive insertion" processes, the possibility to parameterize the "Position X" and "Position Y" values using environment variables has been added; for example, it is now possible to use a formula such as "LPZ/2" as the field value.

***

**Bug 198326: [OT] [AU-ISSUE] LUA ToolLogic P139: Incorrect Z coordinate in multifunction simulation.**

***

**Bug 198313: [bSuite] Bill of materials: ISO programs are not executing.**

***

**Bug 197922: [bSuite] PR00019524: bSolid: Problem with a macro, error message "Select a geometry" appears**  

NOTE: the macro needs to be made "edited" (open the macro in "edit" mode, modify a parameter and restore it, save the macro) and then perform a calculation of the processes.

***

**Bug 189116: [bSuite]: PR00017672: bSolid: Problem with correcting tool radius with .STEP files.**

***

**Bug 198317: [OT] LUA ToolLogic P136: Non-colliding blade guard**  

NOTE: It is necessary to execute the machine model import.

***

**Bug 197589: [Au - Biesse] Simulation: incorrect processing carried out before the "non-optimizable" repositioning.**

***

**Bug 197593: [bSuite]: PR00018899: "head and list holes" optimizer doesn't work properly if the holes are missing.**

***

**Bug 200371: [bNest] PR00019904: bNest: Transmission problem with project result consisting of 380 articles. The software crashes.**

***

**Bug 201132: [bNest] PR00019959: bNest:** **Problem with inclined milling, in the resulting project the angle is negative.**

***

**Bug 199974: Crash importing cix version 4.0.**

***

**Bug 196144: [bSuite]: PR00018608: bsolid The CLAMEX macro for the customer does not work properly if the Biesse LAMELLO macro is also present.**  

NOTE: It is necessary to delete the CLAMEX macro and reinsert it in order to apply the new parameter management.

***

**Bug 199981: [OT] Rover fairing graphic problem A1556 1000060444**  

NOTE: It is necessary to import the machine model

***

**Bug 200462: [4.1Validation]: P30 - Crash B\_SUITE during startup, if there is no bEdge folder inside C:\BIESSE\bSuite\Extensions**

***

**Bug 196764: [bSuite]: PR00019001: Hole parameters problem with wrong values ​​after importing CSV file in bNest**

***

**Bug 199966: PR00019803: bSolid: Problem with the "COPY EQUIPMENT" function**

***

**Bug 201222: [PAV] PR00020067: bSolid: problem with PAV "Error 2024 axis limit switches not present or incorrect". (anticipated by sp. 2)**

***

**Bug 196156: [bSuite]: PR00017593: bSolid: Translation error with Dutch language**

***

**Bug 198776: PR00019646: bSolid: systematic crash when changing the panel size**

***

**Bug 202876: [PAV] PR00020190: bSolid: Impossible to optimize machining. Internal Error 2001 (preceded by sp. 3)**

***

**Bug 200502: PR00019909: bSolid: Crash bSolid when handling 5Mb CIX files**  

NOTE: For matrix repetitions, the CIX should not be programmed by inserting 16000 holes, but by using repetitions and 'for' loops in order to save memory usage and increase speed in both calculation and loading of the result.  

loop for:

![](Aspose.Words.b5620f8b-54bf-4551-bbe8-3c17dd581d23.005.png)

Repetitions: 

![](Aspose.Words.b5620f8b-54bf-4551-bbe8-3c17dd581d23.006.png)

***

**Bug 203457: [Validation 4.1] Systematic crash when editing a custom face**

***

**Bug 201023: [bsuite] PR00019967: Bar 2 of fixed bar 12 moves by moving origin 13. Fixed bar 12 moves by moving origin 3**

***

**Bug 203118: [AU-ISSUE] PR00020250 - drilling shock and hyperpod system with assisted plane repositioning**

***

**Bug 203013: [4.1Validation] - P60:Crash send program to list from simulation page**

***

**Bug 203481: [OT] Matricola 1000061428 - Wrong machine graphics (catalog fix).**  

NOTE: It is necessary to perform the machine model import with the "Preserve Data" checkbox enabled.

***

**Bug 196534: PR00018984: bSolid: unreported collision in machine simulation.**

***

**Bug 201156: [bSuite] The diagnostics returns an "crash" error without specifying the problem.**

***

**Bug 201189: [PAV] PR00019484: bSolid: PAV error "The document is not multi-panel" and subsequent systematic crash.**

***

**Bug 197118: PR00019416: bSolid: the manual in Dutch is missing (dutch).**

***

**Bug 200831: [bSuite] bSolid Template with protruding right-side unloaders Rv C matr. 1000058810 (catalog fixed) [CATALOGUE]**  

NOTE: It's necessary to perform the machine model import.  
