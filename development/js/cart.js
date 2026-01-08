function showProduct(index) {

  document.getElementById("model").style.display="flex";
  document.getElementById("product-tab").style.display="none";
  console.log(document.getElementById("product-tab").style.display);

  const product=products[index];
  document.getElementById("modalImg").src = product.img;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("actualPrice").textContent = product.actualPrice;
  document.getElementById("modalDesc").textContent = product.desc;
  document.getElementById("ratings").textContent = product.ratings;

};
function  back(){
  document.getElementById("product-tab").style.display="";
  document.getElementById("model").style.display="none  ";
}
function addToCart(name,price){
    alert("Added to cart");
}

const products = [
  {
    index: 0,
    name: "Bamboo Bottle",
    actualPrice: "Rs. 1200",
    price: "Rs. 900",
    ratings: "★★★★★",
    desc: "Eco-friendly reusable bamboo bottle designed to reduce single-use plastic waste. It is lightweight, durable, and ideal for daily hydration at home, school, or outdoors.",
    img: "../images/bamboobottle.png"
  },
  {
    index: 1,
    name: "Organic Tote Bag",
    actualPrice: "Rs. 200",
    price: "Rs. 150",
    ratings: "★★★★★",
    desc: "Reusable organic cotton tote bag suitable for shopping, travel, and daily errands. This bag helps reduce plastic usage while being strong, washable, and long-lasting.",
    img: "../images/totebag.png"
  },
  {
    index: 2,
    name: "Bamboo Toothbrush",
    actualPrice: "Rs. 120",
    price: "Rs. 90",
    ratings: "★★★★☆",
    desc: "Biodegradable bamboo toothbrush with soft bristles that gently clean teeth while reducing plastic waste and supporting sustainable oral care.",
    img: "../images/toothbrush.png"
  },
  {
    index: 3,
    name: "Reusable Coffee Cup",
    actualPrice: "Rs. 800",
    price: "Rs. 650",
    ratings: "★★★★☆",
    desc: "Insulated reusable coffee cup that keeps beverages hot or cold for longer periods and helps minimize disposable cup waste.",
    img: "../images/coffeecup.png"
  },
  {
    index: 4,
    name: "Beeswax Food Wrap",
    actualPrice: "Rs. 500",
    price: "Rs. 400",
    ratings: "★★★★★",
    desc: "Natural and reusable alternative to plastic food wraps. Made with beeswax-coated fabric to preserve food freshness while reducing plastic pollution.",
    img: "../images/beeswaxwrap.png"
  },
  {
    index: 5,
    name: "Bamboo Cutlery Set",
    actualPrice: "Rs. 700",
    price: "Rs. 550",
    ratings: "★★★★☆",
    desc: "Portable bamboo cutlery set ideal for travel and outdoor use. Encourages zero-waste living by replacing disposable plastic cutlery.",
    img: "../images/cutlery.png"
  },
  {
    index: 6,
    name: "Coconut Shell Bowl",
    actualPrice: "Rs. 600",
    price: "Rs. 480",
    ratings: "★★★★☆",
    desc: "Handcrafted coconut shell bowl made from reclaimed coconut shells. Each bowl is unique and promotes sustainable dining practices.",
    img: "../images/coconutbowl.png"
  },
  {
    index: 7,
    name: "Reusable Produce Bags",
    actualPrice: "Rs. 350",
    price: "Rs. 280",
    ratings: "★★★☆☆",
    desc: "Durable mesh produce bags designed to replace plastic bags during grocery shopping and support waste reduction.",
    img: "../images/producebag.png"
  },
  {
    index: 8,
    name: "Eco Dish Scrubber",
    actualPrice: "Rs. 250",
    price: "Rs. 180",
    ratings: "★★★☆☆",
    desc: "Natural fiber dish scrubber that is effective for cleaning and compostable after use, making it an eco-friendly kitchen essential.",
    img: "../images/scrubber.png"
  },
  {
    index: 9,
    name: "Organic Cotton Face Towel",
    actualPrice: "Rs. 450",
    price: "Rs. 350",
    ratings: "★★★★★",
    desc: "Soft organic cotton face towel that is gentle on skin, highly absorbent, and ideal for everyday personal care with minimal environmental impact.",
    img: "../images/towel.png"
  }
];
