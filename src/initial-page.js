

export function initialPageLoad(){

    console.log("teste");
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Fuga Bakery";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/images/fuga.jpg";
    topImage.alt = "image of restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "aaaaaaaaa";
    contentDiv.appendChild(para1);
    
    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "kkkkkkkkkk";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "zzzzzzzzz";
    contentDiv.appendChild(para3);


}