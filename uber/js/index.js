const UBER_CAR = "uberCar";
const UBER_SUV = "uberSUV";
const UBER_BLACK = "uberBlack";

// Hàm lấy giá tiền km đầu tiên
const kiemTraGiaTienKmDauTien = (loaiXe) => {
  // thực hiện kiểm tra loại xe người dùng để trả về giá tiền phù hợp
  switch (loaiXe) {
    case UBER_CAR:
      return 8000;
    case UBER_SUV:
      return 9000;
    case UBER_BLACK:
      return 10000;
  }
};

// Hàm lấy giá tiền km từ 1 đến 19
const kiemTraGiaTienKmTu1Den19 = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7500;
    case UBER_SUV:
      return 8500;
    case UBER_BLACK:
      return 9500;
  }
};

// Hàm lấy giá tiền từ 19km trở lên
const kiemTraGiaTienKmTu19TroLen = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 7000;
    case UBER_SUV:
      return 8000;
    case UBER_BLACK:
      return 9000;
  }
};

// Hàm lấy giá tiền thời gian chờ
const kiemTraGiaTienCho = (loaiXe) => {
  switch (loaiXe) {
    case UBER_CAR:
      return 2000;
    case UBER_SUV:
      return 3000;
    case UBER_BLACK:
      return 3500;
  }
};

document.getElementById("btnTinhTien").onclick = () => {
  // Lấy dữ liệu từ người dùng và lưu trữ (loại xe, số km, thời gian chờ)
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  let soKm = document.getElementById("txt-km").value * 1;
  console.log(soKm);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(thoiGianCho);

  // cách lấy dữ liệu loại xe bằng if else
  // thứ nhất viết dom tới 3 input có type là radio
  // cấu trúc điều kiện tìm xe input nào có .checked = true
  // lấy dữ liệu từ input đó

  // switch (loaiXe) {
  //     case "uberCar":
  //     if (soKm > 0 && soKm <= 1) {
  //     let tienXe = soKm * 8000;
  //     console.log(tienXe);
  //     } else if (soKm > 1 && soKm <= 19) {
  //     let tienXe = 8000 + (soKm - 1) * 7500;
  //     console.log(tienXe);
  //     } else {
  //     let tienXe = 8000 + 18 * 7500 + (soKm - 19) * 7000;
  //     console.log(tienXe);
  //     }
  //         if (thoiGianCho >= 3) {
  //             let tienCho = (thoiGianCho / 3) * 2000;
  //             console.log(tienCho);
  //         }
  //     break;

  //     case "uberSUV":
  //     if (soKm > 0 && soKm <= 1) {
  //       let tienXe = soKm * 9000;
  //       console.log(tienXe);
  //     } else if (soKm > 1 && soKm <= 19) {
  //       let tienXe = 9000 + (soKm - 1) * 7500;
  //       console.log(tienXe);
  //     } else {
  //       let tienXe = 9000 + 18 * 8500 + (soKm - 19) * 8000;
  //       console.log(tienXe);
  //     }
  //         if (thoiGianCho >= 3) {
  //             let tienCho = (thoiGianCho / 3) * 3000;
  //             console.log(tienCho);
  //         }
  //     break;

  //     default:
  //     if (soKm > 0 && soKm <= 1) {
  //       let tienXe = soKm * 10000;
  //       console.log(tienXe);
  //     } else if (soKm > 1 && soKm <= 19) {
  //       let tienXe = 10000 + (soKm - 1) * 9500;
  //       console.log(tienXe);
  //     } else {
  //       let tienXe = 10000 + 18 * 9500 + (soKm - 19) * 9000;
  //       console.log(tienXe);
  //     }
  //         if (thoiGianCho >= 3) {
  //             let tienCho = (thoiGianCho / 3) * 3500;
  //             console.log(tienCho);
  //         }
  //     break;
  // }

  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);

  let giaTienKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  console.log(giaTienKmTu1Den19);

  let giaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  console.log(giaTienKmTu19TroLen);

  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  console.log(giaTienCho);

  // TH1: Đi 1km ==> số Km người dùng đi * giaTienKmDauTien (soKm <= 1 && soKm > 0)
  // TH2: Đi trong khoản từ 1 đến 19km ==> giaTienKmDauTien + (soKm - 1)*giaTienKmTu1Den19
  // TH3: Đi trong khoảng từ 19km trở lên ==> giaTienKmDauTien + 18*giaTienKmTu1Den19 + (soKm - 19)*giaTienKmTu19TroLen
  // Tính tiền chờ ==> if (thoiGianCho > 3) ==> math.floor((thoiGianCho-3) / 3)

  let tongTien = 0;
  if (soKm <= 1 && soKm > 0) {
    tongTien = soKm * giaTienKmDauTien;
  } else if (soKm > 1 && soKm <= 19) {
    tongTien = giaTienKmDauTien + (soKm - 1) * giaTienKmTu1Den19;
  } else {
    tongTien =
      giaTienKmDauTien +
      18 * giaTienKmTu1Den19 +
      (soKm - 19) * giaTienKmTu19TroLen;
  }

  let tienCho = 0;
  if (thoiGianCho > 3) {
    tienCho = Math.floor((thoiGianCho - 3) / 3) * giaTienCho;
  }

  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = (
    tongTien + tienCho
  ).toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
};

// in hóa đơn
document.getElementById("btnInHoaDon").onclick = () => {
  let loaiXe = document.querySelector("input[type='radio']:checked").value;
  console.log(loaiXe);
  let soKm = document.getElementById("txt-km").value * 1;
  console.log(soKm);
  let thoiGianCho = document.getElementById("txt-thoiGianCho").value * 1;
  console.log(thoiGianCho);

  let giaTienKmDauTien = kiemTraGiaTienKmDauTien(loaiXe);
  console.log(giaTienKmDauTien);
  let giaTienKmTu1Den19 = kiemTraGiaTienKmTu1Den19(loaiXe);
  console.log(giaTienKmTu1Den19);
  let giaTienKmTu19TroLen = kiemTraGiaTienKmTu19TroLen(loaiXe);
  console.log(giaTienKmTu19TroLen);
  let giaTienCho = kiemTraGiaTienCho(loaiXe);
  console.log(giaTienCho);

  let soKmDauTien = 0;
  let soKmTu1Den19 = 0;
  let soKmTu19TroLen = 0;
  if (soKm <= 1) {
    soKmDauTien = soKm;
    console.log(soKmDauTien);
  } else if (soKm > 1 && soKm <= 19) {
    soKmDauTien = 1;
    soKmTu1Den19 = soKm - 1;
    console.log(soKmTu1Den19);
  } else {
    soKmDauTien = 1;
    soKmTu1Den19 = 18;
    soKmTu19TroLen = soKm - 19;
    console.log(soKmTu19TroLen);
  }

  let tienKmDauTien = soKmDauTien * giaTienKmDauTien;
  let tienKmTu1Den19 = soKmTu1Den19 * giaTienKmTu1Den19;
  let tienKmTu19TroLen = soKmTu19TroLen * giaTienKmTu19TroLen;
  let tienCho = 0;
  if (thoiGianCho > 3) {
    tienCho = Math.floor((thoiGianCho - 3) / 3) * giaTienCho;
  }
  let tongTien = tienKmDauTien + tienKmTu1Den19 + tienKmTu19TroLen + tienCho;

  // test thử chức năng modal của bootstrap 4
  $("#myModal").modal("show");
  document.querySelector(
    ".modal-body"
  ).innerHTML = `<table border='1' style="width: 100%; text-align: center">
  <tr>
  <th style="text-align: center">CHI TIẾT</th>
  <th style="text-align: center">SỬ DỤNG</th>
  <th style="text-align: center">ĐƠN GIÁ</th>
  <th style="text-align: center">THÀNH TIỀN</th>
  </tr>

  <tr>
  <td>KM ĐẦU TIÊN</td>
  <td>${soKmDauTien}</td>
  <td>${giaTienKmDauTien}</td>
  <td>${tienKmDauTien.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}</td>
  </tr>

  <tr>
  <td>Từ 1 đến 19</td>
  <td>${soKmTu1Den19}</td>
  <td>${giaTienKmTu1Den19}</td>
  <td>${tienKmTu1Den19.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}</td>
  </tr>

  <tr>
  <td>Từ 19 trở lên</td>
  <td>${soKmTu19TroLen}</td>
  <td>${giaTienKmTu19TroLen}</td>
  <td>${tienKmTu19TroLen.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}</td>
  </tr>

  <tr>
  <td>Thời gian chờ</td>
  <td>${thoiGianCho}</td>
  <td>${giaTienCho}</td>
  <td>${tienCho.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}</td>
  </tr>

  <tr>
  <td colspan="4">TỔNG TIỀN: ${tongTien.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  })}</td>
  </tr>
  </table>`;
};
