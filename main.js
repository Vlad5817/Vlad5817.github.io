"use strict";

$(document).ready(function(){
    let nav = $("header>nav").get(0);
    let offset = nav.offsetTop;
    $(this).scroll(function(){
        if ($(window).scrollTop() >= offset){
            $(nav).addClass("fixed_nav")
            $(nav).removeClass("abs_nav")
        }
        else{
            $(nav).addClass("abs_nav")
            $(nav).removeClass("fixed_nav")
        }
    })
    
    let calc = document.getElementById("calculator");
    let buttons = calc.getElementsByTagName("div")
    let inp = calc.getElementsByTagName('input')[0]
    for (let i = 0; i < buttons.length; i++)
    {
        buttons[i].classList.add("btn")
        buttons[i].classList.add("btn-primary")
        buttons[i].addEventListener('click', function ()
        {
            if(buttons[i].textContent != "=")
                inp.value += buttons[i].textContent;
            else
                inp.value = eval(inp.value);    
        });

    }

    let key = "O0I3LT8HQ7D2";
    jQuery.ajax({
    type: "GET",
    url: "https://api.tenor.com/v1/random",
    data: 'key='+ key + '&q=cat&limit=1',
    success: function(data) {
        $("#random-gif>img").attr("src", data["results"][0]["media"][0]["gif"]["url"]);
    }
    });


    let card = $("#search-result .col-12").clone();
    $("#search-result").empty();
    let resultIsShown = false;
    $("#search-input .btn").click(function(){
        $("#search-result").empty();
        jQuery.ajax({
            type: "GET",
            url: "https://api.tenor.com/v1/search",
            data: 'key='+ key + '&q=' + $("#search-input input").val(),
            success: function(data) {
                for(let i = 0; i <= data["next"]; i++){
                    let c = card.clone();
                    c.find("img").attr("src", data["results"][String(i)]["media"][0]["gif"]["url"]);
                    c.appendTo("#search-result");
                }
            }
        });
    })
});
 
