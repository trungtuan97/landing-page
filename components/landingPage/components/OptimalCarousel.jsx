import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  width: "527px",
};
const carouselSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
};
function OptimalCarousel() {
  return (
    <div className="mt-10 px-8">
      <div className="my-2 h-[23px] relative">
        <hr className="" />
        <div className=" absolute left-0 top-[-10px] rounded-lg w-[123px] h-[13px] bg-[#F68D1D] "></div>
      </div>
      <div className="">
        <h1 className="text-[48px] font-semibold	">
          GIẢI PHÁP QUẢN LÝ CÔNG VIỆC TỐI ƯU
        </h1>
        <p></p>
      </div>
      <Carousel autoplay {...carouselSettings}>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <img src="img123.png" alt="" />
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              {" "}
              ĐĂNG TUYỂN VÀ KẾT NỐI TÀI NĂNG
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Dễ dàng tạo và tùy biến bài đăng tuyển dụng với các yêu cầu và
                bộ kỹ năng chi tiết. Thuật toán kết hợp thông minh của chúng tôi
                đề xuất các dịch giả tự do phù hợp nhất cho công việc, đảm bảo
                sự phù hợp hoàn hảo cho dự án của bạn.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <img src="img123.png" alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default OptimalCarousel;
