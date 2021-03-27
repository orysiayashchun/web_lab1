const  PlanetFunctions  =  require ( "./paragraph_7/Planet/paragraph_7_Planet.js" ) ;
const  ShipmentFunctions  =  require ( "./paragraph_7/Shipment/paragraph_7_Shipment.js" ) ;
const  SpaceStationFunctions  =  require ( "./paragraph_7/SpaceStation/paragraph_7_SpaceStation.js" ) ;

//створення масиву космічних станцій
listOfSpaceStations=SpaceStationFunctions.listOfSpaceStation(20);
//console.log(listOfSpaceStations);

//a. додавання нової стнанції в колекцію
SpaceStationFunctions.addNewStation(listOfSpaceStations);
//console.log(listOfSpaceStations);

//b. Редагування станції в колекції
SpaceStationFunctions.editSpaceStation(2,"new",listOfSpaceStations);
//console.log(listOfSpaceStations);

//с. Видалення станції в колекції
listOfSpaceStations= SpaceStationFunctions.deleteSpaceStation(7,listOfSpaceStations);
//console.log(listOfSpaceStations);

//d. Пошук однієї станції в колекції
//console.log(SpaceStationFunctions.findSpaceStation(100, listOfSpaceStations))

//масив планет
listOfPlanets=[];
//назви планет
planets=["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
//радіуси планет
radius=[2440,6051.8,6371,3389.5,69911,58232,25362,24622]

//створення масиву планет
PlanetFunctions.listOfPlanet(planets,radius,listOfPlanets);
//console.log(listOfPlanets);

//e. Додавання планети в колекцію
PlanetFunctions.addNewPlanet("new",60522.8,listOfPlanets);
//console.log(listOfPlanets);

//f. Редагування планети в колекції
// редагування назви планети
PlanetFunctions.editNameOfPlanet(2,"new",listOfPlanets);
//console.log(listOfPlanets);
//редагування радіусу планети
PlanetFunctions.editRadiusOfPlanet(3,2222.2, listOfPlanets);
//console.log(listOfPlanets);

//g. Видалення планети з колекції
listOfPlanets=PlanetFunctions.deletePlanet("Mars",listOfPlanets);
//console.log(listOfPlanets);

//h. Пошук планети в колекції
//console.log(PlanetFunctions.findPlanet("Saturn",listOfPlanets));

//масив вантажів
listOfShipments=[]
ShipmentFunctions.listOfShipment(listOfShipments);
//console.log(listOfShipments);

//i. Додавання вантажу в колекцію
ShipmentFunctions.addNewShipment(30,"07/03/2021","10/03/2021",listOfShipments)
//console.log(listOfShipments);

//j. Редагування вантажу в колекції
//зміна номера вантажу
ShipmentFunctions.editIdOfShipment(0,100,listOfShipments);
//console.log(listOfShipments);
//зміна ваги вантажу
ShipmentFunctions.editWeightOfShipment(1,3,listOfShipments);
//console.log(listOfShipments);
//зміна дати відправлення вантажу
ShipmentFunctions.editDateOfDepartureOfShipment(1,"09/03/2021",listOfShipments);
//console.log(listOfShipments);
//зміна дати прибуття вантажу
ShipmentFunctions.editDeliveryDateOfShipment(1,"09/03/2021",listOfShipments);
//console.log(listOfShipments);

//k. Видалення вантажу з колекції
listOfShipments=ShipmentFunctions.deleteShipment(1,listOfShipments);
//console.log(listOfShipments);

//масив доставлених багажів
listOfDeliveredShipments=[];
ShipmentFunctions.addDeliveredShipment(listOfShipments,listOfDeliveredShipments);
console.log(listOfDeliveredShipments);

//l. пошук всіх станцій планети
//додавання станції до планети
PlanetFunctions.addStationInPlanet(2,listOfSpaceStations[0],listOfPlanets);
PlanetFunctions.addStationInPlanet(2,listOfSpaceStations[2],listOfPlanets);
console.log(listOfPlanets);
PlanetFunctions.findSpationsOfPlanet(1,listOfPlanets);
PlanetFunctions.findSpationsOfPlanet(2,listOfPlanets);
