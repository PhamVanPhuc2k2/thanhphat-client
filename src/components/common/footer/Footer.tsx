import React from "react";
import { FaTruck } from "react-icons/fa";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FcOnlineSupport } from "react-icons/fc";
import { TbRefresh } from "react-icons/tb";
import Image from "next/image";
import logo from "@/src/images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="">
      {/* top footer */}
      <div className="bg-[#FFD500] py-2 hidden lg:flex">
        <div className="w-[90%] md:w-[80%] mx-auto flex items-center gap-2 justify-around">
          <div>
            <h2 className="text-xl font-semibold text-black uppercase">
              Chính sách:
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <FaTruck className="text-xl text-black" />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold text-black uppercase">
                Giao hàng toàn quốc
              </h3>
              <p className="text-sm font-semibold text-black">
                Thanh toán tại nhà
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <AiOutlineFileProtect className="text-xl text-black" />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold text-black uppercase">
                Bảo hành
              </h3>
              <p className="text-sm font-semibold text-black">
                Bảo hành 12 tháng
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <FcOnlineSupport className="text-xl text-black" />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold text-black">
                Gọi 0948 73 1992
              </h3>
              <p className="text-sm font-semibold text-black">Để hỗ trợ ngay</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <TbRefresh className="text-xl text-black" />
            </div>
            <div className="">
              <h3 className="text-lg font-semibold text-black uppercase">
                Đổi trả
              </h3>
              <p className="text-sm font-semibold text-black">
                Chính sách đổi trả dễ dàng
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* bottom footer */}
      <div className="bg-black pb-20">
        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-5">
          <div className="space-y-2 lg:place-self-center">
            <Image
              src={logo}
              alt="logo"
              width={1200}
              height={900}
              className="w-full h-auto object-cover"
            />
            <p className="text-sm text-white tracking-tighter">
              Phát Phát là một công ty chuyên nhập khẩu trực tiếp các loại máy
              móc thủy lực máy cầm tay dụng cụ cơ khí nội địa chính hãng chất
              lượng cao và độ bền vượt trội. Với cam kết mang đến sự hài lòng
              tuyệt đối cho khách hàng, chúng tôi tự hào là địa chỉ tin cậy mà
              bạn có thể dựa vào khi cần sử dụng các sản phẩm cơ khí.
            </p>
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-xl text-yellow-500" />
              <p className="text-sm text-white tracking-tighter">
                Số 25 ngõ 104 Thúy Lĩnh Lĩnh Nam Hoàng Mai Hà Nội
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl text-yellow-500" />
              <p className="text-sm text-white tracking-tighter">
                0948 73 1992
              </p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-xl text-yellow-500 shrink-0" />
              <p className="text-sm text-white tracking-tighter">
                hangdocgiasi0948731992@gmail.com
              </p>
            </div>
          </div>
          {/*  */}
          <div className="space-y-5 lg:place-self-center">
            <h3 className="text-lg font-semibold text-yellow-500 uppercase">
              Chính sách
            </h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Chính sách thanh toán
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Chính sách vận chuyển
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Chính sách đổi trả
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Chính sách bảo hành
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Chính sách bảo mật
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="space-y-5 lg:place-self-center">
            <h3 className="text-lg font-semibold text-yellow-500 uppercase">
              Hướng dẫn
            </h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Tìm kiếm
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Giới thiệu
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Đăng ký thành viên
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Hướng dẫn mua hàng
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    Chính sách bảo mật
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          {/*  */}
          <div className="space-y-5 lg:place-self-center">
            <h3 className="text-lg font-semibold text-yellow-500 uppercase">
              Đăng ký nhận tin
            </h3>
            <ul>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    MUA ONLINE (08:30 - 20:30)
                  </p>
                  <p className="text-lg text-orange-500">0948 73 1992</p>
                  <p className="text-sm text-white italic">
                    Tất cả các ngày trong tuần trừ tết âm lịch
                  </p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p className="text-lg text-white hover:text-orange-500 transition-colors duration-300">
                    GÓP Ý KHIẾU NẠI (08:30 - 20:30)
                  </p>
                  <p className="text-lg text-orange-500">0948 73 1992</p>
                  <p className="text-sm text-white italic">
                    Tất cả các ngày trong tuần trừ tết âm lịch
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="p-2 flex items-center justify-center bg-[#FFD500]">
        <p className="text-xs text-black font-semibold">
          © 2025 Thành Phát. Developed by Phuc Pham.
        </p>
      </div>
    </div>
  );
};
