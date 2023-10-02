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

router.get('/',(req,res,next) => {
    const filterByDuration=req?.query?.['minimum-duration']
    ? Number(req.query['minimum-duration'])
    :undefined;

    if(filterByDuration === undefined) return res.json(FILMS);

    if(typeof filterByDuration !== 'number' || filterByDuration <=0 )
      return res.json('Wrong minimum duration');

    const filmsReachingMinimumDuration = FILMS.filter( (film) => film.duration >= filterByDuration);
  

  console.log('GET /films');
 return res.json(filmsReachingMinimumDuration);

});

// read films pizza identified by an id in the menu
router.get('/:id',(req,res) => {

    const indexOfFilmFound = FILMS.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmFound <0 ) return res.sendStatus(404);

    res.json(FILMS[indexOfFilmFound]);

});

router.post('/',(req,res,next) =>{
  const title = req?.body?.title?.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration?.length !== 0 ? req.body.duration : undefined;
  const budget = req?.body?.budget?.length !== 0 ? req.body.budget : undefined;
  const link = req?.body?.link?.length !==0 ? req.body.link : undefined;

  if(!title || !duration || !budget || !link) return res.sendStatus(400);

  const lastItemIndex = FILMS?.length !==0 ? FILMS.length -1 :undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id:0;
  const nextId = lastId +1;

  const newFilm ={
    id:nextId,
    title:title,
    duration:duration,
    budget:budget,
    link:link
  };

  FILMS.push(newFilm)

  res.json(newFilm)
});

module.exports = router;
