import React from 'react';
import { Metadata } from 'next';
import { getPaymentFormInitParams } from '../../services/eBookData.js';
import EbookClient from './EbookClient';

export const metadata: Metadata = {
  title: 'E-Book | UPPR',
  description: 'Purchase e-book',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
    shortcut: '/favicon.png',
  },
};

export default async function EbookPage() {
  // Fetch payment form params on the server
  const { data, signature, orderId, resultPageId } = await getPaymentFormInitParams();

  return (
    <EbookClient
      data={data}
      signature={signature}
      orderId={orderId}
      resultPageId={resultPageId}
    />
  );
}

// Force dynamic rendering since we're fetching payment data
export const dynamic = 'force-dynamic';

