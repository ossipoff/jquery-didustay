# jquery-didustay

jQuery plugin thay tries to determine if the user stayed on the page after "beforeunload" confirmation dialog.

It currently only works on windows platform and not on mobile devices.

Also it only works when you use the mouse and not when you use the keyboard to dismiss the dialog.

## Usage

```
$(window).didustay(function() {
  console.log('you stayed');
})
```

## Demo

http://jsfiddle.net/ossipoff/u0v752aj/show
