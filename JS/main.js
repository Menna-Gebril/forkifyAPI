let searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", function () {
  let text = searchInput.value;
  console.log(text);
  getReceipes(text);
});

getReceipes("pasta");

function getReceipes(meal) {
  let myHttp = new XMLHttpRequest();
  myHttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${meal}`);
  myHttp.send();
  myHttp.responseType = "json";
  myHttp.addEventListener("load", function () {
    if (myHttp.status >= 200 && myHttp.status < 300) {
      let allRecipes = myHttp.response.recipes;
      console.log(allRecipes);
      displayData(allRecipes);
    }
  });
}

function displayData(arr) {
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
        <div class="col-md-3">
              <img src="${arr[i].image_url}" class="w-100 h-75" alt=${
      arr[i].title
    } />
              <div class="cap text-center">
                <h3>${arr[i].title.split(" ", 2).join(" ")}</h3>  
              </div>
          </div>
   `;
  }

  document.getElementById("rowData").innerHTML = cartona;
}
