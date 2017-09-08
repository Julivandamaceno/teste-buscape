            var n = 0;
            
            /* exibe a contagem dos produtos */
			function addItems(){
		    	n = n + 1;
		    	document.getElementById("cont").innerHTML = n;
		    	zeroNumber();

                /* adiciona e lista os produtos */
		    	function counter(){

			    	var add = document.getElementsByClassName("produtos-info");
			    	    for(add = 0; add <= 20; add++){
			    	    	var list = document.getElementById("listar-produtos");
			    	    	add.innerHTML(list.value);
			    	    	add++;
			    	    }
			    	}
			    }

            /* inicializa a contagem com 0 */
		    function zeroNumber(){
		    	if(document.getElementById('cont').innerHTML == 0){
		    		document.getElementById('cont').style.display = "none";
		    	}
		    	else{
		    		document.getElementById('cont').style.display = "block";
		    	}
		    }