let express = require('express')
require('dotenv').config()
let expressSession = require('express-session')
let connectFlash = require('connect-flash')
let mongoose = require('mongoose')
// let MongoStore = require('connect-mongo')(expressSession)
// let passport = require('passport')
let { APPNAME, PORT, dbhost, dbport, dbname, sessionsecret, owner_name, owner_mat_no} = require('./config')

// routes
const { CustomerRouter, InvoiceRouter, ShedRouter, PigStockRouter, PurchaseRouter, VaccineRouter, UserRouter, LoginRouter } = require('./routes')

// models
const PigStockModel = require('./models/pigstock')
const CustomerModel = require('./models/customer')
const PurchaseModel = require('./models/purchase')
const InvoiceModel = require('./models/invoice')
const ShedModel = require('./models/shed')
const VaccineModel = require('./models/vaccine')
const UserModel = require('./models/user')

// connect to mongodb database
// mongoose.connect(`mongodb://${dbhost}:${dbport}/${dbname}`)

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qmunc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

try {
  mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log('connected to ' + process.env.DB_NAME + ' database.')
} catch (error) {
  console.log('Error connecting to ' + process.env.DB_NAME + ' database.')
  console.log(error)
}

// init express App
let app = express()

// view engine 
app.set('view engine', 'ejs')
app.set('views', './views')

// expressStatic
app.use(express.static(__dirname + '/public'))

// bodyparser middlewares
app.use(express.json())
app.use(express.urlencoded())
// express-session middleware
app.use(expressSession({
  secret: sessionsecret,
  saveUninitialized: true,
  resave: true,
  // store: new MongoStore({
  //   mongooseConnection: mongoose.connection,
  //   ttl: 14 * 24 * 60 * 60
  // })
}))
// passport middleware
// app.use(passport.initialize())
// app.use(passport.session())
// connect-flash
app.use(connectFlash())

app.use((req, res, next) => {
  // res.locals.errors = req.flash('errors')
  // res.locals.error_msg = req.flash('error_msg')
  // res.locals.success_msg = req.flash('success_msg')
  res.locals.user = req.session.user || { username: 'test' }
  app.locals.owner_name = owner_name
  app.locals.owner_mat_no = owner_mat_no
  next()
})

// routes

app.use('/login', LoginRouter)

app.use('/', (req, res, next) => {
  // for authenticating login
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/login')
  }
})

app.get('/logout', (req, res) => {
  req.session.loggedIn = false
  req.session.username = ''
  res.redirect('/login')
})

let getDashboard = async (req, res) => {
  try {
    let purchase_count = await PurchaseModel.count()
    let invoice_count = await InvoiceModel.count()
    let customer_count = await CustomerModel.count()
    let user_count = await UserModel.count()
    res.render('dashboard', {purchase_count, invoice_count, customer_count, user_count})
  } catch (err) {
    console.log(err)
    res.render('dashboard', {
      purchase_count: 0, invoice_count: 0,
      customer_count: 0, user_count: 0,
    })
  }
}

app.get('/', getDashboard)

app.get('/dashboard', getDashboard)

app.use('/customers', CustomerRouter)

app.use('/invoices', InvoiceRouter)

app.use('/pigstocks', PigStockRouter)

app.use('/sheds', ShedRouter)

app.use('/purchases', PurchaseRouter)

app.use('/invoices', InvoiceRouter)

app.use('/users', UserRouter)

app.use('/vaccines', VaccineRouter)


app.listen(process.env.PORT, () => { console.log(`${APPNAME} running on port ${process.env.PORT}`) })