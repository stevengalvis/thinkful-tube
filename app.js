
var YOU_TUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromAPI(searchTerm, callback){
    var query = {
        part: 'snippet',
        key: 'AIzaSyBHIpCEIVOD4TWR_x3XdfGuiB3Dkxxn_58',
        q: searchTerm
    }
    $.getJSON(YOU_TUBE_URL, query, callback);
}

function displayYouTubeSearchData(data){
    var resultElement = '';

    if(data){
        data.items.forEach(function(item){
            resultElement += '<p>'+ '<img src ="' + item.snippet.thumbnails.medium.url +  '"</img>' +'</p>';
        });
    }
    else {
    resultElement += '<p>No results</p>';
    }
  $('.search-results').html(resultElement);
}










//event listeners
function submit() {
    $('.search-form').on('submit', function(e) {
        e.preventDefault();
        var query = $('.query').val();
        getDataFromAPI(query,displayYouTubeSearchData);
        console.log(query);
    });
}
$(function(){submit();});