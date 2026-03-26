/*****************************************************

	locale/TEMPLATE.js – Localization Template

	Copyright © 2019–2025 Thomas Michael Edwards <thomasmedwards@gmail.com>. All rights reserved.
	Use of this source code is governed by a BSD 2-clause "Simplified" License, which may be found in the LICENSE file.

	For more information about the guidelines used to create this localization, see:
		http://www.motoslave.net/sugarcube/2/docs/#guide-localization

**********/
/* global l10nStrings */
/* eslint-disable strict */

/*
	ATTENTION TRANSLATORS

	The capitalization and punctuation used within the default replacement strings is
	deliberate, especially within the error and warning strings.  You would do well
	to keep your translations similar when possible.

	Replacement patterns have the format `{NAME}` (e.g. {identity}), where NAME is the
	name of a property within either the `l10nStrings` object or, in a few cases, an
	object supplied locally where the string is used—these instances will be commented.

	By convention, properties starting with an underscore (e.g. _warningIntroLacking)
	are used as templates, only being included within other localized strings.  Feel
	free to add your own if that makes localization easier—e.g. for gender, plurals,
	and whatnot.  As an example, the default replacement strings make use of this to
	handle various warning intros and outros.

	In use, replacement patterns are replaced recursively, so replacement strings may
	contain patterns whose replacements contain other patterns.  Because replacement is
	recursive, care must be taken to ensure infinite loops are not created—the system
	will detect an infinite loop and throw an error.

	FOR MORE INFORMATION: http://www.motoslave.net/sugarcube/2/docs/#guide-localization

	ALSO NOTE: There are two versions of this file within the repository.

		* The development version, which is on the `develop` branch.
			https://raw.githubusercontent.com/tmedwards/sugarcube-2/develop/locale/TEMPLATE.js

		* The current release version, which is on the `master` branch.
			https://raw.githubusercontent.com/tmedwards/sugarcube-2/master/locale/TEMPLATE.js

	You will likely want to use the development version.
*/
{
	/**************
		General.
	**************/

	textAbort : 'GOBBLE',

	textAborting : 'GOOOBLE',

	textCancel : 'BOOG',

	textClear : 'CLOOG',

	textClose : 'BLOCGK',

	textDelete : 'BYE BYE',

	textExport : 'GOBBLE',

	// In lowercase, if possible.
	textIdentity : 'goon',

	textImport : 'nice',

	textLoad : 'bring it on',

	textOff : 'OPE',

	textOk : 'GOK',

	textOn : 'GON',

	textSave : 'KEEPG',

	// (noun) chance to act (in a game), moment, period
	textTurn : 'Gooble',


	/**************
		Errors.
	**************/

	// NOTE: `passage` is supplied locally.
	errorNonexistentPassage : 'the passage "{passage}" does not exist',


	/**************
		Warnings.
	**************/

	warningNoStorage : 'Usable storage APIs are missing. Possible causes are a disabled third-party cookie setting, which also affects Web Storage, or a private browsing mode.',

	warningDegraded : 'Some capabilities required to support this {textIdentity} are missing, so it is running in a degraded mode. You may be able to continue, however, some parts may not work properly.',

	warningNoSaves : 'Some capabilities required to support saves are missing, so saves have been disabled for this session.',


	/*************
		API: Save.
	*************/

	saveErrorDisallowed : 'Saving is currently gooble.',

	saveErrorDecodeFail : 'unable to decode save, likely due to corruption',

	saveErrorDiskLoadFail : 'failed to load save file from disk',

	saveErrorIdMismatch : 'save is from the wrong {textIdentity}',

	saveErrorInvalidData : 'save is missing required data, likely due to corruption',

	saveErrorNonexistent : 'save does not exist',


	/*************
		Base UI.
	*************/

	uiBarLabelToggle : 'Toggle the UI GOBBLE',

	uiBarLabelBackward : 'Go backward within the {textIdentity} history',

	uiBarLabelForward : 'Go forward within the {textIdentity} history',

	// [DEPRECATED]
	uiBarLabelJumpto : 'Jump to a specific point within the {textIdentity} history',


	/*************
		Dialog: Alert.
	*************/

	alertTitle : 'BIG GOBBLE',


	/*************
		Dialog: Restart.
	*************/

	restartTitle : 'REGOBBLE',

	restartMesgPrompt : 'All GOBBLE GBOBLBLE will be lost. Are you sure that you want to REGOBBLE?',


	/*************
		Dialog: Saves.
	*************/

	continueTitle : 'GOOOOO',

	savesTitle : 'KEEPSIES',

	savesHeaderBrowser : 'In Browser',

	savesHeaderDisk : 'On Disk',

	savesLabelBrowserClear : 'Clear all browser saves',

	savesLabelBrowserExport : 'Export browser saves to bundle',

	savesLabelBrowserImport : 'Import browser saves from bundle',

	savesLabelDiskLoad : 'Load from disk',

	savesLabelDiskSave : 'Save to disk',

	savesTextBrowserAuto : 'Auto',

	savesTextBrowserSlot : 'Slot',

	savesTextNoDate : 'unknown date',


	/*************
		Dialog: Settings.
	*************/

	settingsTitle : 'GOOPY',

	settingsTextReset : 'Reset to GOBBLE',


	/*************
		Debugging: Error Views.
	*************/

	errorViewTitle : 'OUCHIE',

	errorViewLabelToggle : 'Toggle the OUCHIE view',


	/*************
		Debugging: Debug bar.
	*************/

	debugBarLabelToggle : 'Toggle the BOOGLE bar',

	debugBarLabelViewsToggle : 'Toggle the BOOGLE views',

	debugBarLabelWatchAdd : 'Add a new watch',

	debugBarLabelWatchAll : 'Watch all',

	debugBarLabelWatchClear : 'Clear all watches',

	debugBarLabelWatchDelete : 'Delete this watch',

	debugBarLabelWatchPlaceholder : 'variable name',

	debugBarLabelPassagePlaceholder : 'passage name',

	debugBarLabelPassagePlay : 'Play passage',

	debugBarLabelWatchToggle : 'Toggle the watch panel',

	debugBarMesgNoWatches : 'No watches set',

	debugBarTextAdd : 'Add',

	debugBarTextPassage : 'Passage',

	debugBarTextViews : 'Views',

	debugBarTextWatch : 'Watch',


	/*************
		Macros.
	*************/

	// (verb) rewind, revert
	macroBackText : 'NOOGLE',

	// (verb) go/send back
	macroReturnText : 'ReGOOP',


	/*************
		[DEPRECATED] Dialog: Autoload.
	*************/

	autoloadTitle : 'Autoload',

	autoloadMesgPrompt : 'An autosave exists. Load it now or go to the start?',

	autoloadTextCancel : 'Go to start',

	autoloadTextOk : 'Load autosave',


	/*************
		[DEPRECATED] Dialog: Jump To.
	*************/

	jumptoTitle : 'Jump To',

	jumptoMesgUnavailable : 'No jump points currently available\u2026',


	/*************
		[DEPRECATED] Dialog: Share.
	*************/

	shareTitle : 'Share',
};
