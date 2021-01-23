var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



// mongoconnect
const {mongodb}=require('./config')
const db = require("./models"); 
db.mongoose.connect(mongodb.link, { useNewUrlParser: true , useUnifiedTopology: true});

const Role = db.role;
db.mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.mongoose.connection.on('connected',()=>{
   console.log("Successfully connect to MongoDB.");

}).then(() => {
    
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });
    new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

         console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}











var app = express();





var usersRouters = require('./routes/usersRouters');
var authRouters = require('./routes/authRouters');
var indexRouter = require('./routes/indexRouter');





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouters);
app.use('/auth', authRouters);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
