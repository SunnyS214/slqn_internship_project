// 1. Product Data Array


// const food_products = [
//     {
//         id: 1,
//         name: "Premium Quinoa Salad Bowl",
//         image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
//         price: 150,
//         rating: 4.5,
//         people_ordered: 524 
//     },
//     {
//         id: 2,
//         name: "Artisan Avocado Toast with Egg",
//         image: "https://imgs.search.brave.com/MbwfgA6VXwZMNp037uBfQ8woUsFazuYRz6q9RxD0-lA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bnBl/ZWxlZGpvdXJuYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAxLzUxODAy/NDk0NDU2XzA5YjVl/ZTE4ZmJfaC5qcGc",
//         price: 110,
//         rating: 4.8,
//         people_ordered: 789 
//     },
//     {
//         id: 3,
//         name: "Wild-Caught Grilled Salmon",
//         image: "https://www.aquastar.com/wp-content/uploads/2023/06/grilled-lemon-pepper-salmon-recipe.jpg", // UNIQUE (was same as 13)
//         price: 280,
//         rating: 4.7,
//         people_ordered: 610 
//     },
//     {
//         id: 4,
//         name: "Organic Hearty Lentil Soup",
//         image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/lentil-soup-recipe-762x1024.jpg",
//         price: 105,
//         rating: 4.2,
//         people_ordered: 432 
//     },
//     {
//         id: 5,
//         name: "Signature Green Spinach Smoothie",
//         image: "https://imgs.search.brave.com/-VA3HMtDD87o3qi9Eq4gGb_7bZDSxvz7owGN2Bwrw88/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVl/NjA1Mzc5NWJiNWNj/NTYwNmZlZGNkNC8x/NTg4Njk5NDQ5NDQ3/LVAzVlQ5UTZWRVNN/MzFEWFA4VVdPL1Nj/cmVlbitTaG90KzIw/MjAtMDUtMDUrYXQr/MTAuMjMuNTArQU0u/cG5n",
//         price: 120,
//         rating: 5.0,
//         people_ordered: 955 
//     },
//     {
//         id: 6,
//         name: "Gourmet Tuna Salad Lettuce Wraps",
//         image: "https://imgs.search.brave.com/Sp5Dz-cYSkNHiG_Hp6LE4P9TluHrAlPZioSoF7EhVxc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2Vjb29rcmVjaXBl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDIvdHVu/YS1sZXR0dWNlLXdy/YXAtdmFyaWF0aW9u/cy02ODN4MTAyNC53/ZWJw",
//         price: 145,
//         rating: 4.3,
//         people_ordered: 312 
//     },
//     {
//         id: 7,
//         name: "Exotic Fruit & Yogurt Parfait",
//         image: "https://imgs.search.brave.com/t5I7-1cZDEDdHFQRgIf9wa1No2k5JE6wQCpaW6bzg_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2hlbHNlYXNtZXNz/eWFwcm9uLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/NS9Zb2d1cnQtUGFy/ZmFpdC1DaGVsc2Vh/c01lc3N5QXByb24t/MTIwMC0yLTMwMHgz/MDAuanBlZw",
//         price: 130,
//         rating: 4.6,
//         people_ordered: 680 
//     },
//     {
//         id: 8,
//         name: "Brown Rice & Tempeh Stir Fry",
//         image: "https://danielsplate.com/wp-content/uploads/2022/10/tempeh-stir-fry-3-1-720x720.jpg",
//         price: 160,
//         rating: 4.4,
//         people_ordered: 490 
//     },
//     {
//         id: 9,
//         name: "Artisan Sweet Potato Fries (Baked)",
//         image: "https://imgs.search.brave.com/xqEoZGBJNbXmx1yIKCDmY3j6tSjz-iaYVBFdq0oCXvE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zYWxs/eXNiYWtpbmdhZGRp/Y3Rpb24uY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDEzLzA5/L0Jha2VkLUNyaXNw/eS1Td2VldC1Qb3Rh/dG8tRnJpZXMuLUVh/c3ktY2hlYXAuLXNh/bGx5c2Jha2luZ2Fk/ZGljdGlvbi5jb21f/LmpwZw",
//         price: 115,
//         rating: 4.1,
//         people_ordered: 250 
//     },
//     {
//         id: 10,
//         name: "Deluxe Chicken Cobb Salad",
//         image: "https://imgs.search.brave.com/75Ihsg8mndYej1LDZGYruVH8JFQLz9x1cdLA8XqzDNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYW1i/YWtlci5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDUv/RGVsdXhlLUNvYmIt/U2FsYWQtSUFCLUhT/LTEuanBn", // UNIQUE (was same as 11)
//         price: 175,
//         rating: 4.6,
//         people_ordered: 598 
//     },
//     {
//         id: 11,
//         name: "Overnight Oats with Super Berries",
//         image: "https://imgs.search.brave.com/lISyWZqdQ1iJdfzKx5lFat_OC_kWC8qgye8Q6vAvp9I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb29r/ZWF0bGl2ZWxvdmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAxL2NoaWEt/b3Zlcm5pZ2h0LW9h/dHMtMS02ODN4MTAy/NC5qcGc",
//         price: 100,
//         rating: 4.9,
//         people_ordered: 815 
//     },
//     {
//         id: 12,
//         name: "Whole Wheat Pasta Primavera",
//         image: "https://imgs.search.brave.com/sHLhjetHZfhYduUiG1v3UbsAeMmvVzCcaOUxSmBC8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ0/ODMxMjA4L3Bob3Rv/L3dob2xlLXdoZWF0/LXBhc3RhLXByaW1h/dmVyYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aEtoRC0y/V3lzNlJqZ2tQeXc4/SzdrRTFERFFQc0Nq/eGtaRDd2LVlmQkNs/QT0",
//         price: 190,
//         rating: 4.2,
//         people_ordered: 367 
//     },
//     {
//         id: 13,
//         name: "Protein Power Eggs (3 pcs)",
//         image: "https://imgs.search.brave.com/omE5RTY_DeVJfP6Cj3q1TKdnPgY6bn2_rcoLzySWlTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWln/aHRsb3NzY2VsbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDMvZGFpbHkt/cHJvdGVpbi1mcm9t/LWVnZ3MtMi0xMDI0/eDU4NS5qcGc", 
//         price: 110,
//         rating: 4.0,
//         people_ordered: 401 
//     },
//     {
//         id: 14,
//         name: "Artisan Hummus & Veggie Platter",
//         image: "https://imgs.search.brave.com/ErCP_B5A_MIcMBvMtkCxaoh4g6bZQoyqZdtrY25NTtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9udXRy/aWNpb3VzbHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9WZWdh/bi1IdW1tdXMtYW5k/LUNoZWVzZS1QbGF0/dGVyLWJ5LU51dHJp/Y2lvdXNseS1GZWF0/dXJlZC1JbWFnZS5q/cGcud2VicA",
//         price: 125,
//         rating: 4.5,
//         people_ordered: 721 
//     },
//     {
//         id: 15,
//         name: "Cold-Pressed Kale and Apple Juice",
//         image: "https://imgs.search.brave.com/FaT3SjQpdNQ6XSFUzQpcGCW7W5ecfHkYI9XJEi9Kn5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mYWN0b3I3NS5j/b20vd18zODQwLHFf/YXV0byxmX2F1dG8s/Y19saW1pdCxmbF9s/b3NzeS9ldmVyeXBs/YXRlX3MzL2ltYWdl/L2NvbGQtcHJlc3Nl/ZC1qdWljZS12YXJp/ZXR5LXBhY2stN2Ex/ZTJhNWQuanBn",
//         price: 115,
//         rating: 4.7,
//         people_ordered: 890 
//     },
//     {
//         id: 16,
//         name: "Lean Turkey Breast Wrap (Whole Grain)",
//         image: "https://imgs.search.brave.com/9iC5oSFz2aE1TqJ-UOQljxlQW2XjNPd9Lao6z51me-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mb29kdWNhdGUu/Y29tL2xpc3RzL2lt/YWdlcy81ODFCRDBF/MS05NzkwLTExODkt/NDI0Ny1CNDczMUJC/QkJBQzgtMjg0Ny5q/cGVn",
//         price: 135,
//         rating: 4.3,
//         people_ordered: 488 
//     }
// ];


const food_products = [
    {
        id: 1,
        name: "Premium Quinoa Salad Bowl",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=700&q=80",
        price: 250, 
        rating: 4.5,
        people_ordered: 524 
    },
    {
        id: 2,
        name: "Artisan Avocado Toast with Egg",
        image: "https://imgs.search.brave.com/MbwfgA6VXwZMNp037uBfQ8woUsFazuYRz6q9RxD0-lA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91bnBl/ZWxlZGpvdXJuYWwu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAxLzUxODAy/NDk0NDU2XzA5YjVl/ZTE4ZmJfaC5qcGc",
        price: 210, 
        rating: 4.8,
        people_ordered: 789 
    },
    {
        id: 3,
        name: "Wild-Caught Grilled Salmon",
        image: "https://www.aquastar.com/wp-content/uploads/2023/06/grilled-lemon-pepper-salmon-recipe.jpg",
        price: 350, 
        rating: 4.7,
        people_ordered: 610 
    },
    {
        id: 4,
        name: "Organic Hearty Lentil Soup",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/lentil-soup-recipe-762x1024.jpg",
        price: 205, 
        rating: 4.2,
        people_ordered: 432 
    },
    {
        id: 5,
        name: "Signature Green Spinach Smoothie",
        image: "https://imgs.search.brave.com/-VA3HMtDD87o3qi9Eq4gGb_7bZDSxvz7owGN2Bwrw88/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVl/NjA1Mzc5NWJiNWNj/NTYwNmZlZGNkNC8x/NTg4Njk5NDQ5NDQ3/LVAzVlQ5UTZWRVNN/MzFEWFA4VVdPL1Nj/cmVlbitTaG90KzIw/MjAtMDUtMDUrYXQr/MTAuMjMuNTArQU0u/cG5n",
        price: 220, 
        rating: 5.0,
        people_ordered: 955 
    },
    {
        id: 6,
        name: "Gourmet Tuna Salad Lettuce Wraps",
        image: "https://imgs.search.brave.com/Sp5Dz-cYSkNHiG_Hp6LE4P9TluHrAlPZioSoF7EhVxc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/d2Vjb29rcmVjaXBl/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDIvdHVu/YS1sZXR0dWNlLXdy/YXAtdmFyaWF0aW9u/cy02ODN4MTAyNC53/ZWJw",
        price: 245, 
        rating: 4.3,
        people_ordered: 312 
    },
    {
        id: 7,
        name: "Exotic Fruit & Yogurt Parfait",
        image: "https://imgs.search.brave.com/t5I7-1cZDEDdHFQRgIf9wa1No2k5JE6wQCpaW6bzg_w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Y2hlbHNlYXNtZXNz/eWFwcm9uLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/NS9Zb2d1cnQtUGFy/ZmFpdC1DaGVsc2Vh/c01lc3N5QXByb24t/MTIwMC0yLTMwMHgz/MDAuanBlZw",
        price: 230, 
        rating: 4.6,
        people_ordered: 680 
    },
    {
        id: 8,
        name: "Brown Rice & Tempeh Stir Fry",
        image: "https://danielsplate.com/wp-content/uploads/2022/10/tempeh-stir-fry-3-1-720x720.jpg",
        price: 260, 
        rating: 4.4,
        people_ordered: 490 
    },
    {
        id: 10,
        name: "Deluxe Chicken Cobb Salad",
        image: "https://imgs.search.brave.com/75Ihsg8mndYej1LDZGYruVH8JFQLz9x1cdLA8XqzDNY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pYW1i/YWtlci5uZXQvd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDUv/RGVsdXhlLUNvYmIt/U2FsYWQtSUFCLUhT/LTEuanBn",
        price: 275, 
        rating: 4.6,
        people_ordered: 598 
    },
    {
        id: 11,
        name: "Overnight Oats with Super Berries",
        image: "https://imgs.search.brave.com/lISyWZqdQ1iJdfzKx5lFat_OC_kWC8qgye8Q6vAvp9I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb29r/ZWF0bGl2ZWxvdmUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAxL2NoaWEt/b3Zlcm5pZ2h0LW9h/dHMtMS02ODN4MTAy/NC5qcGc",
        price: 200, 
        rating: 4.9,
        people_ordered: 815 
    },
    {
        id: 12,
        name: "Whole Wheat Pasta Primavera",
        image: "https://imgs.search.brave.com/sHLhjetHZfhYduUiG1v3UbsAeMmvVzCcaOUxSmBC8gw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTQ0/ODMxMjA4L3Bob3Rv/L3dob2xlLXdoZWF0/LXBhc3RhLXByaW1h/dmVyYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9aEtoRC0y/V3lzNlJqZ2tQeXc4/SzdrRTFERFFQc0Nq/eGtaRDd2LVlmQkNs/QT0",
        price: 290, 
        rating: 4.2,
        people_ordered: 367 
    },
    {
        id: 13,
        name: "Protein Power Eggs (3 pcs)",
        image: "https://imgs.search.brave.com/omE5RTY_DeVJfP6Cj3q1TKdnPgY6bn2_rcoLzySWlTo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWln/aHRsb3NzY2VsbC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDMvZGFpbHkt/cHJvdGVpbi1mcm9t/LWVnZ3MtMi0xMDI0/eDU4NS5qcGc", 
        price: 210, 
        rating: 4.0,
        people_ordered: 401 
    },
    {
        id: 14,
        name: "Artisan Hummus & Veggie Platter",
        image: "https://imgs.search.brave.com/ErCP_B5A_MIcMBvMtkCxaoh4g6bZQoyqZdtrY25NTtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9udXRy/aWNpb3VzbHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy9WZWdh/bi1IdW1tdXMtYW5k/LUNoZWVzZS1QbGF0/dGVyLWJ5LU51dHJp/Y2lvdXNseS1GZWF0/dXJlZC1JbWFnZS5q/cGcud2VicA",
        price: 225, 
        rating: 4.5,
        people_ordered: 721 
    },
    {
        id: 15,
        name: "Cold-Pressed Kale and Apple Juice",
        image: "https://imgs.search.brave.com/FaT3SjQpdNQ6XSFUzQpcGCW7W5ecfHkYI9XJEi9Kn5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mYWN0b3I3NS5j/b20vd18zODQwLHFf/YXV0byxmX2F1dG8s/Y19saW1pdCxmbF9s/b3NzeS9ldmVyeXBs/YXRlX3MzL2ltYWdl/L2NvbGQtcHJlc3Nl/ZC1qdWljZS12YXJp/ZXR5LXBhY2stN2Ex/ZTJhNWQuanBn",
        price: 215, 
        rating: 4.7,
        people_ordered: 890 
    },
    {
        id: 16,
        name: "Lean Turkey Breast Wrap (Whole Grain)",
        image: "https://imgs.search.brave.com/9iC5oSFz2aE1TqJ-UOQljxlQW2XjNPd9Lao6z51me-Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mb29kdWNhdGUu/Y29tL2xpc3RzL2lt/YWdlcy81ODFCRDBF/MS05NzkwLTExODkt/NDI0Ny1CNDczMUJC/QkJBQzgtMjg0Ny5q/cGVn",
        price: 235,
        rating: 4.3,
        people_ordered: 488 
    }
];



console.log('done')

         function renderProducts() {
            const container = document.getElementById('products-container');
            let htmlContent = '';

            food_products.forEach(product => {
                const stars = '⭐ '.repeat(Math.floor(product.rating));
                
      

        htmlContent += `
    <div class="col-md-4">
        <div class="product-card p-3 shadow-sm text-center">
            
            <img src="${product.image}" alt="${product.name}" class="img-fluid mb-3">
            
            <div class="rating-stars text-warning mb-1 d-flex justify-content-center align-items-center">
                
                <span class="me-2">${stars}</span> 
                
                <span class="fw-bold">${product.rating.toFixed(1)}</span>
            </div>

            <p class="text-info small mb-2">Ordered by: ${product.people_ordered} people</p>
            
            <div class="add-to-cart-control d-flex justify-content-center my-2">
                <button 
                    class="btn btn-success btn-sm px-3" 
                    onclick="addToCart(${product.id})"
                    id="add-btn-${product.id}"
                >
                   Add to Cart
                </button>
            </div>
            
            <h5>${product.name}</h5>
            <p class="text-muted"> Rs ${product.price}</p>
            
        </div>
    </div>
`;


            });

            container.innerHTML = htmlContent;
        }

        document.addEventListener('DOMContentLoaded', renderProducts);


document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if(!name || !email || !message) {
        alert("Please fill all fields before submitting!");
      } else {
        alert("Thank you for contacting us, " + name + "!");
        this.reset();
      }
    });
  
