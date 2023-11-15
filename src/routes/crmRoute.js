import {getContacts, addNewContact, getContactWithID, updateContact, deleteContact} from "../controllers/crmController";

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next()
        }, getContacts)
        .post(addNewContact);

    app.route('/contact/:id')
        .get(getContactWithID)
        .put(updateContact)
        .delete(deleteContact);
}
export default routes;