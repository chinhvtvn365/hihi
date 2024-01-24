import React from "react";
import { Box, Button, Header, Input, Page, Select } from "zmp-ui";

const MapForm = () => {
  const { OtpGroup, Option } = Select;
  return (
    <Page className="flex flex-col">
      <Header title="Đề xuất chỉnh sửa"></Header>
      <Box className="p-4">
        <Box className="mt-1">
          <Input label="Tên địa điểm:" />
        </Box>
        <Box className="mt-1">
          <Select label="Nhóm:" placeholder="Placeholder" defaultValue="1">
            <OtpGroup label="Group 1">
              <Option value="1" title="Option 1" />
              <Option value="2" title="Option 2" />
            </OtpGroup>
            <OtpGroup label="Group 2">
              <Option value="3" title="Option 3" />
              <Option value="4" title="Option 4" />
              <Option value="5" title="Option 5" disabled />
              <Option value="6" title="Option 6" />
            </OtpGroup>
          </Select>
        </Box>
        <Box className="mt-1">
          <Select
            label="Huyện/Thành phố:"
            placeholder="Placeholder"
            defaultValue="1"
          >
            <OtpGroup label="Group 1">
              <Option value="1" title="Option 1" />
              <Option value="2" title="Option 2" />
            </OtpGroup>
            <OtpGroup label="Group 2">
              <Option value="3" title="Option 3" />
              <Option value="4" title="Option 4" />
              <Option value="5" title="Option 5" disabled />
              <Option value="6" title="Option 6" />
            </OtpGroup>
          </Select>
        </Box>
        <Box className="mt-1">
          <Select label="Phường/Xã:" placeholder="Placeholder" defaultValue="1">
            <OtpGroup label="Group 1">
              <Option value="1" title="Option 1" />
              <Option value="2" title="Option 2" />
            </OtpGroup>
            <OtpGroup label="Group 2">
              <Option value="3" title="Option 3" />
              <Option value="4" title="Option 4" />
              <Option value="5" title="Option 5" disabled />
              <Option value="6" title="Option 6" />
            </OtpGroup>
          </Select>
        </Box>
        <Box className="mt-1">
          <Input label="Số nhà, tên đường:" />
        </Box>
        <Box className="mt-1">
          <Input label="Tọa độ:" />
        </Box>

        <Box className="mt-1">
          <Input.TextArea label="Mô tả:" size="small" />
        </Box>
      </Box>
      <Box>
        <input
          id="image-post"
          name="uploadImage"
          hidden
          type="file"
          accept="image/*"
          capture="camera"
          className="w-50"
          onChange={(e) => handleOnChangeImg(e)}
          multiple
        />
      </Box>
      <Box className="self-center	">
        <Button variant="primary" size="medium" className="rounded-xl">
          Gửi đề xuất
        </Button>
      </Box>
    </Page>
  );
};

export default MapForm;
