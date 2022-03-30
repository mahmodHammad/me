import * as THREE from 'three' 
const glsl  = require('glslify');
const  fragmentShader =glsl`
uniform float uOpacity;
uniform float uDeepPurple;

varying float vDistortion;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}     

void main() {
  float distort = vDistortion * 3.;

  vec3 brightness = vec3(.1, .1, .9);
  vec3 contrast = vec3(.3, .3, .3);
  vec3 oscilation = vec3(.5, .5, .9);
  vec3 phase = vec3(.9, .1, .8);

  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, vDistortion);
  gl_FragColor += vec4(min(uDeepPurple, 1.), 0., .5, min(uOpacity, 1.));
}
`
const vertexShader=glsl` 
#pragma glslify: pnoise = require(glsl-noise/periodic/3d)
#pragma glslify: rotateY = require(glsl-rotate/rotateY)

uniform float uFrequency;
uniform float uAmplitude;
uniform float uDensity;
uniform float uStrength;

varying float vDistortion;

void main() {  
  float distortion = pnoise(normal * uDensity, vec3(10.)) * uStrength;

  vec3 pos = position + (normal * distortion);
  float angle = sin(uv.y * uFrequency) * uAmplitude;
  pos = rotateY(pos, angle);    

  vDistortion = distortion;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
`
class ScrollStage {
  constructor() {
    this.element = document.querySelector('.canvas')

    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    })

    this.canvas = this.renderer.domElement

    this.camera = new THREE.PerspectiveCamera( 
      75, 
      this.viewport.width / this.viewport.height, 
      .1, 
      10
    )

    this.clock = new THREE.Clock()

    this.update = this.update.bind(this)

    this.init()
  }

  init() {
    this.addCanvas()
    this.addCamera()
    this.addMesh()
    this.addEventListeners()
    this.onResize()
    this.update()
  }

  /**
   * STAGE
   */
  addCanvas() {
    this.canvas.classList.add('webgl')
    document.body.appendChild(this.canvas)
  }

  addCamera() {
    this.camera.position.set(0, 0, 2.5)
    this.scene.add(this.camera)
  }

  /**
   * OBJECT
   */
  addMesh() {
    this.geometry = new THREE.IcosahedronGeometry(1, 64)

    this.material = new THREE.ShaderMaterial({
      wireframe: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader,
      fragmentShader,
      uniforms: {
        uFrequency: { value: 0 },
        uAmplitude: { value: 0 },
        uDensity: { value: 0 },
        uStrength: { value: 0 },
        uDeepPurple: { value: 0 },
        uOpacity: { value: 1 }
      }
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)

    this.scene.add(this.mesh)
  }
  /**
   * EVENTS
   */
  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
  }

  onResize() {
    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    if (this.viewport.width < this.viewport.height) {
      this.mesh.scale.set(.75, .75, .75)
    } else {
      this.mesh.scale.set(1, 1, 1)
    }

    this.camera.aspect = this.viewport.width / this.viewport.height
    this.camera.updateProjectionMatrix()

    this.renderer.setSize(this.viewport.width, this.viewport.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))  
  }

  /**
   * LOOP
   */
  update() {
    const elapsedTime = this.clock.getElapsedTime()

    this.mesh.rotation.y = elapsedTime * .05

    this.render()

    window.requestAnimationFrame(this.update) 
  }

  /**
   * RENDER
   */
  render() {
    this.renderer.render(this.scene, this.camera)
  }  
}

export default ()=>{
  new ScrollStage() 
}