$.get("https://tayyebi.blog.ir/rss/", function(data) {
    var $xml = $(data);
    $xml.find("item").each(function() {
        var $this = $(this),
            item = {
                title: $this.find("title").text(),
                link: $this.find("link").text(),
                description: $this.find("description").text(),
                pubDate: $this.find("pubDate").text(),
                author: $this.find("author").text()
        }
        $('.blog').append( ''
            + '<a href="' + item.link + '">'
            + '<h3>'
            + item.title
            + '</h3>'
            + '</a>'
            + '<h4>'
            + item.pubDate
            + '</h4>'
            + item.description
            + '<br />'
        );
    });
});