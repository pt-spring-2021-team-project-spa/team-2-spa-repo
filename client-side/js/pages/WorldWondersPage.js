import WorldWonders from '../components/WorldWonders.js';

export default function PeoplePage(worldWonders) {
  return `
    <h1>The People Page</h1>
    ${WorldWonders(worldWonders)}
    `;
}