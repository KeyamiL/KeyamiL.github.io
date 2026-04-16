
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// Image arrays
const images = [
               {filename: "pic1.jpg", alt: "Closeup of a human eye"}, {filename: "pic2.jpg", alt: "Rock that looks like a wave"},
               {filename: "pic3.jpg", alt: "Purple and white pansies"}, {filename: "pic4.jpg", alt: "Section of wall from pharaoh's tomb"}, 
               {filename: "pic5.jpg", alt: "Large moth on a leaf"}
];

const baseURL = "https://mdn.github.io/shared-assets/images/examples/learn/gallery"

//For loop
for (const image of images) {
        console.log(image); 
}           

// Image elements

const images2 = [
                { src: `https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg`, alt: `Closeup of a human eye`},  
                { src: `https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg`, alt: `Rock that looks like a wave`},
                { src: `https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg`, alt: `Purple and white pansies`},
                { src: `https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg`, alt: `Section of wall from pharaohs tomb`},  
                { src: `https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg`, alt: `Large moth on a leaf`}, 

          thumbBar.appendChild(images2),
          images2.updateDisplayedImage("click", () => {
              
          
 
        }
        )
          
]  

const updateDisplayedImage = (displayedImage = `${src} ${alt}`);

btn.addEventListener ("click",  () => {

     if (btn.classList = ("dark")) {
     btn.textContent("Lighten");
     overlay.style.backgroundColour = "rgb (0 0 0 / 0.5)";
     } else {
        


     }

        
        

        const dark = document.querySelector("button")

}
       
)
