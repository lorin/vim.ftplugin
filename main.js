//
// Plugin for enabling CodeMirror vim bindings
// Based on:
// - https://github.com/FoldingText/plugins/tree/master/keybindings.ftplugin
// - http://support.hogbaysoftware.com/t/vim-keymappings-please/270/4
//
define(function(require, exports, module) {
	'use strict';

	var Extensions = require('ft/core/extensions').Extensions;

	Extensions.addInit(function (editor) {
        editor.cm().setOption('vimMode', true);
	}, Extensions.PriorityLast);
});
