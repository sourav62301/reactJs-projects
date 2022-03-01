import React from 'react';

const NewsItem = (props)=>{

    let {title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
        <div className='my-2'>
            <div className="card" >
              <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                <span className="badge rounded-pill bg-danger" style={{left:'90%', zIndex:'1'}}>{source}</span>
              </div>
              <img src={!imageUrl?"https://c.ndtvimg.com/2022-01/a7b9fkao_rassie-van-der-dussen_625x300_21_January_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675":imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
              </div>
            </div>
        </div>
    )

}

export default NewsItem;