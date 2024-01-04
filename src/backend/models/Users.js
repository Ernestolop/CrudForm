import mongoose, { Schema, model } from 'mongoose';

const usersSchema = new Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    birth_date: { type: Date, required: true }
}, {
    timestamps: true
});

usersSchema.index({ title: 'text', tags: 'text' });

const Users = mongoose.models.Users || model('Users', usersSchema);

export default Users;