**LIST OF NEW FEATURES**

***

**B_SUITE 4.1.0.121**

***

**Feature 197422: [bSuite][bNest] Optimization on file transfer when importing multiple items that reference the same file.**  

The management of program files (bSolid, cix, etc.) associated with imported items (from csv, files, etc.) has been optimized to transfer and archive only one file if multiple items refer to the same file, or to not transfer the files if they are already present in the archive. This optimization can make bNest backups more "lightweight".

***

**Feature 197423: [bSuite][bNest] Optimization of file archive when multiple items refer to the same file.**  

The management of the application file archive has been optimized to ensure that when multiple items refer to the same program file (bSolid, cix, etc.), there is always only one copy in the archive. This optimization can make bNest backups more "lightweight".

***

**Feature 197424: [bSuite] [bNest] Nesting with induced technology**  

A new automatic technology has been added that allows milling around each individual piece in the nesting layout.  
This functionality is particularly useful for pieces composed of simple geometries.  
To activate this feature, simply go to the project parameters and select "Single piece milling" as the type of milling for the automatic technology.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197424_01.jpeg)  

To set all the technological and behavioral parameters of single piece milling, simply go to the specific tab  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197424_02.jpeg)

Among the behavioral parameters in this tab, those related to the management of the attachment point are particularly important as they offer the possibility to decide where to position the attachment point on the piece (e.g. on the longest segment, based on the order of piece detachment, preferring linear segments, etc.).

***

**Feature 197426: [bNest] Manual displacement of inlets.**  

The possibility of moving the position of milling inlets on a single piece directly from the manual editing environment has been added.  
You can move the inlet of a single piece, a selection of pieces, or the entire layout.  

To do so, there are various modes:

· Using the automatic commands group ![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197426_01.png) which allows positioning the inlet point with the same possibilities offered by the processing parameters:  
· In the default position  
· On the longest segment  
· Toward the nearest edge of the sheet  
· Toward the center of the sheet  
· Using the manual command group ![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197426_02.png) which allow you to rotate the entry point around the piece in discrete steps in both directions, both through clicking on the buttons (and their shortcuts with the Ctrl and '+' and Ctrl and '-' keys), and through a specific slider control where you can go through a full rotation around the piece.  
· Using the mouse wheel directly in combination with the Ctrl key. This can be applied to a single piece by placing the mouse over it, or if you want to act on selected pieces, just position the mouse in the empty space. By rotating the mouse wheel, you will obtain the displacement of the inlet point on the selected pieces.

***

**Feature 197427: [bSuite][bNest] Automatic creation of a new project for missing parts from processed projects (static mode) - porting from bOpti.**  

The "Missing Parts Reintegrate" functionality searches among the selected projects for parts that have not been included in the results and inserts them into a new or existing project.  
The command is marked by the icon ![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197427_01.png)  and it is available in both the project list view.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197427_02.png)  

And it is also available in the project detail view.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197427_03.png)


***

**Feature 197428: [bNest] Integrated project table with new fields: sheets, remnants areas, etc. - porting from bOpti.**  

The project table now includes new fields that provide some general information about the project, as well as some information extracted from the results.  
General information: Folder location, [Sum of] Quantity of lines, Number of lines, Wood species, Thicknesses.  
Results information: Sheets, Remnants, Sheets + Remnants, Number of patterns, Total area, Utilization percentages, Used area (measurement and %), Unused area (measurement and %), Sheet area (measurement and %), Remnant area (measurement and %), Material cost, Total cost, Reusable remnant (measurement and %).  

In the image below, you can see some of the new fields:  
![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197428.png)

***

**Feature 197429: [bNest] Rebranding software - Step 2 (completion of icon integration)**  

The changes introduced with the new bNest interface are purely cosmetic and do not alter the functionality of the application's commands.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197429.png)  

The main changes are:

· Replacement of icons in various environments
· Revision of style for environment tabs

***

**Feature 197430: [bNest] Refactoring for transition to 64-bit (Step 1)**  

Starting from the release of bSuite 4.1.0.X, bNest is a 64-bit application and can only be used on systems running Windows 10 (64-bit) or higher.

***

**Feature 197431: [bSuite][bNest] Clean-up of bNest related to phase-out of NextStep.**  

bNest no longer supports the Nextstep machine and it is no longer possible to process nesting projects for this machine.  

***

**Feature 197432: [bSuite][bNest] Calculation of attack points in relation to separation ordinals.**  

The calculation of the position of attack points in relation to separation ordinals is a functionality that aims to improve the stability of the parts during the machine processing phase of nesting patterns, especially during separation processes.  
In the context of "single-piece milling", separation processes are added to the parts, and it is possible to decide which is the best approach point for the separation process of each part.  
Typically, the possible choices for the position of the approach point for a part are related to the pattern (toward the center, toward the periphery) or to the shape of the part itself (on the originally programmed point, on the longest stretch).  
To facilitate the stability of the pieces during processing, it is also possible to correlate the sequence of detachments that are desired for the pieces with the position of the contact points for those detachment operations.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_01.png)

Among the processing parameters, in the section related to "single-piece milling", it is possible to select all the "rules" to decide the best point on the contour of the piece to insert the contact point for contouring/detachment operations.  
As shown in the figure, it is possible to choose insertion modes based on the pattern or shape of the piece...  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_02.png)

...and it is possible to combine the choice based on the shape of the pieces  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197432_03.png)  

We remind you that in BNEST there are modes of associating ordinal numbers to the pieces, which represent the sequence of detachment of the pieces from the sheet. We also remind you that there are parameters that regulate the assignment of these ordinal numbers to the pieces according to precise rules (from the size of the pieces to their position on the sheet).  
Regarding the choice of the position of the contact points in a context where ordinal numbers have been assigned to the pieces in a pattern, in addition to the possibilities controlled by the parameters shown in the figures above, there is also a working mode available that takes into account the adjacency relationships of the pieces in the results, especially considering the ordinal numbers associated by the system, related to the sequence of detachment.  
The operational principle that characterizes this feature is that, to favor the stability of the pieces during the actual machining process of a nesting pattern, the contact point for the detachment operation of a piece should preferably always be positioned on the segments of the piece profile that are adjacent to:  

1. An area of the pattern with no pieces positioned, i.e., a "full" unprocessed sheet.  
2. An area of the pattern with remnants (which will certainly be detached at the end, which is equivalent to having a full unprocessed sheet at the time of cutting the piece in question).  
3. Other pieces positioned, but preferably with a higher ordinal number, i.e., which will be cut after the piece in question (which is equivalent to having a full board area at the time of cutting the piece in question).  

If we imagine the cutting process of a piece, and the approach point is located in an area near which there is no wood during the cutting process (because there were pieces, but they have already been cut, and therefore the vacuum mechanism in the machine has less "grip"), the detachment process will start and end in a "delicate" point and, in particular, at the end of the process, the only portion of "solid" wood will become smaller and smaller.  
On the contrary, if an approach point is located in such a way as to have a large portion of wood "well held" by the vacuum nearby, then the process will start and end in a context of greater solidity and stability.  
With the "Calculation of attachment points based on detachment ordinals" functionality, it is possible to automatically impose the positioning of attachment points in compliance with adjacency relationships 1, 2, 3, and, once these are satisfied, try to respect the rules imposed regarding the position on the sheet or regarding, for example, the longest section.  
Essentially, there are parameters to adjust the search for attachment points relative to the ordinal numbers associated with the adjacent pieces in the various sections that make up the contour of a certain piece. Once these contour sections are isolated, in the event of finding more than one, the normally defined parameters (such as choosing the longest section) will be applied to them.  

In the figure below, we show the parameters for activating and adjusting this mode of attachment point positioning search.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/FEature197432_04.png)

The first parameter allows you to decide whether to actually consider the adjacency relationships and assigned ordinals for the placement of the approach point on the various pieces.  
Recalling that the pieces can have very different shapes, the other two parameters serve to define:

· The concept of adjacency, determining what is meant by "proximity" between two pieces.  
· The minimum length to define a section as an "adjacency section", making it a candidate for the placement of the approach point  

During the manual editing sessions of the diagrams, where the user can modify the positions of the pieces, automatisms and commands are present to maintain consistency with the rules imparted during the processing phase, since both adjacency relationships and detachment ordinals can potentially be modified.  
The position of the detachment point of a detachment process may undergo automatic changes as a result of the movement of one or more pieces (the piece in question or the adjacent ones) or the modification of the detachment sequence ordinal (for the piece in question or the adjacent ones).  
The system also allows for manual manipulation of the detachment point position, and if a user decides to fix it manually for a piece, then, with appropriate activations, it can also be preserved with respect to subsequent movements and modifications.  
On the other hand, if a user has established a detachment point position for a piece, but then reconsiders the placement of the piece or adjacent pieces on the diagram, it is possible to recalculate the detachment point position coherently.

***

**Feature 197433: [bSuite][bNest] Precision issues with piece and sheet thicknesses/rests**  

The precision problem has been solved by giving the user the ability to manage tolerance.  

***

**Feature 197434: [bNest] Password complexity change for software installations.**  

Changed password complexity for accessing the database.

· Encrypted the password.  
· Created a new SQL instance -> BNEST\_19\_2  

***

**Feature 197435: [bSuite] [bNest] Starting the configurator without waiting for the installation phase to complete.**  

Added, in the batch execution of the configurator, the launch of the restore after the completion of the installer process.  

***

**Feature 197436: Optimizer: remove association from the 'CentroCAM' data of the head**  

This development has changed the meaning of a parameter in the interface, which was called "CAM Center" and now assumes a different meaning, namely "ISO Center".  
This parameter is located in the Machine Data, in the "Operating Units" section, and is present for each of them.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197436.png)  

Until the previous version, for the imported machines (Rover, Winline, Eko), this value had a dual meaning:  

· For CAM, the center represented a container of one or more heads (or operating units), therefore the parameter indicated for each head its belonging "center", and was used both by the optimizer and by the CAM for its reasoning.
· For the PostProcessor, it indicates the section within the ISO file where that head is exported, containing the respective ISO instructions that the head executes on the machine 

With this development, the meaning of a parameter in the interface called "Centro CAM" has been changed and now assumes a different meaning, namely "Centro ISO." This parameter is located in the Machine Data section under the "Operating Units" section, and is present for each unit. Until the previous version, for imported machines (Rover, Winline, Eko), this value had a dual meaning  
For the CAM, the center represented a container for one or more heads (or operating units), and therefore the parameter indicated for each head its "center" of belonging, and was used by both the optimizer and the CAM for its reasoning. For the PostProcessor, it indicates the section inside the ISO file in which that head is exported, containing the respective ISO instructions that the head executes on the machine.  
With this development, the meaning for the PostProcessor remains unchanged, while in the CAM/optimizer, everything is calculated internally, based on reasoning related to the axes and dimensions of the heads.  
For this reason, in the interface, the parameter is called "Centro ISO," and its meaning remains only related to the PostProcessor.  
Additionally, there will be no more diagnostic messages from the CAM with errors related to this parameter since the CAM is now independent of it. This development also allows the optimizer to have greater autonomy in the choices of the processing order and tool changes and, from the results of some internal tests, has improved the performance of some specific cases, particularly on Rover Edge machines.  
For machines not imported (e.g., Modulo, NextStep), that parameter had no significance relative to the PostProcessor, as for these machines, the ISO export center is unique. For this reason, the change has no effect on these machines as it was not a useful piece of data.  
Additionally, the value of the "Interfering Head" parameter (located under "Centro ISO") has also been modified. Previously, this was always empty, except in cases where the numerical control (CN) data populated it.  
Now, bSuite is independent of this concept, and the field is filled based on internal calculations, indicating for each head if there is another (or more than one) that may conflict with interference on at least one axis (example: Rover double Y carriage machines have two heads where X is shared, and Y is not, so they can interfere with each other and will have the respective field filled).  

***

**Feature 197437: [bSuite] display the ISO line in the timeline tooltip (instead of its name)**  

The content of the tooltip for the ISO Line in the Timeline has been modified: the name of the Machine Operation will no longer be displayed, but rather the string contained in the "ISO Line" field within it.  

***

**Feature 197442: [bSuite] 3DE Toolpath obtained through tool compensation using WRT library.**  

The modification of the toolpath calculation algorithm for compensation (3DE), as expected, resulted in the failure of numerous automatic tests.  
Some of these tests were simply revalidated, while others could not be revalidated as they resulted in errors, and were resolved in another way. The list of such tests is provided below.  

**Failures of Gantry programs.**  

Some programs that were erroneously displayed as in the following figure with the old algorithm.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_01.png)  

Now they are displayed as they are actually executed on the machine.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_02.png)  

It is clear that these programs were incorrect and performed incorrect operations on the workpiece.  
This type of test has been modified.  

**Fallures of programs with links between one operation and another.**  

Programs in which the toolpaths were connected because they were (erroneously) aligned.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_03.png)  

With the new toolpath calculation (more accurate), these programs no longer execute the link between one operation and another, even if we are talking about tenths of a millimeter  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_04.png)  

The problem is due to the following parameter present in the "Optimizer Data" of the document,  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197442_05.png)

The problem is due to the following parameter in the "Optimizer data" of the document, which has a default value of 0 and zero means exactly ZERO.  
We intervene in two points in the code in this case. The first point is in CAM where we use a tolerance of 0.1mm even where the user has set zero as "Maximum XY misalignment".  
The second point is in the default value of this parameter for new documents, which will be set to 1 mm in the next version.  
In programs where "Maximum XY misalignment" is set to zero and a tolerance of 0.1 is not sufficient, it will be necessary to increase the value of "Maximum XY misalignment" or modify the program.  

**Failures of nesting programs.**  

With the introduction of the new WRT Offset library, bNest has encountered several failures in tests that can only be resolved with new developments of Nestlib available starting from 04/2023.  
To overcome the regressions, the following decision has been made: bSolid will be released with a compatibility mode for older versions.  
By default, it will not use the WRT offset library.  
The following flag will be present in the BswFiles\IniFiles\CamSwitcher.ini file:  

[Toolpath]  

useOld3de=1  

The customer who wants to use the new offset library must disable the flag as follows:  

[Toolpath]  

useOld3de=0  

***

**Feature 197443: [bSuite][bSolid] Integrate the information into the wireframe generation manual during import.**  

The manual has been updated to provide a complete description of the wireframe generation functionality during import, indicating that it is not available for DXF and STL formats.  

***

**Feature 197444: [bSuite] The possibility to filter the tools equipped in the machine in the processing plugin.**  

The ability to filter machine-equipped tools in the processing plugins has been added.  
A check has been introduced that allows the display of only equipped tools among the tool selection filters. Like other filters, it is reset every time it is opened and its state is not saved.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197444.png)  

***

**Feature 197445: [bSuite] "Hide the 'CAM data' section from the 'Polyline' plugin.**  

The "CAM Data" section in the "Advanced" tab of the "Polyline" plugin has been hidden in the CAD area.  

***

**Feature 197446: [bSuite] Hide the 'CAM Data' section from the 'Point' plug-in.**  

In the CAD area, the "CAM Data" section in the "Advanced" tab of the "Point" plug-in has been hidden.

***

**Feature 196242: [bNest] Subproject deletion command'**  

The functionality related to its deletion has been added to the sub-project definition. The command is:  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196242_01.png)  

The command is also available on the sub-project definition in the results page (processed sub-project):  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196242_02.png)  

Using the command deletes the sub-project, its related project lines, and the corresponding processing results.  
Saving will make the changes effective.  

***

**Feature 196245: [bNest] Management of the feasibility of a subproject**  

The user has been given the possibility to determine whether a subproject is feasible or not. To do so, two processing parameters have been made available to establish a feasibility threshold:  

· By percentage of pieces: a project is unfeasible if the percentage of the area of the pieces inserted in relation to the total area of the used slabs is below the set threshold.  
· By total waste surface: a project is unfeasible if the total waste area exceeds the set threshold.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196245_01.png)  

The two parameters can also be combined; in this case, the subproject is unfeasible if at least one of the two thresholds is not met.  
Once the thresholds are set, if the project is processed, all subprojects that do not meet their respective set thresholds will be marked with a red triangle in the results environment.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196245_02.png)  

When hovering the mouse over the red triangle, a tooltip will appear displaying the reason why the subproject is unfeasible.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196245_03.png)  

***

**Feature 197859: [bNest] (SRFT23009) (Customer KXN) make the density data associated with the plates available in the MNO traces generated by B_NEST**  

The MNO file, created by bNest during processing, contains the list of cutting patterns obtained. Each cutting pattern is associated with information regarding the plate used by the pattern itself.  
Within this information, the density information has been added.  

To set the density of a plate:

· Open the plate register  
· Open a plate  
· Set the density value  
![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197859_01.png)   

To read the density information of the plate used by a cutting pattern, it is sufficient to open the MNO transmitted to the machine and search for the <SHEET> node of interest.  
This node contains the sub-note <SheetInfo>, which contains the "Density" property with the value set in bNest.  
![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197859_02.png)

***

**Feature 197442: [bSuite] 3DE Toolpath obtained through tool compensation using WRT library.**  

In case the customer needs to use the new algorithm for calculating the new 3DE trajectory, it is necessary to contact Software.Support for a verification.  

***

**Feature 196093: [bSuite] Handling WTT between P&R machines**  
Enabling the new "Keep flat tooling with different machine" flag (Tab - "General settings"? [TO BE DEFINED]) is expected to maintain a flat tooling setup when opening a .bSolid file, regardless of the active machine, as long as it is P&R.  
In doing so, bSuite will perform a feasibility check, and when it is not possible to apply the program's tooling (see cases below), a WARNING (yellow) will be generated upon opening the file in the CAD environment.  This warning will display the generic message "WARNING: it was not possible to apply the program's original flat tooling" (without any advanced diagnostics).  

The application of the program's original tooling will not be applied in the following cases:  

· The selected origin in the original flat tooling is not present on the currently active machine.  
· The original flat tooling generates collisions between the flat tooling and/or the machine's trolleys.  
· The positioning of the flat tooling and/or trolleys in the original setup is not within the limits of the currently active machine's axes.  
· The MULTI-PANEL mode is not handled: the original flat tooling was created in multi-panel mode, or the parameter is enabled on the active machine.  
· The FT machines are not handled: the flat tooling was created on an FT machine and/or the active machine is an FT machine.  

When opening a program directly from the Bill of Materials environment, the same behavior as in the previous paragraph is expected: the same warning message will be displayed at the bottom of the screen.  
The functionality should also handle cases where the flat tooling setup includes parametric formulas in the position of the flat tooling and trolleys.  
In the case of multiple flat tooling files saved in a program, the last saved flat tooling (in chronological order) will be applied.  
The description of the parameter in the user manual should be as follows: "Enables (checked) or disables the management of the positioning of flat tooling and trolleys saved in a program on machines different from the one with which it was created. NOTE: The program's original flat tooling will not be applied in the following cases:  

· The selected origin in the original flat tooling setup is not present on the currently active machine.  
· The original flat tooling setup generates collisions between flats and/or trolleys of the currently active machine.  
· The positioning of flats and/or trolleys in the original tooling setup is not within the limits of the axes of the currently active machine.  
· The multipanel mode is not supported: the original flat tooling setup was created in multipanel mode, or the parameter is enabled on the active machine.  
· FT machines are not supported: the flat tooling setup was created on an FT machine and/or the active machine is an FT machine.  

***

**Feature 197441: [bSuite] Refactoring for transition to 64-bit (Step 1)**  
bSuite 64-bit is capable of handling more RAM compared to previous 32-bit versions, resulting in improved performance, especially for functionalities that require processing large amounts of data.  
This means that the application could process data faster and more efficiently, improving productivity and reducing wait times.  
Greater stability: bSuite 64-bit can generally be more stable than the 32-bit version for the same functionality, as it can handle larger amounts of memory and data.  
This means that the application could be less prone to crashes and malfunctions due to limitations on memory usage in 32-bit versions, improving reliability and reducing the risk of data loss.  
Greater compatibility: 64-bit applications are compatible with 64-bit operating systems, which are becoming increasingly common.  

***

**Feature 198680: [bSuite] Management of the LPZ/2 parameter (LpzMiddle) in glue and plug insertion processing.**  

If the LPZ\2 formula is used in the "Plug/Insertion" processing, the plug or insert will always be inserted in the middle of the panel, even after measuring the panel with the gauge on the machine.  
An iso-parametric will be generated. This feature is already active in the drilling process.  

***

**Feature 196248: [bNest] Command to delete all non-viable subprojects.**  

In project management, a function to delete non-viable subprojects has been added.  
The command deletes all processed subprojects identified as "non-viable". The definition of viability is set before processing, and processing identifies the patterns and subprojects that meet the criteria.  
This representation is only available on the results page. The command is available on the left-hand column.  

***

**Feature 197541: [bSuite][bSolid] Tjet management in workings with roller presser**  

The development concerns the management of processes in which the presence of both the T-Jet and the roller presser is programmed.  
If both the T-Jet and the roller pressing are enabled for a process, bSolid will give priority to the roller presser and deactivate the T-Jet.  

***

**Feature 197540: [bSuite][bNest] Default handling of dynamic vacuum activation**  

The goal is to allow the user to activate the dynamic void in the cutting pattern programs, generated by B\_NEST, without necessarily having to set a default behavior in the B\_SOLID parameters.  
In the processing parameters of B\_NEST, in particular, in the "Project parameters" page, "Results" tab, a new section is inserted, called "Program parameters".  
The "Dynamic vacuum" parameter is inserted in this section. This parameter can have the following values:

· Default 
· Active
· Inactive
![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature197540.png)  

·Setting "Default" a program will be generated having the default behavior set in B\_SOLID as management. By setting "Active" or "Inactive", a program will be generated in which the dynamic vacuum will be forced to be respectively active or inactive.

***

**Feature 196741: [bSuite]** **Hide the "CAM Data" section from the "Linear Text" and "Text on Path" plugin**  

The "CAM data" section has been hidden in the "Linear text" inserter and in the "Path text" inserter:  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196741_01.png)  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196741_02.png)  

***

**Feature 196742: [bSuite] Hide the "CAM Data" section from the "Spline" plug-in**  

The "CAM Data" section has been hidden in the "Spline" inserter:    

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196742.png)  

***

**Feature 196740: [bSuite] Hide the "CAM Data" section from the "Partial Selection" plug-in**  

The "CAM data" section has been hidden in the "Partial Selection" inserter:  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature196740.png)  

***

**Feature 199262: [bNest] Management of Common Cut mode with cloning**  

We have eliminated the limitation that existed between the application of the technology to "common milling" and the possibility of Clone the results.  
Typically these two features were dissociated and in previous versions, if "Common cutting milling" was selected, it was not possible to activate cloning as well.  
It was decided to overcome this limit, thus introducing the possibility of combining the two approaches, and making sure that, in most cases, a machine with a double head can also exploit the working speed of the shared cutting technology.  
To be able to set, in the parameters of a bNest project, both the will to carry out the cloning and the will to carry out milling with common cuts, the inhibition that was present before, and which now, when choosing " common cut milling" continues to exist only for the "Multi-Head" approach.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature199262_01.png)


As can be seen in the figure, the "yellow" inhibition signal is now displayed only for the part of the parameters relating to the "Multi-Head", while the parameter configuration sheet for cloning the results is now accessible. To carry out common-cut milling, the order of the machining must be STRICTLY decided during the generation of the nesting results and little is left to the bSOLID time-line optimizer.  
The reason for this is that, given how it is structured, the shared cut milling approach provides for progression criteria for choosing the sequence of pieces to be "cut", and then the sequence becomes strictly rigid, since, after the first piece cut entirely, the adjacent pieces that are chosen, which will have segments "in common" with the pieces previously cut, can be worked "down vertically" on the milling channel of the contours of the previous polygons.  
This implies that all the milling operations with common cuts, with which the pieces are separated, must be entered in the time-line as "strictly" non-optimizable. Giving this "strict" order to the processes, it was impossible for machines with multiple heads to be able to optimize the sequence by "pairing" the processes.  
With this development we really wanted to overcome this limit, inserting the "twin" workings, provided by the cloning, in the time-line of the nesting results, in an "isolated" and orderly way, compared to the others, closed in a section of the time-line , but “open” to the possibility of being treated together by the sequence optimizer.  

**Example of sequence without Cloning + Milling with common cuts**  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature199262_01.png)  

**Example of sequence with Cloning + Milling with common cuts**  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature199262_02.png)  

As can be seen from the figure, the sequence is always scanned in strict order, but in the presence of cloning the cloned parts are coupled and arranged between separators.  
In this way the strict order is guaranteed for the success of the milling operations for the detachment of the pieces, but the optimizer will be able to couple the operations enclosed between separators, effectively realizing the parallelism, since the pieces contained in a section between separators are, in fact, twins and identical.  

***

**Feature 200521: [bNest] Ability to transmit a single delivery note from B_NEST that includes all the sub-projects of the transmitted project.**  

By transmitting a project containing several sub-projects to the machine, different machine parts are generated, one for each sub-project.  
To execute the entire project on the machine to date, the user would have to open and run each separately.  
The development intent is to provide, in addition to the sub-project parts, a "global" part to facilitate executing the entire project on the machine.  
The transmission of the project list in the car is disabled by default.  
To enable it, you need to activate it in the machine settings of B_NEST, within the "Transmission" group.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_01.png)  

By enabling this setting, in the transmission phase, in addition to the sub-project bills of materials, the project bill of materials containing all the cutting schemes generated by the processing of all sub-projects will also be sent. This bill will have the same name as the B_NEST project (unlike the others, which in addition to this name, will also have the name of the sub-project).  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_02.png)  

Consistent with the sub-project bill of materials, the user can also choose the type of bill of materials to generate, by selecting one of the following types:  

1. Unique bill of materials for plates and remnants  
2. Unique bill of materials with separation between plates and remnants  
3. One bill of materials for plates and one for remnants  

The choice of such type is made in the B_NEST machine settings, within the “Transmission” group.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_03.png)  

**Unique label for slabs and remnants**  

This type of transmission involves the sending of a single file containing the list of cutting plans generated by all sub-projects.

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_04.png)  

***

**Unique list with separation between plates and remains**  

This type involves the transmission of a single document containing the list of cutting patterns generated by all sub-projects, arranged as follows:
· Patterns derived from sheets  
· Pause element  
· Patterns derived from scraps  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_05.png)  

***

**A separate sheet for plates and one for scraps**  

This type involves the transmission of two distinct lists, the first containing the list of cutting patterns derived from sheets while the second containing those derived from scraps.  
The unique list of sheets has the same name as the project, while that of the scraps has the same name as the project followed by the suffix "_W".

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_06.png)  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_07.png)  

***

The project bill of materials cannot be transmitted in the following situations:  

· Some sub-projects have not been processed  
· Some sub-projects report transmission errors  
· Trying to transmit only certain sub-projects individually  

In general, the project bill of materials is only transmitted if the total project is transmitted without any sub-project encountering errors.  
Otherwise, a warning message informs the user of the problem.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature200521_08.png)

***

**Feature 198952: [bSuite] [ASR21500] Horizontal Uniclamp Vise H74mm with pins. [CATALOG]**  

A new horizontal clamp with pins has been added to the catalog measuring H74mm, its product code is "ASR21500" while its technical code is "AS50100441".  

***

**Feature 199857: [OT] Eko 1.1 Redesign brake caliper group (CR00011030) PR00019778**  

The technical modification "CR00011030" has been implemented; below is an image identifying the executed modification.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature199857.png)

***

**Feature 196008: [bSuite][Rover A HF] Tool Logic Automatic (expense)**  

The analysis examines a bill of materials for programs (bsolid, .cix, ISO), finding the list of tools that are used by all programs contained in the bill of materials. Tools that undergo multiple changes will be moved from slower warehouses to faster ones in the machine.  
A specific machine will be defined to classify a tool/aggregate as "non-disposable".  
There can be three conditions in the machine:

· **TooLogic automatic** (the tooling calculated by the spending algorithm is applied only if it is convenient relative to the tool change times)  
· **TooLogic always active** (the equipment calculated by the expense algorithm is always applied)  
· **TooLogic disabled** (the spending algorithm's calculated equipment is not being applied)**  

The purchase will be made in this way.  

· The customer puts a different program in Start, which can be composed of bSolid, cix, ISO programs. At the start, programs that are not in .ISO format will be optimized, thanks to the optimization module, with the equipment of the warehouses present on the machine at that time.  
· Once the optimization of programs is completed, which will convert the bSolid and cix programs into .ISO format, a warehouse optimization tool will begin analyzing the obtained programs.  
At the end of this analysis, a new warehouse arrangement and an estimation of the gained or "lost" time will be obtained.  
This will be given by the difference between the tool change times before calculating the new warehouse arrangement and the time necessary to move the tools from slow to fast warehouses, plus the tool change time with the new arrangement.  
· If the conditions reported in the paragraphs below are met, the new warehouse equipment will be implemented.  
· Once the tools have been moved, the cix and bSolid programs will be re-optimized with the new warehouse equipment.  
· At this point, the programs will be executed in the machine with the new setup of the warehouses.  

**NOTE:** Following the development in question, upon the initial launch of bSuite 4.1.0.X, once any backup is restored, tool alignment will be required.  
**The alignment will be required for all types of machines.**  

***

**Feature 199291: CRT parameter management in cix import.**  
The CRT parameter (Edge Type) of Milling processing is imported/exported in CIX.  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature199291_01.png)  

![Image Not Found](Software/B_SUITE/Release_Notes/4_1/4_1_0_121_(MKT_Release)/Image/Feature199291_02.png)  

The CIX syntax is as follows.  

PARAM,NAME=CRT,VALUE=<value>  
with  
<value>=    0:Rotate around;      1:Sharp edge

***

**Feature 197509: [bSuite][bSolid] Digital signature for B\_SUITE executable files.**  

The end-user executables distributed with the application have been digitally signed.  
The digital signature on the executables is useful to ensure the authenticity and integrity of the software being used. The digital signature guarantees that the software has been compiled and distributed by Biesse and has not been modified in any way from its origin.  

***

**Feature 197447: [Process] Changes to installer for Next Step machine support removal.**  

Starting from bSuite version 4.1, the "Next Step" machine will no longer be supported; during the installation phase, only the "Rover FT" machine will be available.  

***

**Feature 196084: [bSuite] Integrazione libreria HOOPS**  

In this new version, the Hoops Techsoft3d library has been integrated for importing external formats.  
The new library replaces the Spatial library. Here is the list of supported formats:  

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
TAS Laser Image (*tas)
Technologic DXF File (* .dxf)
VDA-FS Format (* vda)
Wavefront OBJ (* obj)
WRL Virtual Reality Modeling Language (* .wrml)
WRL Virtual Reality Modeling Language (* .wrl)