const ctx = cnv.getContext("2d");
cnv.width = innerWidth;
cnv.height = innerHeight;
addEventListener('resize', () => {
    cnv.width = innerWidth;
    cnv.height = innerHeight;
})
let clo = 0
y.value = cnv.height / 2
let mover = (frec.value / 100)
if (y.value < cnv.height) {
    function animate() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
        ctx.fillRect(0, 0, cnv.width, cnv.height)
        ctx.beginPath();
        ctx.moveTo(0, cnv.height / 2);
        for (let i = 0; i < cnv.width; i++) {
            ctx.lineTo(i, y.value / 1 +
                Math.sin(i * (tl.value / 10000) + mover) * ampli.value);
        }
        ctx.strokeStyle = `hsl(${heu.value + clo}, 50%, 50%)`
        // ctx.lineTo(cnv.width, cnv.height)
        // ctx.lineTo(0, cnv.height)
        // ctx.fillStyle = `hsl(${heu.value}, 50%, 50%)`
        // ctx.fill()
        ctx.stroke()
        clo++;
        mover -= (frec.value / 100) / 10;
        requestAnimationFrame(animate)
    }
}
animate()