const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  votedAt: {
    type: Date,
    default: Date.now
  }
}, { _id: false });  

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  age: {
    type: Number,
    required: true,
    min: [25, 'Candidate must be at least 25 years old']
  },
  party: {
    type: String,
    required: true,
    trim: true
  },
  votes: [voteSchema],
  voteCount: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Candidate = mongoose.model("Candidate", candidateSchema);
module.exports = Candidate;
