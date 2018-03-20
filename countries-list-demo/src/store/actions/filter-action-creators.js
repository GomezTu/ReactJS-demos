import { Actions } from './filter-actions'
import _ from 'lodash'

function FilterChange(filter) {
    return {
        type: Actions.FILTER_CHANGE,
        payload: filter
    }
}

export function FilterChangeAction(filter){
    return (dispatch) => {
        dispatch(FilterChange(filter));
    }
}

export function GetVisibleCountries(countries, name, code, region){
    if (countries.length > 0 && (name !== undefined && code !== undefined && region !== undefined)) {
        let filteredcountries = countries;

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
    return countries;
}