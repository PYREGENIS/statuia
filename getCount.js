const { get } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const blob = await get('signatures', { ttl: 60 });
    const count = blob ? JSON.parse(blob).count : 0;

    return {
      statusCode: 200,
      body: JSON.stringify({ count }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Eroare la citirea contorului.' }),
    };
  }
};
