# Foudation SavSelect
jQuery Plugin for simple or multiple amazing selects with Zurb Foundation. You'll can add thumbnails, select or deselect all values into the multiple selects, etc.

# Installation and Configuration

Just add in the this order the links to the css files in your `<head>`:
```html
<link rel="stylesheet" href="../libs/css/foundation.min.css">
<link rel="stylesheet" href="../libs/css/normalize.css">
<link rel="stylesheet" href="../css/sav-select.min.css">
```

Then, before your closing ```<body>``` tag add:

```html
<script src="../libs/js/jquery.min.js"></script>
<script src="../libs/js/foundation.min.js"></script>
<script src="../dist/sav-select.min.js"></script>
```

#### Contributing

PLEASE review README.md prior to requesting a feature, filing a pull request or filing an issue.

# Usage

Simply add the .sav-select class to the ```<select>``` choosen...

```html
<label for="user">NAME</label>
<select id="user" class="sav-select" name="user">
    <option value="silvano">SILVANO</option>
    ...
</select>
```
...or instantiate the SavSelect() object.

```html
<script>

    (function() {

        $('.custom-selector').SavSelect();

    })();

</script>
```

#### Example with thumbnails:

You add the data-thumb attribute into the select options.

```html
<label for="user">NAME</label>
<select id="user" class="sav-select" name="user">
    <option value="silvano" data-thumb="http://your-website/silvano/image/path">SILVANO</option>
    ...
</select>
```

#### Example with multiple select:

You add only the multiple attribute and it works.

```html
<select id="users" class="sav-select" name="users" multiple>
    <option value="silvano">SILVANO</option>
    ...
</select>
```

#### Example with custom default message:

You add only the 'data-text' attribute and it works...

```html
<select id="users" class="sav-select" name="users" data-text="CUSTOM DEFAULT MESSAGE" multiple>
    <option value="silvano">SILVANO</option>
    ...
</select>
```

...or pass the 'default_option' config value into the SavSelect() object.

```html
<script>

    (function() {

        $('.custom-selector').SavSelect({
            'default_option': 'SELECCIONAR OPCIÓN'
        });

    })();

</script>
```

### Example with custom select/deselect all options message:

You add the 'data-all' attribute and it works.

```html
<select id="users" class="sav-select" name="users" data-all="DE/SELECT ALL OPTIONS" multiple>
    <option value="silvano">SILVANO</option>
    ...
</select>
```
...or pass the 'all' config value into the SavSelect() object.

```html
<script>

    (function() {

        $('.custom-selector').SavSelect({
            'all': 'DE/SELECT ALL OPTIONS'
        });

    })();

</script>
```