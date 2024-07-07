import { useState } from 'react';

const DEFAULT_REQ_METHOD = 'GET';
export const POST_REQ_METHOD = 'POST';
export const PUT_REQ_METHOD = 'PUT';
const DEFAULT_REQ_PARAMS = {};

const useMakeRequest = () => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async (url, method = DEFAULT_REQ_METHOD, body = DEFAULT_REQ_PARAMS) => {
    let reqParams = {
      method: method,
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (method !== DEFAULT_REQ_METHOD) {
      reqParams = {
        ...reqParams,
        body: JSON.stringify(body),
      };
    }

    try {
      setIsLoading(() => true);
      const reqRawResult = await fetch(url, reqParams);

      if (!reqRawResult.ok) {
        throw new Error(JSON.stringify(await reqRawResult.json()));
      }

      const responseData = await reqRawResult.json();
      setIsLoading(() => false);
      setData(() => responseData);
    } catch (errorData) {
      setIsLoading(() => false);
      const { message: caughtError } = JSON.parse(errorData.message);
      setError(() => caughtError);
    }
  };

  return {
    makeRequest,
    data,
    error,
    isLoading,
  };
};

export default useMakeRequest;
