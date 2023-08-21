import { useMutation } from "@apollo/client";
import { DELETE_FEED_MUTATION } from "../../graphql/mutaions/deleteFeed";
import useModal from "../../../common/hooks/useModal";
import { DeleteOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { FC } from "react";

type Props = {
  id: number
}
const DeleteFeed: FC<Props> = ({ id }) => {
  const [deleteFeed, { loading }] = useMutation(DELETE_FEED_MUTATION);
  const modalDelete = useModal();
  const onDelete = async (id: number) => {
    await deleteFeed({
      variables: { id },
      onCompleted: () => {
        modalDelete.hideModal();
      },
      update(cache) {
        const normalizedId = cache.identify(
          { id, __typename: 'FeedModel' });
        cache.evict({ id: normalizedId });
        cache.gc();
      },
    })
  }

  return (
    <div className="inlineEl">
      <DeleteOutlined onClick={ modalDelete.showModal }/>
      <Modal title="Delete Feed" visible={ modalDelete.isVisible } confirmLoading={ loading }
             onOk={ () => onDelete(id) } onCancel={ modalDelete.hideModal }>
        <p>Delete Feed?</p>
      </Modal>
    </div>

  )
};

export default DeleteFeed;
