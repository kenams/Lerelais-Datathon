(function(){

	window.onLoad = function() {
		console.log("-= lerelai =-");

		$(".lnkSubsc").click(function(){
			$(this).toggleClass("checked");
		});

    function incrPage(incr){
      var urlParts = window.location.href.split("#");
      var newPage = Math.max(parseInt(urlParts[1] || 0) + incr, 0);
      console.log(urlParts, newPage)
      window.location.href = urlParts[0] + "#" + newPage;
    }
    $("#prevPage").click(function(){
      incrPage(-1);
    });
    $("#nextPage").click(function(){
      incrPage(1);
    });      

	};

})();