import mongoose from 'mongoose';
import {learnerSchema} from '../Models/learnerModel';

const Learner = mongoose.model('Learner', learnerSchema);

export const addNewLearner = (req,res) => {

    let newLearner = new Learner(req.body);

    newLearner.save((err, Learner) => {

    
        if (err) {
            res.send(err);
        }
        res.json(Learner);

    
    
    
    });
};