export function countriesFormmatedForDropdown(countries) {
  return countries.map(country => {
    return {
      name: country.name
    }
  })
}