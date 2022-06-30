const router = require('express').Router();
const { Post, Comment, User } = require('../models/');

// GET all posts for homepage
router.get('/', (req, res) => {
  Post.findAll({
    include: [User],
  })

    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      res.status(500).json(err);

    })
});

// GET one post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });
      console.log(post)

      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn
      });
    } else {
      res.status(404).end();
    }

  } catch (err) {
    res.status(500).json(err);
  }

});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});


module.exports = router;
