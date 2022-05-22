import { useCallback, useEffect, useRef } from 'react';
import { useSerchQueryContext } from '../../context/serchQueryContext';
import { useRouter } from 'next/router';

const useSearchInput = () => {
  const { serchQuery, setSerchQuery } = useSerchQueryContext();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>();

  const clickHandler = useCallback(() => {
    if (inputRef?.current?.value) {
      setSerchQuery(inputRef.current.value);
      localStorage.setItem('query', inputRef.current.value);
    } else {
      setSerchQuery('');
    }
    router.push('/');
  }, [router]);

  useEffect(() => {
    //render後にrefにアクセス setrchQuery表示用
    inputRef.current.value = serchQuery;
  }, [serchQuery]);

  return { inputRef, clickHandler };
};

export default useSearchInput;
