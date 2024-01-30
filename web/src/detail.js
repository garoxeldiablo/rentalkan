
// Fungsi untuk melakukan permintaan ke server untuk mendapatkan informasi detail produk
document.addEventListener("DOMContentLoaded", function () {
    // Ambil ID produk dari parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Lakukan permintaan ke server untuk mendapatkan informasi detail produk berdasarkan ID produk
    // fetchDetailProduk(productId);
});

// async function fetchDetailProduk(productId) {
//     try {
//         const response = await fetch(`http://localhost:3000/detail/${productId}`);
//         const data = await response.json();

//         // Tampilkan informasi detail produk di halaman detail produk
//         displayDetailProduk(data);
//     } catch (error) {
//         console.error('Error fetching product detail:', error);
//     }
// }

// Fungsi untuk menampilkan informasi detail produk di halaman detail produk
function displayDetailProduk(data) {
    // Tampilkan informasi produk di halaman detail produk
    const detailProdukElement = document.getElementById('produk');
    detailProdukElement.innerHTML = `
        <h2>${data.produk}</h2>
    `;
}