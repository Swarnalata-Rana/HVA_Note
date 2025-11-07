class Circle{
    constructor(radius){
      this.radius=radius;
    }
    area(){
      return Math.PI * (this.radius * this.radius)
    }
  }
  
  class Rectangle{
    constructor(length,breadth){
      this.length=length;
      this.breadth=breadth;
    }
    area(){
      return this.length*this.breadth
    }
  }
  
  class Triangle{
    constructor(base, height){
      this.base=base;
      this.height=height;
    }
    area(){
      return (this.base*this.height)/2
    }
  }
  let circle= new Circle(6)
  let rectangle=new Rectangle(2,4)
  let triangle=new Triangle(6,8)
  
  function computeArea(shape){
    return shape.area()
  }
  
  console.log(computeArea(circle))
  console.log(computeArea(rectangle))
  console.log(computeArea(triangle))