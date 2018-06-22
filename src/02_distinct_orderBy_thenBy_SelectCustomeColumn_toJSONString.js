// Adding References of linqjs
const rlinq = require('linq');

// Declaring a array of country
var countryList = [
    { "country": "Afghanistan", "continent": "Asia" },
    { "country": "Bangladesh", "continent": "Asia" },
    { "country": "Belgium", "continent": "Europe" },
    { "country": "Bhutan", "continent": "Asia" },
    { "country": "Bolivia", "continent": "South America" },
    { "country": "Brazil", "continent": "South America" },
    { "country": "Croatia", "continent": "Europe" },
    { "country": "Cuba", "continent": "North America" },
    { "country": "Denmark", "continent": "Europe" },
    { "country": "Egypt", "continent": "Africa" },
    { "country": "Finland", "continent": "Europe" },
    { "country": "France", "continent": "Europe" },
    { "country": "Guatemala", "continent": "North America" },
    { "country": "Guernsey", "continent": "Europe" },
    { "country": "Lebanon", "continent": "Asia" },
    { "country": "Liberia", "continent": "Africa" },
    { "country": "Nepal", "continent": "Asia" },
    { "country": "Netherlands", "continent": "Europe" },
    { "country": "Norway", "continent": "Europe" },
    { "country": "Oman", "continent": "Asia" },
    { "country": "Poland", "continent": "Europe" },
    { "country": "Portugal", "continent": "Europe" },
    { "country": "Puerto Rico", "continent": "North America" },
    { "country": "Qatar", "continent": "Asia" },
    { "country": "Romania", "continent": "Europe" },
    { "country": "Switzerland", "continent": "Europe" },
    { "country": "Taiwan, Province of China", "continent": "Asia" },
    { "country": "Tajikistan", "continent": "Asia" },
    { "country": "Venezuela", "continent": "South America" },
    { "country": "Virgin Islands, U.S.", "continent": "North America" },
    { "country": "Wallis and Futuna", "continent": "Oceania" },
    { "country": "Western Sahara", "continent": "Africa" },
    { "country": "Zimbabwe", "continent": "Africa" }];


DistinctArray()
function DistinctArray() {
    // This will returns the names of the continents from the countryList array
    var continents = rlinq.from(countryList).distinct('$.continent').select("{continent:$.continent}").toArray();
    // continents is holding the continents
    
    // 0:Object {continent: "Asia"}
    // 1:Object {continent: "Europe"}
    // 2:Object {continent: "South America"}
    // 3:Object {continent: "North America"}
    // 4:Object {continent: "Africa"}
    // 5:Object {continent: "Oceania"}
}

OrderbyAsc();
function OrderbyAsc() {
    // This will sort the countryList array in ascending order of country name
    var AssendingcountryList = rlinq.from(countryList).orderBy('$.country').toArray();
    // AssendingcountryList is holding new array which is organised in ascending order of country name
    
    // 0:Object {country: "Afghanistan", continent: "Asia"}
    // 1:Object {country: "Bangladesh", continent: "Asia"}
    // 2:Object {country: "Belgium", continent: "Europe"}
    // 3:Object {country: "Bhutan", continent: "Asia"}
    // 4:Object {country: "Bolivia", continent: "South America"}
    // 5:Object {country: "Brazil", continent: "South America"}
    // 6:Object {country: "Croatia", continent: "Europe"}
    // 7:Object {country: "Cuba", continent: "North America"}
    // 8:Object {country: "Denmark", continent: "Europe"}
    // 9:Object {country: "Egypt", continent: "Africa"}
    // 10:Object {country: "Finland", continent: "Europe"}
}

OrderbyDesc();
function OrderbyDesc() {
    // This will sort the countryList array in descending order of country name
    var DescendingcountryList = rlinq.from(countryList).orderByDescending('$.country').toArray();
    // DescendingcountryList Values

    // 0:Object {country: "Zimbabwe", continent: "Africa"}
    // 1:Object {country: "Western Sahara", continent: "Africa"}
    // 2:Object {country: "Wallis and Futuna", continent: "Oceania"}
    // 3:Object {country: "Virgin Islands, U.S.", continent: "North America"}
    // 4:Object {country: "Venezuela", continent: "South America"}
    // 5:Object {country: "Tajikistan", continent: "Asia"}
    // 6:Object {country: "Taiwan, Province of China", continent: "Asia"}
    // 7:Object {country: "Switzerland", continent: "Europe"}
    // 8:Object {country: "Romania", continent: "Europe"}
    // 9:Object {country: "Qatar", continent: "Asia"}
    // 10:Object {country: "Puerto Rico", continent: "North America"}
}

ThenbyAsc();
function ThenbyAsc() {
    // This will sort the countryList array in ascending order of continent then it will sort in asscending order of country name
    var ThenbycountryList = rlinq.from(countryList).orderBy('$.continent').thenBy('$.country').toArray();
    // ThenbycountryList Values

    // 0:Object {country: "Egypt", continent: "Africa"}
    // 1:Object {country: "Liberia", continent: "Africa"}
    // 2:Object {country: "Western Sahara", continent: "Africa"}
    // 3:Object {country: "Zimbabwe", continent: "Africa"}
    // 4:Object {country: "Afghanistan", continent: "Asia"}
    // 5:Object {country: "Bangladesh", continent: "Asia"}
    // 6:Object {country: "Bhutan", continent: "Asia"}
    // 7:Object {country: "Lebanon", continent: "Asia"}
    // 8:Object {country: "Nepal", continent: "Asia"}
    // 9:Object {country: "Oman", continent: "Asia"}
    // 10:Object {country: "Qatar", continent: "Asia"}
}

ThenbyDesc();
function ThenbyDesc() {
    // This will sort the countryList array in ascending order of continent then it will sort in descending order of country name
    var ThenByDesccountryList = rlinq.from(countryList).orderBy('$.continent').thenByDescending('$.country').toArray();
    // ThenByDesccountryList Values

    // 0:Object {country: "Zimbabwe", continent: "Africa"}
    // 1:Object {country: "Western Sahara", continent: "Africa"}
    // 2:Object {country: "Liberia", continent: "Africa"}
    // 3:Object {country: "Egypt", continent: "Africa"}
    // 4:Object {country: "Tajikistan", continent: "Asia"}
    // 5:Object {country: "Taiwan, Province of China", continent: "Asia"}
    // 6:Object {country: "Qatar", continent: "Asia"}
    // 7:Object {country: "Oman", continent: "Asia"}
    // 8:Object {country: "Nepal", continent: "Asia"}
    // 9:Object {country: "Lebanon", continent: "Asia"}
    // 10:Object {country: "Bhutan", continent: "Asia"}

}

SelectCustomeColumn();
function SelectCustomeColumn() {
    // This will create a new custome conlumn named country_with_continent
    var countryListwithCustomeColumn = rlinq.from(countryList).select("{country:$.country, country_with_continent:$.continent+'('+$.country+')'}").toArray();
    // countryListwithCustomeColumn Values

    // 0:Object {country: "Afghanistan", country_with_continent: "Asia(Afghanistan)"}
    // 1:Object {country: "Bangladesh", country_with_continent: "Asia(Bangladesh)"}
    // 2:Object {country: "Belgium", country_with_continent: "Europe(Belgium)"}
    // 3:Object {country: "Bhutan", country_with_continent: "Asia(Bhutan)"}
    // 4:Object {country: "Bolivia", country_with_continent: "South America(Bolivia)"}
    // 5:Object {country: "Brazil", country_with_continent: "South America(Brazil)"}
    // 6:Object {country: "Croatia", country_with_continent: "Europe(Croatia)"}
    // 7:Object {country: "Cuba", country_with_continent: "North America(Cuba)"}
    // 8:Object {country: "Denmark", country_with_continent: "Europe(Denmark)"}
    // 9:Object {country: "Egypt", country_with_continent: "Africa(Egypt)"}
    // 10:Object {country: "Finland", country_with_continent: "Europe(Finland)"}

}

ConvertToJsonString();
function ConvertToJsonString() {
    // This will make a json string of countryList
    var countryListJson = rlinq.from(countryList).toJSONString();
    // countryListJson Values

    //"[{"country":"Afghanistan","continent":"Asia"},{"country":"Bangladesh","continent":"Asia"},{"country":"Belgium","continent":"Europe"},{"country":"Bhutan","continent":"Asia"},{"country":"Bolivia","continent":"South America"},{"country":"Brazil","continent":"South America"},{"country":"Croatia","continent":"Europe"},{"country":"Cuba","continent":"North America"},{"country":"Denmark","continent":"Europe"},{"country":"Egypt","continent":"Africa"},{"country":"Finland","continent":"Europe"},{"country":"France","continent":"Europe"},{"country":"Guatemala","continent":"North America"},{"country":"Guernsey","continent":"Europe"},{"country":"Lebanon","continent":"Asia"},{"country":"Liberia","continent":"Africa"},{"country":"Nepal","continent":"Asia"},{"country":"Netherlands","continent":"Europe"},{"country":"Norway","continent":"Europe"},{"country":"Oman","continent":"Asia"},{"country":"Poland","continent":"Europe"},{"country":"Portugal","continent":"Europe"},{"country":"Puerto Rico","continent":"North America"},{"country":"Qatar","continent":"Asia"},{"country":"Romania","continent":"Europe"},{"country":"Switzerland","continent":"Europe"},{"country":"Taiwan, Province of China","continent":"Asia"},{"country":"Tajikistan","continent":"Asia"},{"country":"Venezuela","continent":"South America"},{"country":"Virgin Islands, U.S.","continent":"North America"},{"country":"Wallis and Futuna","continent":"Oceania"},{"country":"Western Sahara","continent":"Africa"},{"country":"Zimbabwe","continent":"Africa"}]"
}