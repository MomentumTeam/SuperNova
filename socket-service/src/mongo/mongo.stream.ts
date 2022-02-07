import * as socketIO from "socket.io";
import mongoose from "mongoose";
import { config } from '../config';

const db = mongoose.connection;
export const createMongoStreams = (io: socketIO.Server) => {
  const notificationCollection = db.collection(config.mongo.collections.notifications).watch();

   notificationCollection.on("change", (change) => {
     switch (change.operationType) {
       case "insert":
         if (change?.fullDocument?.ownerId) {
           change.fullDocument.id = change?.fullDocument._id.toString();
           const destUserId = change.fullDocument.ownerId.toString();
           io.to(destUserId).emit("newNotification", change.fullDocument);
         }
         break;
     }
   });
};
