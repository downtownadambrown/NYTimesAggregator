// 610c49e4520a42088f3a9fb96ad7b081 - API KEY
$(document).ready(function () {

    function clearFields() {
        $('#searchTerm').val("");
        //$('option:selected').val(''); 
        $('#startYearTerm').val("");
        $('#endYearTerm').val("");
        console.log($('#searchTerm').val());

    }

    const search = function() {
        console.log('i am here');
        const apikey = "610c49e4520a42088f3a9fb96ad7b081";
        const searchTerm = $('#searchTerm').val();
        const numberTerm = $('option:selected').val(); 
        const startYearTerm = $('#startYearTerm').val();
        const endYearTerm = $('#endYearTerm').val();
        console.log(numberTerm);

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': apikey,
            'q': searchTerm,
            //'fq': numberTerm,
            'begin_date': "3",
            'end_date': "4",
            'page': numberTerm,
        });
  /*       $.ajax({
            url: url,
            method: 'GET',
        }).done(function (result) {
            //This is what will run once we have the data
            console.log(result);
        }).fail(function (err) {
            throw err;
        }); */
    };

    $('#searchButton').on('click', search);
    $('#clearButton').on('click', clearFields);


});