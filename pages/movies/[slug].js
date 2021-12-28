import {useRouter} from "next/router";
import PageLayout from "../../components/layouts/pageLayout";
import SectionLayout from "../../components/layouts/sectionLayout";

const Movie = () => {
  const router = useRouter()
  const {slug} = router.query

  if (!slug) return null

  return (
    <PageLayout>
      <SectionLayout>
        Movie
      </SectionLayout>
    </PageLayout>
  )
}

export default Movie;
