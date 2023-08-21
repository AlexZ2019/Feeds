import { useLazyQuery } from "@apollo/client";
import { FEEDS_QUERY } from "../../graphql/queries/feeds";
import { SetStateAction, useEffect, useState } from "react";
import { Alert, Row } from "antd";
import { IFeed } from "../../types";
import Spiner from "../../../common/components/Spinner";
import DefaultPagination from "../../../common/components/DefaultPagination";
import styles from './index.module.css';
import Feed from "../../components/Feed";
import DefaultSearch from "../../../common/components/Search";

const Feeds = () => {
  const [searchValue, setSearchValue] = useState("");
  const [getFeeds, { loading, data }] = useLazyQuery(FEEDS_QUERY);

  useEffect(() => {
    getFeeds();
  }, []);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  const onChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
  }
  const onSearch = (value: string) => {
    getFeeds({ variables: { search: value } });
  }
  return (
    <div className="page">
      <DefaultSearch onSearch={onSearch} placeholder="Search Feeds" searchValue={searchValue} onChange={onChange} />
      {loading && <Spiner spinnerType='main' customStyles=""/>}
      <Row className={styles.items} >
        {data?.getFeeds?.feeds?.length
          && data?.getFeeds?.feeds.map((feed: IFeed) => {
            return <Feed id={feed.id} title={feed.title} author={feed.author}
                         description={feed.description} key={feed.id} date={feed.date}
                         imageUrl={feed.imageUrl} link={feed.link} onClick={openInNewTab}
            />
          })
        }
      </Row>
      <DefaultPagination total={data?.getFeeds?.total} value={searchValue} getNewPage={getFeeds}/>
    </div>
  );
};

export default Feeds;
