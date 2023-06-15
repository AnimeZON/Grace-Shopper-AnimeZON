const express = require('express');
const app = express.Router();
const { Reviews, User } = require('../db')

app.get('/', async (req, res, next) => {
    try {
        res.send(await Reviews.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        }));
    } catch (err) {
        next(err);
    }
});

app.post('/', async (req, res, next) => {
    try {
        const user = await User.findByToken(req.headers.authorization);
        let review = await user.addReview(req.body)
        res.send(await Reviews.findByPk(review.id, {
            include: [
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        }));
    } catch (err) {
        next(err);
    }
})

app.put('/:id', async (req, res, next) => {
    try {
        const user = await User.findByToken(req.headers.authorization);
        let review = await Reviews.findByPk(req.params.id, {
            where: {
                userId: user.id
            }
        });
        await review.update(req.body);
        res.send(await Reviews.findByPk(review.id, {
            include: [
                {
                    model: User,
                    attributes: ['username', 'id']
                }
            ]
        }));
    }
    catch (ex) {
        next(ex);
    }
});

module.exports = app;