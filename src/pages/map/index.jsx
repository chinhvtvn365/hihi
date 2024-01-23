import React, { useRef, useState } from "react";
import {
  Box,
  Header,
  Input,
  Button,
  Icon,
  Page,
  Tabs,
  Text,
  Sheet,
} from "zmp-ui";
import GoogleMaps from "../../components/display/googleMaps";

const Map = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const users = Array.from(Array(10).keys()).map((i) => ({
    name: `Người dùng ${i}`,
    avatar: alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase(),
    online: Math.floor(Math.random() * 10) % 2 === 0,
    key: i,
  }));
  const hi = (a) => {
    console.log(a);
  };
  const ref = useRef(null);

  const onMouseDown = (e) => {
    const el = ref.current;
    if (!el) {
      return;
    }

    const startX = e.pageX;
    const scrollLeft = el.scrollLeft;

    const onMouseMove = (e) => {
      const x = e.pageX - startX;
      el.scrollLeft = scrollLeft - x;
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };
  const [sheetVisible, setSheetVisible] = useState(false);
  return (
    <Page className="flex flex-col">
      <Header title="Bản đồ số tỉnh Hậu Giang" />
      <Tabs
        id="contact-list"
        defaultActiveKey="1"
        onChange={(activeKey) => hi(activeKey)}
      >
        <Tabs.Tab key="1" label="Y tế"></Tabs.Tab>
        <Tabs.Tab key="2" label="Du lịch"></Tabs.Tab>
        <Tabs.Tab key="3" label="Giáo dục"></Tabs.Tab>
      </Tabs>
      <Box className="flex-1 relative">
        <div className="flex flex-col gap-3 absolute z-10 m-3 top-0 left-0 right-0">
          <div className="flex flex-row w-full gap-[5px] p-2 rounded-md bg-white">
            <Input type="text" size="small" placeholder="Nội dung tìm kiếm" />
            <Button
              variant="primary"
              size="small"
              className="rounded-md flex-shrink-0 w-auto"
            >
              <Text size="small">Tìm kiếm</Text>
            </Button>
          </div>
          <div
            ref={ref}
            className="flex flex-row gap-2 overflow-x-auto hide-scrollbar"
            onMouseDown={onMouseDown}
          >
            <Button
              variant="secondary"
              size="small"
              className="rounded-2xl bg-white text-textGray flex-shrink-0 w-auto"
            >
              <i className="fa-solid fa-star"></i> Khu cách ly y tế
            </Button>
            <Button
              variant="secondary"
              size="small"
              className="rounded-2xl bg-white text-textGray flex-shrink-0 w-auto"
            >
              Có gường bệnh
            </Button>

            <Button
              variant="secondary"
              size="small"
              className="rounded-2xl bg-white text-textGray flex-shrink-0 w-auto"
            >
              Không có gường bệnh
            </Button>

            <Button
              variant="secondary"
              size="small"
              className="rounded-2xl bg-white text-textGray flex-shrink-0 w-auto"
            >
              Phòng khám đa khoa
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3 absolute z-10 m-3 bottom-0 left-0">
          <Button
            variant="secondary"
            size="medium"
            className="rounded-xl bg-white text-textGray flex-shrink-0 w-auto"
            prefixIcon={<Icon icon="zi-list-1" />}
            onClick={() => {
              setSheetVisible(true);
            }}
          >
            Xem danh sách
          </Button>
        </div>
        <div className="flex flex-col gap-3 absolute z-10 m-3 bottom-0 right-0">
          <Button
            variant="secondary"
            size="small"
            className="rounded-2xl bg-white text-textGray flex-shrink-0 w-auto"
            icon={<i className="fa-solid fa-location-crosshairs"></i>}
          ></Button>
        </div>
        <GoogleMaps />
        <Sheet
          visible={sheetVisible}
          onClose={() => setSheetVisible(false)}
          autoHeight
          mask
          handler
          swipeToClose
        >
           <Box className="px-4">
              <Text.Title>Danh sách địa điểm</Text.Title>
            </Box>
          <Box
            p={4}
            className="custom-bottom-sheet"
            flex
            flexDirection="column"
          >
            <Box className="bottom-sheet-body" style={{ overflowY: "auto" }}>
              <div className="flex flex-row">
                <Text>Khu cách ly y tế</Text>
              </div>
              <Text.Title>Khu cách ly y tế</Text.Title>
              <Text size="small">Địa chỉ: Đường số 14</Text>
            </Box>
            <Box flex flexDirection="row" mt={1}>
              <Box style={{ flex: 1 }} pr={1}>
              <Button
            variant="secondary"
            size="medium"
            className="rounded-2xl bg-white text-primary border border-solid border-primary"
            prefixIcon={<Icon icon="zi-list-1" />}
          >
           Chỉnh sửa
          </Button>
              </Box>
              <Box style={{ flex: 1 }} pl={1}>
              <Button
            variant="secondary"
            size="medium"
            className="rounded-2xl bg-white text-primary border border-solid border-primary"
            prefixIcon={<Icon icon="zi-list-1" />}
          >
          Chỉ đường
          </Button>
              </Box>
            </Box>
            <hr className=" mt-4 border-divider border-t-[0.5px]"></hr>
          </Box>
          <Box
            p={4}
            className="custom-bottom-sheet"
            flex
            flexDirection="column"
          >
            <Box className="bottom-sheet-body" style={{ overflowY: "auto" }}>
              <div className="flex flex-row">
                <Text>Khu cách ly y tế</Text>
              </div>
              <Text.Title>Khu cách ly y tế</Text.Title>
              <Text size="small">Địa chỉ: Đường số 14</Text>
            </Box>
            <Box flex flexDirection="row" mt={1}>
              <Box style={{ flex: 1 }} pr={1}>
              <Button
            variant="secondary"
            size="medium"
            className="rounded-2xl bg-white text-primary border border-solid border-primary"
            prefixIcon={<Icon icon="zi-list-1" />}
          >
           Chỉnh sửa
          </Button>
              </Box>
              <Box style={{ flex: 1 }} pl={1}>
              <Button
            variant="secondary"
            size="medium"
            className="rounded-2xl bg-white text-primary border border-solid border-primary"
            prefixIcon={<Icon icon="zi-list-1" />}
          >
          Chỉ đường
          </Button>
              </Box>
            </Box>
            <hr className=" mt-4 border-divider border-t-[0.5px]"></hr>
          </Box>
          <Box
            p={4}
            className="custom-bottom-sheet"
            flex
            flexDirection="column"
          >
            <Box className="bottom-sheet-body" style={{ overflowY: "auto" }}>
              <div className="flex flex-row">
                <Text>Khu cách ly y tế</Text>
              </div>
              <Text.Title>Khu cách ly y tế</Text.Title>
              <Text size="small">Địa chỉ: Đường số 14</Text>
            </Box>
            <Box flex flexDirection="row" mt={1}>
              <Box style={{ flex: 1 }} pr={1}>
              <Button
            variant="secondary"
            size="medium"
            className="rounded-2xl bg-white text-primary border border-solid border-primary"
            prefixIcon={<Icon icon="zi-list-1" />}
          >
           Chỉnh sửa
          </Button>
              </Box>
              <Box style={{ flex: 1 }} pl={1}>
              <Button
            variant="secondary"
            size="medium"
            className="rounded-2xl bg-white text-primary border border-solid border-primary"
            prefixIcon={<Icon icon="zi-list-1" />}
          >
          Chỉ đường
          </Button>
              </Box>
            </Box>
            <hr className=" mt-4 border-divider border-t-[0.5px]"></hr>
          </Box>
        </Sheet>
      </Box>
    </Page>
  );
};

export default Map;
