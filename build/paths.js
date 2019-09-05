var path = require('path');
var fs = require('fs');


/** Parses package.json */
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

/** Name of the sources directory */
var sourcesRoot = 'rijkshuisstijl/';

/** Name of the static (source) directory */
var staticRoot = sourcesRoot + 'static/rijkshuisstijl/';


/**
 * Application path configuration for use in frontend scripts
 */
module.exports = {
    // Parsed package.json
    package: pkg,

    // Path to the sass (sources) directory
    sassSrcDir: sourcesRoot + 'sass/',

    // Path to the sass (sources) entry point
    sassSrc: sourcesRoot + 'sass/**/*.scss',

    // Path to the (transpiled) css directory
    cssDir: staticRoot + 'css/',

    // Path to the js entry point (source)
    jsEntry: sourcesRoot + 'js/index.js',

    // Path to the compatibility js entry point (source)
    compatEntry: sourcesRoot + 'js/compat.js',

    // Path to js (sources)
    jsSrc: sourcesRoot + 'js/**/*.js',

    // Path to the js (sources) directory
    jsSrcDir: sourcesRoot + 'js/',

    // Path to the (transpiled) js directory
    jsDir: staticRoot + 'js/',

    // Path to js code coverage directory
    coverageDir: 'reports/jstests/',
};
