'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Todo salió bien :)',
        input: event,
      },
      null,
      2
    ),
  };
};
