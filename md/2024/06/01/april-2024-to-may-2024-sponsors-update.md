---
title: April 2024 to May 2024 Sponsors Update
date: Last Modified
permalink: "{{page.filePathStem}}.html"
layout: default
tags: sponsorUpdates
---
# [ts-assert](https://www.npmjs.com/package/@signpostmarv/ts-assert)
* Forgot to mention ts-assert during the previous update
* code-generated TypeScript assertions package, used by Docs.json.ts

# Production Calculator
-   Using [Docs.json.ts](https://github.com/Satisfactory-Clips-Archive/Docs.json.ts) to provide the type bindings & data, made a Satisfactory Calculator tooled specifically for how I play the game.
-   [made available for testing](https://tools.satisfactory.video/experimental-production-planner/)
-   Going to be opening up the codebases for this, so future updates won't be as big.
-   Unchecked items are those that didn't get implemented at the time of writing.

## Dev Blog

### Production Calculator
-   Using [Docs.json.ts](https://github.com/Satisfactory-Clips-Archive/Docs.json.ts) to provide the type bindings & data, made a Satisfactory Calculator tooled specifically for how I play the game.
-   [made available for testing](https://tools.satisfactory.video/experimental-production-planner/)
-   Going to be opening up the codebases for this, so future updates won't be as big.
-   Unchecked items are those that didn't get implemented at the time of writing.

Dev Blog:

#### General Ideas

##### Bugs

-   [x] Fix tab numbers so Pool 2 after reloading is displayed as Pool 1 - either that or add ability to clear id references
-   [x] Fix bug where one cannot enter a trailing zero on a decimal

##### Group Production Pools

##### Ideas / Features

-   [x] Name individual pools
-   [x] Name groups
-   [ ] Shared input & flinging

#### May 12th, 2024 Demo Stream

##### Ideas / Features

-   [ ] UI for applying the same recipe selection across multiple pools
-   [ ] Maybe add ability to change order of AmountSplitter distribution
-   [x] Sort recipe selection dropdowns to have default recipe at the top
-   [x] Add separate scrollbars for production pool `<aside>` element
-   [x] consider adding ability to enter calculations into input fields & record those calculations to save file
-   [x] consider adding ability to enter recursive number sequences
-   [ ] consider adding "input needed" section on production flinging config
-   [ ] consider adding tree list for ingredients view

#### May 13th, 2024 Tester Feedback

##### Bugs

-   [x] Closing the load dialog soft-locks the calculator, should return to new/load screen

#### May 20th, 2024 Demo Stream

##### Bugs

-   [x] need recursive strings to be left as-entered rather than default to library equivalent
-   [x] check around if calc resolve is being executed in the wrong places
-   [x] either the ui or the calculator repo has a bug with exporting flung output configs, where recursive numbers get converted to calculations then converted again without the right operands
-   [x] double check textures are going to correct directory, icon url says IconDesc rather than possibly expected Icon/Desc
-   [x] possible bug with output flinging, setting output to zero seems to set ingredients needed to zero (flinging steel ingots at steel beams)
-   [x] parts search filtering has jank, needs debounce?
-   [ ] production flinging item selection should not filter 0-amount items

##### Ideas / Features

-   [ ] add ability to bulk change the settings for pools & groups
-   [ ] add ability to delete configured outputs from pools
-   [ ] very terrible idea: live editing of json document 😅
-   [ ] where the state-dependent appending of pool/group id is added to the title attribute, change text contents to non-state-dependent name
-   [x] production flinging config needs to use state-dependant name
-   [x] add debounce delay on input events before running calculations
-   [x] need to add some form of indication when the calculator is busy
-   [ ] maybe add ability to drag & drop pool buttons onto groups to reassign the pools
-   [ ] maybe add ability to re-order pools via drag & drop
-   [ ] need to display total ingredient numbers required somewhere, when ingredients are partially satisfied
-   [ ] ensure calculator tests going to json from json and back to json (there should be cases where the initial input does and does not match the final output)
-   [ ] see how feasible it is to shove calculations into a web worker so ui thread doesn't get blocked by calculations
-   [x] change production input dialog to default to parts
-   [ ] need to add something on the calculator to be able to see ingredients when fully-satisfied as this might not reflect the input numbers
-   [x] entering calculations should save calcuations, loading calculations should retain calculations
-   [ ] add sink as an output destination, display sink points somewhere
-   [ ] need a total ingredients required screen
-   [ ] need to add something on the pool buttons to indicate which button is the currently displayed pool
-   [x] maybe add something on the pool buttons to indicate recently-selected pools
-   [ ] re: previous todo on "input needed", add indicator in dropdown
-   [ ] maybe add button to rebalance input/output numbers, i.e. if changing the production requirements and the pool now has an over supply of input, auto-change the input to be reduced
-   [ ] maybe move output flinging config to pool config
-   [x] add +pool button next to group config button to shortcut add new pool here, move +pool button down to unattached pools
-   [x] maybe add the ability to have collections of groups
-   [ ] need the ability to use pools as redistribution centers, allowing output to be configured based on input alone, rather than production

#### May 21st, 2024 Development Sessions

##### Bugs

-   [x] bug identified with closing the production flinging dialog not closing
-   [x] fixing the production flinging dialog results in first click closing the dialog after opening
-   [x] debounce makes current pool at time of render be used as current pool for calc
-   [x] can't add world-sourced items to production/input etc.
-   [ ] need to be able to add world-sourced items to production/input etc. at some point
-   [x] parts search broke
-   [x] convert calculations checkbox doesn't resolve recursives to recursive strings
-   [x] collection group buttons should show group name not pool name

##### Ideas / Features

-   [x] new item production flinging input does not support calc
-   [x] when input in calculation, production flinging available column should use resolved amount
-   [x] add ability to show/hide all pool buttons
-   [x] add example json documents
-   [x] make toggle setting button have visual feedback
-   [x] group pools list should have +pool button
-   [x] fix build so it doesn't leave old stuff in build directory
-   [x] switch debounce from input handler to calculator
-   [x] adding group should add pool
-   [x] remove reliance on current pool setting
-   [x] switch to tracking current pool id instead of current pool index
-   [x] remove reliance on pool element indices
-   [x] refactor data-action-with-production-pool code
-   [x] split data bundle up
-   [x] add checkbox to save dialog to control whether calculations are resolved in save file
-   [x] deduplicate FormData-related code
-   [x] rework example saves
-   [x] generally deduplicate/refactor lit-html.ts
-   [x] add copies of saves used during stream
-   [x] need to improve loading performance
-   [x] change default save to include 1 collection with 1 group and 1 pool already assigned

#### May 22nd-26th, 2024 Development Sessions

##### Bugs

-   [x] render approach in mvc branch doesn't update on config save
-   [x] case-sensitive typo in collection action detection meant collection actions wouldn't trigger
-   [x] load from json dialog got broken in shift to mvc-esque loading
-   [x] dist syncer copies data files when it should skip them
-   [x] close dialog fails if already closed & removed from dom
-   [x] accidentally made template not update
-   [x] busy cursor doesn't seem to kick in when it should
-   [x] close dialog on production flinging isn't working
-   [x] production flinging updates stopped working

##### Ideas / Features

-   [x] Implement MVC-esque structure to avoid cluttering up main.ts
-   [x] automatically transpose target of button-sourced events to the button rather than the contents
-   [x] avoid using while loop when getting element parent matching a selector
-   [x] pull index.html out of git since it has been performing quite well as a rollup artefact
-   [x] change build directory for cleaner development
-   [x] defer loading of saves until latest possible moment
-   [x] add progress bar to calculator header alongside status emojis
-   [x] calculator loading screen should load as soon as possible
-   [x] prebuilt the faux recipe ingredient list to defer loading of the relatively large Docs.json.ts dataset
-   [x] remove redundant features from close dialog api
-   [x] avoid recalculating unchanged pools
-   [x] shift calculator progress bar so it's always visible
-   [x] shift calculator code to async by default

#### May 26th, 2024 Demo Stream + Development Sessions

##### Bugs

-   [x] collections name does not update when editing
-   [x] unattached groups not displaying
-   [x] looks like production adding requires two clicks when search filter is applied
-   [x] possible bug in recalculation code, adding outputs & closing dialog did not trigger ingredients row in other pool to be hidden
-   [ ] switching to a class-based search filter instead of a dom-based search filter alleviates the double-click issue somewhat, but doesn't totally resolve it
-   [x] save files don't seem to be copying over to dist directory

##### Ideas / Features

-   [x] maybe add force full recalculation button
-   [x] make sure there is a +group button next to collection config button
-   [x] ensure new groups/collections get a pool when added
-   [x] ensure configure collection / configure group buttons are visible when not in full pool display mode
-   [ ] add a Pool-esque type for warehousing that lets you define storage containers and what goes in them
-   [ ] ability to configure textures associated with collections/groups/pools in a similar fashion to how one can configure signs in-game
-   [x] need to show current group pool buttons below collection group pool buttons
-   [x] change collection group pool buttons to use group name
-   [x] maybe consider a explorer-esque tree view for collections & pools in a sidebar
-   [ ] maybe add hints for belt speeds needed for different outputs
-   [x] don't need to copy css over any more
-   [x] reduce length of data url hashes

#### May 27th-28th, 2024 Demo Stream + Development Sessions

##### Bugs / Issues

-   [ ] web worker experiment seemed to not pass json values around as expected.
-   [x] images getting re-rendered in DOM during calculation
-   [x] no scrollbars in calculation area
-   [x] save file loading on slow connection gives no indication the save file is loading
-   [x] names.json/images.json are re-downloaded
-   [x] add pool to group doesn't trigger switch-to-pool
-   [x] loading new save doesn't load specified pool
-   [x] fling output config sets input config
-   [x] recalcualte all seems to leave busy status turned on
-   [x] modals no longer opening as modal, just as normal dialogs
-   [ ] recalculate pool seems to take two clicks?
-   [ ] current deferred rendering approach results in lag for render updates on larger pools
-   [x] production flinging dialog not opening as promptly as expected

##### Ideas / Features

-   [x] async load images
-   [x] need to be able to better highlight which pools are part of a group/collection
-   [ ] need to add a toggle to include the id as part of the pool name, or at least add a method to reduce the scope of the state-dependendant check to the current group/pool
-   [x] Pool config dialog should say name of pool, so when clicking cog icon amongst several unnamed pools, you can be sure which pool you clicked on
-   [x] switching pools can get laggy, switch to dom/css-based approach rather than relying on lit-html render loop
-   [ ] maybe look into doing a save/auto-load feature, would probably need to persist pool history
-   [x] change recalcualte single pool to behave more like calculator.recalculate_all() (re: recalculate_afterwards set)
-   [x] consider adding a changed/unchanged flag to pools such that calculator.recalcualte_all() without a force calculation parameter will do nothing
-   [ ] maybe async load the save json into the save dialog such that the slight delay in the popup rendering goes away
-   [x] allow next render to be lazy rather than next frame
-   [x] image placeholder should reserve space to avoid repositioning surrounding text once images load
-   [x] let images get displayed if images data arrives before names
-   [x] set calculator view to start loading on landing page without interefering with rendering of landing page
-   [ ] put a copy of the current pool's optgroup at the top of the pool config dropdowns to make it easier to assign production to another pool in the same group.
-   [ ] make the fling production recalculation pass happen on next render not current render
-   [x] add a ℹ️ button on groups & collections to get an overview of the state of production at the group/collection level (in addition but seperate to plans to add overall production view)
-   [ ] maybe add a prebuilt lunr index for handling item search
-   [x] maybe add code to detect production isolation boundaries such that a method can return one or more pools, one or more groups, one or more collections, etc. and have those isolated pools recalculated rather than recalculating everything
-   [ ] add button on landing page to load save file into load textarea to allow for save files to be edited before loading

#### May 29th, 2024 Development Sessions

##### Bugs

-   [x] soft-locking the landing page came back

##### Ideas / Features

-   [x] add an IsolationBoundary class to avoid redundant calls to boundary functions
-   [ ] consider adding a forward-only mode for IsolationBoundaries (if pool A feeds into pool B, and pool C pools into pool B, pool C does not need to be in the isolation boundary for pool A)
-   [x] shift raf/ric to promise resolvers so the execution time of the deferred code doesn't get reported as being poopy
-   [x] `'eventually'` mode for deferred rendering should not re-request rendering if a request is already entered
-   [x] should really add a feedback element to indicate what the progress bar is for
-   [x] calculator header needs some padding to avoid calculator scrolling content disappearing right into it
-   [ ] maybe consider node graph-based approach for calculating isolation boundaries

#### May 30th, 2024 Development Sessions

##### Bugs

-   [x] Issue identified with State.pools_impacting_pool() returning irrelevant pools

##### Ideas / Features

-   [x] Split css up so we don't have a landing page with css on that's not going to be used for an indefinite period of time

#### May 31st, 2024 Demo Stream / Development Sessions

##### Bugs / Issues

-   [x] seem to have broken changed property, isolation boundaries seem to have replaced this feature property though.
-   [ ] forgot to keep on top of tests 😅
-   [x] loading json doesn't load calculator css
-   [ ] Pool name not on config dialog, was only added to fling production dialog
-   [x] ingredients list doesn't get displayed when it should, may have been overzealous with removal of post-change recalculation, may need to add changed getter back but in a simpler fashion

##### Ideas / Features

-   [x] Reduce size of active DOM by hiding contents of pools not currently being displayed
-   [ ] need to have some sort of consistent sort order for the reports
-   [ ] add a toggle setting for controling whether the sidebar tree auto closes/expands items as-needed (maybe even scroll to current pool on pool switch / history change)
-   [ ] look into adding either to the calculator or a separate page/view/etc. a power generation calulcator that says how much of a given fuel / water etc. a facility will need, how much power is required to power it, and possibly make recommendations for the number of machines to isolate from the grid. also taking into account per-machine overclocking (maybe).
