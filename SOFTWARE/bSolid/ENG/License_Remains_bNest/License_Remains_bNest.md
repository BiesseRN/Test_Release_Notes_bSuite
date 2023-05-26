**Installation Procedure for bNest Residual Network License**
---------------------------------------------------------------------------------------
**Required Materials**

- "bNest_Dongle_Server.exe" (found in the bSuite installer distribution folder starting from version 3.0.8.140, in the path Installer\Packages\bSolid\Wood)
- Network-enabled residual license file
- Network-enabled hardware key

<hr>

**Server Installation and Configuration Procedure**

- Insert the hardware key and run the installation package "*bNest_Dongle_Server.exe*" on the designated server workstation.
- After the installation is complete, set the path for the shared network license by selecting the network license file "VirtualHwKey-xxxx.ini".
- The "Hardware Key Server 15.10" is launched and remains running automatically upon workstation startup.
- By opening the "Diagnostic Information" tab, you can view the UUID of the hardware key, the path where the license is imported, the IP address, and the port to be used in bNest to connect to the network license.

  ![Image Not Found](Image/Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.011.png)

<hr>

**Client Configuration Procedure**

For workstations with bNest installed that require network connection for the residual module:

- Start bNest and open the license management for the residual module (click OK if prompted with a message stating the license is already installed).
- Set the "configuration folder" to the path containing the license file "VirtualHwKey-xxxx.ini".
- Click the "retrieve activation code from the internet" icon and verify that the "verification code" field is filled.
- Set the "Hardware Key Server" with the *IP* noted below\* and *Port* of the workstation where "bNest_Dongle_Server" is installed (if bNest is installed on the same workstation as the server, use "localhost" as the IP).
- Click the key icon and verify that the message "Hardware key found" appears.
- Click "Confirm" and then "OK" to replace any previous license file if prompted.

  ![Image Not Found](Image/Aspose.Words.d5ef0e30-a93d-46dc-a3b4-63eed9b3e856.012.png)

- Verify that the message "license successfully installed" appears and try processing a project containing residuals without any license errors.
**NOTE**: It is recommended to enter the server name in the "Hardware Key Server" field. If using the IP address, ensure that the server has a static IP assigned.