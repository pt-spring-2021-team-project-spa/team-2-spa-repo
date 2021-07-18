import WorldWonders from '../components/WorldWonders.js';

export default function WorldWondersPage(worldWonders) {
  return `
    <h1>The World Wonders Page</h1>
    ${WorldWonders(worldWonders)}
    `;
}