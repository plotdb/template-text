# template-text

generate text from template for all purposes with LiveScript syntax.

## Usage

install with npm:

    npm install --save template-text


command name and parameters:

    tt -c config.file -o output.file template.file


You can also require a module as config to use functions in the template from the module:

    tt -r some-module -o output.file template.file


## API

Programmatically interpolate your template with `template-text` api:

    tt = require("template-text")
    cfg = function() { return { ... }; } || { ... };
    ret = tt("<template-file-content>", cfg, <root-path>);

where:

 - cfg: a hash of all available variable
 - root-path: reference root when look up files for include api.

## Template File Format

For every string you want to replace, use `!{ ... }` with variable / expression inside. For example, 

    Hello !{user.name}!

    You have visited our website for !{user.count} time.


It also supports conditional block:

    !{if user.count > 10 => '''

    it seems that you have been here for many times.

    ''' else '''

    Newcomer here? You probably will want to take a look at our tutorial.

    '''}


When calling with API, you can even use builtin functions for expressions, or custom function if you pass it into the config object:

    A random number: !{Math.random()}
    A random UUID: !{uuid()}


Program counterpart for above text:

    uuid = require("uuid");
    tt = require("template-text");

    ret = tt(<the above text>, {uuid: uuid});


We use LiveScript to parse the expression when interpolating.

## Builtin Functions

Except common JS APIs, you can also use following API in template:

 - include(filename) - recursively include file in place.


## TODO

 - Token Customizing - It's possible that the token `!{ ... }` is used by the target language / syntax of the text we want to interpolate. So it will be nice if we can make it customizable.


## License 

MIT
