const twit = require('twit');
require('dotenv').config({ silent: true });

const config = require('./config.js');

const Twitter = twit(config);

const retweeted = [];
const retweet = () => {
 const params = {
   q: '#kangaroo',
   result_type: 'recent',
   lang: 'en',
 };

 Twitter.get('search/tweets', params, (err, data) =>{
   if (!err) {
     const numOfTweets = data.statuses.length;
     let retweetId = data.statuses[0].id_str;

      // retweet all tweets found
      for (let i=0; i < numOfTweets; i++) {
         Twitter.post('statuses/retweet/:id',
          { id: data.statuses[i].id_str }, (err, response) => {
            if (response.text) {
              console.log('Retweeted!!', response.text);
            }
            if (err) {
              console.log(err.message);
              return;
            }
         });
      }
      console.log('finished retweeting. Bye!');
   }
   else {
     console.log('Oops. Something went wrong while searching :(');
   };

 });
};


// get retweeting once program is running
retweet();
