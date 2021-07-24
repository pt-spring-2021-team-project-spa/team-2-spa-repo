import WorldWonders from '../components/WorldWonders.js';
import '../../css/WorldWondersPage.css'

export default function WorldWondersPage(worldWonders) {
  return `
    <h1>The World Wonders Page</h1>
    ${WorldWonders(worldWonders)}
    <nav class="add__worldWonder">Create World Wonder!</nav>
    `;
}