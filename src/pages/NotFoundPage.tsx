import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Center, Page, Title } from '../ui/components';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/');
  });

  return (
    <Page>
      <Center>
        <Title $textAlign="center">Not Found, redirecting...</Title>
      </Center>
    </Page>
  );
};

export { NotFoundPage };
