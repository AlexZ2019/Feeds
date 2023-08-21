import { useMutation } from "@apollo/client";
import useModal from "../../../common/hooks/useModal";
import { EditOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { EDIT_FEED_MUTATION } from "../../graphql/mutaions/editFeed";
import { FC } from "react";
import EditFeedForm from "../EditFeedForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FEEDS_QUERY } from "../../graphql/queries/feeds";
import { feedSchema } from "../../constants";
import { FormData } from "../../types";
import dayjs from 'dayjs';
import moment from "moment/moment";

type Props = {
  id?: number;
} & FormData

const EditFeed: FC<Props> = ({...feed}) => {
  const [editFeed, { loading }] = useMutation(EDIT_FEED_MUTATION);
  const modal = useModal();
  const {
    handleSubmit,
    formState: { errors },
    control
  } = useForm<any>({
    mode: 'onTouched',
    resolver: yupResolver(feedSchema),
    defaultValues: {
      title: feed.title,
      description: feed.description || "",
      author: feed.author || "",
      link: feed.link,
      imageUrl: feed.imageUrl || "",
      date: feed.date ? moment(feed.date) : moment(),
    }
  });
  const onSubmit = async (formData: FormData) => {
    await editFeed({
      variables: { ...formData, id: feed.id },
      update(cache) {
        const editedFeed = { ...formData, id: feed.id };
        const existingFeeds: any = cache.readQuery({ query: FEEDS_QUERY });
        const fData = {
          getFeeds: {
            ...existingFeeds.getFeeds,
            feeds: existingFeeds.getFeeds.feeds.map((feedItem: any) => {
              if (feedItem.id === feed.id) {
                return {...feedItem, ...editedFeed}
              }
              return feedItem;
            })
          },
        }
        cache.writeQuery({
          query: FEEDS_QUERY,
          data: fData
        });
      }
    })
    modal.hideModal();
  }

  return (
    <div className="inlineEl">
      <EditOutlined onClick={ modal.showModal }/>
      <Modal title="Edit Feed" visible={ modal.isVisible } confirmLoading={ loading }
             onCancel={ modal.hideModal } onOk={handleSubmit(onSubmit)}>
        <EditFeedForm errors={errors} control={control}/>
      </Modal>
    </div>

  )
};

export default EditFeed;
