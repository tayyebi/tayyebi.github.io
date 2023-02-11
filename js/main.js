// Get all bionic paragraphs
var biops = document.getElementsByClassName("bionic");
// Foreach bionic
for (var i = 0; i < biops.length; i++) {
    // Get content and convert to array
    var content = biops[i].innerHTML.split('');
    // Array to hold seperators addresses
    var indeces = [];
    // Check if we are inside an HTML tag
    var tag = false;
    // Foreach charachter in the content
    for (var j = 0; j < content.length; j++) {
        // If a tag starts
        if (content[j] == '<') {
            tag = true;
        }
        // If a tag ends
        else if (content[j] == '>') {
            tag = false;
        }
        // We seperate words with \s space!
        else if (content[j] == ' ' && !tag) {
            indeces.push(j);
        }
    }
    // Remove indeces if there are a serial of them
    for (var j = indeces.length; j > 0; j--) {
        if (indeces[j] - indeces[j - 1] == 1)
            indeces.splice(j, 1);
    }
    // Add spans to each word
    for (var j = indeces.length; j > 0; j--) {
        span_b =
            // If wasn't first char
            (j > 1 ? "</span>" : "") +
            // If wasn't last char
            (j < indeces.length ? "<span class=\"b\">" : "");
        // Add span to the right place
        content.splice(indeces[j - 1], 0, span_b);
    }
    // Replace new content with previous
    biops[i].innerHTML = content.join('');
}