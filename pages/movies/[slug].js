import {useRouter} from "next/router";
import PageLayout from "../../components/layouts/pageLayout";
import SectionLayout from "../../components/layouts/sectionLayout";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Movie = () => {
  const router = useRouter()
  const {slug} = router.query
  const [movie, setMovie] = useState({})

  useEffect(() => {
    if (!slug) return null
    axios.get(`https://pr-movies.herokuapp.com/api/movies/${slug}`)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error.response.data))
  }, [slug])

  if (!movie) return null

  return (
    <PageLayout>

      <SectionLayout className={'container px-8 flex-1 bg-blue-darkest/50 rounded-xl'}>
        <div className={'flex flex-col'}>
          <h1 className={'mb-8 text-center text-grey text-5xl'}>{movie.title}</h1>
          <div className={'mb-8 relative flex justify-center flex-1 h-2/3'}>
            <img src={movie.image} alt={''} className={'h-[450px]'}/>
          </div>
          <p className={'text-grey text-xl text-justify'}>
            {movie.content}
          </p>
        </div>

      </SectionLayout>
    </PageLayout>
  )
}

export default Movie;
