import React from 'react';
import styled from 'styled-components';
import { Map, MapMarker } from "react-kakao-maps-sdk";

const Section1 = styled.div`
    background-color: #F3F3F3;
    width: 60%;
    height: 40%;
    border-radius: 24px;
    margin: 2% auto;
`;

const KakaoMap = () => {
    return (
        <Section1>
            <Map
                center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
                style={{ width: "100%", height: "100%" }}
            >
                <MapMarker
                    position={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
                />
            </Map>
        </Section1>
    );
};

export default KakaoMap;
