---
layout: post
title: Using Terragen Classic with Sim on a stick
summary: <a href="http://dwellonit.taterunino.net/sim-on-a-stick/">Sim on a stick</a> gives you 4 regions in a 2&#215;2 layout. The land however is a featureless 512x512m expanse. So you want to have something more interesting, but don&#8217;t want to manually terraform it all? Enter <a href="http://www.planetside.co.uk/index.php?option=com_content&#038;view=article&#038;id=40&#038;Itemid=152">Terragen Classic</a>!
date: 2012-06-05 4:36
author: SignpostMarv
categories: OpenSim
tags: "Posts with missing images"
---

### Terragen

1. Create a *New World* from the *World File* menu.
1. Open the *Landscape* window, then click the *Size* button.
1. Set the *Terrain Grid Points* to *513* and the *metres point spacing* to *1* (this should indicate a terrain size of 512 meters), then click *OK*
1. Click the *Generate Terrain* button in the *Landscape* window, then select *Generate features on existing terrain*.
1. At this point you can click the *Generate Terrain* button in the *Terrain Genesis* window a few times with the different options, or just click it once then edit it later via *View / Sculpt*.
1. Click the *Close* button in the *Terrain Genesis* window, then click the *Modify* button in the *Landscape* window.
1. Enter the height range as being from *0m* to *256m*, click the *Set Height Range* button, then click the *Close* button in the *Terrain Modification* window.
1. Open the *Water* window, set the *Water Level* to *20* then click the *Update Maps* button.
1. At this point you can edit the terrain by clicking *View / Sculpt* in the *Landscape* window, or preview the terrain with the *Rendering Controls* and *3D Preview* windows.
1. In the *Landscape* window, click the *Save* button, making a note of the location where you saved the file.

### OpenSim

1. Open your *RegionConfig.ini* file in a text editor, and make a note of the *Location* property for the *south-west* region (in this example it is *Portable1 1*).
1. Bring up the *OpenSim* console.
1. Using the location you saved the *terragen file* to earlier and the *Location* of the south-west region (*3272 5924* in the example), you’ll need to enter something like the following into the *OpenSim* console (see <a href="http://opensimulator.org/wiki/Server_Commands#terrain_load-tile">Server Commands</a> on the OpenSim Wiki for documentation of this console command):
```bash
change region Portable1 1
terrain load-tile "C:\Users\Foo\My Documents\test.ter" 2 2 3272 5924
change region Portable1 2
terrain load-tile "C:\Users\Foo\My Documents\test.ter" 2 2 3272 5924
change region Portable1 3
terrain load-tile "C:\Users\Foo\My Documents\test.ter" 2 2 3272 5924
change region Portable1 4
terrain load-tile "C:\Users\Foo\My Documents\test.ter" 2 2 3272 5924
```

1. At this point, you may notice that the terrain textures look a little off, but if you try changing the *Ground Textures* in the *Region/Estate* window, it only applies to the south-west region regardless of which region you’re in.
1. Although there’s an option that requires editing the config files, we’re going to use the *OpenSim* console to set the ground texture heights. You’ll need to refer back to the *Location* of all 4 regions from *RegionConfig.ini* (see <a href="http://opensimulator.org/wiki/Server_Commands#Simulator_Commands">Server Commands</a> on the OpenSim Wiki for documentation of this console command):
```bash
set terrain heights 0 20 256 3272 5924
set terrain heights 1 20 256 3272 5924
set terrain heights 2 20 256 3272 5924
set terrain heights 3 20 256 3272 5924
set terrain heights 0 20 256 3272 5925
set terrain heights 1 20 256 3272 5925
set terrain heights 2 20 256 3272 5925
set terrain heights 3 20 256 3272 5925
set terrain heights 0 20 256 3273 5924
set terrain heights 1 20 256 3273 5924
set terrain heights 2 20 256 3273 5924
set terrain heights 3 20 256 3273 5924
set terrain heights 0 20 256 3273 5925
set terrain heights 1 20 256 3273 5925
set terrain heights 2 20 256 3273 5925
set terrain heights 3 20 256 3273 5925
```

You should now have a more interesting 512x512m expanse to look at! Familiarise yourself with *View/Sculpt* window in <a href="http://www.planetside.co.uk/index.php?option=com_content&#038;view=article&#038;id=40&#038;Itemid=152">Terragen Classic</a> or start terraforming with your viewer tools to create a more navigable terrain.
