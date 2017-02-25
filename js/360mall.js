$(function() {
    $.get("data.json", function(data) {
        $.each(data[0], function(index) {
            var topNavLi = $("<li></li>");
            var topNavA = $("<a></a>");
            $(topNavA).attr("href", data[0][index].href);
            $(topNavA).html(data[0][index].text);
            $(topNavLi).append(topNavA);
            $("#topNavUl1").append(topNavLi);
        });
        $.each(data[1], function(index) {
            var topNavA = $("#topNavUl2").find("li").find("a");
            $(topNavA).attr("href", data[1][index].href);

        })
        $.each(data[2], function(index) {
            var smallUlLi = $("<li></li>");
            var ulLiA = $("<a></a>");
            $(ulLiA).attr("href", data[2][index].href);
            $(ulLiA).html(data[2][index].text);
            $(smallUlLi).append(ulLiA);
            $("#topSmallUl").append(smallUlLi);
        })
        $.each(data[3], function(index) {
                var bannerTopNavLis = $("<li></li>");
                var bannerTopA = $("<a></a>");
                $(bannerTopA).attr("href", data[3][index].href);
                $(bannerTopA).html(data[3][index].text);
                $(bannerTopNavLis).append(bannerTopA);
                $("#bannerTopNav").append(bannerTopNavLis);
            })
            /* $("#bannerTopNav").find("li").each(function() {*/
        $.each(data[4], function(index) {

            /* $(hide1Img).attr("src", data[4][index].imgUrl);
             $(hide1A).attr("href", data[4][index].href);
             $(hide1P).html(data[4][index].p);s
             $(hide1Span).html(data[4][index].span);
             $(hide1A).append(hide1Img);
             $(hide1A).append(hide1P);
             $(hide1A).append(hide1Span);
             $(hide1Lis).append(hide1A);
             $(".hide1").append(hide1Lis);*/

            // alert($("#bannerTopNav").find("li").find("a").html());
            if ($("#bannerTopNav").find("li").find("a").html() == data[4][index].title) {
                $.each(data[4][index].content, function(i) {
                    $(hide1Lis).html("");
                    var hide1Lis = $("<li></li>");
                    var hide1Img = $("<img>");
                    var hide1A = $("<a></a>");
                    var hide1P = $("<p></p>");
                    var hide1Span = $("<span></span>");
                    $(hide1Img).attr("src", data[4][index].content[i].imgUrl);
                    $(hide1A).attr("href", data[4][index].content[i].href);
                    $(hide1P).html(data[4][index].content[i].p);
                    $(hide1Span).html(data[4][index].content[i].span);
                    $(hide1A).append(hide1Img);
                    $(hide1A).append(hide1P);
                    $(hide1A).append(hide1Span);
                    $(hide1Lis).append(hide1A);
                    $(".hide1").append(hide1Lis);
                    $("#bannerTopNav").find("li").hover(function() {
                        $("#hideBg").stop(true);
                        $("#hideBg").animate({ height: 245, opacity: 1 });

                    }, function() {
                        $("#hideBg").stop(true);
                        $("#hideBg").animate({ height: 0, opacity: 0 });
                    });
                    $("#hideBg").hover(function() {
                        $(this).stop(true);

                        $(this).animate({ height: 245, opacity: 1 })
                    }, function() {
                        $(this).animate({ height: 0, opacity: 0 });

                    })
                })
            }
        })
        $.each(data[5], function(index) {
            var oAs = $("<a></a>");
            var oLis = $("<li></li>");

            $(oAs).attr("href", data[5][index].href);
            $(oAs).html(data[5][index].text);
            $(oLis).attr("class", data[5][index].name);
            $(oLis).append(oAs);
            $("#bannerU1").append(oLis);
            $(oAs).hover(function() {
                $(this).attr("background", "red")
            }, function() {
                $(this).attr("background", "");
            })
        });
        /* $.each(data[6],function(index){
            var oA = $("<a></a>");
            var oLis = $("<li></li>");
            var oImg = $("<img>");
            $(oImg).attr("src",data[6][index].imgUrl);
            $(oA).append(oImg);
            $(oLis).append(oA);
            $("#imgs").append(oLis);
         });*/
        $.each(data[7], function(index) {
            var oA = $("<a></a>");
            var oImg = $("<img>");
            $(oImg).attr("src", data[7][index].imgUrl);
            $(oA).attr("class", data[7][index].name);
            $(oA).attr("href", data[7][index].href)
            $(oA).append(oImg);
            $("#content1").append(oA);
        });
        $.each(data[8], function(index) {
            var oAs = $("#contentBox").find("a");
            var oImgs = $(oAs).find("img").eq(index);
            $(oImgs).attr("src", data[8][index].imgUrl);
            $(oAs).attr("href", data[8][index].href)
        });
        var oUl = $("#imgs");
        var aLi = $(oUl).find("li");
        var oAs = $(aLi).find("a");
        var aImg = $(oAs).find("img");
        var oBtn = $("#imgBtn").find("li");
        //$(aImg).attr("src", data[10][index].imgUrl);
        /*            $(oAs).append(aImg);
                    $(aLi).append(oAs);
                    $(oUl).append(aLi);*/
        var iNow = 0;
        var timer = null;
        timer = setInterval(function() {
            iNow++;
            $(oBtn).attr("class", "");
            $(oBtn).eq(iNow).attr("class", "active");
            if (iNow == $(aLi).size() - 1) {
                $(oBtn).eq(0).attr("class", "active");
            }
            $(oUl).animate({ left: -1240 * iNow }, function() {
                if (iNow == $(aLi).size() - 1) {
                    iNow = 0;
                    $(oUl).css("left", 0);
                }
            });

        }, 2000);
        /*       $("div").hover(function() {
                   clearInterval(timer);
               }, function() {
                   setInterval(timer);
               })*/

        $(oBtn).click(function() {
            iNow = $(this).index();
            $(oBtn).attr("class", "");
            $(oBtn).eq(iNow).attr("class", "active");
            $(oUl).animate({ left: -1240 * iNow });
            if (iNow == $(aLi).size() - 1) {
                $(oBtn).eq(0).attr("class", "active");
                iNow = 0;
                $(oUl).css("left", 0);
            }
        });


        // —------------------gouwuche ------------------------
        $.each(data[11], function(index) {
            var oAs = $("<a></a>");
            $(oAs).html(data[11][index].txt);
            $(oAs).attr("href", data[12][index].href);
            $(".gdTitle1").append(oAs);

        });
        /*
                });*/
        $.each(data[12], function(index) {
            var oAs = $("<a></a>");
            $(oAs).html(data[12][index].txt);
            $(oAs).attr("href", data[12][index].href);
            $(".gdTitle2").append(oAs);

        });
        $.each(data[13], function(index) {
            var oAs = $("<a></a>");
            $(oAs).html(data[13][index].txt);
            $(oAs).attr("href", data[12][index].href);
            $(".gdTitle3").append(oAs);


        });
        $.each(data[14], function(index) {
            var oDiv = $("<div></div>");
            var oAs = $("<a></a>");
            var aImg = $("<img>");
            var oPtitle = $("<p></p>");
            var oSpPrice = $("<span></span>");
            var oBtn = $("<button></button>");
            $(oAs).attr("href", data[14][index].href);
            $(aImg).attr("src", data[14][index].imgUrl);
            $(oPtitle).html(data[14][index].name);
            $(oSpPrice).html(data[14][index].price);
            $(oBtn).html(data[14][index].btnTxt);
            $(oPtitle).attr("class", ".p-title");
            $(oSpPrice).attr("class", "span-price")
            $(oBtn).attr("id", data[14][index].btnId)
            $(oAs).append(aImg);
            $(oAs).append(oPtitle);
            $(oAs).append(oSpPrice);
            $(oDiv).append(oAs);
            $(oDiv).append(oBtn);
            $("#gdList").append(oDiv);
        });
        $("#shopCar").mouseenter(function() {
            $("#shoppingCarList").css("display", "block");
            sc_msg()
        });
        $("#shopCar").mouseleave(function(){
            $("#shoppingCarList").css("display", "none");
            sc_msg()
        });
        $("#shoppingCarList").mouseenter(function(){
            $("#shopCar").stop(true);
        });
        // 点击j加入购物车事件
        $("#gdList div").on("click","button",function(){
            var id = this.id;
            var first = $.cookie("goods") == null? true:false;
            var same = false;
            if(first){
                $.cookie("goods","[{id:" + id + ",num:1}]");
                $.cookie("first","false");
            }else{
                var str = $.cookie("goods");
                var arr = eval(str);
                for(var attr in arr){
                    if(arr[attr].id == id){
                        arr[attr].num = arr[attr].num + 1;
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods",cookieStr);
                        same = true;
                    }
                }
                if(!same){
                    var obj = {id:id,num:1};
                    arr.push(obj);
                    var cookieStr = JSON.stringify(arr);
                    $.cookie("goods",cookieStr);
                }
            }
            sc_car();
        })
        function sc_car(){
            var sc_str = $.cookie("goods");
            if(sc_str){
                var sc_obj = eval(sc_str);
                //alert(sc_obj);
                var sc_num = 0;
                for(var i in sc_obj){
                    sc_num = Number(sc_obj[i].num) + sc_num;
                }
                $(".goodsNum").html(sc_num);
            }
        }


        /***************************************************/
    })
})
function sc_msg(){
            $.ajax({
                url:"data.json",
                type:"GET",
                success:function(res){
                    var sc_str = $.cookie("goods");
                    if(sc_str){
                        var sc_obj = eval(sc_str);
                        var sc_num = 0;
                        var html = "";
                        for(var i in sc_obj){
                            html += '<li class="goods-list"><div class="goodsPic" ><img src ='+ res[14][sc_obj[i].id].imgUrl + '></div><div class ="goodsTitle">' + res[14][sc_obj[i].id].name + '</div><div class="goodsNum">' + sc_obj[i].num + '</div></li>'
                        }
                        $("#shoppingCarUl").html(html);
                    }
                }
            })
        }
