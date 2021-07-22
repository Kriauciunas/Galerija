const container = document.querySelector(".container");
const modalContent = document.querySelector(".modalContent");
const modalImg = document.querySelector(".modalImg");
const nav = document.querySelector(".nav");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

let data = [
    {
        src: "https://images.unsplash.com/photo-1615393904572-b3469d50cac3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80",
        alt: "Nebula cloud",
    },
    {
        src: "https://images.unsplash.com/photo-1617083935866-9eeba5edc0f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
        alt: "Mountains",
    },
    {
        src: "https://images.unsplash.com/photo-1616446818588-cdee9c425412?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt: "Cloud",
    },
    {
        src: "https://images.unsplash.com/photo-1609932937042-56e6bdd7a41b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        alt: "Hot baloons",
    },
    {
        src: "https://images.unsplash.com/photo-1442850473887-0fb77cd0b337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        alt: "Waterfalls",
    },
    {
        src: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80",
        alt: "House",
    },
    {
        src: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        alt: "Blue lagoon",
    },
    {
        src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        alt: "Wild",
    },
    {
        src: "https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        alt: "Autumn",
    },
];
window.addEventListener("DOMContentLoaded", generateImages);

function generateImages() {
    data.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image.src;




        img.addEventListener("click", () => {
            modalImg.src = image.src;
            modalContent.classList.add("active");
            nav.classList.add("active");
            modalImg.classList.add("modalImg");

            let imageIndex = index;
            let next = imageIndex++;
            let prev = imageIndex--;

            window.addEventListener("keyup", (e) => {

                if (e.keyCode === 37) {
                    modalImg.src = data[prev].src;
                    prev--;
                    next = prev + 2;
                } else if (e.keyCode === 39) {
                    modalImg.src = data[next].src;
                    next++;
                    prev = next - 2;
                }
            });

            prevBtn.addEventListener("click", () => {
                modalImg.src = data[prev].src;
                prev--;
                next = prev + 2;
            });

            nextBtn.addEventListener("click", () => {
                modalImg.src = data[next].src;
                next++;
                prev = next - 2;
            });

            modalContent.addEventListener("click", () => {
                modalContent.classList.remove("active");
                modalImg.classList.remove("modalImg");
                nav.classList.remove("active");

            });


        });

        container.appendChild(img);
    });
}