export default function Images(images) {
  console.log(images);
  const items = images.collection.itmes;
  console.log(items);
  return `
    <h1>Science</h1>
    ${items
      .map((item) => {
        console.log(item.links);
        const itemImage = item.links[0].href;
        return `
                <img src=${itemImage} alt='' />
            `;
      })
      .join("")}
    `;
}
