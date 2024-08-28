import React from 'react';

interface TextBoxProp {
  txtcolor: string;
  backgroundcolor: string;
  text: string;
  widthFraction?: number; 
  borderRad?: string;
  boxShadow?: string; 
  borderWidth?: string;
  borderColor?: string;
  isHeading?:boolean;
}

function TextBox(prop: TextBoxProp) {
  const textStyle: React.CSSProperties = {
    color: prop.txtcolor || 'black',
    backgroundColor: prop.backgroundcolor || 'transparent',
    padding: '1rem',
    width: prop.widthFraction ? `${prop.widthFraction * 100}%` : 'auto', 
    borderRadius: prop.borderRad || '5px',
    display: 'inline-block', 
    textAlign: 'center', 
    boxSizing: 'border-box',
    borderWidth: prop.borderWidth || '0px',
    borderColor: prop.borderColor || 'transparent', 
    borderStyle: 'solid', 
    boxShadow: prop.boxShadow || '0 4px 8px rgba(0, 0, 0, 0.1)' 
  };

  return (
    <div style={textStyle}>
      {prop.isHeading ? (
        <h1>{prop.text}</h1> 
      ) : (
        prop.text
      )}
    </div>
  );
  
}

export default TextBox;
