'use strict'

var Thread = require('../models/thread');
var User = require('../models/user');
var CommentThread = require('../models/comment');

var createThread = (req,res) => {
  Thread.create({
    title: req.body.title,
    content: req.body.content,
    user_id: req.body.user_id,
    username: req.body.username,
    vote: req.body.vote,
    created_at: new Date()
  },(err,result) => {
    if (err) {
      console.log(err);
      res.send(err.message)
    }
    User.findById(req.body.user_id, (err,user) => {
      user.thread_id.push(result._id);
      user.save(err => {
        if (err) {
          console.log(err);
          res.send(err)
        }
        console.log('create thread success');
        res.send(result);
      })
    });
  })
}

var getAllThread = (req,res) => {
  Thread.find().populate('comment_id')
  .exec((err,result) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    res.send(result)
  })
}

var updateThread = (req,res) => {
  Thread.findById(req.params.id,(err,data) => {
    if (err) {
      console.log(err);
      res.send(err)
    }
    data.title = req.body.title || data.title;
    data.content = req.body.content || data.content;
    data.user_id = req.body.user_id || data.user_id;
    data.username = req.body.username || data.username;
    data.vote = req.body.vote || data.vote;
    data.update = new Date();
    
    data.save((err,data) => {
      if (err) {
        res.send(err)
      }
      res.send(data);
      console.log('data already update');
    })
  })
}

var deleteThread = (req,res) => {
  Thread.findByIdAndRemove(req.params.id,(err) => {
    if (err) {
      console.log(err);
    }
    res.send('data already delete')
  })
}

var getOneThread = (req,res) => {
  Thread.findById(req.params.id,(err,data) => {
    if (err) {
      console.log(err);
    }
    res.send(data)
  })
}

module.exports = {
  createThread,
  getAllThread,
  updateThread,
  deleteThread,
  getOneThread
}
