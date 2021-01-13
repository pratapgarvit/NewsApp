import './News.css';

const News = (props) => {
    return (
        <div>
            <a className='card' onClick={() => window.location.href = props.news.url}>
                {props.news.description}
            </a>
        </div>
    )
};

export default News;