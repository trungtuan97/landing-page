import { Carousel } from "antd";
import React from "react";

function Advantage() {
  return (
    <div className="mt-10 px-8 bg-[#fff9f3]">
      <div className="my-2 h-[23px] relative mb-6">
        <hr className="" />
        <div className=" absolute left-0 top-[-10px] rounded-lg w-[123px] h-[13px] bg-[#F68D1D] "></div>
      </div>
      <div className="">
        <h1 className="text-[48px] font-semibold">
          NẮM BẮT CƠ HỘI THỊ TRƯỜNG SINH LỢI
        </h1>
      </div>
      <div className="flex justify-between ">
        <div className="flex flex-col w-[355px]">
          <div className="w-[60px] mb-4">
            <img src="freelancer 1.png" alt="" />
          </div>

          <div className="">
            <h5 className="mb-4 text-[24px] font-semibold">
              CUỘC CÁCH MẠNG TỰ DO
            </h5>
            <p>
              Nền kinh tế GIG toàn cầu đang mở rộng, với hàng triệu người làm
              việc tự do tìm kiếm cơ hội việc làm. Chỉ riêng ở Mỹ, những người
              làm việc tự do đóng góp hơn 1 nghìn tỷ đô la cho nền kinh tế hàng
              năm.
            </p>
            <img
              src="job-application-hiring-document-form-concept 1 (1).png"
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col w-[355px]">
          <div className="w-[60px] mb-4">
            <img src="telework 1.png" alt="" />
          </div>

          <div className="">
            <h5 className="mb-4 text-[24px] font-semibold">
              TĂNG CƯỜNG LÀM VIỆC TỪ XA
            </h5>
            <p>
              Việc chuyển sang làm việc từ xa đang thúc đẩy các nhu cầu về các
              giải pháp quản lý công việc linh hoạt phục vụ cho các nhóm phân
              tán và lao động tự do.{" "}
            </p>
            <img src="image 4.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[355px]">
          <div className="w-[60px] mb-4">
            <img src="working-at-home 1.png" alt="" />
          </div>

          <div className="">
            <h5 className="mb-4 text-[24px] font-semibold">
              NHU CẦU CỦA CÁC DOANH NGHIỆP NHỎ
            </h5>
            <p>
              Các Doanh nghiệp nhỏ và cỡ trung đang thuê ngoài các nhiệm vụ cho
              các lao động tự do. Họ cần nền tảng hiệu quả để quản lý các dự án
              và cộng tác một cách liền mạch.
            </p>
            <img src="image 5.png" alt="" />
          </div>
        </div>
        <div className="flex">
          <div
            id="part-1"
            className="w-[544px] bg-[#F68D1D33] text-[#1F1F1F] relative flex flex-col p-6"
          >
            <h1 className="font-semibold text-[24px]">
              THÔNG TIN CHI TIẾT VỀ THỊ TRƯỜNG
            </h1>
            <div className=" text-left text-[16px] text-[#4A4A4A] my-4">
              <p>
                Bối cảnh quản lý công việc và làm việc tự do đang phát triển
                nhanh chóng, mang lại cơ hội thú vị cho các giải pháp sáng tạo.
                Khi các doanh nghiệp ngày càng chuyển sang làm việc tự do và làm
                việc từ xa, nhu cầu về các nền tảng quản lý công việc hiệu quả
                chưa bao giờ rõ rệt hơn.
              </p>
            </div>
            <div className="text-[16px] ">
              <div className="font-semibold">Tác động</div>
              <p>
                Galasy đã sẵn sàng khai thác cơ hội thị trường sinh lợi bằng
                cách cung cấp nền tảng toàn diện đáp ứng nhu cầu ngày càng tăng
                của lao động tự do, doanh nghiệp và các nhóm từ xa.
              </p>
              <ul className="list-disc pl-4">
                <li className="mb-4 font-semibold	">Làm việc tự do</li>
                <li className="mb-4 font-semibold	">Làm việc từ xa</li>
                <li className="mb-4 font-semibold	">
                  Quản lý công việc hiệu quả và thành công
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
