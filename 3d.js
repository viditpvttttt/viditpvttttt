import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.176.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.176.0/examples/jsm/controls/OrbitControls.js';

const ACCENT = 0xa47762;
const INK = 0x2a2724;
const MUTED = 0x827a72;

function makeRenderer(canvas){
  const r=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
  r.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
  r.outputColorSpace=THREE.SRGBColorSpace;
  r.setClearColor(0,0);
  return r;
}
function setup(canvas, kind){
  if(!canvas)return;
  const renderer=makeRenderer(canvas), scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(38,1,.05,100);
  camera.position.set(4.8,3.4,7.4);
  const controls=new OrbitControls(camera,canvas);
  controls.enableDamping=true; controls.dampingFactor=.055; controls.enablePan=false;
  controls.minDistance=3.2; controls.maxDistance=12; controls.autoRotate=true; controls.autoRotateSpeed=kind==='hero'?.28:.18;
  const root=new THREE.Group(); scene.add(root);
  scene.add(new THREE.HemisphereLight(0xffffff,0xc5bdb4,1.8));
  const key=new THREE.DirectionalLight(0xffffff,2.7); key.position.set(5,6,7); scene.add(key);
  const warm=new THREE.PointLight(ACCENT,10,18); warm.position.set(-4,2,3); scene.add(warm);
  const cool=new THREE.PointLight(0xb8b0a8,5,15); cool.position.set(4,-2,-4); scene.add(cool);

  const material=(color,opacity=.7,wire=false)=>new THREE.MeshStandardMaterial({color,transparent:true,opacity,wireframe:wire,roughness:.58,metalness:.18});
  const lineMat=(color=INK,opacity=.25)=>new THREE.LineBasicMaterial({color,transparent:true,opacity});
  const nodeMat=()=>new THREE.MeshBasicMaterial({color:ACCENT,transparent:true,opacity:.82});

  // Infinite-looking technical floor/grid
  const grid=new THREE.GridHelper(9,18,MUTED,0xd4d0c8); grid.material.transparent=true; grid.material.opacity=.22; grid.position.y=-2.25; root.add(grid);

  if(kind==='hero') buildHero(root,material,lineMat,nodeMat);
  else buildFolio(root,material,lineMat,nodeMat);

  const pointer={x:0,y:0,tx:0,ty:0};
  canvas.addEventListener('pointermove',e=>{const r=canvas.getBoundingClientRect();pointer.tx=(e.clientX-r.left)/r.width*2-1;pointer.ty=-((e.clientY-r.top)/r.height*2-1);});
  canvas.addEventListener('pointerleave',()=>{pointer.tx=0;pointer.ty=0;});
  canvas.addEventListener('wheel',()=>{controls.autoRotate=false;setTimeout(()=>controls.autoRotate=true,1200)},{passive:true});

  function resize(){const r=canvas.getBoundingClientRect();if(!r.width||!r.height)return;renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();}
  addEventListener('resize',resize); resize();
  const clock=new THREE.Clock();
  function animate(){
    const t=clock.getElapsedTime();
    pointer.x+=(pointer.tx-pointer.x)*.035; pointer.y+=(pointer.ty-pointer.y)*.035;
    root.rotation.x+=(pointer.y*.09-root.rotation.x)*.018;
    root.rotation.z+=(-pointer.x*.055-root.rotation.z)*.018;
    root.position.y=Math.sin(t*.55)*.035;
    controls.update();
    animateParts(root,t,kind);
    renderer.render(scene,camera); requestAnimationFrame(animate);
  }
  animate();
}

function buildHero(root,material,lineMat,nodeMat){
  const outer=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(3.15,3.15,3.15)),lineMat(INK,.42)); root.add(outer);
  const inner=new THREE.Mesh(new THREE.BoxGeometry(1.65,1.65,1.65),material(ACCENT,.14)); root.add(inner);
  const innerEdges=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(1.65,1.65,1.65)),lineMat(ACCENT,.55)); root.add(innerEdges);
  for(let i=0;i<3;i++){
    const tor=new THREE.Mesh(new THREE.TorusGeometry(1.95+i*.32,.012+i*.003,10,180),new THREE.MeshBasicMaterial({color:i===1?ACCENT:INK,transparent:true,opacity:.42-i*.06}));
    tor.rotation.set(i*.65, i*.9, i*.35); root.add(tor);
  }
  const sphere=new THREE.Mesh(new THREE.IcosahedronGeometry(.55,2),material(ACCENT,.28,true)); root.add(sphere);
  const pts=[]; for(let i=0;i<220;i++){const p=new THREE.Vector3().randomDirection().multiplyScalar(2.55+Math.random()*.85);pts.push(p.x,p.y,p.z)}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pts,3));root.add(new THREE.Points(g,new THREE.PointsMaterial({color:MUTED,size:.018,transparent:true,opacity:.7})));
  addOrbitNodes(root,10,3.1,.55,nodeMat,lineMat);
}

function buildFolio(root,material,lineMat,nodeMat){
  const core=new THREE.Group(); root.add(core);
  const shell=new THREE.Mesh(new THREE.IcosahedronGeometry(1.18,3),material(ACCENT,.22,true));core.add(shell);
  const core2=new THREE.Mesh(new THREE.IcosahedronGeometry(.55,2),material(ACCENT,.55,false));core.add(core2);
  const coreEdges=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(.92,1)),lineMat(ACCENT,.65));core.add(coreEdges);
  // Three concentric data rings on different planes
  [[2.15,.015,0,.2],[2.55,.012,1.1,-.5],[3.0,.009,.5,1.2]].forEach((v,i)=>{const t=new THREE.Mesh(new THREE.TorusGeometry(v[0],v[1],10,220),new THREE.MeshBasicMaterial({color:i===1?ACCENT:INK,transparent:true,opacity:.42}));t.rotation.set(v[2],v[3],i*.7);root.add(t)});
  const nodes=[];
  const count=14;
  for(let i=0;i<count;i++){
    const a=i/count*Math.PI*2, y=Math.sin(a*2.5)*.75, radius=2.35+(i%3)*.25;
    const p=new THREE.Vector3(Math.cos(a)*radius,y,Math.sin(a)*radius); nodes.push(p);
    const n=new THREE.Mesh(new THREE.SphereGeometry(.085+(i%4)*.018,12,8),nodeMat()); n.position.copy(p); n.userData.phase=i*.45; root.add(n);
    const beam=new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),p]),lineMat(ACCENT,.25)); root.add(beam);
  }
  // Network links between adjacent nodes and selected cross-links
  for(let i=0;i<count;i++) addLink(root,nodes[i],nodes[(i+1)%count],lineMat(INK,.18));
  [0,3,6,9,12].forEach(i=>addLink(root,nodes[i],nodes[(i+5)%count],lineMat(ACCENT,.22)));
  // Tiny satellites
  for(let i=0;i<28;i++){
    const p=new THREE.Vector3().randomDirection().multiplyScalar(2.8+Math.random()*1.1);
    const s=new THREE.Mesh(new THREE.BoxGeometry(.035,.035,.035),new THREE.MeshBasicMaterial({color:MUTED,transparent:true,opacity:.7}));s.position.copy(p);s.userData.phase=Math.random()*6.28;root.add(s);
  }
}
function addOrbitNodes(root,count,radius,yAmp,nodeMat,lineMat){
  for(let i=0;i<count;i++){const a=i/count*Math.PI*2;const p=new THREE.Vector3(Math.cos(a)*radius,Math.sin(a*1.7)*yAmp,Math.sin(a)*radius);const n=new THREE.Mesh(new THREE.SphereGeometry(.055,10,8),nodeMat());n.position.copy(p);n.userData.phase=i*.7;root.add(n);addLink(root,new THREE.Vector3(0,0,0),p,lineMat(ACCENT,.18));}
}
function addLink(root,a,b,mat){root.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([a,b]),mat));}
function animateParts(root,t,kind){
  root.traverse(o=>{
    if(o.userData?.phase!==undefined){o.position.y+=Math.sin(t*1.2+o.userData.phase)*.0009; if(o.material)o.material.opacity=.55+.22*(.5+.5*Math.sin(t*1.6+o.userData.phase));}
    if(o.type==='Torus' || o.type==='LineSegments' && kind==='hero'){o.rotation.x+=.00025;o.rotation.y+=.00045;}
  });
}

setup(document.getElementById('hero3d'),'hero');
setup(document.getElementById('folio3d'),'folio');
