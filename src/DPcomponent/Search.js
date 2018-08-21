import React, { Component } from 'react';
import { Input,Select  } from 'antd';
import './Search.css';
 const Search = Input.Search;
 const Option = Select.Option;
 function handleChange(value) {
  console.log(`selected ${value}`);
}
 export default class SearchComponent extends Component{ 
    
    render(){    
        return(
            <div className="searchBar">
              <div className="select">
                <Select defaultValue="MID" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              </div>
              <div className="seach">
                <Search
                    placeholder="MID/学员名/关键词"
                    enterButton="搜索"
                    onSearch={value => console.log(value)}
                    />
              </div>
            </div>
        );
    }
}