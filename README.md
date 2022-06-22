# New CSS viewport units

Wanna try it yourself? Check out the [deploy on vercel](https://viewport-units.vercel.app/)

## The Stack

Using React + Vite + Emotion 🖤

## The why

If you ever built a mobile friendly website, you must have run into the good old full available height problem. A couple of years back, this was only possible by declaring `height: 100%;` throughout hundreds of nested of child nodes. Later the newly introduced viewport units `vh` and `vw` provided an alternative for this issue, but along came also a new challenge: while these units worked fine on desktop devices where the viewport stays the same size, various mobile browsers handled the matter of available viewport height entirely differently.

On all iOS devices, the space taken up by the URL and footer menu bar are not deducted from the available viewport height, resulting in either elements hidden behind the footer or the need for nasty conditional styling.

## An example

A typical use case for this could be a view containing a form. The view is supposed to take the full view port height and the submit button is always attached to the very bottom of the screen. While this would work fine in desktop browsers with the `100vh` value, the button would be out of view for many mobile browsers that display a build in top and / or bottom menu bar.

<img width="400px" src="https://user-images.githubusercontent.com/34210193/175009367-f594eb82-d65d-41c8-946e-63c2fed43b62.svg" />

## The fix

In December 2021 the W3C described a set of new CSS units to fix this problem: [The Various Viewport-relative Units](https://www.w3.org/TR/css-values-4/#viewport-relative-units).

I was playing around with some of the new viewport units in this mini project: lvh, svh, dvh. Most interesting to me was the dvh prop as it will change dynamically when the height of the viewport changes e.g. when a URL bar slides in or the bottom bar is in view. Sadly, the [Caniuse](https://caniuse.com/viewport-unit-variants) on these new CSS features still looks pretty bad, which resulted in most of the browsers I tested falling back to the `height: 100vh;` prop.

But Safari desktop and mobile already have full support, and it looks pretty amazing! Can't wait until it arrives in other browsers, too.

Check out the video :)

https://user-images.githubusercontent.com/34210193/174820642-178aa56d-8a33-48d4-a08d-f2dd95671670.mov
