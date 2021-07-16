import WorldWonderTile from "./WorldWonderTile";

export default function WorldWonders(worldWonders) {
    return `
        <div class="worldWonders__container">
            ${worldWonders.map((worldWonder) => {
                return `
                    ${WorldWonderTile(worldWonder)}
                `;
            })
        .join('')}
        </div>
    `;
}

// {/* <h1>7 WORLD WONDERS</h1>
//         <ul class="worldWonders-list">
//             ${worldWonders.map(worldWonder => {
//                 console.log(worldWonder)
//                 return `
//                     <li class="worldWonders-list__name">${worldWonder.name}</li>
//                 `;
//             }).join('')}
//         </ul> */}