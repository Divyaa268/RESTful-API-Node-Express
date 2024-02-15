import { addNewContact, getContacts, getContactID, updateContact } from "../controllers/crmController";

const routes = (app) => {

    app.route('/contact')

    // to get all contacts
        .get( (req, res, next) => {
            // Middleware
            // give us the URL of who is the request from
            console.log(`Request from ${req.originalUrl}`)
            // use request object to look into what is the method
            console.log(`Request type ${req.method}`)
            // to move away from that and do the official response that we written originally
            next();
        // }, (req, res, next) => {
        //     res.send('GET request succesful!')
        // }
        // )
        }, getContacts
        )

    // .post( (req, res) =>
    // res.send('POST request succesful!')
    //     )

    // to POST a new contact
        .post(addNewContact);


    app.route('/contact/:contactId')

    // to get a specific contact
    .get(getContactID)

    // .put( (req, res) =>
    // res.send('PUT request succesful!')
    //     )

    // Update contact using PUT
    .put(updateContact)


    .delete( (req, res) =>
    res.send('DELETE request succesful!')
           )

}

    export default routes;