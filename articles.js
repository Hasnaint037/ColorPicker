let hello = (url) => {
    window.open(url);
};
let fetchArticles = async () => {
    const u = fetch(
        "https://newsapi.org/v2/everything?q=business AND blockchain&sortBy=publishedAt&language=en&apiKey=607afe6fe95343d9be98d608b783cb20"
    )
        .then((res) => res.json())
        .then((response) => {
            console.log("Hello")
            response = response.articles.slice(0, 30);
            console.log(response);
            const g = response
                .map((d) => {
                    if (!d.urlToImage) {
                        d.urlToImage =
                            "https://th.bing.com/th?id=OIP.46uIJdOJe1ALM1JOPLa83AAAAA&w=300&h=207&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2";
                    }
                    return `
                <a class='main' href=${d.url} target=_blank>
                <div  class='img'>
                <img class='imgs' src=${d.urlToImage}/>
              </div>
              <div>
              <h3 class='text'>${d.title}</h3>
            </div>
                </a>
                `;
                })
                .join("");
            document.getElementById("container").innerHTML = g;
        })
        .catch((err) => console.log(err));
    console.log(u);
};
