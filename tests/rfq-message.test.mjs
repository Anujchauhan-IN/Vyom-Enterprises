import test from 'node:test';
import assert from 'node:assert/strict';
import { buildRfqMessage, buildWhatsAppUrl, buildMailtoUrl, isExternalUrlTooLong } from '../src/scripts/rfq-message.mjs';

const completeRequest = {
  fullName: 'A Buyer', organisation: 'Example Ltd', email: 'buyer@example.com', phone: '+91 99999 99999',
  defaultCategory: 'Hardware Supplies', deliveryLocation: 'Firozabad', expectedDate: '2026-05-01',
  additionalRequirements: 'Attach BOQ later',
  items: [
    { itemName: 'Bolts', quantity: '100', unit: 'Nos.', specifications: 'M8, stainless steel' },
    { itemName: 'Washers', quantity: '100', unit: 'Nos.', specifications: 'M8' },
  ],
};

test('formats the complete quotation in a stable order', () => {
  const message = buildRfqMessage(completeRequest);
  assert.equal(message, `REQUEST FOR QUOTATION

Contact
Name: A Buyer
Company / organisation: Example Ltd
Email: buyer@example.com
Phone: +91 99999 99999

Requirement
Category: Hardware Supplies
Delivery location: Firozabad
Expected delivery date: 1 May 2026

Line items
1. Bolts
   Quantity: 100 Nos.
   Specifications: M8, stainless steel

2. Washers
   Quantity: 100 Nos.
   Specifications: M8

Additional requirements
Attach BOQ later

Please confirm availability, pricing and delivery details.`);
});

test('trims values and uses explicit fallbacks for optional blanks', () => {
  const message = buildRfqMessage({ fullName: '  Buyer  ', items: [{ itemName: ' Pliers ', quantity: '2', unit: 'Nos.' }] });
  assert.match(message, /Name: Buyer/);
  assert.match(message, /Specifications: Not provided/);
  assert.match(message, /Category: Not provided/);
});

test('handles an empty item list without malformed output', () => {
  assert.match(buildRfqMessage({ items: [] }), /Line items\nNo items listed/);
});

test('encodes WhatsApp and email URLs', () => {
  const message = 'Bolts & washers\nQuantity: 10';
  const whatsapp = buildWhatsAppUrl('+91 84492-24695', message);
  const mailto = buildMailtoUrl('sales@example.com', 'RFQ & review', message);
  assert.equal(whatsapp, 'https://wa.me/918449224695?text=Bolts%20%26%20washers%0AQuantity%3A%2010');
  assert.match(mailto, /^mailto:sales%40example\.com\?subject=RFQ%20%26%20review&body=/);
  assert.ok(mailto.includes('Bolts%20%26%20washers'));
});

test('detects external URLs above the configured safe length', () => {
  assert.equal(isExternalUrlTooLong('12345', 5), false);
  assert.equal(isExternalUrlTooLong('123456', 5), true);
});
