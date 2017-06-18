// Copyright 2011 Google Inc.
//
// This code is licensed under the same terms as WebM:
//  Software License Agreement:  http://www.webmproject.org/license/software/
//  Additional IP Rights Grant:  http://www.webmproject.org/license/additional/
// -----------------------------------------------------------------------------
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
// ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
// INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
// BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
// -----------------------------------------------------------------------------
//
// Copyright 2011-2013 Dominik Homberger
// Libwebp Javascript / libwebpjs - the libwebp implementation in javascript (v0.2.0)
//
// Author: Dominik Homberger (dominik.homberger@gmail.com)
(function() {

  var self;

  var ca = void 0,
    p = null,
    s = 0,
    x = 0,
    la = s,
    E = s,
    bb = 0,
    Mb = 0;

  function M(F) {
    return JSON.parse(JSON.stringify(F))
  }

  function N(F, G, w, D, S) {
    for (i = 0; i < S; ++i) F[G + i] = w[D + i]
  }

  function Nb(F) {
    var G = [],
      w = F.length,
      D;
    for (D = 0; D < w; ++D) G.push(F[D]);
    return G
  }

  function ic(F, G) {
    var w = [];
    w.push(M(F));
    var D;
    for (D = 0; D < G; ++D) w.push(M(F));
    w.push(0);
    return w
  }

  function rc(F, G) {
    var w = [],
      D;
    for (D = 0; D < G; ++D) w.push(F);
    w.push(0);
    return w
  }

  function memmove (arr1, index1, arr2, index2, length) {
    var i;
    for (i = 0; i < length; i++) {
      arr1[index1 + i] = arr2[index2 + i];
    }
  }

  function jd(F, G, w, D) {
    var S;
    for (S = 0; S < D; ++S) F[G + S] = w
  }

  function kd(F, G, w, D) {
    var S = "",
      ga;
    for (ga = 0; ga < D; ++ga) S += String.fromCharCode(F[G + ga]);
    return w == S ? 0 : 1
  }

  function U(F, G) {
    var w, D = [];
    for (w = 0; w < F; ++w) D.push(G);
    return D
  }

  function ld(F, G) {
    var w, D = [];
    for (w = 0; w < F; ++w) D.push(M(G));
    return D
  }

  function md(F, G) {
    var w;
    for (w = F.length - 1; 0 <= w; --w) G = M(U(F[w], G));
    return G
  }

  function $(F) {
    if (!F) throw Error("assert :P");
  }
  window.WebPDecoder = function() {
    function F(a) {
      return a == Ob || a == Pb || a == Bb || a == Qb
    }

    function G(a) {
      return S(a, 1)
    }

    function w(a, b) {
      var c = 1 + ((a.la - 1) * b >> 8),
        d = c << 8,
        e = s;
      a.Z >= d ? (e = 1, a.la -= c, a.Z -= d) : (e = 0, a.la = c);
      for (; 128 > a.la;) a.Z <<= 1, a.la <<= 1, 8 == ++a.gc && (a.gc = 0, a.bc && (a.Z += a.qa[a.Ia++], a.bc--));
      return e
    }

    function D(a, b, c, d) {
      d -= c;
      2 <= d ? (a.Z = b[c + 0] << 8 | b[c + 1], a.qa = b, a.Ia = c + 2, a.bc = d - 2) : (a.Z = 0, a.qa = p, a.bc = 0);
      a.la = 255;
      a.gc = 0
    }

    function S(a, b) {
      for (var c = 0, d = s, d = b - 1; 0 <= d; d--) c |= w(a, 128) << d;
      return c
    }

    function ga(a, b) {
      var c =
        S(a, b);
      return G(a) ? -c : c
    }

    function Rb(a, b, c, d) {
      var e = Mb;
      $(a != p);
      $(b != p);
      $(4294967288 > d);
      a.qa = b;
      a.Ia = c;
      a.ya = d;
      a.T = 0;
      a.Q = 0;
      a.g = 0;
      a.L = 0;
      for (e = a.fa = 0; 4 > e && e < a.ya; ++e) a.T |= a.qa[a.Ia + a.Q] << 8 * e, ++a.Q
    }

    function Sb(a) {
      for (; 8 <= a.g && a.Q < a.ya;) a.T >>>= 8, a.T += a.qa[a.Ia + a.Q] << 24 >>> 0, ++a.Q, a.g -= 8
    }

    function Da(a) {
      8 <= a.g && Sb(a);
      a.Q == a.ya && 32 == a.g && (a.L = 1)
    }

    function T(a, b) {
      var c = 0;
      $(0 <= b);
      if (!a.L && b < gf) {
        if (a.Q == a.ya && 32 <= a.g + b && (a.L = 1, 32 < a.g + b)) return c;
        c = a.T >> a.g & hf[b];
        a.g += b;
        8 <= a.g && 8 <= a.g && Sb(a)
      } else a.fa = 1;
      return c
    }

    function ma(a) {
      return a.Pa == a.gb
    }

    function nd(a, b) {
      $(a != p);
      if (0 == b) return 0;
      a.gb = 2 * b - 1;
      a.Y = ld(a.gb, jf);
      if (a.Y == p) return 0;
      a.Y[0].s = -1;
      return a.Pa = 1
    }

    function ja(a) {
      a != p && (a.Y = p, a.Y = p, a.gb = 0, a.Pa = 0)
    }

    function jc(a, b, c, d) {
      for (var e = a.Y, g = 0, k = +a.gb; 0 < d--;) {
        if (g >= k) return 0;
        if (0 > e[g].s) {
          if (ma(a)) return 0;
          var h = a,
            n = h.Y,
            l = +h.Pa;
          e[g].s = l - g;
          h.Pa += 2;
          n[l + 0].s = -1;
          n[l + 1].s = -1
        } else if (0 == e[g].s) return 0;
        g += e[g].s + (c >> d & 1)
      }
      if (0 > e[g].s) e[g].s = 0;
      else if (0 != e[g].s) return 0;
      e[g].kc = b;
      return 1
    }

    function od(a, b, c) {
      var d =
        s,
        e = 0,
        g = 0;
      $(a != p);
      $(b != p);
      for (d = 0; d < c; ++d) 0 < b[d] && (++e, g = d);
      if (!nd(a, e)) return 0;
      if (1 == e) return 0 > g || g >= c ? (ja(a), 0) : jc(a, g, 0, 0);
      e = 0;
      g = U(c, s);
      if (g == p) return (e = e && ma(a)) || ja(a), e;
      var k = s,
        k = s,
        d = U(Tb + 1, 0),
        h = s,
        n = U(Tb + 1, 0),
        l = 0;
      $(b != p);
      $(0 < c);
      $(g != p);
      for (k = 0; k < c; ++k) b[k] > l && (l = b[k]);
      if (l > Tb) d = 0;
      else {
        for (k = 0; k < c; ++k) ++d[b[k]];
        h = d[0] = 0;
        n[0] = -1;
        for (k = 1; k <= l; ++k) h = h + d[k - 1] << 1, n[k] = h;
        for (k = 0; k < c; ++k) g[k] = 0 < b[k] ? n[b[k]]++ : pd;
        d = 1
      }
      if (!d) return (e = e && ma(a)) || ja(a), e;
      for (d = 0; d < c; ++d)
        if (0 < b[d] && !jc(a, d, g[d], b[d])) return (e =
          e && ma(a)) || ja(a), e;
        (e = ma(a)) || ja(a);
      return e
    }

    function Ea(a, b, c, d, e, g, k) {
      for (var h = s, h = 0; h < k; ++h) e[g + h] = a[b + h] + c[d + h] & 255
    }

    function qd(a, b, c) {
      var d = a.P.l;
      if (!(c = 0 > b || 0 > c || b + c > a.P.v))
        if (c = 0 == b) {
          a: {
            var e = a.Ga,
              g = a.G,
              k = a.ub;
            c = a.P.l;
            var h = a.P.v,
              n = a.Xb,
              l = [p],
              m = p,
              f = h * c,
              q = p,
              r = p,
              r = "WEBP_FILTER_TYPE",
              u = s,
              l = s,
              v = 0,
              C = s;
            $(0 < c && 0 < h && d >= c);
            $(e != p && n != p);
            if (k <= Ub) c = 0;
            else if (C = e[g + 0] >> 0 & 3, r = e[g + 0] >> 2 & 3, u = e[g + 0] >> 4 & 3, l = e[g + 0] >> 6 & 3, C < kc || C > kf || r >= lf || u > rd || 0 != l) c = 0;
            else {
              if (C == kc) v = k >= f, l = e, m = g + Ub;
              else {
                l = U(f, 0);
                m = 0;
                if (l ==
                  p) {
                  c = 0;
                  break a
                }
                var v = g + Ub,
                  k = k - Ub,
                  g = l,
                  q = M(Vb),
                  A = 0,
                  z = sd();
                z == p ? v = 0 : (z.l = c, z.v = h, z.N = q, td(na), q.put = ud, q.Mb = vd, q.Pb = wd, q.ka = p, q.ka = g, q.fd = 0, q.width = c, q.height = h, z.a = L, Rb(z.o, e, v, k), z.Wa = Cb, Ka(c, h, 1, z, p) && xd(z, c) && (z.Wa = Db, A = lc(z, z.V, z.Ha, z.l, z.v, mf)), z != p && sa(z), v = A)
              }
              if (v) {
                e = nf[r];
                e != p ? (q = U(f, 0), r = 0, q == p && (v = 0, C != kc && (m = l = p)), e(l, m, c, h, 1, c, q, r), f = q, C = r) : (f = l, C = m);
                for (e = 0; 0 < h--;) N(n, e, f, C, c), C += c, e += d;
                u == rd && (v = l == p || 0 >= m || 0 >= c ? 0 : 1)
              }
              c = v
            }
          }
          c = !c
        }
      return c ? p : 0 == b ? a.Xb : +b * d
    }

    function of(a) {
      var b = a.width,
        c = a.height,
        d = a.J;
      if (0 >= b || 0 >= c || !(d >= Qa && d < Cc)) return ta;
      if (!a.Fc && a.Jb == p) {
        var e = p,
          g = 0,
          k = 0,
          h = 0,
          n = 0,
          e = bb,
          l = b * yd[d],
          m = l * c;
        d < ua || (g = parseInt((b + 1) / 2, 10), h = g * parseInt((c + 1) / 2, 10), d == Ra && (k = b, n = k * c));
        e = m + 2 * h + n;
        if (e != e) return ta;
        e = U(e, 205);
        if (e == p) return cb;
        a.Jb = e;
        a.jc = p;
        d < ua ? (b = a.c.RGBA, b.ma = e, b.Sa = p, b.f = l, b.size = m) : (b = a.c.Va, b.y = e, b.D = p, b.F = l, b.Wc = m, b.c = e, b.B = p + m, b.nb = g, b.Rc = h, b.S = e, b.C = p + m + h, b.rb = g, b.Uc = h, d == Ra && (b.p = e, b.q = p + m + 2 * h), b.Wb = n, b.Fa = k)
      }
      d = 1;
      g = a.J;
      k = a.width;
      h = a.height;
      g >= Qa && g < Cc ? g < ua ? (a = a.c.RGBA, d &=
        a.f * h <= a.size, d &= a.f >= k * yd[g], d &= a.ma != p) : (a = a.c.Va, n = a.nb * parseInt((h + 1) / 2, 10), l = a.rb * parseInt((h + 1) / 2, 10), m = a.Fa * h, d &= a.F * h <= a.Wc, d &= n <= a.Rc, d &= l <= a.Uc, d &= m <= a.Wb, d &= a.F >= k, d &= a.nb >= parseInt((k + 1) / 2, 10), d &= a.rb >= parseInt((k + 1) / 2, 10), d &= a.y != p, d &= a.c != p, d &= a.S != p, g == Ra && (d &= a.Fa >= k, d &= m <= a.Wb, d &= a.p != p)) : d = 0;
      return d ? L : ta
    }

    function zd(a, b, c, d) {
      if (d == p || 0 >= a || 0 >= b) return ta;
      if (c != p) {
        if (c.Ua) {
          var e = c.wc,
            g = c.vc,
            k = c.t & -2,
            h = c.k & -2;
          if (0 > k || 0 > h || 0 >= e || 0 >= g || k + e > a || h + g > b) return ta;
          a = e;
          b = g
        }
        if (c.I) {
          if (0 >= c.Ba ||
            0 >= c.Aa) return ta;
          a = c.Ba;
          b = c.Aa
        }
      }
      d.width = a;
      d.height = b;
      return of(d)
    }

    function mb(a) {
      return !(a & -256) ? a : 0 > a ? 0 : 255
    }

    function Ad(a, b, c, d) {
      var e = U(16, 0),
        g;
      g = 0;
      var k;
      for (k = 0; 4 > k; ++k) {
        var h = a[b + 0] + a[b + 8],
          n = a[b + 0] - a[b + 8],
          l = (a[b + 4] * Wb >> 16) - (a[b + 12] * Xb >> 16),
          m = (a[b + 4] * Xb >> 16) + (a[b + 12] * Wb >> 16);
        e[g + 0] = h + m;
        e[g + 1] = n + l;
        e[g + 2] = n - l;
        e[g + 3] = h - m;
        g += 4;
        b++
      }
      for (k = g = 0; 4 > k; ++k) a = e[g + 0] + 4, h = a + e[g + 8], n = a - e[g + 8], l = (e[g + 4] * Wb >> 16) - (e[g + 12] * Xb >> 16), m = (e[g + 4] * Xb >> 16) + (e[g + 12] * Wb >> 16), c[d + 0 + 0 * f] = mb(c[d + 0 + 0 * f] + (h + m >> 3)), c[d + 1 + 0 * f] = mb(c[d +
        1 + 0 * f] + (n + l >> 3)), c[d + 2 + 0 * f] = mb(c[d + 2 + 0 * f] + (n - l >> 3)), c[d + 3 + 0 * f] = mb(c[d + 3 + 0 * f] + (h - m >> 3)), g++, d += f
    }

    function pf(a, b, c, d, e) {
      Ad(a, b, c, d);
      e && Ad(a, b + 16, c, d + 4)
    }

    function qf(a, b, c, d) {
      mc(a, b + 0, c, d + 0, 1);
      mc(a, b + 32, c, d + 4 * f, 1)
    }

    function nc(a, b, c, d) {
      a = a[b + 0] + 4;
      var e;
      for (e = 0; 4 > e; ++e)
        for (b = 0; 4 > b; ++b) c[d + b + e * f] = mb(c[d + b + e * f] + (a >> 3))
    }

    function rf(a, b, c, d) {
      a[b + 0] && nc(a, b + 0, c, d + 0);
      a[b + 16] && nc(a, b + 16, c, d + 4);
      a[b + 32] && nc(a, b + 32, c, d + 4 * f);
      a[b + 48] && nc(a, b + 48, c, d + 4 * f + 4)
    }

    function Dc(a, b, c) {
      var d = b - f,
        e = oa,
        g = 255 - a[d - 1],
        k;
      for (k = 0; k <
        c; ++k) {
        var h = e,
          n = g + a[b - 1],
          l;
        for (l = 0; l < c; ++l) a[b + l] = h[n + a[d + l]];
        b += f
      }
    }

    function Yb(a, b, c) {
      var d;
      for (d = 0; 16 > d; ++d)
        for (i = 0; 16 > i; ++i) b[c + d * f + i] = a
    }

    function y(a, b, c) {
      return a + 2 * b + c + 2 >> 2
    }

    function Zb(a, b, c) {
      var d, e;
      for (d = 0; 8 > d; ++d)
        for (e = 0; 8 > e; ++e) b[c + e + d * f] = a
    }

    function nb(a, b, c) {
      var d = a[b - c],
        e = a[b + 0],
        g = 3 * (e - d) + sc[1020 + a[b - 2 * c] - a[b + c]],
        k = oc[112 + (g + 4 >> 3)];
      a[b - c] = oa[255 + d + oc[112 + (g + 3 >> 3)]];
      a[b + 0] = oa[255 + e - k]
    }

    function Bd(a, b, c, d) {
      var e = a[b + 0],
        g = a[b + c];
      return va[255 + a[b - 2 * c] - a[b - c]] > d || va[255 + g - e] > d
    }

    function Cd(a,
      b, c, d, e) {
      var g = a[b - 3 * c],
        k = a[b - 2 * c],
        h = a[b - c],
        n = a[b + 0],
        l = a[b + c],
        m = a[b + 2 * c],
        f = a[b + 3 * c];
      return 2 * va[255 + h - n] + tc[255 + k - l] > d ? 0 : va[255 + a[b - 4 * c] - g] <= e && va[255 + g - k] <= e && va[255 + k - h] <= e && va[255 + f - m] <= e && va[255 + m - l] <= e && va[255 + l - n] <= e
    }

    function Dd(a, b, c, d) {
      var e;
      for (e = 0; 16 > e; ++e) 2 * va[255 + a[b + e - c] - a[b + e + 0]] + tc[255 + a[b + e - 2 * c] - a[b + e + c]] <= d && nb(a, b + e, c)
    }

    function Ed(a, b, c, d) {
      var e;
      for (e = 0; 16 > e; ++e) 2 * va[255 + a[b + e * c - 1] - a[b + e * c + 0]] + tc[255 + a[b + e * c - 2] - a[b + e * c + 1]] <= d && nb(a, b + e * c, 1)
    }

    function sf(a, b, c, d) {
      var e;
      for (e = 3; 0 < e; --e) b +=
        4 * c, Dd(a, b + 0, c, d)
    }

    function tf(a, b, c, d) {
      var e;
      for (e = 3; 0 < e; --e) b += 4, Ed(a, b + 0, c, d)
    }

    function Fa(a, b, c, d, e, g, k, h) {
      for (; 0 < e--;) {
        if (Cd(a, b + 0, c, g, k))
          if (Bd(a, b + 0, c, h)) nb(a, b + 0, c);
          else {
            var n = a,
              l = b + 0,
              m = c,
              f = n[l - 2 * m],
              q = n[l - m],
              r = n[l + 0],
              u = n[l + m],
              v = n[l + 2 * m],
              C = sc[1020 + 3 * (r - q) + sc[1020 + f - u]],
              A = 27 * C + 63 >> 7,
              z = 18 * C + 63 >> 7,
              C = 9 * C + 63 >> 7;
            n[l - 3 * m] = oa[255 + n[l - 3 * m] + C];
            n[l - 2 * m] = oa[255 + f + z];
            n[l - m] = oa[255 + q + A];
            n[l + 0] = oa[255 + r - A];
            n[l + m] = oa[255 + u - z];
            n[l + 2 * m] = oa[255 + v - C]
          }
        b += d
      }
    }

    function Ga(a, b, c, d, e, g, k, h) {
      for (; 0 < e--;) {
        if (Cd(a, b + 0, c,
            g, k))
          if (Bd(a, b + 0, c, h)) nb(a, b + 0, c);
          else {
            var n = a,
              l = b + 0,
              m = c,
              f = n[l - m],
              q = n[l + 0],
              r = n[l + m],
              u = 3 * (q - f),
              v = oc[112 + (u + 4 >> 3)],
              u = oc[112 + (u + 3 >> 3)],
              C = v + 1 >> 1;
            n[l - 2 * m] = oa[255 + n[l - 2 * m] + C];
            n[l - m] = oa[255 + f + u];
            n[l + 0] = oa[255 + q - v];
            n[l + m] = oa[255 + r - C]
          }
        b += d
      }
    }

    function uf(a, b, c, d, e, g) {
      Fa(a, b + 0, c, 1, 16, d, e, g)
    }

    function vf(a, b, c, d, e, g) {
      Fa(a, b + 0, 1, c, 16, d, e, g)
    }

    function wf(a, b, c, d, e, g) {
      var k;
      for (k = 3; 0 < k; --k) b += 4 * c, Ga(a, b + 0, c, 1, 16, d, e, g)
    }

    function xf(a, b, c, d, e, g) {
      var k;
      for (k = 3; 0 < k; --k) b += 4, Ga(a, b + 0, 1, c, 16, d, e, g)
    }

    function yf(a, b, c, d, e,
      g, k, h) {
      Fa(a, b, e, 1, 8, g, k, h);
      Fa(c, d, e, 1, 8, g, k, h)
    }

    function zf(a, b, c, d, e, g, k, h) {
      Fa(a, b, 1, e, 8, g, k, h);
      Fa(c, d, 1, e, 8, g, k, h)
    }

    function Af(a, b, c, d, e, g, k, h) {
      Ga(a, b + 4 * e, e, 1, 8, g, k, h);
      Ga(c, d + 4 * e, e, 1, 8, g, k, h)
    }

    function Bf(a, b, c, d, e, g, k, h) {
      Ga(a, b + 4, 1, e, 8, g, k, h);
      Ga(c, d + 4, 1, e, 8, g, k, h)
    }

    function Fd(a, b) {
      return b == $b ? 0 == a.i ? 0 == a.d ? Cf : Df : 0 == a.d ? Ef : $b : b
    }

    function Ec(a, b, c, d) {
      for (i = 0; 4 > i; ++i) a[b + i] = c[d + i]
    }

    function wa(a, b) {
      return 0 > a ? 0 : a > b ? b : a
    }

    function Gd(a) {
      a.a = "VP8_STATUS_OK";
      a.xc = "OK"
    }

    function td(a) {
      a >>> 8 != na >>> 8 && alert("mismatch error")
    }

    function Y(a, b, c) {
      a.a == L && (a.a = b, a.xc = c, a.za = 0);
      // alert(b + ": " + c);
      return 0
    }

    function Hd(a, b) {
      var c = [0],
        d = x,
        e = [Mb],
        g = M(Id),
        k = M(Jd),
        h = M(Fc),
        e = "VP8StatusCode",
        g = M(Gc);
      if (a == p) return alert("(dec == null)"), 0;
      Gd(a);
      if (b == p) return Y(a, "VP8_STATUS_INVALID_PARAM", "null VP8Io passed to VP8GetHeaders()");
      g.data = b.data;
      g.b = b.b;
      g.e = b.e;
      g.b = [g.b];
      g.e = [g.e];
      g = [g];
      e = Kd(g);
      if (e != L) return Y(a, e, "Incorrect/incomplete header.");
      g = g[0];
      g.b = g.b[0];
      g.e = g.e[0];
      if (g.ia) return Y(a, W, "Unexpected lossless format encountered.");
      a.Ga == p && ($(0 == a.ub), a.Ga = g.$, a.G = g.G, a.ub = g.pa);
      d = g.data;
      c = g.b + g.offset;
      e = g.e - g.offset;
      $(g.e >= g.offset);
      if (4 > e[0]) return Y(a, Z, "Truncated header.");
      h = d[c + 0] | d[c + 1] << 8 | d[c + 2] << 16;
      g = a.Ac;
      g.fb = !(h & 1) + 0;
      g.Jc = h >> 1 & 7;
      g.Nc = h >> 4 & 1;
      g.Ra = h >> 5;
      if (3 < g.Jc) return Y(a, "VP8_STATUS_BITSTREAM_ERROR", "Incorrect keyframe parameters.");
      if (!g.Nc) return Y(a, "VP8_STATUS_UNSUPPORTED_FEATURE", "Frame not displayable.");
      c += 3;
      e -= 3;
      k = a.P;
      if (g.fb) {
        if (7 > e) return Y(a, "VP8_STATUS_NOT_ENOUGH_DATA", "cannot parse picture header");
        if (!(3 <=
            e && 157 == d[c + 0] && 1 == d[c + 1] && 42 == d[c + 2])) return Y(a, "VP8_STATUS_BITSTREAM_ERROR", "Bad code word");
        k.l = (d[c + 4] << 8 | d[c + 3]) & 16383;
        k.gd = d[c + 4] >> 6;
        k.v = (d[c + 6] << 8 | d[c + 5]) & 16383;
        k.hd = d[c + 6] >> 6;
        c += 7;
        e -= 7;
        a.Ma = k.l + 15 >> 4;
        a.hb = k.v + 15 >> 4;
        b.width = k.l;
        b.height = k.v;
        b.I = 0;
        b.Ua = 0;
        b.k = 0;
        b.t = 0;
        b.Ka = b.width;
        b.K = b.height;
        b.m = b.width;
        b.h = b.height;
        h = a.R;
        for (i = 0; i < h.Ta.length; ++i) h.Ta[i] = 255;
        h.z = M(Ff);
        h = a.Ca;
        $(h != p);
        h.pb = 0;
        h.ob = 0;
        h.tb = 1;
        for (i = 0; i < h.Kb.length; ++i) h.Kb[i] = 0;
        for (i = 0; i < h.Cb.length; ++i) h.Cb[i] = 0;
        a.Lb = 0
      }
      if (g.Ra >
        e) return Y(a, "VP8_STATUS_NOT_ENOUGH_DATA", "bad partition length");
      h = a.o;
      D(h, d, c, c + g.Ra);
      c += g.Ra;
      e -= g.Ra;
      g.fb && (k.uc = G(h), k.$c = G(h));
      var k = h,
        n = a.Ca,
        l = a.R;
      $(k != p);
      $(n != p);
      n.pb = G(k);
      if (n.pb) {
        n.ob = G(k);
        if (G(k)) {
          var m;
          n.tb = G(k);
          for (m = 0; m < xa; ++m) n.Kb[m] = G(k) ? ga(k, 7) : 0;
          for (m = 0; m < xa; ++m) n.Cb[m] = G(k) ? ga(k, 6) : 0
        }
        if (n.ob)
          for (m = 0; m < Ld; ++m) l.Ta[m] = G(k) ? S(k, 8) : 255
      } else n.ob = 0;
      if (k.Ab) return Y(a, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse segment header");
      k = h;
      n = a.ga;
      n.Oc = G(k);
      n.Fb = S(k, 6);
      n.kb = S(k, 3);
      n.oc = G(k);
      if (n.oc &&
        G(k)) {
        for (l = 0; l < Hc; ++l) G(k) && (n.Lc[l] = ga(k, 6));
        for (l = 0; l < Gf; ++l) G(k) && (n.Gc[l] = ga(k, 6))
      }
      a.A = 0 == n.Fb ? 0 : n.Oc ? 1 : 2;
      if (0 < a.A)
        if (a.Ca.pb)
          for (l = 0; l < xa; ++l) m = a.Ca.Cb[l], a.Ca.tb || (m += n.Fb), a.Zb[l] = m;
        else a.Zb[0] = n.Fb;
      if (k.Ab) return Y(a, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse filter header");
      var k = d,
        f = c,
        n = f,
        e = f + e;
      m = 0;
      var q = s,
        r = s;
      a.Hb = 1 << S(a.o, 2);
      q = a.Hb - 1;
      l = k;
      m = f + 3 * q;
      if (e < m) e = "VP8_STATUS_NOT_ENOUGH_DATA";
      else {
        for (r = 0; r < q; ++r) {
          var f = l,
            u = m + (k[n + 0] | k[n + 1] << 8 | k[n + 2] << 16);
          u > e && (f = k);
          D(a.ic[+r], l, m, u);
          l = f;
          m = u;
          n += 3
        }
        D(a.ic[+q], l, m, e);
        e = m < e ? "VP8_STATUS_OK" : "VP8_STATUS_SUSPENDED"
      }
      if ("VP8_STATUS_OK" != e) return Y(a, "VP8_STATUS_BITSTREAM_ERROR", "cannot parse partitions");
      q = a.o;
      e = S(q, 7);
      k = G(q) ? ga(q, 4) : 0;
      n = G(q) ? ga(q, 4) : 0;
      l = G(q) ? ga(q, 4) : 0;
      m = G(q) ? ga(q, 4) : 0;
      q = G(q) ? ga(q, 4) : 0;
      r = a.Ca;
      f = s;
      for (f = 0; f < xa; ++f) {
        u = s;
        if (r.pb) u = r.Kb[f], r.tb || (u += e);
        else if (0 < f) {
          a.yb[f] = a.yb[0];
          continue
        } else u = e;
        var v = a.yb[f];
        v.sc[0] = Ic[wa(u + k, 127)];
        v.sc[1] = Jc[wa(u + 0, 127)];
        v.sb[0] = 2 * Ic[wa(u + n, 127)];
        v.sb[1] = 101581 * Jc[wa(u + l, 127)] >> 16;
        8 > v.sb[1] &&
          (v.sb[1] = 8);
        v.qc[0] = Ic[wa(u + m, 117)];
        v.qc[1] = Jc[wa(u + q, 127)]
      }
      if (g.fb) a.Zc = 259;
      else return Y(a, Hf, "Not a key frame.");
      G(h);
      e = a.R;
      for (k = 0; k < Md; ++k)
        for (n = 0; n < Nd; ++n)
          for (l = 0; l < Kc; ++l)
            for (m = 0; m < Lc; ++m) w(h, If[k][n][l][m]) && (e.z[k][n][l][m] = S(h, 8));
      a.pc = G(h);
      a.pc && (a.Pc = S(h, 8));
      if (a.P.uc) {
        c -= 8;
        h = Mb;
        if (8 > g.Ra || 1 != d[c + 8 - 1]) return Y(a, W, "RIFF: Inconsistent extra information.");
        h = d[c + 0] << 0 | d[c + 1] << 8 | d[c + 2] << 16;
        a.fc = h;
        a.dd = p;
        a.cd = d[c + 3]
      }
      return a.za = 1
    }

    function Mc(a, b, c, d, e, g) {
      var k = b[e][c];
      if (!w(a, k[0])) return 0;
      for (;;) {
        ++e;
        if (w(a, k[1])) {
          var h;
          if (w(a, k[2])) {
            if (w(a, k[3]))
              if (w(a, k[6])) {
                h = x;
                c = w(a, k[8]);
                k = w(a, k[9 + c]);
                k = 2 * c + k;
                c = 0;
                h = Jf[k];
                var n;
                for (n = 0; n < h.length - 1; ++n) c += c + w(a, h[n]);
                c += 3 + (8 << k)
              } else w(a, k[7]) ? (c = 7 + 2 * w(a, 165), c += w(a, 145)) : c = 5 + w(a, 159);
            else c = w(a, k[4]) ? 3 + w(a, k[5]) : 2;
            k = b[Nc[e]][2]
          } else k = b[Nc[e]][1], c = 1;
          h = Kf[e - 1];
          g[g[g.length - 1] + h] = (w(a, 128) ? -c : c) * d[(0 < h) + 0];
          if (16 == e || !w(a, k[0])) return e
        } else k = b[Nc[e]][0];
        if (16 == e) return 16
      }
    }

    function ob(a, b) {
      return ((16777216 * a[0] + 65536 * a[1] + 256 * a[2] + 1 * a[3]) * Lf &
        4278190080) >> b
    }

    function Mf(a, b) {
      var c = 0;
      if (a == p) return 0;
      if (b == p) return Y(a, "VP8_STATUS_INVALID_PARAM", "NULL VP8Io parameter in VP8Decode().");
      if (!a.za && !Hd(a, b)) return 0;
      $(a.za);
      var d;
      if (b.Mb && !b.Mb(b)) Y(a, Nf, "Frame setup failed"), d = a.a;
      else {
        b.Za && (a.A = 0);
        var e = uc[a.A];
        2 == a.A ? (a.lb = 0, a.mb = 0) : (a.lb = b.t - e >> 4, a.mb = b.k - e >> 4, 0 > a.lb && (a.lb = 0), 0 > a.mb && (a.mb = 0));
        a.Ya = b.K + 15 + e >> 4;
        a.wb = b.Ka + 15 + e >> 4;
        a.wb > a.Ma && (a.wb = a.Ma);
        a.Ya > a.hb && (a.Ya = a.hb);
        d = L
      }
      if (c = d == L) {
        if (c) {
          var g;
          b: {
            a.Ja = 0;
            if (a.qb) {
              var k = a.rc;
              if (!WebPWorkerReset(k)) {
                g =
                  Y(a, cb, "thread initialization failed.");
                break b
              }
              k.Qd = a;
              k.Rd = a.oa.N;
              k.Ud = FinishRow;
              a.jb = 0 < a.A ? Od : Od - 1
            } else a.jb = Of;
            g = 1
          }
          var h;
          if (!(h = !g)) {
            var n;
            b: {
              var l = a.jb,
                m = a.Ma,
                t = 4 * m,
                q = 32 * m,
                r = m + 1,
                u = 0 < a.A ? m * (a.qb ? 2 : 1) : 0,
                v = Pf,
                C = q * (16 * l + parseInt(3 * uc[a.A] / 2, 10)),
                A = a.Ga != p ? a.P.l * a.P.v : 0,
                z = t + q + r + u + v + 384 + C + A + Pd;
              if (z != z) n = 0;
              else {
                if (z > a.Gb) {
                  a.ib = 0;
                  a.Gb = 0;
                  if (a.ib == p) {
                    n = Y(a, "VP8_STATUS_OUT_OF_MEMORY", "no memory during frame initialization.");
                    break b
                  }
                  a.Gb = z
                }
                a.dc = 205;
                a.Xc = rc(205, 16 * m);
                a.Sc = rc(205, 8 * m);
                a.Vc = rc(205, 8 * m);
                a.M =
                  u ? ic(Oc, u) : p;
                a.Sd = u ? 0 : p;
                a.oa.ha = 0;
                a.oa.M = a.M;
                $(0 == (v & Pd));
                a.Ea = rc(205, 1 * v);
                a.z = -12851;
                a.H = 16 * m;
                a.r = 8 * m;
                var Ha = uc[a.A],
                  G = Ha * a.H,
                  y = Ha / 2 * a.r;
                a.ca = U(C, 205);
                a.da = +G;
                a.aa = a.ca;
                a.ba = a.da + 16 * l * a.H + y;
                a.ra = a.aa;
                a.sa = a.ba + 8 * l * a.r + y;
                a.Xb = A ? U(A, x) : p;
                a.La = ic(Qd, r);
                a.dc = rc($b, t);
                n = 1
              }
            }
            h = !n
          }
          if (h) c = 0;
          else {
            b.width = a.P.l;
            b.height = a.P.v;
            b.w = 0;
            b.y = a.ca;
            b.D = a.da;
            b.c = a.aa;
            b.B = a.ba;
            b.S = a.ra;
            b.C = a.sa;
            b.F = a.H;
            b.Da = a.r;
            b.p = p;
            b.q = p;
            if (!Rd) {
              var B;
              for (B = -255; 255 >= B; ++B) va[255 + B] = 0 > B ? -B : B, tc[255 + B] = va[255 + B] >> 1;
              for (B = -1020; 1020 >=
                B; ++B) sc[1020 + B] = -128 > B ? -128 : 127 < B ? 127 : B;
              for (B = -112; 112 >= B; ++B) oc[112 + B] = -16 > B ? -16 : 15 < B ? 15 : B;
              for (B = -255; 510 >= B; ++B) oa[255 + B] = 0 > B ? 0 : 255 < B ? 255 : B;
              Rd = 1
            }
            mc = pf;
            Pc = qf;
            Qc = nc;
            Rc = rf;
            Sd = uf;
            Td = vf;
            Ud = yf;
            Vd = zf;
            Wd = wf;
            Xd = xf;
            Yd = Af;
            Zd = Bf;
            $d = Dd;
            ae = Ed;
            be = sf;
            ce = tf;
            c = 1
          }
        }
        if (c) a: {
          for (a.d = 0; a.d < a.Ya; ++a.d) {
            var Qf = a.ic[a.d & a.Hb - 1],
              db = a,
              F = db.La[0];
            F.X = 0;
            F.ua = 0;
            jd(db.cc, 0, $b, db.cc.length);
            db.W = (0 < db.A && db.d >= db.mb && db.d <= db.Ya) + 0;
            for (a.i = 0; a.i < a.Ma; a.i++) {
              var D;
              var H = a,
                T = Qf,
                ya = H.o,
                S = H.La[0],
                J = H.La[1 + H.i];
              H.Ca.ob && (H.Lb = !w(ya,
                H.R.Ta[0]) ? 0 + w(ya, H.R.Ta[1]) : 2 + w(ya, H.R.Ta[2]));
              J.Nb = H.pc ? w(ya, H.Pc) : 0;
              var O = H.dc;
              O[O.length - 1] = 0 + 4 * H.i;
              var Sc = H.cc;
              H.wa = !w(ya, 145);
              if (H.wa)
                for (var ga = H.Eb, ja = 0, Z = ca, Z = 0; 4 > Z; ++Z) {
                  var V = Sc[Z],
                    R;
                  for (R = 0; 4 > R; ++R) {
                    var ta = Rf[O[O[O.length - 1] + R]][V],
                      za = 0;
                    do za = Sf[2 * za + w(ya, ta[za])]; while (0 < za);
                    V = -za;
                    O[O[O.length - 1] + R] = V;
                    ga[ja] = V;
                    ja++
                  }
                  Sc[Z] = V
                } else {
                  var V = w(ya, 156) ? w(ya, 128) ? de : ee : w(ya, 163) ? fe : ge;
                  H.Eb[0] = V;
                  for (za = 0; 4 > za; ++za) O[za + O[O.length - 1]] = V;
                  for (za = 0; 4 > za; ++za) Sc[za] = V
                }
              H.Tc = !w(ya, 142) ? ge : !w(ya, 114) ? fe :
                w(ya, 183) ? de : ee;
              if (ya.Ab) D = 0;
              else {
                if (J.Nb) S.X = J.X = 0, H.wa || (S.ua = J.ua = 0), H.ja = 0, H.Oa = 0;
                else {
                  var ia = ca,
                    ka = ca,
                    sa = ca,
                    wa = Tf,
                    Aa = H.yb[H.Lb],
                    aa = H.z,
                    ma = H.La[0],
                    ua = U(4, 0),
                    xa = U(4, 0),
                    ea = U(4, 0),
                    pb = U(4, 0),
                    na = 0,
                    Ba = 0,
                    pa = ca,
                    qa = ca,
                    Sa = ca,
                    aa = rc(0, 384);
                  if (H.wa) sa = 0, wa = H.R.z[3];
                  else {
                    var ab = U(16, 0),
                      Ca = J.ua + ma.ua;
                    J.ua = ma.ua = (0 < Mc(T, H.R.z[1], Ca, Aa.sb, 0, ab)) + 0;
                    for (var sa = 1, wa = H.R.z[0], qb = ab, Ta = aa, La = U(16, s), X = s, X = 0; 4 > X; ++X) {
                      var Da = qb[0 + X] + qb[12 + X],
                        Ea = qb[4 + X] + qb[8 + X],
                        Fa = qb[4 + X] - qb[8 + X],
                        Ga = qb[0 + X] - qb[12 + X];
                      La[0 + X] = Da + Ea;
                      La[8 +
                        X] = Da - Ea;
                      La[4 + X] = Ga + Fa;
                      La[12 + X] = Ga - Fa
                    }
                    for (X = 0; 4 > X; ++X) {
                      var Oa = Ta[Ta.length - 1],
                        lb = La[0 + 4 * X] + 3,
                        Da = lb + La[3 + 4 * X],
                        Ea = La[1 + 4 * X] + La[2 + 4 * X],
                        Fa = La[1 + 4 * X] - La[2 + 4 * X],
                        Ga = lb - La[3 + 4 * X];
                      Ta[Oa + 0] = Da + Ea >> 3;
                      Ta[Oa + 16] = Ga + Fa >> 3;
                      Ta[Oa + 32] = Da - Ea >> 3;
                      Ta[Oa + 48] = Ga - Fa >> 3;
                      Ta[Ta.length - 1] += 64
                    }
                    aa[aa.length - 1] = 0
                  }
                  ea = Nb(vc[J.X & 15]);
                  pb = Nb(vc[ma.X & 15]);
                  for (qa = 0; 4 > qa; ++qa) {
                    for (var Eb = pb[qa], pa = 0; 4 > pa; ++pa) {
                      var Ca = Eb + ea[pa],
                        Ka = Mc(T, wa, Ca, Aa.sc, sa, aa);
                      ea[pa] = Eb = (0 < Ka) + 0;
                      xa[pa] = (0 != aa[aa[aa.length - 1] + 0]) + 0;
                      ua[pa] = (1 < Ka) + 0;
                      aa[aa.length -
                        1] += 16
                    }
                    pb[qa] = Eb;
                    Ba |= ob(xa, 24 - 4 * qa);
                    na |= ob(ua, 24 - 4 * qa)
                  }
                  ia = ob(ea, 24);
                  ka = ob(pb, 24);
                  ea = Nb(vc[J.X >> 4]);
                  pb = Nb(vc[ma.X >> 4]);
                  for (Sa = 0; 4 > Sa; Sa += 2) {
                    for (qa = 0; 2 > qa; ++qa) {
                      Eb = pb[Sa + qa];
                      for (pa = 0; 2 > pa; ++pa) Ca = Eb + ea[Sa + pa], Ka = Mc(T, H.R.z[2], Ca, Aa.qc, 0, aa), ea[Sa + pa] = Eb = (0 < Ka) + 0, xa[2 * qa + pa] = (0 != aa[aa[aa.length - 1] + 0]) + 0, ua[2 * qa + pa] = (1 < Ka) + 0, aa[aa.length - 1] += 16;
                      pb[Sa + qa] = Eb
                    }
                    Ba |= ob(xa, 8 - 2 * Sa);
                    na |= ob(ua, 8 - 2 * Sa)
                  }
                  ia |= ob(ea, 20);
                  ka |= ob(pb, 20);
                  J.X = ia;
                  ma.X = ka;
                  H.z = aa;
                  H.Oa = na + 0;
                  H.ja = na | Ba;
                  J.Nb = !H.ja + 0
                }
                D = !T.Ab
              }
              if (!D) {
                c = Y(a, "VP8_STATUS_NOT_ENOUGH_DATA",
                  "Premature end-of-file encountered." + a.i + " " + a.d);
                break a
              }
              var P = a,
                da = P.Ea,
                Ma = Tc,
                Ua = P.Ea,
                Va = Uc,
                Wa = P.Ea,
                Xa = he;
              if (0 < P.i) {
                for (var ba = ca, ba = -1; 16 > ba; ++ba) Ec(da, Ma + ba * f - 4, da, Ma + ba * f + 12);
                for (ba = -1; 8 > ba; ++ba) Ec(Ua, Va + ba * f - 4, Ua, Va + ba * f + 4), Ec(Wa, Xa + ba * f - 4, Wa, Xa + ba * f + 4)
              } else {
                for (ba = 0; 16 > ba; ++ba) da[Ma + ba * f - 1] = 129;
                for (ba = 0; 8 > ba; ++ba) Ua[Va + ba * f - 1] = 129, Wa[Xa + ba * f - 1] = 129;
                0 < P.d && (da[Ma - 1 - f] = Ua[Va - 1 - f] = Wa[Xa - 1 - f] = 129)
              }
              var Qa = P.Xc,
                Ra = 16 * +P.i,
                mb = P.Sc,
                vb = 8 * +P.i,
                wb = P.Vc,
                xb = 8 * +P.i,
                Za = P.z,
                fa = ca;
              if (0 < P.d) N(da, Ma - f, Qa, Ra,
                16), N(Ua, Va - f, mb, vb, 8), N(Wa, Xa - f, wb, xb, 8);
              else if (0 == P.i) {
                for (i = 0; 21 > i; ++i) da[Ma - f - 1 + i] = 127;
                for (i = 0; 9 > i; ++i) Ua[Va - f - 1 + i] = 127;
                for (i = 0; 9 > i; ++i) Wa[Xa - f - 1 + i] = 127
              }
              if (P.wa) {
                var Ya = Ma - f + 16;
                0 < P.d && (P.i >= P.Ma - 1 ? da[Ya + 0] = da[Ya + 1] = da[Ya + 2] = da[Ya + 3] = Qa[Ra + 15] : N(da, Ya + 0, Qa, Ra + 16, 4));
                for (var Fb = 0; 4 > Fb; ++Fb) da[Fb + Ya + 4 * f] = da[Fb + Ya + 4 * f] = da[Fb + Ya + 8 * f] = da[Fb + Ya + 12 * f] = da[Fb + Ya + 0];
                for (fa = 0; 16 > fa; fa++) {
                  var ac = da,
                    bc = Ma + ie[fa];
                  Uf[P.Eb[fa]](ac, bc);
                  P.Oa & 1 << fa ? mc(Za, 16 * +fa, ac, bc, 0) : P.ja & 1 << fa && Qc(Za, 16 * +fa, ac, bc)
                }
              } else {
                var $a =
                  Fd(P, P.Eb[0]);
                Vf[$a](da, Ma);
                if (P.ja)
                  for (fa = 0; 16 > fa; fa++) ac = da, bc = Ma + ie[fa], P.Oa & 1 << fa ? mc(Za, 16 * +fa, ac, bc, 0) : P.ja & 1 << fa && Qc(Za, 16 * +fa, ac, bc)
              }
              $a = Fd(P, P.Tc);
              je[$a](Ua, Va);
              je[$a](Wa, Xa);
              if (P.ja & 983040) {
                var zb = P.z,
                  Pa = 256;
                P.Oa & 983040 ? Pc(zb, Pa, Ua, Va) : Rc(zb, Pa, Ua, Va)
              }
              if (P.ja & 15728640) {
                var Ab = P.z,
                  Pa = 320;
                P.Oa & 15728640 ? Pc(Ab, Pa, Wa, Xa) : Rc(Ab, Pa, Wa, Xa)
              }
              P.d < P.hb - 1 && (N(Qa, Ra, da, Ma + 15 * f, 16), N(mb, vb, Ua, Va + 7 * f, 8), N(wb, xb, Wa, Xa + 7 * f, 8));
              var Q = a;
              if (0 < Q.A) {
                var kb = Q.M[1 + Q.i],
                  Kb = Q.La[1 + Q.i].Nb,
                  ha = Q.Zb[Q.Lb];
                Q.ga.oc && (ha +=
                  Q.ga.Lc[0], Q.wa && (ha += Q.ga.Gc[0]));
                ha = 0 > ha ? 0 : 63 < ha ? 63 : ha;
                kb.zc = ha;
                0 < Q.ga.kb && (ha = 4 < Q.ga.kb ? ha >> 2 : ha >> 1, ha > 9 - Q.ga.kb && (ha = 9 - Q.ga.kb));
                kb.yc = 1 > ha ? 1 : ha;
                kb.ab = (!Kb || Q.wa) + 0
              }
              for (var Ia = ca, Bb = 8 * Q.Ja * Q.r, Qb = Q.ca, Ub = Q.da + 16 * Q.i + 16 * Q.Ja * Q.H, Wb = Q.aa, Xb = Q.ba + 8 * Q.i + Bb, Yb = Q.ra, Zb = Q.sa + 8 * Q.i + Bb, Ia = 0; 16 > Ia; ++Ia) N(Qb, Ub + Ia * Q.H, Q.Ea, +Tc + Ia * f, 16);
              for (Ia = 0; 8 > Ia; ++Ia) N(Wb, Xb + Ia * Q.r, Q.Ea, +Uc + Ia * f, 8), N(Yb, Zb + Ia * Q.r, Q.Ea, +he + Ia * f, 8)
            }
            var K = a,
              I = b,
              cc = 1,
              eb = K.oa;
            if (K.qb) {
              var nb = K.rc,
                cc = cc & WebPWorkerSync(nb);
              $(nb.a == OK);
              if (cc) {
                eb.N =
                  I;
                eb.ha = K.Ja;
                eb.d = K.d;
                eb.W = K.W;
                if (eb.W) {
                  var hc = eb.M;
                  eb.M = K.M;
                  K.M = hc
                }
                WebPWorkerLaunch(nb);
                ++K.Ja == K.jb && (K.Ja = 0)
              }
            } else {
              eb.d = K.d;
              eb.W = K.W;
              b: {
                var Hb = 1,
                  rb = K.oa,
                  ib = uc[K.A],
                  yb = ib * K.H,
                  dc = parseInt(ib / 2) * K.r,
                  Ib = 16 * rb.ha * K.H,
                  jb = 8 * rb.ha * K.r,
                  Jb = K.ca,
                  Lb = K.da - yb + Ib,
                  Ob = K.aa,
                  Pb = K.ba - dc + jb,
                  Rb = K.ra,
                  Sb = K.sa - dc + jb,
                  jc = 0 == rb.d,
                  Tb = (rb.d >= K.hb - 1) + 0,
                  ra = 16 * rb.d,
                  fb = 16 * (rb.d + 1);
                if (rb.W) {
                  var pc = K,
                    wc = s,
                    kc = pc.oa.d;
                  $(pc.oa.W);
                  for (wc = pc.lb; wc < pc.wb; ++wc) {
                    var Na = pc,
                      ec = wc,
                      Vb = kc,
                      xc = Na.oa,
                      gb = Na.H,
                      fc = xc.M[1 + ec],
                      sb = Na.ca,
                      tb = Na.da + 16 * xc.ha *
                      gb + 16 * ec,
                      Gb = fc.zc,
                      hb = fc.yc,
                      Ja = 2 * Gb + hb;
                    if (0 != Gb)
                      if (1 == Na.A) 0 < ec && ae(sb, tb, gb, Ja + 4), fc.ab && ce(sb, tb, gb, Ja), 0 < Vb && $d(sb, tb, gb, Ja + 4), fc.ab && be(sb, tb, gb, Ja);
                      else {
                        var gc = Na.r,
                          yc = Na.aa,
                          zc = Na.ba + 8 * xc.ha * gc + 8 * ec,
                          Ac = Na.ra,
                          Bc = Na.sa + 8 * xc.ha * gc + 8 * ec,
                          ub = Na.Ac.fb ? 40 <= Gb ? 2 : 15 <= Gb ? 1 : 0 : 40 <= Gb ? 3 : 20 <= Gb ? 2 : 15 <= Gb ? 1 : 0;
                        0 < ec && (Td(sb, tb, gb, Ja + 4, hb, ub), Vd(yc, zc, Ac, Bc, gc, Ja + 4, hb, ub));
                        fc.ab && (Xd(sb, tb, gb, Ja, hb, ub), Zd(yc, zc, Ac, Bc, gc, Ja, hb, ub));
                        0 < Vb && (Sd(sb, tb, gb, Ja + 4, hb, ub), Ud(yc, zc, Ac, Bc, gc, Ja + 4, hb, ub));
                        fc.ab && (Wd(sb, tb, gb,
                          Ja, hb, ub), Yd(yc, zc, Ac, Bc, gc, Ja, hb, ub))
                      }
                  }
                }
                if (I.put) {
                  jc ? (I.y = K.ca, I.D = K.da + Ib, I.c = K.aa, I.B = K.ba + jb, I.S = K.ra, I.C = K.sa + jb) : (ra -= ib, I.y = Jb, I.D = Lb, I.c = Ob, I.B = Pb, I.S = Rb, I.C = Sb);
                  Tb || (fb -= ib);
                  fb > I.K && (fb = I.K);
                  if (K.Ga != p && ra < fb && (0 == ra ? (I.p = qd(K, ra, fb - ra), I.q = 0) : I.q = qd(K, ra, fb - ra), I.p == p)) {
                    cc = Y(K, W, "Could not decode alpha data.");
                    break b
                  }
                  if (ra < I.k) {
                    var qc = I.k - ra,
                      ra = I.k;
                    $(!(qc & 1));
                    I.D += K.H * qc;
                    I.B += K.r * (qc >> 1);
                    I.C += K.r * (qc >> 1);
                    I.p != p && (I.q += I.width * qc)
                  }
                  ra < fb && (I.D += I.t, I.B += I.t >> 1, I.C += I.t >> 1, I.p != p && (I.q += I.t),
                    I.w = ra - I.k, I.m = I.Ka - I.t, I.h = fb - ra, Hb = I.put(I))
                }
                rb.ha + 1 == K.jb && !Tb && (N(K.ca, K.da - yb, Jb, Lb + 16 * K.H, yb), N(K.aa, K.ba - dc, Ob, Pb + 8 * K.r, dc), N(K.ra, K.sa - dc, Rb, Sb + 8 * K.r, dc));
                cc = Hb
              }
            }
            if (!cc) {
              c = Y(a, "VP8_STATUS_USER_ABORT", "Output aborted.");
              break a
            }
          }
          var Cb;
          if (!(Cb = a.qb && !WebPWorkerSync(a.rc))) {
            var Db;
            if (Db = 0 < a.fc) $(a), $(0 < a.fc), Db = !1;
            Cb = Db
          }
          c = Cb ? 0 : 1
        }
        var lc = c;
        b.Pb && b.Pb(b);
        c = lc & 1
      }
      if (!c) return ke(a), 0;
      a.za = 0;
      return c
    }

    function ke(a) {
      a != p && (a.ib && (a.ib = 0), a.ib = p, a.Gb = 0, a.za = 0)
    }

    function Aa(a, b) {
      return a + (1 << b) - 1 >> b
    }

    function hc(a, b, c, d, e) {
      var g = vb[c] + wb[b] >> ea;
      b = xb[b];
      d[e + 0] = ia[a + Za[c] - J];
      d[e + 1] = ia[a + g - J];
      d[e + 2] = ia[a + b - J]
    }

    function le(a, b, c, d, e) {
      var g = vb[c] + wb[b] >> ea;
      b = xb[b];
      d[e + 0] = ia[a + Za[c] - J] & 248 | ia[a + g - J] >> 5;
      d[e + 1] = ia[a + g - J] << 3 & 224 | ia[a + b - J] >> 3
    }

    function me(a, b, c, d, e) {
      d[e + 0] = 255;
      hc(a, b, c, d, e + 1)
    }

    function ne(a, b, c, d, e) {
      var g = xb[b];
      d[e + 0] = Hb[a + Za[c] - J] << 4 | Hb[a + (vb[c] + wb[b] >> ea) - J];
      d[e + 1] = 15 | Hb[a + g - J] << 4
    }

    function Vc(a, b, c, d, e) {
      var g = Za[c];
      c = vb[c] + wb[b] >> ea;
      d[e + 0] = ia[a + xb[b] - J];
      d[e + 1] = ia[a + c - J];
      d[e + 2] = ia[a + g - J]
    }

    function oe(a, b, c, d, e) {
      Vc(a, b, c, d, e);
      d[e + 3] = 255
    }

    function pe(a, b, c, d, e) {
      hc(a, b, c, d, e);
      d[e + 3] = 255
    }

    function ib(a, b, c) {
      a[b] = ((((a[b] & 4278255360) >>> 0) + ((c & 4278255360) >>> 0) & 4278255360) >>> 0 | (a[b] & 16711935) + (c & 16711935) & 16711935) >>> 0
    }

    function ka(a, b) {
      return (((a ^ b) & 4278124286) >>> 1) + ((a & b) >>> 0) >>> 0
    }

    function $a(a) {
      return 256 > a && 0 < a ? a : 0 >= a ? 0 : ~a >> 24 & 255
    }

    function yb(a, b) {
      return $a(a + parseInt((a - b) / 2, 10))
    }

    function Wc() {
      return qe
    }

    function Xc(a, b) {
      a &= 255;
      b &= 255;
      127 < a && (a -= 256);
      127 < b && (b -= 256);
      return a * b >>> 5
    }

    function re(a,
      b, c, d, e, g, k) {
      var h = s,
        n = 8 >> a.n,
        l = a.U,
        f = a.u;
      if (8 > n) {
        a = (1 << a.n) - 1;
        for (var t = (1 << n) - 1, h = b; h < c; ++h) {
          b = 0;
          for (var q = s, q = 0; q < l; ++q) 0 == (q & a) && (b = d[e++] >> 8 & 255), g[k++] = f[b & t], b >>= n
        }
      } else
        for (h = b; h < c; ++h)
          for (q = 0; q < l; ++q) g[k++] = f[d[e++] >> 8 & 255]
    }

    function se(a, b, c, d, e) {
      for (c = b + c; b < c;) {
        var g = a[b++];
        d[e++] = g >> 16 & 255;
        d[e++] = g >> 8 & 255;
        d[e++] = g >> 0 & 255;
        d[e++] = g >> 24 & 255
      }
    }

    function te(a, b, c, d, e) {
      for (c = b + c; b < c;) {
        var g = a[b++];
        d[e++] = g >> 16 & 240 | g >> 12 & 15;
        d[e++] = g >> 0 & 240 | g >> 28 & 15
      }
    }

    function Ib(a, b, c, d, e) {
      for (c = b + c; b < c;) {
        var g =
          a[b++];
        d[e++] = g >> 24 & 255;
        d[e++] = g >> 16 & 255;
        d[e++] = g >> 8 & 255;
        d[e++] = g >> 0 & 255
      }
    }

    function ue(a, b, c, d) {
      if (T(a, 8) != ve) return 0;
      b[0] = T(a, we) + 1;
      c[0] = T(a, we) + 1;
      d[0] = T(a, 1);
      T(a, Wf);
      return 1
    }

    function xe(a, b) {
      var c = s;
      if (4 > a) return a + 1;
      c = a - 2 >> 1;
      return (2 + (a & 1) << c) + T(b, c) + 1
    }

    function Oa(a, b) {
      if (b.Q + 8 > b.ya) {
        var c = a.Y,
          d = 0;
        for ($(c != p); 0 != c[d].s;) {
          var e = c,
            g = b,
            k = g.T >> g.g & 1;
          g.L ? g.fa = 1 : (++g.g, 8 <= g.g && Sb(g), g.Q == g.ya && 32 == g.g && (g.L = 1));
          d = d + e[d].s + k
        }
        return c[d].kc
      }
      c = a.Y;
      d = 0;
      for ($(c != p); 0 != c[d].s;) e = c, g = b.T >> b.g & 1, ++b.g, d = d +
        e[d].s + g;
      return c[d].kc
    }

    function zb(a, b) {
      if (a != p)
        for (var c = s, d = s, c = 0; c < b; ++c)
          for (var e = a[c].va, d = 0; d < Yc; ++d) ja(e[d])
    }

    function ye(a, b, c) {
      b = 0 == a.eb ? 0 : a.ac[a.bd + a.Ec * (c >> a.eb) + (b >> a.eb)];
      $(b < a.hc);
      return a.Db[+b]
    }

    function ze(a, b, c, d) {
      var e = a.Na,
        g = a.O,
        k = g + b,
        h = c,
        f = d;
      d = a.Xa;
      c = a.vb;
      for (N(d, c, h, f, a.l * b); 0 < e--;) {
        b = a.nc[e];
        var l = g,
          m = k,
          t = h,
          q = f,
          f = d,
          h = c;
        $(l < m);
        $(m <= b.Vb);
        switch (b.Qc) {
          case Ae:
            t = 0;
            for (b = h + (m - l) * b.U; h < b;) {
              var m = f,
                q = h,
                r = m[q] >> 8 & 255,
                u = (m[q] & 16711935) >>> 0,
                u = u + (r << 16 | r),
                u = u & 16711935;
              f[h++] = ((m[q] & 4278255360) >>>
                0 | u) >>> 0;
              32 == l && t++
            }
            break;
          case Be:
            var v = b,
              C = l,
              t = m,
              q = f,
              r = h,
              u = v.U;
            if (0 == C) {
              var A = s;
              ib(q, r, qe);
              for (A = 1; A < u; ++A) ib(q, r + A, q[r + A - 1]);
              r += u;
              ++C
            }
            for (var z = (1 << v.n) - 1, Ha = Aa(u, v.n), w = v.u, v = +(C >> v.n) * Ha; C < t;) {
              var y = w,
                B = v,
                G = p;
              ib(q, r, q[r - u + 0]);
              G = Ce[y[B++] >> 8 & 15];
              for (A = 1; A < u; ++A) {
                var F = E;
                0 == (A & z) && (G = Ce[y[B++] >> 8 & 15]);
                F = G(q[r + A - 1], q, r + A - u);
                ib(q, r + A, F)
              }
              r += u;
              ++C;
              0 == (C & z) && (v += Ha)
            }
            m != b.Vb && (b = b.U, N(f, h - b, f, h + (m - l - 1) * b, b));
            break;
          case De:
            t = b.U;
            q = (1 << b.n) - 1;
            r = Aa(t, b.n);
            u = b.u;
            for (b = +(l >> b.n) * r; l < m;) {
              A = u;
              C = b;
              z = M(Xf);
              Ha =
                s;
              for (Ha = 0; Ha < t; ++Ha) 0 == (Ha & q) && (w = A[C++], v = z, v.Cc = w >> 0 & 255, v.Bc = w >> 8 & 255, v.Kc = w >> 16 & 255), w = f[h + Ha], v = w >>> 8, y = w >>> 16, B = w, y += Xc(z.Cc, v), y &= 255, B += Xc(z.Bc, v), B += Xc(z.Kc, y), B &= 255, f[h + Ha] = (w & 4278255360 | y << 16 | B) >>> 0;
              h += t;
              ++l;
              0 == (l & q) && (b += r)
            }
            break;
          case Ee:
            t == f && 0 < b.n ? (t = (m - l) * Aa(b.U, b.n), q = h + (m - l) * b.U - t, memmove(f, q, f, h, t), re(b, l, m, f, q, f, h)) : re(b, l, m, t, q, f, h)
        }
        h = d;
        f = c
      }
    }

    function Yf(a, b) {
      var c = a.V,
        d = a.Ha + a.l * a.O,
        e = b - a.O;
      if (!(0 >= e)) {
        ze(a, e, c, d);
        var g = a.N,
          c = a.Xa,
          k = [a.vb];
        var d = a.O,
          e = b,
          h = k,
          f = g.width;
        $(d < e);
        $(g.t < g.Ka);
        e > g.K && (e = g.K);
        if (d < g.k) {
          var l = g.k - d,
            d = g.k;
          h[0] += f * l
        }
        d >= e ? d = 0 : (h[0] += g.t, g.w = d - g.k, g.m = g.Ka - g.t, g.h = e - d, d = 1);
        if (d) {
          k = k[0];
          d = a.Ib;
          e = g.width;
          if (d.J < ua) {
            var m = d.c.RGBA,
              h = m.ma,
              t = m.Sa + a.xa * m.f;
            if (g.I) c = EmitRescaledRows(a, c, k, e, g.h, h, t, m.f);
            else {
              for (var f = d.J, l = g.m, g = g.h, m = m.f, q = g; 0 < q--;) {
                var r = c,
                  u = k,
                  v = l,
                  C = h,
                  A = t;
                switch (f) {
                  case Qa:
                    for (v = u + v; u < v;) {
                      var z = r[u++];
                      C[A++] = z >> 16 & 255;
                      C[A++] = z >> 8 & 255;
                      C[A++] = z >> 0 & 255
                    }
                    break;
                  case jb:
                    se(r, u, v, C, A);
                    break;
                  case Ob:
                    se(r, u, v, C, A);
                    WebPApplyAlphaMultiply(C, 0, v,
                      1, 0);
                    break;
                  case Zc:
                    for (v = u + v; u < v;) z = r[u++], C[A++] = z >> 0 & 255, C[A++] = z >> 8 & 255, C[A++] = z >> 16 & 255;
                    break;
                  case Pa:
                    Ib(r, u, v, C, A);
                    break;
                  case Pb:
                    Ib(r, u, v, C, A);
                    WebPApplyAlphaMultiply(C, 0, v, 1, 0);
                    break;
                  case Ab:
                    Ib(r, u, v, C, A);
                    break;
                  case Bb:
                    Ib(r, u, v, C, A);
                    WebPApplyAlphaMultiply(C, 1, v, 1, 0);
                    break;
                  case kb:
                    te(r, u, v, C, A);
                    break;
                  case Qb:
                    te(r, u, v, C, A);
                    WebPApplyAlphaMultiply4444(C, v, 1, 0);
                    break;
                  case Fe:
                    for (v = u + v; u < v;) z = r[u++], C[A++] = z >> 16 & 248 | z >> 13 & 7, C[A++] = z >> 5 & 224 | z >> 3 & 31;
                    break;
                  default:
                    $(0)
                }
                k += e;
                t += m
              }
              c = g
            }
            a.xa += c
          } else a.xa =
            g.I ? EmitRescaledRowsYUVA(a, c, k, e, g.h) : EmitRowsYUVA(a, c, k, e, g.m, g.h);
          $(a.xa <= d.height)
        }
        a.O = b;
        $(a.O <= a.v)
      }
    }

    function lc(a, b, c, d, e, g) {
      var k = 1,
        h = 0,
        f = 0,
        l = a.o,
        m = a.cb,
        t = m.Db,
        q = c,
        r = c;
      c += d * e;
      e = Ba + Ge;
      var u = e + m.xb,
        v = 0 < m.xb ? m.Yb : p,
        C = m.Dc,
        A = !1;
      $(t != p);
      a: for (; !l.L && q < c;) {
        var z = s;
        A || (0 == (h & C) && (t = ye(m, h, f)), Da(l), z = Oa(t.va[Zf], l));
        if (z < Ba || A) {
          if (!A) {
            var w = k = A = s,
              y = s;
            Da(l);
            A = Oa(t.va[$f], l);
            k = z;
            Da(l);
            w = Oa(t.va[ag], l);
            Da(l);
            y = Oa(t.va[bg], l);
            b[q] = (y << 24 >>> 0) + (A << 16) + (k << 8) + w
          }
          A = !1;
          ++q;
          ++h;
          if (h >= d && (h = 0, ++f, g != p && 0 == f %
              $c && g(a, f), v != p))
            for (; r < q;) k = b[r++], v.ea[ad * k >>> v.bb] = k
        } else if (z < e) {
          w = w = s;
          k = xe(z - Ba, l);
          z = Oa(t.va[cg], l);
          Da(l);
          w = xe(z, l);
          w > He ? w -= He : (z = dg[w - 1], z = (z >> 4) * d + (8 - (z & 15)), w = 1 <= z ? z : 1);
          z = s;
          for (z = 0; z < k; ++z) b[q + z] = b[q + z - w];
          q += k;
          for (h += k; h >= d;) h -= d, ++f, g != p && 0 == f % $c && g(a, f);
          if (q < c && (t = ye(m, h, f), v != p))
            for (; r < q;) k = b[r++], v.ea[ad * k >>> v.bb] = k
        } else if (z < u) {
          A = z - e;
          for ($(v != p); r < q;) z = b[r++], v.ea[ad * z >>> v.bb] = z;
          z = b;
          w = q;
          y = v;
          $(A <= -1 >>> y.bb);
          z[w] = y.ea[A];
          A = !0;
          continue a
        }(k = !l.fa) || End
      }
      g != p && g(a, f);
      l.fa || !k || l.L && q < c ? (k =
        0, a.a = !l.L ? W : Ie) : q == c && (a.Ob = Db);
      return k
    }

    function bd(a) {
      $(a);
      a.ac = p;
      zb(a.Db, a.hc);
      var b = a.Yb;
      b != p && (b.ea = p, b.ea = p);
      $(a)
    }

    function sd() {
      var a = M(eg);
      if (a == p) return p;
      a.a = L;
      a.Wa = cd;
      a.Ob = cd;
      return a
    }

    function sa(a) {
      var b = s;
      if (a != p) {
        bd(a.cb);
        a.V = p;
        a.V = p;
        for (b = 0; b < a.Na; ++b) {
          var c = a.nc[b];
          c.u = p;
          c.u = p
        }
        a.Na = 0;
        a.Ub = 0;
        a.Mc = p;
        a.Mc = p;
        a.Ib = p
      }
    }

    function Ka(a, b, c, d, e) {
      var g = 1;
      a = [a];
      b = [b];
      for (var k = d.o, h = d.cb, f = p, l = p, l = 0;;) {
        if (c)
          for (; g && T(k, 1);) {
            var m = a,
              t = b,
              q = d,
              r = 1,
              u = q.o,
              g = q.nc[q.Na],
              v = T(u, 2);
            if (q.Ub & 1 << v) g = 0;
            else {
              q.Ub |=
                1 << v;
              g.Qc = v;
              g.U = m[0];
              g.Vb = t[0];
              g.u = [p];
              g.b = 0;
              ++q.Na;
              $(q.Na <= Je);
              switch (v) {
                case Be:
                case De:
                  g.n = T(u, 3) + 2;
                  r = Ka(Aa(g.U, g.n), Aa(g.Vb, g.n), 0, q, g.u);
                  break;
                case Ee:
                  t = T(u, 8) + 1;
                  r = 16 < t ? 0 : 4 < t ? 1 : 2 < t ? 2 : 3;
                  m[0] = Aa(g.U, r);
                  g.n = r;
                  if (m = r = Ka(t, 1, 0, q, g.u))
                    if (m = t, q = g, r = s, t = 1 << (8 >>> q.n) >>> 0, u = Array(t), u == p) m = 0;
                    else {
                      var v = q.u[0],
                        C = q.b;
                      u[0] = q.u[0][q.b + 0];
                      for (r = 1; r < m; ++r) u[r] = ((((v[C + r] & 4278255360) >>> 0) + ((u[r - 1] & 4278255360) >>> 0) & 4278255360) >>> 0 | (v[C + r] & 16711935) + (u[r - 1] & 16711935) & 16711935) >>> 0;
                      for (; r < t; ++r) u[r] = 0;
                      q.u[0] = p;
                      q.b = p;
                      q.u[0] = u;
                      q.b = 0;
                      m = 1
                    }
                  r = m;
                  break;
                case Ae:
                  break;
                default:
                  $(0)
              }
              g.u = g.u[0];
              g = r
            }
          }
        if (g && T(k, 1) && (l = T(k, 4), g = 1 <= l && l <= fg, !g)) {
          d.a = W;
          break
        }
        if (g) a: {
          var g = d,
            A = a[0],
            z = b[0],
            m = l,
            C = v = s,
            C = g.o,
            q = g.cb,
            r = [p],
            t = p,
            u = 1;
          if (c && T(C, 1)) {
            var v = T(C, 3) + 2,
              A = Aa(A, v),
              w = Aa(z, v),
              z = A * w;
            if (!Ka(A, w, 0, g, r)) {
              g.a = W;
              zb(t, u);
              g = 0;
              break a
            }
            r = r[0];
            q.eb = v;
            for (v = 0; v < z; ++v) A = r[v] >>> 8 & 65535, r[v] = A, A >= u && (u = A + 1)
          }
          if (C.fa) zb(t, u), g = 0;
          else if ($(65536 >= u), t = ld(u, gg), t == p) g.a = cb, zb(t, u), g = 0;
          else {
            for (v = 0; v < u; ++v) {
              z = t[v].va;
              for (C = 0; C < Yc; ++C) {
                A = hg[C];
                0 == C && 0 < m && (A += 1 << m);
                b: {
                  var y = A,
                    A = g,
                    G = z[+C],
                    B = 0,
                    w = A.o;
                  if (T(w, 1)) {
                    var F = Array(2),
                      D = Array(2),
                      L = Array(2),
                      B = T(w, 1) + 1,
                      J = T(w, 1);
                    F[0] = T(w, 0 == J ? 1 : 8);
                    D[0] = 0;
                    L[0] = B - 1;
                    2 == B && (F[1] = T(w, 8), D[1] = 1, L[1] = B - 1);
                    c: {
                      var J = 0,
                        H = s;
                      $(G != p);
                      $(L != p);
                      $(D != p);
                      $(F != p);
                      if (nd(G, B)) {
                        for (H = 0; H < B; ++H)
                          if (D[H] != pd) {
                            if (0 > F[H] || F[H] >= y) {
                              (J = J && ma(G)) || ja(G);
                              B = J;
                              break c
                            }
                            if (!jc(G, F[H], D[H], L[H])) {
                              (J = J && ma(G)) || ja(G);
                              B = J;
                              break c
                            }
                          }(J = (J = 1) && ma(G)) || ja(G);
                        B = J
                      } else B = 0
                    }
                  } else {
                    B = s;
                    D = [];
                    F = T(w, 4) + 4;
                    if (F > Ke) {
                      A.a = W;
                      A = 0;
                      break b
                    }
                    L = Array(y);
                    if (L == p) {
                      A.a =
                        cb;
                      A = 0;
                      break b
                    }
                    for (B = 0; B < F; ++B) D[ig[B]] = T(w, 3);
                    c: {
                      var B = A,
                        O = D,
                        D = y,
                        F = L,
                        J = 0,
                        H = B.o,
                        S = s,
                        V = s,
                        Y = jg,
                        Z = M(Le);
                      if (od(Z, O, Ke)) {
                        if (T(H, 1)) {
                          if (S = 2 + 2 * T(H, 3), V = 2 + T(H, S), V > D) {
                            B.a = W;
                            ja(Z);
                            B = J;
                            break c
                          }
                        } else V = D;
                        for (S = 0; S < D;) {
                          var R = s;
                          if (0 == V--) break;
                          Da(H);
                          R = Oa(Z, H);
                          if (R < Me) F[S++] = R, 0 != R && (Y = R);
                          else {
                            var O = R == kg,
                              R = R - Me,
                              ea = lg[R],
                              R = T(H, mg[R]) + ea;
                            if (S + R > D) {
                              B.a = W;
                              ja(Z);
                              B = J;
                              break c
                            }
                            for (O = O ? Y : 0; 0 < R--;) F[S++] = O
                          }
                        }
                        J = 1;
                        ja(Z);
                        B = J
                      } else B.a = W, B = 0
                    }
                    B && (B = od(G, L, y))
                  }(B = B && !w.fa) ? A = 1: (A.a = W, A = 0)
                }
                if (!A) {
                  zb(t, u);
                  g = 0;
                  break a
                }
              }
            }
            q.ac = r;
            q.hc =
              u;
            q.Db = t;
            g = 1
          }
        }
        if (!g) {
          d.a = W;
          break
        }
        if (0 < l) {
          if (h.xb = 1 << l, m = h.Yb, q = 1 << l, $(m != p), $(0 < l), m.ea = U(q, 0), m.ea == p ? l = 0 : (m.bb = 32 - l, l = 1), !l) {
            d.a = cb;
            g = 0;
            break
          }
        } else h.xb = 0;
        l = d;
        m = a[0];
        q = b[0];
        r = l.cb;
        t = r.eb;
        l.l = m;
        l.v = q;
        r.Ec = Aa(m, t);
        r.Dc = 0 == t ? -1 : (1 << t) - 1;
        if (c) {
          d.Ob = Cb;
          break
        }
        f = Array(a * b);
        l = 0;
        if (f == p) {
          d.a = cb;
          g = 0;
          break
        }
        g = (g = lc(d, f, l, a, b, p)) && !k.fa;
        break
      }
      g ? (e != p ? e[0] = f : ($(f == p), $(c)), c || bd(h)) : (bd(h), d.a == W && d.o.L && (d.a = Ie));
      return g
    }

    function xd(a, b) {
      var c = a.l * a.v,
        d = c + b + b * $c;
      $(a.l <= b);
      a.V = Array(d);
      a.Ha = 0;
      if (a.V == p) return a.Xa =
        p, a.a = cb, 0;
      a.Xa = a.V;
      a.vb = a.Ha + c + b;
      return 1
    }

    function mf(a, b) {
      var c = b - a.O,
        d = a.V,
        e = a.Ha + a.l * a.O;
      if (!(0 >= c)) {
        ze(a, c, d, e);
        for (var e = a.N.width, c = e * c, d = a.N.ka, e = a.N.fd + e * a.O, g = a.Xa, k = a.vb, h = s, h = 0; h < c; ++h) d[e + h] = g[k + h] >>> 8 & 255;
        a.O = a.xa = b
      }
    }

    function ng(a, b) {
      var c = [s],
        d = [s],
        e = [s];
      if (a == p) return 0;
      if (b == p) return a.a = ta, 0;
      a.N = b;
      a.a = L;
      Rb(a.o, b.data, b.b, b.e);
      if (!ue(a.o, c, d, e)) return a.a = W, sa(a), $(a.a != L), 0;
      a.Ob = cd;
      b.width = c[0];
      b.height = d[0];
      a.Wa = Cb;
      return !Ka(c[0], d[0], 1, a, p) ? (sa(a), $(a.a != L), 0) : 1
    }

    function og(a) {
      var b =
        p,
        c = p;
      if (a == p) return 0;
      b = a.N;
      $(b != p);
      c = b.ka;
      $(c != p);
      a.Ib = c.j;
      a.Hc = c.Hc;
      $(a.Ib != p);
      if (!Ne(c.Qa, b, Pa)) return a.a = ta, sa(a), $(a.a != L), 0;
      if (!xd(a, b.width) || b.I && !AllocateAndInitRescaler(a, b)) return sa(a), $(a.a != L), 0;
      a.Wa = Db;
      if (!lc(a, a.V, a.Ha, a.l, a.v, Yf)) return sa(a), $(a.a != L), 0;
      c.ec = a.xa;
      sa(a);
      return 1
    }

    function wa(a, b) {
      return 0 > a ? 0 : a > b ? b : a
    }

    function ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, C, w, z) {
      var y, G = C - 1 >> 1,
        F = e[g + 0] | k[h + 0] << 16,
        B = f[l + 0] | m[t + 0] << 16;
      if (a) {
        var D = 3 * F + B + 131074 >> 2;
        w(a[b + 0], D & 255, D >> 16, q, r)
      }
      c && (D =
        3 * B + F + 131074 >> 2, w(c[d + 0], D & 255, D >> 16, u, v));
      for (y = 1; y <= G; ++y) {
        var J = e[g + y] | k[h + y] << 16,
          L = f[l + y] | m[t + y] << 16,
          D = F + J + B + L + 524296,
          O = D + 2 * (J + B) >> 3,
          H = D + 2 * (F + L) >> 3;
        a && (D = O + F >> 1, F = H + J >> 1, w(a[b + 2 * y - 1], D & 255, D >> 16, q, r + (2 * y - 1) * z), w(a[b + 2 * y - 0], F & 255, F >> 16, q, r + (2 * y - 0) * z));
        c && (D = H + B >> 1, F = O + L >> 1, w(c[d + 2 * y - 1], D & 255, D >> 16, u, v + (2 * y - 1) * z), w(c[d + 2 * y + 0], F & 255, F >> 16, u, v + (2 * y + 0) * z));
        F = J;
        B = L
      }
      C & 1 || (a && (D = 3 * F + B + 131074 >> 2, w(a[b + C - 1], D & 255, D >> 16, q, r + (C - 1) * z)), c && (D = 3 * B + F + 131074 >> 2, w(c[d + C - 1], D & 255, D >> 16, u, v + (C - 1) * z)))
    }

    function pg(a,
      b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w, hc, 3)
    }

    function qg(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w, Vc, 3)
    }

    function Oe(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w, pe, 4)
    }

    function Pe(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w, oe, 4)
    }

    function Qe(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w, me, 4)
    }

    function Re(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h,
        f, l, m, t, q, r, u, v, w, ne, 2)
    }

    function rg(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w) {
      ab(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u, v, w, le, 2)
    }

    function Ca(a, b, c, d, e, g, k, h, f, l, m, t, q, r, u) {
      var v;
      for (v = 0; v < q - 1; v += 2) r(a[b + 0], e[g + 0], k[h + 0], f, l), r(a[b + 1], e[g + 0], k[h + 0], f, l + u), r(c[d + 0], e[g + 0], k[h + 0], m, t), r(c[d + 1], e[g + 0], k[h + 0], m, t + u), b += 2, d += 2, g++, h++, l += 2 * u, t += 2 * u;
      v == q - 1 && (r(a[b + 0], e[g + 0], k[h + 0], f, l), r(c[d + 0], e[g + 0], k[h + 0], m, t))
    }

    function Se(a, b, c, d, e, g, k, f, n, l, m, t, q) {
      Ca(a, b, c, d, e, g, k, f, n, l, m, t, q, pe, 4)
    }

    function Te(a, b, c, d, e, g, k, f, n, l,
      m, t, q) {
      Ca(a, b, c, d, e, g, k, f, n, l, m, t, q, oe, 4)
    }

    function Ue(a, b, c, d, e, g, k, f, n, l, m, t, q) {
      Ca(a, b, c, d, e, g, k, f, n, l, m, t, q, me, 4)
    }

    function Ve(a, b, c, d, e, g, k, f, n, l, m, t, q) {
      Ca(a, b, c, d, e, g, k, f, n, l, m, t, q, ne, 2)
    }

    function sg(a, b, c, d, e, g) {
      for (; 0 < e--;) {
        for (var k = a, f = b + (c ? 1 : 0), n = a, l = b + (c ? 0 : 3), m = s, m = 0; m < d; ++m) {
          var t = n[l + 4 * m];
          if (255 != t) {
            var t = 32897 * t,
              q = k,
              r = f + 4 * m + 0;
            k[f + 4 * m + 0] * t >>> 23;
            q[r] = ca;
            q = k;
            r = f + 4 * m + 1;
            k[f + 4 * m + 1] * t >>> 23;
            q[r] = ca;
            q = k;
            r = f + 4 * m + 2;
            k[f + 4 * m + 2] * t >>> 23;
            q[r] = ca
          }
        }
        b += g
      }
    }

    function tg(a, b) {
      var c = b.j.c.Va,
        d = c.y,
        e = c.D + a.w * c.F,
        g = c.c,
        k = c.B + (a.w >> 1) * c.nb,
        f = c.S,
        n = c.C + (a.w >> 1) * c.rb,
        l = a.m,
        m = a.h,
        t = parseInt((l + 1) / 2, 10),
        q = parseInt((m + 1) / 2, 10),
        r;
      for (r = 0; r < m; ++r) N(d, e + r * c.F, a.y, a.D + r * a.F, l);
      for (r = 0; r < q; ++r) N(g, k + r * c.nb, a.c, a.B + r * a.Da, t), N(f, n + r * c.rb, a.S, a.C + r * a.Da, t);
      return a.h
    }

    function ug(a, b) {
      var c = b.j,
        d = c.c.RGBA,
        e = d.ma,
        g = d.Sa + a.w * d.f,
        k = a.y,
        f = a.D,
        n = a.c,
        l = a.B,
        m = a.S,
        t = a.C,
        c = vg[c.J],
        q = a.m,
        r = a.h - 1,
        u;
      for (u = 0; u < r; u += 2) c(k, f, k, f + a.F, n, l, m, t, e, g, e, g + d.f, q), f += 2 * a.F, l += a.Da, t += a.Da, g += 2 * d.f;
      u == r && c(k, f, k, f, n, l, m, t, e, g, e, g, q);
      return a.h
    }

    function wg(a, b) {
      var c = a.h,
        d = b.j.c.RGBA,
        e = d.ma,
        g = d.Sa + a.w * d.f,
        k = V[b.j.J],
        f = a.y,
        n = a.D,
        l = a.c,
        m = a.B,
        t = a.S,
        q = a.C,
        r = b.Qb,
        u = b.Rb,
        v = b.lc,
        w = b.mc,
        A = a.w,
        z = a.w + a.h,
        y = a.m,
        D = parseInt((y + 1) / 2, 10);
      0 == A ? k(p, p, f, n, l, m, t, q, l, m, t, q, p, p, e, g, y) : (k(b.Sb, b.Tb, f, n, r, u, v, w, l, m, t, q, e, g - d.f, e, g, y), ++c);
      for (; A + 2 < z; A += 2) r = l, u = m, v = t, w = q, m += a.Da, q += a.Da, g += 2 * d.f, n += 2 * a.F, k(f, n - a.F, f, n, r, u, v, w, l, m, t, q, e, g - d.f, e, g, y);
      n += a.F;
      a.k + z < a.K ? (N(b.Sb, b.Tb, f, n, 1 * y), N(b.Qb, b.Rb, l, m, 1 * D), N(b.lc, b.mc, t, q, 1 * D), c--) : z & 1 || k(f, n, p, p, l, m, t, q, l, m,
        t, q, e, g + d.f, p, p, y);
      return c
    }

    function xg(a, b) {
      var c = a.p,
        d = a.q,
        e = b.j.c.Va,
        g = a.m,
        f = a.h,
        h = e.p,
        n = e.q + a.w * e.Fa,
        c = a.p,
        d = a.q,
        l = s;
      if (c != p)
        for (l = 0; l < f; ++l) N(h, n, c, d, 1 * g), d += a.width, n += e.Fa;
      else if (e.p != p)
        for (l = 0; l < f; ++l) jd(h, n, 255, g), n += e.Fa;
      return 0
    }

    function We(a, b, c) {
      var d = a.w;
      c[0] = a.h;
      a.Bb && (0 == d ? --c[0] : (--d, b[0] -= a.width), a.k + a.w + a.h == a.K && (c[0] = a.K - a.k - d));
      return d
    }

    function yg(a, b) {
      var c = a.p,
        d = [a.q];
      if (c != p) {
        for (var e = a.m, g = b.j.J, f = g == Ab || g == Bb, h = b.j.c.RGBA, n = [s], l = We(a, d, n), d = d[0], m = h.ma, l = h.Sa + l * h.f,
            t = l + (f ? 0 : 3), q = 255, r = s, u = s, u = 0; u < n[0]; ++u) {
          for (r = 0; r < e; ++r) {
            var v = c[d + r];
            m[t + 4 * r] = v;
            q &= v
          }
          d += a.width;
          t += h.f
        }
        255 != q && F(g) && WebPApplyAlphaMultiply(m, l, f, e, n, h.f)
      }
      return 0
    }

    function zg(a, b) {
      var c = a.p,
        d = [a.q];
      if (c != p) {
        var e = a.m,
          g = b.j.J,
          f = b.j.c.RGBA,
          h = [s],
          n = We(a, d, h),
          d = d[0],
          l = f.ma,
          n = f.Sa + n * f.f,
          m = n + 1,
          t = 15,
          q = s;
        for (j = 0; j < h[0]; ++j) {
          for (q = 0; q < e; ++q) {
            var r = c[d + q] >> 4;
            l[m + 2 * q] = l[m + 2 * q] & 240 | r;
            t &= r
          }
          d += a.width;
          m += f.f
        }
        15 != t && F(g) && WebPApplyAlphaMultiply4444(l, n, e, h, f.f)
      }
      return 0
    }

    function vd(a) {
      var b = a.ka,
        c = b.j.J,
        d = c <
        ua,
        e = c == jb || c == Pa || c == Ab || c == kb || c == Ra || F(c);
      b.memory = p;
      b.$a = p;
      b.zb = p;
      b.ad = p;
      if (!Ne(b.Qa, a, e ? ua : Ra)) return 0;
      if (a.I) {
        if (!(d ? InitRGBRescaler(a, b) : InitYUVRescaler(a, b))) return alert("memory error #1"), 0
      } else {
        if (d) {
          if (b.$a = ug, a.Bb) {
            var g = a.m + 1 >> 1,
              f = a.m + 2 * g,
              h, n = [];
            for (h = 0; h < f; ++h) n.push(205);
            n.push(0);
            b.memory = n;
            if (b.memory == p) return alert("memory error #2"), 0;
            b.Sb = b.memory;
            b.Tb = 0;
            b.Qb = b.Sb;
            b.Rb = b.Tb + a.m;
            b.lc = b.Qb;
            b.mc = b.Rb + g;
            b.$a = wg;
            V[Qa] = pg;
            V[jb] = Oe;
            V[Zc] = qg;
            V[Pa] = Pe;
            V[Ab] = Qe;
            V[kb] = Re;
            V[Fe] = rg
          }
        } else b.$a =
          tg;
        e && (F(c) && (WebPApplyAlphaMultiply = sg, V[Ob] = Oe, V[Pb] = Pe, V[Bb] = Qe, V[Qb] = Re), b.zb = c == kb || c == Qb ? zg : d ? yg : xg)
      }
      if (d && !Xe) {
        for (a = 0; 256 > a; ++a) Za[a] = 89858 * (a - 128) + Jb >> ea, wb[a] = -22014 * (a - 128) + Jb, vb[a] = -45773 * (a - 128), xb[a] = 113618 * (a - 128) + Jb >> ea;
        for (a = J; a < dd; ++a) b = 76283 * (a - 16) + Jb >> ea, ia[a - J] = wa(b, 255), Hb[a - J] = wa(b + 8 >> 4, 15);
        Xe = 1
      }
      return 1
    }

    function ud(a) {
      var b = a.ka,
        c = a.m,
        d = a.h;
      $(!(a.w & 1));
      if (0 >= c || 0 >= d) return 0;
      c = b.$a(a, b);
      b.ec += c;
      b.zb && b.zb(a, b);
      return 1
    }

    function wd(a) {
      a = a.ka;
      a.memory = "";
      a.memory = p
    }

    function ed(a,
      b) {
      return a[b + 0] | a[b + 1] << 8 | a[b + 2] << 16
    }

    function Kb(a, b) {
      return (ed(a, b) | a[b + 3] << 24) >>> 0
    }

    function Ye(a, b, c, d, e, g, f) {
      var h = 0,
        n = [0],
        l = "VP8StatusCode",
        m = M(Gc);
      if (a == p || c[0] < Lb) return Z;
      m.data = a;
      m.b = [b[0]];
      m.e = [c[0]];
      m.na = [m.na];
      a: {
        h = m.na;
        $(a != p);
        $(c != p);
        $(h != p);
        h[0] = 0;
        if (c[0] >= Lb && !kd(a, b[0], "RIFF", O)) {
          if (kd(a, b[0] + 8, "WEBP", O)) {
            l = W;
            break a
          }
          var t = Kb(a, b[0] + O);
          if (t < O + R) {
            l = W;
            break a
          }
          h[0] = t;
          b[0] += Lb;
          c[0] -= Lb
        } else h[0] = 0;
        l = L
      }
      m.na = m.na[0];
      if (l != L) return l;
      h = 0 < m.na;
      t = [0];
      a: if (l = R + fd, $(a != p), $(c != p), $(n != p), n[0] =
          0, c[0] < R) l = Z;
        else {
          if (!kd(a, b[0], "VP8X", O)) {
            var q = s,
              r = s,
              u = E;
            if (Kb(a, b[0] + O) != fd) {
              l = W;
              break a
            }
            if (c[0] < l) {
              l = Z;
              break a
            }
            u = Kb(a, b[0] + 8);
            q = 1 + ed(a, b[0] + 12);
            r = 1 + ed(a, b[0] + 15);
            if (q * r >= Ag) {
              l = W;
              break a
            }
            t != p && (t[0] = u);
            d != p && (d[0] = q);
            e != p && (e[0] = r);
            b[0] += l;
            c[0] -= l;
            n[0] = 1
          }
          l = L
        }
      if (l != L) return l;
      if (!h && n[0]) return W;
      g != p && (g[0] = !!(t[0] & Bg));
      if (n && f == p) return L;
      if (c < O) return Z;
      if (h && n[0] || !h && !n[0] && !kd(a, b[0], "ALPH", O)) {
        m.$ = [m.$];
        m.G = [m.G];
        m.pa = [m.pa];
        a: {
          var n = m.na,
            h = m.$,
            t = m.G,
            l = m.pa,
            q = x,
            r = 0,
            u = Mb,
            v = O + R + fd;
          $(a != p);
          $(c != p);
          q = a;
          r = b[0];
          u = c[0];
          $(h != p);
          $(l != p);
          h[0] = p;
          t[0] = p;
          for (l[0] = 0;;) {
            var w = E,
              y = E;
            b[0] = r;
            c[0] = u;
            if (u < R) {
              l = Z;
              break a
            }
            w = Kb(q, r + O);
            y = R + w + 1 & -2;
            v += y;
            if (0 < n && v > n) {
              l = W;
              break a
            }
            if (u < y) {
              l = Z;
              break a
            }
            if (kd(q, r, "ALPH", O)) {
              if (!kd(q, r, "VP8 ", O) || !kd(q, "VP8L", O)) {
                l = L;
                break a
              }
            } else h[0] = q, t[0] = r + R, l[0] = w;
            r += y;
            u -= y
          }
          l = ca
        }
        m.$ = m.$[0];
        m.G = m.G[0];
        m.pa = m.pa[0];
        if (l != L) return l
      }
      m.ta = [m.ta];
      m.ia = [m.ia];
      a: if (n = m.na, h = m.ta, t = m.ia, r = !kd(a, b[0], "VP8 ", O), l = !kd(a, b[0], "VP8L", O), q = O + R, $(a != p), $(c != p), $(h != p), $(t != p), c[0] < R) l = Z;
        else {
          if (r || l) {
            r = Kb(a, b[0] + O);
            if (n >= q && r > n - q) {
              l = W;
              break a
            }
            h[0] = r;
            b[0] += R;
            c[0] -= R;
            t[0] = l
          } else t[0] = 1 <= c && a[b + 0] == ve, h[0] = c[0];
          l = L
        }
      m.ta = m.ta[0];
      m.ia = m.ia[0];
      if (l != L) return l;
      if (m.ta > Ze) return W;
      if (m.ia) {
        if (c[0] < $e) return Z;
        n = b[0];
        h = c[0];
        d = d ? d[0] : p;
        e = e ? e[0] : p;
        t = g ? g[0] : p;
        a == p || h < $e ? a = 0 : (l = [s], q = [s], r = [s], u = M(af), Rb(u, a, n, h), ue(u, l, q, r) ? (d != p && (d[0] = l[0]), e != p && (e[0] = q[0]), t != p && (t[0] = r[0]), a = 1) : a = 0)
      } else {
        if (c < bf) return Z;
        n = b[0];
        h = c[0];
        d = d ? d[0] : p;
        e = e ? e[0] : p;
        !(a == p || h < bf) && 3 <= h - 3 && 157 == a[n + 3 + 0] && 1 == a[n +
          3 + 1] && 42 == a[n + 3 + 2] ? (h = a[n + 0] | a[n + 1] << 8 | a[n + 2] << 16, t = (a[n + 7] << 8 | a[n + 6]) & 16383, a = (a[n + 9] << 8 | a[n + 8]) & 16383, !(!(h & 1) + 0) || 3 < (h >> 1 & 7) || !(h >> 4 & 1) || h >> 5 >= m.ta ? a = 0 : (d && (d[0] = t), e && (e[0] = a), a = 1)) : a = 0
      }
      if (!a) return W;
      g != p && (g[0] |= m.$ != p);
      f != p && (f[0] = m, f[0].offset = b[0] - f[0].b, $(b[0] - f[0].b < Ze), $(f[0].offset == f[0].e - c[0]));
      return L
    }

    function Kd(a) {
      $(a != p);
      return Ye(a[0].data, a[0].b, a[0].e, p, p, p, a)
    }

    function cf(a, b, c, d) {
      var e = "VP8StatusCode",
        g = M(Vb),
        f = M(Gc);
      f.data = a;
      f.b = b;
      f.e = c;
      f.b = [f.b];
      f.e = [f.e];
      f = [f];
      e = Kd(f);
      if (e !=
        L) return e;
      f = f[0];
      f.b = f.b[0];
      f.e = f.e[0];
      $(d != p);
      td(na);
      g.data = f.data;
      g.b = b + f.offset;
      g.e = f.e - f.offset;
      g.put = ud;
      g.Mb = vd;
      g.Pb = wd;
      g.ka = d;
      if (f.ia) {
        a = sd();
        if (a == p) return cb;
        ng(a, g) ? (e = zd(g.width, g.height, d.Qa, d.j), e == L && !og(a) && (e = a.a)) : e = a.a;
        a != p && sa(a)
      } else {
        e = M(Cg);
        e != p && (Gd(e), e.za = 0, e.Hb = 1);
        a = e;
        if (a == p) return cb;
        a.qb = 0;
        a.Ga = f.$;
        a.G = f.G;
        a.ub = f.pa;
        Hd(a, g) ? (e = zd(g.width, g.height, d.Qa, d.j), e == L && !Mf(a, g) && (e = a.a)) : e = a.a;
        a != p && ke(a)
      }
      e != L && (self || this).Yc(d.j);
      return e
    }

    function lb(a, b, c, d, e) {
      var g = {
        value: 0
      };
      c = {
        value: c
      };
      var f = M(df),
        h = M(gd);
      f.j = h;
      h.J = a;
      var n = {
          value: h.width
        },
        l = {
          value: h.height
        },
        m;
      m = c;
      var t = M(ef);
      hd(b, g, m, t) != L ? m = 0 : (n != p && (n.value = t.width), l != p && (l.value = t.height), m = 1);
      if (!m) return p;
      h.width = n.value;
      h.height = l.value;
      d != p && (d.value = h.width.value);
      e != p && (e.value = h.height.value);
      return cf(b, g.value, c.value, f) != L ? p : a < ua ? h.c.RGBA.ma : h.c.Va.y
    }

    function hd(a, b, c, d) {
      if (d == p || a == p) return ta;
      $(d != p);
      d.tc = 0;
      d.width = [d.width];
      d.height = [d.height];
      d.$b = [d.$b];
      return Ye(a, b, c, d.width, d.height, d.$b, p)
    }

    function Ne(a,
      b, c) {
      var d = b.width,
        e = b.height,
        g = 0,
        f = 0,
        h = d,
        n = e;
      b.Ua = a != p && 0 < a.Ua;
      if (b.Ua && (h = a.wc, n = a.vc, g = a.t, f = a.k, c < ua || (g &= -2, f &= -2), 0 > g || 0 > f || 0 >= h || 0 >= n || g + h > d || f + n > e)) return 0;
      b.t = g;
      b.k = f;
      b.Ka = g + h;
      b.K = f + n;
      b.m = h;
      b.h = n;
      b.I = a != p && 0 < a.I;
      if (b.I) {
        if (0 >= a.Ba || 0 >= a.Aa) return 0;
        b.Ba = a.Ba;
        b.Aa = a.Aa
      }
      b.Za = a && a.Za;
      b.Bb = a == p || !a.ed;
      b.I && (b.Za = b.Ba < 3 * d / 4 && b.Aa < 3 * e / 4, b.Bb = 0);
      return 1
    }
    var na = 512,
      Qa = 0,
      jb = 1,
      Zc = 2,
      Pa = 3,
      Ab = 4,
      kb = 5,
      Fe = 6,
      Ob = 7,
      Pb = 8,
      Bb = 9,
      Qb = 10,
      ua = 11,
      Ra = 12,
      Cc = 13;
    this.WEBP_CSP_MODE = this.Cd = {
      nd: 0,
      od: 1,
      kd: 2,
      ld: 3,
      jd: 4,
      pd: 5,
      qd: 6,
      rd: 7,
      sd: 8,
      md: 9
    };
    var gd = {
        J: "WEBP_CSP_MODE",
        width: s,
        height: s,
        Fc: s,
        c: {
          RGBA: {
            ma: x,
            Sa: 0,
            f: s,
            size: Mb
          },
          Va: {
            y: x,
            c: x,
            S: x,
            p: x,
            D: x,
            B: x,
            C: x,
            q: x,
            F: s,
            nb: s,
            rb: s,
            Fa: s,
            Wc: Mb,
            Rc: Mb,
            Uc: Mb,
            Wb: Mb
          }
        },
        Ic: U(4, E),
        Jb: p,
        jc: x
      },
      L = 0,
      cb = 1,
      ta = 2,
      W = 3,
      Hf = 4,
      Ie = 5,
      Nf = 6,
      Z = 7;
    this.VP8StatusCode = this.td = {
      xd: 0,
      yd: 1,
      vd: 2,
      ud: 3,
      Ad: 4,
      zd: 5,
      Bd: 6,
      wd: 7
    };
    var ef = {
      width: {
        value: s
      },
      height: {
        value: s
      },
      $b: {
        value: s
      },
      tc: s,
      Yd: s,
      rotate: s,
      be: s,
      Ic: U(3, E)
    };
    this.WebPGetFeatures = this.Md = function(a, b, c) {
      var d = "VP8StatusCode";
      na >>> 8 != na >>> 8 || c == p ? a = ta : (b = [b], d = hd(a, [0], b, c), a = d == Z ? W : d);
      return a
    };
    var ff = {
      Za: s,
      ed: s,
      Ua: s,
      t: s,
      k: s,
      wc: s,
      vc: s,
      I: s,
      Ba: s,
      Aa: s,
      ae: s,
      Td: s,
      Xd: s,
      Ic: U(6, E)
    };
    this.WebPDecoderConfig = this.Kd = {
      input: M(ef),
      j: M(gd),
      options: M(ff)
    };
    this.WebPInitDecoderConfig = this.Nd = function(a) {
      na >>> 8 != na >>> 8 || a == p ? a = 0 : (a = a.input, $(a != p), a.tc = 0, a = 1);
      return a
    };
    var Vb = {
        width: s,
        height: s,
        w: s,
        m: s,
        h: s,
        y: x,
        c: x,
        S: x,
        D: 0,
        B: 0,
        C: 0,
        F: s,
        Da: s,
        ka: 0,
        put: 0,
        Mb: 0,
        Pb: 0,
        Bb: s,
        e: Mb,
        data: x,
        b: 0,
        Za: s,
        Ua: s,
        t: s,
        Ka: s,
        k: s,
        K: s,
        I: s,
        Ba: s,
        Aa: s,
        p: x,
        q: 0
      },
      df = {
        j: M(gd),
        Sb: x,
        Qb: x,
        lc: x,
        Tb: 0,
        Rb: 0,
        mc: 0,
        ec: s,
        Qa: M(ff),
        memory: 0,
        $a: "(OutputFunc)",
        zb: "(OutputFunc)",
        ad: "(OutputRowFunc)"
      },
      Gc = {
        data: x,
        b: x,
        e: Mb,
        offset: Mb,
        $: p,
        G: x,
        pa: Mb,
        ta: Mb,
        na: Mb,
        ia: s
      },
      Fc = {
        qa: x,
        Ia: p,
        Pd: x,
        Ab: s,
        la: E,
        Z: E,
        gc: s
      },
      af = {
        T: bb,
        qa: x,
        Ia: x,
        ya: Mb,
        Q: Mb,
        g: s,
        L: s,
        fa: s
      },
      gf = 25,
      hf = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
      bf = 10,
      ve = 47,
      we = 14,
      Wf = 3,
      $e = 5,
      fg = 11,
      Yc = 5,
      qe = 4278190080,
      jg = 8,
      Tb = 15,
      Ba = 256,
      Ge = 24,
      Je = 4,
      Be = 0,
      De = 1,
      Ae = 2,
      Ee = 3,
      Ub = 1,
      kc = 0,
      kf = 1,
      rd = 1,
      O = 4,
      R = 8,
      Lb = 12,
      fd = 10,
      Bg = 16,
      Ag = 1 * Math.pow(2, 32),
      Ze = -1 - R - 1 >>> 0,
      jf = {
        kc: s,
        s: s
      },
      Le = {
        Y: "HuffmanTreeNode*",
        gb: s,
        Pa: s
      },
      pd = -1,
      Dg = {
        ea: E,
        bb: s
      },
      ad = 506832829,
      $b = 0,
      ge = $b,
      fe = 2,
      ee = 3,
      de = 1,
      Ef = 4,
      Df = 5,
      Cf = 6,
      Ld = 3,
      xa = 4,
      Hc = 4,
      Gf = 4,
      Md = 4,
      Nd = 8,
      Kc = 3,
      Lc = 11,
      f = 32,
      Pf = 17 * f + 9 * f,
      Tc = 1 * f + 8,
      Uc = Tc + 16 * f + f,
      he = Uc + 16,
      Id = {
        fb: x,
        Jc: x,
        Nc: x,
        Ra: E
      },
      Jd = {
        l: 0,
        v: 0,
        gd: x,
        hd: x,
        uc: x,
        $c: x
      },
      Eg = {
        pb: s,
        ob: s,
        tb: s,
        Kb: U(xa, 0),
        Cb: U(xa, 0)
      },
      Fg = {
        Ta: U(Ld, x),
        z: md([Md, Nd, Kc, Lc], x)
      },
      Gg = {
        Oc: s,
        Fb: s,
        kb: s,
        oc: s,
        Lc: U(Hc, s),
        Gc: U(Hc, s)
      },
      Oc = {
        zc: s,
        yc: s,
        ab: s
      },
      Qd = {
        X: s,
        ua: s,
        Nb: s
      },
      id = U(2, s),
      Hg = {
        sc: M(id),
        sb: M(id),
        qc: M(id)
      },
      Ig = {
        ha: s,
        d: s,
        W: s,
        M: Oc,
        N: Vb
      },
      Cg = {
        a: "VP8StatusCode",
        za: s,
        xc: 0,
        o: M(Fc),
        Ac: M(Id),
        P: M(Jd),
        ga: M(Gg),
        Ca: M(Eg),
        rc: "WebPWorker",
        qb: s,
        Ja: s,
        jb: s,
        oa: Ig,
        Ma: s,
        hb: s,
        lb: s,
        mb: s,
        wb: s,
        Ya: s,
        Hb: s,
        ic: ld(8, Fc),
        Zc: E,
        yb: ld(xa, Hg),
        R: M(Fg),
        pc: s,
        Pc: x,
        dc: x,
        cc: U(4, x),
        Xc: x,
        Sc: x,
        Vc: x,
        La: M(Qd),
        M: M(Oc),
        Ea: x,
        z: 0,
        ca: x,
        aa: x,
        ra: x,
        da: s,
        ba: s,
        sa: s,
        H: s,
        r: s,
        ib: 0,
        Gb: Mb,
        i: s,
        d: s,
        wa: x,
        Eb: U(16, x),
        Vd: 0,
        Tc: x,
        Lb: x,
        ja: E,
        Oa: E,
        A: s,
        W: s,
        Zb: U(xa, x),
        Ga: p,
        G: 0,
        ub: Mb,
        Xb: x,
        Od: 0,
        cd: s,
        dd: x,
        Wd: 0,
        fc: Mb
      },
      Db = 0,
      Cb = 1,
      cd = 2,
      Jg = {
        Qc: "VP8LImageTransformType",
        n: s,
        U: s,
        Vb: s,
        u: E,
        b: E
      },
      gg = {
        va: ld(Yc, Le)
      },
      Kg = {
        xb: s,
        Yb: M(Dg),
        Dc: s,
        eb: s,
        Ec: s,
        ac: E,
        bd: E,
        hc: s,
        Db: "HTreeGroup"
      },
      eg = {
        a: "VP8StatusCode",
        Wa: "VP8LDecodeState",
        Ob: "VP8LDecodeState",
        N: "VP8Io",
        Ib: "WebPDecBuffer",
        Hc: "WebPDecBuffer",
        V: E,
        Ha: E,
        Xa: E,
        vb: E,
        o: M(af),
        l: s,
        v: s,
        O: s,
        xa: s,
        cb: M(Kg),
        Na: s,
        nc: ld(Je, Jg),
        Ub: E,
        Mc: x,
        $d: x,
        Zd: "*WebPRescaler"
      },
      lf = 4,
      nf = [p, function(a, b, c, d, e, g, f, h) {
        var n = s,
          l = h;
        $(a != p);
        $(f != p);
        $(0 < c);
        $(0 < d);
        $(0 < e);
        $(g >= c * e);
        for (n = 0; n < d; ++n) 0 == n ? N(f, h, a, b, e) : Ea(a, b, f, l - g, f, h, e), Ea(a, b + e, f, l, f, h + e, e * (c - 1)),
          l += g, b += g, h += g
      }, function(a, b, c, d, e, f, k, h) {
        var n = s,
          l = h;
        $(a != p);
        $(k != p);
        $(0 < c);
        $(0 < d);
        $(0 < e);
        $(f >= c * e);
        N(k, h, a, b, e);
        Ea(a, b + e, k, l, k, h + e, e * (c - 1));
        for (n = 1; n < d; ++n) b += f, h += f, Ea(a, b, k, l, k, h, e * c), l += f
      }, function(a, b, c, d, e, f, k, h) {
        var n = h,
          l = s;
        $(a != p);
        $(k != p);
        $(0 < c);
        $(0 < d);
        $(0 < e);
        $(f >= c * e);
        N(k, h, a, b, e);
        Ea(a, b + e, k, n, k, h + e, e * (c - 1));
        for (l = 1; l < d; ++l) {
          var m = s,
            n = n + f;
          b += f;
          h += f;
          Ea(a, b, k, n - f, k, h, e);
          for (m = e; m < c * e; ++m) {
            var t = k[n + m - e] + k[n + m - f] - k[n + m - f - e];
            k[h + m] = a[b + m] + (0 > t ? 0 : 255 < t ? 255 : t) & 255
          }
        }
      }],
      yd = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4,
        2, 1, 1
      ];
    this.WebPFreeDecBuffer = this.Yc = function(a) {
      a != p && (a.Fc || (a.Jb = ""), a.jc = 0, a.Jb = a.jc = p)
    };
    self = this;
    var va = U(511, x),
      tc = U(511, x),
      sc = U(2041, 0),
      oc = U(225, 0),
      oa = U(766, x),
      Rd = 0,
      Xb = 85627,
      Wb = 35468,
      Uf = [function(a, b) {
          var c = 4,
            d;
          for (d = 0; 4 > d; ++d) c += a[b + d - f] + a[b - 1 + d * f];
          c >>= 3;
          for (d = 0; 4 > d; ++d) jd(a, b + d * f, c, 4)
        }, function(a, b) {
          Dc(a, b, 4)
        }, function(a, b) {
          var c = b - f,
            d = [];
          d.push(y(a[c - 1], a[c + 0], a[c + 1]));
          d.push(y(a[c + 0], a[c + 1], a[c + 2]));
          d.push(y(a[c + 1], a[c + 2], a[c + 3]));
          d.push(y(a[c + 2], a[c + 3], a[c + 4]));
          for (c = 0; 4 > c; ++c) N(a, b + c * f, d, 0, 4)
        },
        function(a, b) {
          var c = a[b - 1],
            d = a[b - 1 + f],
            e = a[b - 1 + 2 * f],
            g = a[b - 1 + 3 * f];
          a[b + 0 + 0 * f] = a[b + 1 + 0 * f] = a[b + 2 + 0 * f] = a[b + 3 + 0 * f] = y(a[b - 1 - f], c, d);
          a[b + 0 + 1 * f] = a[b + 1 + 1 * f] = a[b + 2 + 1 * f] = a[b + 3 + 1 * f] = y(c, d, e);
          a[b + 0 + 2 * f] = a[b + 1 + 2 * f] = a[b + 2 + 2 * f] = a[b + 3 + 2 * f] = y(d, e, g);
          a[b + 0 + 3 * f] = a[b + 1 + 3 * f] = a[b + 2 + 3 * f] = a[b + 3 + 3 * f] = y(e, g, g)
        },
        function(a, b) {
          var c = a[b - 1 + 0 * f],
            d = a[b - 1 + 1 * f],
            e = a[b - 1 + 2 * f],
            g = a[b - 1 - f],
            k = a[b + 0 - f],
            h = a[b + 1 - f],
            n = a[b + 2 - f],
            l = a[b + 3 - f];
          a[b + 0 + 3 * f] = y(d, e, a[b - 1 + 3 * f]);
          a[b + 0 + 2 * f] = a[b + 1 + 3 * f] = y(c, d, e);
          a[b + 0 + 1 * f] = a[b + 1 + 2 * f] = a[b + 2 + 3 * f] = y(g, c, d);
          a[b +
            0 + 0 * f] = a[b + 1 + 1 * f] = a[b + 2 + 2 * f] = a[b + 3 + 3 * f] = y(k, g, c);
          a[b + 1 + 0 * f] = a[b + 2 + 1 * f] = a[b + 3 + 2 * f] = y(h, k, g);
          a[b + 2 + 0 * f] = a[b + 3 + 1 * f] = y(n, h, k);
          a[b + 3 + 0 * f] = y(l, n, h)
        },
        function(a, b) {
          var c = a[b - 1 + 0 * f],
            d = a[b - 1 + 1 * f],
            e = a[b - 1 + 2 * f],
            g = a[b - 1 - f],
            k = a[b + 0 - f],
            h = a[b + 1 - f],
            n = a[b + 2 - f],
            l = a[b + 3 - f];
          a[b + 0 + 0 * f] = a[b + 1 + 2 * f] = g + k + 1 >> 1;
          a[b + 1 + 0 * f] = a[b + 2 + 2 * f] = k + h + 1 >> 1;
          a[b + 2 + 0 * f] = a[b + 3 + 2 * f] = h + n + 1 >> 1;
          a[b + 3 + 0 * f] = n + l + 1 >> 1;
          a[b + 0 + 3 * f] = y(e, d, c);
          a[b + 0 + 2 * f] = y(d, c, g);
          a[b + 0 + 1 * f] = a[b + 1 + 3 * f] = y(c, g, k);
          a[b + 1 + 1 * f] = a[b + 2 + 3 * f] = y(g, k, h);
          a[b + 2 + 1 * f] = a[b + 3 + 3 * f] = y(k, h, n);
          a[b + 3 + 1 * f] = y(h, n, l)
        },
        function(a, b) {
          var c = a[b + 1 - f],
            d = a[b + 2 - f],
            e = a[b + 3 - f],
            g = a[b + 4 - f],
            k = a[b + 5 - f],
            h = a[b + 6 - f],
            n = a[b + 7 - f];
          a[b + 0 + 0 * f] = y(a[b + 0 - f], c, d);
          a[b + 1 + 0 * f] = a[b + 0 + 1 * f] = y(c, d, e);
          a[b + 2 + 0 * f] = a[b + 1 + 1 * f] = a[b + 0 + 2 * f] = y(d, e, g);
          a[b + 3 + 0 * f] = a[b + 2 + 1 * f] = a[b + 1 + 2 * f] = a[b + 0 + 3 * f] = y(e, g, k);
          a[b + 3 + 1 * f] = a[b + 2 + 2 * f] = a[b + 1 + 3 * f] = y(g, k, h);
          a[b + 3 + 2 * f] = a[b + 2 + 3 * f] = y(k, h, n);
          a[b + 3 + 3 * f] = y(h, n, n)
        },
        function(a, b) {
          var c = a[b + 0 - f],
            d = a[b + 1 - f],
            e = a[b + 2 - f],
            g = a[b + 3 - f],
            k = a[b + 4 - f],
            h = a[b + 5 - f],
            n = a[b + 6 - f],
            l = a[b + 7 - f];
          a[b + 0 + 0 * f] = c + d + 1 >> 1;
          a[b + 1 + 0 * f] = a[b +
            0 + 2 * f] = d + e + 1 >> 1;
          a[b + 2 + 0 * f] = a[b + 1 + 2 * f] = e + g + 1 >> 1;
          a[b + 3 + 0 * f] = a[b + 2 + 2 * f] = g + k + 1 >> 1;
          a[b + 0 + 1 * f] = y(c, d, e);
          a[b + 1 + 1 * f] = a[b + 0 + 3 * f] = y(d, e, g);
          a[b + 2 + 1 * f] = a[b + 1 + 3 * f] = y(e, g, k);
          a[b + 3 + 1 * f] = a[b + 2 + 3 * f] = y(g, k, h);
          a[b + 3 + 2 * f] = y(k, h, n);
          a[b + 3 + 3 * f] = y(h, n, l)
        },
        function(a, b) {
          var c = a[b - 1 + 0 * f],
            d = a[b - 1 + 1 * f],
            e = a[b - 1 + 2 * f],
            g = a[b - 1 + 3 * f],
            k = a[b - 1 - f],
            h = a[b + 0 - f],
            n = a[b + 1 - f],
            l = a[b + 2 - f];
          a[b + 0 + 0 * f] = a[b + 2 + 1 * f] = c + k + 1 >> 1;
          a[b + 0 + 1 * f] = a[b + 2 + 2 * f] = d + c + 1 >> 1;
          a[b + 0 + 2 * f] = a[b + 2 + 3 * f] = e + d + 1 >> 1;
          a[b + 0 + 3 * f] = g + e + 1 >> 1;
          a[b + 3 + 0 * f] = y(h, n, l);
          a[b + 2 + 0 * f] = y(k, h, n);
          a[b +
            1 + 0 * f] = a[b + 3 + 1 * f] = y(c, k, h);
          a[b + 1 + 1 * f] = a[b + 3 + 2 * f] = y(d, c, k);
          a[b + 1 + 2 * f] = a[b + 3 + 3 * f] = y(e, d, c);
          a[b + 1 + 3 * f] = y(g, e, d)
        },
        function(a, b) {
          var c = a[b - 1 + 0 * f],
            d = a[b - 1 + 1 * f],
            e = a[b - 1 + 2 * f],
            g = a[b - 1 + 3 * f];
          a[b + 0 + 0 * f] = c + d + 1 >> 1;
          a[b + 2 + 0 * f] = a[b + 0 + 1 * f] = d + e + 1 >> 1;
          a[b + 2 + 1 * f] = a[b + 0 + 2 * f] = e + g + 1 >> 1;
          a[b + 1 + 0 * f] = y(c, d, e);
          a[b + 3 + 0 * f] = a[b + 1 + 1 * f] = y(d, e, g);
          a[b + 3 + 1 * f] = a[b + 1 + 2 * f] = y(e, g, g);
          a[b + 3 + 2 * f] = a[b + 2 + 2 * f] = a[b + 0 + 3 * f] = a[b + 1 + 3 * f] = a[b + 2 + 3 * f] = a[b + 3 + 3 * f] = g
        }
      ],
      Vf = [function(a, b) {
        var c = 16,
          d;
        for (d = 0; 16 > d; ++d) c += a[b - 1 + d * f] + a[b + d - f];
        Yb(c >> 5, a, b)
      }, function(a,
        b) {
        Dc(a, b, 16)
      }, function(a, b) {
        var c;
        for (c = 0; 16 > c; ++c) N(a, b + c * f, a, b - f, 16)
      }, function(a, b) {
        var c;
        for (c = 16; 0 < c; --c) jd(a, b + 0, a[b - 1], 16), b += f
      }, function(a, b) {
        var c = 8,
          d;
        for (d = 0; 16 > d; ++d) c += a[b - 1 + d * f];
        Yb(c >> 4, a, b)
      }, function(a, b) {
        var c = 8,
          d;
        for (d = 0; 16 > d; ++d) c += a[b + d - f];
        Yb(c >> 4, a, b)
      }, function(a, b) {
        Yb(128, a, b)
      }],
      je = [function(a, b) {
        var c = 8,
          d;
        for (d = 0; 8 > d; ++d) c += a[b + d - f] + a[b - 1 + d * f];
        Zb(1 * (c >> 4), a, b)
      }, function(a, b) {
        Dc(a, b, 8)
      }, function(a, b) {
        var c;
        for (c = 0; 8 > c; ++c) N(a, b + c * f, a, b - f, 8)
      }, function(a, b) {
        var c;
        for (c = 0; 8 > c; ++c) jd(a,
          b + 0, a[b - 1], 8), b += f
      }, function(a, b) {
        var c = 4,
          d;
        for (d = 0; 8 > d; ++d) c += a[b - 1 + d * f];
        Zb(1 * (c >> 3), a, b)
      }, function(a, b) {
        var c = 4,
          d;
        for (d = 0; 8 > d; ++d) c += a[b + d - f];
        Zb(1 * (c >> 3), a, b)
      }, function(a, b) {
        Zb(128, a, b)
      }],
      mc, Pc, Qc, Rc, Sd, Td, Ud, Vd, Wd, Xd, Yd, Zd, $d, ae, be, ce, Pd = 31,
      uc = [0, 2, 8],
      Od = 3,
      Of = 1,
      ie = [0 + 0 * f, 4 + 0 * f, 8 + 0 * f, 12 + 0 * f, 0 + 4 * f, 4 + 4 * f, 8 + 4 * f, 12 + 4 * f, 0 + 8 * f, 4 + 8 * f, 8 + 8 * f, 12 + 8 * f, 0 + 12 * f, 4 + 12 * f, 8 + 12 * f, 12 + 12 * f],
      Ic = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157
      ],
      Jc = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96,
        98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284
      ],
      Sf = [-$b, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
      Ff = [
        [
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
            [189, 129, 242, 255, 227, 213, 255, 219, 128, 128,
              128
            ],
            [106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
          ],
          [
            [1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
            [181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
            [78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
          ],
          [
            [1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
            [184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
            [77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
          ],
          [
            [1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
            [170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
            [37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
          ],
          [
            [1, 204, 254, 255, 245, 255, 128, 128, 128, 128,
              128
            ],
            [207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
            [102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
          ],
          [
            [1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
            [177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
            [80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
          ],
          [
            [1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
            [131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
            [68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
          ],
          [
            [1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
            [184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
            [81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
          ],
          [
            [1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
            [99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
            [23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
          ],
          [
            [1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
            [109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
            [44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
          ],
          [
            [1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
            [94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
            [22,
              100, 174, 245, 186, 161, 255, 199, 128, 128, 128
            ]
          ],
          [
            [1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
            [124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
            [35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
          ],
          [
            [1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
            [121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
            [45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
          ],
          [
            [1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
            [203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
            [137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
          ]
        ],
        [
          [
            [253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
            [175, 13,
              224, 243, 193, 185, 249, 198, 255, 255, 128
            ],
            [73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
          ],
          [
            [1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
            [239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
            [155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
          ],
          [
            [1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
            [201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
            [69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
          ],
          [
            [1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
            [223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
            [141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 16, 248, 255,
              255, 128, 128, 128, 128, 128, 128
            ],
            [190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
            [149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
            [213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
            [55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ],
          [
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
            [128, 128, 128, 128,
              128, 128, 128, 128, 128, 128, 128
            ]
          ]
        ],
        [
          [
            [202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
            [126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
            [61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
          ],
          [
            [1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
            [166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
            [39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
          ],
          [
            [1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
            [124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
            [24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
          ],
          [
            [1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
            [149, 150, 226, 252, 216,
              205, 255, 171, 128, 128, 128
            ],
            [28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
          ],
          [
            [1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
            [123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
            [20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
          ],
          [
            [1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
            [168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
            [47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
          ],
          [
            [1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
            [141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
            [42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
          ],
          [
            [1, 1, 255, 128, 128, 128, 128,
              128, 128, 128, 128
            ],
            [244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
            [238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
          ]
        ]
      ],
      Rf = [
        [
          [231, 120, 48, 89, 115, 113, 120, 152, 112],
          [152, 179, 64, 126, 170, 118, 46, 70, 95],
          [175, 69, 143, 80, 85, 82, 72, 155, 103],
          [56, 58, 10, 171, 218, 189, 17, 13, 152],
          [114, 26, 17, 163, 44, 195, 21, 10, 173],
          [121, 24, 80, 195, 26, 62, 44, 64, 85],
          [144, 71, 10, 38, 171, 213, 144, 34, 26],
          [170, 46, 55, 19, 136, 160, 33, 206, 71],
          [63, 20, 8, 114, 114, 208, 12, 9, 226],
          [81, 40, 11, 96, 182, 84, 29, 16, 36]
        ],
        [
          [134, 183, 89, 137, 98, 101, 106, 165, 148],
          [72, 187, 100, 130, 157, 111,
            32, 75, 80
          ],
          [66, 102, 167, 99, 74, 62, 40, 234, 128],
          [41, 53, 9, 178, 241, 141, 26, 8, 107],
          [74, 43, 26, 146, 73, 166, 49, 23, 157],
          [65, 38, 105, 160, 51, 52, 31, 115, 128],
          [104, 79, 12, 27, 217, 255, 87, 17, 7],
          [87, 68, 71, 44, 114, 51, 15, 186, 23],
          [47, 41, 14, 110, 182, 183, 21, 17, 194],
          [66, 45, 25, 102, 197, 189, 23, 18, 22]
        ],
        [
          [88, 88, 147, 150, 42, 46, 45, 196, 205],
          [43, 97, 183, 117, 85, 38, 35, 179, 61],
          [39, 53, 200, 87, 26, 21, 43, 232, 171],
          [56, 34, 51, 104, 114, 102, 29, 93, 77],
          [39, 28, 85, 171, 58, 165, 90, 98, 64],
          [34, 22, 116, 206, 23, 34, 43, 166, 73],
          [107, 54, 32, 26, 51, 1, 81, 43, 31],
          [68, 25, 106, 22,
            64, 171, 36, 225, 114
          ],
          [34, 19, 21, 102, 132, 188, 16, 76, 124],
          [62, 18, 78, 95, 85, 57, 50, 48, 51]
        ],
        [
          [193, 101, 35, 159, 215, 111, 89, 46, 111],
          [60, 148, 31, 172, 219, 228, 21, 18, 111],
          [112, 113, 77, 85, 179, 255, 38, 120, 114],
          [40, 42, 1, 196, 245, 209, 10, 25, 109],
          [88, 43, 29, 140, 166, 213, 37, 43, 154],
          [61, 63, 30, 155, 67, 45, 68, 1, 209],
          [100, 80, 8, 43, 154, 1, 51, 26, 71],
          [142, 78, 78, 16, 255, 128, 34, 197, 171],
          [41, 40, 5, 102, 211, 183, 4, 1, 221],
          [51, 50, 17, 168, 209, 192, 23, 25, 82]
        ],
        [
          [138, 31, 36, 171, 27, 166, 38, 44, 229],
          [67, 87, 58, 169, 82, 115, 26, 59, 179],
          [63, 59, 90, 180, 59, 166, 93, 73,
            154
          ],
          [40, 40, 21, 116, 143, 209, 34, 39, 175],
          [47, 15, 16, 183, 34, 223, 49, 45, 183],
          [46, 17, 33, 183, 6, 98, 15, 32, 183],
          [57, 46, 22, 24, 128, 1, 54, 17, 37],
          [65, 32, 73, 115, 28, 128, 23, 128, 205],
          [40, 3, 9, 115, 51, 192, 18, 6, 223],
          [87, 37, 9, 115, 59, 77, 64, 21, 47]
        ],
        [
          [104, 55, 44, 218, 9, 54, 53, 130, 226],
          [64, 90, 70, 205, 40, 41, 23, 26, 57],
          [54, 57, 112, 184, 5, 41, 38, 166, 213],
          [30, 34, 26, 133, 152, 116, 10, 32, 134],
          [39, 19, 53, 221, 26, 114, 32, 73, 255],
          [31, 9, 65, 234, 2, 15, 1, 118, 73],
          [75, 32, 12, 51, 192, 255, 160, 43, 51],
          [88, 31, 35, 67, 102, 85, 55, 186, 85],
          [56, 21, 23, 111, 59, 205, 45, 37, 192],
          [55, 38, 70, 124, 73, 102, 1, 34, 98]
        ],
        [
          [125, 98, 42, 88, 104, 85, 117, 175, 82],
          [95, 84, 53, 89, 128, 100, 113, 101, 45],
          [75, 79, 123, 47, 51, 128, 81, 171, 1],
          [57, 17, 5, 71, 102, 57, 53, 41, 49],
          [38, 33, 13, 121, 57, 73, 26, 1, 85],
          [41, 10, 67, 138, 77, 110, 90, 47, 114],
          [115, 21, 2, 10, 102, 255, 166, 23, 6],
          [101, 29, 16, 10, 85, 128, 101, 196, 26],
          [57, 18, 10, 102, 102, 213, 34, 20, 43],
          [117, 20, 15, 36, 163, 128, 68, 1, 26]
        ],
        [
          [102, 61, 71, 37, 34, 53, 31, 243, 192],
          [69, 60, 71, 38, 73, 119, 28, 222, 37],
          [68, 45, 128, 34, 1, 47, 11, 245, 171],
          [62, 17, 19, 70, 146, 85, 55, 62, 70],
          [37, 43, 37, 154, 100, 163, 85, 160,
            1
          ],
          [63, 9, 92, 136, 28, 64, 32, 201, 85],
          [75, 15, 9, 9, 64, 255, 184, 119, 16],
          [86, 6, 28, 5, 64, 255, 25, 248, 1],
          [56, 8, 17, 132, 137, 255, 55, 116, 128],
          [58, 15, 20, 82, 135, 57, 26, 121, 40]
        ],
        [
          [164, 50, 31, 137, 154, 133, 25, 35, 218],
          [51, 103, 44, 131, 131, 123, 31, 6, 158],
          [86, 40, 64, 135, 148, 224, 45, 183, 128],
          [22, 26, 17, 131, 240, 154, 14, 1, 209],
          [45, 16, 21, 91, 64, 222, 7, 1, 197],
          [56, 21, 39, 155, 60, 138, 23, 102, 213],
          [83, 12, 13, 54, 192, 255, 68, 47, 28],
          [85, 26, 85, 85, 128, 128, 32, 146, 171],
          [18, 11, 7, 63, 144, 171, 4, 4, 246],
          [35, 27, 10, 146, 174, 171, 12, 26, 128]
        ],
        [
          [190, 80, 35, 99, 180, 80,
            126, 54, 45
          ],
          [85, 126, 47, 87, 176, 51, 41, 20, 32],
          [101, 75, 128, 139, 118, 146, 116, 128, 85],
          [56, 41, 15, 176, 236, 85, 37, 9, 62],
          [71, 30, 17, 119, 118, 255, 17, 18, 138],
          [101, 38, 60, 138, 55, 70, 43, 26, 142],
          [146, 36, 19, 30, 171, 255, 97, 27, 20],
          [138, 45, 61, 62, 219, 1, 81, 188, 64],
          [32, 41, 20, 117, 151, 142, 20, 21, 163],
          [112, 19, 12, 61, 195, 128, 48, 4, 24]
        ]
      ],
      If = [
        [
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 241,
              252, 255, 255, 255, 255, 255, 255, 255, 255
            ],
            [249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
            [250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [225, 252, 241, 253, 255, 255, 254, 255,
              255, 255, 255
            ],
            [234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255,
              255, 255, 255, 255, 255, 255
            ],
            [252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255,
              255, 255, 255, 255, 255, 255, 255, 255
            ]
          ]
        ],
        [
          [
            [186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
            [234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
            [251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
          ],
          [
            [255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255,
              255, 255
            ]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ],
        [
          [
            [248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
            [248, 254, 253, 255, 255, 255,
              255, 255, 255, 255, 255
            ],
            [253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
            [252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 253,
              255, 255, 255, 255, 255, 255, 255, 255
            ],
            [250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ],
          [
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
            [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
          ]
        ]
      ];
    this.WebPGetDecoderVersion = this.Ld = function() {
      return 512
    };
    var Nc = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
      Jf = [
        [173, 148, 140, 0],
        [176, 155, 140, 135, 0],
        [180, 157, 141, 134, 130, 0],
        [254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
      ],
      Kf = [0, 1, 4, 8, 5, 2, 3, 6,
        9, 12, 13, 10, 7, 11, 14, 15
      ],
      Tf = md([Kc, Lc], "");
    U(4, x);
    var vc = [
        [0, 0, 0, 0],
        [1, 0, 0, 0],
        [0, 1, 0, 0],
        [1, 1, 0, 0],
        [0, 0, 1, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 1],
        [1, 0, 0, 1],
        [0, 1, 0, 1],
        [1, 1, 0, 1],
        [0, 0, 1, 1],
        [1, 0, 1, 1],
        [0, 1, 1, 1],
        [1, 1, 1, 1]
      ],
      Lf = 134480385,
      ea = 16,
      J = -227,
      dd = 482,
      Ce = [Wc, function(a) {
        return a
      }, function(a, b, c) {
        return b[c + 0]
      }, function(a, b, c) {
        return b[c + 1]
      }, function(a, b, c) {
        return b[c - 1]
      }, function(a, b, c) {
        return ka(ka(a, b[c + 1]), b[c + 0])
      }, function(a, b, c) {
        return ka(a, b[c - 1])
      }, function(a, b, c) {
        return ka(a, b[c + 0])
      }, function(a,
        b, c) {
        return ka(b[c - 1], b[c + 0])
      }, function(a, b, c) {
        return ka(b[c + 0], b[c + 1])
      }, function(a, b, c) {
        return ka(ka(a, b[c - 1]), ka(b[c + 0], b[c + 1]))
      }, function(a, b, c) {
        return 0 >= Math.abs((a >> 24 & 255) - (b[c - 1] >> 24 & 255)) - Math.abs((b[c + 0] >> 24 & 255) - (b[c - 1] >> 24 & 255)) + (Math.abs((a >> 16 & 255) - (b[c - 1] >> 16 & 255)) - Math.abs((b[c + 0] >> 16 & 255) - (b[c - 1] >> 16 & 255))) + (Math.abs((a >> 8 & 255) - (b[c - 1] >> 8 & 255)) - Math.abs((b[c + 0] >> 8 & 255) - (b[c - 1] >> 8 & 255))) + (Math.abs((a & 255) - (b[c - 1] & 255)) - Math.abs((b[c + 0] & 255) - (b[c - 1] & 255))) ? b[c + 0] : a
      }, function(a, b, c) {
        return ($a((a >>
          24 & 255) + (b[c + 0] >> 24 & 255) - (b[c - 1] >> 24 & 255)) << 24 | $a((a >> 16 & 255) + (b[c + 0] >> 16 & 255) - (b[c - 1] >> 16 & 255)) << 16 | $a((a >> 8 & 255) + (b[c + 0] >> 8 & 255) - (b[c - 1] >> 8 & 255)) << 8 | $a((a & 255) + (b[c + 0] & 255) - (b[c - 1] & 255))) >>> 0
      }, function(a, b, c) {
        var d = b[c - 1];
        a = ka(a, b[c + 0]);
        return (yb(a >> 24 & 255, d >> 24 & 255) << 24 | yb(a >> 16 & 255, d >> 16 & 255) << 16 | yb(a >> 8 & 255, d >> 8 & 255) << 8 | yb(a >> 0 & 255, d >> 0 & 255)) >>> 0
      }, Wc, Wc],
      Xf = {
        Cc: x,
        Bc: x,
        Kc: x
      },
      $c = 16,
      Me = 16,
      kg = 16,
      mg = [2, 3, 7],
      lg = [3, 3, 11],
      Zf = 0,
      $f = 1,
      ag = 2,
      bg = 3,
      cg = 4,
      hg = [Ba + Ge, Ba, Ba, Ba, 40],
      Ke = 19,
      ig = [17, 18, 0, 1, 2, 3, 4, 5, 16,
        6, 7, 8, 9, 10, 11, 12, 13, 14, 15
      ],
      He = 120,
      dg = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
      Jb = 1 << ea - 1,
      Za = U(256, 0),
      xb = U(256, 0),
      vb = U(256, la),
      wb = U(256, la),
      ia = U(dd - J, x),
      Hb = U(dd -
        J, x),
      Xe = 0,
      V = Array(Cc),
      vg = [function(a, b, c, d, e, f, k, h, n, l, m, t, q) {
        Ca(a, b, c, d, e, f, k, h, n, l, m, t, q, hc, 3)
      }, Se, function(a, b, c, d, e, f, k, h, n, l, m, t, q) {
        Ca(a, b, c, d, e, f, k, h, n, l, m, t, q, Vc, 3)
      }, Te, Ue, Ve, function(a, b, c, d, e, f, k, h, n, l, m, t, q) {
        Ca(a, b, c, d, e, f, k, h, n, l, m, t, q, le, 2)
      }, Se, Te, Ue, Ve];
    this.Hd = function(a, b, c, d) {
      return lb(Qa, a, b, c, d)
    };
    this.Id = function(a, b, c, d) {
      return lb(jb, a, b, c, d)
    };
    this.Jd = function(a, b, c, d) {
      return lb(kb, a, b, c, d)
    };
    this.Ed = function(a, b, c, d) {
      return lb(Ab, a, b, c, d)
    };
    this.Fd = function(a, b, c, d) {
      return lb(Zc,
        a, b, c, d)
    };
    this.Gd = function(a, b, c, d) {
      return lb(Pa, a, b, c, d)
    };
    this.WebPDecode = this.Dd = function(a, b, c) {
      var d = M(df),
        e = "VP8StatusCode";
      if (c == p) return ta;
      e = hd(a, [0], [b], c.input);
      if (e != L) return e == Z ? W : e;
      d.j = c.j;
      d.Qa = c.Qa;
      return e = cf(a, 0, [b], d)
    }
  };

})();