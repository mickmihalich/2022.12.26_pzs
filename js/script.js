    //localStorage.setItem('newDivTop', 'newDivLeft');
    var newDivTop, newDivLeft, newDivFontSize;
    (localStorage.getItem('newDivTop')) ? newDivTop = localStorage.getItem('newDivTop') : newDivTop = "7px";
    (localStorage.getItem('newDivLeft')) ? newDivLeft = localStorage.getItem('newDivLeft') : newDivLeft = "7px";
    (localStorage.getItem('newDivFontSize')) ? newDivFontSize = localStorage.getItem('newDivFontSize') : newDivFontSize = "32";
    console.log('newDivTop: ', newDivTop);
    console.log('ewDivLeft: ', newDivLeft);
    console.log('newDivFontSize var: ', newDivFontSize);

    var btnPlusStepLeft = -20;
    var btnMinusStepLeft = -20;
    var btnMinusStepTop = 20;
    var btnStepWidth = 15;

    var zoomMax = 256;
    var zoomMin = 24;

    const newDiv = document.createElement('div');
    newDiv.setAttribute("id", "txt");
    newDiv.style.cssText = "color: Aqua; position: absolute;  user-select: none; top: " + newDivTop + "; left: " + newDivLeft +"; font-size: " + newDivFontSize + "px; font-family: cursive; margin: 0px; padding: 0px 10px; display:flex; flex-direction: row; align-items: center; justify-content: center; border: 1px Aqua solid; border-radius: 5px; box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.6); background: rgba(0,0,0,0.6);";
    document.body.append(newDiv);

    console.log('newDivFontSize obj: ', newDiv.style.fontSize);
    console.log('newDivFontSize var = Pars(var)+8: ', (newDivFontSize = parseInt(newDivFontSize) + 8));
    console.log('newDivFontSize var after: ', newDivFontSize);

    const newDivPlus = document.createElement('div');
    newDivPlus.style.cssText = "color: Aqua; position: absolute; width: "+btnStepWidth+"px; height: "+btnStepWidth+"px; user-select: none; left: " + (parseFloat(newDivLeft) + btnPlusStepLeft) + "px;  top: " + newDivTop +"; font-family: cursive; margin: 0px; padding: 0px; display:flex; flex-direction: row; align-items: center; justify-content: center; border: 1px Aqua solid; border-radius: 3px; box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.6); background: rgba(0,0,0,0.6);";
    newDivPlus.innerText = '+';
    document.body.append(newDivPlus);

    const newDivMinus = document.createElement('div');
    newDivMinus.style.cssText = "color: Aqua; position: absolute; width: "+btnStepWidth+"px; height: "+btnStepWidth+"px; user-select: none; left: " + (parseFloat(newDivLeft) + btnMinusStepLeft) + "px;  top: " + (parseFloat(newDivTop) + btnMinusStepTop) +"px; font-family: cursive; margin: 0px; padding: 0px; display:flex; flex-direction: row; align-items: center; justify-content: center; border: 1px Aqua solid; border-radius: 3px; box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.6); background: rgba(0,0,0,0.6);";
    newDivMinus.innerText = '–';
    document.body.append(newDivMinus);

    //var style = window.getComputedStyle(newDiv, null).getPropertyValue('font-size');
    //var fontSize = parseFloat(style);
    // now you have a proper float for the font size (yes, it can be a float, not just an integer)
    //newDiv.style.fontSize = (fontSize + 1) + 'px';

    function clock_zoom_minus(){
        var fontSize = parseInt(newDiv.style.fontSize);
        console.log('newDivFontSize from style in clock_zoom_minus: ', fontSize);

        if (fontSize > zoomMin){
            newDiv.style.fontSize = (newDivFontSize = fontSize - 8) + 'px';
            localStorage.setItem('newDivFontSize', newDivFontSize);
            console.log('newDivFontSize from style saved: ', newDivFontSize);
        }else{
            return;}
    }
    function clock_zoom_plus(){
        var fontSize = parseInt(newDiv.style.fontSize);
        console.log('newDivFontSize from style in clock_zoom_plus: ', fontSize);

        if (fontSize < zoomMax ){
            newDiv.style.fontSize = (newDivFontSize = fontSize + 8) + 'px';
            localStorage.setItem('newDivFontSize', newDivFontSize);
            console.log('newDivFontSize from style saved: ', newDivFontSize);
        }else{
            return;}
    }
    newDivMinus.addEventListener("click", clock_zoom_minus);
    newDivPlus.addEventListener("click", clock_zoom_plus);

    // Your code here...
    let elements = document.querySelectorAll('body');

    for (let elem of elements) {
        elem.style = "background-color: #999; border: 0;";
        //console.log('body: ', elem.innerHTML); // "тест", "пройден"
    }

    //mtable4shap
    const elements2 = document.querySelectorAll('img');
    elements2.forEach(element => {
        console.log("нашли картинку!");
        element.innerHTML = '<p>Pipipi</p>';
        //element.style.cssText = 'width: 1px; height: 1px;';
        //element.innerHTML = '<input type="hidden" name="CrmAuthorize[call_center]" value="0" style="text-align: center; border-radius: 13px; margin: auto 0px;"><input type="checkbox" id="crmauthorize-call_center" name="CrmAuthorize[call_center]" value="1" uncheckvalue="0" checked="" style="text-align: left;"> приймати виклики ';
    });
    elements2[0];

    //divRegShapka
    const elements3 = document.getElementById('divRegShapka');

    //.t3WizardRegion .t3Body {
    const elements10 = document.querySelectorAll('.t3WizardRegion .t3Body');
    elements10.forEach(elem10 => {
        elem10.style.cssText = 'padding: 3px; margin: 3px; background: #999; height: 25px; border: 0px;';
    });

    //table#tableShapka tbody
    const elements11 = document.querySelectorAll('tr.stHtable td');
    elements11.forEach(elem11 => {
        console.log("нашли ghzvjeujkmybr!");
        elem11.style.cssText = 'padding: 3px; margin: 3px; background: #999; height: 25px; border: 0px;';
    });

    //часы
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        //h = checkTimeH(h);
        m = checkTime(m);
        s = checkTime(s);
        newDiv.innerHTML = h+":"+m+":"+s;
        //newDiv.innerHTML += '<div style="align-items: center; justify-content: center; margin-left: 10px;"><button type="button" name="zoom_plus" onclick="alert()">+</button><br><button type="button" name="zoom_minus"  onclick="clock_zoom_minus()">–</button></div>';
        var t = setTimeout(function(){startTime()},500);
    }
    function checkTime(i) {
        if (i<10) {i = "0" + i}; // добавим ноль впереди для чисел < 10
        return i;
    }
    function checkTimeH(i) {
        if (i<10) {i = "&nbsp;" + i}; // добавим &nbsp; впереди для чисел < 10
        return i;
    }

    startTime();

    //Двигать часы
    newDiv.onmousedown = function(e) {
        //return false;

        var coords = getCoords(newDiv);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        //newDiv.style.position = 'absolute';
        document.body.appendChild(newDiv);
        //Shadow+
        newDiv.style.boxShadow = "20px 20px 25px 5px rgba(0,0,0,0.4)";
        newDiv.style.textShadow = "20px 20px 25px 5px rgba(0,0,0,0.4)";
        newDivPlus.style.boxShadow = "20px 20px 25px 5px rgba(0,0,0,0.4)";
        newDivMinus.style.boxShadow = "20px 20px 25px 5px rgba(0,0,0,0.4)";
        moveAt(e);

        newDiv.style.zIndex = 1000; // над другими элементами


        function moveAt(e) {
            newDiv.style.left = e.pageX - shiftX + 'px';
            newDiv.style.top = e.pageY - shiftY + 'px';
            localStorage.setItem('newDivTop', newDiv.style.top);
            localStorage.setItem('newDivLeft', newDiv.style.left);
            newDivPlus.style.left = parseFloat(newDiv.style.left) + btnPlusStepLeft + 'px';
            newDivPlus.style.top = newDiv.style.top;
            newDivMinus.style.left = parseFloat(newDiv.style.left) + btnMinusStepLeft + 'px';
            newDivMinus.style.top = parseFloat(newDiv.style.top) + btnMinusStepTop + 'px';
        }

        document.onmousemove = function(e) {
            moveAt(e);
        };

        newDiv.onmouseup = function() {
            document.onmousemove = null;
            newDiv.onmouseup = null;
            //Shadow-
            newDiv.style.boxShadow = "5px 5px 15px 5px rgba(0,0,0,0.6)";
            newDiv.style.textShadow = "5px 5px 15px 5px rgba(0,0,0,0.6)";
            newDivPlus.style.boxShadow = "5px 5px 15px 5px rgba(0,0,0,0.6)";
            newDivMinus.style.boxShadow = "5px 5px 15px 5px rgba(0,0,0,0.6)";
        };

    }

    newDiv.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();
        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };
    }