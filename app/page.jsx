import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Discover, Create & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center">AI-Powered Promts</span>
            </h1>
            <p className="desc text-center">
                Cyclopse is an open source AI-Powered Prompts is a platform that allows users to discover, create and share creative prompts.
            </p>

            <Feed />
        </section>
    )
}

export default Home;
