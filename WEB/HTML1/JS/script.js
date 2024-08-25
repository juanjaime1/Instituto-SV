document.getElementById("card-form").addEventListener("submit", function (event) {
    event.preventDefault();


const title = document.getElementById("title-ncard").value;
const description = document.getElementById("description-ncard").value;
const imageUrl = document.getElementById("image-ncard").value || "https://picsum.photos/200";
const bgColor = document.getElementById("card-bg-color").value;
const borderColor = document.getElementById("card-border-color").value;

console.log({
    title: title,
    description: description,
    imageUrl: imageUrl,
    bgColor: bgColor,
    borderColor: borderColor,
})

const ncards = document.getElementById("ncards")
const newCard = document.createElement("div")
newCard.className = "card"
newCard.style.backgroundColor = bgColor
newCard.style.borderColor = borderColor

newCard.innerHTML = `
<img src="${imageUrl}" alt="Card Image">
<div class="card-content">
<p>${title}</p>
<p>${description}</p>
</div>
`
ncards.appendChild(newCard)

document.getElementById("card-form").reset()

})













