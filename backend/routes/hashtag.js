require('../models/connection');
var express = require('express');
var router = express.Router();
const User = require('../models/users');
const Tweet = require('../models/tweet');
const Hashtag = require('../models/hashtag');

//#(\w+)

const hashtagRegex = /#\w+/g; // Expression régulière pour trouver les hashtags

router.get('/hashtags', async (req, res, next) => {
    try {
        const tweets = await Tweet.find(); // Récupérer tous les tweets
        const hashtags = []; // Initialiser un tableau pour stocker les hashtags

        // Parcourir tous les tweets pour extraire les hashtags des messages
        tweets.forEach(tweet => {
            const matchedHashtags = tweet.message.match(hashtagRegex); // Trouver tous les hashtags dans le message

            if (matchedHashtags) { 
                hashtags.push(...matchedHashtags); // Ajouter les hashtags trouvés au tableau
            }
        });

        res.json({ result: true, hashtags: hashtags }); // Renvoyer les hashtags trouvés
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, error: "Une erreur est survenue lors de la récupération des hashtags." });
    }
});

module.exports = router;
