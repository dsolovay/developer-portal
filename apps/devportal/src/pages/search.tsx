import Container from '@/../../packages/ui/components/common/Container';
import { getPageInfo } from '@/src/common/page-info';
import SearchResults from '@/src/components/integrations/sitecore-search/SearchResults';
import { PageInfo } from '@/src/interfaces/page-info';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import VerticalGroup from 'ui/components/common/VerticalGroup';
import Layout from 'ui/layouts/Layout';

interface SearchPageProps {
  pageInfo: PageInfo;
}

export const getServerSideProps = async () => {
  const pageInfo = await getPageInfo('search');

  return {
    props: {
      pageInfo,
    },
  };
};

const Search: NextPage<SearchPageProps> = ({ pageInfo }) => {
  const router = useRouter();
  const query = router?.query['q'] ?? '';
  const currentPage = router?.query['p'] ?? '1';

  return (
    <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
      <VerticalGroup>
        <Container>
          <SearchResults rfkId="rfkid_7" initialKeyphrase={query} currentPage={currentPage} />
        </Container>
      </VerticalGroup>
    </Layout>
  );
};

export default Search;
