class Circle {
    constructor(radius) {
      this.radius = radius;
    }
    area() {
      return Math.PI * this.radius * this.radius;
  
    }
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  class Rectangle {
    constructor(length, breadth) {
      this.length = length;
      this.breadth = breadth;
    }
    area() {
      return this.length * this.breadth
  
    }
    perimeter() {
      return 2 * (this.length + this.breadth)
    }
  }
  
  class Triangle {
    constructor(a, b, c) {
        this.a=a;
        this.b=b;
        this.c=c;
  
    }
  
    area(){
        const s=this.perimeter()/2
        return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
    }
    
     perimeter() {
      return this.a + this.b + this.c;
    }
  }
  
  class SoilType {
    constructor(name, costPerSqM) {
      this.name = name;
      this.costPerSqM = costPerSqM;
    }
  }
  
  class FenceType {
    constructor(name, costPerMeter) {
      this.name = name;
      this.costPerMeter = costPerMeter;
    }
  }
  
  const loamySoil = new SoilType("Loamy Soil", 50);
  const woodenFence = new FenceType("Wooden Fence", 20);
  
  function computeGardenCost(shape, soilType, fenceType){
      const soliCost=shape.area()*soilType.costPerSqM;
      const fenceCost=shape.perimeter()*fenceType.costPerMeter;
      const totalCost=soliCost+fenceCost;
      return totalCost;
  }
  
  const circleBed = new Circle(3);
  const rectangleBed = new Rectangle(4, 2);
  
  console.log("circleBedTotalCost:-",computeGardenCost(circleBed, loamySoil, woodenFence))
  console.log("rectangleBedTotalCost:-",computeGardenCost(rectangleBed, loamySoil, woodenFence))
  