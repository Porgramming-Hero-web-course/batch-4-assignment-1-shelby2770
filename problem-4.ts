type Circle = {
  shape: string;
  radius: number;
};

type Rectangle = {
  shape: string;
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;
const calculateShapeArea = (obj: Shape): number => {
  if ("radius" in obj) return (Math.PI * obj.radius ** 2).toFixed(2);
  return obj.height * obj.width;
};

// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// console.log(circleArea, rectangleArea);
