// ==UserScript==
//
//				 This is an example! Hello world! :)
//
// @id           org.userscripts.users.lemmings19.widengithubprboxes
// @name         Widen Github PR Boxes
// @version      0.1
// @author       Lemmings19
// @description  I'm tired of code reviewing in cramped little boxes.
// @include      https://github.com/*/pull/*
// @include      https://github.com/*/compare/*
// ==/UserScript==

var container = document.getElementsByClassName("container");
container[2].setAttribute("style", "margin-left:5% ; margin-right:5%");
container[2].setAttribute("class", "none");

var repositoryWithSidebar = document.getElementsByClassName("repository-with-sidebar");
repositoryWithSidebar[0].setAttribute("style", "width:100%");

var contextLoaderContainer = document.getElementsByClassName("context-loader-container");
contextLoaderContainer[0].setAttribute("style", "width:90%");
