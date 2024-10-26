const host = "https://api.open-meteo.com/v1/forecast?"

export default class Controller {
    longitude: number = 0;
    latitude: number = 0;
    forcast: any;
    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    getSectionForcast() {

    }

    getNextSectionForcast() {

    }

    getNextSunnyDat() {

    }

    getNextRainyDay() {

    }
}