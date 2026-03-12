import Image from "next/image";
import { FaChevronRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineFileProtect } from "react-icons/ai";
import Link from "next/link";
import { FaClipboardCheck } from "react-icons/fa";
import { AiOutlineMinus } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { CiShare1 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

export default function ProductDetail() {
  return (
    <div className="bg-gray-50 min-h-screen space-y-2">
      <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto space-y-2">
        <div className="p-2 flex items-center gap-2">
          <button className="text-xs text-blue-500">Dụng cụ thủy lực</button>
          <FaChevronRight className="text-xs text-gray-700" />
          <button className="text-xs text-blue-500">Dụng cụ thủy lực</button>
          <FaChevronRight className="text-xs text-gray-700" />
          <p className="text-xs text-gray-700">
            Máy khoan pin 10MM 13MM STARKER có khóa trục không chổi than, Chuyên
            khoan bê tông, khoan tường, sắt, gỗ, bắt vít
          </p>
        </div>
        <div className="p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <div className="grid grid-cols-3 items-start gap-5">
            <div className="col-span-1 space-y-2">
              <div className="w-full aspect-square border border-gray-200 rounded-lg">
                <Image
                  src="https://picsum.photos/200"
                  alt="Thumbnail"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar">
                <button className="h-20 w-20 rounded-lg border border-gray-200 cursor-pointer">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Thumbnail"
                    width={40}
                    height={40}
                    className="h-full w-full object-cover rounded-lg"
                  />
                </button>
              </div>
            </div>

            <div className="col-span-2 space-y-2">
              <h2 className="text-lg text-gray-700 font-medium">
                Máy khoan pin 10MM 13MM STARKER có khóa trục không chổi than,
                Chuyên khoan bê tông, khoan tường, sắt, gỗ, bắt vít
              </h2>
              <div className="flex items-center gap-2 text-sm text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <p className="text-2xl font-bold text-orange-500">330.000</p>
                  <p className="text-xs text-orange-500">₫</p>
                </div>
                <div className="flex items-center gap-1">
                  <p className="text-lg text-gray-400 line-through">400.000</p>
                  <p className="text-xs text-gray-400">₫</p>
                </div>
                <div className="flex items-center p-0.5 rounded bg-orange-100">
                  <p className="text-xs font-semibold text-orange-500">-18%</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-gray-700">
                  Phân loại:
                </p>
                <button className="p-2 border border-gray-200 rounded-lg flex items-center gap-1 cursor-pointer">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Thumbnail"
                    width={40}
                    height={40}
                    className="h-8 w-8 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-700">Máy + 2 pin</p>
                </button>
                <button className="p-2 border border-orange-500 rounded-lg flex items-center gap-1 cursor-pointer relative">
                  <Image
                    src="https://picsum.photos/200"
                    alt="Thumbnail"
                    width={40}
                    height={40}
                    className="h-8 w-8 object-cover rounded-lg"
                  />
                  <p className="text-sm text-gray-700">Máy + 1 pin</p>
                  <FaClipboardCheck className="absolute top-0 right-0 text-orange-500" />
                </button>
              </div>
              <div className="p-2 bg-gray-100 rounded-lg space-y-1">
                <div className="flex items-center gap-2">
                  <CiDeliveryTruck className="text-2xl text-gray-700" />
                  <p className="text-gray-700 text-sm font-semibold">
                    Thông tin vận chuyển
                  </p>
                </div>
                <button className="flex items-center gap-1 cursor-pointer">
                  <CiLocationOn className="text-xl text-blue-500" />
                  <p className="text-xs font-semibold text-blue-500">
                    Chọn địa chỉ giao hàng
                  </p>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-gray-700">Số lượng:</p>
                <div className="flex items-center border border-gray-200 rounded-lg divide-x divide-gray-200">
                  <button className="h-10 w-10 text-sm text-gray-700 flex items-center justify-center cursor-pointer">
                    <AiOutlineMinus />
                  </button>
                  <div className="h-10 w-10 flex items-center justify-center">
                    <p className="text-sm text-gray-700">1</p>
                  </div>
                  <button className="h-10 w-10 text-sm text-gray-700 flex items-center justify-center cursor-pointer">
                    <MdOutlineAdd />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                <div className="col-span-3">
                  <button className="p-2 w-full border border-orange-500 text-orange-500 hover:bg-orange-50 transition-colors duration-300 rounded-lg cursor-pointer">
                    Mua ngay
                  </button>
                </div>
                <div className="col-span-3">
                  <button className="p-2 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 w-full rounded-lg">
                    Thêm vào giỏ hàng
                  </button>
                </div>
                <div className="col-span-1 flex items-center justify-center gap-2">
                  <div className="flex flex-col items-center">
                    <button className="text-xl text-gray-700 cursor-pointer hover:text-blue-500">
                      <CiShare1 />
                    </button>
                    <p className="text-sm text-gray-700">Share</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <button className="text-xl text-gray-700 cursor-pointer hover:text-red-500">
                      <CiHeart />
                    </button>
                    <p className="text-sm text-gray-700">Like</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="grid grid-cols-2 gap-5 ">
          <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-5 space-y-2">
            <p className="text-lg text-gray-700 font-semibold">
              Thông số kỹ thuật
            </p>
            <div className="w-full">
              <div className="grid grid-cols-3 rounded-lg overflow-hidden border border-gray-200">
                <div className="col-span-1 p-2 border border-gray-200 bg-gray-100 ">
                  <p className="text-sm text-gray-700 font-semibold">
                    Kích thước màn hình
                  </p>
                </div>
                <div className="col-span-2 p-2 border border-gray-200">
                  <p className="text-sm text-gray-700">6.9 inches</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg p-5 bg-white shadow-lg space-y-2">
            <div className="flex items-center gap-2">
              <AiOutlineFileProtect className="text-2xl text-orange-500" />
              <p className="text-ls text-gray-700 font-medium">
                Chính sách hoàn trả và bảo hành
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-700 font-medium">Đổi trả</p>
              <p className="text-xs text-gray-400">
                Bạn có thể trả lại sản phẩm cho chương trình Đổi Ý nếu sản phẩm
                đáp ứng điều kiện: Sản phẩm thời trang có thể được mở và thử
                nhưng phải sạch sẽ, không bị hư hỏng, không bị chỉnh sửa và còn
                nguyên nhãn mác. Các sản phẩm khác phải chưa qua sử dụng, chưa
                mở, còn nguyên niêm phong và đầy đủ các bộ phận. Sản phẩm đã mở,
                đã qua sử dụng hoặc bị hư hỏng sẽ không được chấp nhận.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-700 font-medium">
                15 ngày miễn phí trả hàng
              </p>
              <p className="text-xs text-gray-400">
                Miễn phí trả hàng với shop trong 15 ngày. Để tránh rắc rối trong
                khi hoàn trả, bạn hãy Chat với shop trước khi gửi yêu cầu trả
                hàng nhé.
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-700 font-medium">
                Không áp dụng chính sách bảo hành
              </p>
              <p className="text-xs text-gray-400">
                Sản phẩm của bạn không đi kèm với bất kỳ chính sách bảo hành
                nào, nhưng bạn vẫn được hưởng Chính sách trả hàng. Chi tiết xem
                tại{" "}
                <Link href={""} className="text-xs text-blue-500">
                  đây.
                </Link>
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="p-5 bg-white border border-gray-200 rounded-lg shadow-lg">
          <p className="text-lg text-gray-700 font-semibold">
            Có thể bạn cũng thích
          </p>
          <div className="flex items-center w-full gap-2"></div>
        </div>
      </div>
    </div>
  );
}
