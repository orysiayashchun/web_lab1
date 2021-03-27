const  Shipment  =  require ( "./Shipment.js" ) ;
const  DeliveredShipment  =  require ( "../DeliveredShipment/DeliveredShipment.js" ) ;

function listOfShipment(list){
  list.push(new Shipment(list.length,7,"02/02/2021","05/02/2021"),
            new Shipment(list.length+1,12,"03/03/2021","08/03/2021"));
}

function addNewShipment(w,date1,date2,list){
  list.push(new Shipment(list.length,w,date1,date2));
}

function deleteShipment(id, list){
  return list.filter(shipment=>shipment.id!==id);
}

function editIdOfShipment(id, newId,list){
  list.map(shipment=>{
    if(shipment.id==id){
      shipment.id=newId;
    }
  });
}

function editWeightOfShipment(id, newWeight, list){
  list.map(shipment=>{
    if(shipment.id==id){
      shipment.weight=newWeight;
    }
  });
}

function editDateOfDepartureOfShipment(id, newDate, list){
  list.map(shipment=>{
    if(shipment.id==id){
      shipment.dateOfDeparture=newDate;
    }
  });
}

function editDeliveryDateOfShipment(id, newDate, list){
  list.map(shipment=>{
    if(shipment.id==id){
      shipment.deliveryDate=newDate;
    }
  });
}

function addDeliveredShipment(list1,list2){
  let Data = new Date();
  let now=Data.getDate()+"/"+parseInt(Data.getMonth()+1)+"/"+Data.getFullYear();
  for(let i=0;i<list1.length;i++){
    if(Date.parse(list1[i].deliveryDate)==Date.parse(now)){
      list2.push(new DeliveredShipment(list1[i].id,
        list1[i].weight,list1[i].dateOfDeparture,list1[i].deliveryDate, true));
    }
  }
}

module.exports={listOfShipment,addNewShipment,editIdOfShipment,
  editWeightOfShipment,editDateOfDepartureOfShipment,editDeliveryDateOfShipment,
  deleteShipment,addDeliveredShipment}
