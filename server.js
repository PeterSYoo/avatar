const express = require('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const waterTribe = require('./models/waterTribe');
const fireNation = require('./models/fireNation');
const earthKingdom = require('./models/earthKingdom');
const airNomads = require('./models/airNomads');
const airSuggest = require('./models/airSuggest');

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.use(function( req, res, next ) { 
  if ( req.query._method == 'DELETE' ) {        
    req.method = 'DELETE'
    req.url = req.path
  }next(); });

app.get('/airnomads/:id/edit', (req, res) => {
    res.render(
      'air_edit.ejs',
      {
        airNomads: airNomads[req.params.id],
        index: req.params.id,
        tabTitle: 'Air Nomads Character Editor',
      }
    )
})

app.get('/airnomads/suggest', (req, res) => {
    res.render(
      'air_suggest.ejs',
      {
        airSuggest: airSuggest,
        tabTitle: 'Air Nomads Character Suggestion',
      }
    )
})
  
app.get('/', (req, res) => {
  res.render('index.ejs', {
    tabTitle: 'Avatar App',
  });
})

app.get('/waterTribe', (req, res) => {
  res.render('water_index.ejs', {
    tabTitle: 'Water Tribe',
  });
})

app.get('/fireNation', (req, res) => {
  res.render('fire_index.ejs', {
    tabTitle: 'Fire Nation',
  });
})

app.get('/earthKingdom', (req, res) => {
  res.render('earth_index.ejs', {
    tabTitle: 'Earth Kingdom',
  });
})

app.get('/airNomads', (req, res) => {
  res.render('air_index.ejs', {
    tabTitle: 'Air Nomads',
    allAirNomads: airNomads,
  });
})

app.get('/airNomads/:id', (req, res) => {
  res.render('air_show.ejs', {
    tabTitle: 'Air Nomads',
    airNomads: airNomads[req.params.id],
  });
})

app.get('/airNomads/new', (req, res) => {
	res.render('air_new.ejs', {
		tabTitle: 'Air Nomads Create Character',
	})
})

app.post("/airNomads", (req, res) => {
  airNomads.push(req.body)
  res.redirect("/airnomads")
})

app.post("/airNomads/suggest", (req, res) => {
  airNomads.push(req.body)
  res.redirect("/airnomads")
})

app.put(`/airNomads/:id`, (req, res) => {
  airNomads[req.params.id].name = req.body.name
  airNomads[req.params.id].town = req.body.town
  airNomads[req.params.id].quote = req.body.quote
  airNomads[req.params.id].img = req.body.img
  airNomads[req.params.id].video = req.body.video
  res.redirect(`/airNomads`)
})

app.delete(`/airnomads/:id`, (req, res) => {
  airNomads.splice(req.params.id, 1)
  res.redirect(`/airnomads`)
})

app.listen(port, () => {
  console.log('Listening...');
})