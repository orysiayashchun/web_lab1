const  SpaceStation  =  require ( "./SpaceStation.js" ) ;

function listOfSpaceStation(count){
  let list=[];
  for(let i=0;i<count;i++){
    list.push(new SpaceStation(i,"Station "+i));
  }
  return list
}

function addNewStation(list){
  list.push(new SpaceStation(list.length,"Station "+list.length));
}

function editSpaceStation(id,newName,list){
  list.map(spaceStation=>{
    if(spaceStation.id==id){
      spaceStation.name=newName;
    }
  });
}

function deleteSpaceStation(id, list){
  return list.filter(spaceStation=>spaceStation.id!==id);
}

function findSpaceStation(id, list){
  if(list.find(spaceStation=>spaceStation.id==id)!==undefined){
    return list.find(spaceStation=>spaceStation.id==id);
  }
  else{
    return `Station with id ${id} doesn't exist`;
  }
}

module.exports={listOfSpaceStation,addNewStation,editSpaceStation,deleteSpaceStation,findSpaceStation};
