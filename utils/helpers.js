const Handlebars = require('handlebars');

// Date formatting
Handlebars.registerHelper('formatDate', (date) => {
  return date.toLocaleDateString('en-US', { year: '2-digit', month: 'short', day: 'numeric' });
});