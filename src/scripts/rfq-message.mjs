const clean = (input) => String(input ?? '').trim();
const value = (input) => clean(input) || 'Not provided';
const formatDate = (input) => {
  const date = clean(input);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return value(date);
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }).formatToParts(new Date(`${date}T00:00:00`)).map((part) => [part.type, part.value]));
  return `${parts.day} ${parts.month} ${parts.year}`;
};

export function buildRfqMessage(data = {}) {
  const items = (data.items ?? []).map((item, index) => [
    `${index + 1}. ${value(item.itemName)}`,
    `   Quantity: ${value(item.quantity)} ${value(item.unit)}`,
    `   Specifications: ${value(item.specifications)}`,
  ].join('\n')).join('\n\n') || 'No items listed';
  return ['REQUEST FOR QUOTATION', '', 'Contact', `Name: ${value(data.fullName)}`, `Company / organisation: ${value(data.organisation)}`, `Email: ${value(data.email)}`, `Phone: ${value(data.phone)}`, '', 'Requirement', `Category: ${value(data.defaultCategory)}`, `Delivery location: ${value(data.deliveryLocation)}`, `Expected delivery date: ${formatDate(data.expectedDate)}`, '', 'Line items', items, '', 'Additional requirements', value(data.additionalRequirements), '', 'Please confirm availability, pricing and delivery details.'].join('\n');
}
export function buildWhatsAppUrl(number, message) { return `https://wa.me/${String(number ?? "").replace(/\D/g, "")}?text=${encodeURIComponent(message)}`; }
export function buildMailtoUrl(email, subject, message) { return `mailto:${encodeURIComponent(clean(email))}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`; }
export function isExternalUrlTooLong(url, limit = 7000) { return url.length > limit; }
