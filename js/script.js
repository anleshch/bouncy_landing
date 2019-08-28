let portfolioDelete = document.querySelectorAll(".portfolio__listItems");
for (let i=0; i<portfolioDelete.length; i++) {
	portfolioDelete[i].addEventListener("click", removePortfolio);
}
function removePortfolio() {
	let item = document.querySelectorAll(".portfolio__itemImage");
	for (let i=0; i < item.length; i++) {
		item[i].style.display = "none";
	}
}

document.getElementById("portfolio__listAll").addEventListener("click", showPortfolioAll);
document.getElementById("portfolio__listPrint").addEventListener("click", showPortfolioPrint);
document.getElementById("portfolio__listIdentity").addEventListener("click", showPortfolioIdentity);
document.getElementById("portfolio__listBranding").addEventListener("click", showPortfolioBranding);
document.getElementById("portfolio__listWeb").addEventListener("click", showPortfolioWeb);
document.getElementById("portfolio__listHTML").addEventListener("click", showPortfolioHTML);
document.getElementById("portfolio__listWordpress").addEventListener("click", showPortfolioWordpress);

let all = document.querySelectorAll(".portfolio__itemImage");
let print = document.querySelectorAll(".portfolioPrint");
let identity = document.querySelectorAll(".portfolioIdentity");
let branding = document.querySelectorAll(".portfolioBranding");
let web = document.querySelectorAll(".portfolioWeb");
let html = document.querySelectorAll(".portfolioHTML");
let wordpress = document.querySelectorAll(".portfolioWordpress");

function showPortfolioAll() {	
	for (let i=0; i < all.length; i++) {
		all[i].style.display = "block";
	}
}
function showPortfolioPrint() {	
	for (let i=0; i < print.length; i++) {
		print[i].style.display = "block";
	}
}
function showPortfolioIdentity() {	
	for (let i=0; i < identity.length; i++) {
		identity[i].style.display = "block";
	}
}
function showPortfolioBranding() {	
	for (let i=0; i < branding.length; i++) {
		branding[i].style.display = "block";
	}
}
function showPortfolioWeb() {	
	for (let i=0; i < web.length; i++) {
		web[i].style.display = "block";
	}
}
function showPortfolioHTML() {	
	for (let i=0; i < html.length; i++) {
		html[i].style.display = "block";
	}
}
function showPortfolioWordpress() {	
	for (let i=0; i < wordpress.length; i++) {
		wordpress[i].style.display = "block";
	}
}


document.getElementById("moreLatestNews").addEventListener("click", readMoreNews);

function readMoreNews() {
	document.getElementById("moreLatestNewsText").innerText = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur voluptas quae, dolore atque consequuntur quaerat numquam praesentium labore officiis cum laudantium accusantium fuga voluptatem dolorem delectus voluptatum nihil, odit aspernatur!";
	document.getElementById("moreLatestNews").innerText = "";
}

let b = 80,
    w = 65,
    u = 75;

setTimeout(function(){ $(".branding__percent").text(b + "%") }, 4000);
setTimeout(function(){ $(".web__percent").text(w + "%") }, 4000);
setTimeout(function(){ $(".user__percent").text(u + "%") }, 4000);

$(".branding__skillProgress").animate({width: b + "%"}, 4000);
$(".web__skillProgress").animate({width: w + "%"}, 4000);
$(".user__skillProgress").animate({width: u + "%"}, 4000);


$(window).scroll(function (){
        $('.price__item').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass('fadeInDown');
            }
        });
		$('.contactUs__item').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass('fadeInLeft');
            }
        });
});
