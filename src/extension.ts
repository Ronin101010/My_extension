// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { addAbortListener } from 'events';
import { toNamespacedPath } from 'path';
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloextension" is now active!');
	
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('helloextension.removecommentlines', () => {
		// The code you place here will be executed every time your command is executed
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			// Get the word within the selection
			const word = document.getText(selection);
			// remove not first comment lines
			const prefixed = word.replace((RegExp)("((\n)( *)(	*)(//.+))+\n", "g"), "\n");
			// remove first comment lines
			const fixed = prefixed.replace((RegExp)("((^)( *)(	*)(//.+))+\n", "g"), "");
			//return fixed text
			editor.edit(editBuilder => {
				editBuilder.replace(selection, fixed);
			});
		}
		// Display a message box to the user
		vscode.window.showInformationMessage('Comment lines removed!');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
