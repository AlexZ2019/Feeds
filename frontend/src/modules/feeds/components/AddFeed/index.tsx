import { useMutation, useQuery } from "@apollo/client";
import useModal from "../../../common/hooks/useModal";
import { Button, Modal } from "antd";
import { FC } from "react";
import EditFeedForm from "../EditFeedForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FEEDS_QUERY } from "../../graphql/queries/feeds";
import { ADD_FEED_MUTATION } from "../../graphql/mutaions/addFeed";
import { feedSchema } from "../../constants";
import { FormData } from "../../types";

const AddFeed: FC = () => {
  const [addFeed, { loading }] = useMutation(ADD_FEED_MUTATION);
  const { fetchMore } = useQuery(FEEDS_QUERY);
  const modal = useModal();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset
  } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(feedSchema),
  });

  const onCancel = () => {
    modal.hideModal();
    reset();
  }
  const onSubmit = async (formData: FormData) => {
    await addFeed({
      variables: { ...formData },
    });
    await fetchMore({});
    reset();
    modal.hideModal();
  }

  return (
    <div className="mb">
      <Button onClick={ modal.showModal }>Add Feed</Button>
      <Modal title="Add Feed" visible={ modal.isVisible } confirmLoading={ loading }
             onCancel={ onCancel } onOk={handleSubmit(onSubmit)}>
        <EditFeedForm errors={errors} control={control}/>
      </Modal>
    </div>

  )
};

export default AddFeed;
