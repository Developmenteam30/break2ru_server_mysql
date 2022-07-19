import { Injectable } from '@nestjs/common';
import * as firebase from 'firebase-admin';
// var serviceAccount = require("./break2ru-c0cb8-firebase-adminsdk-iu8ju-b717975078.json");
import * as serviceAccount from "./break2ru-c0cb8-firebase-adminsdk-iu8ju-b717975078.json";

@Injectable()
export class NotificationsService {
  constructor() {
    if (!firebase.apps.length) {
        const credentialObject:object = serviceAccount;
        firebase.initializeApp({
        credential: firebase.credential.cert(credentialObject),
        databaseURL: "https://break2ru-c0cb8-default-rtdb.firebaseio.com",
        });
    }
  }
  public async sendAll(messages: firebase.messaging.TokenMessage[], dryRun?: boolean) {
    return await firebase.messaging().sendAll(messages, dryRun);
  }
  public async sendOne(messages: firebase.messaging.TokenMessage, dryRun?: boolean) {
    return await firebase.messaging().send(messages, dryRun);
  }
}