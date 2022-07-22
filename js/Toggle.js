
'use strict';

/**gestion des toggles**/

var elt = document.getElementsByClassName('toggle-gp');

function cache(){

	for (var i=0;i<elt.length;i++){
		var mydiv = elt[i].querySelector("div");
		mydiv.classList.add("is-hidden");
			var btntoggle = elt[i].querySelector("button");
			btntoggle.setAttribute('aria-expanded','false');

			btntoggle.onclick = function(){
				if((this.getAttribute('aria-expanded'))=='true'){
					this.setAttribute('aria-expanded','false');
					this.parentNode.classList.toggle('is-active');
				}else{
					this.setAttribute('aria-expanded','true');
					this.parentNode.classList.toggle('is-active');
				}
				
				for (var i=0;i<elt.length;i++){
					if(this.parentNode!=elt[i]){
						elt[i].querySelector("div").classList.add("is-hidden");
						elt[i].querySelector("button").setAttribute('aria-expanded','false');
						elt[i].classList.remove("is-active");
					}
				}
				
				this.nextElementSibling.classList.toggle("is-hidden");
		};

	}
};

cache();







