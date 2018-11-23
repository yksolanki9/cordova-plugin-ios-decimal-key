# cordova-plugin-decimal-key
[![Linked In](https://img.shields.io/badge/Linked-In-blue.svg)](https://www.linkedin.com/in/john-i-doherty) [![Twitter Follow](https://img.shields.io/twitter/follow/CambridgeMVP.svg?style=social&label=Twitter&style=plastic)](https://twitter.com/CambridgeMVP)

Cordova plugin to show decimal keyboard on iOS devices.

Taken from [john-doherty's](https://github.com/john-doherty) repo [cordova-plugin-decimal-keyboard-wkwebview](https://github.com/john-doherty/cordova-plugin-decimal-keyboard-wkwebview) and fixed placement of the button.

## Install

```bash
cordova plugin add --save cordova-plugin-decimal-key
```

## Usage

```html
<input 
       type="text" 
       pattern="[0-9]*" 
       decimal="true">
```

Input type number will not work, try to use text with [0-9] pattern instead.

<img src="screenshots/basic-usage.png" width="25%" height="25%" /> <img src="screenshots/basic-usage-typed-content.png" width="25%" height="25%" />

## Multiple decimals

```html
<input 
       type="text" 
       pattern="[0-9]*" 
       decimal="true" 
       allow-multiple-decimals="true">
```

### Different decimal character

```html
<input 
       type="text" 
       pattern="[0-9]*" 
       decimal="true" 
       allow-multiple-decimals="false" 
       decimal-char=",">
```

If you want to localize decimal character, you can change using decimal-char attribute

### Different button character

```html
<input 
       type="text" 
       pattern="[0-9]*" 
       decimal="true" 
       allow-multiple-decimals="false" 
       decimal-char="." 
       button-char=",">
```

If you want to use another character for button, you can change it using button-char attribute

## Known Issues
* Does not handle screen rotation.
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
