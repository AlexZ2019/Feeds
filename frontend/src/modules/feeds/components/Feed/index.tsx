import { IFeed } from "../../types";
import { Button, Card, Col, Image } from "antd";
import Meta from "antd/lib/card/Meta";
import { FC } from "react";
import styles from "./index.module.css"
import defaultImg from "../../assets/images/new_default.jpg";

type Props = IFeed & { renderProps?: () => JSX.Element }

const Feed: FC<Props> = ({ renderProps, ...feed }) => {
  const date = feed.date ? new Date(feed.date).toDateString() : null;
  const description = (
    <div>
      <p>{ feed.description }</p>
      <p>Author: { feed.author }</p>
      {date && <p>Published: { date }</p>}
      <Button type="link" onClick={ () => feed.onClick(feed.link) }>Read More</Button>
    </div>
  );

  return (
    <Col className="mb" span={ 12 } offset={ 6 } key={ feed.id }>
      { renderProps && renderProps() }
      <Card>
        <Meta className={styles.cardMeta} avatar={ <Image preview={ false }
                              className={`${styles.feedImg} mb`}
                              onClick={ () => feed.onClick(feed.link) }
                              width={ 150 }
                              src={ feed?.imageUrl || defaultImg }
                              alt="news image"
                      /> }
              title={ feed.title } description={description}/>
      </Card>
    </Col>
  )
}

export default Feed;
