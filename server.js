const express = require('express');

const { initialLoadServer } = require('./middleware/initial');
const { dashboardRoutes, bookRoutes, userRoutes, mappingRoutes } = require('./routes/main-routes');

const app = express();
// body parser
app.use(express.json())
// to allow form data in post request
app.use(express.urlencoded({ extended: false }))

// Routes
app.use("/", dashboardRoutes);
app.use("/book", bookRoutes);
app.use("/user", userRoutes);
app.use("/mapping", mappingRoutes);

// Port Number
app.listen(1234, initialLoadServer());