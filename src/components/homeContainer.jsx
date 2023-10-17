
import './homeContainer.scss';
import { ProfileOutlined } from '@ant-design/icons';
import { FileOutlined } from '@ant-design/icons';
import { RightOutlined  } from '@ant-design/icons';
import { DesktopOutlined  } from '@ant-design/icons';
import { saveAs } from 'file-saver';

// const save=()=>{
//   saveAs('https://github.com/geoffgeorgein/home-page/blob/main/src/assets/sample.xlsx', "hello world.xlsx");
// }

const HomeContainer = () => {
  return (
    <div className="homeContainer">
       <h2> Employee Data Input Options</h2> 
        <p className='subtitle'>Choose how u want to add employee details :manually or by uploadingand Excel file</p>

        <div className='Container-1'>
          <DesktopOutlined />
          <h4>Manual Update</h4>
          <h4>Add employees one by one for small teams</h4>
          <RightOutlined />
        </div>

        <div className='Container-2'>

          <div className='left'>

            <div>
              <ProfileOutlined style={{width:'50px'}}/>
                
                <div className='upload'>Bulk upload</div>
            </div>

            <div className='list'>
              <ul>
                <li> 1.Download our convenient  <a href='/src/assets/sample.xlsx' className='template' download="new.xlsx">template.</a> </li>
                <li> 2.Populate the template with employee data</li>
                <li> 3.Effortlessly upload the completed template</li>
              </ul>
            </div>
          </div>

          <div className='right'>

            <FileOutlined />
            <p>Drop your document here</p>
            <p className='browse'><input type="file" id="myFile" name="filename"></input></p>

          </div>

        
        
        </div>
    
    
    </div>
  )
}

export default HomeContainer