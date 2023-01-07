import React from 'react'
import styled from 'styled-components';

const FooterContainerStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 10px;
    color: var(--bg-color-header);
`;

type Props = {}

const Footer = (props: Props) => {
    return (
        <FooterContainerStyle>
            <span><strong>©{new Date().getFullYear()}</strong></span>
            <span>
                created by{' '}
                <em><a href='https://www.linkedin.com/in/gustavoml/' >Gustavo Lopez</a></em>
            </span>
            <div>
                <a title='LinkedIn' href='https://www.linkedin.com/in/gustavoml/'><i className="bi bi-linkedin"></i></a>
            </div>
        </FooterContainerStyle>
    )
}

export default Footer