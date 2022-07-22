/* This file may contains your javascript features */
	var n = document.getElementById('nav-wrapper');
	n.classList.add('is-closed');
	function navi() {
		
		if (window.matchMedia("(max-width:50em)").matches && document.getElementById("toggle-nav")==undefined) {			
			n.insertAdjacentHTML('afterBegin','<button aria-expanded="false" id="toggle-nav" class="toogle-btn btn"><span class="icon-fallback-text"><span class="icon icon-plus" aria-hidden="true"></span><img src="img/plus-sm.png" class="text small-only" alt="" /></span>menu</button>');

			
			t = document.getElementById('toggle-nav');  
			t.onclick=function(){
				n.classList.toggle('is-closed');
				
				if(n.classList.contains('is-closed')){
					t.setAttribute('aria-expanded','false');
				}
				else{
					t.setAttribute('aria-expanded','true');
				}
			}
		}
		if (window.matchMedia("(min-width:50em)").matches && document.getElementById("toggle-nav")) {
			document.getElementById("toggle-nav").outerHTML="";
		}
		
	}


	navi();
	window.addEventListener('resize', navi);
