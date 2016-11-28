import { Router } from 'express';

const router = new Router();

const users = [
  { avatar: 'http://www.cutestpaw.com/wp-content/uploads/2014/08/corgi.jpg', name: 'Wei', age: 1 },
  { avatar: 'https://s-media-cache-ak0.pinimg.com/564x/fc/81/bd/fc81bd1388ab65fdff90babe4114ea33.jpg', name: 'Polly', age: 2 },
  { avatar: 'https://s-media-cache-ak0.pinimg.com/736x/7d/20/e7/7d20e7b6624dda9734dfc55a7fd85b73.jpg', name: 'DiDi', age: 5 },
  { avatar: 'http://67.media.tumblr.com/56e29581e6bd441aeadc18dc9ca01bcf/tumblr_oavugjk5jt1rd8qzho1_1280.jpg', name: 'Fufu', age: 4},
];

// Write your restful api here:

router.get('/animals', (req, res) => {
  //res.json(animals);
  console.log('animals', animals);
});

router.get('/animals/:id', (req, res) => {
  res.json(aniamls[parseInt(req.params.id, 10) - 1]);
});

export default router;