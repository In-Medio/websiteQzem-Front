import React from 'react';
import Image from 'next/image';
import env from './../../config/environment';

function NewsCardContent({newsArticles}) {
    const {STRAPI_BASE_URL} = env;
    const loaderProp = ({src, width, quality}) => {
        return `${STRAPI_BASE_URL}${src}?w=${width}&q=${quality || 75}`;
    }

    function formatMyDate(value, locale = 'nl-BE') {
        return new Date(value).toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    }

    return (
        <section className="blog-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Onze Blog</span>
                    <h2>Nieuws en Inzichten</h2>
                    <p>Blijf op de hoogte van de laatste veranderingen.</p>
                </div>

                {newsArticles?.map(newsArticle => (
                    <div className="single-blog-post" key={newsArticle.id}>
                        <div className="blog-container">
                            <h3>
                                {newsArticle.attributes.title}
                            </h3>

                            {newsArticle.attributes.image?.data != null && (
                                <div className="blog-image">
                                    <Image
                                        width={newsArticle.attributes.image.data.attributes.width}
                                        height={newsArticle.attributes.image.data.attributes.height}
                                        src={newsArticle.attributes.image.data.attributes.url}
                                        alt={newsArticle.attributes.image.data.attributes.alternativeText}
                                        loader={loaderProp}/>
                                </div>
                            )}

                            <span
                                className="blog-author-date">Gepubliceerd op: {formatMyDate(newsArticle.attributes.releaseDate)} door: {newsArticle.attributes.author}</span>

                            <div className="blog-description"
                                 dangerouslySetInnerHTML={{__html: newsArticle.attributes.description}}></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default NewsCardContent;
