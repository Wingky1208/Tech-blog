const router = require("express").Router();
const { Post, User } = require("../models/");
const withAuth = require("../utils/auth");


router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: {
            userId: req.session.userId
        },
        include: [User]
    })
        .then(dbPostData => {
            const posts = dbPostData.map((post) => post.get({ plain: true }));

            res.render("all-posts-admin", {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.redirect("login");
        });
});



router.get("/new", withAuth, (req, res) => {
    res.render("new-post", {
        loggedIn: req.session.loggedIn
    });
});

router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render("edit-post", {
                    post
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;