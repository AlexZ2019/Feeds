import DefaultSearch from "../../../common/components/Search";
import { SetStateAction, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { FEEDS_QUERY } from "../../../feeds/graphql/queries/feeds";
import { Alert, Row } from "antd";
import { IFeed } from "../../../feeds/types";
import Feed from "../../../feeds/components/Feed";
import Spiner from "../../../common/components/Spinner";
import DefaultPagination from "../../../common/components/DefaultPagination";
import DeleteFeed from "../../../feeds/components/DeleteFeed";
import EditFeed from "../../../feeds/components/EditFeed";
import AddFeed from "../../../feeds/components/AddFeed";
import styles from "./index.module.css"

const AdminPanel = () => {
  const [searchValue, setSearchValue] = useState("");
  const [getFeeds, { loading, data }] = useLazyQuery(FEEDS_QUERY);

  useEffect(() => {
    getFeeds();
  }, []);

  const onChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
  }

  const onSearch = (value: string) => {
    getFeeds({ variables: { search: value } });
  }

  const openInNewTab = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="page">
      <DefaultSearch onSearch={ onSearch } placeholder="Search Feeds" searchValue={ searchValue }
                     onChange={ onChange }/>
      <AddFeed />
      <Row className={ styles.items }>
        { data?.getFeeds?.feeds?.length
          && data?.getFeeds?.feeds.map((feed: IFeed) => {
            return (
              <Feed id={ feed.id } title={ feed.title } author={ feed.author }
                    description={ feed.description } key={ feed.id } date={ feed.date }
                    imageUrl={ feed.imageUrl } link={ feed.link } onClick={ openInNewTab }
                    renderProps={() => <div className={styles.manageEl}>
                      <EditFeed {...feed} />
                      <DeleteFeed id={feed.id}/>
                    </div> }
              />
            )
          })
        }
        { loading && <Spiner spinnerType='main' customStyles=""/> }
      </Row>
      <DefaultPagination total={ data?.getFeeds?.total } value={ searchValue } getNewPage={ getFeeds }/>
    </div>
  )
}

export default AdminPanel;
