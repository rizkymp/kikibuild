<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "qrcode";
 
    // membuat koneksi
    $koneksi = new mysqli($servername, $username, $password, $dbname);
 
    // melakukan pengecekan koneksi
    if ($koneksi->connect_error) {
        die("Connection failed: " . $koneksi->connect_error);
    } 
 
    if($_POST['rowid']) {
        $id = $_POST['rowid'];
        // mengambil data berdasarkan id
        $sql = "SELECT * FROM data WHERE id = $id";
        $result = $koneksi->query($sql);
        foreach ($result as $baris) { ?>
            <table class="table">
                <tr>
                    <td>Kode Barang</td>
                    <td>:</td>
                    <td><?php echo $baris['kode_barang']; ?></td>
                </tr>
                <tr>
                    <td>Nama Barang</td>
                    <td>:</td>
                    <td><?php echo $baris['nama_barang']; ?></td>
                </tr>
                <tr>
                    <td>Nama Barang</td>
                    <td>:</td>
                    <td><?php echo $baris['seri']; ?></td>
                </tr>
                <tr>
                    <td>Keterangan</td>
                    <td>:</td>
                    <td><?php echo $baris['desc_barang']; ?></td>
                </tr>
            </table>
        <?php 
 
        }
    }
    $koneksi->close();
?>