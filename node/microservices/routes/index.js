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
  description: String
}, { collection: 'meetings' });

let meetings = oldMong.model('meetings', meetingSchema);

router.get('/', async function (req, res, next) {
  res.render('index');
});

router.post('/getMeetings', async function (req, res, next) {
  const meetings = await getMeetings();
  res.json(meetings);
});


router.delete('/removeMeeting/_id',async function(req,res,next){
    try{
      await res.meetings.deleteOne()
      res.json({message: 'Deleted item'})
    } catch(err){
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