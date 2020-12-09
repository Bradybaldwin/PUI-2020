//alert with gmail on it//
function showMail() {
    alert("bradybaldwin97@gmail.com")
}

//progress bar funciton, only runs on pages with thisBar element//
window.onscroll = function() {progShow()};

function progShow() {
    if (document.getElementById("thisBar") !== null){
        var getBar = document.getElementById("thisBar");
        var scrollPos = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var postScroll = (scrollPos / height) * 100;
        getBar.style.width = postScroll + "%";
    }
}

//Animation functions (via Greensock.com)//
//this makes sure page is loaded before running the animations//
document.addEventListener("DOMContentLoaded", function(){
//Home page scrolling animations//
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll1',
        }});
        tl.addLabel("start")
            .from('.homeScroll1', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll1', {y:0, opacity: 100, duration: 1.5})

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll2',
            }});
        tl.addLabel("start")
            .from('.homeScroll2', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll2', {y:0, opacity: 100, duration: 1.5})
        
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.homeScroll3',
            }});
        tl.addLabel("homeScroll3")
            .from('.homeScroll3', {y:100, opacity: 0, duration: 1.5})
            .to('.homeScroll3', {y:0, opacity: 100, duration: 1.5})

//Projects Page Scrolling Animations//
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.projSubMove',
            }});
        tl.addLabel("projSubMove")
            .from('.projSubMove', {y:200, opacity: 0, duration: 1.5})
            .to('.projSubMove', {y:0, opacity: 100, duration: 1.5})

//VR Project Detail Page Scrolling animations//
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#brainstormAnim',
            }});
        tl.addLabel("brainstormAnim")
            .from("#brainstormAnim", {x: 100, opacity:0, duration: 1})
            .from('#initPlanAnim', {y:50, opacity:0, duration: .5})
            .from('#expertAnim', {y:50, opacity:0, duration: .5})
                        
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#vrFinalDAnim',
            }});
        tl.addLabel("vrFinalDAnim")
            .from("#vrFinalDAnim", {y: 100, opacity:0, duration: 1})

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#vrDesignAnim',
            }});
        tl.addLabel("vrDesignAnim")
            .from("#vrDesignAnim", {x: 100, opacity:0, duration: 1})
            .from('#vrGreyAnim', {y:50, opacity:0, duration: .5})
            .from('#vrModelingAnim', {y:50, opacity:0, duration: .5})
    
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#vrUnityAnim',
            }});
        tl.addLabel("vrUnityAnim")
            .from("#vrUnityAnim", {y: 100, opacity:0, duration: 1})

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#vrFinalAnim',
            }});
        tl.addLabel("vrFinalAnim")
            .from("#vrFinalAnim", {x: 100, opacity:0, duration: 1})
            .from('#vrVidAnim', {y:50, opacity:0, duration: .5})

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#vrTakeAnim',
            }});
        tl.addLabel("vrTakeAnim")
            .from("#vrTakeAnim", {y: 100, opacity:0, duration: 1})
    
//Non-scroll on load home screen timeline//
    var tlHome = gsap.timeline({});
        tlHome.from("#name1", {opacity:0, duration: 1});
        tlHome.from("#name2", {opacity:0, duration: .5});
        tlHome.from(".animTag", {x: -100, opacity:0, duration: .5, delay: .5});
        tlHome.from(".homeMain2", {opacity:0, duration: .5});
    
//Non-scroll on load Projects Page timeline//
    var tlProj = gsap.timeline({});
        tlProj.from(".projHeadMove", {opacity:0, duration: .5});
        tlProj.from(".projMainMove", {x: -100, opacity:0, duration: 1, delay: .5});
        tlProj.from(".projMainMove2", {x: -100, opacity:0, duration: 1});
        tlProj.from(".projMainMove3", {x: -100, opacity:0, duration: 1});

//Non-scroll on load VR Project Detail Page timeline//
    var tlVR = gsap.timeline({});
        tlVR.from("#vrHeadsub", {opacity:0, duration: .5, delay: .3});
        tlVR.from("#vrGreybox1", {x: 100, opacity:0, duration: 1, delay: .1});
        tlVR.from("#vrOvrAnim", {x: 100, opacity:0, duration: .5});
        tlVR.from("#vrProjGoalsAnim", {opacity:0, duration: .5});
        tlVR.from("#collabContAnim", {opacity:0, duration: .5});
})
