var clsEffect = clsEffect || {};
clsEffect = {
  bDewInit: !1,
  abDewInit: null,
  aiDewLastTrigger: null,
  aiDewUniq: null,
  aiDewLengthSt: null,
  aiDewLengthCt: null,
  aiDewLengthEd: null,
  aaiDewMd: null,
  aaiDewWt: null,
  aaiDewWp: null,
  aaiDewHt: null,
  aaiDewSp: null,
  aaiDewSt: null,
  aaiDewLf: null,
  End: null,
  sbDrawDew: function (
    c,
    x,
    t,
    n,
    p,
    g,
    v,
    q,
    h,
    b,
    u,
    l,
    d,
    w,
    m,
    y,
    r,
    z,
    e,
    k,
    f,
    a,
    F,
    G,
    H,
    I,
    J
  ) {
    m *= x;
    y *= x;
    r *= x;
    clsEffect.bDewInit ||
      ((clsEffect.bDewInit = !0),
      (clsEffect.abDewInit = []),
      (clsEffect.aiDewLastTrigger = []),
      (clsEffect.aiDewUniq = []),
      (clsEffect.aiDewLengthSt = []),
      (clsEffect.aiDewLengthCt = []),
      (clsEffect.aiDewLengthEd = []),
      (clsEffect.aaiDewMd = []),
      (clsEffect.aaiDewWt = []),
      (clsEffect.aaiDewWp = []),
      (clsEffect.aaiDewHt = []),
      (clsEffect.aaiDewSp = []),
      (clsEffect.aaiDewSt = []),
      (clsEffect.aaiDewLf = []));
    clsEffect.abDewInit[a] ||
      ((l = clsMorph.fnGetBezierLength(t, G, [l, d, w])),
      (clsEffect.abDewInit[a] = !0),
      (clsEffect.aiDewLastTrigger[a] = -1),
      (clsEffect.aiDewUniq[a] = 0),
      (clsEffect.aiDewLengthSt[a] = l[0]),
      (clsEffect.aiDewLengthCt[a] = l[1]),
      (clsEffect.aiDewLengthEd[a] = l[2]),
      (clsEffect.aaiDewMd[a] = []),
      (clsEffect.aaiDewWt[a] = []),
      (clsEffect.aaiDewWp[a] = []),
      (clsEffect.aaiDewHt[a] = []),
      (clsEffect.aaiDewSp[a] = []),
      (clsEffect.aaiDewSt[a] = []),
      (clsEffect.aaiDewLf[a] = []));
    if (h) {
      h = Math.floor(f / (k / b));
      if ((1 == b && 0 == f) || h != clsEffect.aiDewLastTrigger[a]) {
        f = clsEffect.aaiDewSt[a].length;
        for (b = 0; b < f; b++) 0 == clsEffect.aaiDewMd[a][b] && (f = b);
        f < u &&
          ((clsEffect.aaiDewMd[a][f] = 1),
          (clsEffect.aaiDewWt[a][f] =
            ((((clsEffect.aiDewUniq[a] + 4) % 5) + 6) / 10) * m),
          (clsEffect.aaiDewWp[a][f] = 1),
          (clsEffect.aaiDewHt[a][f] =
            ((((clsEffect.aiDewUniq[a] + 1) % 4) + 7) / 10) * y),
          (clsEffect.aaiDewSp[a][f] =
            ((((clsEffect.aiDewUniq[a] + 3) % 7) + 4) / 10) * r),
          (clsEffect.aaiDewSt[a][f] =
            clsEffect.aiDewLengthCt[a] -
            (((clsEffect.aiDewUniq[a] + 1) % 3) / 2) *
              clsEffect.aaiDewWt[a][f]),
          (clsEffect.aaiDewLf[a][f] = z * k),
          clsEffect.aiDewUniq[a]++);
      }
      clsEffect.aiDewLastTrigger[a] = h;
    }
    b = 0;
    for (u = clsEffect.aaiDewSt[a].length; b < u; b++)
      if (1 == clsEffect.aaiDewMd[a][b] || 2 == clsEffect.aaiDewMd[a][b]) {
        2 == clsEffect.aaiDewMd[a][b] && (clsEffect.aaiDewWp[a][b] -= 1 / k);
        m = clsMorph.fnTrimBezierOnly(
          t,
          G,
          clsEffect.aaiDewSt[a][b] +
            (clsEffect.aaiDewWt[a][b] * (1 - clsEffect.aaiDewWp[a][b])) / 2,
          clsEffect.aaiDewWt[a][b] * clsEffect.aaiDewWp[a][b]
        );
        f = m.aiX.length - 1;
        y = m.aiX[0];
        r = m.aiY[0];
        h = m.aiX[f];
        d = m.aiY[f];
        f = (Math.atan2(d - r, h - y) / (Math.PI / 180) + 360) % 360;
        f =
          ((clsEffect.aaiDewSp[a][b] *
            (90 > f
              ? (f - 0) / 90
              : 180 > f
              ? (180 - f) / 90
              : 270 > f
              ? (f - 180) / 90
              : (360 - f) / 90)) /
            k) *
          (r < d ? 1 : -1);
        w = f += (clsEffect.aaiDewSp[a][b] * H) / k;
        var A = m.aiX[Math.floor((m.aiX.length - 1) / 2)],
          B = m.aiY[Math.floor((m.aiX.length - 1) / 2)];
        if (1 == clsEffect.aaiDewMd[a][b]) {
          l = A;
          var E = B;
          e = Math.atan2(B - r, A - y) / (Math.PI / 180);
          e += F ? 270 : 90;
          var C = y + Math.cos((e / 180) * Math.PI) * clsEffect.aaiDewHt[a][b],
            D = r + Math.sin((e / 180) * Math.PI) * clsEffect.aaiDewHt[a][b];
          e = -(w - 1) / 2;
          e = 0 > e ? 0 : 1 < e ? 1 : e;
          clsEffect.aaiDewLf[a][b] < k && (e *= clsEffect.aaiDewLf[a][b] / k);
          l += (C - l) * e;
          E += (D - E) * e;
          D = A;
          C = B;
          e = Math.atan2(B - d, A - h) / (Math.PI / 180);
          e += F ? 90 : 270;
          h += Math.cos((e / 180) * Math.PI) * clsEffect.aaiDewHt[a][b];
          d += Math.sin((e / 180) * Math.PI) * clsEffect.aaiDewHt[a][b];
          e = (w + 1) / 2;
          e = 0 > e ? 0 : 1 < e ? 1 : e;
          clsEffect.aaiDewLf[a][b] < k && (e *= clsEffect.aaiDewLf[a][b] / k);
          h = D + (h - D) * e;
          e = C + (d - C) * e;
          c.beginPath();
          d = 0;
          for (w = m.aiX.length; d < w; d++)
            0 == d
              ? c.moveTo(m.aiX[d], m.aiY[d])
              : c.lineTo(m.aiX[d], m.aiY[d]);
          c.bezierCurveTo(h, e, l, E, y, r);
        } else {
          r = r > d ? r : d;
          l =
            (clsEffect.aaiDewWt[a][b] * clsEffect.aaiDewHt[a][b]) /
            3 /
            (clsEffect.aaiDewWt[a][b] * clsEffect.aaiDewWp[a][b]);
          c.beginPath();
          d = 0;
          for (w = m.aiX.length; d < w; d++)
            0 == d
              ? c.moveTo(m.aiX[d], m.aiY[d])
              : c.lineTo(m.aiX[d], m.aiY[d]);
          c.bezierCurveTo(h, r + l, y, r + l, y, r);
          0 >= clsEffect.aaiDewWp[a][b] && (clsEffect.aaiDewMd[a][b] = 0);
        }
        "" != p &&
          0 < g &&
          0 < n &&
          ((c.lineWidth = n * x),
          (c.strokeStyle = p),
          (c.globalAlpha =
            clsEffect.aaiDewLf[a][b] > (z - 1) * k
              ? ((z * k - clsEffect.aaiDewLf[a][b]) / k) * g
              : clsEffect.aaiDewLf[a][b] < k
              ? (clsEffect.aaiDewLf[a][b] / k) * g
              : g),
          c.stroke());
        "" != v &&
          0 < q &&
          ((c.fillStyle = v),
          (c.globalAlpha =
            clsEffect.aaiDewLf[a][b] > (z - 1) * k
              ? ((z * k - clsEffect.aaiDewLf[a][b]) / k) * q
              : clsEffect.aaiDewLf[a][b] < k
              ? (clsEffect.aaiDewLf[a][b] / k) * g
              : q),
          c.fill());
        1 == clsEffect.aaiDewMd[a][b] &&
          ((clsEffect.aaiDewSt[a][b] += f),
          clsEffect.aaiDewSt[a][b] < clsEffect.aiDewLengthSt[a]
            ? I
              ? ((clsEffect.aaiDewMd[a][b] = 2),
                (clsEffect.aaiDewWp[a][b] = 0.5))
              : (clsEffect.aaiDewSt[a][b] = clsEffect.aiDewLengthSt[a])
            : clsEffect.aaiDewSt[a][b] >
                clsEffect.aiDewLengthEd[a] - clsEffect.aaiDewWt[a][b] &&
              (J
                ? ((clsEffect.aaiDewMd[a][b] = 2),
                  (clsEffect.aaiDewWp[a][b] = 0.5))
                : (clsEffect.aaiDewSt[a][b] =
                    clsEffect.aiDewLengthEd[a] - clsEffect.aaiDewWt[a][b])));
        clsEffect.aaiDewLf[a][b]--;
        0 > clsEffect.aaiDewLf[a][b] && (clsEffect.aaiDewMd[a][b] = 0);
      }
  },
};
var clsMorph = clsMorph || {};
clsMorph.fnGetBezierLength = function (c, x, t) {
  for (var n = [], p = t.length, g = 0; g < p; g++) n[g] = 0;
  var v = 0,
    q = c.aiX[0],
    h = c.aiY[0];
  for (g = 0; g < p; g++) 0 == t[g] && (n[g] = v);
  for (var b = 1, u = c.aiX.length; b < u; b += 3) {
    g = clsMorph.fnTrimBezier(
      q,
      h,
      c.aiX[b],
      c.aiY[b],
      c.aiX[b + 1],
      c.aiY[b + 1],
      c.aiX[b + 2],
      c.aiY[b + 2],
      x,
      0 - v,
      1e17
    );
    v += g.iLength;
    for (g = 0; g < p; g++) t[g] == b - 1 + 3 && (n[g] = v);
    q = c.aiX[b + 2];
    h = c.aiY[b + 2];
  }
  return n;
};
clsMorph.fnTrimBezierOnly = function (c, x, t, n) {
  for (
    var p = 0,
      g = [],
      v = [],
      q = 0,
      h = c.aiX[0],
      b = c.aiY[0],
      u = 1,
      l = c.aiX.length;
    u < l;
    u += 3
  ) {
    h = clsMorph.fnTrimBezier(
      h,
      b,
      c.aiX[u],
      c.aiY[u],
      c.aiX[u + 1],
      c.aiY[u + 1],
      c.aiX[u + 2],
      c.aiY[u + 2],
      x,
      t - p,
      n
    );
    b = 0;
    for (var d = h.aiX.length; b < d; b++)
      (g[q] = h.aiX[b]), (v[q] = h.aiY[b]), q++;
    p += h.iLength;
    if (p > t + n) break;
    h = c.aiX[u + 2];
    b = c.aiY[u + 2];
  }
  1 > g.length &&
    (p > t + n
      ? ((g[q] = c.aiX[c.aiX.length - 1]), (v[q] = c.aiY[c.aiX.length - 1]))
      : ((g[q] = c.aiX[0]), (v[q] = c.aiY[0])));
  return { aiX: g, aiY: v };
};
clsMorph.fnTrimBezier = function (c, x, t, n, p, g, v, q, h, b, u) {
  var l = c > t ? c - t : t - c,
    d = x > n ? x - n : n - x;
  var w = 0 + (l > d ? l : d);
  l = t > p ? t - p : p - t;
  d = n > g ? n - g : g - n;
  w += l > d ? l : d;
  l = p > v ? p - v : v - p;
  d = g > q ? g - q : q - g;
  w = parseInt((w + (l > d ? l : d)) / h);
  w = 4 > w ? 4 : w;
  h = [];
  l = [];
  for (var m = (d = 0), y = 0, r = 0, z = 0; z < w; z++) {
    var e = z / (w - 1),
      k = 0,
      f = 0;
    var a = (1 - e) * (1 - e) * (1 - e);
    k += a * c;
    f += a * x;
    a = 3 * e * (1 - e) * (1 - e);
    k += a * t;
    f += a * n;
    a = 3 * e * e * (1 - e);
    k += a * p;
    f += a * g;
    a = e * e * e;
    k += a * v;
    f += a * q;
    r >= b && ((h[y] = k), (l[y] = f), y++);
    0 < z && (r += Math.sqrt(Math.pow(d - k, 2) + Math.pow(m - f, 2)));
    if (r > b + u) break;
    d = k;
    m = f;
  }
  return { aiX: h, aiY: l, iLength: r };
};
