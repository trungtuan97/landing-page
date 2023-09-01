import { Carousel } from "antd";
import React from "react";
const contentStyle = {
  width: "544px",
};
const carouselSettings = {
  slidesToShow: 3,
  slidesToScroll: 1,
};
function SolutionCarousel() {
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
            className="bg-[#F68D1D33] text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              {" "}
              ĐĂNG TUYỂN KHÔNG HIỆU QUẢ
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Tại Tên công ty, chúng tôi hiểu sự phức tạp của quản lý công
                việc hiện tại. Nền tảng của chúng tôi được thiết kế để cung cấp
                một giải pháp toàn diện và hợp lý, trao quyền cho các doanh
                nghiệp vượt qua những thách thức của các phương pháp truyền
                thống. Bằng cách cung cấp hỗ trợ đầu cuối từ đăng tuyển đến
                thanh toán, chúng tôi thay đổi cách các doanh nghiệp quản lý dự
                án và cộng tác với các dịch giả tự do.
              </p>
            </div>
            <div className="text-[16px] ">
              <ul className="list-disc pl-4">
                <li className="mb-4 font-semibold	">
                  Đăng tin tuyển dụng đơn giản
                </li>
                <li className="mb-4 font-semibold	">
                  Cộng tác Lao động tự do liền mạch
                </li>
                <li className="mb-4 font-semibold	">
                  Cộng tác Lao động tự do liền mạch
                </li>
                <li className="mb-4 font-semibold	">
                  Thanh toán hoàn toàn không rắc rối
                </li>
                <li className="mb-4 font-semibold	">
                  Nâng cao trách nhiệm giải trình
                </li>
                <li className="mb-4 font-semibold	">Tối đa hóa cơ hội</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              ĐĂNG TIN TUYỂN DỤNG ĐƠN GIẢN
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Phối hợp các nhiệm vụ, cập nhật và phản hồi giữa khách hàng và
                dịch giả tự do thường liên quan đến các email, cuộc trò truyện
                và tài liệu rải rác. Giao tiếp bị phận mảnh này dẫn đến hiểu
                nhầm, nhin nhắn bị bỏ lỡ và sự chậm trễ.
              </p>
            </div>{" "}
            <img
              src="job-application-hiring-document-form-concept 1.png"
              alt=""
            />
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              QUẢN LÝ HIỆU SUẤT HIỆU QUẢ
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Giám sát các mốc quan trọng của dự án, theo dõi tiến độ và đảm
                bảo chất lượng một cách dễ dàng. Chúng tôi trao quyền cho các
                doanh nghiệp đặt mục tiêu rõ ràng, theo dõi thành tích và đảm
                bảo rằng các dự án đang đi đúng hướng để hoàn thành thành công.
                Tính minh bạch là trọng tâm của giải pháp quản lý hiệu suất của
                chúng tôi.
              </p>
            </div>{" "}
            <img src="image 5.png" alt="" />
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              THANH TOÁN HOÀN TOÀN KHÔNG RẮC RỐI
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Dễ dàng thiết lập các khoản thanh toán dựa trên cột mốc, theo
                dõi các giao dịch tài chính và đảm bảo rằng các lao động tự do
                nhận được thanh toán kịp thời cho công việc của họ. Nói lời tạm
                biệt với tranh chấp thanh toán và sự chậm trễ.
              </p>
            </div>{" "}
            <img src="image 6.png" alt="" />
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              NÂNG CAO TRÁCH NHIỆM GIẢI TRÌNH
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Nền tảng của chúng tôi thiết lập một chuỗi trách nhiệm rõ ràng
                bằng cách cung cấp một không gian tập trung cho tất cả các hoạt
                động liên quan đến dự án. Điều này thúc đẩy giao tiếp tốt hơn.
                Ít hiểu làm lơn và thực hiện dự án suôn sẻ hơn.
              </p>
            </div>{" "}
            <img src="image 7.png" alt="" />
          </div>
        </div>
        <div>
          <div
            style={contentStyle}
            id="part-1"
            className=" text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">TỐI ĐA HÓA CƠ HỘI</h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Với Galasy, các doanh nghiệp có thể quản lý hiệu quả nhiều dự án
                một lúc, mở ra cánh cửa tăng trưởng và cơ hội mới. Nền tảng của
                chúng tôi để mở rộng quy mô với doanh nghiệp của bạn
              </p>
            </div>{" "}
            <img src="image 8.png" alt="" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SolutionCarousel;
