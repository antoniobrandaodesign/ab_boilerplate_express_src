/**
* # App Rot
*
* This is the App Root
*
* var app = require("./app");
*
* AB Boilerplate
* Copyright (c) 2014 Antonio Brandao <design@antoniobrandao.com>
*
* These comments are only here to have something coming out of "gulp docs", but it's unfinished
*
*/

/*!
* Module dependencies.
*/
var $      = require('jquery');
var utils  = require('ab-js-utils');
// var editor  = require('../../node_modules/dist/js/medium-editor.js');
// var editor  = require('./src/node_modules/dist/js/medium-editor.js');
// var editor  = require('./medium-editor.js');

App.form_factor = utils.device.form_factor();
App.is_mobile   = utils.device.is_mobile();

console.log('APP form_factor : ' + App.form_factor);
console.log('APP is_mobile   : '+ App.is_mobile);

            
module.exports = {

    /**
     * Escape the given `html`.
     *
     * ### Examples:
     *
     *     utils.escape('<script></script>')
     *     // => '&lt;script&gt;&lt;/script&gt;'
     *
     * @param {String} html string to be escaped
     * @return {String} escaped html
     * @api public
     */
    index: function(context)
    {
        console.log('reached abv5 index');
        console.log('context = ' + context);
        // console.dir(context);

        $( document ).ready( function() 
        {
            var editor = new MediumEditor('.editable', {
                buttonLabels: 'fontawesome',
                cleanPastedHTML: true,
                forcePlainText: false
            });

            // var editor = require('./medium-editor.js')
            
            // console.log('- - -');
            // console.log(editor);

            // editor('.editable', {
            //     buttonLabels: 'fontawesome',
            //     cleanPastedHTML: true,
            //     forcePlainText: false
            // });

            // App.form_factor = utils.device.form_factor();
            // App.is_mobile   = utils.device.is_mobile();

            // console.log('form_factor : ' + App.form_factor);
            // console.log('is_mobile   : '+ App.is_mobile);

            if (App.is_mobile)
            {
                // mobilise stuff
            }
            else
            {
                // desktopise stuff
            }

            // svg.convertAllToInline();
        });
    }
}

// var privateFunc = function()
// {

// }