const express = require('express');
const app = express();
const port = 3000;
const methodOverride = require('method-override');
const waterTribe = require('./models/waterTribe');
const waterSuggest = require('./models/airSuggest');
const fireNation = require('./models/fireNation');
const fireSuggest = require('./models/airSuggest');
const earthKingdom = require('./models/earthKingdom');
const earthSuggest = require('./models/airSuggest');
const airNomads = require('./models/airNomads');
const airSuggest = require('./models/airSuggest');

app.use(express.static(__dirname + "/public/css"));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index.ejs', {
    tabTitle: 'Avatar App',
  });
})

app.get('/waterTribe', (req, res) => {
  res.render('water_index.ejs', {
    tabTitle: 'Water Tribe',
    allWaterTribe: waterTribe,
  });
})
app.get('/fireNation', (req, res) => {
  res.render('fire_index.ejs', {
    tabTitle: 'Fire Nation',
    allFireNation: fireNation,
  });
})
app.get('/earthKingdom', (req, res) => {
  res.render('earth_index.ejs', {
    tabTitle: 'Earth Kingdom',
    allEarthKingdom: earthKingdom,
  });
})
app.get('/airNomads', (req, res) => {
  res.render('air_index.ejs', {
    tabTitle: 'Air Nomads',
    allAirNomads: airNomads,
  });
})

app.get('/airnomads/suggest', (req, res) => {
  res.render(
    'air_suggest.ejs',
    {
      airSuggest: airSuggest,
      tabTitle: 'Air Nomads Character Suggestions',
    }
  )
})
app.get('/watertribe/suggest', (req, res) => {
  res.render(
    'water_suggest.ejs',
    {
      waterSuggest: waterSuggest,
      tabTitle: 'Water Tribe Character Suggestions',
    }
  )
})
app.get('/earthkingdom/suggest', (req, res) => {
  res.render(
    'earth_suggest.ejs',
    {
      earthSuggest: earthSuggest,
      tabTitle: 'Earth Kingdom Character Suggestions',
    }
  )
})
app.get('/firenation/suggest', (req, res) => {
  res.render(
    'fire_suggest.ejs',
    {
      fireSuggest: fireSuggest,
      tabTitle: 'Fire Nation Character Suggestions',
    }
  )
})

app.get('/airNomads/new', (req, res) => {
	res.render('air_new.ejs', {
		tabTitle: 'Air Nomads Character Creator',
	})
})
app.get('/earthKingdom/new', (req, res) => {
	res.render('earth_new.ejs', {
		tabTitle: 'Earth Kingdom Character Creator',
	})
})
app.get('/fireNation/new', (req, res) => {
	res.render('fire_new.ejs', {
		tabTitle: 'Fire Nation Character Creator',
	})
})
app.get('/waterTribe/new', (req, res) => {
	res.render('water_new.ejs', {
		tabTitle: 'Water Tribe Character Creator',
	})
})

app.get('/airNomads/:id', (req, res) => {
  res.render('air_show.ejs', {
    tabTitle: 'Air Nomads Character Display',
    airNomads: airNomads[req.params.id],
  });
})
app.get('/earthkingdom/:id', (req, res) => {
  res.render('earth_show.ejs', {
    tabTitle: 'Earth Kingdom Character Display',
    earthKingdom: earthKingdom[req.params.id],
  });
})
app.get('/firenation/:id', (req, res) => {
  res.render('fire_show.ejs', {
    tabTitle: 'Fire Station Character Display',
    fireNation: fireNation[req.params.id],
  });
})
app.get('/watertribe/:id', (req, res) => {
  res.render('water_show.ejs', {
    tabTitle: 'Water Tribe Character Display',
    waterTribe: waterTribe[req.params.id],
  });
})

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
app.get('/earthkingdom/:id/edit', (req, res) => {
  res.render(
    'earth_edit.ejs',
    {
      earthKingdom: earthKingdom[req.params.id],
      index: req.params.id,
      tabTitle: 'Earth Kingdom Character Editor',
    }
  )
})
app.get('/firenation/:id/edit', (req, res) => {
  res.render(
    'fire_edit.ejs',
    {
      fireNation: fireNation[req.params.id],
      index: req.params.id,
      tabTitle: 'Fire Nation Character Editor',
    }
  )
})
app.get('/watertribe/:id/edit', (req, res) => {
  res.render(
    'water_edit.ejs',
    {
      waterTribe: waterTribe[req.params.id],
      index: req.params.id,
      tabTitle: 'Water Tribe Character Editor',
    }
  )
})

app.post("/airNomads", (req, res) => {
  airNomads.push(req.body)
  res.redirect("/airnomads")
})
app.post("/earthkingdom", (req, res) => {
  earthKingdom.push(req.body)
  res.redirect("/airnomads")
})
app.post("/firenation", (req, res) => {
  fireNation.push(req.body)
  res.redirect("/airnomads")
})
app.post("/watertribe", (req, res) => {
  waterTribe.push(req.body)
  res.redirect("/airnomads")
})

app.post("/airNomads/suggest", (req, res) => {
  airNomads.push(req.body)
  res.redirect("/airnomads")
})
app.post("/earthkingdom/suggest", (req, res) => {
  earthKingdom.push(req.body)
  res.redirect("/airnomads")
})
app.post("/firenation/suggest", (req, res) => {
  fireNation.push(req.body)
  res.redirect("/airnomads")
})
app.post("/watertribe/suggest", (req, res) => {
  waterTribe.push(req.body)
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
app.put(`/earthkingdom/:id`, (req, res) => {
  earthKingdom[req.params.id].name = req.body.name
  earthKingdom[req.params.id].town = req.body.town
  earthKingdom[req.params.id].quote = req.body.quote
  earthKingdom[req.params.id].img = req.body.img
  earthKingdom[req.params.id].video = req.body.video
  res.redirect(`/airNomads`)
})
app.put(`/firenation/:id`, (req, res) => {
  fireNation[req.params.id].name = req.body.name
  fireNation[req.params.id].town = req.body.town
  fireNation[req.params.id].quote = req.body.quote
  fireNation[req.params.id].img = req.body.img
  fireNation[req.params.id].video = req.body.video
  res.redirect(`/airNomads`)
})
app.put(`/watertribe/:id`, (req, res) => {
  waterTribe[req.params.id].name = req.body.name
  waterTribe[req.params.id].town = req.body.town
  waterTribe[req.params.id].quote = req.body.quote
  waterTribe[req.params.id].img = req.body.img
  waterTribe[req.params.id].video = req.body.video
  res.redirect(`/airNomads`)
})

app.delete(`/airnomads/:id`, (req, res) => {
  airNomads.splice(req.params.id, 1)
  res.redirect(`/airnomads`)
})
app.delete(`/earthkingdom/:id`, (req, res) => {
  earthKingdom.splice(req.params.id, 1)
  res.redirect(`/earthkingdom`)
})
app.delete(`/firenation/:id`, (req, res) => {
  fireNation.splice(req.params.id, 1)
  res.redirect(`/firenation`)
})
app.delete(`/watertribe/:id`, (req, res) => {
  waterTribe.splice(req.params.id, 1)
  res.redirect(`/watertribe`)
})

app.listen(port, () => {
  console.log('Listening...');
})