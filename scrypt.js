const btn = document.querySelector("[data-chiste-btn]");

JokeAPI.getJokes({
    jokeType: "single",
    language: "es"
  })
    .then((r) => r.json())
    .then((data) => {
      updateUI(data);
      console.log(data)
    });
  
 
    function updateUI(jokeData) {
    const $ = (id) => document.getElementById(id);
  
    $("chiste").innerHTML = jokeData.joke;
    
};
  
btn.addEventListener("click", () => { JokeAPI.getJokes({
    jokeType: "single"
  })
    .then((r) => r.json())
    .then((data) => {
      updateUI(data);
    });

})
