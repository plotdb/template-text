# text-template

generate text from template for all purposes with LiveScript syntax.

## Usage

install with npm:

    npm install --save text-template


command name and parameters:

    tt -c config.file -o output.file template.file


## API

Programmatically interpolate your template with `text-template` api:

    tt = require("text-template")
    cfg = function() { return { ... }; } || { ... };
    ret = tt("<template-file-content>", cfg);


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
    tt = require("text-template");

    ret = tt(<the above text>, {uuid: uuid});


## TODO

 - Token Customizing - It's possible that the token `!{ ... }` is used by the target language / syntax of the text we want to interpolate. So it will be nice if we can make it customizable.


## License 

MIT
