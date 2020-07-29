import styled from 'styled-components';
import { useCallback, useState } from 'react';
import Link from 'next/link';

import { MainLayout } from '../layouts/MainLayout';

const Input = styled.input`
  border: 1px solid #343434;
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  color: #343434;
`;

export default function PostsPage() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  return (
    <>
      <MainLayout title="Posts page | NextJS">
        <h1>Posts</h1>
        <p>
          <label>Enter post number:</label>
          <Input type="text" value={inputValue} onChange={handleInputChange} />
        </p>
        <Link href={`/post/${inputValue}`}>
          <button type="button">Jump!</button>
        </Link>
      </MainLayout>
    </>
  );
}
