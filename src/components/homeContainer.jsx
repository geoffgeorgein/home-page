import "./homeContainer.scss";
import {
  ProfileOutlined,
  RightOutlined,
  DesktopOutlined,
   InboxOutlined,
} from "@ant-design/icons";
import {  message,} from "antd";
import Dragger from "antd/es/upload/Dragger";
import { useNavigate } from "react-router-dom";

const HomeContainer = () => {
  
  const navigate = useNavigate();


  const props = {
    name: 'file',
    multiple: true,
    action: 'http://localhost:5000/upload',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
        navigate("/file");
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
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
          

          <>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibited from
                uploading company data or other banned files.
              </p>
            </Dragger>
          </>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
