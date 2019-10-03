import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PlaceInterface } from 'src/app/interface/place.interface';

export const PLACES = [
  {
    "img": "https://picsum.photos/seed/dosd/800/300",
    "address": "633 Independence Avenue, Adamstown",
    "phone": "19234632630",
    "weather": {
      "title": "Rainy",
      "icon": "assets/images/rain.svg",
      "water": 21,
      "temperature": 28
    },
    "social_info": {
      "title": "cupidatat incididunt",
      "img": "https://picsum.photos/seed/eudf/300",
      "followers": 430,
      "following": 562
    },
    "type": "Hotels"
  },
  {
    "img": "https://picsum.photos/seed/proident/800/300",
    "address": "418 Perry Place, Fowlerville",
    "phone": "19695402499",
    "weather": {
      "title": "Sunny",
      "icon": "assets/images/sun.svg",
      "water": 20,
      "temperature": 29
    },
    "social_info": {
      "title": "et esse",
      "img": "https://picsum.photos/seed/sfad/800/300",
      "followers": 429,
      "following": 285
    },
    "type": "Hotels"
  },
  {
    "img": "https://picsum.photos/seed/sfae/800/300",
    "address": "596 Richardson Street, Naomi",
    "phone": "19914682131",
    "weather": {
      "title": "Cloudy",
      "icon": "assets/images/cloud.svg",
      "water": 24,
      "temperature": 29
    },
    "social_info": {
      "title": "dolore ex",
      "img": "https://picsum.photos/seed/duis/800/300",
      "followers": 420,
      "following": 200
    },
    "type": "Fishing"
  },
  {
    "img": "https://picsum.photos/seed/anim/800/300",
    "address": "782 Cozine Avenue, Worcester",
    "phone": "19574972509",
    "weather": {
      "title": "Sunny",
      "icon": "assets/images/sun.svg",
      "water": 29,
      "temperature": 29
    },
    "social_info": {
      "title": "excepteur est",
      "img": "https://picsum.photos/seed/officia/800/300",
      "followers": 155,
      "following": 513
    },
    "type": "Fishing"
  },
  {
    "img": "https://picsum.photos/seed/nostrud/800/300",
    "address": "455 Cobek Court, Osage",
    "phone": "19314762243",
    "weather": {
      "title": "Sunny",
      "icon": "assets/images/sun.svg",
      "water": 26,
      "temperature": 30
    },
    "social_info": {
      "title": "aliqua officia",
      "img": "https://picsum.photos/seed/deserunt/800/300",
      "followers": 257,
      "following": 251
    },
    "type": "Fishing"
  },
  {
    "img": "https://picsum.photos/seed/magna/800/300",
    "address": "802 Scholes Street, Wadsworth",
    "phone": "18574663145",
    "weather": {
      "title": "Cloudy",
      "icon": "assets/images/cloud.svg",
      "water": 21,
      "temperature": 30
    },
    "social_info": {
      "title": "excepteur consectetur",
      "img": "https://picsum.photos/seed/voluptate/800/300",
      "followers": 330,
      "following": 239
    },
    "type": "Tours"
  }
];

export const places$: Observable<PlaceInterface[]> = of(PLACES)
  .pipe(
    delay(4000)
  )
