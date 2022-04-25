class Ball {
  constructor(id, ctx, width, height, size, x, y, speedX, speedY, color) {
    this.id = id
    this.ctx = ctx
    this.width = width
    this.height = height
    this.size = size
    this.x = x
    this.y = y
    this.speedX = speedX
    this.speedY = speedY
    this.color = color
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.fillStyle = this.color
    this.ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  update() {
    if (this.x + this.size >= this.width || this.x - this.size <= 0) {
      this.speedX *= -1
    }
    if (this.y + this.size >= this.height || this.y - this.size <= 0) {
      this.speedY *= -1
    }
    this.x += this.speedX
    this.y += this.speedY
  }

  collisionDetect(otherBalls) {
    const collidedObject = otherBalls.filter(o => o.id !== this.id).find(o => {
      const dx = this.x - o.x
      const dy = this.y - o.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      return distance < this.size + o.size
    })
    if (collidedObject) {
      this.speedX *= -1
      this.speedY *= -1
    }
  }
}

export default Ball
