import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  width: "884px",
};
const carouselSettings = {
  slidesToShow: 2,
  slidesToScroll: 1,
};
function Method() {
  return (
    <div className="mt-10 px-8">
      <div className="my-2 h-[23px] relative">
        <hr className="" />
        <div className=" absolute left-0 top-[-10px] rounded-lg w-[123px] h-[13px] bg-[#F68D1D] "></div>
      </div>
      <div className="flex justify-between">
        <div className="w-[828px]">
          <h1 className="text-[48px] font-semibold">CÁCH THỨC HOẠT ĐỘNG</h1>
          <div>
            <div className="">TÁC ĐỘNG</div>
            <div className="">
              Với Galasy, quản lý công việc trở thành một quy trình đơn giản và
              hợp lý. Từ tin tuyển dụng ban đầu đến hoàn thành dự án và thanh
              toán, nền tảng của chúng tôi hướng dẫn từng bước, đảm bảo tính
              minh bạch, cộng tác và kết quả dự án thành công. Nắm bắt tương lai
              của quản lý công việc hiệu quả với Galasy.
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex">
            <div className="flex1">
              <img className="p-2" src="Rectangle 1.png" alt="" />
              <img className="p-2" src="Rectangle 2.png" alt="" />
            </div>
            <div className="flex1">
              <img className="p-2" src="Rectangle 4.png" alt="" />
              <img className="p-2" src="Rectangle 3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Carousel autoplay {...carouselSettings}>
        <div>
          <div style={contentStyle} className=" text-[#1F1F1F]  flex  p-6">
            <div className="w-1/2	">
              {" "}
              <img src="image 10.png" alt="" />
            </div>
            <div className="w-1/2 flex flex-col justify-end text-[16px] pl-4">
              <p className="text-[24px] font-semibold  text-[#F68D1D] mb-3">
                JOB POSTING
              </p>
              <p className="mb-3">
                Khách hàng tạo các bài đăng công việc chi tiết chỉ định các yêu
                cầu của dự án, phạm vi và các kỹ năng mong muốn.
              </p>
              <p className="">
                Khách hàng tạo các bài đăng công việc chi tiết chỉ định các yêu
                cầu của dự án, phạm vi và các kỹ năng mong muốn.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle} className=" text-[#1F1F1F]  flex  p-6">
            <div className="w-1/2	">
              {" "}
              <img src="image 11.png" alt="" />
            </div>
            <div className="w-1/2 flex flex-col justify-end text-[16px] pl-4">
              <p className="text-[24px] font-semibold  text-[#F68D1D] mb-3">
                FREELANCER COLLABORATION
              </p>
              <p className="mb-3">
                Khách hàng và dịch giả tự do tham gia thông qua một trung tâm
                giao tiếp và tập trung trong nền tảng.
              </p>{" "}
              <p className="mb-3">
                Chia sẻ tệp liền mạch, nhắn tin tức thời, và cập nhật theo thời
                gian thực đảm bảo cộng tác hiệu quả.
              </p>
              <p className="">
                Khách hàng có thể cung cấp các hướng dẫn rõ ràng, nhận cập nhật
                và truy vấn địa chỉ ở một nơi.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div style={contentStyle} className=" text-[#1F1F1F]  flex  p-6">
            <div className="w-1/2	">
              {" "}
              <img src="image 11.png" alt="" />
            </div>
            <div className="w-1/2 flex flex-col justify-end text-[16px] pl-4">
              <p className="text-[24px] font-semibold  mb-3">
                PERFORMANCE TRACKING
              </p>
              <p className="mb-3">
                Khách hàng đặt ra các mốc quan trọng và mục tiêu dự án trong nền
                tảng.
              </p>{" "}
              <p className="mb-3">
                Lao động tự do cập nhật tiến độ nhiệm vụ, đảm bảo minh bạch và
                phù hợp với tiến độ dự án.
              </p>
              <p className="">
                Các chỉ số hiệu suất minh bạch giúp cả hai bên đánh giá tiến độ
                và chất lượng.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Method;
