
import * as functions from 'firebase-functions';
import  {initializeApp} from 'firebase-admin/app';
import app from './app';

initializeApp();

export const webApi = functions.https.onRequest(app);
