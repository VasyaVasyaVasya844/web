import get from 'lodash/get.js';

const freeEmailDomains = [
  'gmail.com',
  'yandex.ru',
  'hotmail.com',
  'yahoo.com',
];

// BEGIN
const getFreeDomainsCount = (emails) => {
  const domainCounts = {};

  emails.forEach(email => {
    const [_, domain] = email.split('@');
    if (freeEmailDomains.includes(domain)) {
      domainCounts[domain] = (domainCounts[domain] || 0) + 1;
    }
  });

  return domainCounts;
};

export default getFreeDomainsCount;


// END