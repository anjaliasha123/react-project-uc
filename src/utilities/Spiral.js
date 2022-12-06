
let spiral = (cx,cy,iterations,scale) => {

    var d = "m" + cx + "," + cy;
     var x = 0, y = 1, z = x + y, radius, dx, dy;
    for (var iter = 0; iter <= iterations; iter++) {
        radius = x * scale;
        dx = iter % 4 < 2 ? radius : -radius;
        dy = (iter + 1) % 4 < 2 ? radius : -radius;
        d += "a" + radius + "," + radius + " 0 0 0 " + dx + "," + dy;
        x = y;
        y = z;
        z = x + y;
    }
    return d;
}
export { spiral };
