let express = require('express');
let router = express.Router();

let Mongoose = require('mongoose').Mongoose;
let Schema = require('mongoose').Schema;

let oldMong = new Mongoose();
oldMong.connect('mongodb+srv://shopsy:passwordShopsy123@shopsy.hdgmtdi.mongodb.net/?retryWrites=true&w=majority');

let meetingSchema = new Schema({
  meetingId: String,
  title: String,
  image: String,
  price: String,
  description: String,
  quantity : String
}, { collection: 'meetings' });

let meetings = oldMong.model('meetings', meetingSchema);

router.get('/', async function (req, res, next) {
  res.render('index');
});

router.post('/getMeetings', async function (req, res, next) {
  const meetings = await getMeetings();
  res.json(meetings);
});

//Deleting one
router.delete('/:id',async(req,res) =>{
  try{
   const result = await meetings.deleteOne({ _id: req.params.id });
   if (result.deletedCount == 0){
    res.status(404).json({message: 'Item not found'});
   } else{
    res.json({message: 'Deleted item'})
   }
   } catch (err){
       res.status(500).json({message: err.message})
   }
})

async function getMeetings() {
  data = await meetings.find().lean();
  return { meetings: data };
}

router.post('/saveMeeting', async function (req, res, next) {
  const meetings = await saveMeeting(req.body);
  res.json(meetings);
});

async function saveMeeting(theMeeting) {
  console.log('theMeeting: ' + theMeeting);
  await meetings.create(theMeeting,
    function (err, res) {
      if (err) {
        console.log('Could not insert new meeting')
        return { saveMeetingResponse: "fail" };
      }
    }
  )
  return { saveMeetingResponse: "success" };
}

module.exports = router;