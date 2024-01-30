// tampilkan semua data

document.addEventListener("DOMContentLoaded",async()=>{
    const containerCategory = document.getElementById("containerCategory");

    try{
        const response = await fetch("http://localhost:3000/view");
        const data = await response.json(JSON);
        console.log(data);

        data.forEach((dataAlat) => {
            // 
            const categoryBox = document.createElement("div");
            categoryBox.classList.add("category-box");
            containerCategory.appendChild(categoryBox);
            //

            // 
            const a = document.createElement("a");
            let productId = dataAlat.id;
            a.href = `../detail.html?id=${productId}`;
            categoryBox.appendChild(a);
            // 

            // 
            const cardItem = document.createElement("div")
            cardItem.classList.add("cardItem");
            a.appendChild(cardItem);
            // 

            // Tambahkan elemen untuk menampilkan image
            const imgCard = document.createElement("img");
            imgCard.classList.add("img-card");
            imgCard.src = dataAlat.image;
            imgCard.width = 150; // Lebar dalam piksel
            imgCard.height = 150;
            cardItem.appendChild(imgCard);
            // 

            // 
            const produkNm = document.createElement("div");
            produkNm.classList.add("category");
            produkNm.textContent = dataAlat.produk;
            cardItem.appendChild(produkNm);
            // 
        });
    }catch (error) {
        console.error("Error fetching data:", error);
    }
})