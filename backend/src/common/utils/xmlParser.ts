// eslint-disable-next-line @typescript-eslint/no-var-requires
const convert = require('xml-js');
export const convertXML = (xml: string) => {
  const feeds = convert.xml2js(xml, { compact: true });
  return feeds.rss.channel.item.map((feed) => {
    return {
      title: feed.title._text,
      link: feed.link._text,
      description: feed.description._text,
      author: feed['dc:creator']._text,
      date: feed.pubDate._text,
      imageUrl: feed['media:content']
        ? feed['media:content']._attributes.url
        : '',
    };
  });
};
