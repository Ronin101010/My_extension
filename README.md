# helloextension README

## Features
### Commands
- Command Remove comment lines

Before 
![Remove comment lines command before](images/image.png)
After
![Remove comment lines command before](images/image2.png)

This command deletes lines that contain only comments.
This command simply applies the regular expressions mentioned below to the selected text.

((RegExp)("((\n)( \*)(\t*)(//.+))+\n", "g"), "\n");

((RegExp)("((^)( \*)(\t*)(//.+))+\n", "g"), "");
## Release Notes

Users appreciate release notes as you update your extension.

* d7573cb (HEAD -> CLRemover, origin/CLRemover) documentation
* e5862b5 comment line remover
* cdc30c8 (origin/master, master, delete) new extension