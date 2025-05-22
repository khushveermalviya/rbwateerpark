// QRScanner.jsx
import { Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useRef } from 'react';
import axios from 'axios';

export default function QRScanner() {
  const scanned = useRef(false); // prevent multiple scans

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      { fps: 10, qrbox: 250 },
      false
    );

    const onScanSuccess = async (decodedText) => {
      if (scanned.current) return;
      scanned.current = true;

      console.log('✅ QR Code:', decodedText);

      try {
        const response = await axios.post('http://localhost:1200/api/verify', {
          code: decodedText,
        });

        alert(`✅ Code Valid: ${response.data.message}`);
      } catch (error) {
        alert(`❌ Error: ${error.response?.data?.message || error.message}`);
      }
    };

    const onScanError = (errorMessage) => {
      console.warn('❌ Scan Error:', errorMessage);
    };

    scanner.render(onScanSuccess, onScanError);

    return () => {
      scanner.clear().catch((error) => console.error('Clear failed', error));
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div id="reader" className="w-full max-w-sm rounded-lg shadow-lg p-4 bg-white" />
    </div>
  );
}
    