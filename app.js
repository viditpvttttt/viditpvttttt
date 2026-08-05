import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.176.0/build/three.module.js';

function mount(canvas, mode){
  const parent=canvas.parentElement;
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(38,parent.clientWidth/Math.max(parent.clientHeight,1),.1,100);
  camera.position.set(0,0,7);
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));
  renderer.setSize(parent.clientWidth,parent.clientHeight,false);
  renderer.outputColorSpace=THREE.SRGBColorSpace;

  const group=new THREE.Group(); scene.add(group);
  const lineMat=new THREE.MeshBasicMaterial({color:0x24221f,wireframe:true,transparent:true,opacity:.18});
  const accentMat=new THREE.MeshBasicMaterial({color:0xa47762,wireframe:true,transparent:true,opacity:.42});
  const dotMat=new THREE.MeshBasicMaterial({color:0x24221f});

  if(mode==='hero'){
    const outer=new THREE.Mesh(new THREE.IcosahedronGeometry(2.15,1),lineMat); group.add(outer);
    const inner=new THREE.Mesh(new THREE.IcosahedronGeometry(1.25,1),accentMat); group.add(inner);
    for(let i=0;i<18;i++){const a=new THREE.Mesh(new THREE.SphereGeometry(.035,8,8),dotMat); const p=new THREE.Vector3().randomDirection().multiplyScalar(1.7); a.position.copy(p); group.add(a)}
    const ring=new THREE.Mesh(new THREE.TorusGeometry(2.45,.012,8,120),accentMat); ring.rotation.x=Math.PI/2.7; group.add(ring);
  }
  if(mode==='folio'){
    for(let i=0;i<5;i++){const g=new THREE.Group();const box=new THREE.Mesh(new THREE.BoxGeometry(2.5,.12,1.6),i===2?accentMat:lineMat);g.add(box);g.position.y=(i-2)*.55;g.rotation.z=(i-2)*.035;group.add(g)}
    const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.65,1),accentMat); group.add(core);
  }
  if(mode==='stack'){
    const names=['REACT','AI','TS','VITE','DB','EDGE','GIT','WEB'];
    names.forEach((_,i)=>{const a=new THREE.Mesh(new THREE.SphereGeometry(.1,12,12),i%3===0?accentMat:dotMat); const t=i/8*Math.PI*2;a.position.set(Math.cos(t)*1.7,Math.sin(t)*1.7,Math.sin(t*2)*.4);group.add(a); const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0),a.position]);group.add(new THREE.Line(geo,new THREE.LineBasicMaterial({color:0x24221f,transparent:true,opacity:.13})))});
    group.add(new THREE.Mesh(new THREE.IcosahedronGeometry(.75,1),lineMat));
  }

  let down=false,lastX=0,lastY=0,tx=0,ty=0;
  parent.addEventListener('pointerdown',e=>{down=true;lastX=e.clientX;lastY=e.clientY;parent.setPointerCapture?.(e.pointerId)});
  parent.addEventListener('pointerup',()=>down=false); parent.addEventListener('pointercancel',()=>down=false);
  parent.addEventListener('pointermove',e=>{if(!down)return;tx+=(e.clientX-lastX)*.008;ty+=(e.clientY-lastY)*.008;lastX=e.clientX;lastY=e.clientY});
  function resize(){const w=parent.clientWidth,h=parent.clientHeight;camera.aspect=w/Math.max(h,1);camera.updateProjectionMatrix();renderer.setSize(w,h,false)}
  addEventListener('resize',resize);
  function tick(){requestAnimationFrame(tick);if(!down)tx+=.0018;group.rotation.y+=(tx-group.rotation.y)*.055;group.rotation.x+=(ty-group.rotation.x)*.055;group.position.y=Math.sin(performance.now()*.0007)*.05;renderer.render(scene,camera)} tick();
}

mount(document.querySelector('#hero-canvas'),'hero');
mount(document.querySelector('#folio-canvas'),'folio');
mount(document.querySelector('#stack-canvas'),'stack');
