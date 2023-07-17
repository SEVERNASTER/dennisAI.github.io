import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

neonCursor({
    el: document.getElementById("neon"),
    sahderPoints: 16,
    curvePoints: 80,
    curveLervp: 0.5,
    radius1: 5,
    raidus2: 30,
    velocityTreshold: 10,
    sleepRadiusX: 100,
    sleepRadiusY: 100,
    sleepTimeCoefX: 0.0025,
    sleepTimeCoefY: 0.0025,
})



ScrollReveal().reveal('.home');
ScrollReveal().reveal('.about', { delay: 500 });
ScrollReveal().reveal('.massage', { delay: 500 });
ScrollReveal().reveal('.feedback', { delay: 500 });


