let url = "https://coffee.alexflipnote.dev/random.json";

fetch(url)
  .then((res) => res.json())
  .then((e) => {
    // console.log(e.file);
    // document.querySelector("img").src = e.file;

    setInterval((document.querySelector("img").src = e.file), 2000);
  });
