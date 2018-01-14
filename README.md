# JavaScript Design Pattern Examples

This repository contains JavaScript Design Pattern examples.
There are 4 design patterns in JavaScript

<h3> Module Pattern Examples </h3>
<h4> module-pattern/app.js and module-pattern/app1.js files </h4>

Execution in browser sconsole:
WebNotification.showNotification("Hello World!");

output: alert message with Hello World!

WebNotification.showNotification();

output: alert message with Default Message;

<h3> ProtoType Pattern Examples </h3>
<h4> prototype-pattern/app.js </h4>

Execution in browser sconsole:
var wn = new WebNotification();

wn.showNotification("Hello World!");
output: alert message with Hello World

wn.showNotification();
output: alert message with Default Message;

<h3> Observer Pattern Examples </h3>

<h3> Singleton Pattern Examples </h3>
var wn = WebNotification.getInstance();
wn.showNotification();

