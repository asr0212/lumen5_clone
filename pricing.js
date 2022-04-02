
document.querySelector("#billmonthly").addEventListener("click",BillMonth);

function BillMonth()
{
    var btn = document.querySelector("#billmonthly");
    btn.setAttribute("class","Onclick");
    

    document.querySelector("#plans").innerHTML = "";
   
    var PlansDataMonth = [
        {
            popular : "",
            name : "Community",
            discrip : "For casual video enthusiasts",
            rate : "$0",
            ratedis : "forever free",
            saving : ""
        },
        {
            popular : "",
            name : "Creator",
            discrip : "For individual content creators",
            rate : "$15USD",
            ratedis : "per month",
            saving : ""
        },
        {
            popular : "",
            name : "Premium",
            discrip : "For professional video storytellers",
            rate : "$79USD",
            ratedis : "per month",
            saving : ""
        },
        {
            popular : "POPULAR CHOICE",
            name : "Business",
            discrip : "For brands focused on reach and growth",
            rate : "$199USD",
            ratedis : "per month",
            saving : ""
        },
        {
            popular : "",
            name : "Enterprise",
            discrip : "For large-scale video teams",
            rate : "Custom",
            ratedis : "",
            saving : ""
        }
    ];

    PlansDataMonth.map(function(elem,ind,arr){
        var div = document.createElement("div");
        div.style.height = "10px";    
    
        var div1 = document.createElement("div");
        div1.style.height = "100px";
    
        var div2 = document.createElement("div");
        div2.style.height = "140px";
    
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
    
        var popular = document.createElement("p");
        popular.innerText = elem.popular;
        var divIn = document.createElement("div");
        divIn.append(popular);
    
        var h1 = document.createElement("h1");
        h1.innerText = elem.name;
    
        var p1 = document.createElement("p");
        p1.innerText = elem.discrip;
    
        var rate = document.createElement("h1");
        rate.innerText = elem.rate;
    
        var p2 = document.createElement("p");
        p2.innerText = elem.ratedis;
    
        var save = document.createElement("h3");
        save.innerText = elem.saving;
    
        var btn = document.createElement("button");
        btn.innerText = "Get Started";
        btn.setAttribute("class","getStart");
    
        div.append(divIn);
        div1.append(h1,p1);
        div2.append(rate,p2,save);
        div3.append(btn);
    
        div4.append(div,div1,div2,div3);
    
        document.querySelector("#plans").append(div4);
    
    });
}

document.querySelector("#billyearly").addEventListener("click",BillYear);

function BillYear()
{    
    var btn = document.querySelector("#billyearly");
    btn.setAttribute("class","Onclick");


    document.querySelector("#plans").innerHTML = "";
    
    var PlansDataYear = [
        {
            popular : "",
            name : "Community",
            discrip : "For casual video enthusiasts",
            rate : "$0",
            ratedis : "forever free",
            saving : ""
        },
        {
            popular : "",
            name : "Creator",
            discrip : "For individual content creators",
            rate : "$11USD",
            ratedis : "per month, billed yearly",
            saving : "Save 27%"
        },
        {
            popular : "",
            name : "Premium",
            discrip : "For professional video storytellers",
            rate : "$59USD",
            ratedis : "per month, billed yearly",
            saving : "Save 25%"
        },
        {
            popular : "POPULAR CHOICE",
            name : "Business",
            discrip : "For brands focused on reach and growth",
            rate : "$149USD",
            ratedis : "per month, billed yearly",
            saving : "Save 25%"
        },
        {
            popular : "",
            name : "Enterprise",
            discrip : "For large-scale video teams",
            rate : "Custom",
            ratedis : "",
            saving : ""
        }
    ];

    PlansDataYear.map(function(elem,ind,arr){
        var div = document.createElement("div");
        div.style.height = "10px";    
    
        var div1 = document.createElement("div");
        div1.style.height = "100px";
    
        var div2 = document.createElement("div");
        div2.style.height = "140px";
    
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
    
        var popular = document.createElement("p");
        popular.innerText = elem.popular;
        var divIn = document.createElement("div");
        divIn.append(popular);
    
        var h1 = document.createElement("h1");
        h1.innerText = elem.name;
    
        var p1 = document.createElement("p");
        p1.innerText = elem.discrip;
    
        var rate = document.createElement("h1");
        rate.innerText = elem.rate;
    
        var p2 = document.createElement("p");
        p2.innerText = elem.ratedis;
    
        var save = document.createElement("h3");
        save.innerText = elem.saving;
    
        var btn = document.createElement("button");
        btn.innerText = "Get Started";
        btn.setAttribute("class","getStart");
    
        div.append(divIn);
        div1.append(h1,p1);
        div2.append(rate,p2,save);
        div3.append(btn);
    
        div4.append(div,div1,div2,div3);
    
        document.querySelector("#plans").append(div4);
    
    });
}

var PlansDataYear = [
    {
        popular : "",
        name : "Community",
        discrip : "For casual video enthusiasts",
        rate : "$0",
        ratedis : "forever free",
        saving : ""
    },
    {
        popular : "",
        name : "Creator",
        discrip : "For individual content creators",
        rate : "$11USD",
        ratedis : "per month, billed yearly",
        saving : "Save 27%"
    },
    {
        popular : "",
        name : "Premium",
        discrip : "For professional video storytellers",
        rate : "$59USD",
        ratedis : "per month, billed yearly",
        saving : "Save 25%"
    },
    {
        popular : "POPULAR CHOICE",
        name : "Business",
        discrip : "For brands focused on reach and growth",
        rate : "$149USD",
        ratedis : "per month, billed yearly",
        saving : "Save 25%"
    },
    {
        popular : "",
        name : "Enterprise",
        discrip : "For large-scale video teams",
        rate : "Custom",
        ratedis : "",
        saving : ""
    }
];

PlansDataYear.map(function(elem,ind,arr){
    var div = document.createElement("div");
    div.style.height = "10px";    

    var div1 = document.createElement("div");
    div1.style.height = "100px";

    var div2 = document.createElement("div");
    div2.style.height = "140px";

    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var popular = document.createElement("p");
    popular.innerText = elem.popular;
    var divIn = document.createElement("div");
    divIn.append(popular);

    var h1 = document.createElement("h1");
    h1.innerText = elem.name;

    var p1 = document.createElement("p");
    p1.innerText = elem.discrip;

    var rate = document.createElement("h1");
    rate.innerText = elem.rate;

    var p2 = document.createElement("p");
    p2.innerText = elem.ratedis;

    var save = document.createElement("h3");
    save.innerText = elem.saving;

    var btn = document.createElement("button");
    btn.innerText = "Get Started";
    btn.setAttribute("class","getStart");

    div.append(divIn);
    div1.append(h1,p1);
    div2.append(rate,p2,save);
    div3.append(btn);

    div4.append(div,div1,div2,div3);

    document.querySelector("#plans").append(div4);

});



var PlanDiscription = [
    {
        head : "What's included:",
        point1 : "Unlimited videos",
        point2 : "Contains Lumen5 watermark",
        point3 : "720p video resolution",
        point4 : "",
        point5 : ""        
    },
    {
        head : "Everything in Free, plus:",
        point1 : "Unlimited videos",
        point2 : "No Lumen5 branding",
        point3 : "",
        point4 : "",
        point5 : ""        
    },
    {
        head : "Everything in Starter, plus:",
        point1 : "Unlimited videos",
        point2 : "15M stock photos & videos",
        point3 : "Custom colors & styles",
        point4 : "1080p video resolution",
        point5 : "Access to brand kit"        
    },
    {
        head : "Everything in Premium, plus:",
        point1 : "Unlimited videos",
        point2 : "Shutterstock libraries",
        point3 : "Upload watermarks & font",
        point4 : "Multiple saved templates",
        point5 : "Ability to create teams"        
    },
    {
        head : "Everything in Business, plus:",
        point1 : "Unlimited videos",
        point2 : "Approvals & permissions",
        point3 : "Two-factor authentication",
        point4 : "Custom templates",
        point5 : "Dedicated account manager"        
    }
];


PlanDiscription.map(function(el,ind,arr){
    var head = document.createElement("p");
    head.innerText = el.head;
    head.style.fontWeight = "bold";

    var point1 = document.createElement("p");
    point1.innerText = el.point1;

    var point2 = document.createElement("p");
    point2.innerText = el.point2;

    var point3 = document.createElement("p");
    point3.innerText = el.point3;

    var point4 = document.createElement("p");
    point4.innerText = el.point4;

    var point5 = document.createElement("p");
    point5.innerText = el.point5;

    var box = document.createElement("div");
    box.append(head,point1,point2,point3,point4,point5);

    document.querySelector("#pricingdes").append(box);
})

var testimonialData = [
    {
        image : "https://storage.googleapis.com/lumen5-site-images/comment-darren.png",
        para : "A member from our ProBlogger group created a video using Lumen5 and published it on Facebook. In 24 hours the video got 300,000 views, just using this little tool.",
        guy : "DARREN ROWSE"
    },
    {
        image : "https://storage.googleapis.com/lumen5-site-images/comment-nicholas.png",
        para : "By using Lumen5, we increased our Facebook engagements by 448%, and boosted our reach dramatically. Our page grew from 5,000 to 23,000 likes within a week!",
        guy : "NICHOLAS YANG"
    },
    {
        image : "https://storage.googleapis.com/lumen5-site-images/comment-tova.png",
        para : "My first video already got over 650,000 views on my facebook page. It is an amazing program and I’m really impressed! It made converting a blog post into a video so easy.",
        guy : "TOVA LEIGH"
    },
    {
        image : "https://storage.googleapis.com/lumen5-site-images/comment-lauren.png",
        para : "I created a video using an older blog post and it's been a huge hit! Great way to freshen up and share things again—170,000 views and climbing!",
        guy : "LAUREN CASPER"
    },
    {
        image : "https://storage.googleapis.com/lumen5-site-images/comment-steve.png",
        para : "Lumen5 is fantastic! I made a video and now it has gone viral! It has 22,000 views from a reach of 65,000. No advertising. No promotion.",
        guy : "STEVE LAST"
    },
    {
        image : "https://storage.googleapis.com/lumen5-site-images/comment-kaylene.png",
        para : "My Lumen5 video went viral with over3 million reach and it grew my page from 1500 to 5000 likes! I’m making these for all my top posts.",
        guy : "KAYLENE GEORGE"
    }
];


testimonialData.map(function(el,ind,arr){
    var image = document.createElement("img");
    image.src = el.image;

    var para = document.createElement("p");
    para.innerText = el.para;

    var name = document.createElement("h5");
    name.innerText = el.guy;

    var box = document.createElement("div");
    box.append(image,para,name);

    document.querySelector("#inside").append(box);
})


var tableHeadData = [
    {
        plantype : "Creator",
        rate : "$15 USD/month",
        btn : "Get Started"
    },
    {
        plantype : "Premium",
        rate : "$79 USD/month",
        btn : "Get Started"
    },
    {
        plantype : "Business",
        rate : "$199 USD/month",
        btn : "Get Started"
    },
    {
        plantype : "Enterprise",
        rate : "Let's talk!",
        btn : "Learn more"
    }
];


tableHeadData.map(function(el,ind,arr){
    var box = document.createElement("div");

    var head = document.createElement("h2");
    head.innerText = el.plantype;
    head.style.lineHeight = "0px"

    var price = document.createElement("p");
    price.innerText = el.rate;

    var btn = document.createElement("button");
    btn.innerText = el.btn;

    box.append(head,price,btn);

    document.querySelector("#things").append(box);
;})


var table1Data = [
    {
        parameter : "Videos per month",
        creat : "Unlimited",
        prem : "Unlimited",
        busi : "Unlimited",
        enter : "Custom"
    },
    {
        parameter : "Saved Templates",
        creat : "1",
        prem : "1",
        busi : "5",
        enter : "Custom"
    },
    {
        parameter : "Workspaces",
        creat : "1",
        prem : "1",
        busi : "5",
        enter : "Custom"
    },
    {
        parameter : "Instant videos",
        creat : "1",
        prem : "1",
        busi : "10",
        enter : "Custom"
    },
    {
        parameter : "Team members",
        creat : "1",
        prem : "1",
        busi : "Up to 3",
        enter : "Custom"
    },
    {
        parameter : "Brand kits",
        creat : "0",
        prem : "1",
        busi : "3",
        enter : "Custom"
    }
];

table1Data.map(function(el,ind,arr){

    var maindiv = document.createElement("div");
    maindiv.setAttribute("class", "maindiv");

    var div1 = document.createElement("div");
    div1.setAttribute("class", "insideMain1");

    var div2 = document.createElement("div");
    div2.setAttribute("class", "insideMain2");

    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");


    var para = document.createElement("p");
    para.innerText = el.parameter;
    div3.append(para);    

    var avail1 = document.createElement("p");
    avail1.innerText = el.creat;
    div4.append(avail1);

    var avail2 = document.createElement("p");
    avail2.innerText = el.prem;
    div5.append(avail2);

    var avail3 = document.createElement("p");
    avail3.innerText = el.busi;
    div6.append(avail3);

    var avail4 = document.createElement("p");
    avail4.innerText = el.enter;
    div7.append(avail4);

    div1.append(div3);
    div2.append(div4,div5,div6,div7); 

    maindiv.append(div1,div2);

    document.querySelector("#table1").append(maindiv);

})

    