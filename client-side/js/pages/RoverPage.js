export default function RoverPage(photos) {
  return `
    <h1>Red Rover Red Rover</h1>
    <h2>Images From Mars Rover</h2>
    <div class='rover__container'>
    <h3>${photos.rover.name}</h3>
    <h3>${photos.camera.full_name}</h3>
    <img src=${img_src} alt='Image from Mars Rover' />
    </div>
    `;
}
