import * as THREE from 'three'
// import * as dat from 'dat.gui';
import GSAP from 'gsap'
import SmoothScroll from './SmoothScroll'

var canv = {
  uFrequency: 1 ,
  uAmplitude: 1,
  uDensity: 1,
  uStrength: 1,
  uDeepPurple: 1,
  uOpacity: 1,
};

// canv.uAmplitude = 3
// canv.uDensity = 3

var glsl = require('glslify')

const vertexShader =glsl(`




vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}



mat3 rotation3dY(float angle) {
	float s = sin(angle);
	float c = cos(angle);

	return mat3(
		c, 0.0, -s,
		0.0, 1.0, 0.0,
		s, 0.0, c
	);
}

vec3 rotateY(vec3 v, float angle) {
	return rotation3dY(angle) * v;
}

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
}`)
const fragmentShader =glsl(`
uniform float uOpacity;
uniform float uDeepPurple;

varying float vDistortion;

vec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
  return a + b * cos(6.28318 * (c * t + d));
}     

void main() {
  float distort = vDistortion * 3.;

  vec3 brightness = vec3( 0.87, 0.6, 0.08);
  vec3 contrast = vec3(.3, .3, .3);
  vec3 oscilation = vec3(.4, .4, .0);
  vec3 phase = vec3(.0, .0, .0);

  vec3 color = cosPalette(distort, brightness, contrast, oscilation, phase);

  gl_FragColor = vec4(color, vDistortion);
  gl_FragColor += vec4(uDeepPurple, 0.0, 0.00, min(uOpacity, 1.));
}
`) 
class ScrollStage {
  constructor(target) {

    this.scroll = {
      height: 0,
      limit: 0,
      hard: 0,
      soft: 0,
      ease: 0.05,
      normalized: 0, 
      running: false
    }

  this.smoothScroll = new SmoothScroll({ 
      element: this.element, 
      viewport: this.viewport, 
      scroll: this.scroll
    })

    this.mouse = {
      x: 0,
      y: 0
    } 
    this.settings = {
      // vertex
      uFrequency: {
        start: 0,
        end: 4
      },
      uAmplitude: {
        start: 4,
        end: 4
      },
      uDensity: {
        start: 1,
        end: 1
      },
      uStrength: {
        start: 0,
        end: 1.1
      },
      // fragment
      uDeepPurple: {  // max 1
        start: 1,
        end: 0
      },
      uOpacity: { // max 1
        start: .33,
        end: .66
      }
    }
    GSAP.defaults({
      ease: 'power2',
      duration: 6.6,
      overwrite: true
    })

    

    this.target = target
    this.element = document.querySelector('.content')

    this.viewport = {
      width: window.innerWidth,
      height: window.innerHeight,
    }

    this.scene = new THREE.Scene()
    this.scene.background = new THREE.Color("#222")
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

    this.updateScrollAnimations = this.updateScrollAnimations.bind(this)

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
        
// const gui = new dat.GUI();

// gui.add(canv, 'uFrequency', 0, 10);
// gui.add(canv, 'uAmplitude', 0, 10);
// gui.add(canv, 'uDensity', 0, 2);
// gui.add(canv, 'uStrength', 0, 10);
// gui.add(canv, 'uDeepPurple', 0, 1);
// gui.add(canv, 'uOpacity', 0, 1); 
 
 
// // gui.onChange(e=>console.log("HEYYY"))
// console.log("GUI",gui.__controllers) 


// gui.__controllers.forEach(c=>{
//   const name = c.property
//   c.onChange(e=>{
//     this.mesh.material.uniforms[name] = { value:e }
//     console.log("NOOO",e)
//   })
//   console.log("ccc",c)
// })
    this.canvas.classList.add('webgl')
    this.target.appendChild(this.canvas)


  }

  addCamera() {
    this.camera.position.set(0, 0, 2.5)
    this.scene.add(this.camera)
  }

  /**
   * OBJECT
   */
  addMesh() {
    this.geometry = new THREE.IcosahedronGeometry(0.6, 40)

    this.material = new THREE.ShaderMaterial({
      wireframe: true,
      blending: THREE.AdditiveBlending,
      transparent: false,
      vertexShader,
      fragmentShader,
      uniforms: {
        uFrequency: { value: this.settings.uFrequency.start },
        uAmplitude: { value: this.settings.uAmplitude.start },
        uDensity: { value: this.settings.uDensity.start },
        uStrength: { value: this.settings.uStrength.start },
        uDeepPurple: { value: this.settings.uDeepPurple.start },
        uOpacity: { value: this.settings.uOpacity.start }
      }
    
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    this.mesh.position.x = 1
    this.mesh.position.y = 0.6
    this.scene.add(this.mesh)
  }
  /**
   * EVENTS
   */
  addEventListeners() {
    window.addEventListener('resize', this.onResize.bind(this))
    window.addEventListener('mousemove', this.onMouseMove.bind(this))
    window.addEventListener('scroll', this.onScroll.bind(this))
  }
  onMouseMove(event) {
    // play with it!
    // enable / disable / change x, y, multiplier …

    this.mouse.x = (event.clientX / this.viewport.width).toFixed(2) * 4
    this.mouse.y = (event.clientY / this.viewport.height).toFixed(2) * 2

    GSAP.to(this.mesh.material.uniforms.uFrequency, { value: this.mouse.x })
    GSAP.to(this.mesh.material.uniforms.uAmplitude, { value: this.mouse.x })
    GSAP.to(this.mesh.material.uniforms.uDensity, { value: this.mouse.y })
    GSAP.to(this.mesh.material.uniforms.uStrength, { value: this.mouse.y/2 })
    // GSAP.to(this.mesh.material.uniforms.uDeepPurple, { value: this.mouse.x })
    // GSAP.to(this.mesh.material.uniforms.uOpacity, { value: this.mouse.y })

    console.info(`X: ${this.mouse.x}  |  Y: ${this.mouse.y}`)
  }

    /**
   * SCROLL BASED ANIMATIONS
   */
     onScroll() {
      this.scroll.normalized = (this.scroll.hard / this.scroll.limit).toFixed(1)
  
      if (!this.scroll.running) {
        window.requestAnimationFrame(this.updateScrollAnimations)
  
        this.scroll.running = true
      }
    }
    updateScrollAnimations() {
      this.scroll.running = false
  
      GSAP.to(this.mesh.rotation, {
        x: this.scroll.normalized * Math.PI
      })
  
      for (const key in this.settings) {
        if (this.settings[key].start !== this.settings[key].end) {
          GSAP.to(this.mesh.material.uniforms[key], {
            value: this.settings[key].start + this.scroll.normalized * (this.settings[key].end - this.settings[key].start)
          })
        }
      }
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

    this.smoothScroll.onResize()
    
    this.renderer.setSize(this.viewport.width, this.viewport.height)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))  
  }

  /**
   * LOOP
   */
  update() {
    const elapsedTime = this.clock.getElapsedTime()
    this.mesh.rotation.y = elapsedTime * .05
    
// canv.uStrength = 3
    // console.log("canv",canv)
    this.smoothScroll.update()
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

export default (canvasTarget)=>{
  new ScrollStage(canvasTarget) 
}