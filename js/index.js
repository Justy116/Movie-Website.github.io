let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    let input = document.getElementById("input").value;
        fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "0791d78f79msh2455eb0efcd425bp1b91d5jsn742b45c42b93"
            }
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                const list = data.d;
                
                list.map((item) => {
                    const name = item.l;
                    const img = item.i.imageUrl;
                    const movie = `<li><img src="${img}"><h2>${name}</h2></li>`;
                        document.getElementById("movies").innerHTML += movie;  
                })
            })
            .catch(err => {
                console.error(err);
            });
    
})

let reloadPage = document.getElementById("reload")
reloadPage.addEventListener("click", function(){
    window.location.reload(true);
});




