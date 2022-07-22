var lang={
	/** Accessibility **/
	//vocalize slide number on total (1 on 4 for example)
	VocalizeNdiapo: { 
		label: 'Numéro de la page', 
		help: 'Vocalise le numéro des pages lors de leur affichage' 
	} ,
	//Play a sound (beep) when displaying hidden text
	 SoundTxt: { 
	 	label: 'Textes masqués', 
	 	help: 'Émet un bip lors de l\'affichage des textes masqués' 
	 },
	//Play a sound when displaying a slide
	SoundSlide: { 
		label: 'Page', 
		help: 'Émet un son lors de l\'affichage des pages'
	},
	//Play a sound (beep) when displaying first slide
	SoundSlide1: { 
		label: 'Début', 
		help: 'Émet un bip lors de l\'affichage de la première page'
	},
	//Play a sound (beep) when displaying last slide
	SoundSlideEnd: { 
		label: 'Fin', 
		help: 'Émet un bip lors de l\'affichage de la dernière page'  
	},
	//Vocalize the title of the current slide
	VocalizeTitle: { 
		label: 'Titre', 
		help: 'Vocalise le titre de la page courante'
	},
	//Update the window title
	UpWindowTitle: { 
		label: 'Titre fenêtre', 
		help: 'Met à jour le titre de la fenêtre à l\'affichage d\'une page' 
	},
	//Skip to the "next" button on slideshow onload
	GotoBnext: { 
		label: 'Bouton suivant', 
		help: 'Donne le focus sur le bouton suivant lors de l\'affichage du lecteur' 
	},
	//Deactivate click button function to go to next slide
	Noclick:  { 
		label: 'Clic', 
		help: 'Désactive l\'action du clic pour afficher la page suivante.'
	},
	//Dyslexia font choice
	FontDyslexia: {
		label: 'Police adaptée',
		help: 'Choisir la police pour dyslexiques'	
	},
	//Dyslexia texte format choices
	LineSpaceDyslexia: {
		label: 'Interlignage adapté',
		help: 'Choisir l\'interlignage pour dyslexiques'		
	},
	//Justification texte format
	NoJustify: {
		label: 'Pas de justification',
		help: 'Interdire la justification de texte'
	},
	//Contrast
	Contrast: {
		legend: 'Contraste',
		label: 'Choisir le contraste',
	},
	ContrastDefault:{
		help: 'Par défaut'
	},
	ContrastInvert:{
		help: 'Inversé'
	},
	ContrastEnforced:{
		help: 'Renforcé'
	},	
	/** Slideshow parameters **/
	// Display summary as :
	// 0 : no-modal window
	// 1 : modal window
	SumModOn: {
		label: 'Sommaire', 
		help: 'Afficher le sommaire comme une fenêtre modale'
	},
	// Switch CSS3=1 or JS=0 for shutter animation
	AnimCssOn: {
		label: 'Balayage', 
		help: 'Utiliser CSS3 pour les effets de balayage'
	},
	// Switch ModePlan=1 for Linear Layout
	ModePlan: {
		label: 'Mode plan', 
		help: 'Utiliser le mode plan pour afficher les pages en succession linéaire'
	},
	/** Effects **/
	// Effects select label
	LabelEffect: 'Type d\'animation',
	// Noeffects
	Eno: {
		help: 'Pas d\'effet'
	},
	// Fade in
	Efadin: {
		help: 'Apparition progressive'
	},
	// Scale
	Escale: {
		help: 'Échelle'
	},
	// Flash
	Flash: {
		help: 'Apparition flash'
	},
	// Flip
	Flip: {
		help: 'Apparition flip'
	},
	// Shutter left
	Eleft: {
		help: 'Balayage vers la gauche'
	},
	// Shutter rigth
	Eright: {
		help: 'Balayage vers la droite'
	},
	// Shutter bottom
	Ebottom: { 
		help: 'Balayage vers le bas'
	},
	// Shutter top
	Etop: { 
		help: 'Balayage vers le haut'
	},
	// Group Legend
	Gaccess: { 
		legend: 'Accessibilité' 
	},
	Gslide: { 
		legend: 'Lecteur' 
	},
	Geffects: { 
		legend: 'Effets' 
	},
	Gdys: {
		legend: 'Dyslexie'
	},
	/** Misceallanous **/
	// Setting configuration windows modal properties
	ConfigTitle: 'Paramètres',
	SummaryTitle: 'Sommaire',
	SummaryLinkActiveTitle : ' - affiché ',
	OwnerInfoTitle : 'Informations éditeur',
	HelpInfoTitle : 'Aide',
	Wclose: 'Fermer',
	// Setting buttons
	Bsubmit: {
		title:'Enregistrer la configuration', 
		value: 'Enregistrer' 
	},
	Bdefault: {
		title:'Configuration par défaut', 
		value: 'Défaut' 
	},
	// Setting navbar button and select
	// Ndxon = expression "on" in "1 on 4" for vocalization numbers slide 
	Bprev: {
		title: 'Précédent',
		alt: 'Précédent'
	},
	Bnext: {
		title: 'Suivant',
		alt: 'Suivant'
	},
	Select:{
		title: 'Aller à la page numéro '
	},
	Bselect: {
		title: 'Afficher la page',
		alt: 'Afficher la page'
	},
	Btoc: {
		titleOpen: 'Ouvrir la table des matières',
		altOpen: 'Ouvrir la table des matières',
		titleClose: 'Fermer la table des matières',
		altClose: 'Fermer la table des matières'
	},
	Bconfig: {
		titleOpen: 'Ouvrir la configuration',
		altOpen: 'Ouvrir la configuration',
		titleClose: 'Fermer la configuration',
		altClose: 'Fermer la configuration'
	},
	Bprint: {
		title: 'Imprimer le document',
		alt: 'Imprimer le document'
	},
	BfullScreen: {
		title: 'Plein écran',
		alt: 'Plein écran',
		titleExit: 'Quitter le plein écran',
		altExit: 'Quitter le plein écran'
	},
	BownerInfo: {
		titleOpen: 'Ouvrir les informations éditeur',
		altOpen: ' Ouvrir les informations éditeur',
		titleClose: 'Fermer les informations éditeur',
		altClose: 'Fermer les informations éditeur'
	},
	BhelpInfo: {
		titleOpen: 'Ouvrir l\'aide',
		altOpen: 'Ouvrir l\'aide',
		titleClose: 'Fermer l\'aide',
		altClose: 'Fermer l\'aide'		
	},
	Bdownload: {
		title: 'Télécharger',
		alt: 'Télécharger',
		newWindow: 'nouvelle fenêtre'
	},
	Ndxon: 'sur'
}
