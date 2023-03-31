const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data = {
    name: "Monserrat Espinoza",
    nickname: "JoaMons2",
    description: "...",
    avatar: "...",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/JoannaMonserr17",
        username: "",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/monse.espinoza.sanchez/",
        username: "",
      },
    ],
    links: [
      {
        name: "blog",
        url: "https://github.com/JoaMons2",
        color: "red",
        emoji: "📖",
      },
      {
        name: "podcast",
        url: "https://github.com/JoaMons2",
        color: "yellow",
        emoji: "💬",
      },
    ],
    footer: "Made with Love on Colombia",
  };

const main = () => {
  let name = document.createTextNode(data?.name);ç
  let links = data?. links?.map((link) => {
    return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
    <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
    href="${link.url}" target="_blank">
    ${link.name}
    </a>
    <span>${link.emoji}</span>
  </div>`;
  }).join('');
  let newItem = document.createElement("section");
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
}

main();
