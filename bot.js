const twit = require('twit');
const config = require('config');

const Twitter = twit(config);

const retweet = () => {
 const params = {
   q: '#nodejs, #Nodejs',
   result_type: 'recent',
   lang: 'en',
 };

 Twitter.get('search/tweets', params, (err, data) =>{
   if (!err) {
     let retweetId = data.statuses[0].id_str;
     Twitter.post('statuses/retweet/:id',
      { id: retweetId }, (err, response) => {
        if (response) {
          console.log('Retweeted!!');
        }

        if (err) {
          console.log('Oops. Something went wrong while retweeting :(');
        }
     });
   }
   else {
     console.log('Oops. Something went wrong while searching :(');
   };

 });
};


// get retweeting once program is running
retweet();

// retweet every 50 minutes
setInteval(retweet, 3000000);
