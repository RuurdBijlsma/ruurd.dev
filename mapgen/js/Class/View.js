class View extends Scene {
    constructor(renderElement, main) {
        super(renderElement, main);

        this.controls = new THREE.OrbitControls(this.camera, this.renderElement);

        this.skyBox = new SkyBox(this, 'img/skybox/sunset/');

        // this.cube = new Cube(this);
        // this.sphere = new Sphere(this, 0, 0, 3, 0.5, 0xffaa00);
        let center = new THREE.Vector3();

        this.camera.position.set(0,15,0);
        this.camera.lookAt(center);

        this.lights = {
            ambient: new AmbientLight(this),
            directional: new DirectionalLight(this, 10, 6, 4, center)
        };
    }
}
