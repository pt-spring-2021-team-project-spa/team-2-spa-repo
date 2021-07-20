import WorldWonderTile from './WorldWonderTile';

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