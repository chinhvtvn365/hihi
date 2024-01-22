import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";

const Marker = React.memo(({ map, maps, dataItem, active, onMarkerClick, handleGetScene, extractCoordinates}) => {
  console.log("hga");
  const [infoWindow, setInfoWindow] = useState(null);
  const locationParam = extractCoordinates(dataItem?.location)
  let lat = 9.176237
  let lng = 105.150845
  if (Array.isArray(locationParam) && locationParam.length === 2) {
     [lat, lng] = locationParam;
  }
  const handleClick = () => {
    handleGetScene(dataItem);
  };
  const handleDirectionClick = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    window.open(url, "_blank");
  };

  useEffect(() => {
    const marker = new maps.Marker({
      position: { lat, lng },
      map,
    });

    marker.addListener("click", () => {
      onMarkerClick(dataItem.id);
    });
    const content = ` <div class="ggmap__info">
        <div class="ggmap__info__img__wap">
        <img
            class="ggmap__info__img"
            alt="imgLocation"
            src="${process.env.NEXT_PUBLIC_ASSETS_URL + dataItem?.image?.path}"
            onerror="this.src='/images/no-image.png';"
        />
        </div>
        <h5 class="ggmap__info__text">${dataItem?.title}</h5>
        <div class="ggmap__info__btn__wap">
        <button class="ggmap__info__btn btn__tour">KHÁM PHÁ 360°</button>
        <button class="ggmap__info__btn btn__map">CHỈ ĐƯỜNG</button>
    </div>
    </div>
    `;
    const infowindow = new maps.InfoWindow({
      content,
    });
    const updateMinHeight = () => {
      const iwOuterD = document.querySelector(".gm-style-iw-d");
      if (window.matchMedia("(max-width: 430px)").matches) {
        if (iwOuterD) {
          iwOuterD.style.minHeight = "100px";
        }
      } else {
        if (iwOuterD) {
          iwOuterD.style.minHeight = ""; // Loại bỏ minHeight khi màn hình lớn hơn 430px
        }
      }
    };
    infowindow.addListener("domready", () => {
      const exploreButton = document.querySelector(".btn__tour");
      const directionButton = document.querySelector(".btn__map");
      const infoDiv = document.querySelector(".ggmap__info");
      const iwOuter = document.querySelector(".gm-style-iw");
      const iwOuterD = document.querySelector(".gm-style-iw-d");
      updateMinHeight();
      window.addEventListener("resize", updateMinHeight);
      if (exploreButton) {
        exploreButton.addEventListener("click", handleClick);
      }
      if (directionButton) {
        directionButton.addEventListener("click", handleDirectionClick);
      }
      if (infoDiv) {
        if (active) {
          infoDiv.classList.add("active");
        } else {
          infoDiv.classList.remove("active");
        }
      }


      const closeBtn = document.querySelector(".gm-ui-hover-effect");
      if (closeBtn) {
        closeBtn.style.display = "none";
        const customCloseBtn = document.createElement("img");
        customCloseBtn.src = "/images/cancel.png";
        customCloseBtn.className = "custom-close-button";
    
        if (iwOuter) {
          iwOuter.appendChild(customCloseBtn);
          customCloseBtn.addEventListener("click", function() {
          infowindow.close();
        });
      }}
      
      if (iwOuter) {
        iwOuter.style.borderRadius = "20px";
        iwOuter.style.padding = "12px";
        iwOuter.style.boxShadow = "3px 3px 3px rgba(0, 0, 0, 0.4)";
      }
      if (iwOuterD) {
        iwOuterD.style.overflow = "auto";
      }
      return () => {
        if (directionButton) {
          directionButton.removeEventListener("click", handleDirectionClick);
        }
        if (exploreButton) {
          exploreButton.removeEventListener("click", handleClick);
        }
        window.removeEventListener("resize", updateMinHeight);
      };
    });
    if (active) {
      infowindow.open(map, marker);
      setInfoWindow(infowindow);
    }

    return () => {
      marker.setMap(null);
    };
  }, [map, maps, active, dataItem]);

  useEffect(() => {
    if (!active && infoWindow) {
      infoWindow.close();
    }
  }, [active, infoWindow]);

  return null;
});
const GoogleMaps = ({  zoom, handleGetScene }) => {
  let data = [
    {
        "name": "Trung tâm thành phố Cà Mau",
        "url": "trung-tam-thanh-pho-ca-mau",
        "urlXml": "/view-tour/trung-tam-thanh-pho-ca-mau.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Trung tâm thành phố Cà Mau",
        "type": null,
        "image": {
            "path": "/Krpano/f3082879-acbc-4d4f-b0a4-cdc5592a8e2c-20230925172424-Picture2.png",
            "name": "Picture2.png",
            "showingName": "Picture2.png",
            "thumbnail": null,
            "type": "image/png",
            "size": 2906309
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Thành phố Cà Mau nằm trên trục Quốc lộ 1 đi từ Cần Thơ đến Mũi Cà Mau, có đường Quản Lộ - Phụng Hiệp, Quốc lộ 63 đi ngang và nhiều tuyến sông lớn&nbsp;</p>",
        "content": "",
        "address": "Thành phố Cà Mau",
        "location": "9.174247,105.158939",
        "order": 1,
        "active": true,
        "keyword": "trung tam thanh pho ca mau",
        "tagName": [],
        "lastModificationTime": "2023-12-22T08:54:08.861",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T18:00:54.579",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "1173be09-8a3a-ae82-1443-3a0d1554a4b3"
    },
    {
        "name": "Sắc tứ Quan Âm cổ tự (Chùa Phật Tổ)",
        "url": "sac-tu-quan-am-co-tu-chu-phat-to",
        "urlXml": "/view-tour/sac-tu-quan-am-co-tu-chu-phat-to.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Sắc tứ Quan Âm cổ tự (Chùa Phật Tổ)",
        "type": null,
        "image": {
            "path": "/Krpano/f2f70e90-8e8d-44c6-950e-0a929d447cf1-20230817104013-chua-phat-to.jpg",
            "name": "chua-phat-to.jpg",
            "showingName": "chua-phat-to.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 149175
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p><span style=\"color:rgb(0,0,0);\">Chùa được xây dựng vào năm 1840, mang đậm lối kiến trúc cổ của thế kỷ 19, đây là nơi truyền giáo Phật pháp sớm nhất ở vùng đất Cà Mau</span></p>",
        "content": "",
        "address": "Phường 4, TP. Cà Mau",
        "location": "ll=9.182371,105.147354&z=15&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=14013360263309337706",
        "order": 3,
        "active": true,
        "keyword": "sac tu quan am co tu (chua phat to)",
        "tagName": [],
        "lastModificationTime": "2023-11-04T18:20:50.72",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T10:40:13.549",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "dc46f777-1c25-1495-3fbf-3a0d13c12f6d"
    },
    {
        "name": "Thắng cảnh Hòn Đá Bạc",
        "url": "thang-canh-hon-da-bac",
        "urlXml": "/view-tour/thang-canh-hon-da-bac.xml",
        "vrCode": "helu",
        "vrTour": true,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "968",
        "districtName": null,
        "categorization": "bc810a9e-8d3f-4be8-a925-3a0e1ae057c2",
        "categorizationName": "Địa điểm tham quan",
        "title": "Thắng cảnh Hòn Đá Bạc",
        "type": null,
        "image": {
            "path": "/Krpano/09276864-0312-451f-b43c-e6a6b92ac969-20231001114125-hon-da-bac-1.jpg",
            "name": "hon-da-bac-1.jpg",
            "showingName": "hon-da-bac-1.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 216406
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Hòn Đá Bạc bao gồm Hòn Ông Ngộ, Hòn Đá Bạc, Hòn Đá Bạc Lẻ. Đỉnh cao nhất của hòn khoảng 50 mét so với mặt nước biển</p>",
        "content": "",
        "address": "ấp Kinh Hòn, xã Khánh Bình Tây, H.Trần Văn Thời",
        "location": "ll=9.17864,104.802105&z=17&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=15447330245217195913",
        "order": 3,
        "active": true,
        "keyword": "thang canh hon da bac",
        "tagName": [],
        "lastModificationTime": "2023-12-06T12:41:59.743",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T11:41:25.637",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "076df095-8000-70d2-4eed-3a0dfbb76385"
    },
    {
        "name": "Chùa Monivongsa Bopharam",
        "url": "chua-monivongsa-bopharam",
        "urlXml": "/view-tour/chua-monivongsa-bopharam.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Chùa Monivongsa Bopharam",
        "type": null,
        "image": {
            "path": "/Krpano/38ba5bfb-ddfb-4683-99c8-8516aca43bf1-20230817172422-chuaMonivongsaBopharam2.jpg",
            "name": "chuaMonivongsaBopharam2.jpg",
            "showingName": "chuaMonivongsaBopharam2.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 2628340
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p><span style=\"color:rgb(34,34,34);\">Monivongsa Bopharam như một đóa sen cách điệu với màu sắc nổi bật, mang vẻ đẹp vừa cổ kính vừa trầm mặc.</span></p>",
        "content": "",
        "address": "Phường 1, Thành phố Cà Mau",
        "location": "ll=9.182905,105.147161&z=15&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=7545963201284495735",
        "order": 3,
        "active": true,
        "keyword": "chua monivongsa bopharam",
        "tagName": [],
        "lastModificationTime": "2023-11-04T18:20:44.897",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T17:24:22.45",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "2d53d3de-2bf5-3be1-c744-3a0d153331b1"
    },
    {
        "name": "Chùa Bà Mã Châu (Chùa Bà Thiên Hậu)",
        "url": "chua-ba-ma-chau-chua-ba-thien-hau",
        "urlXml": "/view-tour/chua-ba-ma-chau-chua-ba-thien-hau.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Chùa Bà Mã Châu (Chùa Bà Thiên Hậu)",
        "type": null,
        "image": {
            "path": "/Krpano/f59c40d6-fcf8-40ea-b1e7-1591789ba497-20230817104257-chuabathienhaucamau1.jpg",
            "name": "chuabathienhaucamau1.jpg",
            "showingName": "chuabathienhaucamau1.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 729214
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p><span style=\"color:rgb(0,0,0);\">Chùa Bà Thiên Hậu là công trình kiến trúc tiêu biểu của người Hoa Cà Mau.</span></p>",
        "content": "",
        "address": "Số 68, Lê Lợi, P.2, TP. Cà Mau",
        "location": "ll=9.177295,105.147054&z=15&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=266219698898078469",
        "order": 4,
        "active": true,
        "keyword": "chua ba ma chau (chua ba thien hau)",
        "tagName": [],
        "lastModificationTime": "2023-11-04T18:20:55.662",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T10:42:57.576",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "3a29631d-b0fa-423e-f6de-3a0d13c3b028"
    },
    {
        "name": "Chùa Rạch Giồng",
        "url": "chua-rach-giong",
        "urlXml": "/view-tour/chua-rach-giong.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "967",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Chùa Rạch Giồng",
        "type": null,
        "image": {
            "path": "/Krpano/4eb57bff-69d9-46da-b7a4-5f4faf489d52-20230817105021-chua-rach-gion.jpg",
            "name": "chua-rach-gion.jpg",
            "showingName": "chua-rach-gion.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 376601
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p><span style=\"color:rgb(34,34,34);\">Chùa Rạch Giồng là một trong những ngôi chùa Khmer được xây dựng khá sớm tại tỉnh Cà Mau. Chùa là trung tâm văn hóa tâm linh, tín ngưỡng tôn giáo của cộng đồng người Khmer - Kinh – Hoa.</span></p>",
        "content": "",
        "address": "Ấp Đường Đào, xã Hồ Thị Kỷ, H. Thới Bình",
        "location": "ll=9.26803,105.117142&z=16&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=16541843230712915737",
        "order": 5,
        "active": true,
        "keyword": "chua rach giong",
        "tagName": [],
        "lastModificationTime": "2023-10-28T11:01:35.117",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T10:50:21.294",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "14d3f808-719a-4dac-9247-3a0d13ca756d"
    },
    {
        "name": "Thánh thất Cao Đài Cà Mau",
        "url": "thanh-that-cao-dai-ca-mau",
        "urlXml": "/view-tour/thanh-that-cao-dai-ca-mau.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Thánh thất Cao Đài Cà Mau",
        "type": null,
        "image": {
            "path": "/Krpano/25b1a763-ae6b-4563-9bb7-545984252c20-20230817174634-base64-16311720070511456458272.png",
            "name": "base64-16311720070511456458272.png",
            "showingName": "base64-16311720070511456458272.png",
            "thumbnail": null,
            "type": "image/png",
            "size": 3554230
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Công trình nặng khoảng 1.500 tấn, được nâng cao khoảng 2,2 m, trước sự ngỡ ngàng của nhiều người.</p>",
        "content": "",
        "address": "Phường 5, thành phố Cà Mau",
        "location": "0, 0",
        "order": 6,
        "active": true,
        "keyword": "thanh that cao dai ca mau",
        "tagName": [],
        "lastModificationTime": "2023-11-05T09:45:26.834",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T17:44:12.929",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "ad2049dc-136e-a9d9-d2c6-3a0d15455c00"
    },
    {
        "name": "Nhà thờ Giáo xứ Cà Mau",
        "url": "nha-tho-giao-xu-ca-mau",
        "urlXml": "/view-tour/nha-tho-giao-xu-ca-mau.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Nhà thờ Giáo xứ Cà Mau",
        "type": null,
        "image": {
            "path": "/Krpano/7d1a919c-1ab0-4f9c-8705-7998eaa2b870-20230925170631-Picture1.png",
            "name": "Picture1.png",
            "showingName": "Picture1.png",
            "thumbnail": null,
            "type": "image/png",
            "size": 1209879
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Ngày 29-12-2015 là một ngày đặc biệt vì Họ đạo Cà Mau vừa tròn 90 năm tuổi (1925-2015), đặc biệt hơn vì cũng là ngày cung hiến ngôi nhà thờ mới.</p>",
        "content": "",
        "address": "200/20 Lý Thường Kiệt P.6,TP. Cà Mau",
        "location": "ll=9.174068,105.158753&z=15&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=13800443419028933643",
        "order": 7,
        "active": true,
        "keyword": "nha tho giao xu ca mau",
        "tagName": [],
        "lastModificationTime": "2023-11-04T21:27:42.088",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T17:54:40.669",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "19cb5274-a520-e48e-6651-3a0d154ef01d"
    },
    {
        "name": "Khu tưởng niệm Chủ tịch Hồ Chí Minh",
        "url": "khu-tuong-niem-chu-tich-ho-chi-minh",
        "urlXml": "/view-tour/khu-tuong-niem-chu-tich-ho-chi-minh.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Khu tưởng niệm Chủ tịch Hồ Chí Minh",
        "type": null,
        "image": {
            "path": "/Krpano/3b1dde1a-4303-469d-86b8-26679e30a17e-20230817175748-khutuongniemBH2.jpg",
            "name": "khutuongniemBH2.jpg",
            "showingName": "khutuongniemBH2.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 63247
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Khu tưởng niệm Chủ tịch Hồ Chí Minh là công trình văn hóa có ý nghĩa đặc biệt, đáp ứng nguyện vọng, lòng mong mỏi và thể hiện tình cảm kính yêu, lòng biết ơn vô hạn của Đảng bộ, nhân dân Cà Mau đối với Bác Hồ</p>",
        "content": "",
        "address": "Phường 1, TP. Cà Mau",
        "location": "0, 0",
        "order": 8,
        "active": true,
        "keyword": "khu tuong niem chu tich ho chi minh",
        "tagName": [],
        "lastModificationTime": "2023-11-04T20:51:09.861",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T17:57:49.001",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "e1d04549-54fa-92b2-2f01-3a0d1551cfc9"
    },
    {
        "name": " Vườn Quốc gia Mũi Cà Mau",
        "url": "vuon-quoc-gia-mui-ca-mau",
        "urlXml": "/view-tour/vuon-quoc-gia-mui-ca-mau.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "973",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": " Vườn Quốc gia Mũi Cà Mau",
        "type": null,
        "image": {
            "path": "/Krpano/099d2a8d-e0cd-40ab-997c-8b90ae30accb-20231001113733-vuon-quoc-gia-mui-ca-mau.png",
            "name": "vuon-quoc-gia-mui-ca-mau.png",
            "showingName": "vuon-quoc-gia-mui-ca-mau.png",
            "thumbnail": null,
            "type": "image/png",
            "size": 444064
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Vườn Quốc gia Mũi Cà Mau, là điểm đến nổi tiếng mang tính địa lý, văn hóa, danh thắng và du lịch sinh thái tiêu biểu của cả nước</p>",
        "content": "",
        "address": "Huyện Ngọc Hiển",
        "location": "ll=8.611835,104.71753&z=15&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=17956337560637591388",
        "order": 9,
        "active": true,
        "keyword": " vuon quoc gia mui ca mau",
        "tagName": [],
        "lastModificationTime": "2023-10-28T11:02:03.932",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T18:03:24.155",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "5c9702a5-03b3-f74c-b919-3a0d1556ecfb"
    },
    {
        "name": "Khu du lịch Khai Long",
        "url": "khi-du-lich-khai-long",
        "urlXml": "/view-tour/khi-du-lich-khai-long.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "973",
        "districtName": null,
        "categorization": "bc810a9e-8d3f-4be8-a925-3a0e1ae057c2",
        "categorizationName": "Địa điểm tham quan",
        "title": "Khu du lịch Khai Long",
        "type": null,
        "image": {
            "path": "/Krpano/0e64b26b-aaac-4b09-a2b3-d15d6b955007-20231001105759-khu-du-lich-khai-long.png",
            "name": "khu-du-lich-khai-long.png",
            "showingName": "khu-du-lich-khai-long.png",
            "thumbnail": null,
            "type": "image/png",
            "size": 129743
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Khi đến với khu du lịch Khai Long du khách sẽ có dịp được đi xuyên qua những cánh rừng ngập mặn nguyên sinh với những loài cây đặc trưng của vùng đất Cà Mau: đước, mắm, sú vẹt…&nbsp;</p>",
        "content": "",
        "address": "Ấp Khai Long, xã Đất Mũi, huyện Ngọc Hiển",
        "location": "ll=8.568162419127667,104.82824706083807&z=14&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=12276847697760890107",
        "order": 10,
        "active": true,
        "keyword": "khu du lich khai long",
        "tagName": [],
        "lastModificationTime": "2023-10-28T11:02:12.181",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T10:57:59.269",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "1505ec58-bfa5-07a0-94fd-3a0dfb8f9e65"
    },
    {
        "name": "Vườn quốc gia U Minh Hạ",
        "url": "vuon-quoc-gia-u-minh-ha",
        "urlXml": "/view-tour/vuon-quoc-gia-u-minh-ha.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "968",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Vườn quốc gia U Minh Hạ",
        "type": null,
        "image": {
            "path": "/Krpano/eea5e329-0639-4034-81e0-eaba740224c2-20231001113711-vuon-quoc-gia-u-minh-ha.jpg",
            "name": "vuon-quoc-gia-u-minh-ha.jpg",
            "showingName": "vuon-quoc-gia-u-minh-ha.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 222345
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Ngày 20/01/2006, Thủ tướng Chính phủ đã ký Quyết định số 112/QĐ-TTg về việc chuyển Khu bảo tồn thiên nhiên Vồ Dơi thành Vườn Quốc gia U Minh Hạ. Vườn có tổng diện tích 8.256 ha nằm trên địa bàn các xã Khánh Lâm, Khánh An thuộc huyện&nbsp;U Minh&nbsp;và các xã Trần Hợi, Khánh Bình Tây Bắc thuộc huyện&nbsp;Trần Văn Thời</p>",
        "content": "",
        "address": "xã Khánh Lâm, Khánh An, H.U Minh; xã Trần Hợi, xã Khánh Bình Tây Bắc, H. Trần Văn Thời",
        "location": "104.9566119, 9.197815",
        "order": 11,
        "active": true,
        "keyword": "vuon quoc gia u minh ha",
        "tagName": [],
        "lastModificationTime": "2023-10-13T16:52:40.925",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T11:37:11.131",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "017ad2a2-6542-18a9-5976-3a0dfbb3815b"
    },
    {
        "name": "Đình Tân Hưng",
        "url": "dinh-tan-hung",
        "urlXml": "/view-tour/dinh-tan-hung.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Đình Tân Hưng",
        "type": null,
        "image": {
            "path": "/Krpano/2f0e0108-943d-40ab-b064-904a6bdbd226_20231109113108-a4acf4d6-ad6c-4d42-82fc-8497a21b53c1_20231104165052-6a27d48d-fa3a-4c9f-b6b0-53a94bc31c9a-20230817103610-aaas1111.jpg",
            "name": "a4acf4d6-ad6c-4d42-82fc-8497a21b53c1_20231104165052-6a27d48d-fa3a-4c9f-b6b0-53a94bc31c9a-20230817103610-aaas1111.jpg",
            "showingName": "a4acf4d6-ad6c-4d42-82fc-8497a21b53c1_20231104165052-6a27d48d-fa3a-4c9f-b6b0-53a94bc31c9a-20230817103610-aaas1111.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 148387
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p><span style=\"color:rgb(34,34,34);\">Đình Tân Hưng là nơi treo cờ Đảng Cộng sản Đông Dương đầu tiên tại Cà Mau (năm 1930)</span></p>",
        "content": "",
        "address": "Ap Xóm Lớn, xã Lý Văn Lâm, TP. Cà Mau",
        "location": "ll=9.140748685479071,105.12924893113339&z=17&t=m&hl=vi-VN&gl=US&mapclient=apiv3&cid=0x31a14956f439933b:0xc9349f45fcbc75a5",
        "order": 12,
        "active": true,
        "keyword": "dinh tan hung",
        "tagName": [],
        "lastModificationTime": "2023-11-13T08:41:07.869",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-11-09T11:31:08.882",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "ad212e8c-6c0a-e223-765a-3a0ec485fe52"
    },
    {
        "name": "Đền thờ vua Hùng",
        "url": "den-tho-vua-hung",
        "urlXml": "/view-tour/den-tho-vua-hung.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "967",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Đền thờ vua Hùng",
        "type": null,
        "image": {
            "path": "/Krpano/5be1ea3a-cbf9-4bbb-b5a2-fb8512bd1f04-20231001114353-gt-1.jpg",
            "name": "gt-1.jpg",
            "showingName": "gt-1.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 91496
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Đền thờ Vua Hùng nằm ven quốc lộ 63, thuộc ấp Giao Khẩu, xã Tân Phú, huyện Thới Bình. Đền được xây dựng cách nay trên 150 năm</p>",
        "content": "",
        "address": "ấp Giao Khẩu, xã Tân Phú, H.Thới Bình",
        "location": "105.2185678, 9.3507969",
        "order": 13,
        "active": true,
        "keyword": "den tho vua hung",
        "tagName": [],
        "lastModificationTime": "2023-10-13T16:52:44.047",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T11:43:53.23",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "51f02dbc-eb83-6731-c581-3a0dfbb9a40e"
    },
    {
        "name": "Di tích Lịch sử - Văn hóa Khu căn cứ Tỉnh Ủy ở Xẻo Đước",
        "url": "di-tich-lich-su-van-hoa-khu-can-cu-tinh-uy-o-xeo-duoc",
        "urlXml": "/view-tour/di-tich-lich-su-van-hoa-khu-can-cu-tinh-uy-o-xeo-duoc.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "972",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Di tích Lịch sử - Văn hóa Khu căn cứ Tỉnh Ủy ở Xẻo Đước",
        "type": null,
        "image": {
            "path": "/Krpano/6483a6af-daf4-414b-b21e-f137da1bec88-20231001114835-khu-can-cu-tinh-uy-o-xeo-duoc.jpg",
            "name": "khu-can-cu-tinh-uy-o-xeo-duoc.jpg",
            "showingName": "khu-can-cu-tinh-uy-o-xeo-duoc.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 182247
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Di tích lịch sử Khu căn cứ Tỉnh ủy tại ấp Xẻo Đước nằm cạnh Đầm Thị Tường, thuộc ấp Xẻo Đước, xã Phú Mỹ, huyện Phú Tân, tỉnh Cà Mau</p>",
        "content": "",
        "address": "ấp Xẻo Đước, xã Phú Mỹ, H.Phú Tân",
        "location": "0, 0",
        "order": 14,
        "active": true,
        "keyword": "di tich lich su - van hoa khu can cu tinh uy o xeo duoc",
        "tagName": [],
        "lastModificationTime": "2023-11-12T19:18:41.801",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T11:48:35.814",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "139a2652-40b7-20d2-858b-3a0dfbbdf3e6"
    },
    {
        "name": "Đầm Thị Tường",
        "url": "dam-thi-tuong",
        "urlXml": "/view-tour/dam-thi-tuong.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "972",
        "districtName": null,
        "categorization": "bc810a9e-8d3f-4be8-a925-3a0e1ae057c2",
        "categorizationName": "Địa điểm tham quan",
        "title": "Đầm Thị Tường",
        "type": null,
        "image": {
            "path": "/Krpano/932d27c0-ee2d-495c-9bd8-9db74fd1d10d-20231001115717-dam-thi-tuong.jpg",
            "name": "dam-thi-tuong.jpg",
            "showingName": "dam-thi-tuong.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 260316
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Đầm Thị Tường (còn có tên là Đầm Bà Tường) cách thành phố Cà Mau khoảng 01 giờ ngồi trên cao tốc, nằm cạnh kênh xáng Bà Kẹo, nối ra Vịnh Thái Lan qua con sông Mỹ Bình</p>",
        "content": "",
        "address": "Giáp ranh giữa 3 huyện Phú Tân, Cái Nước và Trần Văn Thời",
        "location": "104.9119734, 9.0023731",
        "order": 15,
        "active": true,
        "keyword": "dam thi tuong",
        "tagName": [],
        "lastModificationTime": "2023-10-13T16:52:49.724",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T11:57:17.26",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "9a2fe9a8-169c-5118-873b-3a0dfbc5e8cc"
    },
    {
        "name": "Thị trấn Sông Đốc",
        "url": "thi-tran-song-doc",
        "urlXml": "/view-tour/thi-tran-song-doc.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "968",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Thị trấn Sông Đốc",
        "type": null,
        "image": {
            "path": "/Krpano/9507bdd9-17ca-4381-9b59-cdaa2b306a8b-20231001120245-thi-tran-song-doc.jpg",
            "name": "thi-tran-song-doc.jpg",
            "showingName": "thi-tran-song-doc.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 121819
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Với lợi thế của nghề khai thác biển truyền thống, từ lâu thị trấn Sông Đốc, huyện Trần Văn Thời đã trở thành làng biển lớn và năng động của cả khu vực Đồng bằng sông Cửu Long.</p>",
        "content": "",
        "address": "Thị trấn Sông Đốc, huyện Trần Văn Thời",
        "location": "0, 0",
        "order": 16,
        "active": true,
        "keyword": "thi tran song doc",
        "tagName": [],
        "lastModificationTime": "2023-10-13T16:52:53.04",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T12:02:45.629",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "8c3e90ee-f185-ac86-3f1c-3a0dfbcaeb7d"
    },
    {
        "name": "Di tích Bến Vàm Lũng",
        "url": "di-tich-ben-vam-lung",
        "urlXml": "/view-tour/di-tich-ben-vam-lung.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "973",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Di tích Bến Vàm Lũng",
        "type": null,
        "image": {
            "path": "/Krpano/07ee6187-d1f4-4d83-89ce-c7e7b854f4f2-20231001123358-ben-vam-lung.jpg",
            "name": "ben-vam-lung.jpg",
            "showingName": "ben-vam-lung.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 106978
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Bến Vàm Lũng nằm ở rạch Chùm Gộng, ấp Xẻo Mắm, xã Tân Ân, huyện Ngọc Hiển. Đây là bến tiếp nhận vũ khí từ miền Bắc cho chiến trường miền Nam theo đường Hồ Chí Minh trên biển.</p>",
        "content": "",
        "address": " Chùm Gộng, ấp Xẻo Mắm, xã Tân Ân, H.Ngọc Hiển",
        "location": "0, 0",
        "order": 17,
        "active": true,
        "keyword": "di tich ben vam lung",
        "tagName": [],
        "lastModificationTime": "2023-10-13T16:52:55.692",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-10-01T12:33:58.809",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "1994dfb4-ad93-a02d-af96-3a0dfbe78092"
    },
    {
        "name": "Nhà Dây Thép",
        "url": "nha-day-thep",
        "urlXml": "/view-tour/nha-day-thep.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Nhà Dây Thép",
        "type": null,
        "image": {
            "path": "/Krpano/cc5ec205-26c4-491b-9b0e-daea92e52aae-20230817103003-NHA DAY THEP.jpg",
            "name": "NHA DAY THEP.jpg",
            "showingName": "NHA DAY THEP.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 381841
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p>Trong cuộc đấu tranh chống thực dân Pháp những năm 1930, các chiến sĩ cách mạng lấy nơi đây làm điểm liên lạc và từ đây các cơ sở đảng ở Cà Mau ngày càng phát triển</p>",
        "content": "",
        "address": "Lê Lợi, Phường 2, TP.Cà Mau",
        "location": "9.178273285968343, 105.1419439584466",
        "order": 18,
        "active": true,
        "keyword": "nha day thep",
        "tagName": [],
        "lastModificationTime": "2023-10-13T16:52:59.565",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T10:30:03.426",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "06f59625-d200-25a4-b9e3-3a0d13b7e01c"
    },
    {
        "name": "Di tích lịch sử Hồng Anh Thư Quán",
        "url": "di-tich-lich-su-hong-anh-thu-quan",
        "urlXml": "/view-tour/di-tich-lich-su-hong-anh-thu-quan.xml",
        "vrCode": null,
        "vrTour": false,
        "prioritizePage": false,
        "contentEn": "",
        "shortContentEn": "",
        "titleEn": null,
        "districtCode": "964",
        "districtName": null,
        "categorization": "d2828e4e-b8ad-d31b-f507-3a0e1adc4ce0",
        "categorizationName": "Di tích lịch sử",
        "title": "Di tích lịch sử Hồng Anh Thư Quán",
        "type": null,
        "image": {
            "path": "/Krpano/e4e4392d-0ccb-46d0-9554-4ede0af9b4b1-20230817172039-hong-anh-thu-quan.jpg",
            "name": "hong-anh-thu-quan.jpg",
            "showingName": "hong-anh-thu-quan.jpg",
            "thumbnail": null,
            "type": "image/jpeg",
            "size": 228371
        },
        "onstart": null,
        "bgcolor": null,
        "idletime": 0,
        "scenes": null,
        "isPublish": true,
        "shortContent": "<p><span style=\"color:rgb(34,34,34);\">Vào đầu thập niên 20 của thế kỷ XX, khi phong trào đấu tranh cách mạng dâng cao ở khắp nơi trong cả nước, tại ngôi nhà này đã hình thành cơ sở Chi hội Việt Nam thanh niên cách mạng Đồng chí hội có tên gọi Hồng Anh Thư Quán</span></p>",
        "content": "",
        "address": "Số 43, đường Phạm Văn Ký, phường 2, TP.Cà Mau",
        "location": "0, 0",
        "order": 19,
        "active": true,
        "keyword": "di tich lich su hong anh thu quan",
        "tagName": [],
        "lastModificationTime": "2023-11-04T18:29:37.137",
        "lastModifierId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "creationTime": "2023-08-17T10:33:44.231",
        "creatorId": "738e8169-4bf9-c306-909b-39fbbf664723",
        "id": "05b11741-c271-b47e-4d22-3a0d13bb3ea6"
    }
]
let center = [9.174247, 105.158939]
let zoom = 15
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(idSelect);
  const handleApiLoaded = ({ map, maps }) => {
    setMap(map);
    setMaps(maps);
  };
  const extractCoordinates = (str) =>{
    if (str.includes('google.com/maps')) {
      const regex = /@?(-?\d+\.\d+),(-?\d+\.\d+)/;
      const match = str.match(regex);
      if (match) {
        return [parseFloat(match[1]), parseFloat(match[2])];
      }
    } else {
      const coords = str.split(',');
      if (coords.length === 2) {
        return coords.map(coord => parseFloat(coord));
      }
    }
    return null;
  }
  const onMarkerClick = (id) => {
    if (activeMarker === id) {
      setActiveMarker(null);
    } else {
      setActiveMarker(id);
    }
  };
  useEffect(() => {
    if (idSelect !== null && idSelect !== activeMarker) {
      setActiveMarker(idSelect);
    }
  }, [idSelect]);
 
  return (
    <GoogleMapReact
    bootstrapURLKeys={{key:"AIzaSyBVjJC0YfitZBQ16t7fnPvK7R8nvFY9CN0"}}
      center={center}
      zoom={zoom}
      hoverDistance={40 / 2}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={handleApiLoaded}
    >
      {map &&
        maps &&
        data &&
        data.map((item, index) => {
          return (
            <Marker
              key={index}
              map={map}
              maps={maps}
              dataItem={item}
              active={activeMarker === item.id}
              onMarkerClick={onMarkerClick}
              handleGetScene={handleGetScene}
              extractCoordinates={extractCoordinates}
            />
          );
        })}
    </GoogleMapReact>
  );
};
export default GoogleMaps;
