 const speacialhead=document.querySelector('.main'); 
 
 const subhead1 =document.createElement('h1');
 subhead1.className="subhead1";  
 const textnode=document.createTextNode("POKEMON");
 subhead1.append(textnode);
 speacialhead.prepend(subhead1);   
 

async function poli(){ 
    try{ 
 var pokiapi= await fetch("https://pokeapi.co/api/v2/pokemon/ditto")   
 if(!pokiapi.ok) throw new Error("error");
 var pokiapiobject= await pokiapi.json(); 
 //console.log(pokiapiobject) 
 const table=document.querySelector('.poki'); 
 const subhead=document.createElement('table') 
 subhead.innerHTML=`<tr>   

 <th>S.No</th>
 <th>MOVES</th> 
 <th>ABILITIES</th> 
 <th>WEIGHT</th>
 </tr> 
 <tr>   
 <td>1</td> 
 <td>${pokiapiobject.moves[0].move.name}</td> 
 <td>${pokiapiobject.abilities[0].ability.name}</td> 
 <td>${pokiapiobject.weight}</td>

 
 </tr>`  

 table.append(subhead);
 
    } 
    catch(err){  
        console.log(err.message)

    } 
    console.log(pokiapiobject)
}
poli()