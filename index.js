// D1 = √[ ( X2-X1)^2 + (Y2-Y1)^2)
//   D2 = √[ ( X3-X1)^2 + (Y3-Y1)^2)
//   D2 = √[ ( X3-X2)^2 + (Y3-Y2)^2)


function solution(p1, p2, p3) {
  const d1 = Math.sqrt(((p2[0] - p1[0]) ** 2) + ((p2[1] - p1[1]) ** 2))
  const d2 = Math.sqrt(((p3[0] - p1[0]) ** 2) + ((p3[1] - p1[1]) ** 2))
  const d3 = Math.sqrt(((p3[0] - p2[0]) ** 2) + ((p3[1] - p2[1]) ** 2))

  return (d1 + d2 + d3) / 3;
}
