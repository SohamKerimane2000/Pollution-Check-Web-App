import { CityInfo } from '../Model/CityInfo';

import { Pollution } from '../Model/Pollution';
import { Weather } from '../Model/Weather';

import { CityRequestData } from '../Model/CityRequestData';
import { RequestDeleteData } from '../Model/RequestDeleteData';

export class CityPollutionUtill {

  convertToPollution(pollutionData: any): Pollution {
    const cityPollution: Pollution = { ...pollutionData };
    return cityPollution;
  }

  // Converting the weather data to required format
  convertToWeather(weatherData: any): Weather {
    const cityWeather: Weather = new Weather();
    cityWeather.humidity = weatherData.hu;
    cityWeather.pressure = weatherData.pr;
    cityWeather.temperature = weatherData.tp;
    cityWeather.wind = weatherData.ws;

    return cityWeather;

  }
  // Convert to city information
  convertToCityInfo(cityInfoData: any): CityInfo {

    const cityInformation: CityInfo = { ...cityInfoData };
    cityInformation.pollution = this.convertToPollution(cityInfoData.current.pollution)
    cityInformation.weather = this.convertToWeather(cityInfoData.current.weather);
    return cityInformation;
  }

  
  convertToCityInfos(cityInfoData: any): CityInfo[] {
    const desired: CityInfo[] = [];
    for (let itreated of cityInfoData) {
      const cityInfo = this.convertToCityInfo(itreated);
      desired.push(cityInfo);

    }
    return desired;
  }
  // Convert to city information from requested data.
  convertToCityInfoFromRequestData(requestData: CityRequestData) {
    const cityInfodata: CityInfo = { ...requestData };
    return cityInfodata;
  }
  // Convert to request data
  convertToRequestData(data: CityInfo, userName: any): CityRequestData {
    const requestData: CityRequestData = {
      userName: userName,
      city: "" + data.city,
      state: "" + data.state,
      country: "" + data.country,
      location: data.location,
      pollution: data.pollution,
      weather: data.weather,
    }
    return requestData;
  }
  
  convertToDeleteRequestData(data: CityRequestData, userName: any): RequestDeleteData {
    const requestData: RequestDeleteData = {
      userName: userName,
      city: "" + data.city,
      state: "" + data.state,
      country: "" + data.country,
    }
    return requestData;
  }

}