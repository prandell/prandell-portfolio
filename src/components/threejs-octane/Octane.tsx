import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as THREE from 'three'
import React, { FC, useEffect } from 'react'

const ThreeOctane: FC = () => {
  useEffect(() => {
    //Debug Console
    // const gui = new dat.GUI();

    //canvas
    const canvasContainer = document.getElementById('canvas-container')
    if (!canvasContainer) {
      return
    }
    const canvas = document.querySelector('canvas.webgl')
    if (!canvas) {
      return
    }
    const sizes = {
      width: canvasContainer.clientWidth ?? 250,
      height: canvasContainer.clientHeight ?? 250
    }

    /* Scene Setup and Base configuration
      - Best settings were found by playing with debug console sliders
    */
    const scene = new THREE.Scene()
    // scene.background = new THREE.Color(0x000000, 0);

    //camera
    const camera = new THREE.PerspectiveCamera(
      50,
      sizes.width / sizes.height,
      1,
      500
    )
    camera.rotation.x = -2.7
    camera.rotation.y = 0.89
    camera.rotation.z = 2.8
    camera.position.x = 215
    camera.position.y = 70
    camera.position.z = -159
    camera.zoom = 2

    //renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: canvas
    })
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputEncoding = THREE.sRGBEncoding
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    camera.updateProjectionMatrix()

    // Orbital Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.minPolarAngle = Math.PI / 2.4
    controls.maxPolarAngle = Math.PI / 2.4
    controls.minDistance = 265
    controls.maxDistance = 265
    controls.addEventListener('change', () => {
      renderer.render(scene, camera)
    })
    controls.enableZoom = false

    //Plane
    const material = new THREE.MeshPhongMaterial({
      color: 0x181818,
      dithering: true
    })
    const geometry = new THREE.CylinderGeometry(70, 70, 0.0001, 32)

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, -2, 0)
    mesh.receiveShadow = true
    scene.add(mesh)

    //Lights
    const spotLight = new THREE.SpotLight(0xfff0df, 100, 368, -0.22, 1, 1.54)
    spotLight.position.set(1, 332, 23)
    spotLight.castShadow = true
    spotLight.shadow.mapSize.width = 512
    spotLight.shadow.mapSize.height = 512
    spotLight.shadow.camera.near = 10
    spotLight.shadow.camera.far = 200
    spotLight.shadow.focus = 1
    scene.add(spotLight)

    //EDITED
    const directionalLight = new THREE.DirectionalLight(0xffffff, 15)
    directionalLight.position.set(0.1, 0, 0.2)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 15)
    directionalLight2.position.set(-0.1, 0, -0.2)
    directionalLight2.castShadow = true
    scene.add(directionalLight2)

    //Animation
    const clock = new THREE.Clock()
    let car: THREE.Object3D
    let requestId: number | undefined
    const animate = (): void => {
      const elapsedTime = clock.getElapsedTime()
      if (car) {
        car.rotation.z = 0.3 * elapsedTime
      }
      renderer.render(scene, camera)
      requestId = requestAnimationFrame(animate)
    }
    const loader = new GLTFLoader()

    //Renderer/Resizing
    window.addEventListener('resize', () => {
      // Update sizes
      sizes.width = canvasContainer.clientWidth
      sizes.height = canvasContainer.clientHeight

      // Update camera
      camera.aspect = sizes.width / sizes.height
      camera.updateProjectionMatrix()

      // Update renderer
      renderer.setSize(sizes.width, sizes.height)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    })

    //Stop rendering when element is off screen
    // start render
    function start(): void {
      animate()
    }

    // stop render
    function stop(): void {
      if (requestId) {
        window.cancelAnimationFrame(requestId)
      }
      requestId = undefined
    }

    const onScreen = new Set()
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onScreen.add(entry.target)
          start()
        } else {
          onScreen.delete(entry.target)
          stop()
        }
      })
    })

    //Load model and start animation
    loader.load('octane/scene.gltf', function (gltf: GLTF) {
      gltf.scene.traverse(function (node: any) {
        if (node.isObject3D) {
          node.castShadow = true
          node.receiveShadow = true
        }
      })

      car = gltf.scene.children[0]
      car.scale.set(0.8, 0.8, 0.8)
      const carChildren: any = car.children[0]
      const carPaint = carChildren.children[0].children[0].children.find(
        (o: any) => o.name === 'Octane_Octane_Body_0'
      ).material?.color
      const carTrim = carChildren.children[0].children[0].children.find(
        (o: any) => o.name === 'Octane_Paint_0'
      ).material.color

      carPaint.r = 0.07
      carPaint.g = 0.04
      carPaint.b = 0.19
      carTrim.r = 0.8
      carTrim.g = 0.8
      carTrim.b = 0.8
      scene.add(gltf.scene)

      intersectionObserver.observe(canvas)
    })
  })

  return <canvas className="webgl"></canvas>
}

export default ThreeOctane
