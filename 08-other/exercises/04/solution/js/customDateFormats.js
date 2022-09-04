'use strict';

const customDateFormats = (date) => {
    const shortDate = new Intl.DateTimeFormat('hu-HU', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }).format(date);

    const longDate = new Intl.DateTimeFormat('hu-HU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: '2-digit'
    }).format(date);

    return {
        short: shortDate,
        long: longDate,
    };
};

export default customDateFormats;
