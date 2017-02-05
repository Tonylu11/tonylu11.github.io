$(document).ready(function(){
    let element = $("#element"),
        elText = $("#eltext"),
        atributo = $("#attr"),
        valorAttr = $("#valorattr"),
        elEffect = $("#eleffect"),
        attrEffect = $("#attreffect"),
        attrEffectValue = $("#attreffectvalue"),
        effect = $("#effect"),
        addDOM = $("#adddom"),
        deleteDOM = $("#deletedom"),
        addEffect = $("#addeffect"),
        deleteEffect = $("#deleteeffect"),
        textoErr = $("#texterror"),
        attrValueError = $("#attrvalueerror"),
        attrEffectValueError = $("#attreffectvalueerror"),
        ids = [],
        classes = [];

    let esVacio = function(campo){
        return campo.length === 0;
    }

    let existeAttr = function(attr, arr){
        return arr.indexOf(attr) !== -1;
    }

    let validarValorAttr = function(valor, attr){
        if(esVacio(valor)){
            attrValueError.html("El campo no puede estar vacío");
        }else if(attr === "id" && existeAttr(valor, ids)){
            attrValueError.html("No se puede repetir un id");
        }else{
            attrValueError.html("");
        }
    }

    let textVal = function(valor){
        if(esVacio(valor)){
            textoErr.html("Campo vacío");
        }else{
            textoErr.html("");
        }
    }

    let valAttrEff = function(val, attr){
        if(esVacio(val)){
            attrEffectValueError.html("Campo vacío");
        }else if(attr === "id" && !existeAttr(val, ids)){
            attrEffectValueError.html("Esa id no existe");
        }else if(attr === "class" && !existeAttr(val, classes)){
            attrEffectValueError.html("Esa clase no existe");
        }else{
            attrValueError.html("");
        }
    }

    let addToDOM = function(){
        $("body").append("<"+element.val()+" "+atributo.val()+"='"+valorAttr.val().trim().toLowerCase()+"'>"+elText.val().trim()+"</"+element.val()+">");

        if(atributo.val() === "id"){
            ids.push(valorAttr.val().trim().toLowerCase());
        }else if(atributo.val() === "class"){
            classes.push(valorAttr.val().trim().toLowerCase());
        }
    }

    let getElemEffect = function(){
        var attrEfecto = "";
        if(attrEffect.val() === "id"){
            attrEfecto = "#";
        }else if(attrEffect.val() === "class"){
            attrEfecto = ".";
        }
        return $(elEffect.val()+attrEfecto+attrEffectValue.val().trim().toLowerCase());
    }
    let showHide = function(elemento){
        elemento.hide(1000);
        elemento.show(1000);
    }
    let slideUpDown = function(elemento){
        elemento.slideUp(1000);
        elemento.slideDown(1000);
    }
    let fadeOutIn = function(elemento){
        elemento.fadeOut(1000);
        elemento.fadeIn(1000);
    }
    let animar = function(elemento){
        elemento.animate({
            "color" : "lightgreen",
            "font-size": "2em"
        }, 1000);
        elemento.animate({
            "color": "black",
            "font-size": "1em"
        }, 1000);
    }

    let addEff = function(elemento){
        if(effect.val() === "slide"){
            slideUpDown(elemento);
        }else if(effect.val() === "fade"){
            fadeOutIn(elemento);
        }else if(effect.val() === "show"){
            showHide(elemento);
        }else{
            animar(elemento);
        }
    }

    elText.blur(function(){
        textVal(elText.val().trim());
    });

    valorAttr.blur(function(){
        validarValorAttr(valorAttr.val().trim(), atributo.val());
    });

    attrEffectValue.blur(function(){
        valAttrEff(attrEffectValue.val().trim(), attrEffect.val());
    });

    effect.blur(function(){
        valAttrEff(attrEffectValue.val().trim(), attrEffect.val());

        if(attrEffectValueError.html() === ""){
            addEff(getElemEffect());
        }
    });

    addDOM.click(function(e){
        e.preventDefault();

        textVal(elText.val().trim());
        validarValorAttr(valorAttr.val().trim(), atributo.val());

        if(textoErr.html() === "" && attrValueError.html() === ""){
            addToDOM();
        }
    });

    deleteDOM.click(function(e){
        e.preventDefault();
        element.val("p");
        elText.val("");
        atributo.val("id");
        valorAttr.val("");
        textoErr.html("");
        attrValueError.html("");
        ids = [];
        classes = [];
    });

    addEffect.click(function(e){
        e.preventDefault();
        valAttrEff(attrEffectValue.val().trim(), attrEffect.val());
        if(attrEffectValueError.html() === ""){
            addEff(getElemEffect());
        }
    });

    deleteEffect.click(function(e){
        e.preventDefault();
        elEffect.val("p");
        attrEffect.val("id");
        attrEffectValue.val("");
        effect.val("slide");
        attrEffectValueError.html("");
    });
});