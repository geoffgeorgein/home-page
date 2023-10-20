import "./homeContainer.scss";
import { ProfileOutlined } from "@ant-design/icons";
import { FileOutlined } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import { DesktopOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";




const HomeContainer = () => {


  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const handleUpload = () => {
    
    
    let data = new FormData();
    data.append("file",fileList[0]);
    setUploading(true);

  

    // const values = [...data.entries()];
    // // console.log("values",values);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body:data,
      
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success("upload successfully.");
        navigate('/file')
      })
      .catch(() => {
        message.error("upload failed.");
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };

  return (
    <div className="homeContainer">
      <h2> Employee Data Input Options</h2>
      <p className="subtitle">
        Choose how u want to add employee details :manually or by uploadingand
        Excel file
      </p>

      <div className="Container-1">
        <DesktopOutlined />
        <h4>Manual Update</h4>
        <h4 className="employee">Add employees one by one for small teams</h4>
        <RightOutlined />
      </div>

      <div className="Container-2">
        <div className="left">
          <div>
            <ProfileOutlined style={{ width: "50px" }} />

            <div className="upload">Bulk upload</div>
          </div>

          <div className="list">
            <ul>
              <li>
                {" "}
                1.Download our convenient{" "}
                <a
                  href="/src/assets/sample.xlsx"
                  className="template"
                  download="new.xlsx"
                >
                  template.
                </a>{" "}
              </li>
              <li> 2.Populate the template with employee data</li>
              <li> 3.Effortlessly upload the completed template</li>
            </ul>
          </div>
        </div>

        <div className="right">
          <FileOutlined />
          <p>Drop your document here</p>
          {/* <p className="browse">
            <input type="file" id="myFile" name="filename"></input>
          </p> */}
          <>
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
            <Button
              type="primary"
              onClick={handleUpload}
              disabled={fileList.length === 0}
              loading={uploading}
              style={{
                marginTop: 16,
              }}
            >
              {uploading ? "Uploading" : "Start Upload"}
            </Button>
          </>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
