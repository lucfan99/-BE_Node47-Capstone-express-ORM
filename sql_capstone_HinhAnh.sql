
CREATE DATABASE node47_HinhAnh
use node47_HinhAnh

CREATE TABLE nguoi_dung (
    nguoi_dung_id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    mat_khau VARCHAR(100),
    ho_ten VARCHAR(100),
    tuoi INT,
    anh_dai_dien VARCHAR(255)
)

CREATE TABLE hinh_anh (
    hinh_id INT PRIMARY KEY AUTO_INCREMENT,
    nguoi_dung_id INT,
    FOREIGN KEY(nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
    ten_hinh VARCHAR(255),
    duong_dan VARCHAR(255),
    mo_ta VARCHAR(255)
)

CREATE TABLE binh_luan (
    binh_luan_id INT PRIMARY KEY AUTO_INCREMENT,
    nguoi_dung_id INT,
    FOREIGN KEY(nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
    hinh_id INT,
    FOREIGN KEY(hinh_id) REFERENCES hinh_anh(hinh_id),
    ngay_binh_luan DATE,
    noi_dung VARCHAR(255)
)


CREATE TABLE luu_anh (
    nguoi_dung_id INT,
    FOREIGN KEY(nguoi_dung_id) REFERENCES nguoi_dung(nguoi_dung_id),
    hinh_id INT,
    FOREIGN KEY(hinh_id) REFERENCES hinh_anh(hinh_id),
    ngay_luu DATE
)


INSERT INTO nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien)
VALUES
('user1@example.com', 'password1', 'Nguyen Van A', 25, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-dai-dien-ngau-chat-cho-con-trai-nhin-thang.jpg?1704788596045'),
('user2@example.com', 'password2', 'Tran Thi B', 30, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-dai-dien-ngau-chat-cho-con-trai-hut-thuoc.jpg?1704788544123'),
('user3@example.com', 'password3', 'Le Van C', 28, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Avatar%20Doremon%20cute-bay-len.jpg?1704788640817'),
('user4@example.com', 'password4', 'Pham Thi D', 22, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Avatar%20Doremon%20cute-doi-mu.jpg?1704788682389'),
('user5@example.com', 'password5', 'Nguyen Van E', 35, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Avatar%20Doremon%20cute-doremon-deo-kinh-ram.jpg?1704788723947'),
('user6@example.com', 'password6', 'Tran Thi F', 27, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Bo-suu-tap-anh-avatar-anime-nu-co-gai-deo-kinh-den-phong-cach.jpeg?1704789366141'),
('user7@example.com', 'password7', 'Le Van G', 24, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Goi-y-nhung-avatar-nam-anime-cho-Facebook-2.jpg?1704789482726'),
('user8@example.com', 'password8', 'Pham Thi H', 29, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/hinh-anh-avatar-nam-1-600x600.jpg?1704789696645'),
('user9@example.com', 'password9', 'Nguyen Van I', 33, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Hinh-dai-dien-hai-huoc-cam-dep-duoi-ai-do.jpg?1704789789335'),
('user10@example.com', 'password10', 'Tran Thi J', 21, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Hinh-dai-dien-hai-huoc.jpg?1704789931349'),
('user11@example.com', 'password11', 'Le Van K', 26, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-dai-dien-hinh-meo-2.jpg?1704843486960'),
('user12@example.com', 'password12', 'Pham Thi L', 23, 'https://chiemtaimobile.vn/images/companies/1/%E1%BA%A2nh%20Blog/avatar-facebook-dep/Anh-avatar-hoat-hinh-de-thuong.jpg?1704788428979'),
('user13@example.com', 'password13', 'Nguyen Van M', 34, 'https://thanhtrungmobile.vn/thanhtrungmobile-vn/2023/08/hinh-avatar-hai-3.jpeg.webp'),
('user14@example.com', 'password14', 'Tran Thi N', 20, 'https://o.vdoc.vn/data/image/2021/08/17/Anh-vit-cute-12.jpg'),
('user15@example.com', 'password15', 'Le Van O', 31, 'https://tutihealth.com/wp-content/uploads/2022/10/meme-vit-cam-dao-1.jpg');


INSERT INTO hinh_anh (nguoi_dung_id, ten_hinh, duong_dan, mo_ta)
VALUES
(1, 'Ảnh 1', 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg', 'Ảnh phong cảnh 1'),
(2, 'Ảnh 2', 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-fashion-tv-800x525.jpg', 'Ảnh phong cảnh 2'),
(3, 'Ảnh 3', 'https://gratisography.com/wp-content/uploads/2024/11/gratisography-leg-warmers-800x525.jpg', 'Ảnh phong cảnh 3'),
(4, 'Ảnh 4', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg', 'Ảnh phong cảnh 4'),
(5, 'Ảnh 5', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-birthday-dog-sunglasses-800x525.jpg', 'Ảnh phong cảnh 5'),
(6, 'Ảnh 6', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg', 'Ảnh phong cảnh 6'),
(7, 'Ảnh 7', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-halloween-cat-800x525.jpg', 'Ảnh phong cảnh 7'),
(8, 'Ảnh 8', 'https://gratisography.com/wp-content/uploads/2024/10/gratisography-foliage-face-800x525.jpg', 'Ảnh phong cảnh 8'),
(9, 'Ảnh 9', 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-800x525.jpg', 'Ảnh phong cảnh 9'),
(10, 'Ảnh 10', 'https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg', 'Ảnh phong cảnh 10'),
(11, 'Ảnh 11', 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg', 'Ảnh phong cảnh 11'),
(12, 'Ảnh 12', 'https://gratisography.com/wp-content/uploads/2023/10/gratisography-cool-cat-800x525.jpg', 'Ảnh phong cảnh 12'),
(13, 'Ảnh 13', 'https://gratisography.com/wp-content/uploads/2023/10/gratisography-dracula-dentures-800x525.jpg', 'Ảnh phong cảnh 13'),
(14, 'Ảnh 14', 'https://gratisography.com/wp-content/uploads/2023/10/gratisography-witch-cat-800x525.jpg', 'Ảnh phong cảnh 14'),
(15, 'Ảnh 15', 'https://gratisography.com/wp-content/uploads/2023/10/gratisography-headless-scarecrow-800x525.jpg', 'Ảnh phong cảnh 15');

INSERT INTO binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung)
VALUES
(1, 1, '2024-11-01', 'Bức ảnh rất đẹp!'),
(2, 2, '2024-11-02', 'Thật tuyệt vời!'),
(3, 3, '2024-11-03', 'Rất ấn tượng.'),
(4, 4, '2024-11-04', 'Cảnh vật thật yên bình.'),
(5, 5, '2024-11-05', 'Bố cục ảnh rất tốt.'),
(6, 6, '2024-11-06', 'Ảnh này thật đặc biệt.'),
(7, 7, '2024-11-07', 'Màu sắc rất hài hòa.'),
(8, 8, '2024-11-08', 'Đẹp ngoài sức tưởng tượng.'),
(9, 9, '2024-11-09', 'Cảm giác thật dễ chịu khi nhìn.'),
(10, 10, '2024-11-10', 'Một tác phẩm tuyệt vời.'),
(11, 11, '2024-11-11', 'Ảnh mang lại cảm xúc mạnh mẽ.'),
(12, 12, '2024-11-12', 'Tuyệt vời, mong chờ nhiều ảnh hơn.'),
(13, 13, '2024-11-13', 'Một góc nhìn rất đặc biệt.'),
(14, 14, '2024-11-14', 'Nên chia sẻ thêm về bức ảnh này.'),
(15, 15, '2024-11-15', 'Hoàn hảo.');

INSERT INTO luu_anh (nguoi_dung_id, hinh_id, ngay_luu)
VALUES
(1, 1, '2024-11-01'),
(2, 2, '2024-11-02'),
(3, 3, '2024-11-03'),
(4, 4, '2024-11-04'),
(5, 5, '2024-11-05'),
(6, 6, '2024-11-06'),
(7, 7, '2024-11-07'),
(8, 8, '2024-11-08'),
(9, 9, '2024-11-09'),
(10, 10, '2024-11-10'),
(11, 11, '2024-11-11'),
(12, 12, '2024-11-12'),
(13, 13, '2024-11-13'),
(14, 14, '2024-11-14'),
(15, 15, '2024-11-15');

CREATE TABLE code (
    id INT PRIMARY KEY AUTO_INCREMENT,
    code VARCHAR(50) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
);