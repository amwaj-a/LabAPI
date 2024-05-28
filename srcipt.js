let url = "https://coffee.alexflipnote.dev/random.json";
let urlLab2 = "https://rickandmortyapi.com/api/character";
// fetch(url)
//   .then((res) => res.json())
//   .then((e) => {
//     // console.log(e.file);
//     // document.querySelector("img").src = e.file;

//     setInterval((document.getElementById("coffee").src = e.file), 2000);
//   });

async function cartoon() {
  let dataAll = await fetch(urlLab2);
  let respon = await dataAll.json();

  respon.results.forEach((element) => {
    let img = document.createElement("img");
    let header = document.createElement("h3");
    let div = document.createElement("div");
    header.innerText = element.name;
    img.src = element.image;
    console.log(img);

    div.appendChild(header);
    div.appendChild(img);
    document.getElementById("container").appendChild(div);
  });
}

cartoon();
