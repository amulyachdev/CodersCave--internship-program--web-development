
let generate = document.getElementById("shorten");


 generate.addEventListener('click', short);

 async function short() {
    let longUrl = document.getElementById("longurl").value;
    let shortUrl = document.getElementById("shorturl").value;

    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${longUrl}`);
    const data = await result.json();

    shortUrl.value = data.result.short_link3;
    
}
  let newUrl = document.getElementById("shorturl");

  let copyButton = document.getElementById("copy");

  copyButton.onclick = () => {
    newUrl.select();

    window.navigator.clipboard.writeText(newUrl.value);
  }


/*
generate.addEventListener("click", () => {
    let url = orginalLink.textContent;
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    .then((resp) => resp.json())
    .then((textContent)=> {
        shortenLink.textContent = textContent.result.short_link;
    })
    .catch((error) => {
        shortenLink.textContent = "something went wrong!";
    });
});
 
// Copy button

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(shortenLink.textContent);
    copy.innerHTML = "copied";

    setTimeOut(() => {
        copy.innerHTML = "copy";
    }, 1000);

})
*/