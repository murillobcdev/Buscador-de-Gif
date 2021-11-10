
const apikey = "RQCGE0L9XC7M"

const $ = (e) => document.querySelector(e);
const $s = (e) => document.querySelectorAll(e);

$("#term").addEventListener('keyup', () => {
    let term = $("#term").value;
    fetch(`https://g.tenor.com/v1/search?q=${term}&key=${apikey}&limit=30`)
        .then(response => response.json())
        .then(json => {
            let resultados = json['results'];
            $(".row").innerHTML = ``;
            for (let i in resultados) {
                $(".row").innerHTML +=
                    `
                <div class="col-6 my-3">
                    <div class="text-center">
                        <p class="gifTitle">${resultados[i].content_description}</p>
                    </div>
                    <div class="gifBody text-center">
                        <img src="${resultados[i]['media'][0]['gif']['url']}" class="gifImage img-fluid"/>
                    </div>
                </div>
                    `;
            };
        })
});

/* <p class="gifTitle">${resultados[i].content_description}</p>
<img src="${resultados[i]['media'][0]['gif']['url']}" class="img-fluid"/> */