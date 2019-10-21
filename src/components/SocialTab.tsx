import * as React from 'react';
import { Component } from 'react'
import styled from 'styled-components';

import {
    IconLookup,
    IconDefinition,
    findIconDefinition,
    library
  } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faLinkedin, faFacebook, faMailchimp, faStackOverflow, } from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faEnvelope
  } from '@fortawesome/free-solid-svg-icons'

const StyledIcon = styled(FontAwesomeIcon)`
    padding: 10px;
`;

export default class SocialTab extends Component {
    render() {
        return (
            <div>
                <StyledIcon icon={faLinkedin} size="2x"/>
                <StyledIcon icon={faFacebook} size="2x"/>
                <StyledIcon icon={faStackOverflow} size="2x"/>
                <StyledIcon icon={faMailchimp} size="2x"/>
                <StyledIcon icon={faEnvelope} size="2x"/>
            </div>
        )
    }
}
