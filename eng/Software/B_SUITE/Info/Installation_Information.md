**Installation Information**  

***

**Preliminary Steps**  

In case a version of bSuite is already installed on your PC, the following operations must be performed before starting the installation procedure.  

***

**Creating a Backup Copy of Data**  

Create a backup of your data before proceeding with the uninstallation of the current version of bSuite and the installation of the setup. To do so, follow these steps:  

1. Go to general settings

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.011.png)

2. Select "Run Backup"

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.012.png)

3. Choose the location to save the backup.  
4. Wait for the backup to complete.  
5. Remember to save the default folder named "bSolid" in documents.  
6. Close bSolid.  

***

**Closing the Application and WRT**  

To avoid malfunctions, close bSuite and, if you are working on a machine's onboard PC, close WRT before starting the application uninstallation.  
The bSuite setup detects the execution of these processes and prompts you to close them before proceeding with installation, uninstallation, modification, or repair.  

***

**Uninstalling the Current Version of bSuite**  

WARNING: If the commercial version of bSuite to be removed is older than version 3.0.1, you must manually uninstall all the installed update patches before uninstalling bSuite. The patches can be identified by the name "bSuite Patch <Version>", where <Version> is the version number to which the patch has updated bSuite (e.g., "bSuite 3.0.1 Patch 3.18.18.0").   
Starting from version 3.0.1, patches are automatically removed by the installer.    
To uninstall bSuite from your PC, open "Programs and Features" from the Windows Control Panel and select the entry "bSolid" or "bSuite X.Y.W.Z" where X.Y.W.Z corresponds to the commercial version (e.g., "bSuite 3.0.6.60") from the list of programs.   

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.013.png)

Click the Uninstall button in the toolbar above the program list.  
Alternatively, double-click on the entry.  
The following window will appear, from which you can click the <Uninstall> button at the bottom right to start the uninstallation procedure.  

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.014.png) 

***
   
**Dedicated Graphics Card Driver Update**  

Starting from version bSuite 4.0.0, it is required to update the drivers for the dedicated graphics card to the latest available version. To perform this operation, follow these steps:  

1. Open the "Control Panel."  
2. Select "Device Manager."  

  ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.015.png)
   
3. Expand the "Display adapters" section.

  ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.016.png)

4. Right-click on the dedicated graphics card and select "Update driver."

  ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.017.png)

5. Select the option "Search automatically for updated driver software."
   WARNING: Make sure your PC is connected to the internet.

   ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.018.png)

6. Wait for the verification of updated drivers and the installation process to complete successfully.

   ***

**NVidia Graphics Card Configuration**

NOTE: While bSuite is running, it is not possible to modify the screen text size.  

Steps to be performed in the "NVIDIA Control Panel":

1. In the "Adjust image settings with preview" section, enable the option "Use the advanced 3D image settings."

  ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.019.png)

2. Click on the link "Open page" next to the option "Use the advanced 3D image settings."

3. Select the "Base profile" in the "Global presets."

  ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.020.png)

4. Press the "Restore" button to reset the default values (if any of them were previously modified).

5. If you are using a laptop, select the option "High-performance NVIDIA processor" in the "Preferred graphics processor."

6. In the "Settings:" section below, search for the parameter "Power management mode" and set it to "Prefer maximum performance."

  ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.021.png)

7. Apply the changes by clicking the "Apply" button (bottom right).

   ***

**Preliminary Operations on Some Operating Systems**  

WARNING: During the installation on Windows 10, you may encounter an anomaly related to the inability to install the .NET Framework 3.5 package. This software is a prerequisite for the application and must be installed. To install the software on this operating system, you can use one of the following options:

***

**Enable .NET Framework 3.5 from Control Panel**  

The procedure described below requires an active internet connection:

1. Press the Windows key ![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.022.png) on the keyboard, type "Windows Features," and press Enter.   
The "Turn Windows features on or off" dialog box will appear.    
Alternatively, open the Control Panel, click on "Programs," and then click on "Turn Windows features on or off" under Programs and Features.   

2. Check the box for .NET Framework 3.5 (includes .NET 2.0 and 3.0), click OK, and restart the computer if prompted.  
   
***
   
**Enable .NET Framework 3.5 from the Command Line**  

You can install .NET Framework 3.5 even without an internet connection using the following procedure:

1. Insert the installation CD/DVD of the operating system. If you have an ISO image, you can mount it by right-clicking on the file and selecting "Mount."

2. Open the Command Prompt as Administrator and enter the following command:
Dism /online /enable-feature /featurename:NetFx3 /All /Source:<Windows Setup Drive>\sources\sxs/LimitAccess
Replace <Windows Setup Drive> with the drive letter where the Windows installation CD/DVD is located or where the ISO image of the operating system is installed. 
For example:
Dism /online /enable-feature /featurename:NetFx3 /All /Source:D:\sources\sxs /LimitAccess
After running the command, Windows will install .NET Framework 3.5 on your PC.

***

**bSuite Installation**  
   
***
   
NOTE:  
· Before starting the installation of bSuite, make sure that the user account has administrator rights on the PC.  
· To avoid potential conflicts with external applications, it is strictly necessary NOT to run the installation setup from the PC desktop and/or the "Documents" folder.  

1. Copy the installer folder to your PC.
**WARNING: Under no circumstances should you copy the bSuite installer folder into one of the destination folders (e.g., C:\Biesse or C:\WNC), as having the setup in such folders could potentially cause blocking installation issues.**

2. Upon starting the setup, the following window will appear:

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.023.png)

3. By clicking the <Next> button, the end-user license agreement will be displayed:

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.024.png)

4. To proceed with the installation, it is necessary to accept the terms of the license agreement by activating the corresponding checkbox (highlighted in the image with a red rectangle).

The <Next> button will be enabled to proceed to the next screen, which allows selecting the type of material to work on.  

***

**Installation Options**  

The screen is divided into four tabs (Packages, Sample Data, Languages, and Options).  

***

**Packages**  

The Packages tab allows selecting the basic components of bSuite and any optional packages. The two packages "bEdge" and "bNest" will be available.  

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.025.png)

NOTE: The "Machine-side installation" checkbox will automatically activate if the "WRT" application is detected on the PC (as in the case of machine-side computers).  
 With this checkbox deactivated (office mode), the bSuite installation will ALSO INSTALL WRT.  

 ***

**Languages**  

The Languages tab allows selecting one or more languages to install.  

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.026.png)

The English language (EN) is always installed and cannot be deselected. By default, the setup activates the currently selected language, visible at the top right next to the close and minimize window buttons (highlighted in red in the image).  
By clicking on the current setup language, a different language can be selected from the one currently in use.  
The setup will update the window automatically (in the following image, for example, the user has selected the German language).

***

**Options**  

The Options tab allows selecting the file containing the software license badge.  

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.027.png)

By default, the setup will install the software in the C:\BIESSE folder.  

***

**Starting the Installation**  

Once the installation is configured, it can be initiated by clicking the Install button.  
A progress bar will be displayed, allowing the user to track the installation progress of the selected components.  

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.028.png)

***

**Firewall Activation**  
   
If Windows Firewall is enabled, you may see some windows during the installation that require permission to access the network for certain applications.  
Allow access to the private network, as highlighted in the image below:

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.029.png)

***

**Final Operations**  
   
***
   
After installing bSuite on your PC, perform the following operations:

**Restoring a Backup**  
   
In general, if you have created a backup copy of your data as specified in "Creating a Data Backup" (section 5.1.1), you can restore the situation prior to bSuite installation by performing the following steps:

1. Locate the folder where the backup files were saved.

2. Double-click on the desired .bBack file, or alternatively, drag it onto the bSuite icon on the Desktop. The data restore window will open:

![Image Not Found](Software/B_SUITE/Info/Image/Aspose.Words.36f81f01-9f70-4468-adee-9576972549f4.030.jpeg)

3. Check the boxes corresponding to the data you want to restore (note that boxes corresponding to items not present in the backup archive are disabled):
· **Tools**  
  Save the list of tools in the tool database. In this case, tools with the same name will be overwritten.  
· **Aggregates**  
Save the list of aggregates in the tool database. In this case, aggregates with the same name will be overwritten.  
· **Deflectors**  
Save the list of deflectors in the tool database. In this case, deflectors with the same name will be overwritten.  
· **Sequences**  
Save the list of sequences in the sequence database.  
· **Automatic Processing Operations**  
Save the list of automatic processing operations in the automatic processing database.  
· **Default Values**  
Overwrite the saved processing and geometry data as defaults in the Advanced tab of the parameter area.  
· **Edgebanding Strips**  
Save the list of edgebanding strips in the tool database. Strips with the same name will be overwritten.  
· **Labels**  
Save the list of labels in the tool database. Labels with the same name will be overwritten.  
· **Macros**  
Save the list of macros in the macro database. Macros with the same name will be overwritten.  
· **Models**  
Save the list of models used to create a new document (processing program).  
· **CAM Files**  
Update the content of the "... Biesse bS solid" folder.  
· **Custom Vises**  
Save the list of custom vises in the vise database. Custom vises with the same name will be overwritten.  

4. In the "Select Machines to Restore Data" field, select the machines to restore: the selection is highlighted by a blue frame.  
By default, all machines in the backup file are already selected.  
To select/deselect a machine, click on its name.  
To set a machine as the default when bSuite starts, click on the star-shaped icon at the bottom right (the star will turn yellow).  
To remove the machine's default setting, click on the star icon again (the star will turn gray). To also restore WRT data, activate the "Restore CN Data" checkbox.  
This checkbox is only present if NC data is available for the corresponding machine.

5. Select the "Delete All Existing Machine Models" checkbox only if you want to delete all existing machine models (e.g., those imported from the bSuite installation) and keep only those in the backup file.  

6. Select the "Delete Existing Data and Configurations" checkbox only if you want to delete all data during the restore phase and replace it with the data retrieved from the backup file. Otherwise, if you want to overwrite existing data and add new data, leave the checkbox disabled.  

7. Click the "Restore" button.  

8. Wait for the restore operation to complete, then close the dialog and launch bSuite.  

***

**Any anomalies encountered when launching the application**  
   
When bSuite is installed, any configuration files from a previous installation present in the user's Documents\Biesse Spa\bSuite folder that were not removed during the uninstallation will be modified or deleted (in the latter case, a backup copy of the file with the .bak extension is created) to ensure that bSuite starts with the new settings resulting from the options selected in the installer interface.  
If any anomalies occur when launching the application, close bSuite and manually delete the SuiteSetup.bSetup file in the Documents\Biesse Spa\bSuite folder.  
Removing the file ensures that the configuration file will be recreated based on the user's selections during the installation when the application is restarted.  
If the anomaly persists, it is necessary to contact Biesse S.p.A. technical support.  
