import twitterV2 from 'twitter-v2';
import dotenv from 'dotenv';
dotenv.config();

const client = new twitterV2({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET_KEY,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET_KEY
})


const { data } = await client.get('tweets', { ids: ['1407061699480465412', '1068668153180405760', '1068783738509758464'] });
console.log(data);
