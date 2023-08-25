let checkPalendrome = (string)=>{
				let str = "";
				for(let i=string.length-1; i>=0; i--) str+=string[i];
				if(str===string) return "Palendrome";
				else return "Not a Palendrome";
				}
				