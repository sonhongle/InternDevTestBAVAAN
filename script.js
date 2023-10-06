function loadDistricts() {
  var provinceSelect = document.getElementById("province");
  var districtSelect = document.getElementById("district");
  var selectedProvince = provinceSelect.value;



  if (selectedProvince === "HaNoi") {
    var districts = ["Ba Đình", "Hoàn Kiếm", "Hai Bà Trưng"];
  } else if (selectedProvince === "TP.HCM") {
    var districts = ["Quận 1", "Quận 2", "Quận 3"];
  } else if (selectedProvince === "HaNam") {
    var districts = ["Bình Lục", "Kim Bảng", "Duy Tiên"];
  }
  for (var i = 0; i < districts.length; i++) {
    var option = document.createElement("option");
    option.text = districts[i];
    districtSelect.add(option);
  }
}

function submitForm() {
  var name = document.getElementById("name").value
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var province = document.getElementById("province").value;
  var district = document.getElementById("district").value;

  var submittedData = "Họ và tên " + name + "<br>"
  submittedData += "Số Điện Thoại: " + phone + "<br>";
  submittedData += "Email: " + email + "<br>";
  submittedData += "Tỉnh / Thành Phố: " + province + "<br>";
  submittedData += "Quận / Huyện: " + district + "<br>";

  document.getElementById("submitted-data").innerHTML = submittedData;
}
