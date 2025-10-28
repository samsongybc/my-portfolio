// Hide percentage numbers on skill progress bars
// This script runs BEFORE the plugin initializes to set the data attribute
jQuery(document).ready(function($) {
    // Add data attribute to disable percentage count
    $('.line-progressbar').attr('data-showcount', 'false');
});
