import { weatherImages } from './images';

export const getImageUrl = (weather: string) => {
  switch (weather) {
    case 'Drizzle':
    case 'Thunderstorm':
    case 'Rain': {
      return weatherImages.rain;
    }
    case 'Snow': {
      return weatherImages.snow;
    }
    case 'Clear': {
      return weatherImages.sun;
    }
    default: {
      return weatherImages.clouds;
    }
  }
};
