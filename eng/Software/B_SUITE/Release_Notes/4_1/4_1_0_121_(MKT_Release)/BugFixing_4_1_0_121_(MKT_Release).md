**LIST OF PROBLEM SOLVED**
-----------------------------------------------------------------------------------------
**B_SUITE 4.1.0.121**

**Bug 196134: [bSuite]: PR00018546: bsolid: macro with subaggregate from collision error in optimization.**  

NOTE: it is necessary to manually delete and re-enter the macros.

***

**Bug 196426: PR00018923: bsolid: instant crash when opening some macros created on the same 4.0**  

***

**Bug 196427: PR00019010 [PAV] : Problem with PAV and rotation step.**<br>

NOTE: For performance reasons, it is strongly recommended that the customer use a parameter of 0 in the discretization step.  
This way, the PAV is able to choose the correct step based on the panel dimensions and achieve optimal execution speed.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Bug_196427_01.png) 

***

**Bug 196439: [bSuite]: PR00018817: bsolid: "Read from CN" tooling option never reports position of plane 10.**  

NOTE: Is it necessary to import the machine model

***

**Bug 196535: PR00019128: bSolid: 'Save macro with name' command not enabled in BASE module**  

***

**Bug 196688: [bNest]: PR00019091: bNest: problem with guillotine milling.**  

***

**Bug 196820: LUA ToolLogic P122: errata visualizzazione TP15 lama in simulazione macchina**  

NOTE: It is necessary to perform the machine model import with the "preserve data" check enabled.

***

**Bug 196872: [OT] LUA ToolLogic P120: 3D model issues.**  

NOTE: It is necessary to import the machine model with the "preserve data" check enabled and have a PLC version equal to or greater than 16.2.34.005.

***

**Bug 197147: PR00019420: HTS flatbed trolleys with side pneumatic wheels on the wrong side. Actually, it's on the right side, but in bSuite it's on the left.**  

***

**Bug 197197: [OT] - [bSuite] PR00016886: Collision between 3+1 Multifunction Printer and pieces on two rows of Fingers if there is a translation of pieces.**  
