export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'products-sourcing',
    title: 'Products and sourcing',
    items: [
      { id: 'products-supplied', question: 'What products does Vyom Enterprises supply?', answer: 'We handle enquiries for industrial and hand tools, hardware, electrical tools, office stationery, general supplies and mixed product requirements.' },
      { id: 'unlisted-products', question: 'Can I request products that are not listed on the website?', answer: 'Yes. Send the product name, description, quantity and any reference image or document, and we will review the requirement.' },
      { id: 'technical-requirements', question: 'Can you source products according to specific technical requirements?', answer: 'We can review requirements that include dimensions, ratings, materials, grades, standards or application details and discuss suitable sourcing options.' },
      { id: 'preferred-brand', question: 'Can I request products from a particular brand?', answer: 'Yes. Mention the preferred brand in your enquiry. Availability and suitable alternatives, if required, will be discussed before quotation.' },
      { id: 'bulk-institutional', question: 'Do you handle bulk and institutional requirements?', answer: 'Yes. Send item-wise quantities or a complete Bill of Quantities so availability, pricing and delivery terms can be discussed.' },
    ],
  },
  {
    id: 'quotations-enquiries',
    title: 'Quotations and enquiries',
    items: [
      { id: 'request-quotation', question: 'How can I request a quotation?', answer: 'Use the quotation form on this website, contact us on WhatsApp, email us or call us to discuss your requirement.' },
      { id: 'quotation-information', question: 'What information should I include in my quotation request?', answer: 'Include the product name, specification, quantity, unit, delivery location and expected delivery date. Reference images or documents can also be helpful.' },
      { id: 'multiple-products', question: 'Can I request a quotation for multiple products?', answer: 'Yes. Add each product separately with its quantity, unit and specification, or share a complete item list or BOQ.' },
      { id: 'share-boq', question: 'Can I share a Bill of Quantities (BOQ) or technical document?', answer: 'Yes. Continue through WhatsApp or email and attach the BOQ, drawing or technical document with your message.' },
      { id: 'pricing', question: 'How is product pricing determined?', answer: 'Pricing depends on the product specification, quantity, brand, availability, delivery location and applicable commercial terms. These details are confirmed in the quotation.' },
      { id: 'follow-up', question: 'How can I follow up on my enquiry?', answer: 'Reply through the same WhatsApp or email conversation, or call us on +91 84492 24695 with your enquiry details.' },
    ],
  },
  {
    id: 'orders-delivery',
    title: 'Orders and delivery',
    items: [
      { id: 'minimum-order', question: 'Is there a minimum order quantity?', answer: 'Minimum quantities may vary by product and supplier. Any applicable quantity requirements will be discussed during the quotation process.' },
      { id: 'delivery-locations', question: 'Which locations do you deliver to?', answer: 'Delivery arrangements depend on the products, order quantity and destination. Share your delivery requirements when requesting a quotation so we can discuss the available options.' },
      { id: 'delivery-time', question: 'How long does delivery take?', answer: 'Lead times vary according to product availability, quantity and destination. The expected schedule will be discussed before the order is confirmed.' },
      { id: 'delivery-charges', question: 'How are delivery charges determined?', answer: 'Delivery charges depend on the shipment size, weight, destination and transport arrangement. Any applicable charges will be included or explained in the quotation.' },
      { id: 'payment-methods', question: 'What payment methods are accepted?', answer: 'Payment terms and available methods are confirmed as part of the quotation and order discussion.' },
    ],
  },
  {
    id: 'business-procurement',
    title: 'Business and institutional procurement',
    items: [
      { id: 'business-institutions', question: 'Do you cater to businesses and institutions?', answer: 'Yes. We welcome enquiries from businesses, offices, educational institutions, maintenance teams and other organisations.' },
      { id: 'government-enquiries', question: 'Can government departments submit procurement enquiries?', answer: 'Yes. Government departments and purchasing teams may send item lists or specifications for review and quotation.' },
      { id: 'tender-requirements', question: 'Can you provide quotations for tender requirements?', answer: 'You may share the item list, specifications and submission requirements for review. The ability to quote will be confirmed after examining the documents and terms.' },
      { id: 'contact-vyom', question: 'How can I contact Vyom Enterprises?', answer: 'Call or WhatsApp +91 84492 24695, email help@vyomenterprisesfirozabad.info, or use the contact and quotation forms on this website.' },
    ],
  },
];

export const allFaqItems = faqCategories.flatMap((category) => category.items);
export const homepageFaqIds = ['products-supplied', 'unlisted-products', 'request-quotation', 'multiple-products', 'share-boq', 'delivery-time'];
export const homepageFaqs = homepageFaqIds.map((id) => allFaqItems.find((item) => item.id === id)).filter((item): item is FaqItem => Boolean(item));
