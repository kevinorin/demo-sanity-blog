import { GetStaticProps } from 'next';
import Header from '../../components/Header';
import { sanityClient, urlFor } from '../../sanity';
import { Post } from "../../typings";

interface Props {
    post: Post;
}

function Post({ post }: Props) {
    console.log(post);

    return (
        <main>
            <Header />
        </main>
    );
}

export default Post;

// 1. Tell next JS which posts exist using special function called getStaticPaths
export const getStaticPaths = async () => {
 const query = `*[_type == "post"]{
    _id,
    slug {
        current
    }
  }`;

  // fetch paths to next.js with an array where each object has a key called params with path inside of it
  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
        slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

// 2. Now we tell Next.js when it trys to prepare the page, how to use the slug/id to fetch that post information with getStaticProps
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query =`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image
        },
        'comments': *[
            _type == "comment" &&
            post._ref == ^._id &&
            approved == true],
        description,
        mainImage,
        slug,
        body
      }`

      const post = await sanityClient.fetch(query, {
        slug: params?.slug,
      });

      if (!post) {
        return {
            notFound: true
        }
      }

      return {
        props: {
            post,
        }
      }
};