import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  width: "1740px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  height: "800px",
};
function HeaderCarousel() {
  return (
    <div className=" ">
      <Carousel autoplay>
        <div>
          <div style={contentStyle} className="relative">
            <div className="absolute top-0 pt-[168px] pl-[90px] leading-10 text-left	text-[#1F1F1F] font-semibold w-full flex">
              <div className="w-3/6">
                <p className="text-[56px] text-[#F68D1D] ">Galasy Group</p>
                <p className="text-[37px]  ">
                  Phát triển & thương mại sản phẩm công nghệ số
                </p>
                <div className="leading-5 mt-4 text-[24px]">
                  <p>Tối ưu hóa hiệu suất cuộc sống của bạn.</p>
                  <p>
                    Tốt hơn một chút, hiệu quả hơn một chút, tối hưu hơn 1 chút.
                  </p>
                </div>
              </div>
              <div className="flex w-3/6 ">
                <div className="flex-1 ">
                  <div
                    style={{
                      width: "377px",
                      height: "440px",
                    }}
                    className="bg-[#D9D9D9] mb-4 ml-4"
                  ></div>
                  <div
                    style={{ width: "377px", height: "337px" }}
                    className="bg-[#D9D9D9] mb-4 ml-4"
                  ></div>
                </div>
                <div className="flex-1 ">
                  {" "}
                  <div
                    style={{ width: "377px", height: "337px" }}
                    className="bg-[#D9D9D9] mb-4"
                  ></div>
                  <div
                    style={{
                      width: "377px",
                      height: "467px",
                    }}
                    className="bg-[#D9D9D9] "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            style={{ width: "1920px", height: "800px" }}
            className="relative"
          >
            <img width="100%" src="/low-angle-view-skyscrapers 2.png" alt="" />
            <div
              className=""
              style={{
                backgroundImage: "url(./low-angle-view-skyscrapers 2.png)",
              }}
            ></div>
            <div className="absolute top-0 pt-[168px] pl-[90px] leading-10 text-left	text-[#1F1F1F] font-semibold w-full flex">
              <div className="w-3/6">
                <p className="text-[56px] text-[#F68D1D] ">Galasy Group</p>
                <p className="text-[37px]  "></p>
                <div className="leading-5 mt-4 text-[24px]">
                  <p>Tối ưu hóa hiệu suất cuộc sống của bạn.</p>
                  <p>
                    Tốt hơn một chút, hiệu quả hơn một chút, tối hưu hơn 1 chút.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              width="100%"
              src="/rear-view-programmer-working-all-night-long 1.png"
              style={{
                background:
                  "linear-gradient(180deg, rgba(11, 36, 98, 0.85) 33.81%, rgba(11, 36, 98, 0.00) 103.04%)",
              }}
              alt=""
            />
            <div className="absolute top-0 pt-[168px] pl-[90px] leading-10 text-left	text-[#1F1F1F]  w-full flex">
              <div className="w-[858px]">
                <p className="text-[56px] text-[#F68D1D] font-semibold">
                  Mission
                </p>
                <p className="text-[37px]  "></p>
                <div className="leading-5 mt-4 text-white text-[24px]">
                  <p>
                    Galasy Group – Sứ mệnh của chúng tôi là trao cho mọi người
                    và mọi tổ chức trên thế giới những sản phẩm công nghệ số
                    mạnh mẽ để tối ưu hóa cuộc sống của họ.
                  </p>
                  <p>
                    Tại Galasy Group – Chúng tôi tập trung nguồn lực để tạo ra
                    những sản phẩm công nghệ số tốt nhất để phục vụ khách hàng
                    trên toàn thế giới.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              width="100%"
              src="/image 3.png"
              style={{
                background:
                  "linear-gradient(0deg, rgba(7, 15, 58, 0.30) 0%, rgba(7, 15, 58, 0.30) 100%)",
              }}
              alt=""
            />
            <div className="absolute top-0 pt-[168px] pl-[90px]  text-left	text-[#1F1F1F]  w-full flex">
              <div className="w-[858px]">
                <p className="text-[37px]  "></p>
                <div className=" mt-4 text-white text-[56px]">
                  <p>
                    Nỗi đau mà các doanh nghiệp phải đối mặt khi quản lý công
                    việc và lao động tự do
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeaderCarousel;
