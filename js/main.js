// Get all bionic paragraphs
var biops = document.getElementsByClassName("bionic");
// Foreach bionic
for (var i = 0; i < biops.length; i++) {
    // for (var i = 0; i < biops.length; i++) {
    // Get content and convert to array
    var content = biops[i].innerHTML.split('');
    // Array to hold seperators addresses
    var indeces = [];
    // Check if we are inside an HTML tag
    var tag = false;
    // Add last char and add white space
    indeces.push(0);
    content.splice(content[0], 0, "");
    // Foreach charachter in the content
    for (var j = 0; j < content.length; j++) {
        // Remove duplicated spaces
        while (content[j] == ' ' && (content[j + 1] == ' ' || content[j + 1] == '<' || content[j + 1] == ">")) {
            content.splice(j, 1);
        }
        // If a tag starts
        if (content[j] == '<') {
            tag = true;
        }
        // If a tag ends
        else if (content[j] == '>') {
            tag = false;
        }

        // Skip tags
        if (content[j] == '>') {
            indeces.push(j);
        } else if (content[j] == '<') {
            indeces.push(j);
        }
        // We seperate words with \s space!
        else if (content[j] == ' ' && !tag) {
            indeces.push(j);
        }
    }
    // Add last char
    indeces.push(content.length);
    // Remove indeces if there are a serial of them
    for (var j = indeces.length; j > 0; j--) {
        if (indeces[j] - indeces[j - 1] == 1)
            indeces.splice(j, 1);
    }
    // Add spans to each word
    for (var k = indeces.length; k > 0; k--) {
        var span_b = "";
        var special = false;
        // End span
        if (content[indeces[k - 1]] == '>') {
            special = '>';
        } else if (k > 1) {
            span_b += "</span> ";
        }
        // Start Span
        if (content[indeces[k - 1]] == '<') {
            special = '<';
        } else if (k < indeces.length) {
            span_b += "<span class=\"b\">";
        }
        // Add span to the right place
        content.splice(indeces[k - 1] + (special == '>' ? 1 : 0), special ? 0 : 1, span_b);
    }
    // Replace new content with previous
    biops[i].innerHTML = content.join('');
}