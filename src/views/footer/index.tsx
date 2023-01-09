import React from 'react'
import styled from 'styled-components';

const FooterContainerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1.1em;
    gap: 1em;

    .linkLinkedIn {
        color: var(--color-linkedin);
        font-size: 1.5em;
    }
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
                <a title='LinkedIn' href='https://www.linkedin.com/in/gustavoml/' className='linkLinkedIn'><i className="bi bi-linkedin"></i></a>
            </div>
        </FooterContainerStyle>
    )
}

export default Footer