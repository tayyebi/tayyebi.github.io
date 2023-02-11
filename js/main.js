// var biops = document.getElementsByClassName("bionic");
// for (var i = 0; i < biops.length; i++) {
//     var text = biops[i].innerHTML;
//     var pattern = /([a-zA-Z\u0600-\u06FF\uFB8A\u067E\u0686\u06AF‌]+)/g;
//     text = text.replace(pattern, "<span style=\"color:red\">$1</span>");
//     biops[i].innerHTML = text;
// }


// Get all bionic paragraphs
var biops = document.getElementsByClassName("bionic");
// Foreach bionic
for (var i = 0; i < biops.length; i++) {
    // Get content and convert to array
    var indeces = [];
    var content = biops[i].innerHTML.split('');
    // Foreach charachter in the content
    var tag = false;
    for (var j = 0; j < content.length; j++) {
        if (content[j] == '<') {
            tag = true;
        } else if (content[j] == '>') {
            tag = false;
        } else if (content[j] == ' ' && !tag) {
            indeces.push(j);
        }
    }
    for (var j = indeces.length; j > 0; j--) {
        if (indeces[j] - indeces[j - 1] == 1)
            indeces.splice(j, 1);
    }
    console.log(indeces);
    for (var j = indeces.length; j > 0; j--) {
        span_b =
            (j > 1 ? "</span>" : "") +
            (j < indeces.length ? "<span class=\"b\">" : "");
        content.splice(indeces[j - 1], 0, span_b);
    }
    console.log(content.join(''));
    biops[i].innerHTML = content.join('');
}