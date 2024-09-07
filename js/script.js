//This script for the menu bar
let menu=document.getElementById("menu");
menu.addEventListener("click",function(){
    let parent=menu.parentElement
    for(let i=0; i<parent.children.length-1; i++){
        parent.children[i].style.display="none"
    }
    var menu_icon=menu.parentElement.previousElementSibling
    menu_icon.style.right="0"
   /*  console.log(menu_icon) */
})

var cancel=document.getElementById("cancel");
cancel.addEventListener("click",function(){
    cancel.parentElement.style.right="-200px"
    let childs=cancel.parentElement.nextElementSibling.children;
    for(let i=0; i<childs.length-1; i++){
        childs[i].style.display="block"
    }
})

//when anchor tag is clicked the menu should be remove
let nav_anchor=document.querySelectorAll(".anchor a")
/* console.log(nav_anchor) */
nav_anchor.forEach((anchor)=>{
    anchor.addEventListener("click",function(){
        cancel.parentElement.style.right="-200px"
    let childs=cancel.parentElement.nextElementSibling.children;
    for(let i=0; i<childs.length-1; i++){
        childs[i].style.display="block"
    }
    })
})

window.addEventListener('click', function(event) {
    console.log(event.target)
    if (!menu.contains(event.target) && !cancel.contains(event.target)) {
        cancel.parentElement.style.right="-200px"
        let childs=cancel.parentElement.nextElementSibling.children;
        for(let i=0; i<childs.length-1; i++){
            childs[i].style.display="block"
        }
    }
});


//--------------------------------------------
//This script for the slider in skills page
let anchor=document.querySelectorAll(".toggle a")
let DataId=1;
let content=document.querySelectorAll(".page")
/* console.log(content)
console.log(anchor) */

anchor.forEach((tag)=>{
    tag.addEventListener("click",function(e){
      e.preventDefault()
      DataId=tag.dataset.id;
      /* console.log(DataId) */
      nextBox(DataId);
    })
})

function nextBox(i){
    let content=document.querySelectorAll(".box")
    let Chenge=document.querySelectorAll(".page")
    /* console.log(content[0].clientHeight) */
    let height=content[0].clientHeight;
    let CurrentHeight=(DataId-1)*height;
    /* console.log(CurrentHeight); */
    Chenge.forEach((page)=>{
         page.style.transform=`translateY(${-CurrentHeight}px)`
    })
}

//this script for add each project using javascript
function appendElements(times){
    for(let i=0; i<times; i++){
      let element=document.createElement('div')
      element.className="project"

      let dis=document.createElement('div')
      dis.className="pro-dis"

      let outer=document.createElement('div')
      outer.className="outer"

      outer.appendChild(element);
      outer.appendChild(dis);

      let projects=document.querySelector(".projects article")
      projects.appendChild(outer)

      let imgEle=document.createElement("div")
      imgEle.className="pro-img"
      element.appendChild(imgEle)

      /* let details=document.createElement("div")
      details.className="pro-detail"
      element.appendChild(details) */

      let img=document.createElement("img")
      img.className="img"
      img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJrCoh_Fy-5HtzK2HHqSRO7A4cGPaGRyDZSnMP5BWkxFQvKTM_-gol0-lG_HNN5kN4B-M&usqp=CAU"
      img.style.width="100%"
      img.style.transition="all 0.5s"
      imgEle.appendChild(img)

      /* let h2=document.createElement("h2");
      h2.innerText="Project Title"
      details.appendChild(h2);

      let p=document.createElement("p")
      p.className="p"
      p.innerText="Para"
      p.style.fontSize="14px"
      details.appendChild(p);

      let button=document.createElement("button") 
      button.innerHTML="Preview"
      
      details.appendChild(button); */

      let dis_h2=document.createElement("h2")
      dis_h2.className="dis_h2";

      let dis_p=document.createElement("p");
      dis_p.className="dis_p";

      dis.appendChild(dis_h2);
      dis.appendChild(dis_p);
      
    }
/*     let ProjectItems=document.querySelectorAll(".pro-detail")
    ProjectItems[0].childNodes[0].innerText="Software World"
    ProjectItems[1].childNodes[0].innerText="Ecommerce"
    ProjectItems[2].childNodes[0].innerText="Amazon Clone"
 
    ProjectItems[0].childNodes[1].innerText="Design and develop a modern, user-friendly interface for a Software World marketplace, featuring product catalogs, user reviews, and seamless navigation."
    ProjectItems[1].childNodes[1].innerText="Create a recommendation engine for an eCommerce website that uses machine learning to suggest products based on user behavior and preferences."
    ProjectItems[2].childNodes[1].innerText="Build a responsive Amazon-like eCommerce website with features like product listings, search functionality, and user authentication using modern web technologies." */
    
    let ProjectDetails=document.querySelectorAll(".pro-dis")
    ProjectDetails[0].childNodes[0].innerText="Software World"
    ProjectDetails[1].childNodes[0].innerText="Ecommerce"
    ProjectDetails[2].childNodes[0].innerText="Amazon Clone"

    ProjectDetails[0].childNodes[1].innerText="To design a modern, user-friendly interface for a Software World marketplace, focus on a clean, intuitive layout with easy navigation. The homepage should highlight featured products and categories. Implement a search bar with advanced filters to help users find software easily. Product catalogs should display software details, pricing, and user ratings clearly. Incorporate user reviews with a star rating system to enhance decision-making. Use consistent typography, vibrant color schemes, and responsive design for accessibility on all devices. Ensure seamless transitions between pages and provide clear call-to-action buttons for purchases and downloads to create a smooth user experience."
    ProjectDetails[1].childNodes[1].innerText="A recommendation engine for an eCommerce website leverages machine learning to suggest personalized products based on user behavior and preferences. It collects data such as browsing history, past purchases, product ratings, and search queries. Using algorithms like collaborative filtering and content-based filtering, the engine analyzes patterns to predict user interests. Collaborative filtering recommends items based on the behavior of similar users, while content-based filtering suggests products with similar attributes. Machine learning models continuously refine recommendations by learning from new data, optimizing for relevance and accuracy. This enhances the shopping experience, driving engagement and boosting sales."
    ProjectDetails[2].childNodes[1].innerText="To build a responsive Amazon-like eCommerce website, use modern web technologies like React for the frontend, Node.js with Express for the backend, and MongoDB for the database. Implement product listings with detailed descriptions, images, pricing, and reviews. Incorporate search functionality with filters for categories, price ranges, and ratings to help users find products easily. Ensure user authentication with JWT (JSON Web Tokens) for secure login and registration. Use responsive design techniques with CSS frameworks like Bootstrap or Tailwind CSS to ensure the website is mobile-friendly. Additionally, add shopping cart and checkout features to enhance the user experience."
    
}
appendElements(3)