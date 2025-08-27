const { Schema, default: mongoose } = require('mongoose');


const notesSchema = new Schema ( 
    {
        title: { type: String, required: true },
        body: { 
            type: String,
            required: [true, 'Please provide note details'],
            
        },
        done: Boolean,
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'noteUsers' ,required: false }
    }
)

const NoteModel = mongoose.model('notes', notesSchema)
module.exports = NoteModel;
