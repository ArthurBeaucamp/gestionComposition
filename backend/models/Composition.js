const mongoose = require('mongoose');

const compositionSchema = mongoose.Schema({
  title: { type: String, required: true },
  type: String,
  baseTempo: Number,
  tunning: { type: String, default: 'Standard' },
  structure: [
    {
      name: { type: String, required: true },
      type: {
        type: String,
        required: true,
        enum: ['Pre-Verse', 'Verse', 'Pre-Chorus', 'Chorus', 'Bridge', 'Rise']
      },
      chords: [String],
      lyric: String,
      note: String,
      order: { type: Number, required: true },
    }
  ],
});

module.exports = mongoose.model('Composition', compositionSchema);