import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const CapNhatBanGhi = () => {
  const { ID } = useParams();

  const XuLyCapNhat = (ID) => {
    console.log(ID);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ XuLy: "XoaBanGhi", IDBanGhi: ID }),
    };
    fetch(
      "https://jsonplaceholder.typicode.com/posts",
      requestOptions
    ).then((response) => response.json());
    //then();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Tên Chủ Xe
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Nguyen Van An"
            />
            <button>Sửa</button>
          </div>
        </div>
        <div className="col-2" />
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Ngày cấp
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="01/01/2020"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Địa chỉ
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Nguyễn Văn Cừ, Q5, TPHCM"
            />
          </div>
        </div>
        <div className="col-2" />
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Loại tài sản
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Xe Máy"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Số CMND/Hộ Chiếu
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder={241689273}
            />
          </div>
        </div>
        <div className="col-2" />
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Số Loại
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Exciter 150"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Số Điện Thoại
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="0906547891"
            />
          </div>
        </div>
        <div className="col-2" />
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Màu sơn
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="Đỏ đen"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Nhãn Hiệu
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="yamaha"
            />
          </div>
        </div>
        <div className="col-2" />
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Dung tích{" "}
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder={150}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Loại Xe
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="2 bánh"
            />
          </div>
        </div>
        <div className="col-2" />
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Số Khung
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="SK-1234567"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Năm Sản Xuất
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder={2019}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Số máy
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder="XM001-123123"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5">
          <div className="input-group mb-2">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Mã Bằng Lái
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              id="basic-url"
              aria-describedby="basic-addon3"
              placeholder={740112341234}
            />
            <button>Sửa</button>
          </div>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col-9" />
        <div className="col-1">
          <button>Huỷ</button>
        </div>
        <div className="col-2">
          <button>Cập Nhật</button>
        </div>
      </div>
    </div>
  );
};

export default CapNhatBanGhi;
