/**
AccessReader
GPL licence
https://gitlab.com/Access42net/AccessReader/
Copyright (c) 2015 Access42, access42.net
**/

// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-v3-or-Later

var AccessReader = ( function(){

	'use strict';
/**
Configuration
**/
var config = {
	/** Conteners **/
	Screen: {
		id: 'screen'
	},
	Banner: {
		id: 'banner'
	},
	Nav: {
		id: 'nav-wrapper',
		classSettingVisible: 'navbar-visible',
		classSettingInvisible: 'navbar-invisible'
	},
	NavBar: {
		id: 'navbar'
	},
	PrevNext: {
		id: 'prev-next'
	},
	WrapperNav: {
		id: 'wrappernav'
	},
	Wrapper: {
		id: 'wrapper',
		classSettingLeft: 'Cagauche'
	},
	Flap: {
		id: 'volet'
	},
	Slide: {
		classSetting: 'slide'
	},
	Summary: {
		id: 'sommaire',
		classSettingFixed: 'fixed tool-block tool-block-summary',
		Ctitle: 'Ct'
	},
	SummaryLinkActive: {
		classSetting: 'summary-link-active'
	},
	Setting: {
		id: 'setting',
		Ctitle: 'Ctitle'
	},
	OwnerInfo: {
		id: 'owner-info',
		classSetting: 'owner-info',
		Ctitle: 'Ctitle-Owner-Info'
	},
	HelpInfo: {
		id: 'help-info',
		classSetting: 'help-info',
		Ctitle: 'Ctitle-help-Info'
	},
	FormConfig: {
		id: 'FormConfig'
	},
	ConfigButton: {
		id: 'configbutton',
		classSetting: 'btn-group-settings'
	},
	LinearIndexTag: {
		classSetting: 'index'
	},
	LiveSlideTitle: {
		id: 'Dcourante'
	},
	Breadcrumb: {
		id: 'breadcrumb',
		classSetting: 'breadcrumb'
	},
	SkipLink: {
		id: 'skip-link',
		classSetting: 'skip-link'
	},
	//Object fullscreen setting
	//ClassName for object to set fullscreen event
	ObjectFullScreen: {
		classSetting: 'full-screen-object'
	},
/** Effects 
	val: entry value name 
	classSetting: CSS classname effect,
	flap: true for flap effect
	slide: true for slide effect
	To set a new effect in four simples steps :
	1. Create a CSS class
	2. Create an entry in this section
	Example :
	NameOfEffect: {
		val: NameOfEffect,
		classSetting: 'yeah',
		flap: false,
		slide: true
	}
	3. Create an entry in the configuration lang file
	NameOfEffect: {
		help: 'the yeaaah effect' //text for option value in effects dropdown
	}
	Important : don't delete Eno entry
	useIt : true to set, false to ignore
	**/
	// Noeffects , please dont change !
	Eno: { 
		useIt: true,
		val: 'Eno',
		flap: false,
		slide: false,
		group: 'Geffects'
	},
	// Fadein
//	Efadin: {
//		useIt: true,
//		val: 'Efadin',
//		classSetting: 'fadein', 
//		flap: false,
//		slide: true,
//		group: 'Geffects' 
//	},
//	// Flap left to right
//	Eleft: {
//		useIt: false,
//		val: 'Eleft',
//		classSetting: 'ALTR',
//		flap: true,
//		slide: false,
//		group: 'Geffects' 
//	},
//	// flap right to left
//	Eright: {
//		useIt: false,
//		val: 'Eright',
//		classSetting: 'ARTL',
//		flap: true,
//		slide: false,
//		group: 'Geffects' 
//	},
//	// flap bottom to top
//	Ebottom: { 
//		useIt: false,
//		val: 'Ebottom',
//		classSetting: 'ATtoT',
//		flap: true,
//		slide: false,
//		group: 'Geffects' 
//	},
//	// flap top to bottom
//	Etop: { 
//		useIt: false,
//		val: 'Etop',
//		classSetting: 'ATtoB',
//		flap: true,
//		slide: false,
//		group: 'Geffects'
//	},
//	// Flash
//	Flash: {
//		useIt: true,
//		val: 'Flash',
//		classSetting: 'Flash',
//		flap: true,
//		slide: false,
//		group: 'Geffects' 
//	},
//	// Scale
//	Escale: {
//		useIt: true,
//		val: 'Escale',
//		classSetting: 'Escale', 
//		flap: false,
//		slide: true,
//		group: 'Geffects' 
//	},
//	// FLIP
//	Flip: {
//		useIt: true,
//		val: 'Flip',
//		classSetting: 'Flip', 
//		flap: false,
//		slide: true,
//		group: 'Geffects' 
//	},
//	
//	TurnPage: {
//		useIt: true,
//		val: 'TurnPage',
//		classSetting: 'TurnPage',
//		flap: false,
//		slide: true,
//		group: 'Geffects' 
//	},
	/** Players **/
	Stexte: {
		id: 'Stexte',
		file: 'bip_texte_masque'
	},
	Sdiapo: {
		id: 'Sdiapo',
		file: 'bip_diapo_on'
	},
	Sdiapo1: {
		id: 'Sdiapo1',
		file: 'bip_diapo1_on'
	},
	Sdiapoend: {
		id: 'Sdiapoend',
		file: 'bip_diapo_end'
	},
	Caudio: {
		id: 'Caudio'
	},
	/** Hidden Content Class **/
	HiddenContent: {
		classSetting: 'Cmasque'
	},
	/** Accessibility 
		useIt : true to set, false to ignore
	**/
	//vocalize slide number on total (1 on 4 for example)
	VocalizeNdiapo: { 
		useIt: true,
		id: 'VocalizeNdiapo',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0,
		group: 'Gaccess' 
	} ,
	//Play a sound (beep) when displaying hidden text
	SoundTxt: { 
		useIt: false,
		id: 'SoundTxt', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 		
		group: 'Gaccess' 
	},
	//Play a sound (beep) when displaying a slide
	SoundSlide: { 
		useIt: true,
		id: 'SoundSlide', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound', 
		val: 0, 
		group: 'Gaccess' 
	},
	//Play a sound (beep) when displaying first slide
	SoundSlide1: { 
		useIt: true,
		id: 'SoundSlide1',  
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 
		group: 'Gaccess' 
	},
	//Play a sound (beep) when displaying last slide
	SoundSlideEnd: { 
		useIt: true,
		id: 'SoundSlideEnd', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 
		group: 'Gaccess' 
	},
	//Vocalize the heading of the current slide
	VocalizeTitle: { 
		useIt: true,
		id: 'VocalizeTitle', 
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',
		val: 0, 		
		group : 'Gaccess' 
	},
	//Update the window heading
	UpWindowTitle: { 
		useIt: true,
		id: 'UpWindowTitle',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-sound',
		IconClass: 'icon icon-setting-sound',		
		val: 0 , 
		group: 'Gaccess' 
	},
	//Skip to the "next" button on slideshow onload
	GotoBnext: { 
		useIt: true,
		id: 'GotoBnext',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-next',
		IconClass: 'icon icon-setting-next',		
		val: 0,  
		group: 'Gaccess' 
	},
	//Deactivate click button function to go to next slide
	Noclick:  { 
		useIt: true,
		id: 'Noclick',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-mouse',
		IconClass: 'icon icon-setting-mouse',		
		val: 1,  
		group: 'Gaccess' 
	},
	//Dyslexia
	FontDyslexia: {
		useIt: true,
		id: 'FontDyslexia',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-font-dyslexia',
		IconClass: 'icon icon-setting-font-dyslexia',
		val: 0,  
		group: 'Gdys',
		classSettingEffect: 'dys-f'
	},
	LineSpaceDyslexia: {
		useIt: true,
		id: 'LineSpaceDyslexia',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-line-space-dyslexia',
		IconClass: 'icon icon-setting-line-space-dyslexia',		
		val: 0,  
		group: 'Gdys',
		classSettingEffect: 'dys-l' 		
	},
	NoJustify: {
		useIt: false,
		id: 'NoJustify',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-no-justify',
		IconClass: 'icon icon-setting-no-justify',		
		val: 0,  
		group: 'Gdys',
		classSettingEffect: 'dys-j'		
	},
	//Contrast
	Contrast: {
		id: 'contrastSelect',
	},
	ContrastDefault:{
		val: 'default-c',
		always: true,
		group: 'Gcontrast',
	},
	ContrastInvert:{
		val: 'inv-c',
		always: true,
		group: 'Gcontrast'
	},
	ContrastEnforced:{
		val: 'high-c',
		always: false,
		group: 'Gcontrast'
	},
	/** Slideshow parameters 
		useIt : true to set, false to ignore
	**/
	// Display summary as :
	// 0 : no-modal window
	// 1 : modal window
	SumModOn: { 
		useIt: true,
		id: 'SumModOn',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-summary',
		IconClass: 'icon icon-setting-summary',		
		val: 1,  
		group: 'Gslide' 
	},
	// Switch ModePlan=1 for Linear Layout
	ModePlan: { 
		useIt: true,
		id: 'ModePlan',
		classSetting : 'input-setting',
		classHelpSetting: 'help',
		classLabelSetting: 'label-setting setting-plan',
		IconClass: 'icon icon-setting-plan',		
		val: 0,   
		group: 'Gslide' 
	},
	/** Misceallanous **/
	// Setting configuration buttons
	Bsubmit: {
		id: 'setconfig',
		classSetting: 'btn-setting'
	},
	Bdefault: {
		id: 'resetconfig',
		classSetting: 'btn-setting'
	},
	//Close buttons
	Bclose: {
		idSummary: 'close',
		idConfig: 'Close2',
		idOwnerInfo: 'Close3',
		idHelpInfo : 'Close4',
		classSetting: 'btn-close',
		iconClass: 'icon icon-close',
		fallbackClass : 'text',
		fallBackSrcImg:'img/close.png'
	},
	/** Setting navbar
		Setting navbar button and select
		classSetting : CSS classNames
		iconClass : CSS class for icon font injection
	**/
	Bprev: {
		id: 'prev',
		classSetting: 'tool-bar-elt btn btn-prev',
		iconClass: 'icon icon-prev',
		fallbackClass : 'text',
		fallBackSrcImg:'img/prev.png'
	},
	Bnext: {
		id: 'next',
		classSetting: 'tool-bar-elt btn btn-next',
		iconClass: 'icon icon-next',
		fallbackClass : 'text',
		fallBackSrcImg:'img/next.png'
	},
	Select:{
		id: 'tocP',
		classSetting: 'select-goto'
	},
	Bselect: {
		id: 'tocp',
		classSetting: 'btn btn-goto',
		iconClass: 'icon icon-goto',
		fallbackClass : 'text medium-only',
		fallBackSrcImg:'img/goto.png',
		fallBackSmSrcImg:'img/goto-sm.png',
		fallbackSmClass : 'text small-only',
	},
	Btoc: {
		id: 'toc',
		classSetting: 'tool-bar-elt btn btn-block-summary',
		iconClass: 'icon icon-summary',
		fallbackClass : 'text medium-only',
		fallBackSrcImg:'img/summary.png',
		fallBackSmSrcImg:'img/summary-sm.png',
		fallbackSmClass : 'text small-only',
	},
	Bconfig: {
		id: 'set',
		classSetting: 'tool-bar-elt btn btn-block-settings',
		iconClass: 'icon icon-settings',
		fallbackClass : 'text medium-only',
		fallBackSrcImg:'img/settings.png',
		fallBackSmSrcImg:'img/settings-sm.png',
		fallbackSmClass : 'text small-only',
	},
	//print
	Bprint: {
		id: 'print',
		classSetting: 'tool-bar-elt btn btn-block-print',
		iconClass: 'icon icon-print',
		fallbackClass : 'text',
		fallBackSrcImg:'img/print.png'
	},
	//fullscreen
	BfullScreen: {
		id: 'full-screen-button',
		classSetting: 'tool-bar-elt btn btn-block-fullscreen',
		iconClass: 'icon icon-fullscreen',
		iconClassExit: 'icon icon-fullscreen-exit',
		fallbackClass : 'text medium-only',
		fallBackSrcImg:'img/fullscreen.png',
		fallBackSrcImgExit: 'img/fullscreen-exit.png',
		fallBackSmSrcImg : 'img/fullscreen-sm.png',
		fallbackSmClass : 'text small-only',
	},
	//Owner-info
	BownerInfo: {
		id: 'owner-info-button',
		classSetting: 'tool-bar-elt btn btn-block-owner',
		iconClass: 'icon icon-owner-info',
		fallbackClass : 'text medium-only',
		fallBackSrcImg:'img/owner-info.png',
		fallBackSmSrcImg:'img/owner-info-sm.png',
		fallbackSmClass : 'text small-only',		
	},
	//Help-info
	BhelpInfo: {
		id: 'help-info-button',
		classSetting: 'tool-bar-elt btn btn-block-help',
		iconClass: 'icon icon-help-info',
		fallbackClass : 'text medium-only',
		fallBackSrcImg:'img/help-info.png',
		fallBackSmSrcImg:'img/help-info-sm.png',
		fallbackSmClass : 'text small-only',		
	},	
	//Download PDF
	Bdownload: {
		id: 'pdf-download-button',
		idFile: 'download-file',
		classSetting: 'tool-bar-elt btn btn-block-pdf',
		iconClass: 'icon icon-pdf-download',
		fallbackClass : 'text',
		fallBackSrcImg:'img/pdf-download.png'	
	},
	SelectWrapper: {
		id: 'Fgo',
		classSetting: 'tool-bar-elt'
	},
	TocSelect : {
		id: 'tocP',
	},
	SlideCounter: {
		id: 'cpt',
		idCurrent: 'current',
		idTotal: 'total',
		classSetting: 'tool-bar-elt slide-counter',
		currentClass: 'tool-bar-elt slide-counter-current',
		isHiddenClass: 'sr',
		totalClass: 'tool-bar-elt slide-counter-total'
	},
	IconFallBack: {
		classSetting: 'icon-fallback-text'
	},
	Ctitle:{
		classSetting: 'tool-block-title'
	}
}
/** End configuration setting **/
/** Global variables **/
// Modal config
var ConfigModOn = 1;
// Current Slide
var current = 0;
// Slide array
var TabSlide = [];
// Hidden content array
var TabTextSlide = [];
// Current hidden content
var Tcurrent = 0;
var Tcontrol = 0;
// Filter Tag clickable content
var TagListFiltre = new Array('BUTTON','A','SELECT','INPUT','AUDIO','VIDEO','TEXTAREA','LABEL');
// Modale window object (use for trapping focus and esc shutdown)
var openDial = null;
// Freeze hidden content if necessary
var TopenDial;
// Window title
var WTitre = document.title;
// CSS3 animation prefix
var pfx = ["webkit", "moz", "MS", "o", ""];
// Switch locale storage (for IE on local mode)
var Storage = 0;
// Base URL (used for reload the switch linear layout)
var BaseUrl;
// Breacrumb header
var BreadcrumbH2;
/**
 Onload 
 **/
window.onload = function() {
	// Unset loader
	if( document.getElementById('load') ) 
		document.getElementById('load').setAttribute('style','display:none');
	// Initialize UI controls and Config
	PushConfig();
	GetConfig();
	PushNavBar();
	PushPrevNext()
	// Initialize access config
	if( config.VocalizeNdiapo.val === 1 )$( config.SlideCounter.id ).setAttribute( 'aria-live', 'polite' );
	if( config.VocalizeNdiapo.val === 1 )$( config.SlideCounter.id ).setAttribute( 'aria-atomic', 'false' );
	if( config.GotoBnext.val === 1 )$( config.Bnext.id ).focus();
	if( config.SoundTxt.val === 1 )SetSon( config.Stexte.file, config.Stexte.id );
	if( config.SoundSlide.val === 1 )SetSon( config.Sdiapo.file, config.Sdiapo.id );
	if( config.SoundSlide1.val === 1 )SetSon( config.Sdiapo1.file, config.Sdiapo1.id );
	if( config.SoundSlideEnd.val === 1 )SetSon( config.Sdiapoend.file, config.Sdiapoend.id );
	//font dys
	SetFontFamily();
	//contrast
	//SetContrast();
	// Initialize the slideshow array
	InitTabSlide();
	// Init skiplink Ndx and anchor for layout mode
	setSkipLinkId();
	// Set the Toc index select
	TocP();
	// Set owner info
	SetOwnerInfo();
	// Set help info
	SetHelpInfo();
	// Set breadcrumb
	setBreadCrumb();
	/* Events manager */
	// Event click for next slide
	if( config.ModePlan.val === 0 && config.Noclick.val === 0 ){
		document.addEventListener( 'click', function( e ) {
			if ( TagListFiltre.indexOf( document.activeElement.tagName ) < 0 ) {
				GotoNext();	
			}
		}, true);
	}

    // Event hammer pan
    var targetPan = $( config.Wrapper.id );

		function resizeHamm(){
    	if (window.matchMedia("(max-width:60em)").matches) {
    	targetPan.setAttribute('class','small');
			Hammer( targetPan ).on('swiperight', function(ev){ GotoPrev() }, false);
			Hammer( targetPan ).on('swipeleft', function(ev){ GotoNext() }, false);
    	}
		}
		resizeHamm();
		targetPan.addEventListener('resize', resizeHamm);
 	

	// Event Keys
	// Left: 37, Right :39, Spacebar: 32, Enter: 13, pageDown:34, pageUp:33 (for remote control), Open summary: ALT+0 ([2]48), Home:36, End:35, special previous slide for screen reader : SHIFT+Spacebar ([1]32).
	document.addEventListener( 'keydown', function( e ) {
			if ( key( e ) == 248 ) { OpenToc(); }
			if( config.ModePlan.val === 0 ){
				if ( key( e ) === 32 && !document.getElementById( config.Setting.id ).contains( e.target ) ) { GotoNext(); e.preventDefault(); }
				if ( key( e ) === 39 || key( e ) === 34 ) { GotoNext(); e.preventDefault(); }
				if ( key( e ) === 37 || key( e ) === 33 || key( e ) == 132 ) { GotoPrev(); e.preventDefault(); }
				if ( key( e ) === 36 ) { current = 0; GotoSlide(); e.preventDefault(); }
				if ( key( e ) === 35 ) { current = TabSlide.length - 1; GotoSlide(); e.preventDefault(); }
				if ( key( e ) === 13 ) {
					if ( TagListFiltre.indexOf( document.activeElement.tagName ) < 0 ) {
						GotoNext();	
						e.preventDefault();
					}
			}
		}
	}, false);
	// Events Nav Button 
	$( config.Bnext.id ).addEventListener( "click", GotoNext, false );
	$( config.Bprev.id ).addEventListener( "click", GotoPrev, false );
	// Event open/close TOC
	$( config.Btoc.id ).addEventListener( "click", OpenToc, false );
	$( config.Bclose.idSummary ).addEventListener( "click", CloseToc, false );
	// Event open/close owner info
	$( config.BownerInfo.id ).addEventListener( "click", OpenOwnerInfo, false );
	$( config.Bclose.idOwnerInfo ).addEventListener( "click", CloseToc, false );
	// Event open/close help info
	$( config.BhelpInfo.id ).addEventListener( "click", OpenHelpInfo, false );
	$( config.Bclose.idHelpInfo ).addEventListener( "click", CloseToc, false );
	// Event slide index select
	$( config.Select.id ).addEventListener( "change",function(){
		$( config.Bselect.id ).removeAttribute( 'disabled', 'disabled' );
		$( config.Bselect.id ).focus();
	},false );
	$( config.Bselect.id ).addEventListener( "blur",function(){
			$( config.Select.id ).value = '';
			$( config.Bselect.id ).setAttribute( 'disabled','disabled' );
	},false);
	$( config.Bselect.id ).addEventListener( "click", Fgo, false );
	// Events open/close and save/reset Configuration 
	$( config.Bconfig.id ).addEventListener( "click", OpenConfig, false );
	$( config.Bclose.idConfig ).addEventListener( "click", CloseToc, false );
	//$( config.Bsubmit.id ).addEventListener( "click", SetConfig, false );
	$( config.Bsubmit.id ).addEventListener( "click", function( event ){
		SetConfig();
		event.preventDefault();
		window.location.reload();
	}, false );
	$( config.Bdefault.id ).addEventListener( "click", ResetConfig, false );
	// Event print button
	$( config.Bprint.id).addEventListener( "click", DocPrint, false );
	// Event general fullscreen button
	$( config.BfullScreen.id ).addEventListener( "click", function(){
		screenfull.toggle();
	}, false );
//	document.addEventListener(screenfull.raw.fullscreenchange, function () {
//		toggleFullScreenIcon( screenfull.isFullscreen );
//	}, false);
	// Event object fullscreen
	ObjectFullScreenSetting();
	 // Trapping focus
	 if( config.SumModOn.val == 1 || ConfigModOn == 1 ){
		document.addEventListener( "focus", function( event ) {
			if ( openDial && !openDial.contains( event.target ) ) {
				event.stopPropagation();
				openDial.focus();
			}
		}, true);
	 }
	 // Event download button
	 if($( config.Bdownload.idFile ) ){
		$( config.Bdownload.id ).addEventListener( "click", DownloadDoc, false );
	}
	 // Close modals (ESC)
	document.addEventListener( "keydown", function( event ) {
		if ( openDial && key( event ) == 27 ) {
			CloseToc();
			openDial = null;
		}
	}, true );
	// Listener end flap animation
	PrefixedEvent( $( config.Flap.id ),"AnimationEnd", function(){ $( config.Flap.id ).removeAttribute( 'class' );} )
	// Get current slide when reload
	window.onbeforeunload=function(){
		try{
			sessionStorage.setItem( 'Scurrent', current );
		}
		catch(e){
			createCookie( 'Scurrent', current, 0 );
		}
	}
	// Get explicit url (hash) and goto slide
	// Init (for copy past or link a slide form external ressource)
	GotoHashSlide();
	// Listener
//	window.addEventListener( "hashchange", GotoHashSlide, false);
	window.onhashchange = GotoHashSlide;
	// toggle navbar visibility
	$( config.Nav.id ).addEventListener( "focus", function(){
		$( config.Nav.id ).classList.remove( config.Nav.classSettingInvisible );
		$( config.Nav.id ).classList.add( config.Nav.classSettingVisible );
	}, false);
	$( config.Nav.id ).addEventListener( "blur", function(){
		$( config.Nav.id ).classList.remove( config.Nav.classSettingVisible );
		$( config.Nav.id ).classList.add( config.Nav.classSettingInvisible );
	}, false);
	toggleNavBar();
}
/** 
 Begin navigations functions 
**/
/* Initialize Slide array */
function InitTabSlide(){
	// Get current slide if exists
	try{
		current = parseInt( sessionStorage.Scurrent );
		sessionStorage.clear();
	}
	catch( e ){
		current = parseInt( readCookie( 'Scurrent' ) );
		eraseCookie( 'Scurrent' );
	}
	// Set slide array then display current slide if linear layout shutoff
	if( !current )current = 0;
	TabSlide = document.getElementsByClassName( config.Slide.classSetting );
	if( config.ModePlan.val === 0 ) NoSetTabSlide();
	$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current + 1;
	if( config.VocalizeTitle.val === 1 )GetTitre();
	$( config.SlideCounter.idTotal ).firstChild.nodeValue = TabSlide.length;
	
	TabSlide[ current ].className = TabSlide[ current ].className+ " active";
	
	if( config.SoundSlide1.val === 1 && current === 0 )$( config.Sdiapo1.id ).play();
	if( config.UpWindowTitle.val === 1) MajTitreW();
	if( config.ModePlan.val === 0){
		$( config.Screen.id ).classList.remove( 'modeplan');
		// Hide header when first and last slide displaying
		if( current === 0 || current === TabSlide.length - 1 ) {
			$( config.Banner.id ).classList.add('is-hidden');
		}
		//Animation play
		wow();
	}
	// Set linear layout mode and shutoff global effect
	else{
		$( config.Screen.id ).classList.add( 'modeplan');
		$( config.Screen.id ).setAttribute( 'data-effect', 'noEffect' );
		SetNSlide();
	}
	//Set slide TOC
	Toc();
}
/* Reset slides display*/
function NoSetTabSlide(){
	var RefEffect = $( config.Screen.id ).getAttribute( 'data-effect' );
	for( var i = 0, len = TabSlide.length ;i < len; i++ ){
		TabSlide[i].classList.remove("active");
		TabSlide[i].classList.remove("inactive");
		TabSlide[i].className = TabSlide[i].className+ " inactive";
		TabSlide[i].classList.remove( config[ RefEffect ].classSetting );
		TabSlide[i].setAttribute( 'tabindex', '-1' );
	}
	$( config.Flap.id ).classList.remove( config[ RefEffect ].classSetting );
}
/* Goto next/prev/current slide */
function GotoNext(){
	// If not hidden content run
	if( Tcontrol === 0 ){
		current += 1;
		if( current >= TabSlide.length )current -= 1;
		NoSetTabSlide();
		if( TabSlide[ current ] ){
			var HashRef = current + 1;
			TabSlide[current].classList.remove("active");
			TabSlide[current].classList.remove("inactive");
			TabSlide[current].className = TabSlide[current].className+ " active";
			TabSlide[ current ].setAttribute( 'tabindex', '0');
			UpdateHashUrl( HashRef);
		}
		SetAdaptive();
		// Hide header on first and last slide
		if( current === 0 || current === TabSlide.length - 1 ){
			$( config.Banner.id ).classList.add('is-hidden');
		}
		else{
			if ($( config.Banner.id ).classList.contains('is-hidden')){
				$( config.Banner.id ).classList.remove('is-hidden');
			}
		}
		wow();
		$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current+1;
		//ReScaleSummary();
		if( config.VocalizeTitle.val === 1)GetTitre();
		// Initialize hidden content array
		SetTabTextSlide();
	}
	// If hidden content run
	else{
		// Display hidden content
		if( TabTextSlide[ Tcurrent ] ) TabTextSlide[ Tcurrent ].style.visibility = 'visible';
		//if( config.SoundTxt.val === 1) $( config.Stexte.id ).play();
		Tcurrent += 1;
		if( Tcurrent >= TabTextSlide.length ){
			Tcontrol = 0;
			Tcurrent = 0;
			TabTextSlide.length = 0;
		}
	}
	// Toggle navbar visibility and hide next button on last slide
	if( current === TabSlide.length -1){
		$(config.Nav.id).classList.remove( config.Nav.classSettingInvisible );
		$(config.Nav.id).classList.add( config.Nav.classSettingVisible );
		$( config.Bnext.id ).style.display = 'none';
	}
	else{
		$(config.Nav.id).classList.remove( config.Nav.classSettingVisible );
		$(config.Nav.id).classList.add( config.Nav.classSettingInvisible );
		$( config.Bnext.id ).style.display = 'block';
		$( config.Bprev.id ).style.display = 'block';
	}
}

	
function GotoPrev(){
	var Cprev = 1;
	// If not hidden content run
	if( Tcontrol === 0 ){
		current -= 1;
		if( current < 0 ) current = 0;
		NoSetTabSlide();
		if( TabSlide[ current ] ){
			var HashRef = current + 1;
			TabSlide[current].classList.remove("active");
			TabSlide[current].classList.remove("inactive");
			TabSlide[current].className = TabSlide[current].className+ " active";
			TabSlide[ current ].setAttribute( 'tabindex', '0');
			UpdateHashUrl( HashRef);
		}
		SetAdaptive();
		// Hide header on first and last slide		
		if( current === 0 || current === TabSlide.length-1 ){
			$( config.Banner.id ).classList.add('is-hidden');
		}
		else{
			if ($( config.Banner.id ).classList.contains('is-hidden')){
				$( config.Banner.id ).classList.remove('is-hidden');
			}
		}
		wow();
		$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current+1;
		//ReScaleSummary();
		if( config.VocalizeTitle.val == 1 )GetTitre();
		// Initialize hidden content array
		SetTabTextSlide( Cprev );
	}
	else{
		// Display hidden content
		TabTextSlide[ Tcurrent ].style.visibility = 'hidden';
		//if( config.SoundTxt.val === 1 ) $( config.Stexte.id ).play();
		Tcurrent += 1;
		if( Tcurrent >= TabTextSlide.length ){
			Tcontrol = 0;
			Tcurrent = 0;
			TabTextSlide.length = 0;
		}
	}
	// Toggle navbar visibility and hide prev button on first slide
	if( current === 0 ){
		$(config.Nav.id).classList.remove( config.Nav.classSettingInvisible );
		$(config.Nav.id).classList.add( config.Nav.classSettingVisible );
		$( config.Bprev.id ).style.display = 'none';
	}
	else{
		$(config.Nav.id).classList.remove( config.Nav.classSettingVisible );
		$(config.Nav.id).classList.add( config.Nav.classSettingInvisible );
		$( config.Bprev.id ).style.display = 'block';
		$( config.Bnext.id ).style.display = 'block';
	}
}
function GotoSlide( focusRequire ){
	// If not hidden content run or modal open
	if( Tcontrol === 0 || TopenDial === 1 ){
		if( current >= TabSlide.length )current = 0;
		NoSetTabSlide();
		if( TabSlide[ current ]){
			var HashRef = current + 1;
			TabSlide[current].classList.remove("active");
			TabSlide[current].classList.remove("inactive");
			TabSlide[current].className = TabSlide[current].className+ " active";
			TabSlide[ current ].setAttribute( 'tabindex', '0');
			UpdateHashUrl( HashRef);
			if( focusRequire ){
				TabSlide[ current ].focus();
			}
		}
		SetAdaptive();	
		// Hide header on first and last slide
		if( current === 0 || current === TabSlide.length-1 ){
			$( config.Banner.id ).classList.add('is-hidden');
		}
		else{
			if ($( config.Banner.id ).classList.contains('is-hidden')){
				$( config.Banner.id ).classList.remove('is-hidden');
			}
		}
		wow();
		$( config.SlideCounter.idCurrent ).firstChild.nodeValue = current+1;
		//ReScaleSummary();
		if( config.VocalizeTitle.val === 1 ) GetTitre();
		// Initialize hidden content array
		SetTabTextSlide();
		TopenDial = null;
	}
	else{
		// Display hidden content
		TabTextSlide[ Tcurrent ].style.visibility = 'visible';
		//if( config.SoundTxt.val === 1 )$( config.Stexte.id ).play();
		Tcurrent += 1;
		if( Tcurrent >= TabTextSlide.length ){
			Tcontrol = 0;
			Tcurrent = 0;
			TabTextSlide.length = 0;
		}
	}
	// Toggle navbar visibility an show/hide next/prev button when first/last slide
	if( current === 0 || current === TabSlide.length -1){
		$(config.Nav.id).classList.remove( config.Nav.classSettingInvisible );
		$(config.Nav.id).classList.add( config.Nav.classSettingVisible );
		if( current === 0 ) $( config.Bprev.id ).style.display = 'none';
		if( current === TabSlide.length -1 ) $( config.Bnext.id ).style.display = 'none';
	}
	else{
		$(config.Nav.id).classList.remove( config.Nav.classSettingVisible );
		$(config.Nav.id).classList.add( config.Nav.classSettingInvisible );
		$( config.Bprev.id ).style.display = 'block';
		$( config.Bnext.id ).style.display = 'block';
	}
}
/* Goto slide from index select */
function Fgo(){
	if( parseInt( $( config.TocSelect.id ) .value) > -1 ){
		current = parseInt( $( config.TocSelect.id ).value);
		GotoSlide( true );
		TopenDial = 1;
	}
	else{
		$( config.TocSelect.id ).focus();
	}
}
/* Initiliaze hidden content array */
function SetTabTextSlide( Cprev ){
	var target = TabSlide[ current ].querySelectorAll( '*' );
	var j = 0;
	for( var i = 0, len = target.length; i < len; i++ ){
		if( target[i].classList.contains( config.HiddenContent.classSetting )){
			TabTextSlide[j] = target[i];
			j++;
		}
	}
	if( TabTextSlide.length > 0 ){
		Tcontrol = 1;
			for( var i = 0, len = TabTextSlide.length; i < len; i++ ){
				Cprev === 1 ? TabTextSlide[i].style.visibility = 'visible' : TabTextSlide[i].style.visibility = 'hidden';
			}
		if( Cprev === 1 ) TabTextSlide.reverse();
	}
}
/* Set index select */
function TocP(){
	var Toption = document.createElement( 'OPTION' );
	var Cindex = document.createTextNode( '-' );
	Toption.setAttribute( 'value', '' );
	Toption.appendChild( Cindex );
	document.getElementById( config.TocSelect.id ).appendChild( Toption );
  	for( var i = 0, len = TabSlide.length; i < len ; i++ ){
		var Toption = document.createElement( 'OPTION' );
		var Index = i;
		var Cindex = document.createTextNode( Index + 1 );
		Toption.setAttribute( 'value', Index );
		Toption.appendChild( Cindex );
		document.getElementById( config.TocSelect.id ).appendChild( Toption );
	}
}
/* Set Summary modal */
function Toc(){
	var Txt = {};
	var Target;
	var SubSummaryOpen;
	//set summary wrapper for role document feature
	var Cdiv = document.createElement( 'div' );
	Cdiv.setAttribute( 'role', 'document');
	//Set summary title
	var Ctitle = document.createElement( 'H1' );
	Ctitle.setAttribute( 'id', config.Summary.Ctitle );
	Ctitle.appendChild( document.createTextNode( lang.SummaryTitle ) );
	var Cbutton = document.createElement( 'BUTTON' ); 
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bclose.idSummary );
	Ctitle.setAttribute( 'class', config.Ctitle.classSetting );
	Cbutton.className = config.Bclose.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bclose.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bclose.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Wclose );
	CspanText.className = config.Bclose.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Ctitle.appendChild( Cbutton );
	$( config.Summary.id ).appendChild( Ctitle );
	//Set summary list
	var CsummaryList = document.createElement( "UL" );
	SubSummaryOpen = 0;
	for( var i = 0; i < TabSlide.length; i++ ){
		Target = TabSlide[i].querySelector( 'h1,h2' );
		if( SubSummaryOpen === 1){
			Cli.appendChild( CSubsummaryList );
			SubSummaryOpen = 0;
		}
		if( Target ){
			var Cli = document.createElement( "LI" );
			var Ca = document.createElement ( "A" );
			Txt = Target.innerText || Target.textContent;
			var Ctext = document.createTextNode( Txt );
			Ca.appendChild( Ctext );
			var hashRef = i+1;
			Ca.setAttribute( 'href', 'index.html#D' + hashRef );
			Cli.appendChild( Ca );
			CsummaryList.appendChild( Cli );
		}
		else{
			Target = TabSlide[i].querySelector( 'h3' );
			if( Target ){
				if( SubSummaryOpen === 0 ){
					var CSubsummaryList = document.createElement( "UL" );
					SubSummaryOpen = 1;
				}				
				var CSli = document.createElement( "LI" );
				var CSa = document.createElement ( "A" );
				Txt = Target.innerText || Target.textContent;
				var CStext = document.createTextNode( Txt );
				CSa.appendChild( CStext );
				var hashRef = i+1;
				CSa.setAttribute( 'href', 'index.html#D' + hashRef );
				CSli.appendChild( CSa );
				CSubsummaryList.appendChild( CSli );
			}
		}
		// special case AccessTooltip event
		if( Ca ){
			Ca.addEventListener( 'focus', function(){
				if (this.getAttribute( 'title' ) ){
					setTooltipNav( this);
				}
			}, false);
			Ca.addEventListener( 'blur', function(){
				if (this.getAttribute( 'title' ) ){
					setTooltipNav( this, true);
				}
			}, false);
		}
		if( CSa ){
			CSa.addEventListener( 'focus', function(){
				if (this.getAttribute( 'title' ) ){
					setTooltipNav( this);
				}
			}, false);
			CSa.addEventListener( 'blur', function(){
				if (this.getAttribute( 'title' ) ){
					setTooltipNav( this, true);
				}
			}, false);
		}
	}
	Cdiv.appendChild( CsummaryList );
	$( config.Summary.id ).appendChild( Cdiv );
}
/* Set Owner Info */
function SetOwnerInfo(){
	//Set owner info title
	var Ctitle = document.createElement( 'H1' );
	Ctitle.setAttribute( 'id', config.OwnerInfo.Ctitle );
	Ctitle.appendChild( document.createTextNode( lang.OwnerInfoTitle ) );
	Ctitle.setAttribute( 'class', config.Ctitle.classSetting );
	var Cbutton = document.createElement( 'BUTTON' ); 
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bclose.idOwnerInfo );
	Cbutton.className = config.Bclose.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bclose.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bclose.fallBackSrcImg;

	var closeCustom = document.getElementById(config.OwnerInfo.id);
	if(closeCustom.getAttribute('data-close')){
		Cbutton.setAttribute( 'title', closeCustom.getAttribute('data-close') );
		CspanText.setAttribute( 'alt', closeCustom.getAttribute('data-close') );
	}
	else{
		Cbutton.setAttribute( 'title', lang.BownerInfo.titleClose );
		CspanText.setAttribute( 'alt', lang.BownerInfo.altClose );
	}

	CspanText.className = config.Bclose.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Ctitle.appendChild( Cbutton );
	var target = $( config.OwnerInfo.id ).querySelector( 'div' );
	$( config.OwnerInfo.id ).insertBefore( Ctitle, target );
	$( config.OwnerInfo.id ).setAttribute( 'aria-labelledby', config.OwnerInfo.Ctitle );
}
function SetHelpInfo(){
	//Set help info title
	var Ctitle = document.createElement( 'H1' );
	Ctitle.setAttribute( 'id', config.HelpInfo.Ctitle );
	Ctitle.appendChild( document.createTextNode( lang.HelpInfoTitle ) );
	Ctitle.setAttribute( 'class', config.Ctitle.classSetting );
	var Cbutton = document.createElement( 'BUTTON' ); 
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bclose.idHelpInfo );
	Cbutton.className = config.Bclose.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bclose.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bclose.fallBackSrcImg;

	var closeCustom = document.getElementById(config.HelpInfo.id);
	if(closeCustom.getAttribute('data-close')){
		Cbutton.setAttribute( 'title', closeCustom.getAttribute('data-close') );
		CspanText.setAttribute( 'alt', closeCustom.getAttribute('data-close') );
	}
	else{
		Cbutton.setAttribute( 'title', lang.BhelpInfo.titleClose );
		CspanText.setAttribute( 'alt', lang.BhelpInfo.altClose );
	}

	CspanText.className = config.Bclose.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Ctitle.appendChild( Cbutton );
	var target = $( config.HelpInfo.id ).querySelector( 'div' );
	$( config.HelpInfo.id ).insertBefore( Ctitle, target );
	$( config.HelpInfo.id ).setAttribute( 'aria-labelledby', config.HelpInfo.Ctitle );
}
/* Open summary modal */
function OpenToc(){
	var styleSummary = window.getComputedStyle( $( config.Summary.id ) );
	if( config.SumModOn.val === 1 ){
		$( config.Summary.id ).setAttribute( 'role', 'dialog' );
		$( config.Summary.id ).setAttribute( 'aria-labelledby', config.Summary.Ctitle );
	}
	else{
		if( config.ModePlan.val === 0){
			$( config.Wrapper.id ).style.width = '70%';
			$( config.Wrapper.id ).style.maxWidth = '1140px';
			$( config.Wrapper.id ).style.fontSize = '80%';
			$( config.Wrapper.id ).style.left = '10px';
		}
		else{
		$( config.Wrapper.id ).setAttribute( 'class', config.Wrapper.classSettingLeft );
		}
	}
	if( styleSummary.getPropertyValue('display') === 'block' ){
		$( config.Summary.id ).style.display = 'none';
		$( config.Btoc.id ).setAttribute( 'title', lang.Btoc.titleOpen );
		if( $( config.Btoc.id ).querySelector( 'img' ) ) 
			$( config.Btoc.id ).querySelector( 'img' ).setAttribute( 'alt', lang.Btoc.altOpen );		
		openDial = null;
	}
	else if( styleSummary.getPropertyValue('display') === 'none' ) {
		$( config.Summary.id ).style.display = 'block';
		$( config.Btoc.id ).setAttribute( 'title', lang.Btoc.titleClose );
		if( $( config.Btoc.id ).querySelector( 'img' ) ) 
			$( config.Btoc.id ).querySelector( 'img' ).setAttribute( 'alt', lang.Btoc.altClose );
		$( config.Bclose.idSummary ).focus();
		openDial = $( config.Summary.id );
		//ReScaleSummary();
	}
}
/* Open config modal */
function OpenConfig(){
	if( $( config.Setting.id ).style.display === 'block') {
		$( config.Setting.id ).style.display = 'none';
		$( config.Bconfig.id ).setAttribute( 'title', lang.Bconfig.titleOpen );
		if( $( config.Bconfig.id ).querySelector( 'img' ) ) 
			$( config.Bconfig.id ).querySelector( 'img' ).setAttribute( 'alt', lang.Bconfig.altOpen );
		openDial = null;	
		$( config.Bconfig.id ).focus();
	}
	else if( $( config.Setting.id ).style.display === 'none' ){
		$( config.Setting.id ).style.display = 'block';
		$( config.Bconfig.id ).setAttribute( 'title', lang.Bconfig.titleClose );
		if( $( config.Bconfig.id ).querySelector( 'img' ) ) 
			$( config.Bconfig.id ).querySelector( 'img' ).setAttribute( 'alt', lang.Bconfig.altClose );
		openDial = $( config.Setting.id );
		$( config.Bclose.idConfig ).focus();
	}
}
/* Open owner info */
function OpenOwnerInfo(){
	var styleInfo = window.getComputedStyle( $( config.OwnerInfo.id ) );
	if( styleInfo.getPropertyValue('display') === 'none' ){
		$( config.OwnerInfo.id ).style.display = 'block';
		$( config.BownerInfo.id ).setAttribute( 'title', lang.BownerInfo.titleClose );
		if( $( config.BownerInfo.id ).querySelector( 'img' ) ) 
			$( config.BownerInfo.id ).querySelector( 'img' ).setAttribute( 'alt', lang.BownerInfo.altClose );
		$( config.Bclose.idOwnerInfo ).focus();
		openDial = $( config.OwnerInfo.id );
	}
	else if( styleInfo.getPropertyValue('display') === 'block' ){
		$( config.OwnerInfo.id ).style.display = 'none';
		$( config.BownerInfo.id ).setAttribute( 'title', lang.BownerInfo.titleOpen );
		if( $( config.BownerInfo.id ).querySelector( 'img' ) ) 
			$( config.BownerInfo.id ).querySelector( 'img' ).setAttribute( 'alt', lang.BownerInfo.altOpen);
			openDial = null;		
	}
}
/* Open help info */
function OpenHelpInfo(){
	var styleHelp = window.getComputedStyle( $( config.HelpInfo.id ) );
	if( styleHelp.getPropertyValue('display') === 'none' ){
		$( config.HelpInfo.id ).style.display = 'block';
		$( config.BhelpInfo.id ).setAttribute( 'title', lang.BhelpInfo.titleClose );
		if( $( config.BhelpInfo.id ).querySelector( 'img' ) ) 
			$( config.BhelpInfo.id ).querySelector( 'img' ).setAttribute( 'alt', lang.BhelpInfo.altClose );
		$( config.Bclose.idHelpInfo ).focus();
		openDial = $( config.HelpInfo.id );
	}
	else if( styleHelp.getPropertyValue('display') === 'block' ){
		$( config.HelpInfo.id ).style.display = 'none';
		$( config.BhelpInfo.id ).setAttribute( 'title', lang.BhelpInfo.titleOpen );
		if( $( config.BhelpInfo.id ).querySelector( 'img' ) ) 
			$( config.BhelpInfo.id ).querySelector( 'img' ).setAttribute( 'alt', lang.BhelpInfo.altOpen );
		OpenDial = null;
	}
}
/* Close modal */
function CloseToc(){
	switch( openDial.getAttribute( 'id' ) ){
		case config.Summary.id :
			$( config.Wrapper.id ).removeAttribute( 'style' );
			$( config.Summary.id ).style.display = 'none';
			$( config.Btoc.id ).focus();
			$( config.Nav.id ).classList.remove( 'navbar-invisible' );
			$( config.Nav.id ).classList.add( 'navbar-visible' );
			$( config.Btoc.id ).setAttribute( 'title', lang.Btoc.titleOpen );
			if( $( config.Btoc.id ).querySelector( 'img' ) ) 
			$( config.Btoc.id ).querySelector( 'img' ).setAttribute( 'alt', lang.Btoc.altOpen );
			openDial = null;				
		break
		case config.Setting.id:
			$( config.Setting.id ).style.display = 'none';
			$( config.Bconfig.id ).focus();
			$( config.Nav.id ).classList.remove( 'navbar-invisible' );
			$( config.Nav.id ).classList.add( 'navbar-visible' );
			$( config.Bconfig.id ).setAttribute( 'title', lang.Btoc.titleOpen );
			if( $( config.Bconfig.id ).querySelector( 'img' ) ) 
			$( config.Bconfig.id ).querySelector( 'img' ).setAttribute( 'alt', lang.Btoc.altOpen );
			openDial = null;
		break;
		case config.OwnerInfo.id:
			$( config.OwnerInfo.id ).style.display = 'none';
			$( config.BownerInfo.id ).focus();
			$( config.Nav.id ).classList.remove( 'navbar-invisible' );
			$( config.Nav.id ).classList.add( 'navbar-visible' );
			$( config.BownerInfo.id ).setAttribute( 'title', lang.BownerInfo.titleOpen );
			if( $( config.BownerInfo.id ).querySelector( 'img' ) ) 
				$( config.BownerInfo.id ).querySelector( 'img' ).setAttribute( 'alt', lang.BownerInfo.altOpen );
			openDial = null;
		break;
		case config.HelpInfo.id:
			$( config.HelpInfo.id ).style.display = 'none';
			$( config.BhelpInfo.id ).focus();
			$( config.Nav.id ).classList.remove( 'navbar-invisible' );
			$( config.Nav.id ).classList.add( 'navbar-visible' );
			$( config.BhelpInfo.id ).setAttribute( 'title', lang.BhelpInfo.titleOpen );
			if( $( config.BhelpInfo.id ).querySelector( 'img' ) ) 
				$( config.BhelpInfo.id ).querySelector( 'img' ).setAttribute( 'alt', lang.BhelpInfo.altOpen );
			openDial = null;
		break;
	}
	if( config.ModePlan.val === 1 ) $( config.Wrapper.id ).removeAttribute( 'class' );
	openDial = null;
}
/* Rescale summary when first or last slide displaying */
function ReScaleSummary(){
	/*
	if( config.ModePlan.val === 0 ){
		if( current > 0 && current + 1 < TabSlide.length ){
			$( config.Summary.id ).style.top = '10%';
			$( config.Summary.id ).style.height = '85%';
		}
		else{
			$( config.Summary.id ).style.top = '0';
			$( config.Summary.id ).style.height = '95%';
		}
	}
	else{
		$( config.Summary.id ).style.top = '0';
		$( config.Summary.id ).setAttribute('class', config.Summary.classSettingFixed );
	}
	*/
}
/* Set index slide tag on linear layout mode */
function SetNSlide(){
	var ndx;
	for( var i = 0, len = TabSlide.length; i < len; i++ ){
		var Ptag = document.createElement( 'P' );
		var Stag = document.createElement( 'SPAN' );
		var Txt = document.createTextNode( i + 1 + ' / ' + len );
		Stag.appendChild( Txt );
		Ptag.appendChild( Stag );
		Ptag.setAttribute( 'class', config.LinearIndexTag.classSetting );
		TabSlide[i].appendChild( Ptag );
	}
}
function setSkipLinkId(){
	var ndx;
	for( var i = 0, len = TabSlide.length; i < len; i++ ){
		ndx = i + 1;
		TabSlide[i].setAttribute( 'id','D' + ndx );
		//TabSlide[i].setAttribute( 'tabindex', '-1' );		
	}
}
/* Hash url manager */
function GotoHashSlide(){
	var hashRef = parseInt( location.hash.substr(2) );
	if( config.ModePlan.val === 0 ){
		current = hashRef - 1;
		if( current < 0 || !current ) current = 0;
		Tcontrol = 0;
		GotoSlide( true );
		//Close summary if open
		if( openDial && config.SumModOn.val === 1 ){
			$( openDial.getAttribute('id') ).style.display = 'none';
			openDial = null;
		}
	}
	else{
		var Cid = BaseUrl + '#D' + hashRef;
		window.location.href = Cid;
		SetActiveSummaryLink();
	}
}
//Synchronize url, active link and breadcrumb with current slide
function UpdateHashUrl( ref ){
	var Cid = BaseUrl + '#D' + ref;
	if( config.ModePlan.val === 0 ){
		var stateObj = { currentUrl : Cid };
		history.pushState(stateObj, '', Cid);
	}
	SetActiveSummaryLink();
	breadcrumb();
	$( config.SkipLink.id).setAttribute( 'href', Cid );

	var body = document.getElementsByTagName('body')[0];
	body.setAttribute('data-slide',ref);

}
//Update active summary link
function SetActiveSummaryLink(){
	var summaryList = $( config.Summary.id ).querySelectorAll( 'a' );
	for( var i = 0, len = summaryList.length; i < len; i++){
		summaryList[i].classList.remove( config.SummaryLinkActive.classSetting );
		summaryList[i].removeAttribute( 'title' );
		var hashRef = location.hash.substr(1);
		var linkRef = summaryList[i].getAttribute( 'href').split( '#' );
		var linkText = summaryList[i].innerText || summaryList[i].textContent;
		if( hashRef == linkRef[1] ){
			summaryList[i].classList.add( config.SummaryLinkActive.classSetting );
			summaryList[i].setAttribute( 'title', linkText + lang.SummaryLinkActiveTitle);
			document.title=linkText;
		}
	}
}
/* breadcrumb */

function setBreadCrumb(){
	var headerH2Ref;
	for( var i = 0, len = TabSlide.length ;i < len; i++ ){
		var headerH2 = TabSlide[i].querySelector( 'h2' );
		if( headerH2 ) {
			headerH2Ref = i;
		}
		else{
			TabSlide[i].setAttribute( 'data-breadcrumb', headerH2Ref );
		}
	}
}
function breadcrumb(){
	var target = document.getElementById( config.Breadcrumb.id );
	var deleted = target.querySelector( 'ul');
	if( deleted ) target.removeChild( deleted );
	var headerH2 = TabSlide[current].querySelector( 'h2' );
	if( !headerH2 ){
		if( current < TabSlide.length - 1 ){
			var newBc = document.createElement( 'ul' );
			var newBcEntry = document.createElement( 'li');
			var newBcLink = document.createElement( 'a' );
			var ndxHeader = parseInt( TabSlide[current].getAttribute( 'data-breadcrumb' ) );
			if( ndxHeader ){
				var headerH2 = TabSlide[ndxHeader].querySelector( 'h2' );
				var newBcText = headerH2.innerText || headerH2.textContent;
				var newBcLinkText = document.createTextNode( newBcText );
				var newBcNdx = ndxHeader + 1;
				var newBcHref = BaseUrl + '#D' + newBcNdx;
				newBcLink.appendChild( newBcLinkText );
				newBcLink.setAttribute( 'href', newBcHref );
				newBcEntry.appendChild( newBcLink );
				newBc.appendChild( newBcEntry );
				target.appendChild( newBc );
				var target = document.getElementById( config.Breadcrumb.id ).querySelector( 'ul ');
				target.classList.remove( 'no-breadcrumb' );
			}
		}
	}
	var end = TabSlide.length - 1;
	if( current === 0 || current === TabSlide.length - 1 ){
		var target = document.getElementById( config.Breadcrumb.id ).querySelector( 'ul ');
		if( target )target.classList.add( 'no-breadcrumb' );		
	}
}
/* Manage CSS3 effects */
function wow(){
	var RefEffect = $( config.Screen.id ).getAttribute( 'data-effect' );
	if( config[ RefEffect ].flap ){
		$( config.Flap.id ).classList.add( config[ RefEffect ].classSetting );
	}
	else if ( config[ RefEffect ].slide ){
		TabSlide[ current ].classList.add( config[ RefEffect ].classSetting );	
	}
	TabSlide[ current ].style.opacity = '1';		
}
/** End navigation functions **/
/** Begin miscleanous functions **/
function DocPrint(){
	window.print();
}
function ObjectFullScreenSetting(){
	var objTarget = document.querySelectorAll( '.'+config.ObjectFullScreen.classSetting );
	for( var i = 0, len = objTarget.length; i < len; i++ ){
		objTarget[i].setAttribute( 'tabindex' , '0' );
		objTarget[i].addEventListener( 'click', function(){
			screenfull.request( this );
		}, false);
	}
}
function DownloadDoc(){
	if($(config.Bdownload.idFile).getAttribute( 'data-url' )){
		var urlDoc = $( config.Bdownload.idFile ).getAttribute( 'data-url' );
	}
	else{
		var urlDoc = 'download/'+ $( config.Bdownload.idFile ).getAttribute( 'data-filename' ) + '.'+$( config.Bdownload.idFile ).getAttribute( 'data-type' );
	}
	window.open( urlDoc );
}
function toggleNavBar(){
	var Target = $(config.Nav.id).querySelectorAll( '*' );
	for( var i=0, len = Target.length; i < len; i++){
		Target[i].addEventListener( "focus", function(){
			$( config.Nav.id ).classList.remove( 'navbar-invisible' );
			$( config.Nav.id ).classList.add( 'navbar-visible' );
			// Special Case accessTooltip
			if (this.getAttribute( 'title' ) ){
				setTooltipNav( this);
			}
		}, false);
		Target[i].addEventListener( "blur", function(){
			$( config.Nav.id ).classList.remove( 'navbar-visible' );
			$( config.Nav.id ).classList.add( 'navbar-invisible' );
			// Special Case accessTooltip
			setTooltipNav( this, true );
		}, false);		
	}
}
function toggleFullScreenIcon( fullscreen ){
	if( fullscreen ){
		$(config.BfullScreen.id).setAttribute( 'title', lang.BfullScreen.titleExit );
		var img = $(config.BfullScreen.id).querySelector( 'img ');
		if( img ) {
			img.setAttribute( 'alt', lang.BfullScreen.altExit );
			img.setAttribute( 'src', config.BfullScreen.fallBackSrcImgExit );
		}
		var icon = $(config.BfullScreen.id).querySelector( 'span span');
		if( icon ){
			icon.className = config.BfullScreen.iconClassExit;
		}
	}
	else{
		$(config.BfullScreen.id).setAttribute( 'title', lang.BfullScreen.title );
		var img = $(config.BfullScreen.id).querySelector( 'img ');
		if( img ){
			img.setAttribute( 'alt', lang.BfullScreen.alt );
			img.setAttribute( 'src', config.BfullScreen.fallBackSrcImg );				
		}
		var icon = $(config.BfullScreen.id).querySelector( 'span span' );
		if( icon ){
			icon.className = config.BfullScreen.iconClass;
		}
	}
}
/** End misceleanous functions **/
/**
 Begin adaptive functions 
 **/
/* Set adaptive sound and window title update */
function SetAdaptive(){
	if( config.SoundSlide.val === 1 && current != 0 ) $( config.Sdiapo.id ).play();
	if( config.SoundSlide1.val === 1 && current === 0) $( config.Sdiapo1.id ).play();
	if( config.SoundSlideEnd.val === 1 && current === TabSlide.length-1 ) $( config.Sdiapoend.id ).play();
	if( config.UpWindowTitle.val === 1 ) MajTitreW();	
}
/* Set audio compomnents */
function SetSon( file, Sid ){
	var Caudio = document.createElement( 'AUDIO' );
	Caudio.setAttribute( 'id', Sid );
	var Csource1 = document.createElement( 'SOURCE' );
	Csource1.setAttribute( 'src', 'sound/' + file + '.mp3' );
	Csource1.setAttribute( 'type', 'audio/mp3' );
	var Csource2 = document.createElement( 'SOURCE' );
	Csource2.setAttribute( 'src', 'sound/' + file + '.ogg' );
	Csource2.setAttribute( 'type', 'audio/ogg' );
	Caudio.appendChild( Csource1 );
	Caudio.appendChild( Csource2 );
	$( config.Caudio.id ).appendChild( Caudio );
}
/* Include Slide title (or aria-label value) in live region */
function GetTitre(){
	var target = TabSlide[ current ].childNodes;
	$( config.LiveSlideTitle.id ).innerHTML = '';
	if( target[1].tagName === 'H2' ){
		$( config.LiveSlideTitle.id ).innerHTML = target[1].innerHTML;
	} 
	else{
		var Txt = document.createTextNode( TabSlide[ current ].getAttribute( 'aria-label' ) );
		$( config.LiveSlideTitle.id ).appendChild( Txt );
	}
}
/* Update window title */
function MajTitreW(){
	var target = TabSlide[ current ].querySelector( 'h2' );
	if( target ){
		var Title = target.innerText || target.textContent;
	} 
	else if( TabSlide[ current ].getAttribute( 'aria-label' ) ){
		var Title = TabSlide[ current ].getAttribute( 'aria-label' );
	}
	if( Title ){
		document.title = Title + " | " + WTitre;
	}
	// get the current breadcrumb content
	else if( $( 'breadcrumb' ).querySelector( 'a')  ){
		var Title = $( 'breadcrumb' ).querySelector( 'a').innerHTML;
				document.title = Title + " | " + WTitre;
	}
}
function SetFontFamily(){
	if( config.FontDyslexia.val === 1){
		document.querySelector( 'body').classList.add( config.FontDyslexia.classSettingEffect );
	}
	else{
		document.querySelector( 'body').classList.remove( config.FontDyslexia.classSettingEffect );
	}
	//linespace dys
	if( config.LineSpaceDyslexia.val === 1){
		document.querySelector( 'body').classList.add( config.LineSpaceDyslexia.classSettingEffect );
	}
	else{
		document.querySelector( 'body').classList.remove( config.LineSpaceDyslexia.classSettingEffect );
	}
	//justify dys
	if( config.NoJustify.val === 1){
		document.querySelector( 'body').classList.add( config.NoJustify.classSettingEffect );
	}
	else{
		document.querySelector( 'body').classList.remove( config.NoJustify.classSettingEffect );
	}
}
function SetContrast( value ){
	for ( var param in config){
		switch( config[ param ].group ) {
			case 'Gcontrast' :
				document.querySelector( 'body ').classList.remove( config[ param ].val );
			break;
		}
	}
	document.querySelector( 'body ').classList.add( value );
}
/** End adaptive functions **/
/**
 Begin UI components configuration
**/
/* Configuration managers */
function SetConfig(){
	var TabConfigRef = document.querySelectorAll( '#setting fieldset input, #setting fieldset select' );
	for ( var i = 0, len = TabConfigRef.length; i < len; i++ ){
		var ConfigRef = TabConfigRef[i].getAttribute( 'id' );
		var ValueRef;
		if( TabConfigRef[i].nodeName === 'INPUT' ){
			TabConfigRef[i].checked ? ValueRef = 1 : ValueRef = 0;
			config[ ConfigRef ].val = ValueRef;
		}
		if( TabConfigRef[i].nodeName === 'SELECT' ){
			ValueRef = TabConfigRef[i].value;
		}
		try{
			localStorage.setItem( ConfigRef, ValueRef );
		}
		catch(e){
			createCookie( ConfigRef, ValueRef, 0 );
		}
	}
}
function ResetConfig(){
	var TabConfigRef = document.querySelectorAll( '#setting fieldset input, #setting fieldset select' );
	for ( var i = 0, len = TabConfigRef.length; i < len; i++){
		var ConfigRef = TabConfigRef[i].getAttribute( 'id' );
		try{
			localStorage.removeItem( ConfigRef );
		}
		catch(e){
			eraseCookie( ConfigRef );
		}
		if( TabConfigRef[i].nodeName === 'INPUT' ){
			if( config[ ConfigRef ].val === 1 ) TabConfigRef[i].setAttribute( 'checked', 'checked' );
		}
		else if( TabConfigRef[i].nodeName === 'SELECT' ){
			TabConfigRef[i].value = config.Eno.val;
		}
	}
}
function GetConfig(){
	// Get base url for reload the linear layout or slideshow mode
	var Url = window.location.href;
	Url.indexOf( '#' ) > 0 ? BaseUrl = BaseUrl=Url.slice( 0, Url.indexOf( '#' ) ) : BaseUrl = Url;
	$( config.FormConfig.id ).setAttribute( 'action', BaseUrl );
	// Set configuration parameters and update default checkbox and select value
	var TabConfigRef = document.querySelectorAll( '#setting fieldset input, #setting fieldset select' );
	for ( var i = 0; i < TabConfigRef.length; i++ ){
		var ConfigRef = TabConfigRef[i].getAttribute( 'id' );
		try{
			var ValueRef = localStorage.getItem( ConfigRef );
		}
		catch(e){
			var ValueRef = readCookie( ConfigRef );
		}
		if( ValueRef ){
			if( TabConfigRef[i].nodeName === 'INPUT' ){
				if( parseInt( ValueRef ) === 1) TabConfigRef[i].setAttribute( 'checked', 'checked' ); 		
				config[ ConfigRef ].val = parseInt( ValueRef );
			}
			else if( TabConfigRef[i].nodeName === 'SELECT' ){
				// update #wrapper data-effect
				if( TabConfigRef[i].getAttribute( 'id' ) === 'Effects' ){
					$( config.Screen.id ).setAttribute( 'data-effect', ValueRef );
				}
				// update contrast mode
				if( TabConfigRef[i].getAttribute( 'id' ) === config.Contrast.id ){
					SetContrast( ValueRef );
				}							
			}
		}
		if( TabConfigRef[i].nodeName === 'INPUT' ){	
			if( config[ ConfigRef ].val > 0 ) TabConfigRef[i].setAttribute( 'checked', 'checked' );
		}
		else if( TabConfigRef[i].nodeName === 'SELECT' ){
				TabConfigRef[i].value = ValueRef;
		}			
	}
}
/* Configuration window */
function PushConfig(){
	// Set window title and close button
	var Ctitle = document.createElement( 'H1' );
	Ctitle.appendChild(document.createTextNode( lang.ConfigTitle ) );
	Ctitle.setAttribute( 'id', config.Setting.Ctitle );
	Ctitle.setAttribute( 'class', config.Ctitle.classSetting );	
	$( config.Setting.id ).setAttribute( 'aria-labelledby', config.Setting.Ctitle );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bclose.idConfig );
	Cbutton.className = config.Bclose.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bclose.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bclose.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Wclose );
	CspanText.className = config.Bclose.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	// Set window title and close button
	Ctitle.appendChild(Cbutton);
	$( config.Setting.id ).appendChild(Ctitle);
	// Set the form
	var Cform = document.createElement('FORM');
	Cform.setAttribute( 'id', config.FormConfig.id );
	Cform.setAttribute( 'action', '' );
	// Set components
	/* Accessibility */
	//Dyslexia
	var Cfieldset0 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Gdys.legend ) );
	Cfieldset0.appendChild( Clegend );
	//Constrast
	var Cfieldset5 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Contrast.legend ) );
	Cfieldset5.appendChild( Clegend );
	
	var Ccustomselect=document.createElement( 'span' );
	Ccustomselect.setAttribute( 'class', 'custom-select' );
	
	var CselectContrast=document.createElement( 'SELECT' );
	CselectContrast.setAttribute( 'id', config.Contrast.id );
	Ccustomselect.appendChild( CselectContrast );	
	
	var Clabel = document.createElement( 'label' );
	Clabel.setAttribute( 'for', config.Contrast.id );
	Clabel.appendChild( document.createTextNode( lang.Contrast.label ) );
	Cfieldset5.appendChild( Clabel );
//	Cfieldset5.appendChild( document.createElement( 'BR' ) );
	Cfieldset5.appendChild( Ccustomselect );
//	Cfieldset5.appendChild( document.createElement( 'BR' ) );
	//Accessibility
	var Cfieldset1 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Gaccess.legend ) );
	Cfieldset1.appendChild( Clegend );
	// Slide
	var Cfieldset2 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Gslide.legend ) );
	Cfieldset2.appendChild( Clegend );
	// Effects as a dropdown box
	var Cfieldset3 = document.createElement( 'FIELDSET' );
	var Clegend = document.createElement( 'LEGEND' );
	Clegend.appendChild( document.createTextNode( lang.Geffects.legend ) );
	Cfieldset3.appendChild( Clegend );
	var Cselect=document.createElement( 'SELECT' );
	Cselect.setAttribute( 'id', 'Effects' );
	var Clabel = document.createElement( 'label' );
	Clabel.setAttribute( 'for', 'Effects' );
	Clabel.appendChild( document.createTextNode( lang.LabelEffect ) );
	Cfieldset3.appendChild( Clabel );
//	Cfieldset3.appendChild( document.createElement( 'BR' ) );
	Cfieldset3.appendChild( Cselect );
//	Cfieldset3.appendChild( document.createElement( 'BR' ) );
	// Set configuration form and help elements
	for ( var param in config){
		switch( config[ param ].group ) {
			case 'Gdys' :
				if( config[ param ].useIt ){
					var Cinput = document.createElement( 'INPUT' );
					Cinput.setAttribute( 'id', config[ param ].id );
					Cinput.setAttribute( 'aria-describedby', 'help-' + config[ param ].id );
					Cinput.setAttribute( 'type', 'checkbox' );
					Cinput.className = config[ param ].classSetting;				
					var Clabel = document.createElement( 'LABEL' );
					Clabel.setAttribute( 'for', config[ param ].id );
					Clabel.className = config[ param].classLabelSetting;
					var IconSpan = document.createElement( 'SPAN' );
					IconSpan.setAttribute( 'aria-hidden', 'true' );
					IconSpan.className = config[ param ].IconClass;
					Clabel.appendChild( IconSpan );
					Clabel.appendChild( document.createTextNode( lang[ param ].label ) );
					var Cphelp = document.createElement( 'P' );
					Cphelp.setAttribute( 'id', 'help-' + config[ param ].id );
					Cphelp.setAttribute( 'class', config[ param ].classHelpSetting );
					Cphelp.appendChild( document.createTextNode( lang[ param ].help ) );
					// Set the form control
					Cfieldset0.appendChild( Cinput );
					Cfieldset0.appendChild( Cphelp );
					Cfieldset0.appendChild( Clabel );
//					Cfieldset0.appendChild( document.createElement( 'BR' ) );
				}
			break;
			case 'Gaccess' :
				if( config[ param ].useIt ){
					var Cinput = document.createElement( 'INPUT' );
					Cinput.setAttribute( 'id', config[ param ].id );
					Cinput.setAttribute( 'aria-describedby', 'help-' + config[ param ].id );
					Cinput.setAttribute( 'type', 'checkbox' );
					Cinput.className = config[ param ].classSetting;				
					var Clabel = document.createElement( 'LABEL' );
					Clabel.setAttribute( 'for', config[ param ].id );
					Clabel.className = config[ param].classLabelSetting;
					var IconSpan = document.createElement( 'SPAN' );
					IconSpan.setAttribute( 'aria-hidden', 'true' );
					IconSpan.className = config[ param ].IconClass;
					Clabel.appendChild( IconSpan );
					Clabel.appendChild( document.createTextNode( lang[ param ].label ) );
					var Cphelp = document.createElement( 'P' );
					Cphelp.setAttribute( 'id', 'help-' + config[ param ].id );
					Cphelp.setAttribute( 'class', config[ param ].classHelpSetting );
					Cphelp.appendChild( document.createTextNode( lang[ param ].help ) );
					// Set the form control
					Cfieldset1.appendChild( Cinput );
					Cfieldset1.appendChild( Cphelp );
					Cfieldset1.appendChild( Clabel );
//					Cfieldset1.appendChild( document.createElement( 'BR' ) );
				}
			break;
			case 'Gslide' :
				if( config[ param ].useIt ){
					var Cinput = document.createElement( 'INPUT' );
					Cinput.setAttribute( 'id', config[ param ].id );
					Cinput.setAttribute( 'aria-describedby', 'help-' + config[ param ].id );
					Cinput.setAttribute( 'type', 'checkbox' );
					Cinput.className = config[ param ].classSetting;				
					var Clabel = document.createElement( 'LABEL' );
					Clabel.setAttribute( 'for', config[ param ].id );
					Clabel.className = config[ param].classLabelSetting;
					var IconSpan = document.createElement( 'SPAN' );
					IconSpan.setAttribute( 'aria-hidden', 'true' );
					IconSpan.className = config[ param ].IconClass;
					Clabel.appendChild( IconSpan );
					Clabel.appendChild( document.createTextNode( lang[ param ].label ) );
					var Cphelp = document.createElement( 'P' );
					Cphelp.setAttribute( 'id', 'help-' + config[ param ].id );
					Cphelp.setAttribute( 'class', config[ param ].classHelpSetting );
					Cphelp.appendChild( document.createTextNode( lang[ param ].help ) );
					// Set the form control
					Cfieldset2.appendChild( Cinput );
					Cfieldset2.appendChild( Cphelp );
					Cfieldset2.appendChild( Clabel );
//					Cfieldset2.appendChild( document.createElement( 'BR' ) );
				}
			break;
			// Special case : dropdown effects
			case 'Geffects' :
				if( config[ param ].useIt ){
					var Coption = document.createElement( 'OPTION' );
					Coption.setAttribute( 'value', config[ param ].val );
					Coption.appendChild( document.createTextNode( lang[ param ].help ) );
					// Set the form control
					Cselect.appendChild( Coption );
				}
			break;
			//Special case : dropdown contrast
			case 'Gcontrast' :
				var Coption = document.createElement( 'OPTION' );
				Coption.setAttribute( 'value', config[ param ].val );
				Coption.appendChild( document.createTextNode( lang[ param ].help ) );
				// Set the form control
				CselectContrast.appendChild( Coption );
			break;			
		}
	}
	// Append components
	Cform.appendChild( Cfieldset0 );
	Cform.appendChild( Cfieldset5 );
	Cform.appendChild( Cfieldset1 );
	Cform.appendChild( Cfieldset2 );
	//Cform.appendChild( Cfieldset3 );
	// Set controls button
	var Sdiv = document.createElement( 'DIV' );
	Sdiv.setAttribute( 'id', config.ConfigButton.id );	
	Sdiv.setAttribute( 'class', config.ConfigButton.classSetting );	
	var SButton = document.createElement( 'INPUT' );
	SButton.setAttribute( 'id', config.Bsubmit.id );
	SButton.setAttribute( 'class', config.Bsubmit.classSetting );
	SButton.setAttribute( 'type', 'submit' );
	SButton.setAttribute( 'title', lang.Bsubmit.title );
	SButton.setAttribute( 'value', lang.Bsubmit.value );
	Sdiv.appendChild( SButton );
	var SButton = document.createElement( 'INPUT' );
	SButton.setAttribute( 'id', config.Bdefault.id );
	SButton.setAttribute( 'class', config.Bdefault.classSetting );
	SButton.setAttribute( 'type', 'submit' );
	SButton.setAttribute( 'title', lang.Bdefault.title );
	SButton.setAttribute( 'value', lang.Bdefault.value );
	Sdiv.appendChild( SButton );
	Cform.appendChild( Sdiv );
	// Then set in window
	$( config.Setting.id ).appendChild( Cform );
}
/* Set the navbar */
function PushNavBar(){
	var Clist = document.createElement( 'UL' );
	Clist.setAttribute( 'id', config.NavBar.id );
	// Help info
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.BhelpInfo.id );
	Cbutton.setAttribute( 'title', lang.BhelpInfo.titleOpen );
	Cbutton.className = config.BhelpInfo.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.BhelpInfo.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.BhelpInfo.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.BhelpInfo.altOpen );
	CspanText.className = config.BhelpInfo.fallbackClass;

	var CspanSmText = document.createElement( 'IMG' );
	CspanSmText.src = config.BhelpInfo.fallBackSmSrcImg;
	CspanSmText.setAttribute( 'alt', '' );
	CspanSmText.className = config.BhelpInfo.fallbackSmClass;
		
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );
	CspanFallback.appendChild( CspanSmText );
	Cbutton.appendChild( CspanFallback );

	var CspanRwd = document.createElement( 'span' );	
	CspanRwd.setAttribute( 'class', 'small-only' );
	var CspanRwdText = document.createTextNode('Aide');
	CspanRwd.appendChild(CspanRwdText);
	Cbutton.appendChild(CspanRwd);	
	
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Owner info
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.BownerInfo.id );
	Cbutton.setAttribute( 'title', lang.BownerInfo.titleOpen );
	Cbutton.className = config.BownerInfo.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.BownerInfo.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.BownerInfo.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.BownerInfo.altOpen);
	CspanText.className = config.BownerInfo.fallbackClass;

	var CspanSmText = document.createElement( 'IMG' );
	CspanSmText.src = config.BownerInfo.fallBackSmSrcImg;
	CspanSmText.setAttribute( 'alt', '' );
	CspanSmText.className = config.BownerInfo.fallbackSmClass;
		
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );
	CspanFallback.appendChild( CspanSmText );
	Cbutton.appendChild( CspanFallback );

	var CspanRwd = document.createElement( 'span' );	
	CspanRwd.setAttribute( 'class', 'small-only' );
	var CspanRwdText = document.createTextNode('Informations éditeur');
	CspanRwd.appendChild(CspanRwdText);
	Cbutton.appendChild(CspanRwd);

	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Document download
	if( $( config.Bdownload.idFile )){
		var Cli = document.createElement( 'LI' );
		Cli.className = 'small-invisible';
		var Cbutton = document.createElement( 'BUTTON' );
		var DataFile = $( config.Bdownload.idFile );
		var DocumentMetadata = DataFile.getAttribute( 'data-name' ) + ' (' + DataFile.getAttribute( 'data-type') + ', ' + DataFile.getAttribute( 'data-weight' ) + ' ' + DataFile.getAttribute( 'data-lang') + ' - ' + lang.Bdownload.newWindow+')';
		Cbutton.setAttribute( 'type', 'button' );
		Cbutton.setAttribute( 'id', config.Bdownload.id );
		Cbutton.setAttribute( 'title', lang.Bdownload.title + ' ' +DocumentMetadata );
		Cbutton.className = config.BhelpInfo.classSetting;
		//Icon implementation
		var CspanFallback = document.createElement( 'SPAN' );
		CspanFallback.className = config.IconFallBack.classSetting;
		var CspanIcon = document.createElement( 'SPAN' );
		CspanIcon.className = config.Bdownload.iconClass;
		CspanIcon.setAttribute( 'aria-hidden', 'true' );
		var CspanText = document.createElement( 'IMG' );
		CspanText.src = config.Bdownload.fallBackSrcImg;
		CspanText.setAttribute( 'alt', lang.Bdownload.alt + ' ' + DocumentMetadata );
		CspanText.className = config.BhelpInfo.fallbackClass;
		CspanFallback.appendChild( CspanIcon );
		CspanFallback.appendChild( CspanText );
		Cbutton.appendChild( CspanFallback );
		Cli.appendChild( Cbutton );
		Clist.appendChild( Cli );
	}
	// Print
	var Cli = document.createElement( 'LI' );
	Cli.className = 'small-invisible';
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bprint.id );
	Cbutton.setAttribute( 'title', lang.Bprint.title );
	Cbutton.className = config.Bprint.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bprint.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bprint.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bprint.title);
	CspanText.className = config.Bprint.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// FullScreen
	var Cli = document.createElement( 'LI' );
//	Cli.className = 'small-invisible';
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.BfullScreen.id );
	Cbutton.setAttribute( 'title', lang.BfullScreen.title );
	Cbutton.className = config.BfullScreen.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.BfullScreen.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.BfullScreen.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.BfullScreen.alt);
	CspanText.className = config.BfullScreen.fallbackClass;

	var CspanSmText = document.createElement( 'IMG' );
	CspanSmText.src = config.BfullScreen.fallBackSmSrcImg;
	CspanSmText.setAttribute( 'alt', '' );
	CspanSmText.className = config.BfullScreen.fallbackSmClass;
		
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );
	CspanFallback.appendChild( CspanSmText );
	Cbutton.appendChild( CspanFallback );
	
	var CspanRwd = document.createElement( 'span' );	
	CspanRwd.setAttribute( 'class', 'small-only' );
	var CspanRwdText = document.createTextNode('Plein écran');
	CspanRwd.appendChild(CspanRwdText);
	Cbutton.appendChild(CspanRwd);
	
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Configuration
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bconfig.id );
	Cbutton.setAttribute( 'title', lang.Bconfig.titleOpen );
	Cbutton.className = config.Bconfig.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bconfig.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bconfig.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bconfig.altOpen);
	CspanText.className = config.Bconfig.fallbackClass;

	var CspanSmText = document.createElement( 'IMG' );
	CspanSmText.src = config.Bconfig.fallBackSmSrcImg;
	CspanSmText.setAttribute( 'alt', '' );
	CspanSmText.className = config.Bconfig.fallbackSmClass;
	
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );
	CspanFallback.appendChild( CspanSmText );
	Cbutton.appendChild( CspanFallback );

	var CspanRwd = document.createElement( 'span' );	
	CspanRwd.setAttribute( 'class', 'small-only' );
	var CspanRwdText = document.createTextNode('Configuration');
	CspanRwd.appendChild(CspanRwdText);
	Cbutton.appendChild(CspanRwd);	
	
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Select + button
	var Cli = document.createElement( 'LI' );
	var Cdiv = document.createElement( 'DIV' );
	Cdiv.setAttribute( 'id', config.SelectWrapper.id );
	Cdiv.className = config.SelectWrapper.classSetting;

	var Ccustomselect=document.createElement( 'span' );
	Ccustomselect.setAttribute( 'class', 'custom-select' )

	var Cselect = document.createElement( 'SELECT' );
	Cselect.setAttribute( 'id', config.Select.id );
	Cselect.setAttribute( 'title',lang.Select.title );
	Cselect.className = config.Select.classSetting;

	Ccustomselect.appendChild( Cselect );	
	Cdiv.appendChild( Ccustomselect );

	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type','button' );
	Cbutton.setAttribute( 'id', config.Bselect.id );
	Cbutton.setAttribute( 'title', lang.Bselect.title );
	Cbutton.className = config.Bselect.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bselect.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bselect.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bselect.title);
	CspanText.className = config.Bselect.fallbackClass;


	var CspanSmText = document.createElement( 'IMG' );
	CspanSmText.src = config.Bselect.fallBackSmSrcImg;
	CspanSmText.setAttribute( 'alt', '' );
	CspanSmText.className = config.Bselect.fallbackSmClass;
		
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	CspanFallback.appendChild( CspanSmText );	
	Cbutton.appendChild( CspanFallback );
	
	var CspanRwd = document.createElement( 'span' );	
	CspanRwd.setAttribute( 'class', 'small-only' );
	var CspanRwdText = document.createTextNode(lang.Bselect.title);
	CspanRwd.appendChild(CspanRwdText);
	Cbutton.appendChild(CspanRwd);
	
	Cdiv.appendChild( Cbutton );
	Cli.appendChild( Cdiv );
	Clist.appendChild( Cli );
	// Summary
	var CliSumm = document.createElement( 'NAV' );
	CliSumm.setAttribute('role','navigation');
	CliSumm.setAttribute('id','summary-container');
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Btoc.id );
	Cbutton.setAttribute( 'title', lang.Btoc.titleOpen );
	Cbutton.className = config.Btoc.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Btoc.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Btoc.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Btoc.altOpen );
	CspanText.className = config.Btoc.fallbackClass;

	var CspanSmText = document.createElement( 'IMG' );
	CspanSmText.src = config.Btoc.fallBackSmSrcImg;
	CspanSmText.setAttribute( 'alt', '' );
	CspanSmText.className = config.Btoc.fallbackSmClass;

	var CspanRwd = document.createElement( 'span' );	
	CspanRwd.setAttribute( 'class', 'small-only' );
	var CspanRwdText = document.createTextNode('sommaire');
	CspanRwd.appendChild(CspanRwdText);
	
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	CspanFallback.appendChild( CspanSmText );	
	Cbutton.appendChild( CspanFallback );
	Cbutton.appendChild( CspanRwd );
	CliSumm.appendChild( Cbutton );
	//Clist.appendChild( Cli );
	// Index
	var CliIndex = document.createElement( 'DIV' );
	CliIndex.setAttribute( 'id', config.SlideCounter.id );
	CliIndex.className = config.SlideCounter.classSetting;
	var Cdiv = document.createElement( 'DIV' );
	var Cspan = document.createElement( 'SPAN' );
	Cspan.appendChild(document.createTextNode( '1' ));
	Cspan.setAttribute( 'id', config.SlideCounter.idCurrent );
	Cspan.className = config.SlideCounter.currentClass;
	Cdiv.appendChild( Cspan );
	var Cspan = document.createElement( 'SPAN' );
	Cspan.appendChild( document.createTextNode( lang.Ndxon ) );
	Cspan.className = config.SlideCounter.isHiddenClass;
	Cdiv.appendChild( Cspan );
	var Cspan = document.createElement( 'SPAN' );
	Cspan.setAttribute( 'id', config.SlideCounter.idTotal );
	Cspan.appendChild( document.createTextNode( '999' ) );
	Cspan.className = config.SlideCounter.totalClass;
	Cdiv.appendChild( Cspan );
	CliIndex.appendChild( Cdiv );
	//Clist.appendChild( Cli );
	// Include the navbar
	$( config.WrapperNav.id ).appendChild( Clist );
	$( config.WrapperNav.id ).appendChild( CliSumm );
	$( config.Wrapper.id ).appendChild( CliIndex );
}
//Set prev and next buttons
function PushPrevNext(){
	var Target = $( config.PrevNext.id );
	var Clist = document.createElement( 'UL' );
	// Prev button
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bprev.id );
	Cbutton.setAttribute( 'title', lang.Bprev.title );
	Cbutton.className = config.Bprev.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bprev.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bprev.fallBackSrcImg;
	CspanText.setAttribute( 'alt', lang.Bprev.title );
	CspanText.className = config.Bprev.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	// Next
	var Cli = document.createElement( 'LI' );
	var Cbutton = document.createElement( 'BUTTON' );
	Cbutton.setAttribute( 'type', 'button' );
	Cbutton.setAttribute( 'id', config.Bnext.id );
	Cbutton.setAttribute( 'title', lang.Bnext.title );
	Cbutton.className = config.Bnext.classSetting;
	//Icon implementation
	var CspanFallback = document.createElement( 'SPAN' );
	CspanFallback.className = config.IconFallBack.classSetting;
	var CspanIcon = document.createElement( 'SPAN' );
	CspanIcon.className = config.Bnext.iconClass;
	CspanIcon.setAttribute( 'aria-hidden', 'true' );
	var CspanText = document.createElement( 'IMG' );
	CspanText.src = config.Bnext.fallBackSrcImg;
	CspanText.setAttribute ( 'alt', lang.Bnext.title );
	CspanText.className = config.Bnext.fallbackClass;
	CspanFallback.appendChild( CspanIcon );
	CspanFallback.appendChild( CspanText );	
	Cbutton.appendChild( CspanFallback );
	Cli.appendChild( Cbutton );
	Clist.appendChild( Cli );
	Target.appendChild( Clist );
}
/** End UI components configuration **/
/**
 Begin utilities
**/
/* *** AccessTooltip dependencies *** */
	/* set displaying delay */
	var timeoutID;	
	function setTooltipNav( obj, reset, mouse ){
		var divTooltip = $( 'AccessibleTooltip' );
		var options = {
			tooltipClassName : 'access-tooltip',
			toolTipBetween : 5,
			toolTipUp : true,
			mouse : false,
			tempDelay : 4000,
			useAriaDP : false,
			useEscClose : true
		}
		if( reset ){
			clearTooltip ( obj, mouse );
		}
		else if( obj.getAttribute( 'title' ) ){
			var txt = obj.getAttribute( 'title' );
			var txtTooltip = document.createTextNode( txt );
			//Set tooltip
			if( txt != '' ){
				if( mouse )obj.removeAttribute('title');
				//position
				var posRight = divTooltip.offsetLeft + divTooltip.offsetWidth;
				var resetPosRight = 0;
				var windowWidth=document.body.clientWidth;
				var windowHeight=document.body.clientHeight;
				if( posRight > windowWidth ) resetPosRight = posRight - windowWidth;
				var setPos = options.toolTipBetween + obj.offsetHeight;
				var toolTipTop = position( obj, 'y' ) + setPos;
				if( options.toolTipUp) toolTipTop = position( obj, 'y' ) - setPos - 5;
				divTooltip.style.top = toolTipTop + 'px';
				divTooltip.style.left = position( obj, 'x' ) + obj.offsetWidth * 25/100 - resetPosRight + 'px';
				divTooltip.style.display = 'block';
				if( divTooltip.firstChild ) divTooltip.removeChild( divTooltip.firstChild );
				divTooltip.appendChild( txtTooltip );
				if( options.tempDelay > 0){
					timeoutID = setTimeout( function(){
						if( divTooltip.firstChild ) {
							if( mouse ) obj.setAttribute('title', divTooltip.firstChild.nodeValue);
							divTooltip.removeChild( divTooltip.firstChild );
							divTooltip.style.display = 'none';
						}
					}, options.tempDelay);
				}
				if( options.useAriaDP || options.useEscClose ) {
					document.addEventListener( 'keydown', escClose, false );
				}
			}
			else{
				obj.removeAttribute( 'title' );
			}
		}
	}
	function escClose( event ){
		var divTooltip = $( 'AccessibleTooltip' );
		if( event.keyCode === 27 ){
			if( divTooltip.firstChild ) {
				divTooltip.removeChild( divTooltip.firstChild );
				divTooltip.style.display = 'none';
			}
			document.removeEventListener( 'keydown', escClose , false );
		}
	}
	function clearTooltip ( obj, mouse ){
		var divTooltip = $( 'AccessibleTooltip' );
		if( divTooltip.firstChild ) {
			if( mouse )obj.setAttribute('title', divTooltip.firstChild.nodeValue);
			divTooltip.removeChild( divTooltip.firstChild );
			divTooltip.style.display = 'none';
		}
		clearTimeout(timeoutID); 
	}
	// obj position
	function position( obj, coordinate){
		var pos, parent = obj.offsetParent;
		(coordinate === 'x') ? pos = obj.offsetLeft : pos = obj.offsetTop;
		while( parent != null){
			(coordinate === 'x') ? pos += parent.offsetLeft : pos += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return pos;
	}
	// IE11 on windows 8 is the only browser wich expose the title on keyboard focus
	// Below a little trash, but sufficient, IE11/windows 8 filtering method
	// filter is based on the new user agent string for IE11+
	function Unsupported(){
		var objUA = window.navigator.userAgent;
		//If IE 11
		if( objUA.indexOf('Trident') > 0 && objUA.indexOf('MSIE') < 0 ){
			//If windows 7 then title keyboard focus is unsupported
			if(objUA.indexOf('NT 6.1') > 0){
				return true;
			}
			//If windows 8+ title keyboard focus is supported
			else {
			 return false;
			}
		}
		//If not IE title keyboard focus is unsupported
		else {
		return true;
		}
	}
/* CSS 3 prefix manager (http://www.sitepoint.com/css3-animation-javascript-event-handlers/) */
function PrefixedEvent( anim, type, callback ) {
	for ( var p = 0; p < pfx.length; p++ ) {
		if ( !pfx[p] ) type = type.toLowerCase();
		anim.addEventListener( pfx[p] + type, callback, false);
	}
}
/* Shortcut to get element by e=id/tagname/classname and ndx=index (for tagname and classname case) */
function $( e, ndx ){
 var x;
 var elm;
 ndx ? x = ndx : x = 0;
 if( document.getElementById(e) ) elm = document.getElementById(e);
 if( document.getElementsByClassName(e)[x] ) elm = document.getElementsByClassName(e)[x];
 if( document.getElementsByTagName(e)[x] ) elm = document.getElementsByTagName(e)[x];
 return elm;
}
/* Get KeyCode */
// TAB:9, ESC:27, Left:37, Up:38, Right:39, Down:40, Spacebar:32, Enter:13
// pageDown:34, pageUp:33 (for remote control), Home:36, End:35
function key( event ){
	var Keyref;
	 var KeycodeTab = [9,13,27,32,33,34,35,36,37,38,39,40,48];
	 if( KeycodeTab.indexOf( event.keyCode ) > -1 ){
		Keyref = event.keyCode;
		if( event.altKey ){
			Keyref = '2' + event.keyCode;
		}
		else if( event.shiftKey ){
			Keyref = '1' + event.keyCode;
		}
	  return Keyref;
	 }
}
/* Cookies */
function createCookie( name, value, days ) {
	if ( days ) {
		var datetime = new Date();
		datetime.setTime( datetime.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
		var expires = "; expires=" + datetime.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie( name ) {
	var nameEQ = name + "=";
	var ca = document.cookie.split( ';' );
	for(var i = 0; i < ca.length; i++ ) {
		var c = ca[i];
		while ( c.charAt(0) == ' ' ) c = c.substring( 1, c.length );
		if ( c.indexOf( nameEQ ) == 0 ) return c.substring( nameEQ.length, c.length );
	}
	return null;
}
function eraseCookie( name ) {
	createCookie( name , "", -1 );
}
})();

// @license-end
