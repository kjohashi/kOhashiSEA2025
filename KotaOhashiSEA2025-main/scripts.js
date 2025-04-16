let artCatalog = [
  {
    /* artwork #1 */
    title: "Urban Light",
    artist: "Chris Burden",
    location: "LACMA",
    year: 2008,
    style: "Architecture",
    description: "A large-scale installation of 202 restored street lamps from the 1920s and 1930s, creating a stunning visual experience.",
    image: "https://cdn.thecollector.com/wp-content/uploads/2022/11/chris-burden-inventor-maker-urban-light-public-artwork.jpg"
  },
  {
    /* artwork #2 */
    title: "Levitated Mass",
    artist: "Michael Heizer",
    location: "LACMA",
    year: 2012,
    style: "Architecture",
    description: "A massive rock sculpture that allows visitors to walk underneath a 340-ton boulder, a simple but unique interaction.",
    image: "https://ca-times.brightspotcdn.com/dims4/default/db8f15c/2147483647/strip/true/crop/594x396+3+0/resize/1440x960!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F82%2F8e%2F972cb225500497392ea1a24fb4fe%2Fla-et-0623-knight-heizer-rock-pictures-001"
  },
  {
    /* artwork #3 */
    title: "Infinity Mirrored Room",
    artist: "Yayoi Kusama",
    location: "The Broad",
    year: 2013,
    style: "Installation",
    description: "An immersive installation that creates the illusion of infinite space using mirrors and LED lights, inviting visitors to experience a sense of eternity. Pictures allowed.",
    image: "https://images-prod.dazeddigital.com/2250/azure/dazed-prod/1280/5/1285317.jpg"
  },
  {
    /*artwork #4 */
    title: "The Great Wave of Kanagawa",
    artist: "Katsushika Hokusai",
    location: "The Hammer",
    year: "1831-1833",
    style: "Materials",
    description: "A famous woodblock print depicting a giant wave threatening boats off the coast of Kanagawa, symbolizing the ominous power of nature.",
    image: "https://mcraftsmanship.com/cdn/shop/articles/Katsushikahokusaipaint.jpg?v=1636120956"
  },
  {
    /* artwork #5 */
    title: "Irises",
    artist: "Vincent van Gogh",
    location: "Getty Center",
    year: 1889,
    style: "Painting",
    description: "A vibrant painting of irises in bloom, showcasing Van Gogh's unique brushwork and color palette.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1200px-Irises-Vincent_van_Gogh.jpg"
  },
  {
    /* artwork #6 */
    title: "Head of a Woman in Profile (Jacqueline)",
    artist: "Pablo Picasso",
    location: "LACMA",
    year: 1970,
    style: "Painting",
    description: "A painting of Picasso's Jacqueline Roque, demonstrates the artists ability to make a fundamentally black and white composition carry depth and imagery.",
    image: "https://s3-us-west-2.amazonaws.com/collections.lacma.org-images/remote_images/ma-19487-WEB.jpg?g6VbebtcGYhbt1c7FfAHfkY4dtGWWbEd",
  },
  {
    /* artwork #7 */
    title: "Frida Kahlo",
    artist: "Diego Rivera",
    location: "LACMA",
    year: 1931,
    style: "Painting",
    description: "A portrait of the historical Mexican artist Frida Kahlo, showcasing Rivera's unique style and use of color.",
    image: "https://ca-times.brightspotcdn.com/dims4/default/e731b94/2147483647/strip/true/crop/2882x4037+0+0/resize/1200x1681!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fa4%2F95%2F2ca141d74053b77454a643d5b776%2F1466644-et-diego-rivera-frida-kahlo-portrait-42-ajs.jpg"
  },
  {
    /* artwork #8 */
    title: "Landsowne Heracles",
    artist: "Unknown",
    location: "Getty Villa",
    year: "1st century BC",
    style: "Sculpture/Ceramic",
    description: "A marble statue of Heracles, showcasing craftsmanship of ancient Roman sculpture.",
    image: "https://www.dailyartmagazine.com/wp-content/uploads/2022/11/Lansdowne_Herakles-602x1024.jpg"
  },
  {
    /* artwork #9 */
    title: "The Thinker",
    artist: "Auguste Rodin",
    location: "Norton Simon Museum",
    year: 1880,
    style: "Sculpture/Ceramic",
    description: "The Thinker is not that of a passive dreamer, but of a man actively engaged in creative thought.",
    image: "https://images.nortonsimon.org/iipsrv/iipsrv.fcgi?QLT=100&IIIF=M19702S.jpf/full/!668,1002/0/default.jpg"
  },
  {
    /*artwork #10 */
    title: "Number 1, 1949",
    artist: "Jackson Pollock",
    location: "MOCA",
    year: 1949,
    style: "Painting",
    description: "A large scale drip painting that exemplifies Pollock's unique technique and approach to abstract expressionism.",
    image: "https://www.moca.org/storage/app/uploads/public/55e/775/674/thumb_820_1120_0_0_0_auto.jpg"
  },
  {
    /* artwork #11 */
    title: "Still Life with Cherries and Peaches",
    artist: "Paul Cezanne",
    location: "LACMA",
    year: "1885-1887",
    style: "Painting",
    description: "A still life painting featuring cherries and peaches, showcasing Cezanne's unique brushwork and color palette.",
    image: "https://images.fineartamerica.com/images/artworkimages/medium/3/still-life-with-cherries-and-peaches-by-paul-cezanne-1887-paul-cezanne.jpg"
  },
  {
    /* artwork #12 */
    title: "Posset Pot",
    artist: "Unknown, British",
    location: "The Huntington Library",
    year: "1720-1740",
    style: "Sculpture/Ceramic",
    description: "17th and 18th century style pottery from England, used for Posset, a drink made from a mixture of curdled milk, spices, and alcohol",
    image: "https://emuseum.huntington.org/internal/media/dispatcher/35705/preview"

  },
  {
    /* artwork #13 */
    title: "Seated Male Figure",
    artist: "Unknown, Roman",
    location: "LACMA",
    year: "200 BCE - 500 CE",
    style: "Sculpture/Ceramic",
    description: "A ceramic figure of a seated man, created in Mexico long ago.",
    image: "https://s3-us-west-2.amazonaws.com/collections.lacma.org-images/remote_images/ma-47586-WEB.jpg?yfDBPbJi6Kmyq06Zwjw8kcham1BSKL74",
  },
  {
    /* artwork #14 */
    title: "Campbell's Soup Cans",
    artist: "Andy Warhol",
    location: "The Broad",
    year: 1962,
    style: "Painting",
    description: "A simple painting of Campbell Soup, showcasing Warhol's exploration of consumer culture and mass production.",
    image: "https://s3-us-west-2.amazonaws.com/collections.lacma.org-images/remote_images/ma-19261-WEB.jpg?bDx166TZJmBwkffvv9FkR_bwnLCyof1F"
  },
  {
    /* artwork #15 */
    title: "Cutaway View",
    artist: "William Levitt",
    location: "The Hammer",
    year: 2008,
    style: "Installation",
    description: "A mixed media installation that explores the concept of home and domesticity in contemporary art.",
    image: "https://hammer.ucla.edu/sites/default/files/styles/large/public/2024-12/leavitt_cutawayview.jpg.jpeg?itok=kx3vLOQ_"
  },
  {
    /* artwork #16 */
    title: "African-American Flag",
    artist: "David Hammons",
    location: "MOCA",
    year: 2019,
    style: "Materials",
    description: "An African-American flag features alternative American colors and symbols, representing the African-American experience and identity.",
    image: "https://www.thebroad.org/sites/default/files/styles/webp_convert_only/public/media-files/Hammons_African%20American%20Flag%20-%20horizontal_0.jpg.webp?itok=heXDOhKO"
  },
  {
    /* artwork #17 */
    title: "Dancer at Rest",
    artist: "Edgar Degas",
    location: "Norton Simon",
    year: "1919-1921",
    style: "Sculpture/Ceramic",
    description: "A bronze sculpture of a dancer in a relaxed pose, showcasing Degas's interest in movement and the human form.",
    image: "https://images.nortonsimon.org/iipsrv/iipsrv.fcgi?QLT=100&IIIF=M19770222S.jpf/full/!668,1002/0/default.jpg"
  },
  {
    /* artwork #18 */
    title: "Thorax", 
    artist: "Jenny Holzer",
    location: "The Broad",
    year: 1997,
    style: "Installation",
    description: "A large-scale installation that combines text and light to create a powerful commentary on war and violence.",
    image: "https://www.thebroad.org/sites/default/files/styles/webp_convert_only/public/art/holzer_thorax.jpg.webp?itok=oNfyhp0C"
  },
  {
    /* artwork #19 */
    title: "The Artist's Garden",
    artist: "Claude Monet",
    location:  "Getty Center",
    year: 1900,
    style: "Painting",
    description: "A vibrant depiction of Monet's garden in Giverny, showcasing his mastery of color and light.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg"
  },
  {
    /* artwork #20 */
    title: "Blue Boy",
    artist: "Thomas Gainsborough",
    location: "Getty Center",
    year: "1770",
    style: "Painting",
    description: "A portrait of a young gentleman clad in blue, a masterpiece of 18th-century British portraiture.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/The_Blue_Boy.jpg",
  }
 ];

const gallery = document.getElementById("gallery");
const searchBar = document.getElementById("searchBar");
const styleFilter = document.getElementById("styleFilter");
const locationFilter = document.getElementById("locationFilter");

let currentCatalog = [...artCatalog]; // Clone of original list so that the original order is maintained
let draggedIndex = null;

function renderCatalog(data) {
  gallery.innerHTML = "";
// First operation: Search
  if (data.length == 0) {
    gallery.innerHTML = "<p>No art pieces match your search.</p>";
    return;
  }

  // Loop to create cards 
  data.forEach((piece, index) => {
    const card = document.createElement("div");
    card.className = "art-card";
    card.draggable = true;
    card.dataset.index = index;

    card.innerHTML = `
      <img src="${piece.image}" alt="${piece.title}" class="art-img" />
      <h3>${piece.title}</h3>
      <p><strong>Artist:</strong> ${piece.artist}</p>
      <p><strong>Location:</strong> ${piece.location}</p>
      <p><strong>Year:</strong> ${piece.year}</p>
      <p><strong>Style:</strong> ${piece.style}</p>
      <p><strong>Description:</strong> ${piece.description}</p>
    `;

// Prevent images from interfering with drag-and-drop
    card.querySelector("img").addEventListener("dragstart", e => e.preventDefault());
// Third Operation: Drag and Drop Sorting
    card.addEventListener("dragstart", dragStart);
    card.addEventListener("dragover", dragOver);
    card.addEventListener("drop", drop);
    card.addEventListener("dragenter", dragEnter);
    card.addEventListener("dragleave", dragLeave);
    card.addEventListener("dragend", dragEnd);

    gallery.appendChild(card);
  });
}

function updateDisplay() {
  const searchTerm = searchBar.value.toLowerCase();
  const selectedStyle = styleFilter.value;
  const selectedLocation = locationFilter.value;
//Second Operation: Filtering
  currentCatalog = artCatalog.filter(piece => {
    const matchesSearch =
      piece.title.toLowerCase().includes(searchTerm) ||
      piece.artist.toLowerCase().includes(searchTerm);

    //Style Filter
    const matchesStyle =
     (selectedStyle == "All" || piece.style == selectedStyle);
    //Location Filter
    const matchesLocation =
      (selectedLocation == "All" || piece.location == selectedLocation);

    return matchesSearch && matchesStyle && matchesLocation;
  });

  renderCatalog(currentCatalog);
}

// Drag-and-drop handlers
function dragStart(e) {
  draggedIndex = +e.target.dataset.index;
  e.target.classList.add("dragging");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  if (e.target.classList.contains("art-card")) {
    e.target.classList.add("drag-over");
  }
}

function dragLeave(e) {
  e.target.classList.remove("drag-over");
}

function drop(e) {
  e.preventDefault();
  const targetIndex = +e.target.closest(".art-card").dataset.index;

  // Swap in currentCatalog
  const temp = currentCatalog[draggedIndex];
  currentCatalog[draggedIndex] = currentCatalog[targetIndex];
  currentCatalog[targetIndex] = temp;

  renderCatalog(currentCatalog);
}

function dragEnd(e) {
  e.target.classList.remove("dragging");
  document.querySelectorAll(".art-card").forEach(card =>
    card.classList.remove("drag-over")
  );
}

searchBar.addEventListener("input", updateDisplay);
styleFilter.addEventListener("change", updateDisplay);
locationFilter.addEventListener("change", updateDisplay);

updateDisplay();

