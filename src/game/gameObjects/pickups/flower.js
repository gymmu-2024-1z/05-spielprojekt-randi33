import StaticObject from "../staticObject"

export default class Flower extends StaticObject {
  constructor(scene, x, y, properties) {
    super(scene, x, y, "pickups", "flower", properties) //szene wo es abläuft

    this.setOrigin(0, 0)
    this.setSize(24, 32)
    this.setOffset(8, 0)
  }
}
