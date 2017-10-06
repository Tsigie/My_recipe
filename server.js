const stitch = require("mongodb-stitch")
const client = new stitch.StitchClient('my_recipe-rfiws');
const db = client.service('mongodb', 'mongodb-atlas').db('<DATABASE>');
client.login().then(() =>
  db.collection('<COLLECTION>').updateOne({owner_id: client.authedId()}, {$set:{number:42}}, {upsert:true})
).then(() =>
  db.collection('<COLLECTION>').find({owner_id: client.authedId()})
).then(docs => {
  console.log("Found docs", docs)
  console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
  console.error(err)
});
