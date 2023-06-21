var PFPaths = null;
function pathFind(e, t) {
    t = N.filter(e => Math.hypot(e.y - R.y, e.x - R.x) < 800 && e.active);
    let o = function (o, $, n) {
        this.x = o;
        this.y = $;
        this.g = n;
        this.type = t.some(t => {
            let n = !/spike/.test(t.name) || R.sid == t.owner.sid || R.team && Pt.includes(t.owner.sid) ? t.scale : t.scale;
            return !("pit trap" == t.name && t.owner && (R.sid == t.owner.sid || Pt.includes(t.owner.sid))) && !!(Math.hypot(t.y - $, t.x - o) < n && Math.hypot(t.y - e[1], t.x - e[0]) > n && Math.hypot(t.y - R.y, t.x - R.x) > n);
        }) ? "wall" : "space";
    };
    let $ = new o(Math.round(R.x), Math.round(R.y), 0);
    let n = new o(Math.round(e[0]), Math.round(e[1]), 0);
    let i = [];
    let r = [];
    let s = 0;
    for (;;) {
        if (++s >= 100) {
            break;
        }
        let u = 1 === s ? $ : r.filter(e => "space" == e.type).sort((e, t) => e.good - t.good)[0];
        for (let x = 0; x < 3; x++) for (let l = 0; l < 10; l++) {
            if (l == 1) continue;
            let p = u.x + 8 * (-1 + x);
            let a = u.y + 8 * (-1 + l);
            let h = new o(p, a, s);
            h.good = Math.abs(h.x - n.x) + Math.abs(h.y - n.y) / 35 - s;
            r.push(h);
        }
        i.push(u);
    }
    return i;
}
PFPaths.availablePath = pathFind([R.x + iNIT[0][0] - iNIT[1][0] / 2, R.y + iNIT[0][1] - iNIT[1][1] / 2]);
