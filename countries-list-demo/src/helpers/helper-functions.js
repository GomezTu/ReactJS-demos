import _ from 'lodash'

export function GetVisibleCountries(countries, name, code, region){
    if (countries.length > 0 && (name !== undefined && code !== undefined && region !== undefined)) {
        let filteredcountries = countries.slice(10, 20);

        if (name) {
            filteredcountries = _.filter(filteredcountries, (country) => {
                return (country.name.toLowerCase().indexOf(name.toLowerCase()) > -1)
            });
        }
        if (code) {
            filteredcountries = _.filter(filteredcountries, (country) => {
                return (country.alpha3Code.toLowerCase().indexOf(code.toLowerCase()) > -1)
            });
        }
        if (region) {
            filteredcountries = _.filter(filteredcountries, (country) => {
                return (country.region.toLowerCase().indexOf(region.toLowerCase()) > -1)
            });
        }
        return filteredcountries;
    }
    return countries.slice(10, 20);
}

export function GetFlagsFromCountries(countries){
    let flags = [];
    countries.slice(30, 40).map(country => {
        flags.push({ name: country.name, flag: country.flag });
    });
    return flags;
}