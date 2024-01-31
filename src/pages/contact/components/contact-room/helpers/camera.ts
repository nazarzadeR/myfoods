export function introCameraPosition(cameraControls: any, mesh: THREE.Mesh) {
    cameraControls.fitToBox(mesh, true);
}
