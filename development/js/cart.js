function showProduct(index) {

  document.getElementById("model").style.display="flex";
  document.getElementById("product-tab").style.display="none";
  console.log(document.getElementById("product-tab").style.display);

  const product=products[index];
  document.getElementById("modalImg").src = product.img;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalDesc").textContent = product.desc;

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
    desc: "Eco-friendly reusable bamboo bottle that reduces plastic waste.",
    img: "../images/bamboobottle.png"
  },
  {
    index: 1,
    name: "Organic Tote Bag",
    actualPrice: "Rs. 200",
    price: "Rs. 150",
    desc: "Reusable organic cotton tote bag for daily shopping.",
    img: "../images/totebag.png"
  },
  {
    index: 2,
    name: "Bamboo Toothbrush",
    actualPrice: "Rs. 120",
    price: "Rs. 90",
    desc: "Biodegradable bamboo toothbrush with soft bristles.",
    img: "../images/toothbrush.png"
  },
  {
    index: 3,
    name: "Reusable Coffee Cup",
    actualPrice: "Rs. 800",
    price: "Rs. 650",
    desc: "Insulated reusable cup to reduce disposable cup waste.",
    img: "../images/coffeecup.png"
  },
  {
    index: 4,
    name: "Beeswax Food Wrap",
    actualPrice: "Rs. 500",
    price: "Rs. 400",
    desc: "Natural alternative to plastic food wraps.",
    img: "../images/beeswaxwrap.png"
  },
  {
    index: 5,
    name: "Bamboo Cutlery Set",
    actualPrice: "Rs. 700",
    price: "Rs. 550",
    desc: "Portable bamboo cutlery set for zero-waste living.",
    img: "../images/cutlery.png"
  },
  {
    index: 6,
    name: "Coconut Shell Bowl",
    actualPrice: "Rs. 600",
    price: "Rs. 480",
    desc: "Handcrafted coconut shell bowl for sustainable dining.",
    img: "../images/coconutbowl.png"
  },
  {
    index: 7,
    name: "Reusable Produce Bags",
    actualPrice: "Rs. 350",
    price: "Rs. 280",
    desc: "Mesh produce bags to replace plastic bags.",
    img: "../images/producebag.png"
  },
  {
    index: 8,
    name: "Eco Dish Scrubber",
    actualPrice: "Rs. 250",
    price: "Rs. 180",
    desc: "Natural fiber dish scrubber, compostable after use.",
    img: "../images/scrubber.png"
  },
 {
    index: 9,
    name: "Organic Cotton Face Towel",
    actualPrice: "Rs. 450",
    price: "Rs. 350",
    desc: "Soft organic cotton towel suitable for daily use.",
    img: "../images/towel.png"
  }
];


