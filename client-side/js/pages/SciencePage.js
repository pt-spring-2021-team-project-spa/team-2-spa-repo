// export default function BlindedWithScience() {
//   return `
//     <h1>Science</h1>
//     ${items
//       .map((item) => {
//         console.log(item.links);
//         const itemImage = item.links[0].href;
//         return `
//                 <img src=${itemImage} alt='' />
//             `;
//       })
//       .join("")}
//     `;
// }

export default async function SciencePage() {
  let API_KEY = "WV0eX3Rt3FuYTS6kbJpJ5S5VPlEgCVqgf13mD7NM";
  let response = await fetch(
    "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}"
  );
  let data = await response.json();
  useApiData(data);
}

function useApiData(data) {
  document.querySelector("#content").innerHTML += data.name;
  document.querySelector("#content").innerHTML += `<img src="${data.img_src}">`;
}
