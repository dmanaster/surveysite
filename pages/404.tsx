import NotFound from '../components/notFound';

export default function Custom404(props: {statusCode: number}): JSX.Element {
  return <NotFound />;
}
