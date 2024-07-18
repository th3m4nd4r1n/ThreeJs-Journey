import * as THREE from 'three';
import gsap from 'gsap';

// console.log(`${gsap}`);
//consts
const sizes={
    width: 800,
    height: 600
};
const canvas = document.querySelector('canvas.webgl');

//scene
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ 
    canvas:canvas
 });
renderer.setSize(sizes.width, sizes.height);
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
// camera.position.x = 1;
// camera.position.y = 1;
// camera.position.z = 4;
// scene.add(axesHelper);
const clock = new THREE.Clock();

//animation
gsap.to(mesh.position, { duration:15, x:3});

const tick = () =>
    {
    // var elapsedTime  = clock.getElapsedTime();
    // camera.position.x = Math.sin(elapsedTime);
    // camera.position.y = Math.cos(elapsedTime);
    // camera.lookAt(mesh.position);
    // console.log(tick);
    
    renderer.render(scene, camera);
    
    window.requestAnimationFrame(tick);
}
tick();

// renderer
