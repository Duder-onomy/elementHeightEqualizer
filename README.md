Will give all elements equal height.

Should work with all modern module loaders.
install through bower `bower install --save elementHeightEqualizer`

use like:

```html
<div equalizer-container>
    <div equalize></div>
    <div equalize></div>
    <div equalize></div>
    <div equalize></div>
    <div equalize></div>
    <div equalize></div>
</div>
```

All elements in the equalizer container will have the same height.

You might want to hook this into the resize event to get it to work while people are resizing.
