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
/*** AccessNote **/
/**
A lightweight function to manage text anchors note and bottom-page notes.
Implementation : 
use word<sup class="acc-set-note"></sup> to include an anchor note
use <p class="acc-note"><sup></sup> [...] </p> to include the related note.
Important : 
List of notes must set in same order than anchors note.
Multinote usage :
If you want to link several anchor note with one note :
1. insert a class on the note : <p class="acc-note note-1"><sup></sup> [...]</p>
2. insert the same class on each linked anchor :
word<sup class="acc-set-note note-1"></sup>, anotherword<sup class="acc-set-note note-1"></sup>
Options :
use word<sup class="acc-set-note acc-describedby"></sup> to use aria-describedby relation
All values like class name can be personalized with config below
**/
/** Main **/
function AccessNote() {
	
	'use strict '

	/*** Configuration **/
	var config = {
	/** debug mode 
		when the number of anchors note isn't equal to number of notes an error is called and stop the script
		the debug mode show where anchors note was inserted (flag : note !)
		Important : set to false for publication
	**/
		debugMode: false,
	/** style anchor note setting
		style: true to use a particular CSS class
		values : bracket-note [ x ], parenthesis-note ( x ) or your own style
	**/
		style: {
			style: true,
			styleClassName: 'parenthesis-note'
		},
	/** ClassSetting
			anchor : className for anchor note
			note: className for note itself
			example :
			<p> lorem ipsum<sup class="acc-set-note"></sup></p>
			<p class="acc-note"><sup></sup>ipsum is a fake term</p>
			rootMulti : root classname for multinote setting, hyphen (-) is required as last character
			example :
			<p> lorem ipsum<sup class="acc-set-note note-1"></sup></p>
			<p class="acc-note note-1"><sup></sup>ipsum is a fake term</p>
			'note-' is the root
	**/
		classSetting: {
			anchor: 'acc-set-note',
			note: 'acc-note',
			rootMulti:'note-'
		},
	/** Link texts **/
		anchorLinkText: {
			lang: {
				en: 'read note',
				fr: 'lire la note'
			}
		},
		returnLinkText: {
			lang: {
				en: 'return to text',
				fr: 'retour au texte'
			}
		},
	/** aria option 
		useIt: true to set a describedby value if optionClassName is set.
		example :
		<p> lorem ipsum<sup class="acc-set-note acc-describedby">1</sup></p> to set aria-describedby value		
	**/
		describedby: {
			useIt: true,
			optionClassName: 'acc-describedby'
		}
	}
	/** Init */
		settingNote();
	/** Dependencies **/
	function settingNote(){
		//set lang
		var langRef = setdefaultLang();
		//set anchor, note an idRef arrays
		var listAnchor = document.getElementsByClassName( config.classSetting.anchor );
		var listNote = document.getElementsByClassName( config.classSetting.note );
		var listIdRef = [];
		//regxep to find multiclasssetting
		var ctrl = new RegExp(config.classSetting.rootMulti);
		// set controle values
		var anchorLen = ctrlNbNote( listAnchor );
		var noteLen = listNote.length;
		// note index		
		var indexRef = 1;
		// error
		if( anchorLen != noteLen ){
			var msgError = 'there is ' + anchorLen + ' reference(s) for ' + noteLen + ' note(s)';
			msgError += ' please check your notes and retry (you can use debug mode to see anchor note)';
			if( config.debugMode ){
				for( i = 0; i < listAnchor.length; i++ ){
					listAnchor[i].innerHTML = '<span style="background-color:red; color:#fff">note !</span>';
				}
			}
			throw new Error( msgError ); 
		}
		// setting process
		else{
			for( i = 0; i < listAnchor.length; i++ ){
				var anchorLink = document.createElement( 'a' );
				var wbrSpace = document.createElement( 'wbr' );
				var noteLink = document.createElement( 'a' );
				//var noteId = 'note-' + indexRef;
				var noteId = listIdRef[i]; 
				var anchorId = 'anchor-' + indexRef;
				//set anchor link
				anchorLink.innerHTML = indexRef;
				anchorLink.setAttribute( 'title', config.anchorLinkText.lang[ langRef ] + ' ' + indexRef );
				anchorLink.setAttribute( 'href', '#' + noteId );
				anchorLink.setAttribute( 'id', anchorId );
				if( config.describedby.useIt && listAnchor[i].classList.contains( config.describedby.optionClassName ) ) anchorLink.setAttribute( 'aria-describedBy', '#' + noteId );
				if( config.style.style ) listAnchor[i].classList.add( config.style.styleClassName );
				// set wbr and append
				listAnchor[i].parentNode.insertBefore( wbrSpace, listAnchor[i] );
				listAnchor[i].appendChild( anchorLink );
				//Special for AccessReader
				anchorLink.addEventListener( 'click', function( event ){
					gotoHashRef( this );
					event.preventDefault();
				}, false );
				//set note return to text link;
				noteLink.innerHTML = indexRef;
				noteLink.setAttribute( 'title', config.returnLinkText.lang[ langRef ] + ' ' + indexRef );
				noteLink.setAttribute( 'href', '#' + anchorId );
				noteLink.setAttribute( 'id', noteId );
				//real index node noteList
				var noteListRef = noteId.split('-');
				var realNoteref = noteListRef[1]-1;
				if(listNote[realNoteref]) {
				 listNote[realNoteref].firstChild.appendChild( noteLink );
				}
				//Special for AccessReader
				noteLink.addEventListener( 'click', function( event ){
					gotoHashRef( this );
					event.preventDefault();
				}, false );
				//next
				indexRef += 1;
			}
		}
		/** dependencies **/
		function ctrlNbNote( list ){
			var multiClassArray = [];
			var multiRef;
			var nbNbNote = 0;
			for( var i = 0, len = list.length; i < len; i++ ){
				if( ctrl.test(list[i].className )){
					extractMultiClass( list[i] );
					if( multiClassArray.indexOf( multiRef ) === -1 ){
						nbNbNote += 1;
						multiClassArray.push( multiRef );
					}
					var realNdx = multiClassArray.indexOf( multiRef ) + 2;
					listIdRef.push( 'note-'+ realNdx);
				}
				else{
					nbNbNote += 1;
					listIdRef.push( 'note-'+nbNbNote );		
				}
			}
			/*dependencie*/
			function extractMultiClass( item ){
				var classArray = item.classList;
				for( var j = 0, len = classArray.length; j < len; j++ ){
					if( ctrl.test( classArray[j] )){
						multiRef = classArray[j];
						break;
					}
				}			
			}
			return nbNbNote;
		}
	}
	/** Special case AccessReader */
	function gotoHashRef( obj ){
		var hashSrc = obj.getAttribute( 'href' );
		var hashRef = hashSrc.split( '#' )[1];
		if( document.getElementById( hashRef ) ){
			document.getElementById( hashRef ).focus();
		}
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
};
