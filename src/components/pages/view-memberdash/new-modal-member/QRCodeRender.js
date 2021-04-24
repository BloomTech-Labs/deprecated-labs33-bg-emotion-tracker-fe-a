import React from 'react';
import QRCode from 'qrcode.react';
import PDFcomponent from './PDFcomponent';
import { PDFDownloadLink, Page } from '@react-pdf/renderer';

const QRCodeGenerator = props => {
  const downloadName = 'qrcodes';
  const { newMemberId } = props;

  return (
    <div className="App">
      <Page>
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
      </Page>
      <PDFDownloadLink
        document={<PDFcomponent PDFImageIds={newMemberId} />}
        fileName={`${downloadName}.pdf`}
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
};

export default QRCodeGenerator;
