export default function WorldWonderTile(worldWonder) {
    return `
        <div class="worldWonder__tile_container">
        <div class="test">
        <div class="content-wrapper" style=" background-image: url(${worldWonder.imgUrl}); width:100%; height:100%;">
            <input type="hidden" id="worldWonderId" value=${worldWonder.url} />
            <h2 class="worldWonder__name">${worldWonder.name}</h2>
            <p>Location: ${worldWonder.location}</p>
            <p>Year Of Construction: ${worldWonder.yearOfConstruction}</p>
            <p>Height: ${worldWonder.height}</p>
            <p>Length: ${worldWonder.length}</p>
            <p>Age: ${worldWonder.age}</p>
            <p>Fun Fact: ${worldWonder.funFact}</p>
            <p>Myth: ${worldWonder.myth}</p>
            </div>
            </div>
        </div>
    `;
}