var names = ["dhannu", "dhanraj", "krishna", "deepanshu", "mayank", "manoj", "tara", "rahul", "shivam", "nitin"];

function change() { "use strict";
                   document.getElementById("item2").innerHTML = names[Math.floor(Math.random() * names.length)];
                   document.getElementById("item3").innerHTML = names[Math.floor(Math.random() * names.length)];
                  }