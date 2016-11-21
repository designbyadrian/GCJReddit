GCJ Theme
=====

Based on Nauty by Axel--. Styles reordered to assist non-tech-savvy mods to edit CSS.

Nauty
=====

Nauty is a Sass fork of Naut, a popular CSS theme for reddit. Additional
details for Naut:

  * [Github project page](https://github.com/Axel--/Naut-for-reddit).
  * [Reddit community](https://www.reddit.com/r/naut).

**This project is currently a work-in-progress.** Details on how to build,
install or otherwise make use of this project will be added to this README
as the project matures.

Differences
===========

Colors
------

The original theme's colors are recreated for the most part, but variations
(e.g. lightening or darkening on hover) are now automatically calculated. In
some cases this results in those colors differing slightly from Naut's
originals.

Customization
=============

Many settings can be found in `src/stylesheets/settings/`, such as colors, labels, and eventually feature toggles.

Building
========

Nauty requires Node.js and `npm`: https://nodejs.org/

It also uses `gulp` for compilation:

    npm install -g gulp

Other dependencies can be installed by running the following within the
project folder:

    npm install

The default `gulp` task may then be used to build:

    gulp

Or may be used in watch mode to rebuild as changes are made:

    gulp watch
