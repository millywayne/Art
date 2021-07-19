function showAlert() {
  var myText = "Hello! Karibu to ART CULTURE, the pride of cultural art!";
  alert (myText);
}
const accordion = document.getElementsByClassName("contentBx");
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

var btn = document.getElementById("btn");
let output = document.getElementById("output");
let facts = [
  "Africa is the second-largest continent in the world both in size and population.",
  "There are believed to be around 3,000 different African tribes",
  "All Human History is believed to have Its Roots in Africa",
  "The visual arts of native Africa, particularly sub-Saharan Africa, including such media as sculpture, painting, pottery, rock art, textiles, masks, personal decoration, and jewelry",
  "Africa has a very diverse culture. It is rich in cultural heritage and diversity, a wealth of natural resources, offers breathtaking tourist attractions",
  "African art has value as entertainment; some has political or ideological significance; some is instrumental in a ritual context; and some has aesthetic value in itself.",
  "African architecture reflects the interaction of environmental factors—such as natural resources, climate, and vegetation—with the economies and population densities of the continent’s various regions.",
];
btn.addEventListener("click", function () {
  var randomfacts = facts[Math.floor(Math.random() * facts.length)];
  output.innerHTML = randomfacts;
});
