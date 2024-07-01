---
title: June 1st 2024 to July 1st, 2024 Sponsors Update
date: Last Modified
permalink: "{{page.filePathStem}}.html"
layout: default
tags: sponsorUpdates
---
# Repo / NPM Package Updates

Existing packages that weren't directly-related to the Satisfactory Clips Archive or Community Highlights Archive were shifted over to satisfactory.dev so that it was clear which work was archive-related and which was generally satisfactory-related.
-   [GitHub](https://github.com/satisfactory-dev)
-   [NPM](https://www.npmjs.com/settings/satisfactory-dev/packages)
-   [Web](https://satisfactory.dev/)

The GitHub reorganisation also meant that all the relevant repos now show up on [one project planner](https://github.com/orgs/satisfactory-dev/projects/1) instead of having one in my personal GitHub space separate from the different specific GitHub organisations.

# New NPM Packages

## [@satisfactory-dev/custom-assert](https://www.npmjs.com/package/@satisfactory-dev/custom-assert)

Forked from [@satisfactory-dev/docs.json.ts](https://www.npmjs.com/package/@satisfactory-dev/docs.json.ts), for easier reuse amongst the calculator-related projects.

## [@signpostmarv/intermediary-number](https://www.npmjs.com/package/@signpostmarv/intermediary-number)

Forked from [Satisfactory-Production-Calculator](https://github.com/satisfactory-dev/Satisfactory-Production-Calculator), the guts of the ~~[experimental production calculator](https://tools.satisfactory.video/experimental-production-planner/)~~ [slightly-less experimental production planner](https://u8.satisfactory.dev/planner/).

## [@satisfactory-dev/predicates.ts](https://www.npmjs.com/package/@satisfactory-dev/predicates.ts)

Forked from [Docs.json.ts](https://www.npmjs.com/package/@satisfactory-dev/docs.json.ts) in pursuit of having less of a headache dealing with getting exports working with Docs.json.ts & Rollup 😅

## [@satisfactory-dev/ajv-utilities](https://www.npmjs.com/package/@satisfactory-dev/ajv-utilities)

Forked from [Docs.json.ts](https://www.npmjs.com/package/@satisfactory-dev/docs.json.ts) in pursuit of having less of a headache dealing with getting exports working with Docs.json.ts & Rollup 😅

## [@satisfactory-dev/docs.json.ts-production-planner](https://www.npmjs.com/package/@satisfactory-dev/docs.json.ts-production-planner)

Still not exactly easy to use because of the [licensing blocker](https://questions.satisfactorygame.com/post/65e5367dcd33105bd53f931f), but now no longer needs to be used as a git submodule

## [@signpostmarv/setup-performance-observer](https://www.npmjs.com/package/@signpostmarv/setup-performance-observer)

Forked from [Docs.json.ts](https://www.npmjs.com/package/@satisfactory-dev/docs.json.ts) in pursuit of having less of a headache dealing with getting exports working with Docs.json.ts & Rollup 😅

# ~~Calculator~~ Planner Updates

-   pending items from giant todo list from previous update transposed to ~~[GitHub](https://github.com/users/SignpostMarv/projects/1)~~ GitHub, then later moved to [a new GitHub organisation planner](https://github.com/orgs/satisfactory-dev/projects/1)
-   started recording ["state of dev"/live coding/testing style streams](https://gaming.signpostmarv.name/playlist/satisfactory-experimental-production-planner/) where I use my current playthrough as a testbed for interacting with the calculator.
- [Website moved](https://u8.satisfactory.dev/planner/)
- Trying to refer to the project as a planner not a calculator 😅

## Docs.json.ts

-   Forked [custom assertions to it's own repo](https://github.com/satisfactory-dev/Custom-Assert) + [npm package](https://www.npmjs.com/package/@satisfactory-dev/custom-assert) for use in [Intermediary Number repo](https://github.com/SignpostMarv/Intermediary-Number)
- [repo](https://github.com/satisfactory-dev/Docs.json.ts) moved to new GitHub organisation.

## [satisfactory-dev/Satisfactory-Production-Calculator](https://github.com/SignpostMarv/Satisfactory-Production-Calculator)

[issues list for this period](https://github.com/satisfactory-dev/Satisfactory-Production-Calculator/issues?q=updated%3A%3E=2024-06-01+updated%3A%3C=2024-07-01)

-   readme finally added
-   web worker support experimented with but put on hold when it didn't quite behave as expected
-   some false positives & false negatives in what calculation strings were considered valid resolved
-   number-specific code forked to a [separate repository](https://github.com/SignpostMarv/Intermediary-Number) + npm package

### [SignpostMarv/Intermediary-Number](https://github.com/SignpostMarv/Intermediary-Number/)

[issues list for this period](https://github.com/SignpostMarv/Intermediary-Number/issues?q=updated%3A%3E=2024-06-01+updated%3A%3C=2024-06-30)

-   `DeferredCalculation` (a character-by-character parser) replaced with `TokenScan` (a span-based parser)
	-   Performance of calculator notably improved
-   fixed [bug with left-to-right token scanning resulting in ridiculously incorrect results](https://github.com/SignpostMarv/Intermediary-Number/issues/6), [BODMAS order](https://github.com/SignpostMarv/Intermediary-Number/issues/7) flagged as a feature to do later.

## [SignpostMarv/Satisfactory-Production-Calculator-UI](https://github.com/SignpostMarv/Satisfactory-Production-Calculator-UI)

-   not made open source, repo is issues only. This is similar to SCIM's source [not being open](https://github.com/AnthorNet/SC-InteractiveMap/commit/ca243cad8b95b0c834fed07763696ba6fa9081f1), except with the calculator's UI source repo not being public.
-   names of pools, groups, and collections are now context-dependant (id number will only be appended in contexts where collisions are relevant)
-   example save files can now be opened into the json document loading dialog, allowing them to be viewed/edited before being loaded.
-   production pools/names now featured in relevant dialogs
-   toggle for auto-following the current pool (affects state of sidebar)
-   ~~auto-upgrade of JSON Documents from older versions to current version~~ legacy version support dropped, auto-upgrade will still be employed in future updates.
	-   example save files don't need to be updated in order to continue to be used
-   new save has a default pool, document loader supports poolless documents
-   migrated to [npm package](https://www.npmjs.com/package/@satisfactory-dev/docs.json.ts-production-planner) rather than using the repo as a git submodule.

### Reports

-   consistent sort order for report views
-   different sections of the report views highlighted to try and avoid change blindness when scrolling

### Recipe Selections

-   recipe selections now able to be set at the global, collection, and group levels in addition to the pool-level recipe selections.
-   recipe selection items can be removed
-   recipe selections can be cloned from other pools before being customised
-   toggle to defer recalculation until after recipe selection dialog closed
-   added recipe ingredient icons to recipe selection dialogs

### Production Flinging

-   sort order now able to be changed without editing the JSON document
-   undesired behaviour where zero-amount items would be filtered from production flinging fixed
-   entries now able to be deleted (previously stuck with either editing the JSON document or setting output amount to zero)
-   input items now able to be used as production flinging sources, meaning pools can function as being equivalent to redistribution floors
-   breadcrumb trail for destination added to dialog to avoid inadvertently adding the wrong pool as a destination (re: duplicate names)
