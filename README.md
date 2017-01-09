# parse-absolute-css-unit
parse absolute css unit : cm mm in px pt pc

## Install
```bash
npm install parse-absolute-css-unit
```

## Usage
```javascript
parseAbsoluteCSSUnit('1in'); // 96
parseAbsoluteCSSUnit('2.54cm'); // 96
parseAbsoluteCSSUnit('25.4mm'); // 96
parseAbsoluteCSSUnit('72pt'); // 96
parseAbsoluteCSSUnit('6pc'); // 96
parseAbsoluteCSSUnit('96px'); // 96
parseAbsoluteCSSUnit('96'); // 96

parseAbsoluteCSSUnit('-1in'); // -96
parseAbsoluteCSSUnit('-2.54cm'); // -96
parseAbsoluteCSSUnit('-25.4mm'); // -96
parseAbsoluteCSSUnit('-72pt'); // -96
parseAbsoluteCSSUnit('-6pc'); // -96
parseAbsoluteCSSUnit('-96px'); // -96
parseAbsoluteCSSUnit('-96'); // -96
parseAbsoluteCSSUnit('0'); // 0

parseAbsoluteCSSUnit('hello'); // Error
parseAbsoluteCSSUnit('a'); // Error
parseAbsoluteCSSUnit('null'); // Error
parseAbsoluteCSSUnit('undefined'); // Error
parseAbsoluteCSSUnit('1.1.1'); // Error
parseAbsoluteCSSUnit('1.b'); // Error
parseAbsoluteCSSUnit(null); // Error
parseAbsoluteCSSUnit(undefined); // Error
parseAbsoluteCSSUnit(NaN); // Error
parseAbsoluteCSSUnit(Infinity); // Error
parseAbsoluteCSSUnit(-Infinity); // Error
parseAbsoluteCSSUnit(true); // Error
```
