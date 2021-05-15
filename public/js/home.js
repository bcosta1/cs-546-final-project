let imgs = ["bite.png","black.jpeg","blast_zero.jpg","blast.png","brew.jpeg","citrus_blast.png","citrus_cherry.png","cyclone.png","diet.png","dsa.png","ice.jpg","lightning.png","live.png",
"mash-up.jpeg","melon-zero.png","melon.png","original.png","red.png","throwback.png","voltage.png","voodew.jpg","whiteout.jpeg","zero_sugar.png"];
let fp = document.getElementById("flavors");
let count = 0;
function animate(){
  fp.src= "../public/imgs/"+imgs[count];
  count++;
  setTimeout(5000);
}