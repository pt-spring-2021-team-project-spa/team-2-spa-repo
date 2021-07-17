import WorldWonderTile from "../components/WorldWonderTile";

export default function WorldWonderPage(worldWonder) {
    return `
        <h1>World Wonder Page</h1>
        ${WorldWonderTile(worldWonder)}
    `
}