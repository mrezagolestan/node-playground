import {getContacts, addNewContact, getContactWithID, updateContact, deleteContact} from "../controllers/mongooseController";

const routes = (app) => {
    app.route('/mongoose')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContacts)
        .post(addNewContact);

    app.route('/mongoose/:id')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact);
}
export default routes;