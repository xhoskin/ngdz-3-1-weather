import { WeatherInterface } from './weather.interface';
import { SocialInterface } from './social.interface';

export interface PlaceInterface {
  img: string;
  address: string;
  phone: string;
  weather: WeatherInterface;
  social_info: SocialInterface;
  type: string;
}

