-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 09, 2017 at 04:43 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 5.6.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbinfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `id` int(10) NOT NULL,
  `tanggal` varchar(20) NOT NULL,
  `akhir` varchar(20) NOT NULL,
  `w_mulai` varchar(20) NOT NULL,
  `w_akhir` varchar(20) NOT NULL,
  `judul` varchar(100) NOT NULL,
  `status` varchar(20) NOT NULL,
  `keterangan` varchar(1000) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `lokasi` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`id`, `tanggal`, `akhir`, `w_mulai`, `w_akhir`, `judul`, `status`, `keterangan`, `gambar`, `lokasi`) VALUES
(15, '01-10-2017', '29-10-2017', '10:00', '12:00', 'Kota Tua - Pergelaran Wayang Kulit', 'Tersedia', 'Pergelaran wayang kulit dari berbagai daerah yang akan dibawakan oleh dalang yang berbeda setiap minggunya. Biaya masuk event sudah termasuk dengan biaya masuk museum.', '15.png', 'Jl. Pintu Besar Utara No.23, RT.7/RW.7, Pinangsia, Tamansari, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11110'),
(16, '05-11-2017', '05-11-2017', '10:00', '12:00', 'Taman Mini Indonesia -  Pergelaran Seni Budaya Daerah Jawa Timur', 'Tersedia', 'Penampilan berbagai seni budaya yang terdapat di daerah Jawa Tiimur yang di selenggarakan di anjungan Jawa Timur. Seperti penampilan tarian remong, tarian reog ponoirogo dan dengan diiringi musik gamelan khas Jawa timur.', '16.png', 'Anjungan Jawa Timur  Taman Mini  Indonesia Indah'),
(17, '05-11-2017', '05-10-2017', '14:00', '17:00', 'Taman Mini Indonesia - Pertunjukan Baleganjur', 'Tersedia', 'Parade Baleganjur dipentaskan dengan berkeliling TMII. Baleganjur adalah perpaduan seperangkat alat musik tradisional Bali yang sifatnya masih sederhana. Alat musik itu antara lain ceng, gong, dan kendang. Baleganjur biasa dipentaskan oleh 20 orang.', '17.png', 'Tugu Api Taman Mini Indonesia'),
(18, '12-11-2017', '12-11-2017', '11:00', '16:00', 'Taman Mini Indonesia - Gambang Kromong', 'Tersedia', 'Pertunjukan Gambang kromong.', '18.png', 'Panggung Parkir Selatan  Taman Mini Indonesia Indah'),
(19, '05-11-2017', '05-11-2017', '10:00', '12:00', 'Taman Mini Indonesia - Pentas Seni Budaya Sulawesi Tengah', 'Tersedia', 'Pertunjukan buidaya yang terdapat di daerah Sulawesi Tengah.', '19.png', 'Anjungan Sulawesi Tengah'),
(20, '10-11-2017', '10-11-2017', '19:00', '21:00', 'Taman Mini Indonesia - Pergelaran Teater tradisi  (Sanggar Metta Budaya - Solo)', 'Tersedia', 'Pergelaran teater tradisi derah Solo seperti wayang orang.', '20.png', 'Sasono Langen Budoyo  Taman Mini "Indonesia Indah"'),
(21, '17-12-2017', '17-10-2017', '07:00', '15:00', 'Taman Mini Indonesia - Lomba Tari Kreasi Tradisional anak sanggar', 'Tersedia', '- Biaya pengdaftaran Rp 200.000 /group\r\n- Pendaftaran di tutup tanggal 9 Desember 2017\r\n- Jumlah peserta minimal 5 anak dan maksimal 9 anak\r\n- Durasi penampilan minimal 5 menit dan maksimal 7 menit\r\n- Kategori usia minimal 7 tahun dan maksimal usia 9 tahun', '21.png', 'Anjungan Jawa Timur '),
(22, '23-10-2017', '05-11-2017', '09:00', '15:00', 'Galeri Nasional - Melampaui Fotografi', 'Tersedia', 'Pameran tunggal Suherry Arno "Melampaui Fotografi"', '22.png', 'Gedung A Galeri Nasional'),
(23, '10-11-2017', '23-11-2017', '09:00', '15:00', 'Galeri Nasional - IconicPameran tunggal Yuswantoro Adi "Iconic"', 'Tersedia', 'Pameran tunggal Yuswantoro Adi "Iconic"', '23.png', 'Geduung A Galeri Nasional'),
(24, '29-11-2017', '11-12-2017', '09:00', '15:00', 'Galeri Nasional - Fotografi Mexico', 'Tersedia', 'Pameran Fotografi dari Mexico dengan gaya Mexico.', '24.png', 'Geduung D Galeri Nasional'),
(25, '19-12-2017', '05-01-2018', '09:00', '15:00', 'Galeri Nasional - Circle E-Seascape', 'Tersedia', 'Pameran Tunggal Bunawijaya Circle - E Seascape.', '25', 'Gedung A Galeri Nasional');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
