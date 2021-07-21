let colosseumImg = require('../../images/colosseum.jpg');
let tajMahalImg = require('../../images/tajMahal.jpg')

export default function WorldWonders(worldWonders) {
    return `
        <div class="worldWonders__container">
        ${worldWonders.map((worldWonder) => {
            return `
                <div class="worldWonder__tile_container">
                    <div class="test">
                        <div class="content-wrapper">
                            <input type="hidden" id="worldWonderId" value=${worldWonder.url} />
                            <h2 class="worldWonder__name">${worldWonder.name}</h2>
                            <img class="thumb" src="${worldWonder.imgUrl}"/>
                        </div>
                    </div>
                </div>
                `;
            })
        .join('')}
        </div>
    `;
}