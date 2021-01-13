import News from '../News/News';

const NewsList = (props) => {
    return (
        <div>
            {props.newsArr.map((news) => {
                return <News key={Math.random()} news={news} />
            })}
        </div>
    );
}

export default NewsList;