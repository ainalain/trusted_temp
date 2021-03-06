goog.provide('tr.bProfile.Profile');

goog.require('tr.bProfile.iInfoEditor.InfoEditor');
goog.require('goog.ui.Component');
goog.require('goog.dom');

/**
 * Profile edit component
 * @constructor
 * @extends {goog.ui.Component}
*/
tr.bProfile.Profile = function() {
	goog.base(this);
};
goog.inherits(tr.bProfile.Profile, goog.ui.Component);

goog.scope(function(){
	var Profile = tr.bProfile.Profile;
	var InfoEditor = tr.bProfile.iInfoEditor.InfoEditor;

	/**
	 * Internal decorates the DOM element
	 * @override
	 * @param {node} element
	*/
	Profile.prototype.decorateInternal = function(element) {
		goog.base(this, 'decorateInternal', element);

		this.initInfoEditor_();
	}

	/**
	 * @override	 
	*/
	Profile.prototype.enterDocument = function() {
		goog.base(this, 'enterDocument');
	};

	/*
	 * @private
	*/
	Profile.prototype.initInfoEditor_ = function() {
		var domEditableBlocks = goog.dom.getElementByClass(
			InfoEditor.CssClass.ROOT
		);

		var infoEditorInstance;
		var domEditableBlock;

		for (var i = 0; i < domEditableBlocks.length; i++) {
			infoEditorInstance = new InfoEditor();
			domEditableBlock = domEditableBlocks[i]

			infoEditorInstance.decorate(domEditableBlock);
		}
	};

});