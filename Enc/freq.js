var recoChars = 'abcdefghijklmenopqrstuvwxyz'

var letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    e: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
}
var dataIn = "The British Empire and the French Republic, \
linked together in their cause and in their need, will \
defend to the death their native soil, aiding each other \
like good comrades to the utmost of their strength. Even \
though large tracts of Europe and many old and famous \
states have fallen or may fall into the grip of the Gestapo \
and all the odious apparatus of Nazi rule, we shall not \
flag or fail. We shall go on to the end, we shall fight \
in France, we shall fight on the seas and oceans, we \
shall fight with growing confidence and growing strength \
in the air, we shall defend our island, whatever the \
cost may be. We shall fight on the beaches, we shall \
fight on the landing grounds, we shall fight in the \
fields and in the streets, we shall fight in the hills; \
we shall never surrender, and even if, which I do \
not for a moment believe, this island or a large part \
of it were subjugated and starving, then our Empire \
beyond the seas, armed and guarded by the British fleet, \
would carry on the struggle, until, in God's good time, \
the new world, with all its power and might, steps forth \
to the rescue and the liberation of the old"

for (var i of Array.from(dataIn.toLowerCase()).filter(t => recoChars.includes(t))) letters[i]++;

for (i in letters) {
    console.log(`${i}: ${''.padEnd(letters[i], 'x')}`)
}