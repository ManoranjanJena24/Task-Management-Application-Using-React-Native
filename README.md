
# TaskFlow

Task Management Application using React-Native

## Pre-requisites
Android-SDK- Download here: https://developer.android.com/studio#command-tools
Scroll to the bottom of the page till `Command line tools only` 
and download the zip file for your system.

SDK Platform-tools - Download here:
https://developer.android.com/tools/releases/platform-tools
Download the zip file applicable for your system.

After this, extract the files in the folder *`C:/Android/Sdk`*
The folder structure should look like this:

C: \
└── Android\
&nbsp;&nbsp;└── Sdk\
&nbsp;&nbsp; │ └──cmdline-tools\
&nbsp;&nbsp; │ │  └── (version)\
&nbsp;&nbsp; │ │  └── bin\
&nbsp;&nbsp; │ └── platform-tools\
&nbsp;&nbsp; │ │  └──adb\
&nbsp;&nbsp; │ │  ├── fastboot\
&nbsp;&nbsp; │ │  ├── systrace\
&nbsp;&nbsp; │ │  └── (other tools)
## Running the Project

&nbsp;&nbsp; 1. Navigate to your project directory.\
&nbsp;&nbsp; 2. Run `npm i`\
&nbsp;&nbsp; 3. Run `expo start --android`.
## Environment Variables

Set up the `ANDROID_HOME` environment variable and add `%ANDROID_HOME%\platform-tools` to your system's `Path` variable:

&nbsp;&nbsp; 1. Open the Start menu and search for "Environment Variables".\
&nbsp;&nbsp; 2.  Click on "Edit the system environment variables".\
&nbsp;&nbsp; 3. In the System Properties window, click on the "Environment Variables" button.\
&nbsp;&nbsp; 4. Under "System variables", click on "New" to create a new environment variable.\
    - Variable name: `ANDROID_HOME`\
    - Variable value: `C:\Android\Sdk` \
&nbsp;&nbsp; 5. Click "OK" to save the new variable.\
&nbsp;&nbsp; 6. Find the `Path` variable in the "System variables" section, select it, and click "Edit".\
&nbsp;&nbsp; 7. Add a new entry with the path `%ANDROID_HOME%\platform-tools`.\
&nbsp;&nbsp; 8. Click "OK" to save the changes.\
&nbsp;&nbsp; 9. Open a new Command Prompt window and run `adb` to verify the setup
