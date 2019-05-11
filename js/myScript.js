//$(document).ready(function() {}); tells the browser to only make these changes once the page is fully loaded.
/*$(document).ready(function() {
    $("h2").css("text-decoration", "underline"); //underline all the h2 elements
    $("ul").css("border", "solid 1px #ccc"); //adds a border to all lists
    
});

this is one way of doing it but its bad coding as using .css changes the code using inline styles
*/

//this is a better way - first add code for new classes to the html file (see comment in .html file to show where to put these)
//and then use the addClass() function to add these changes or the removeClass() function to remove it from these tags
$(document).ready(function() {
    $("h2").addClass("underline"); //underline all the h2 elements
    $("ul").removeClass("border"); //adds a border to all lists
    
});
