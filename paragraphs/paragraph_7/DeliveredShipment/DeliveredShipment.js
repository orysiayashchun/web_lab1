const  Shipment  =  require ( "../Shipment/Shipment.js" ) ;
class DeliveredShipment extends Shipment{
  constructor(id,weight,dateOfDeparture,deliveryDate,isDelivered) {
    super(id,weight,dateOfDeparture,deliveryDate);
    this.id=id;
    this.weight=weight;
    this.dateOfDeparture=dateOfDeparture;
    this.deliveryDate=deliveryDate;
    this.isDelivered=isDelivered;
  }
}

module.exports=DeliveredShipment;
