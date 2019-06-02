$(document).ready(function() {
    POWER = 4;

    c = $('#maincanvas');
    canvas = c[0];
    ctx = canvas.getContext('2d');

    cd = $('#drawcanvas');
    canvasd = cd[0];
    dctx = canvasd.getContext('2d');

    cp = $('#preview');
    canvasp = cp[0];
    pctx = canvasp.getContext('2d');
    previewSize = 100;

    zoom = 1;
    posx = 0;
    posy = 0;
    setZoom = zoom;
    setPosx = posx;
    setPosy = posy;

    updateSize();
    $(window).on('resize', updateSize);

    going = true;
    editing = false;
    mousedown = false;
    setPreview(100);

    touw = [], $(document).keydown(function(o) {
        touw.push(o.which), -1 !== touw.join().indexOf("84,85,66,65,190,71,73,70") && ($("html").css("background-image", "url(img/snek.gif)"), touw = [])
        if (o.ctrlKey) {
            if (o.which == 83) {
                o.preventDefault();
                location.href = canvas.toDataURL().replace("image/png", "image/octet-stream");
                self.setTimeout(function() {
                    alert("File saved");
                }, 100);
            }
        }
    });

    dctx.strokeStyle = 'white';
    c.mousedown(function(e) {
        startx = e.pageX - c.offset().left;
        starty = e.pageY - c.offset().top;
        mousedown = true;
    });
    $(document).mousemove(function(e) {
        if (mousedown) {
            dctx.clearRect(0, 0, size, size);
            x = e.pageX - c.offset().left;
            y = e.pageY - c.offset().top;

            boxwidth = Math.abs(x - startx);
            boxheight = Math.abs(y - starty);
            if (boxwidth > boxheight) {
                boxsize = boxheight;
            } else {
                boxsize = boxwidth;
            }
            if (boxsize / size != 0) {
                zoom = setZoom * (1 / (boxsize / size));
            }
            console.log(zoom);
            if (x > startx) {
                if (y > starty) {
                    //bottomright
                    dctx.strokeRect(startx, starty, boxsize, boxsize);
                    posx = setPosx + (startx / size) / setZoom;
                    posy = setPosy + (starty / size) / setZoom;
                    console.log(posx, posy);
                } else {
                    //topright
                    dctx.strokeRect(startx, starty, boxsize, -boxsize);
                    posx = startx / size;
                    posy = y / size;
                }
            } else {
                if (y > starty) {
                    //bottomleft
                    dctx.strokeRect(startx, starty, -boxsize, boxsize);
                    posx = x / size;
                    posy = starty / size;
                } else {
                    //topleft
                    dctx.strokeRect(startx, starty, -boxsize, -boxsize);
                    posx = x / size;
                    posy = y / size;
                }
            }
            drawPreview();
        }
    });
    $(document).mouseup(function(e) {
        if (mousedown) {
            mousedown = false;
            drawMandel();
            dctx.clearRect(0, 0, size, size);
            setZoom = zoom;
            setPosx = posx;
            setPosy = posy;
        }

    });

    $('#down').click(function() {
        console.log(abc = this);
        this.href = canvas.toDataURL();
    });

    drawPreview();
    drawMandel();
});

function setPreview(psize) {
    if (typeof psize == 'undefined')
        psize = $('#prevsize').val();
    $('#preview').attr('height', psize);
    $('#preview').attr('width', psize);
    previewSize = psize;
    drawPreview();
    $('#preview').attr('title', 'The preview renders ' + Math.round(Math.pow(size / previewSize, 2) * 10) / 10 + ' times faster!');
}

function updateSize() {
    if (typeof size != 'undefined') {
        posy *= $(window).height() / size;
        posx *= $(window).height() / size;
    }
    size = $(window).height();

    c.attr('width', size);
    c.attr('height', size);

    cd.attr('width', size);
    cd.attr('height', size);
    $('#preview').attr('title', 'The preview renders ' + Math.round(Math.pow(size / previewSize, 2) * 10) / 10 + ' times faster!');
}

function resetZoom() {
    zoom = 1;
    setZoom = zoom;
    posx = 0;
    posy = 0;
    setPosx = 0;
    setPosy = 0;
    drawPreview();
    drawMandel();
}

function drawMandel() {
    maxn = Number($('#maxninput').val());
    mini = Number($('#miniinput').val());
    maxi = Number($('#maxiinput').val());
    minr = Number($('#minrinput').val());
    maxr = Number($('#maxrinput').val());
    POWER = Number($('#powerinput').val());

    console.log('Starting..');

    var image = getData();
    var index = 0;

    var r, g, b;
    if (going && editing) {

        rfun = eval('(n)=>' + $('#rfuninput').val() + '%256');
        gfun = eval('(n)=>' + $('#gfuninput').val() + '%256');
        bfun = eval('(n)=>' + $('#bfuninput').val() + '%256');

        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                cr = mapToReal(x / zoom + size * posx, size);
                ci = mapToImaginary(y / zoom + size * posy, size);

                n = findMandel(cr, ci);


                r = rfun(n);
                g = gfun(n);
                b = bfun(n);

                image.data[index++] = r;
                image.data[index++] = g;
                image.data[index++] = b;
                image.data[index++] = 255;
            };
        };
        putData(image);
    } else if (going) {
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                cr = mapToReal(x / zoom + size * posx, size);
                ci = mapToImaginary(y / zoom + size * posy, size);

                n = findMandel(cr, ci);


                r = n % 256;
                g = Math.sin(n) % 256;
                b = n % 256;

                image.data[index++] = r;
                image.data[index++] = g;
                image.data[index++] = b;
                image.data[index++] = 255;
            };
        };
        putData(image);
    }


    console.log('Done..');
}

function drawPreview() {
    maxn = Number($('#maxninput').val());
    mini = Number($('#miniinput').val());
    maxi = Number($('#maxiinput').val());
    minr = Number($('#minrinput').val());
    maxr = Number($('#maxrinput').val());
    POWER = Number($('#powerinput').val());

    var image = getData('preview');
    var index = 0;

    $("#zoomLevel").text("Zoom: " + zoom);
    $("#posxLevel").text("X: " + posx);
    $("#posyLevel").text("Y: " + posy);

    var r, g, b;

    if (editing) {
        var n = 3;
        going = true;

        try {
            rfun = eval('(n)=>' + $('#rfuninput').val() + '%256');
            gfun = eval('(n)=>' + $('#gfuninput').val() + '%256');
            bfun = eval('(n)=>' + $('#bfuninput').val() + '%256');
        } catch (e) {
            $('#rfuninput').css('background-color', 'red');
            $('#gfuninput').css('background-color', 'red');
            $('#bfuninput').css('background-color', 'red');
            console.log('Error: ', e);
            going = false;
        }

        // try {
        //     eval(rfun + '%256');
        // } catch (e) {
        //     $('#rfuninput').css('background-color', 'red');
        //     console.log('Error: ', e);
        //     going = false;
        // }

        // try {
        //     eval(gfun + '%256');
        // } catch (e) {
        //     $('#gfuninput').css('background-color', 'red');
        //     console.log('Error: ', e);
        //     going = false;
        // }

        // try {
        //     eval(bfun + '%256');
        // } catch (e) {
        //     $('#bfuninput').css('background-color', 'red');
        //     console.log('Error: ', e);
        //     going = false;
        // }

        if (going) {
            $('#rfuninput, #gfuninput, #bfuninput').css('background-color', 'white');
            for (var y = 0; y < previewSize; y++) {
                for (var x = 0; x < previewSize; x++) {
                    cr = mapToReal(x / zoom + previewSize * posx, previewSize);
                    ci = mapToImaginary(y / zoom + previewSize * posy, previewSize);

                    n = findMandel(cr, ci);


                    r = rfun(n);
                    g = gfun(n);
                    b = bfun(n);

                    image.data[index++] = r;
                    image.data[index++] = g;
                    image.data[index++] = b;
                    image.data[index++] = 255;
                };
            };
        }
    } else if (going) {
        $('#rfuninput, #gfuninput, #bfuninput').css('background-color', 'white');
        for (var y = 0; y < previewSize; y++) {
            for (var x = 0; x < previewSize; x++) {
                cr = mapToReal(x / zoom + previewSize * posx, previewSize);
                ci = mapToImaginary(y / zoom + previewSize * posy, previewSize);

                n = findMandel(cr, ci);


                r = n % 256;
                g = Math.cos(n) % 256;
                b = n % 256;

                image.data[index++] = r;
                image.data[index++] = g;
                image.data[index++] = b;
                image.data[index++] = 255;
            };
        };
    }

    putData(image, 'preview');
}

function mapToReal(x, width) {
    var range = maxr - minr;
    return x * (range / width) + minr;
}

function mapToImaginary(y, height) {
    var range = maxi - mini;
    return y * (range / height) + mini;
}

function findMandel(cr, ci) {
    i = 0;
    zr = 0.0;
    zi = 0.0;
    while (i < maxn && Math.pow(zr, POWER) + Math.pow(zi, POWER) < 4.0) {
        temp = Math.pow(zr, POWER) - Math.pow(zi, POWER) + cr;
        zi = 2.0 * zr * zi + ci;
        zr = temp;
        i++;
    }
    return i;
}

function getData(type) {
    if (typeof type == 'undefined') {
        return ctx.getImageData(0, 0, size, size);
    } else {
        return pctx.getImageData(0, 0, previewSize, previewSize);
    }
}

function putData(data, type) {
    if (typeof type == 'undefined') {
        ctx.putImageData(data, 0, 0);
    } else {
        pctx.putImageData(data, 0, 0);
    }
}

function editMode() {
    editing = !editing;
    if (editing) {
        $('input[type=text]').removeAttr('disabled');
        drawPreview();
    } else {
        $('input[type=text]').attr('disabled', '');
        drawPreview();
    }

}
