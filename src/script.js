let cardContainer = document.querySelector("#cardContainer");

const imageIds = [
  "1500462918059-b1a0cb512f1d",
  "1531581147762-5961e6e2e6b1",
  "1626204327506-0d3ee11d7752",
  "1549068106-b024baf5062d",
];

const createItem = (key) => {
  let liItem = document.createElement("li");
  liItem.className =
    "group relative overflow-hidden bg-rose-300 h-[500px] w-full rounded-2xl";

  let imgItm = document.createElement("img");
  let imagebg = `https://images.unsplash.com/photo-${imageIds[key]}?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlicmFudHxlbnwwfHwwfHx8MA%3D%3D`;
  imgItm.src = imagebg;
  imgItm.alt = `image ${key}`;
  imgItm.className = "absolute inset-0 w-full h-full";

  let divItem = document.createElement("div");
  divItem.className =
    "absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 from-30%";

  let title = document.createElement("h2");
  title.className = "text-2xl font-medium text-white";
  title.textContent = "hello guys";

  let paragraph = document.createElement("p");
  paragraph.innerHTML =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quia ipsaeius.";
  paragraph.className = "mt-2 overflow-hidden text-white/70";

  let paraDiv = document.createElement("div");
  paraDiv.className =
    "grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all";
  paraDiv.appendChild(paragraph);

  liItem.appendChild(imgItm);
  liItem.appendChild(divItem);
  divItem.appendChild(title);
  divItem.appendChild(paraDiv);

  return liItem;
};

[...Array(4).keys()].map((key) => {
  let li = createItem(key);
  cardContainer.appendChild(li);
});
