import { weatherImages } from './images';

export const getImageUrl = (weather: string) => {
  switch (weather) {
    case 'Drizzle':
    case 'Rain': {
      return weatherImages.rain;
    }
    case 'Clouds': {
      return weatherImages.clouds;
    }
    case 'Clear': {
      return weatherImages.sun;
    }
    default: {
      return weatherImages.snow;
    }
  }
};