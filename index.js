var gifapikey = "MZ1qJRPyHKF1QL1pDI1Upw6ETE0xJEro";

function sendApiRequest(){
  var input = document.getElementById("input").value;

  // var newChild = document.createElement("div");
  // newChild.innerHTML = input;
  // document.body.appendChild(newChild);

  if (input ===""){ return; }

  var gifapiurl = `https://api.giphy.com/v1/gifs/search?q=${input}&api_key=${gifapikey}`;

  console.log(gifapiurl);

  fetch(gifapiurl)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    var img = document.createElement("img")
    console.log(json.data[0].images.fixed_height.url);

    img.src = json["data"][0]["images"]["fixed_height"]["url"];
    document.body.appendChild(img);
  })
}
