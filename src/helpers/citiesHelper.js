export function convertCityInputToModel (input) {
    const inputRegex = new RegExp('(.+),(.+)', 'gm')
    const regexRes = inputRegex.exec(input)

    if (regexRes) {
        const placeName = regexRes[1]
        const stateAbbr = regexRes[2]

        return {
            "place name": placeName,
            "state abbreviation": stateAbbr
        }
    }
    return null
}