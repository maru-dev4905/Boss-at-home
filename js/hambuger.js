$(document).ready(()=>{
    const openBtn   = $(".header__hambuger-open");
    const closeBtn  = $(".header__hambuger-close");
    const menu      = $(".menu");
    const dim       = $(".dim");

    let menuSize = $(".menu").css("width");
    
    menu.css("left","-"+menuSize);
    
    openBtn.on("click",()=>{
        menu.css("left","0");
        dim.addClass("active");
    });
    closeBtn.on("click",()=>{
        menu.css("left","-"+menuSize);
        dim.removeClass("active");
    });
    dim.on("click",()=>{
        menu.css("left","-"+menuSize);
        dim.removeClass("active");
    });
});