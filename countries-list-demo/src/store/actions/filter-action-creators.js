import { Actions } from './filter-actions'

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
    //RE-DO FILTER LOGIC
    // if (countries.length > 0) {
    //     const filteredcountries = [];
    //     if (name) {
    //         countries.map(country => {
    //             if (country.name.toLowerCase().indexOf(name.toLowerCase()) > -1){
    //                 filteredcountries.push(country);
    //             }
    //         })
    //     }
    //     if (code) {
    //         filteredcountries.map(country => {
    //             if (country.alpha3Code.toLowerCase().indexOf(code.toLowerCase()) > -1){
    //                 filteredcountries.push(country);
    //             }
    //         })
    //     }
    //     if (region) {
    //         filteredcountries.map(country => {
    //             if (country.region.toLowerCase().indexOf(region.toLowerCase()) > -1){
    //                 filteredcountries.push(country);
    //             }
    //         })
    //     }
    //     return filteredcountries;
    // }
    return countries;
}