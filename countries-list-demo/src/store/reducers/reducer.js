import { combineReducers } from 'redux'
import { SelectCountryReducer, CountriesReducer } from './countries-reducer'
import { FilterReducer } from './filter-reducer'

export const reducer = combineReducers({
    countries: CountriesReducer,
    filter: FilterReducer,
    selectedCountry: SelectCountryReducer
});