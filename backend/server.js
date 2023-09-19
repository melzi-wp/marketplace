const PORT = 4000;
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors
app.use(cors());


// connect to server

app.listen(PORT, () => {
    console.log("server up and running on http://localhost: ${PORT}");
});


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://melziwahab:azert010101@cluster-marketplace.tte2cb0.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.get("/", (req, res) => {
    res.send("hello");
})



