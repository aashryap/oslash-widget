import React from 'react';

const QuestionMark = () => {
    return <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.48511 5C4.85118 4.22321 5.83895 3.66667 7.00004 3.66667C8.4728 3.66667 9.6667 4.5621 9.6667 5.66667C9.6667 6.59963 8.81496 7.38338 7.66285 7.6044C7.30125 7.67377 7.00004 7.96514 7.00004 8.33333M7 10.3333H7.00667M13 7C13 10.3137 10.3137 13 7 13C3.68629 13 1 10.3137 1 7C1 3.68629 3.68629 1 7 1C10.3137 1 13 3.68629 13 7Z" stroke="#6B7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>;
}

const SearchFooterComponent = () => {
    return <div style={{display: 'flex', 
                
                alignItems: "center",
                gap: '10px'
            }}>
                <QuestionMark></QuestionMark>
                <span>learn about sharing</span>
            </div>
}

export default SearchFooterComponent;