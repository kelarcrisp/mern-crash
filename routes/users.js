const router = require('express').Router();
let User = require('../models/user.model');
// this is the first route under the users URL path if you look back in the server file you can see where we have two main paths. one for users and one for exercises. this file will ONLY take care of the user paths
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err))
});

module.exports = router;