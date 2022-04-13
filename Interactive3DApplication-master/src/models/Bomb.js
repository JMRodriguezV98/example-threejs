var texture = new THREE.TextureLoader().load("assets/textures/zuniga.jpg");
var geometry = new THREE.SphereGeometry(50,50,50);
var material = new THREE.MeshPhongMaterial( {color:0x6a6a6a, map: this.texture});
var bomba = new THREE.Mesh( geometry, material);

class Bomb {
  
    crearBomba(){
        
        bomba.position.set(players.p1.element.position.x,players.p1.element.position.y,players.p1.element.position.z);   //players.p1.element.position
        scene.add(bomba);
    }
    // getBomba(){
    //     return bomba;
    // }
    eliminarBomba(){
        scene.remove(bomba);
    }
}