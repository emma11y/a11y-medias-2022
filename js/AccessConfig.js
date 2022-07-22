/*    
@licstart  The following is the entire license notice for the 
JavaScript code in this page.

Copyright (C) 2015  Access42

The JavaScript code in this page is free software: you can
redistribute it and/or modify it under the terms of the GNU
General Public License (GNU GPL) as published by the Free Software
Foundation, either version 3 of the License, or (at your option)
any later version.  The code is distributed WITHOUT ANY WARRANTY;
without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

As additional permission under GNU GPL version 3 section 7, you
may distribute non-source (e.g., minimized or compacted) forms of
that code without the copy of the GNU GPL normally required by
section 4, provided you include this license notice and a URL
through which recipients can access the Corresponding Source.   


@licend  The above is the entire license notice
for the JavaScript code in this page.
*/
/*** AccessConfig **/
var AccessConfig = (function() {
	
	'use strict '

	/*** Configuration **/
	var config = {
	/**	General Setting 
		useModal : true to implement the choices parameters as modal (require the button ModalButton)
		, false to implement them as inline element (require the contener InlineContener)
		useExtendContrast : true for three choices (default, inverted, enforced), false for two choices (default, inverted)
	**/
		Setting: {
			useModal: true,
			useExtendContrast: true
		},
	/** Modal button and window contener **/
		ModalButton: {
			id: 'modal-button-c',
		},
		ModalContener: {
			id: 'modal-window-c',
			classSetting: 'a42-modal',
			titleLang: {
				en: 'Accessibility settings',
				fr: 'Paramètres d\'accessibilité',
			},
			hiddenTitleClass: 'sr',
			titleId: 'modal-title'
		},
		CloseButton: {
			id: 'modal-close-button',
			classSetting: 'a42-modal_close',
			lang: {
				en: 'close',
				fr: 'fermer'
			},
			hiddenTextClass: 'fb-text'
		},
	/** Inline content contener **/
		InlineContentContener: {
			id: 'inline-c'
		},
	/** Parameters checkboxes
		lang is based on html lang declaration, first entry is the default when html lang is unknow
	**/
	/** Contrast 
		value : className of the dedicated className style
		Important ! : value and id must be identical
		groupname : value must match id as : [groupname]-id
		example : contrast id = contrast-id, groupname = contrast
	**/
		ContrastFieldset: {
			//caution : don't change
			id: 'contrast-id'
		},
		ContrastLegend: {
			classSetting: '',
			lang: {
				en: 'Contrast',
				fr: 'Contrastes'
			}	
		},
		DefaultContrastCheckbox: {
			id: 'default-c',
			value: 'default-c',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'contrast',
			//label
			lang: {
				en: 'Default',
				fr: 'Défaut'
			}
		},
		HighContrastCheckbox:{
			id: 'high-c',
			value: 'high-c',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'contrast',
			//label
			lang: {
				en: 'Higher',
				fr: 'Renforcés'
			}
		},
		InvertContrastCheckbox:{
			id: 'inv-c',
			value: 'inv-c',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'contrast',
			//label
			lang: {
				en: 'Inverted',
				fr: 'Inversés'
			}		
		},
	/** Dyslexia font **/
		DyslexiaFieldset: {
			//caution : don't change
			id: 'font-id'
		},
		DyslexiaLegend: {
			classSetting: '',
			//label
			lang: {
				en: 'Font (dyslexia)',
				fr: 'Police (dyslexie)'
			}		
		},
		DefaultFontCheckbox:{
			id: 'default-font',
			value: 'default-font',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'font',
			//label
			lang: {
				en: 'Default',
				fr: 'Défaut'
			}		
		},
		DyslexiaFontCheckbox:{
			id: 'dys-f',
			value: 'dys-f',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'font',
			//label
			lang: {
				en: 'Adapted',
				fr: 'Adaptée'
			}		
		},
	/** Line spacing **/
		LineSpacingFieldset: {
			//caution : don't change
			id: 'line-spacing-id'
		},
		LineSpacingLegend: {
			classSetting: '',
			//label
			lang: {
				en: 'Line spacing',
				fr: 'Interlignage'
			}		
		},
		DefaultLineSpacingCheckbox:{
			id: 'default-line-spacing',
			value: 'default-line-spacing',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'line-spacing',
			//label
			lang: {
				en: 'Default',
				fr: 'Défaut'
			}		
		},
		DyslexiaLineSpacingCheckbox:{
			id: 'dys-line-spacing',
			value: 'dys-line-spacing',
			classSetting: 'config-btn',
			//caution : don't change
			groupName: 'line-spacing',
			//label
			lang: {
				en: 'Increased',
				fr: 'Augmenté'
			}		
		},
	/** Justification **/
//		JustificationFieldset: {
//			//caution : don't change
//			id: 'justification-id'
//		},
//		JustificationLegend: {
//			classSetting: '',
//			//label
//			lang: {
//				en: 'Justification',
//				fr: 'Justification'
//			}		
//		},
//		DefaultJustificationCheckbox:{
//			id: 'default-justification',
//			value: 'default-justification',
//			classSetting: 'config-btn',
//			//caution : don't change
//			groupName: 'justification',
//			//label
//			lang: {
//				en: 'Default',
//				fr: 'Défaut'
//			}		
//		},
//		DyslexiaJustificationCheckbox:{
//			id: 'dys-justification',
//			value: 'dys-justification',
//			classSetting: 'config-btn',
//			//caution : don't change
//			groupName: 'justification',
//			//label
//			lang: {
//				en: 'Adapted',
//				fr: 'Adaptée'
//			}		
//		}		
	}
	//global
	var global = {
		mode: null,
		cookieName: null,
		openObj: null
	}
	/** Onload */
	window.onload = function(){
		//set the setting form
		settingForm();
		// Modal option
		if( config.Setting.useModal ) {
			var openButton = document.getElementById( config.ModalButton.id );
			openButton.addEventListener( 'click', function(){
				dialog( this );
			}, false);
		}
		// Contrast
		global.mode = config.ContrastFieldset.id;
		global.cookieName = 'contrast';
		setEvent();
		// dyslexia
		global.mode = config.DyslexiaFieldset.id;
		global.cookieName = 'font';
		setEvent();
		// line spacing
		global.mode = config.LineSpacingFieldset.id;
		global.cookieName = 'line-spacing';
		setEvent();
		// justification
//		global.mode = config.JustificationFieldset.id;
//		global.cookieName = 'justification';
//		setEvent();
	}
	/** Dependencies **/
	/* Create modal or inline setting form*/
	function settingForm(){
		var langRef = setdefaultLang();
		// set modale or inline contener
		if( config.Setting.useModal ) {
			//modale
			var div = document.createElement( 'div');
			div.setAttribute( 'id', config.ModalContener.id );
			div.setAttribute( 'role', 'dialog');
			div.setAttribute( 'aria-labelledby', config.ModalContener.titleId );
			div.setAttribute( 'tabindex', '-1' );
			if( config.ModalContener.classSetting ){
				div.classList.add( config.ModalContener.classSetting );
			}
			//title
			var titleWindow = document.createElement( 'h1' );
			titleWindow.setAttribute('id', config.ModalContener.titleId );
			var titleTxt = document.createTextNode( config.ModalContener.titleLang[ langRef ]);
			titleWindow.appendChild( titleTxt );
			div.appendChild( titleWindow );
			//close button
			var CClose = document.createElement( 'button' );
			CClose.setAttribute( 'type', 'button');
			CClose.setAttribute( 'id', config.CloseButton.id );
			CClose.setAttribute( 'class', config.CloseButton.classSetting );
			
			var CloseIcon = document.createElement( 'span' );
			CloseIcon.setAttribute('class','icon-close');
			var SpanHidden = document.createElement( 'span' );
			SpanHidden.className = config.CloseButton.hiddenTextClass;
			var CloseTxt = document.createTextNode( config.CloseButton.lang[ langRef ]);
			SpanHidden.appendChild( CloseTxt );
			
			CClose.appendChild( CloseIcon );
			CClose.appendChild( SpanHidden );
			
			
			div.appendChild( CClose );
		}
		else {
			div = document.getElementById( config.InlineContentContener.id );
		}
		//setting form
		var form = document.createElement( 'form' );
		//--constrast
		var fieldset = document.createElement( 'fieldset' )
		fieldset.setAttribute( 'id', config.ContrastFieldset.id );
		fieldset.setAttribute( 'class', 'col-1-2' );
		var legend = document.createElement( 'legend' );
		var legendText = document.createTextNode( config.ContrastLegend.lang[ langRef ] );
		legend.appendChild( legendText );
		fieldset.appendChild( legend );
		//default
		var CInput = document.createElement( 'input' );
		CInput.setAttribute( 'id', config.DefaultContrastCheckbox.id );
		CInput.setAttribute( 'type', 'radio' );
		CInput.setAttribute( 'checked', 'checked' );
		CInput.setAttribute( 'value', config.DefaultContrastCheckbox.value );
		CInput.setAttribute( 'name', config.DefaultContrastCheckbox.groupName );
		CInput.className = config.DefaultContrastCheckbox.classSetting;
		var CLabel = document.createElement( 'label' );
		CLabel.setAttribute( 'for', config.DefaultContrastCheckbox.id );
		var defaultCText = document.createTextNode ( config.DefaultContrastCheckbox.lang[ langRef ] );
		CLabel.appendChild( defaultCText );
		fieldset.appendChild( CInput );
		fieldset.appendChild( CLabel );
		//High
		if( config.Setting.useExtendContrast ) {
			var CInput = document.createElement( 'input' );
			CInput.setAttribute( 'id', config.HighContrastCheckbox.id );
			CInput.setAttribute( 'type', 'radio' );
			CInput.setAttribute( 'value', config.HighContrastCheckbox.value );
			CInput.setAttribute( 'name', config.HighContrastCheckbox.groupName );
			CInput.className = config.HighContrastCheckbox.classSetting;
			var CLabel = document.createElement( 'label' );
			CLabel.setAttribute( 'for', config.HighContrastCheckbox.id );
			var defaultCText = document.createTextNode ( config.HighContrastCheckbox.lang[ langRef ] );
			CLabel.appendChild( defaultCText );
			fieldset.appendChild( CInput );
			fieldset.appendChild( CLabel );
		}

		//Invert
		var CInput = document.createElement( 'input' );
		CInput.setAttribute( 'id', config.InvertContrastCheckbox.id );
		fieldset.setAttribute( 'class', 'col-1-2' );
		CInput.setAttribute( 'type', 'radio' );
		CInput.setAttribute( 'value', config.InvertContrastCheckbox.value );
		CInput.setAttribute( 'name', config.InvertContrastCheckbox.groupName );
		CInput.className = config.InvertContrastCheckbox.classSetting;
		var CLabel = document.createElement( 'label' );
		CLabel.setAttribute( 'for', config.InvertContrastCheckbox.id );
		var defaultCText = document.createTextNode ( config.InvertContrastCheckbox.lang[ langRef ] );
		CLabel.appendChild( defaultCText );
		fieldset.appendChild( CInput );
		fieldset.appendChild( CLabel );
		div.appendChild( fieldset );
		//--Font
		var fieldset = document.createElement( 'fieldset' );
		fieldset.setAttribute( 'id', config.DyslexiaFieldset.id );
		fieldset.setAttribute( 'class', 'col-1-2' );
		var legend = document.createElement( 'legend' );
		var legendText = document.createTextNode( config.DyslexiaLegend.lang[ langRef ] );
		legend.appendChild( legendText );
		fieldset.appendChild( legend );
		//default
		var CInput = document.createElement( 'input' );
		CInput.setAttribute( 'id', config.DefaultFontCheckbox.id );
		CInput.setAttribute( 'type', 'radio' );
		CInput.setAttribute( 'value', config.DefaultFontCheckbox.value );
		CInput.setAttribute( 'name', config.DefaultFontCheckbox.groupName );
		CInput.setAttribute( 'checked', 'checked' );
		CInput.className = config.DefaultFontCheckbox.classSetting;
		var CLabel = document.createElement( 'label' );
		CLabel.setAttribute( 'for', config.DefaultFontCheckbox.id );
		var defaultCText = document.createTextNode ( config.DefaultFontCheckbox.lang[ langRef ] );
		CLabel.appendChild( defaultCText );
		fieldset.appendChild( CInput );
		fieldset.appendChild( CLabel );
		//Dyslexia
		var CInput = document.createElement( 'input' );
		CInput.setAttribute( 'id', config.DyslexiaFontCheckbox.id );
		CInput.setAttribute( 'type', 'radio' );
		CInput.setAttribute( 'value', config.DyslexiaFontCheckbox.value );
		CInput.setAttribute( 'name', config.DyslexiaFontCheckbox.groupName );
		CInput.className = config.DyslexiaFontCheckbox.classSetting;
		var CLabel = document.createElement( 'label' );
		CLabel.setAttribute( 'for', config.DyslexiaFontCheckbox.id );
		var defaultCText = document.createTextNode ( config.DyslexiaFontCheckbox.lang[ langRef ] );
		CLabel.appendChild( defaultCText );
		fieldset.appendChild( CInput );
		fieldset.appendChild( CLabel );
		div.appendChild( fieldset );
		//--Line spacing
		var fieldset = document.createElement( 'fieldset' );
		fieldset.setAttribute( 'id', config.LineSpacingFieldset.id );
		fieldset.setAttribute( 'class', 'col-1-2' );
		var legend = document.createElement( 'legend' );
		var legendText = document.createTextNode( config.LineSpacingLegend.lang[ langRef ] );
		legend.appendChild( legendText );
		fieldset.appendChild( legend );
		//default
		var CInput = document.createElement( 'input' );
		CInput.setAttribute( 'id', config.DefaultLineSpacingCheckbox.id );
		CInput.setAttribute( 'type', 'radio' );
		CInput.setAttribute( 'value', config.DefaultLineSpacingCheckbox.value );
		CInput.setAttribute( 'name', config.DefaultLineSpacingCheckbox.groupName );
		CInput.setAttribute( 'checked', 'checked' );
		CInput.className = config.DefaultLineSpacingCheckbox.classSetting;
		var CLabel = document.createElement( 'label' );
		CLabel.setAttribute( 'for', config.DefaultLineSpacingCheckbox.id );
		var defaultCText = document.createTextNode ( config.DefaultLineSpacingCheckbox.lang[ langRef ] );
		CLabel.appendChild( defaultCText );
		fieldset.appendChild( CInput );
		fieldset.appendChild( CLabel );
		//Dyslexia line spacing
		var CInput = document.createElement( 'input' );
		CInput.setAttribute( 'id', config.DyslexiaLineSpacingCheckbox.id );
		CInput.setAttribute( 'type', 'radio' );
		CInput.setAttribute( 'value', config.DyslexiaLineSpacingCheckbox.value );
		CInput.setAttribute( 'name', config.DyslexiaLineSpacingCheckbox.groupName );
		CInput.className = config.DyslexiaLineSpacingCheckbox.classSetting;
		var CLabel = document.createElement( 'label' );
		CLabel.setAttribute( 'for', config.DyslexiaLineSpacingCheckbox.id );
		var defaultCText = document.createTextNode ( config.DyslexiaLineSpacingCheckbox.lang[ langRef ] );
		CLabel.appendChild( defaultCText );
		fieldset.appendChild( CInput );
		fieldset.appendChild( CLabel );
		div.appendChild( fieldset );
		//--Justification
//		var fieldset = document.createElement( 'fieldset' );
//		fieldset.setAttribute( 'id', config.JustificationFieldset.id );
//		var legend = document.createElement( 'legend' );
//		var legendText = document.createTextNode( config.JustificationLegend.lang[ langRef ] );
//		legend.appendChild( legendText );
//		fieldset.appendChild( legend );
//		//default
//		var CInput = document.createElement( 'input' );
//		CInput.setAttribute( 'id', config.DefaultJustificationCheckbox.id );
//		CInput.setAttribute( 'type', 'radio' );
//		CInput.setAttribute( 'value', config.DefaultJustificationCheckbox.value );
//		CInput.setAttribute( 'name', config.DefaultJustificationCheckbox.groupName );
//		CInput.setAttribute( 'checked', 'checked' );
//		CInput.className = config.DefaultJustificationCheckbox.classSetting;
//		var CLabel = document.createElement( 'label' );
//		CLabel.setAttribute( 'for', config.DefaultJustificationCheckbox.id );
//		var defaultCText = document.createTextNode ( config.DefaultJustificationCheckbox.lang[ langRef ] );
//		CLabel.appendChild( defaultCText );
//		fieldset.appendChild( CInput );
//		fieldset.appendChild( CLabel );
//		//Dyslexia jsurtification
//		var CInput = document.createElement( 'input' );
//		CInput.setAttribute( 'id', config.DyslexiaJustificationCheckbox.id );
//		CInput.setAttribute( 'type', 'radio' );
//		CInput.setAttribute( 'value', config.DyslexiaJustificationCheckbox.value );
//		CInput.setAttribute( 'name', config.DyslexiaJustificationCheckbox.groupName );
//		CInput.className = config.DyslexiaJustificationCheckbox.classSetting;
//		var CLabel = document.createElement( 'label' );
//		CLabel.setAttribute( 'for', config.DyslexiaJustificationCheckbox.id );
//		var defaultCText = document.createTextNode ( config.DyslexiaJustificationCheckbox.lang[ langRef ] );
//		CLabel.appendChild( defaultCText );
//		fieldset.appendChild( CInput );
//		fieldset.appendChild( CLabel );
//		div.appendChild( fieldset );
		//set the modal
		if( config.Setting.useModal ) document.querySelector( 'body').appendChild( div );
	}
	/** get default language (based on lang attribute) **/
	function setdefaultLang(){
		var lang = document.querySelector( 'html' ).getAttribute( 'lang' );
		if( lang ){
			var ndx;
			( lang.indexOf( '-' ) > 0 ) ? ndx = lang.indexOf( '-' ) : ndx = 3;
			return lang.substring( 0, ndx );
		}
		else {
		 return 'en';
		}
	}
	/** Setting managers **/
	function setEvent(){
		var body = document.querySelector( 'body' );
		var fieldset = document.getElementById( global.mode );
		var checkBoxList = fieldset.querySelectorAll( 'input' );
		for (i = 0, len = checkBoxList.length; i < len; i++ ){
			checkBoxList[i].addEventListener( 'click', function(){
				setAdaptive( this );
			}, false);
		}
		var target = readCookie( global.cookieName );
		if( target ){
			body.classList.add( target );
			for (i = 0, len = checkBoxList.length; i < len; i++ ){
				checkBoxList[i].removeAttribute( 'checked' );
			}
			document.getElementById( target ).setAttribute( 'checked', 'checked');
		}
	}
	//Set Contrast
	function setAdaptive( obj ){
		global.mode = obj.getAttribute('name')+'-id';
		global.cookieName = obj.getAttribute('name');
		var fieldset = document.getElementById( global.mode );
		var checkBoxList = fieldset.querySelectorAll( 'input' );
		var body = document.querySelector( 'body' );
		for (i = 0, len = checkBoxList.length; i < len; i++ ){
			var value = checkBoxList[i].getAttribute( 'value' );
			checkBoxList[i].removeAttribute('checked');
			body.classList.remove( value);
		}
		var newClass = obj.getAttribute( 'value' );
		obj.setAttribute( 'checked', 'checked' );
		body.classList.add( newClass );
		createCookie(global.cookieName, newClass,'180');	
	}
	//Modal manager
	function dialog( returnTo ) {
		//open
		global.openObj = document.getElementById( config.ModalContener.id );
		global.openObj.style.display = 'block';
		document.getElementById( config.CloseButton.id ).focus();
		//Init events
		//escape close
		document.addEventListener( 'keydown', escClose, false );
		//button close
		var closeButton = document.getElementById( config.CloseButton.id );
		closeButton.addEventListener( 'click', buttonClose, false );
		//trappingFocus
		document.addEventListener( 'focus', trappingFocus, true );
		//close functions
		function escClose( event ){
			if( event.keyCode === 27 ){
				global.openObj.style.display = 'none';
				returnTo.focus();
				//reset listener and object trapping focus
				document.removeEventListener( 'keydown', escClose , false );
				//global.openObj = null;
			}
		}
		function buttonClose(){
			global.openObj.style.display = 'none';
			returnTo.focus();
			//reset object trapping focus
			//global.openObj = null
		}
	}
	/* Generic trapping focus function (based on global.openObj setting) */
	function trappingFocus( event ){
		if ( global.openObj && !global.openObj.contains( event.target ) ) {
			event.stopPropagation();
			global.openObj.focus();
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
} )();
