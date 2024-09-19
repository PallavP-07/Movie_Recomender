import React, { useState } from 'react'
import "./style.scss";

function SwitchTab({tabs,onTabChange}) {
    const [activeTab, setActiveTab] = useState(0);
 
    const handleTabClick = (tab, index) => {
        setTimeout(() => {
            setActiveTab(index);
        }, 300);
        onTabChange(tab, index);
    };

    // const handleTabClick = (index) => {
    //   setActiveTab(index);
    // };
  
    return (
      <div className="switch-tab">
        <div className="tab-buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={index === activeTab ? 'active' : ''}
              onClick={() => handleTabClick(tab,index)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* <div className="tab-content">{tabs[activeTab].content}</div> */}
      </div>
    );
}

export default SwitchTab