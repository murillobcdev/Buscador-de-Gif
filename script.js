
const apikey = "RQCGE0L9XC7M"
const $ = (e) => document.querySelector(e);
const $s = (e) => document.querySelectorAll(e);

$("#term").addEventListener('keyup', () => {
    let term = $("#term").value;
    console.log("soltou tecla e pesquisou por: " + term)
    findGif(term, apikey);
});

function findGif(term, apikey) {
    fetch(`https://g.tenor.com/v1/search?q=${term}&key=${apikey}&limit=25`)
        .then(response => response.json())
        .then(json => {
            montarGif(json);
        })
};

function montarGif(json) {
    let resultados = json['results'];
    console.log(resultados);
    $(".row").innerHTML = "";
    for (let i in resultados) {
        $(".row").innerHTML +=
            `<div class="gifCol col-2 p-3">
                <p class="gifTitle">${resultados[i].content_description}</p>
                <img src="${resultados[i]['media'][0]['gif']['url']}" class="gifImage img-fluid"/>
            </div>`;
    }
}