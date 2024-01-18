import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Page } from "zmp-ui";
import rectangle from "../../static/image/Rectangle.png";



const DetailBook = () => {
 

  const navigate = useNavigate();


  const btnCart = useMemo(
    () => ({
      id: 1,
      content: "Thêm vào giỏ",
      type: "primary",
    
    }),
    []
  );

  const btnPayment = useMemo(
    () => ({
      id: 2,
      content: "Thanh toán",
      type: "secondary",
      onClick: () => {
        navigate("/finish-order");
      },
    }),
    []
  );
    let totalPrice = 0
    let product = {
      "id": 25,
      "imgProduct": rectangle,
      "nameProduct": "DJI Mavic Pro 2",
      "salePrice": "333000",
      "retailPrice": "444000",
      "description": "Pack your gear in the 15.6” Octave Backpack. It’s sturdy enough to stand up to everyday use but lightweight by design. It’ll keep your tech protected in its padded laptop pocket. And we’ve incorporated plenty of space to \naccommodate your on-the-go essentials like a charger, notebook, pens, water bottles, and more. Once it’s on your shoulders, its padded back panel and contoured shoulder straps make it comfortable for the commute.\nKeep all your gear safe, organized, and secure while out and about with this Platinum Street Tech Medium Backpack. This easy-open backpack features multiple storage compartments giving you quick access to one DSLR camera with its lenses attached and space for the extra gear you need.\nSecure your tripod on the front of your pack to insure an easy, hands-free hike with all your gear. This backpack is more than just a camera bag, with a padded laptop pocket holding up to a 13” laptop or tablet. A waterproof base protecting your valuables from wet surfaces and a side water bottle pocket keeping you hydrated. Multi-panel back cushions provide comfort and ventilation when on the go and lumbar zip pocket to secure valuables. Padded shoulder straps and sternum strap helping with weight distribution. This backpack gives you the freedom to pack and carry every must-have accessory.",
      "options": []
  }
  let salePercentage = 24
  return (
    <Page>
      <div
        className=" relative bg-white w-full"
        style={{ paddingBottom: totalPrice > 0 ? "120px" : "80px" }}
      >
        {product && (
          <>
            <img src={product.imgProduct} alt="" className="w-full h-auto" />
            {salePercentage && (
              <div className="absolute top-2.5 right-2.5 text-white font-medium text-sm px-2 py-1 bg-[#FF9743] w-auto h-auto rounded-lg">
                -{salePercentage}%
              </div>
            )}
            <Box m={0} p={4} className="border-b">
              <div className=" text-lg">{product?.nameProduct}</div>
              <span className=" pt-1 font-semibold text-base text-primary">
                <span className=" font-normal text-xs text-primary">đ</span>
            12345
              </span>
              <span className=" pl-2 pt-1 font-medium text-sm text-zinc-400">
                đ12345
              </span>
            </Box>
            <Box
              m={0}
              px={4}
              py={5}
              className=" text-justify break-words whitespace-pre-line"
            >
              {product.description}
            </Box>
          </>
        )}
      </div>

      {/* {!!totalPrice && (
        <ButtonPriceFixed
          quantity={cart.listOrder.length}
          totalPrice={totalPrice}
          handleOnClick={() => navigate("/finish-order")}
        />
      )}
      <ButtonFixed listBtn={listBtn} /> */}
    </Page>
  );
};

export default DetailBook;
