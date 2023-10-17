
import './homeContainer.scss';
import { ProfileOutlined } from '@ant-design/icons';
import { FileOutlined } from '@ant-design/icons';
import { RightOutlined  } from '@ant-design/icons';

const HomeContainer = () => {
  return (
    <div className="homeContainer">
       <h2> Employee Data Input Options</h2> 
        <p>Choose how u want to add employee details :manually or by uploadingand Excel file</p>

        <div className='Container-1'>
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
                <li> Download our convenient  <a href='../assets/sample.xlsx' className='template'>template</a> </li>
                <li> Populate the template with employee data</li>
                <li> Effortlessly upload the completed template</li>
              </ul>
            </div>
          </div>

          <div className='right'>

            <FileOutlined />
            <p>Drop your document here</p>
            <p className='browse'> Click to browse</p>

          </div>

        
        
        </div>
    
    
    </div>
  )
}

export default HomeContainer