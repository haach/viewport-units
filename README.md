# viewport-units

I was playing around with some of the new viewport units: vmin, vmax, lvh, svh, dvh. Most interesting to me was the dvh prop as it will change dynamically when the height of the viewport changes e.g. when a URL bar slides in or the bottom bar is in view. Dadly, the [Caniuse](https://caniuse.com/viewport-unit-variants) on these new CSS features still looks pretty bad, which resulted in most of the browsers falling back to the "height: 100vh;" prop.

[Deployed on vercel](https://viewport-units.vercel.app/)
