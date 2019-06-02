$(document).ready(function() {

    windowUpdate();

    $('#titel').css('top', 'calc(50% - ' + ($('#titel').height() / 2 + 30) + 'px)');
    if ($(window).width() < 800) {
        $('#titel').css('left', 'calc(50% - ' + ($('#titel').width() / 2) + 'px)');
    } else {
        $('#titel').css('left', 'calc(50% - 400px)');
    }

    scrollDisable = false;
    transet = false;
    colorset = false;

    if ($(window).width() < 1000) {
        mobile = true;
        $('#controls').css('width', '100%');
        $('#controls').css('left', '0');
        $('#controls').css('bottom', '0');

    } else {
        mobile = false;
    }

    if (location.hash.replace(/#/, '') != '') {
        hascroll();
    }

    $(window).bind('mousewheel', function(e) {
        if (scrollDisable) {
            return false;
        }
    });
    $(window).bind('DOMMouseScroll', function(e) {
        if (scrollDisable) {
            return false;
        }
    });

    a = '';
    $(document).keyup(function(e) {
        a += e.which + ',';
        if (a.indexOf('72,85,73,83,87,69,82,75,') != -1) {
            $('#wiskunde').css('display', 'block');
            $('#input').focus();
            a = '';
        }
        if (a.indexOf('77,65,73,76,90,') != -1) {
            $("input[type='email']:nth-child(odd)").css('opacity', '1');
            $("input[type='email']:nth-child(odd)").css('width', 'calc(50% - 2.5px)');
            a = '';
        }
        if (a.indexOf('71,65,77,69,32,79,70,32,76,73,70,69') != -1) {
            toggleGol();
            a = '';
        }
        if (a.indexOf('82,79,76,76') != -1) {
            $('#background').css('transition', '2s');
            setTimeout(function() {
                $('#background').css('transform', 'rotateX(180deg)');
                setTimeout(function() {
                    $('#background').css('transition', '0s');
                }, 20);
            }, 20);
            a = '';
        }
    });

    $(window).resize(windowUpdate);

    $(window).on('scroll', function(e) {
        //$('#background').css('transform','rotateX(-'+($(window).scrollTop()/$(window).height()*5)+'deg) scale('+(1+($(window).scrollTop()/$(window).height()/20))+')');
        if ($(window).scrollTop() >= $(window).height() - $('#menu').height()) {
            $('#menu').css('top', '0px');
            $('#menu').css('position', 'fixed');
            $('#menu').css('background-color', 'rgba(25, 173, 226,1)');
        } else {
            $('#menu').css('top', 'calc(100% - ' + $('#menu').height() + 'px)');
            $('#menu').css('position', 'absolute');
            $('#menu').css('background-color', 'rgba(255, 255, 255,.05)');
        }
        $('#menu a').removeAttr('active');
        elem = 'pepermoes';
        if ($(window).scrollTop() < $(window).height() / 2) {
            elem = $("a[href='#p1']").eq(0);
        } else if ($(window).scrollTop() < $('#page2').offset().top + $('#page2').height() / 2) {
            elem = $("a[href='#p2']").eq(0);
        } else if ($(window).scrollTop() < $('#page3').offset().top + $('#page3').height() / 2) {
            elem = $("a[href='#p3']").eq(0);
        } else if ($(window).scrollTop() < $('#page4').offset().top + $('#page4').height() / 2) {
            elem = $("a[href='#p4']").eq(0);
        } else if ($(window).scrollTop() < $('#page5').offset().top + $('#page6').height() / 1) {
            elem = $("a[href='#p5']").eq(0);
        } else {
            elem = $("a[href='#p6']").eq(0);
        }
        elem.attr('active', '');
        if (elem.attr('href') == '#p3' && !transet) {
            transet = true;
            $('#experience>div').attr('transition', '');
        }
        if (elem.attr('href') == '#p3' && !colorset) {
            colorset = true;
            var a = 0;
            ival = self.setInterval(function() {
                var lvl = (parseInt($('div[value]').eq(a).attr('value')) + 20) * .8;
                var clr = 'rgb(' + Math.round((1 - lvl / 100) * 255) + ',' + Math.round((lvl / 100) * 255) + ',0)';
                $('div[value]').eq(a).css('width', 'calc(' + lvl + '% - 98px)');
                $('div[value]').eq(a).css('margin-right', (100 - lvl) + '%');
                $('div[value]').eq(a).css('background-color', clr);
                a++;
                if (a >= $('div[value]').length) {
                    clearInterval(ival);
                }
            }, 200);
        }
        if (location.hash != elem.attr('href')) {
            history.pushState('asdf', 'as', './' + elem.attr('href'));
            if (elem.text() == "Hoofdpagina") {
                $('title').html("Ruurd Bijlsma - Portfolio");
            } else {
                $('title').html("Ruurd Bijlsma - " + elem.text());
            }
        }
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        if (location.hash == e.target.hash) {
            hascroll();
        }
        window.location.hash = e.target.hash;
    });
    $(window).on('hashchange', function(e) {
        e.preventDefault();
        hascroll();
    });
    self.setTimeout(function() {

        expanded = true;
        showMore();

        for (var i = $('#projects .card').length - 1; i >= 0; i--) {
            $('.projimg').eq(i).css('height', (250 - $('.projdesc').eq(i).height()));
        };
    }, 310);
});

function showMore() {
    if (expanded) {
        expanded = false;
        $('#page6').css('transition', '0.3s');
        setTimeout(function() {
            console.log('second');
            if (mobile) {
                $('#page6').css('top', $('#page5').offset().top - ($('.card.web').height() + 48) * $('.card.web').length + $('#page5').height() + 'px');
            } else {
                $('#page6').css('top', $('#page5').offset().top - ($('.card.web').height() + 48) * Math.ceil($('.card.web').length / 2) + $('#page5').height() + 'px');
            }
            setTimeout(function() {
                $('#page6').css('transition', '0.0s');
            }, 10);

            $('#moreProj').val('Meer tonen');
            $('.card.web').css('margin-top', '-56px');
            $('.card.web').css('pointer-events', 'none');
            $('.card.web').css('opacity', '0');
        }, 10);
    } else {
        expanded = true;
        $('#page6').css('transition', '0.3s');
        setTimeout(function() {
            console.log('first');
            if (mobile) {
                $('#page6').css('top', $('#page5').offset().top + ($('.card.web').height() + 48) * $('.card.web').length + $('#page5').height() + 'px');
            } else {
                $('#page6').css('top', $('#page5').offset().top + ($('.card.web').height() + 48) * Math.ceil($('.card.web').length / 2) + $('#page5').height() + 'px');
            }
            setTimeout(function() {
                $('#page6').css('transition', '0.0s');
            }, 10);

            $('#moreProj').val('Minder tonen');
            $('.card.web').css('margin-top', '20px');
            $('.card.web').css('pointer-events', 'all');
            $('.card.web').css('opacity', '1');
        }, 10);
    }
}

function windowUpdate() {
    $('iframe').attr('width', $('.wrap').width());

    if ($(window).width() < 1000) {
        mobile = true;
    } else {
        mobile = false;
    }
    $('#titel').css('top', 'calc(50% - ' + ($('#titel').height() / 2 + 30) + 'px)');
    if ($(window).width() < 800) {
        $('#titel').css('left', 'calc(50% - ' + ($('#titel').width() / 2) + 'px)');
    } else {
        $('#titel').css('left', 'calc(50% - 400px)');
    }
    self.setTimeout(function() {
        $('#page3').css('top', $('#page2').offset().top + $('#page2').height() + 'px');
        $('#page4').css('top', $('#page3').offset().top + $('#page3').height() + 'px');
        $('#page5').css('top', $('#page4').offset().top + $('#page4').height() + 'px');
        $('#page6').css('top', $('#page5').offset().top + $('#page5').height() + 'px');
    }, 300);
}

function hascroll() {
    scrollDisable = true;
    var haas = location.hash,
        hashname = haas.replace(/p/, 'page'),
        $target = $(hashname);

    var hgt = 0;
    if (!mobile) {
        hgt = $('#menu').height();
    }

    $('#menu a').removeAttr('active');
    $('#menu a[href=' + haas + ']').attr('active', '');
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - hgt
    }, 600, 'swing', function() {
        scrollDisable = false;
    });
}

function wissel() {
    $('#background').css('background-image', 'url(img/sick.png)');
}

function checkenter(e) {
    if (e.which == 13) {
        input = $('#input').val().toLowerCase();
        var a = 0;
        th = 0;
        html1 = '';
        html2 = '<tr>';
        letters = [];
        abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        for (a = 0; a < abc.length; a++) {
            if (input.indexOf(abc[a]) != -1) {
                th++;
                letters.push(abc[a]);
                html2 += "<th>" + letters[letters.length - 1].toUpperCase() + "</th>";
            }
        }
        html2 += "<th>" + input.toUpperCase() + "</th>";
        html2 += '</tr>';
        tr = Math.pow(2, th);
        tf = false;
        var x = 0;
        var y = 0;
        array = [];
        while (x < th) {
            //horizontal
            active = '1';
            omenom = Math.pow(2, x);
            array.push([]);
            while (tr > y) {
                if (x == 0) {
                    html1 += '<tr></tr>';
                }
                //verrtical
                if (omenom == 0) {
                    //wisselt ze om
                    if (active == '1') {
                        active = '0';
                    } else {
                        active = '1';
                    }
                    omenom = Math.pow(2, x);
                }
                array[x].push(active);
                omenom--;
                y++;
            }
            y = 0;
            x++;
        }

        var a = 0;
        $('#output').html(html2 + html1);
        while (a < array[0].length) {
            var b = 0;
            while (b < array.length) {
                if (array[b][a] == '1') {
                    $('tr').eq(a + 1).append('<td>true</td>');
                } else {
                    $('tr').eq(a + 1).append('<td>false</td>');
                }
                b++;
            }
            $('tr').eq(a + 1).append('<td class=\'ans\'></td>');
            a++;
        }

        var a = 0;
        while (a < array[0].length) {
            var timpoet = input;
            var b = 0;
            while (b < letters.length) {
                //timpoet=timpoet.replace(letters[b],array[b][a]);
                timpoet = timpoet.replace(RegExp(letters[b], "g"), array[b][a]);
                b++;
            }
            $('tr').eq(a + 1).find('td:last-child').html(eval(timpoet).toString().replace(/0/g, 'false').replace(/1/g, 'true'));
            a++;
        }


    }
}

function sendMsg() {
    msg = $('textarea').val();
    if ($("input[type='email']:nth-child(odd)").css('opacity') == 1) {
        to = $("input[type='email']:nth-child(odd)").val();
    } else {
        to = 'ruurd@bijlsma.dev';
    }
    from = $("input[type='email']:nth-child(even)").val();

    if (from != '' && msg != '') {
        $.ajax({
                type: "POST",
                url: "mail.php",
                data: { msg: msg, to: to, from: from },
                cache: false
            })
            .done(function(data) {
                if (data == 'Succes') {
                    $('#page6 .card').html('Bericht succesvol verstuurd van ' + from + ' naar ' + to);
                } else {
                    $('#page6 .card').html('Bericht succesvol verstuurd van ' + from + ' naar ' + to);
                }
            });
    }
}

function checkGol(e) {
    if (e.target.value.toLowerCase().indexOf("game of life") != -1) {
        toggleGol();
    }
}

function toggleGol() {
    $('html, body').stop().animate({
        'scrollTop': 0
    }, 600, 'swing');
    if ($('#golCanvas').css('display') == "none") {
        $('#golCanvas').css('display', 'block');
        $('#trailCanvas').css('display', 'block');
        $('#controls').css('display', 'block');
    } else {
        $('#golCanvas').css('display', 'none');
        $('#trailCanvas').css('display', 'none');
        $('#controls').css('display', 'none');
    }
}
