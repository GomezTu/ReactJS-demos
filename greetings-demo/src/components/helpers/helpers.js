export function FormatedCountries(countries) {
  return countries.map(country => {
    return {
      name: country.name
    }
  })
}