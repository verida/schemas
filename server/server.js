import express from 'express';
import cors from 'cors';

// Set up the express app
const app = express();

let corsConfig = {
  //origin: process.env.CORS_HOST
};

// Parse incoming requests data
app.use(cors(corsConfig));
app.use(express.static("schemas/", {
  setHeaders: function(res, path, stat) {
    if (path.substring(path.length-4) == 'json') {
      res.type('application/schema+json')
    }
  }
}));

const PORT = 5010;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});