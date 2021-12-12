// create a new scene that represents the 3D world
const scene = new THREE.Scene();

// add camera to view the scene and set it 5 units out of the z axis towards the user
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// create a new renderer
const renderer = new THREE.WebGLRenderer();
// set size of camera view
renderer.setSize(window.innerWidth, window.innerHeight);
// append canvas element created by renderer to the document's body
document.body.appendChild(renderer.domElement);

// create a cube to show on canvas
let cube;

let loader = new THREE.TextureLoader();

loader.load( 'metal003.png', function (texture) {
    // specify 2x2 repeat of the image wrapped around all sides of the cube
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeateWrapping;
    texture.repeat.set(2,2);

    // 
    let geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    let material = new THREE.MeshLambertMaterial( { map: texture, shading: THREE.FlatShading } );
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // start off the animation
    draw();

    // add lights
    let light = new THREE.AmbientLight('rgb(255,255,255)'); // soft white light
    scene.add(light);

    let spotLight = new THREE.SpotLight('rgb(255,255,255)');
    spotLight.position.set(100,1000,1000);
    spotLight.castShadow = true;
    scene.add(spotLight);

    function draw() {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);

        requestAnimationFrame(draw);
    }
});