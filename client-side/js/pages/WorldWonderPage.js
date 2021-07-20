import WorldWonderTile from "../components/WorldWonderTile.js";

export default function WorldWonderPage(worldWonder) {
    return `
        <h1>World Wonder Page</h1>
        ${WorldWonderTile(worldWonder)}
    `;
}