import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { SideNavBar } from './Util';

export function Game() {
  const refContainer = useRef(null);
  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0); // Plane for raycaster intersections

  useEffect(() => {
    // Initialize Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (refContainer.current) {
      refContainer.current.appendChild(renderer.domElement);
    }

    // Rope Points
    const points = [];
    for (let i = 0; i < 20; i++) {
      points.push(new THREE.Vector3(i - 10, Math.sin(i * 0.5), 0)); // Initial wave-like shape
    }

    // Create TubeGeometry for a 3D Rope
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.2, 8, false); // Thicker geometry
    const ropeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const ropeMesh = new THREE.Mesh(tubeGeometry, ropeMaterial);
    scene.add(ropeMesh);

    // Dragging State
    let draggingPointIndex = null;

    // Mouse Move Handler
    const onMouseMove = (event) => {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      if (draggingPointIndex !== null) {
        raycaster.setFromCamera(mouse, camera);
        const intersection = raycaster.ray.intersectPlane(plane, new THREE.Vector3());
        if (intersection) {
          points[draggingPointIndex].copy(intersection); // Update vertex position
          const newCurve = new THREE.CatmullRomCurve3(points);
          tubeGeometry.copy(new THREE.TubeGeometry(newCurve, 64, 0.2, 8, false)); // Update tube geometry
        }
      }
    };

    // Mouse Down Handler
    const onMouseDown = (event) => {
      event.preventDefault();
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(ropeMesh);
      if (intersects.length > 0) {
        const nearestPoint = intersects[0].point;
        let minDist = Infinity;
        draggingPointIndex = null;

        // Find the closest point on the rope
        points.forEach((point, index) => {
          const dist = point.distanceTo(nearestPoint);
          if (dist < minDist) {
            minDist = dist;
            draggingPointIndex = index;
          }
        });
      }
    };

    // Mouse Up Handler
    const onMouseUp = () => {
      draggingPointIndex = null; // Stop dragging
    };

    // Add Event Listeners
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Camera Position
    camera.position.z = 30;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      renderer.dispose();
      if (refContainer.current) {
        refContainer.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div> 
  <div>{SideNavBar('Game','')}</div>
  <div ref={refContainer} style={{ width: '100%', height: '100%' }}></div>;
  </div>
}
