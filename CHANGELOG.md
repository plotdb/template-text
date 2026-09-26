# Change Logs

## v0.2.1

 - fix bug: `!""` / `""!` replacement consumes the adjacent character, breaking templates such as `!""!{x}""!`


## v0.2.0

 - change spec: use `!""` and `""!" to replace `"""` to prevent it from being escape


## v0.1.3

 - escape `"""` heredoc syntax
 - upgrade module to fix vulnerability


## v0.1.2

 - fix bug: build script incorrectly generates bin files.
 - update outdated index.js


## v0.1.1

 - only release necessary files.
 - fix bug: we already upgrade from LiveScript to livescript but code still use LiveScript.
 - remove LiveScript header and wrap code in function.

## v0.1.0

 - support yaml.
 - upgrade LiveScript version.
