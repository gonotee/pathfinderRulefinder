const functions = require('firebase-functions');
const algoliasearch = require('algoliasearch');

const APP_ID = functions.config().algolia.app;
const ADMIN_KEY = functions.config().algolia.key;

const client = algoliasearch(APP_ID, ADMIN_KEY);
const index = client.initIndex('pathfinderSpells');

exports.addToIndex = functions.firestore.document('spells/{spellId}')
    .onCreate((snapshot) => {
      const data = snapshot.data();
      const objectID = snapshot.id;
      return index.saveObject({...data, objectID});
    });

exports.updateIndex = functions.firestore.document('spells/{spellId}')

    .onUpdate((change) => {
      const newData = change.after.data();
      const objectID = change.after.id;
      return index.saveObject({...newData, objectID});
    });

exports.deleteFromIndex = functions.firestore.document('spells/{spellId}')

    .onDelete((snapshot) =>
      index.deleteObject(snapshot.id),
    );

const index2 = client.initIndex('pathfinderConditions');

exports.addToIndex2 = functions.firestore.document('conditions/{conditionsId}')
    .onCreate((snapshot) => {
      const data = snapshot.data();
      const objectID = snapshot.id;
      return index2.saveObject({...data, objectID});
    });

exports.updateIndex2 = functions.firestore.document('conditions/{conditionsId}')

    .onUpdate((change) => {
      const newData = change.after.data();
      const objectID = change.after.id;
      return index2.saveObject({...newData, objectID});
    });

exports.deleteFromIndex2 = functions.firestore.document('conditions/{conditionsId}')

    .onDelete((snapshot) =>
      index2.deleteObject(snapshot.id),
    );

const index3 = client.initIndex('pathfinderFeats');

exports.addToIndex3 = functions.firestore.document('feats/{featsId}')
    .onCreate((snapshot) => {
      const data = snapshot.data();
      const objectID = snapshot.id;
      return index3.saveObject({...data, objectID});
    });

exports.updateIndex3 = functions.firestore.document('feats/{featsId}')

    .onUpdate((change) => {
      const newData = change.after.data();
      const objectID = change.after.id;
      return index3.saveObject({...newData, objectID});
    });

exports.deleteFromIndex3 = functions.firestore.document('feats/{featsId}')

    .onDelete((snapshot) =>
      index3.deleteObject(snapshot.id),
    );

