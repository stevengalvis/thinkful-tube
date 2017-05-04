
var YOU_TUBE_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromAPI(searchTerm){
    var query = {
        part: 'snippet',
        key: 'AIzaSyBHIpCEIVOD4TWR_x3XdfGuiB3Dkxxn_58',
        q: searchTerm
    }
    $.getJSON(YOU_TUBE_URL, query, function(data){
        var resultElement = '';

        if(data){
            data.items.forEach(function(item){
                resultElement += '<p>'+ '<a href = "https://www.youtube.com/watch?v='
                + item.id.videoId +  '">' + '<img src ="'
                + item.snippet.thumbnails.medium.url +  '"</img>' +'</a>' +'</p>';
            });
        }
        else {
            resultElement += '<p>No results</p>';
        }

      $('.search-results').html(resultElement);
    });
}

//event listeners
function submit() {
    $('.search-form').on('submit', function(e) {
        e.preventDefault();
        getDataFromAPI($('.query').val());
    });
}
$(function(){submit();});
