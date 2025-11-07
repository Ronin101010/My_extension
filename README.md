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

* 4211d8b (HEAD -> CLRemover, origin/CLRemover) docs2
* 70b7bfc Release Notes update
* d7573cb documentation
* e5862b5 comment line remover
* cdc30c8 (origin/master, master, delete) new extension