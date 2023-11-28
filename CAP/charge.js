class Electron {
    constructor(x, y, radius, boxX, boxY, boxW, boxH) {
        // console.log("constructor");
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D().mult(4); // Initial random velocity
        this.radius = radius;
        this.boxX = boxX;
        this.boxY = boxY;
        this.boxW = boxW;
        this.boxH = boxH;
        this.animate = false;
        this.show = true;
        this.passedDest = [0];
        this.pushed = false;
        this.dim = false;
        this.message = "instance"
        this.moveBool = false;
    }
    updateMove(value) {
        this.moveBool = value;
    }

    updateMessage(str) {
        this.message = str;
    }
    updateBox(boxX, boxY, boxW, boxH) {
        this.boxX = boxX;
        this.boxY = boxY;
        this.boxW = boxW;
        this.boxH = boxH;
    }

    updatePushed(value) {
        this.pushed = value;
    }

    updatePassed(value) {
        this.passedDest.push(value);
    }

    updateAnimate(value) {
        this.animate = value;
    }

    updateShow(value) {
        this.show = value;
    }

    updateDim(value) {
        this.dim = value;
    }

    updateVelocity() {
        this.position.x += random(-60, 60);
        this.position.y += random(-60, 60);
        this.velocity = p5.Vector.random2D().mult(3); // random velocity
        this.position.add(this.velocity);
    }

    update() {
        // Move the ball
        this.position.add(this.velocity);

        let left = this.boxX + 10;
        let right = this.boxX + this.boxW - 10;
        let top = this.boxY + 10;
        let bottom = this.boxY + this.boxH - 10;

        if (this.position.x < left || this.position.x > right - this.radius) {
            this.velocity.x *= -1;
        }
        if (this.position.y < top || this.position.y > bottom - this.radius) {
            this.velocity.y *= -1;
        }
    }



    move(destination) {
        // Calculate the vector pointing from the current position to the destination
        let direction = createVector(destination.x - this.position.x, destination.y - this.position.y);

        // Normalize the direction vector to have a length of 1
        direction.normalize();

        // Scale the direction vector by the ball's speed
        direction.mult(6);

        // Update the position based on the direction vector
        this.position.add(direction);
    }

    display(dim) {
        // Draw the electron
        fill(color.neg)
        dim ? fill(color.negDim) : null;
        // fill(0, 150, 200);
        noStroke();
        ellipse(this.position.x, this.position.y, this.radius * 1.7);
    }
}

class Charge {
    constructor(type, x, y, dim) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.animated = false;
        this.dim = false;
    }

    updateDim(value) {
        this.dim = value;
    }

    updateAnimated(bool) {
        this.animated = bool;
    }
    updateType(type) {
        this.type = type;
    }
}