import React from 'react';

export const News = React.forwardRef(({ news }, ref) => (
	<div className="col-sm-6 my-3">
		<div ref={ele=>ref.push(ele)} className="card text-left">
			<img style={{minHeight:'160px'}} className="card-img-top" src={news.urlToImage} alt={news.title} />
			<div className="card-body p-2">
				<h5 className="card-title text-primary"> 
			   	<a href={news.url}> {news.title && news.title.length > 45 ? news.title.substr(0,45) + '...' : news.title} </a>
				</h5>
				<p className="card-text text-dark">{news.description && news.description.length > 100 && news.description.substr(0, 100) }<a href={news.url}>...more</a></p>
					<button disabled={true} className="d-block btn btn-light bg-white btn-sm py-0 ">
						{news.source.name}
					</button>
					<small className="d-block my-1">Published at {news.publishedAt}</small> 
				<a href={news.url} className="text-justify btn btn-secondary btn-sm btn-block ">Read More...</a>
			</div>
		</div> 
	</div>
));

const NewsList = React.forwardRef(({ allNews }, ref) => {
	return (
		<div className="row">
			{/* {allNews.length === 0 && <h5 className="text-warning">There is no news</h5>} */}
			{allNews && allNews.map((news) => <News ref={ref} key={Math.floor(Math.random() * 99999999)} news={news} />)}
		</div>
	);
});

export default NewsList;
