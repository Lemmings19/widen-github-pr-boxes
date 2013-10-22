//               This is an example! Hello world! :)
//
//               Even though this text goes on and on, way past the soft 80 character limit that many standards attempt to adhere to, it is still visible in code review because this box has been widened!
//
//               Wayfarers lo-fi Echo Park fashion axe kogi slow-carb. Cornhole ullamco vegan keffiyeh occupy. Organic literally ut, authentic cupidatat retro anim trust fund American Apparel salvia mollit brunch laboris. Bitters officia banh mi, labore Wes Anderson sunt assumenda flexitarian cray 90's sint PBR&B elit. Direct trade ugh ut, Neutra id culpa paleo 3 wolf moon distillery lomo wayfarers stumptown. Reprehenderit forage Marfa Wes Anderson post-ironic chia nulla, non mixtape et tofu. Occupy kogi biodiesel duis.
//               Try-hard wolf voluptate polaroid, sustainable iPhone nihil fingerstache. Vice nostrud direct trade occaecat incididunt blog plaid. Literally incididunt PBR&B, quis pop-up lomo fixie deserunt leggings meh lo-fi Tumblr mlkshk Austin est. Laborum nihil lo-fi shabby chic Vice. Wes Anderson small batch ethical put a bird on it PBR. Proident direct trade minim paleo, cillum mlkshk eiusmod adipisicing chillwave polaroid sed tattooed viral jean shorts. Incididunt occupy nulla, PBR&B in polaroid laboris beard.
//               Literally Bushwick mustache tote bag paleo, pickled sapiente bitters. Gentrify forage vegan, occupy literally duis yr kale chips 3 wolf moon ut slow-carb fashion axe keffiyeh squid. Trust fund semiotics hoodie, raw denim Shoreditch mustache Helvetica organic yr beard. Bushwick aesthetic brunch, aute blog single-origin coffee Tumblr mumblecore Odd Future reprehenderit Intelligentsia shabby chic fashion axe. Gentrify fanny pack eu Pinterest PBR&B, ugh quinoa veniam id vero single-origin coffee XOXO. Shabby chic mustache McSweeney's, fingerstache post-ironic chia umami fanny pack readymade wolf sunt 90's pop-up. Non distillery fap Austin Wes Anderson, banjo ad irony lomo deep v.
//               Art party YOLO laboris narwhal. Butcher adipisicing sint, assumenda fugiat lo-fi chillwave. Typewriter ex Cosby sweater Tonx qui, mustache trust fund mlkshk authentic VHS artisan banh mi Truffaut pariatur. Seitan occaecat dolore, irony bespoke put a bird on it consequat asymmetrical. Twee +1 laborum authentic incididunt master cleanse eu, cillum VHS laboris. Post-ironic pickled Blue Bottle flannel Godard forage literally, deserunt roof party 90's. American Apparel aliquip dolore, whatever commodo single-origin coffee butcher Pitchfork cornhole synth church-key enim tote bag.
//
// ==UserScript==
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
