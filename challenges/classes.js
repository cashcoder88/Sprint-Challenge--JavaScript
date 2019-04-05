// 1. Copy and paste your prototype in here and refactor into class syntax.



//function CuboidMaker(attrs) {
//    this.length = attrs.length;
//    this.width = attrs.width;
//    this.height = attrs.height;
//}
//
//CuboidMaker.prototype.volume = function() {
//    return (this.length * this.width * this.height);
//};
//
//CuboidMaker.prototype.surfaceArea = function() {
//    return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
//};

const pi = 3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679;


class CuboidMaker {
    constructor(attrs) {
        this.length = attrs.length;
        this.width = attrs.width;
        this.height = attrs.height;
    }
    
    volume() {
        return (this.length * this.width * this.height); 
    }
    
    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height));
    }
}

// Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch

class CubeMaker extends CuboidMaker {
    
    constructor(attrs1) {
        super(attrs1);
    }
    volumeCube() {
        return (this.length * this.width * this.height);
    }
    surfaceAreaCube() {
        return (6 * (this.length * this.length));
    }
}

class TorusMaker {
    constructor(attrs) {
        this.outerRadius = attrs.outerRadius;
        this.innerRadius = attrs.innerRadius;
    }

    surfaceAreaTorus() {
        let answer = ((pi * pi) * 4 * this.outerRadius * this.innerRadius); // π2 *  4 × π2 × R × r
        return answer;
    }
    
    volumeTorus() {
        let answer1 = (pi * pi) * 2 * this.outerRadius * (this.innerRadius * this.innderRadius); // 2 × π2 × R × r2
        return answer1;
    }
}


// Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch Stretch

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
});

const cube = new CubeMaker({
    length: 10,
    width: 10,
    height: 10,
});

const torus = new TorusMaker({
    innerRadius: 3,
    outerRadius: 7
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
 console.log(cube.volumeCube()); // 1000
 console.log(cube.surfaceAreaCube()); // 600
 console.log(torus.surfaceAreaTorus());
 console.log(torus.volumeTorus());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.