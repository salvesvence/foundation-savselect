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

### Data Attribute Settings

Simply add the .sav-select class to the <select> choosen.

Example:

```html
<label for="user">NAME</label>
<select id="user" class="sav-select" name="user">
    <option value="silvano" data-thumb="http://your-website/silvano/image/path">SILVANO</option>
    <option value="john" data-thumb="http://your-website/john/image/path">JOHN</option>
    <option value="doe" data-thumb="http://your-website/doe/image/path">DOE</option>
</select>
```



```html

```

* Example with multiple select:
You add only the multiple attribute and it works.

```html
<select id="user" class="sav-select" name="user" multiple>
    <option value="silvano">SILVANO</option>
    ...
</select>
```