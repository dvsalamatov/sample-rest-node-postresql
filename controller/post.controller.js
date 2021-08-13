const db = require('../db');

class PostController
{
  async createPost(req, res) {
    const {title, content, userId} = req.body;
    const post = await db.query(
      'INSERT INTO post (user_id, title, content) VALUES ($1, $2, $3)',
      [userId, title, content]
    );

    res.json(post.rows[0]);
  }

  async getPostsByUser(req, res) {
    const id = req.query.userId;
    const posts = await db.query('SELECT * FROM post WHERE user_id=$1', [id]);
    console.log(id);
    res.json(posts.rows);
  }
}

module.exports = new PostController();