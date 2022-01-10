import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const BannerCanvas = () => {
  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#banner-canvas') as HTMLCanvasElement })
    const controls = new OrbitControls(camera, renderer.domElement)

    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    
    camera.position.set(-30, 40, 30)
    camera.lookAt(scene.position)

    // light
    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(5, 5, 5)
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(pointLight, ambientLight)

    // sphere
    const sphereGeometry = new THREE.SphereGeometry(10, 32, 32)
    const sphereTexture = new THREE.TextureLoader().load('/sphere-texture.png')
    const normalTexture = new THREE.TextureLoader().load('/normal.jpg')
    const sphereMaterial = new THREE.MeshStandardMaterial({ map: sphereTexture, normalMap: normalTexture })
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    scene.add(sphere)
    
    // render the scene
    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }
    animate()
  }, [])
  
  return (
    <canvas id="banner-canvas">

    </canvas>
  )
}

export default BannerCanvas