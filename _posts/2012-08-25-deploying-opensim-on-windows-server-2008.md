---
layout: post
title: Deploying OpenSim on Windows Server 2008 R2
summary: Since writing the Windows Server 2008 guide I’ve changed how I deploy OpenSim and I’m also using Windows Server 2008 R2. These instructions also assume you’ll be developing your own patches, rather than pre-compiled binaries. These instructions will not cover “hardening” or other security-related aspects of managing Windows Server 2008 R2, nor will it cover fine-tuning performance of any of the software used. They also differ slightly from how deploy islands at work, i.e. I compile in c# express on my workstation rather than on the server.
date: 2012-08-25 21:25
author: SignpostMarv
categories: OpenSim
tags: how-to "Windows Server 2008" "Windows Server 2008 R2"
showInNav: true
comments: true
---
Since writing the [Windows Server 2008](2011/02/10/deploying-opensim-on-windows-server-2008) guide I’ve changed how I deploy OpenSim and I’m also using Windows Server 2008 R2. These instructions also assume you’ll be developing your own patches, rather than pre-compiled binaries. These instructions will not cover “hardening” or other security-related aspects of managing Windows Server 2008 R2, nor will it cover fine-tuning performance of any of the software used. They also differ slightly from how deploy islands at work, i.e. I compile in c# express on my workstation rather than on the server.

### Required Software

1. [Windows Server 2008 R2](http://www.microsoft.com/en-gb/server-cloud/windows-server/2008-r2-trial.aspx)
1. [.NET](http://www.microsoft.com/net/download/earlier-versions). OpenSim currently uses .net 3.5.
1. [MySQL](http://www.mysql.com/downloads/mysql/) – you’ll want a 64bit installer.
1. Git Bash from [Git for Windows](http://msysgit.github.com/)
1. [OpenSim source code](http://opensimulator.org/wiki/Developer_Documentation#Source_Code_Repository_Access)

#### Optional Software

These are optional tools that make certain tasks easier, but since they’re optional I won’t cover them here.

* [7-zip](http://www.7-zip.org/) Used for opening up the gzipped tarballs.
* [MySQL Workbench](http://www.mysql.com/products/workbench/) If you need GUI access to the database without having to install software such as phpMyAdmin.
* [Notepad++](http://notepad-plus-plus.org/) is more useful than the windows notepad and perhaps more convinient than vim under Git Bash.

### Windows Server 2008 R2

I’ve found it best to have two accounts on the server- one for installing the software and another that OpenSim actually runs under- so make sure you have an account created as a *Standard user* and *not* an Administrator from the **Create New Account** window.

You’ll want to read the [MSDN blog article on installing .NET 3.5 on Windows Server 2008 R2](http://blogs.msdn.com/b/sqlblog/archive/2010/01/08/how-to-install-net-framework-3-5-sp1-on-windows-server-2008-r2-environments.aspx).

The instructions for configuring the Firewall haven’t changed much since [the previous version of Windows Server 2008](2011/02/10/deploying-opensim-on-windows-server-2008), the only apparent difference being the ability specify port ranges.

#### MySQL

These instructions were written for mysql 5.5.27, installer options may change between versions.

1. Accept the GPL license
1. Select **Custom** from *Choose Setup Type*
1. Make sure that the **MySQL Server** and **Client Programs** features will be installed.
1. Click **Install**.
1. Close the popup for MySQL Enterprise.
1. Make sure that the checkbox for **Launch the MySQL Instance Configuration Wizard** is checked, then click **Finish**.
1. Select **Detailed Configuration**.
1. Select **Server Machine** for the server type.
1. Select **Multifunctional Database** for the database usage.
1. The **InnoDB Tablespace Settings** can probably be left as default.
1. For concurrent connections, the **Decision Support (DSS)/OLAP** option is probably sufficient.
1. Networking options can likely be left as default.
1. Set the *default character set* to **Best Support for Multilingualism**.
1. Tick the boxes for **Install As Windows Service** and **Include Bin Directory in Windows PATH**.
1. Select a password for the root account, being sure to note it down. You likely **do not** to **Enable root access from remote machines**, nor do you need to **Create An Anonymous Account**.
1. **Execute** the configuration.

##### Database Setup

Now you’ve got MySQL installed, you’ll want to set up the database for OpenSim to use. Decide upon a password for the OpenSim database (and use that instead of **‘password’**), then start the **MySQL 5.5 Command Line Client** and enter the following commands into the console, pressing enter after each line.

```sql
CREATE DATABASE opensim;
CREATE USER ‘opensim’@’localhost’ IDENTIFIED BY ‘password';
GRANT ALL PRIVILEGES ON opensim.* TO opensim@localhost IDENTIFIED BY ‘password';
FLUSH PRIVILEGES;
quit
```

#### Git for Windows

These instructions were written for Git 1.7.11-preview20120620, installer options may change between versions.

You could use GUI tools for getting the OpenSim source, but there’s some useful tools that come along with Git Bash!

1. Accept the GPL license
1. The default install directory is probably sufficient.
1. You probably don’t need the **Additional icons**, nor do you likely need **Windows Explorer integration**. It is recommended to *not* **Associate .sh files to be run with Bash**.
1. The default **Start Menu Folder** is probably sufficient.
1. Select **Use Git Bash Only**.
1. Select **Checkout Windows-style, commit Unix-style line endings**.
1. You probably *don’t* need to **View ReleaseNotes.rtf**

Now you’ll want to log in as the OpenSim user you created earlier.

#### OpenSim

##### Building OpenSim

Start Git Bash and enter the following commands into the console, pressing Enter after each line.

Do note that the *git clone* command can take a while, so have patience :)

1. cd /c/
1. mkdir -p opensim/source
1. mkdir -p opensim/archive
1. mkdir -p opensim/dist
1. mkdir -p opensim/config
1. mkdir -p opensim/regions
1. cd opensim/source
1. git clone git://opensimulator.org/git/opensim
1. cd opensim
1. git checkout 0.7.3.1-release

Now you’ll want to go to **C:\opensim\source\opensim** in Windows Explorer.

1. Run the runprebuild2010.bat file.
1. Run the compile.bat file

Now go back to the Git Bash console.

```bash
cd bin
tar –exclude=”.*” -pvczf “../../../archive/opensim 0.7.3.1-release.tgz” * 1> /dev/null
cd ../
git clean -fxd
git checkout 0.7.4-rc2
```

Now you’ll want to go to **C:\opensim\source\opensim** in Windows Explorer.

1. Run the runprebuild2010.bat file.
1. Run the compile.bat file

Now go back to the Git Bash console.

```bash
cd bin
tar –exclude=".*" -pvczf "../../../archive/opensim 0.7.4-rc2.tgz" * 1> /dev/null
cd ../
git clean -fxd
git checkout master
```

Now you’ll want to go to **C:\opensim\source\opensim** in Windows Explorer.

1. Run the runprebuild2010.bat file.
1. Run the compile.bat file

Now go back to the Git Bash console.

```bash
cd bin
tar –exclude=".*" -pvczf "../../../archive/opensim master-`date +%Y-%m-%d_%H-%M-%S`.tgz" * 1> /dev/null
cd ../
```

That might have been a little repetitive, but you now have builds of bleeding-edge OpenSim, 0.7.3.1-release and 0.7.4-rc2. This makes it quite easy to do testing of in-world features across different versions of OpenSim.

##### Setting up ROBUST

In the previous step we ended up with two releases of OpenSim as well as a build of the latest source. For purposes of stability, we’ll set up ROBUST to use 0.7.4-rc2 rather than the master branch. Go back to the Git Bash console.

```bash
cd /c/opensim/dist
mkdir 0.7.4-rc2
cd 0.7.4-rc2
tar -zxvf “../../archive/opensim 0.7.4-rc2.tgz”
cd ../../config
cp ../dist/0.7.4-rc2/Robust.HG.ini.example ./Robust.HG.ini
cp ../dist/0.7.4-rc2/config-include/Grid.ini Grid.ini
cp ../dist/0.7.4-rc2/config-include/GridCommon.ini.example GridCommon.ini
vim Robust.bat
```

We’re going to want to make it easier to change what version Robust uses at a later date, so we’re using a .bat file to have one place to make changes rather than several. Enter the following into the vim console:

```dos
echo "Launching Robust"
start "Robust 0.7.4-rc2" /D C:\opensim\dist\0.7.4-rc2\ /MIN "C:\opensim\dist\0.7.4-rc2\Robust.exe" -inifile "C:\opensim\config\Robust.HG.ini" -logconfig "C:\opensim\config\Robust.exe.config"
```

To save the contents, press the Esc key then type **:wq** finally, press the Enter key.

Now the next step could either be done with **vim** in the Git Bash console or by opening the file in Notepad++ (which might make it easier for some people to read through).

1. Open c:\opensim\config\Robust.exe.config
1. Change **Robust.log** to **C:\opensim\config\Robust.log**
1. Save changes
1. Open c:\opensim\config\Robust.HG.ini
1. Go to the **DatabaseService** section of Robust.HG.ini and change the **Password** parameter of the **ConnectionString** to match the one you entered earlier on the MySQL console.
1. Change the values of the **GridInfoService** section to something appropriate to the network location of your server.
1. Save changes
1. Open c:\opensim\config\Grid.ini
1. Change the value of **Include-Common** to **C:\opensim\config\GridCommon.ini**
1. Save changes
1. Open c:\opensim\config\GridCommon.ini
1. Comment out the **Include-Storage** line for **SQLite**.
1. Uncomment **StorageProvider = “OpenSim.Data.MySQL.dll”** and the **ConnectionString** line below it
1. As with Robust.HG.ini, change the value of the **Password** parameter.
1. Replace all instances of **http://mygridserver.com** with the address of your server.
1. Save changes

You can now start Robust.exe by launching Robust.bat! If you want to change which version it uses in future, edit **Robust.bat** and replace all instances of **C:\opensim\dist\0.7.4-rc2\** with the new version directory.

Run **Robust.bat** by double-clicking it to set Robust away!

##### OpenSim

Now we want to get some islands set up! Go back to the Git Bash console.

```bash
cd /c/opensim/regions
mkdir -p welcome/regions
mkdir -p welcome/backup
mkdir -p welcome/crashes
cd welcome
cp /c/opensim/dist/0.7.4-rc2/OpenSim.ini.example OpenSim.ini
cp /c/opensim/dist/0.7.4-rc2/OpenSim.exe.config OpenSim.exe.config
touch startup.txt
touch shutdown.txt
touch OpenSim.bat
```

Now the next step could either be done with **vim** in the Git Bash console or by opening the file in Notepad++ (which might make it easier for some people to read through).

###### OpenSim.ini

Open **C:\opensim\regions\welcome\OpenSim.ini**

1. Open **C:\opensim\regions\welcome\OpenSim.ini**
1. In the **Startup** section, set
```ini
save_crashes = true
crash_dir = “C:\opensim\regions\welcome\crashes”
regionload_regionsdir = “C:\opensim\regions\welcome\regions\”
```
1. In the **Network** section, set
```ini
http_listener_port = 9000
```
1. In the **Architecture** section, set
```ini
Include-Architecture = “C:\opensim\config\Grid.ini”
```
1. Save changes
1. Open **C:\opensim\regions\welcome\OpenSim.exe.config**
1. Change **OpenSim.log** to **C:\opensim\regions\welcome\OpenSim.log**
1. Save changes
1. Open **C:\opensim\regions\welcome\OpenSim.bat** & enter the following:
```dos
echo "Launching OpenSim"
start "Welcome" /D C:\opensim\dist\0.7.4-rc2\ /MIN "C:\opensim\dist\0.7.4-rc2\OpenSim.exe" -inifile "C:\opensim\regions\welcome\OpenSim.ini" -logconfig "C:\opensim\regions\welcome\OpenSim.exe.config"
```
1. Save changes

You can now launch **C:\opensim\regions\welcome\OpenSim.bat**, and follow the prompts in the OpenSim console to create your first region! You will likely be prompted to go back to the Robust console to perform the **create user** command when creating your first Estate.

For version testing, you’ll want to repeat the above instructions, but using the appropriate directory paths for each version (e.g. *C:\opensim\dist\0.7.3.1-release*).

For deploying new islands, repeat the above directions but using a different directory to **welcome**, such as **sandbox**. It helps to give the directories meaningful names! :D

##### Upgrading

[Sensible precautions](http://opensimulator.org/wiki/Upgrading) should be taken when upgrading, such as backing up the database and config files. In order to switch a bunch of islands to a different version of OpenSim:

1. enter the **shutdown** command on the appropriate OpenSim console.
1. open the relevant **OpenSim.bat** file.
1. change the file & directory paths from the old version to the new version.
1. save changes & reopen **OpenSim.bat**
