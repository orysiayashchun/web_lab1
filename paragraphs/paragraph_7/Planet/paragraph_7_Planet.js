const  Planet  =  require ( "./Planet.js" ) ;

function listOfPlanet(p,r, list){
  for(let i=0; i<p.length;i++){
    list.push(new Planet(i,p[i],r[i]));
  }
}

function addNewPlanet(name,radius,list){
  list.push(new Planet(list.length,name,radius));
}

function editNameOfPlanet(id, newName, list){
  list.map(planet=>{
    if(planet.id==id){
      planet.name=newName;
    }
  });
}

function editRadiusOfPlanet(id, newRadius, list){
  list.map(planet=>{
    if(planet.id==id){
      planet.radius=newRadius;
    }
  });
}

function deletePlanet(name,list){
  return list.filter(planet=>planet.name!==name);
}

function findPlanet(name,list){
  if(list.find(planet=>planet.name==name)!==undefined){
    return list.find(planet=>planet.name==name);
  }
  else{
    return `Planet with name ${name} doesn't exist`;
  }
}

function addStationInPlanet(id,station,list){
  list[id].stations.push(station);
}

function findSpationsOfPlanet(id,list){
  if(list[id].stations.length!=0){
    console.log(`Станції планети з номером ${id}:`);
    console.log(list[id].stations)
  }
  else{
    console.log(`Планета з номером ${id} немає станцій`);
  }
}
module.exports={listOfPlanet, addNewPlanet, editNameOfPlanet, editRadiusOfPlanet,
   deletePlanet, findPlanet, addStationInPlanet,findSpationsOfPlanet}
