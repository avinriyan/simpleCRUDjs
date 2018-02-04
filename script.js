var data = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];


function tampil(){
    var tabel = document.getElementById("tabel");
    // clear list barang
    tabel.innerHTML = "<tr><th>No</th><th>Nama</th><th>Action</th></tr>";

    // cetak semua barang
    for(let i = 0; i < data.length; i++){
        var btnEdit = "<button class='btn-edit' href='#' onclick='edit("+i+")'>Edit</button>";
        var btnHapus = "<button class='btn-hapus' href='#' onclick='hapus("+i+")'>Hapus</button>";
        j=i+1;
        tabel.innerHTML += "<tr><td>"+j+"</td><td>" + data[i] + "</td><td>"+btnEdit +" "+ btnHapus +"</tr>";
    }
}

function tambah(){
    var input = document.querySelector("input[name=barang]");
    data.push(input.value);
    tampil();
}

function edit(id){
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id){
    data.pop(id);
    tampil();
}

tampil();
