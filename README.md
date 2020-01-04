# jquery-didustay

jQuery plugin thay tries to determine if the user stayed on the page after "beforeunload" confirmation dialog.

## Usage

```
$(window).didustay({
  stayed: function() {
    console.log('Thanks for staying');
  },
  left: function() {
    console.log('Sad to see you leave');
  }
});
```

## Demo

http://jsfiddle.net/ossipoff/u0v752aj/show
