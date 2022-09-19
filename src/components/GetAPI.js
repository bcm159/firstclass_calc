import React from 'react';

const GetAPI = (result_api) => {
    return (
        <div>
            <span className='eu_result_exchange'>{getAPI[0]&&getAPI[0].rate}달러</span>
            <span className='us_result_exchange'>{getAPI[2]&&getAPI[2].rate}유로</span>
        
        </div>
    );
};

export default GetAPI;