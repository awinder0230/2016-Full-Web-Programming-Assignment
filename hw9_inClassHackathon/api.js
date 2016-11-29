import { Router } from 'express';

const router = new Router();

const animals = [
  { avatar: 'http://www.cutestpaw.com/wp-content/uploads/2014/08/corgi.jpg', name: 'Wei', age: 1 , food: 'cookies', hobby: 'play with frisbee!'},
  { avatar: 'https://s-media-cache-ak0.pinimg.com/564x/fc/81/bd/fc81bd1388ab65fdff90babe4114ea33.jpg', name: 'Polly', age: 2, food: 'watermelons', hobby: 'lie on my bed!' },
  { avatar: 'https://s-media-cache-ak0.pinimg.com/736x/7d/20/e7/7d20e7b6624dda9734dfc55a7fd85b73.jpg', name: 'DiDi', age: 5, food: 'everything', hobby: 'whip and nae nae ~'},
  { avatar: 'http://67.media.tumblr.com/56e29581e6bd441aeadc18dc9ca01bcf/tumblr_oavugjk5jt1rd8qzho1_1280.jpg', name: 'Fufu', age: 4, food: 'sashimi', hobby: 'sleep zzz...' },
];

const animalNonExist = { avatar: '', name:'', age: 0, food:'', hobby:'' };

router.get('/animals', (req, res) => {
  res.json(animals);
  console.log(animals)
});

router.get('/animals/:id', (req, res) => {
  const tmp = parseInt(req.params.id, 10) - 1;
  if(tmp >= 0 && tmp <= animals.length) {
  	res.json(animals[tmp]);
  }
  else {
  	res.json(animalNonExist);
  }
});

export default router;
