import { addNewLearner} from '../Controllers/learnerController';

const routes = (app) => {
    app.route('/learners')
        .post(addNewLearner);
}

export default routes;