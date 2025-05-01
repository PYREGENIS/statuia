const { get, set } = require('@netlify/blobs');

exports.handler = async () => {
  try {
    const blob = await get('signatures');
    let count = blob ? JSON.parse(blob).count : 0;
    count += 1;
    await set('signatures', JSON.stringify({ count }));

    return {
      statusCode: 200,
      body: JSON.stringify({ count }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Eroare la actualizarea contorului.' }),
    };
  }
};
