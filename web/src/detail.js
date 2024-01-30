
// Fungsi untuk melakukan permintaan ke server untuk mendapatkan informasi detail produk
document.addEventListener("DOMContentLoaded", function () {
    // Ambil ID produk dari parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // Lakukan permintaan ke server untuk mendapatkan informasi detail produk berdasarkan ID produk
    console.log(productId)
    fetchDetailProduk(productId);
});

async function fetchDetailProduk(productId) {
    try {
        const response = await fetch(`http://localhost:3000/detail/${productId}`);
        const data = await response.json(JSON);

        // Tampilkan informasi detail produk di halaman detail produk
        console.log(data)
        displayDetailProduk(data);
    } catch (error) {
        console.error('Error fetching product detail:', error);
    }
}

// Fungsi untuk menampilkan informasi detail produk di halaman detail produk
function displayDetailProduk(data) {
    // Tampilkan informasi produk di halaman detail produk
    const produkName = document.getElementById('produk');
    produkName.innerHTML = `<p>${data.produk}</p>`;

    // 
    const merkName = document.getElementById('merk');
    merkName.innerHTML = `<p>${data.merk}</p>`;

    const imgAlat = document.getElementById('img-produk');
    imgAlat.innerHTML = `<img src="${data.image}" width="200px">`;

    const sewa = document.getElementById('sewa');
    sewa.textContent = data.sewa;

    const minimumSewa = document.getElementById(`minimumsewa`);
    minimumSewa.textContent = data.minimum_sewa;

    const harianOperator = document.getElementById('harianoperator');
    harianOperator.textContent = data.harian_operator;

}