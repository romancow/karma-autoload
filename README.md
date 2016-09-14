# karma-autoload

Automatically add dependepncies defined in your package.json into your Karma configuration. Module on NODE > 5.0

## Getting started

* Install the *karma-autoload* module

```shell
npm install --save-dev karma-autoload
```

* In your Karma configuration file, add the *autoload* module into your Karma frameworks

```json
frameworks: ["autoload"]
```

By default, all dependencies will be added with this configuration :

```javascript
{pattern: 'path', included: true, served: true, watched: true}
```

In the karma configuration file, you can override these parameter, with this new configuration block :

```json
autoloadFramework: {"included": false, "served": false, "watched": false},
```

Skip the autoload of a dependency by putting it's name in the "skip" option:

```json
autoloadFramework: {"skip": ["some-package"]},
```
