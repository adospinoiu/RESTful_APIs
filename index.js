const app = require("express")();
const PORT = 8080;

// #### The line below simply sets up the server to 'listen' for when it is started. When it is started, it will simply console.log
app.listen(
    PORT,
    () => console.log(`It's Alive on http://localhost:${PORT}`)
)

// #### The lines below set-up a new end-point the user can make a request to (i.e. /tshirt). The end-point needs a callback function to know what to do when the user makes a request to it. 
// #### The callback function has the data coming in from the user (i.e. req) and the response it will send back to the browser (i.e. res)
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    })
})


// #### The lines below set-up a new end-point the user can utilize to CREATE new data on the server