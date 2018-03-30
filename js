function changeText() {
				document.getElementById("b1").addEventListener("click", changeText);
                var b1 = document.getElementById('b1');
				var num;
				var last;
				var letters = '0123456789ABCDEF';
  				var color = '#';
  					for (var i = 0; i < 6; i++) {
    					color += letters[Math.floor(Math.random() * 16)];
  					}
				var arr = [
					["The Black Rose shall bloom once more. ","-Leblanc"],
					["All the world on one arrow.","-Ashe"],
					["Violence solves everything!","-Katarina"],
					["This battle will be my masterpiece.","-Aatrox"],
					["Don't you trust me?","-Ahri"],
					["As balance dictates.","-Akali"],
					["Nothing can hold me back!","-Alistar"],
					["I thought you'd never pick me.","-Amumu"],
					["On my wings.","-Anivia"],
					["You wanna play too? It'll be fun!","-Annie"],
					["None shall tread upon the stars.","-Aurelion Sol"]
					];
                if(b1.onclick="changeText();") {
					num = Math.floor(Math.random() * 11);
					while (document.getElementById('champ').innerHTML == arr[num][1]) {
						num = Math.floor(Math.random() * 11);
					}
                    document.getElementById('txt').innerHTML = arr[num][0];
					document.getElementById('champ').innerHTML = arr[num][1];
					document.body.style.background = color;
					document.getElementById("txt").style.color = color;
					document.getElementById("champ").style.color = color;
					last = num;
                }
}

function tweetIt () {
  var tweetUrl = 'https://twitter.com/intent/tweet?text=' + document.getElementById('txt').innerHTML + document.getElementById('champ').innerHTML;
    
  window.open(tweetUrl, "", "width=500,height=300");
}
