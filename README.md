# fillytext.js

__Summary:__ A simple, lightweight jQuery plugin that aims to reduce the _bloaty-ness_ from filler text during the building &amp; testing processes.

__Sections:__
* [How to Install](#how-to-install)
* [How to Use](#how-to-use)
* [Contributing/ Customizing](#contributing-customizing)
* [Credits](#credits)

## How to Install:

1. Start by downloading the [latest release](https://github.com/jordanbrauer/filly-text/releases) of this repository.
2. Open the `dist/` directory, and next the `/app/` directory.
3. Copy the `fillytext` folder and paste it into your projects `js` folder.
4. Add this line of code to the `<head>` of your project.
  - `<script type="text/javascript" src="js/fillytext/jquery.fillytext.min.js"></script>`
5. Done!

## How to Use:

After installing the plugin (see above), you can start using it anywhere like so...

---

```
<p class="filler-1"></p>

<script type="text/javascript">
  $('p.filler-1').fillyText('loremipsum');
</script>
```

Will result in...

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

---

You can view more examples in the `dist/examples/` directory by opening the `index.html` file in your browser, or opening it in your favourite text editor.

## Contributing/ Customizing:

For those of you who are looking to contribute to or customize the plugin, the `src/` directory is for you.

## Credits:

__Author:__ Jordan Brauer.
