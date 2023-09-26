var express = require('express');
var router = express.Router();

const FILMS = [
  {
    id:1,
    title: "Creed",
    duration:113,
    budget:1.5,
    link:"https://www.imdb.com/title/tt3076658/"
  },
  {
    id:2,
    title: "Barbie",
    duration:114,
    budget:2,
    link:"https://www.imdb.com/title/tt1517268/?ref_=fn_al_tt_1"
  },
  {
    id:3,
    title: "Le challenge",
    duration:103,
    budget:1,
    link:"https://www.imdb.com/title/tt15671028/?ref_=hm_tpks_tt_t_9_pd_tp1_pbr_ic"
  }
];
//read all the movies
router.get('/', (req, res, next) => {
  console.log('GET /films');
  res.json(FILMS);
});

// read films pizza identified by an id in the menu
router.get('/:id',(req,res) => {

    const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmFound <0 ) return res.sendStatus(404);

    res.json(FILMS[indexOfFilmFound]);

});

router.get('/',(req,res,next) => {
    const orderByDuration=req?.query?.minimum-duration?.includes('duration')
    ? req.query.minimum-duration
    :undefined;
  let orderedFilm;
  console.log(`order by ${orderByDuration ??'not requested'}`);
  if(orderByDuration)
    orderedFiml = [...FILMS].sort((a,b) => a.duration.localCompare(b.duration));
  if(orderByTitle === '-duration') orderedFilm = orderedFilm.reversed();

  console.log('GET /films');
  res.json(orderedFilm ?? FILMS);

});

module.exports = router;
