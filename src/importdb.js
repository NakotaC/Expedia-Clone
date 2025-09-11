const admin = require('firebase-admin');
const fs = require('fs');

// Use the service account key file
const serviceAccount = require('../ServiceKey.json');


admin.initializeApp({

  credential: admin.credential.cert(serviceAccount),

  databaseURL: "https://expedia-clone-5cab0-default-rtdb.firebaseio.com"

});

const db = admin.firestore();

const data = JSON.parse(fs.readFileSync('../db.json', 'utf8'));

async function importCollection(collectionName, items) {
  const batch = db.batch();
  items.forEach(item => {
    const ref = db.collection(collectionName).doc(item.id ? String(item.id) : undefined);
    batch.set(ref, item);
  });
  await batch.commit();
  console.log(`Imported ${items.length} items to ${collectionName}`);
}

// Import all collections
(async () => {
  for (const [collection, items] of Object.entries(data)) {
    if (Array.isArray(items)) {
      await importCollection(collection, items);
    }
  }
  console.log("All data imported!");
  process.exit();
})();