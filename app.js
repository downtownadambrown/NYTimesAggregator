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
        const startYearTerm = $('#startYearTerm').val() + `0101`;
        const endYearTerm = $('#endYearTerm').val() + `1231`;

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        
        url += '?' + $.param({
            'api-key': apikey,
            'q': searchTerm,
            //'fq': numberTerm,
            'begin_date': startYearTerm,
            'end_date': endYearTerm,
            'page': 0,
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (r) {
            //This is what will run once we have the data
            console.log(r);
            
            const cardBody = $('#newsFeed');
            cardBody.html("");
            console.log(`numberTerm: ${numberTerm}`);
            for (let i = 0; i < numberTerm; i++){
                
                const headline = r.response.docs[i].headline.main;
                let author = "";
                try {
                     author = r.response.docs[i].byline.original;
                }catch {
                    console.log('no byline');
                }
                const currentArticle = i + 1;
                console.log(headline, author, i, currentArticle);
                const htmlOutput = `<a class="a-custom" href="${r.response.docs[i].web_url}"><div class="card"><div class="card-body"><h5 class="card-title">${currentArticle}:&nbsp;${headline}</h5><p class="card-text">${author}</p></div></div></a>`;
                cardBody.append(htmlOutput);

            }
            
            
            
            
        }).fail(function (err) {
            throw err;
        }); 
    };

    $('#searchButton').on('click', search);
    $('#clearButton').on('click', clearFields);


});