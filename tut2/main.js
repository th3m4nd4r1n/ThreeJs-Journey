import * as THREE from "three";

//consts
const sizes={
    width: 800,
    height: 600
};
const canvas = document.querySelector('canvas.webgl');

//scene
const scene = new THREE.Scene();

//geometry
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({
    color:0x00ff00,
    // wireframe:true
    // flatshading: true
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);
const axesHelper = new THREE.AxesHelper();
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 4;
scene.add(axesHelper);

// renderer
const renderer = new THREE.WebGLRenderer({ 
    canvas:canvas
 });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);