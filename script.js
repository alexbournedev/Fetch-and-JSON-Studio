window.addEventListener("load", function(){
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    return response.json();
  }).then(function(json){
    const result = json.sort((a,b) => (a.hoursInSpace < b.hoursInSpace) ? 1 : -1)
			let wanda = "";
    	let container = document.querySelector("#container");
		
			for(cosmo of json){
				wanda += `
				<div class="astronaut">
   				<div class="bio">
      			<h3>${cosmo.firstName} ${cosmo.lastName}</h3>
      		<ul>
         		<li>Hours in space: ${cosmo.hoursInSpace}</li>
         		<li>Active: ${cosmo.active}</li>
         		<li>Skills: ${cosmo.skills.join(", ")}</li>
      		</ul>
   				</div>
   				<img class="avatar" src="${cosmo.picture}"></img>
				</div>
				`;
			}
			container.innerHTML = wanda;
    })
})