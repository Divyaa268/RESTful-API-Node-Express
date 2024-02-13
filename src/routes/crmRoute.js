import { addNewContact } from "../controllers/crmController";

const routes = (app) => {

    app.route('/contact')
        .get( (req, res, next) => {
            // Middleware
            // give us the URL of who is the request from
            console.log(`Request from ${req.originalUrl}`)
            // use request object to look into what is the method
            console.log(`Request type ${req.method}`)
            // to move away from that and do the official response that we written originally
            next();
        }, (req, res, next) => {
            res.send('GET request succesful!')
        }
        )

    // .post( (req, res) =>
    // res.send('POST request succesful!')
    //     )
        .post(addNewContact);


    app.route('/contact/:contactId')
    .put( (req, res) =>
    res.send('PUT request succesful!')
        )


    .delete( (req, res) =>
    res.send('DELETE request succesful!')
           )

}

    export default routes;