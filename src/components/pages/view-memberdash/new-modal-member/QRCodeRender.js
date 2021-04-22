import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = props => {
  const { newMemberId } = props;

  return (
    <div className="App">
      {newMemberId.map(memberId => (
        <div>
          <QRCode
            value={memberId}
            renderAs="svg"
            fgColor="#333"
            bgColor="#fff"
            key={`level-${memberId}`}
          />
          <h2>{memberId}</h2>
        </div>
      ))}
    </div>
  );
};

export default QRCodeGenerator;
