$(function() {


    $("#iMail").find("input").blur(function() {
        var patten = new RegExp(/^[0-9|A-z|_]{1,17}[@][0-9|A-z]{1,3}.(com)$/);
        var iMail = $("#iMail").find("input").val();
        if (patten.test(iMail)) {
            $("#iMail").find("i").css("display", "block");
            $("#iMail").find("span").css("display", "none");
        } else {
            $("#iMail").find("span").css("display", "block");
            $("#iMail").find("i").css("display", "none");

        }

    })
    $("#iNumber").find("input").blur(function() {
        var patten = new RegExp(/^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/);
        var iNumber = $("#iNumber").find("input").val();
        if (patten.test(iNumber)) {
            $("#iNumber").find("i").css("display", "block");
            $("#iNumber").find("span").css("display", "none");
        } else {
            $("#iNumber").find("span").css("display", "block");
            $("#iNumber").find("i").css("display", "none");

        }

    })
    $("#iUername").find("input").blur(function() {
        var patten = new RegExp(/^([a-zA-Z]|[\u4E00-\u9FA5])([a-zA-Z0-9]|[\u4E00-\u9FA5]|[_]){5,15}$/);
        var iUername = $("#iUername").find("input").val();
        if (patten.test(iUername)) {
            $("#iUername").find("i").css("display", "block");
            $("#iUername").find("span").css("display", "none");
        } else {
            $("#iUername").find("span").css("display", "block");
            $("#iUername").find("i").css("display", "none");

        }

    })
    $("#iPassword").find("input").blur(function() {
        var patten = new RegExp(/^(\w){6,20}$/);
        var iPassword = $("#iPassword").find("input").val();
        if (patten.test(iPassword)) {
            $("#iPassword").find("i").css("display", "block");
            $("#iPassword").find("span").css("display", "none");
        } else {
            $("#iPassword").find("span").css("display", "block");
            $("#iPassword").find("i").css("display", "none");

        }

    })
    $("#iPasswordCon").find("input").blur(function() {
        var iPassword = $("#iPassword").find("input").val();
        var iPasswordCon = $("#iPasswordCon").find("input").val();
        if (iPassword == iPasswordCon) {
            $("#iPasswordCon").find("i").css("display", "block");
            $("#iPasswordCon").find("span").css("display", "none");
        } else {
            $("#iPasswordCon").find("span").css("display", "block");
            $("#iPasswordCon").find("i").css("display", "none");

        }

    })

    $("#change").click(function() {
        var oRandCode = $("#randomCode").html(yzm());

    })

    $("#randomCodeP").find("input").blur(function() {
        var oInCode = $("#randomCodeP").find("input").val();
        if ($("#randomCode").html() == oInCode) {
            $("#randomCodeP").find("i").css("display", "block");

        } else {
            $("#randomCodeP").find("i").css("display", "none");
        }
    })




    function yzm() {
        var arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        var str = '';
        for (var i = 0; i < 4; i++)
            str += '' + arr[Math.floor(Math.random() * arr.length)];
        return str;
    }
    $("#regis").click(function() {
        $("#boxBlank").css("display","block");
        $("#boxBg").css("display","block");
        return false;
    });
    $("#panel-close").click(function(){
      $("#boxBlank").css("display","none");
        $("#boxBg").css("display","none");
    })

})
