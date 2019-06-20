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
        
        $('#Blog').append(    
`
<div class="col-md-12">
<div class="blog-entry ftco-animate fadeInUp ftco-animated">
    <!--<a href="#" class="img" style="background-image: url(images/image_5.jpg);"></a>-->
    <div class="text pt-2 mt-3">
  <!--<span class="category mb-1 d-block"><a href="#">Technology</a></span>-->
<h3 class="mb-4"><a href="` + item.link + `">` + item.title + `</a></h3>
<p class="mb-4">
`
+ item.description +
`
</p>
<!--
<div class="author mb-4 d-flex align-items-center">
    <a href="#" class="img" style="background-image: url(images/person_1.jpg);"></a>
    <div class="ml-3 info">
        <span>Written by</span>
        <h3><a href="#">` + "Tayyebi" + `</a>, <span>` + item.pubDate + `</span></h3>
    </div>
</div>
<div class="meta-wrap d-md-flex align-items-center">
  <div class="half order-md-last text-md-right">
      <p class="meta">
          <span><i class="icon-heart"></i>3</span>
          <span><i class="icon-eye"></i>100</span>
          <span><i class="icon-comment"></i>5</span>
      </p>
  </div>
  <div class="half">
      <p><a href="` + item.link + `" class="btn btn-primary p-3 px-xl-4 py-xl-3">Continue Reading</a></p>
  </div>
</div>
-->
</div>
</div>
</div>
`
        );

    });
});