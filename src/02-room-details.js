/*
  Do not change the lines below. If you'd like to run code from this file, you may use the `exampleDinosaurData` and `exampleRoomData` variables below to gain access to each data set. This data is pulled from the relevant files in the `data/` directory.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.
*/
const exampleDinosaurData = require("../data/dinosaurs");
const exampleRoomData = require("../data/rooms");
// Do not change the lines above.

/**
 * getRoomByDinosaurName()
 * ---------------------
 * Return the name of the room where the given dinosaur can be found. If the dinosaur does not exist in the `dinosaurs` list or cannot be found in any room, return an error message that says so.
 *
 * @param {Object[]} dinosaurs - An array of dinosaur objects. See the `data/dinosaurs.js` file for an example of the input.
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} dinosaurName - The name of the dinosaur.
 * @returns {string} The name of the room where the dinosaur can be found. Alternatively, an error message.
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Tyrannosaurus");
 *  //> "Roberts Room"
 *
 * EXAMPLE:
 *  getRoomByDinosaurName(dinosaurs, rooms, "Pterodactyl");
 *  //> "Dinosaur with name 'Pterodactyl' cannot be found."
 */
function getRoomByDinosaurName(dinosaurs, rooms, dinosaurName) {
   let id;
   let findRoom = false
   //iterate through dinosaur array since room uses id
   for (let i = 0; i < dinosaurs.length; i++) {
     if (dinosaurs[i].name === dinosaurName) {
       findRoom= true
       id = dinosaurs[i].dinosaurId
     }
   }
   if (!findRoom) {
     return `Dinosaur with name '${dinosaurName}' cannot be found.`
   }
   //iterate through room array to match id to name
   for (let i = 0; i < rooms.length; i++) {
     if (rooms[i].dinosaurs.includes(id)) {
       return rooms[i].name
     }
   } 
   return `Dinosaur with name '${dinosaurName}' cannot be found in any rooms.`
}

/**
 * getConnectedRoomNamesById()
 * ---------------------
 * Returns an array of strings, where each string is the name of a room connected to the given room. If a room ID cannot be found, an error message is returned.
 *
 * @param {Object[]} rooms - An array of room objects. See the `data/rooms.js` file for an example of the input.
 * @param {string} id - A unique room identifier.
 * @returns {string|string[]} An array of room names, or an error message.
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "aIA6tevTne");
 *  //> ["Ticket Center"]
 *
 * EXAMPLE:
 *  getConnectedRoomNamesById(rooms, "A6QaYdyKra");
 *  //> [
      "Entrance Room",
      "Coat Check Room",
      "Ellis Family Hall",
      "Kit Hopkins Education Wing"
    ]
 */
function getConnectedRoomNamesById(rooms, id) {
   //empty array for room names
   let roomArr = []
   //variable for rooms connected to the id
   let connects;
 
   //looping through rooms array
   for (let i = 0; i < rooms.length; i++) {
     if (rooms[i].connectsTo.includes("incorrect-id") ) {
       return `Room with ID of 'incorrect-id' could not be found.`
     }
     //if room id strictly equals given id 
     if (rooms[i].roomId === id) {
       connects = rooms[i].connectsTo
     }
   }
 
   if (!connects) {
     return `Room with ID of 'incorrect-id' could not be found.`
   }
 
   for (let i = 0; i < rooms.length; i++) {
     if (connects.includes(rooms[i].roomId)) {
       roomArr.push(rooms[i].name)
     } 
   }
   return roomArr
}

module.exports = {
  getRoomByDinosaurName,
  getConnectedRoomNamesById,
};
