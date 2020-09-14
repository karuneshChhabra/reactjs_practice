import React from 'react';
import ReactDOM from 'react-dom';
import ComponentDetail from './ComponentDetail'
import Faker from 'faker';
import ApprovalCard from './ApprovalCard'



const App =()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <ComponentDetail author="karunesh" time="15 sep 2020 00:19" text="Eager to Learn" 
                image={Faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <ComponentDetail author="karan" time="15 sep 2020 00:22" text="Bad habit late night working"
                image={Faker.image.avatar()}/>
            </ApprovalCard>
             <ApprovalCard>
      
            <ComponentDetail author="kamal" time="15 sep 2020 00:23" text="Loves his Mom"
            image={Faker.image.avatar()}/>
            </ApprovalCard>

        </div>
    );

}

ReactDOM.render(<App/>,document.querySelector('#root'));