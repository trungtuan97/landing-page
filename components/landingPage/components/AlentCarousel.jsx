import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  width: "402px",
};
const carouselSettings = {
  slidesToShow: 4,
  slidesToScroll: 1,
};
function AlentCarousel() {
  return (
    <div className="mt-10 px-8">
      <div className="my-2 h-[23px] relative">
        <hr className="" />
        <div className=" absolute left-0 top-[-10px] rounded-lg w-[123px] h-[13px] bg-[#F68D1D] "></div>
      </div>
      <div className="">
        <h1 className="text-[48px] font-semibold	">
          TÌM KIẾM TÀI NĂNG & QUẢN LÝ CÔNG VIỆC TRUYỀN THỐNG
        </h1>
        <p>
          Quản lý công việc và lao động tự do trong bối cảnh kinh doanh hiện nay
          có nhiều sự phức tạp và rào cản
        </p>
      </div>
      <Carousel autoplay {...carouselSettings}>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img
              src="workplace-violence-taking-place-colleagues 1.png"
              alt=""
            />
            <div className=" text-left ">
              <span className="text-[24px]">
                <b>GIAO TIẾP VÀ TỔ CHỨC</b>
              </span>
            </div>
          </div>
        </div>

        <div>
          <div
            style={contentStyle}
            id="part-2"
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img
              src="workplace-violence-taking-place-colleagues 1 (1).png"
              alt=""
            />
            <div className=" text-left ">
              <h1 className="text-[24px]">GIAO TIẾP VÀ TỔ CHỨC</h1>
              <b>
                Phối hợp các nhiệm vụ, cập nhật và phản hồi giữa khách hàng và
                dịch giả tự do thường liên quan đến các email, cuộc trò truyện
                và tài liệu rải rác. Giao tiếp bị phận mảnh này dẫn đến hiểu
                nhầm, nhin nhắn bị bỏ lỡ và sự chậm trễ.
              </b>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img src="image 9.png" alt="" />
            <div className=" text-left ">
              <span className="text-[24px]">
                <b>ĐĂNG TUYỂN KHÔNG HIỆU QUẢ</b>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img src="high-angle-colleagues-working-together 1.png" alt="" />
            <div className=" text-left ">
              <span className="text-[24px]">
                <b>THÁCH THỨC THEO ĐUỔI HIỆU SUẤT</b>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img src="surprised-woman-with-card-hand 1.png" alt="" />
            <div className=" text-left ">
              <span className="text-[24px]">
                <b>ĐỘ PHỨC TẠP CỦA THANH TOÁN</b>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img
              src="man-sitting-living-room-home-sad-man-tired-from-work 1 (1).png"
              alt=""
            />
            <div className=" text-left ">
              <span className="text-[24px]">
                <b>THIẾU TRÁCH NHIỆM</b>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            className="text-[#1F1F1F] relative flex flex-col "
          >
            <img src="online-business-opportunity 1.png" alt="" />
            <div className=" text-left ">
              <span className="text-[24px]">
                <b>CƠ HỘI BỊ BỎ LỠ</b>
              </span>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default AlentCarousel;
