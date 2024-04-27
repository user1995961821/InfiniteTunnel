import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

export function addBoilerPlateMesh() {
	const box = new THREE.BoxGeometry(0.5, 0.5, 0.5)
	const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(2, 0, 0)
	return boxMesh
}

export function addStandardMesh() {
	const box = new THREE.BoxGeometry(1, 1, 1)
	const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })
	const boxMesh = new THREE.Mesh(box, boxMaterial)
	boxMesh.position.set(-2, 0, 0)
	return boxMesh
}

export function addTunnel() {
	const wallGeometry1 = new THREE.PlaneGeometry(5, 2)
	const wallMaterial1 = new THREE.MeshBasicMaterial()
	const wall1 = new THREE.Mesh(wallGeometry1, wallMaterial1)
	wall1.rotation.x = Math.PI / 2
	wall1.position.set(0, 2, 0)
	const wallGeometry2 = new THREE.PlaneGeometry(2, 2)
	const wallMaterial2 = new THREE.MeshBasicMaterial()
	const wall2 = new THREE.Mesh(wallGeometry2, wallMaterial2)
	wall2.rotation.x = -Math.PI / 2
	wall2.position.set(0, -2, 0)
	const wallGeometry3 = new THREE.PlaneGeometry(2, 2)
	const wallMaterial3 = new THREE.MeshBasicMaterial()
	const wall3 = new THREE.Mesh(wallGeometry3, wallMaterial3)
	const wallGeometry4 = new THREE.PlaneGeometry(2, 2)
	const wallMaterial4 = new THREE.MeshBasicMaterial()
	const wall4 = new THREE.Mesh(wallGeometry4, wallMaterial4)
	const tunnel = new THREE.Group()
	tunnel.add(wall1, wall2, wall3, wall4)
	return tunnel
	return { roof: wall1, floor: wall2, leftSide: wall3, rightSide: wall4 }
}
