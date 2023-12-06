// src/CustomUI.js
import React from 'react';
import IconImage from "./asset/Image.png";

const CustomUI = () => {
  const styles = {
    Card: {
      top: '114px',
      left: '526px',
      width: '388px',
      height: '83px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0px 1px 12px rgba(3,3,3,0.08)',
    },
    ImageContainer: {
      top: '130px',
      left: '543px',
      width: '47px',
      height: '49px',
      borderRadius: '100px',
      backgroundImage: 'url(./image.png)',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
    Text: {
      color: '#030303',
      fontSize: '14px',
      fontFamily: 'Poppins',
      fontWeight: '500',
      lineHeight: '17px',
    },
    Text2: {
      color: '#858585',
      fontSize: '12px',
      fontFamily: 'Poppins',
      fontWeight: 300,
      lineHeight: '16px',
    },
  };
  return (
    <div style={styles.Card}>
      <div style={{
      ...styles.ImageContainer,
      backgroundImage: `url(${IconImage})`,
    }} />
    <div style={styles.Text}>
    Get it on finance from £30 per month
    </div>
    <div style={styles.Text2}>
    Instant decisions ~ 96% Approval Rate
    </div>
    </div>
  );
};

export default CustomUI;
